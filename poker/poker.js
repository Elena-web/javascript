/* eslint-disable no-restricted-globals */
//
// This is only a SKELETON file for the 'Poker' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
// Функция для сравнения рук
const compareHands = (hand1, hand2) => {
  // Получаю ранги обеих рук
  const rank1 = getHandRank(hand1);
  const rank2 = getHandRank(hand2);
  // Если обе руки имеют Straight
  if (rank1 === rank2 && rank1 === 5) {
    // Получаю значения первых карт в каждой руке
    for (let i = 4; i >= 0; i -= 1) {
      if (rank1[i] < rank2[i]) {
        return 1;
      } if (rank1[i] > rank2[i]) {
        return -1;
      }
    }
    // Добавляем проверку на туз со значением 1
    const hasStraightWithAce1 = hand1.includes('AH') && hand1.includes('2');
    const hasStraightWithAce2 = hand2.includes('AH') && hand2.includes('2');

    if (hasStraightWithAce1 && !hasStraightWithAce2) {
      return -1;
    } if (!hasStraightWithAce1 && hasStraightWithAce2) {
      return 1;
    }
  }
  if (rank1 === rank2 && rank1 === 3) {
    const pairRanks1 = getPairRanks(hand1);
    const pairRanks2 = getPairRanks(hand2);
    if (pairRanks1[0] > pairRanks2[0]) {
      return 1;
    } if (pairRanks1[0] < pairRanks2[0]) {
      return -1;
    } if (pairRanks1[1] < pairRanks2[1]) {
      return 1;
    } if (pairRanks1[1] > pairRanks2[1]) {
      return -1;
    }
  }

  if (rank1 !== rank2) {
    return rank1 - rank2;
  }

  const cards1 = hand1.split(' ');
  const cards2 = hand2.split(' ');

  const sortedCards1 = cards1.sort((a, b) => ranks.indexOf(a.slice(0, -1))
  - ranks.indexOf(b.slice(0, -1)));
  const sortedCards2 = cards2.sort((a, b) => ranks.indexOf(a.slice(0, -1))
  - ranks.indexOf(b.slice(0, -1)));

  for (let i = 0; i < sortedCards1.length; i += 1) {
    const rankIndex1 = ranks.indexOf(sortedCards1[i].slice(0, -1));
    const rankIndex2 = ranks.indexOf(sortedCards2[i].slice(0, -1));

    if (rankIndex1 !== rankIndex2) {
      return rankIndex1 - rankIndex2;
    }
  }

  return 0;
};

// Получаю ранг руки
const getHandRank = (hand) => {
  // Разделяю строку hand на отдельные карты
  const cards = hand.split(' ');
  // Создаю новый массив cardRanks, который содержит только ранги карт
  const cardRanks = cards.map((card) => card.slice(0, -1));
  // Создаю новый массив cardSuits, который содержит только масти карт
  const cardSuits = cards.map((card) => card.slice(-1));
  // Создаю объект countRanks, который будет содержать количество каждого ранга карт
  const countRanks = cardRanks.reduce((acc, rank) => {
    acc[rank] = (acc[rank] || 0) + 1;
    return acc;
  }, {});
  // Создаю массив rankCounts, который содержит
  // только значения количества рангов карт из объекта countRanks.
  const rankCounts = Object.values(countRanks);
  // Нахожу максимальное значение количества рангов карт
  const maxCount = Math.max(...rankCounts);
  // Проверяю на наличие Flush
  const isFlush = cardSuits.every((suit) => suit === cardSuits[0]);
  // Проверяю на наличие Straight
  const isStraight = hasStraight(hand);

  let handRank = 0;

  if (isFlush && isStraight) {
    handRank = 9; // Straight Flush
  } else if (maxCount === 4) {
    handRank = 8; // Four of a Kind
  } else if (maxCount === 3 && rankCounts.includes(2)) {
    handRank = 7; // Full House
  } else if (isFlush) {
    handRank = 6; // Flush
  } else if (isStraight) {
    handRank = 5; // Straight
  } else if (maxCount === 3) {
    handRank = 4; // Three of a Kind
  } else if (maxCount === 2
    && rankCounts.filter((count) => count === 2).length === 2) {
    handRank = 3; // Two Pairs
  } else if (rankCounts.includes(2)) {
    handRank = 2; // One Pair
  }

  return handRank;
};

// Преобразую символы рангов карт в числовое значение
const getNumericRank = (rank) => {
  switch (rank) {
    case '2':
      return 2;
    case '3':
      return 3;
    case '4':
      return 4;
    case '5':
      return 5;
    case '6':
      return 6;
    case '7':
      return 7;
    case '8':
      return 8;
    case '9':
      return 9;
    case '10':
      return 10;
    case 'J':
      return 11;
    case 'Q':
      return 12;
    case 'K':
      return 13;
    case 'A':
      return 14;
    default:
      return 0;
  }
};

// Функция вычисляет Straight
const hasStraight = (hand) => {
  // Создаю массив с картами одной руки
  const cards = hand.split(' ');
  // Получаю числовые значения карт
  const cardRanks = cards.map((card) => {
    const rank = card.slice(0, -1);
    return isNaN(Number(rank)) ? getNumericRank(rank) : Number(rank);
  });
  // Сортирую в порядке возрастания
  const sortedRanks = cardRanks.sort((a, b) => a - b);
  // Проверяю образуется ли Straight
  for (let i = 0; i < sortedRanks.length - 4; i += 1) {
    let isStraight = true;
    for (let j = i; j < i + 4; j += 1) {
      if (sortedRanks[j + 1] - sortedRanks[j] !== 1) {
        isStraight = false;
        break;
      }
    }
    if (isStraight) {
      return true;
    }
  }
  // Проверяю на straight с Тузом в начале
  if (sortedRanks[0] === 2 && sortedRanks[1] === 3
    && sortedRanks[2] === 4 && sortedRanks[3] === 5
    && sortedRanks[4] === 14) {
    sortedRanks[4] = 1; // Измененяю значения туза на 1
    return true;
  }
  return false;
};

// Функция вычисляет пару с самым высоким рангом в руке
const getPairRanks = (hand) => {
  // Создаю массив с картами
  const cards = hand.split(' ');
  // Создаю массив с рангами карт
  const cardRanks = cards.map((card) => card.slice(0, -1));
  // Создаю пустой объект countRanks, который будет использоваться
  // для подсчета количества каждого ранга карт.
  const countRanks = {};
  // Создаю переменную для хранения наивысшего ранга пары карт
  let highestPair = '';
  for (let i = 0; i < cardRanks.length; i += 1) {
    // Сохраняю текущий ранг карты в переменную rank
    const rank = cardRanks[i];
    // Если такой ранг уже существует, то увеличиваю на 1
    if (countRanks[rank]) {
      countRanks[rank] += 1;
    } else {
      countRanks[rank] = 1;
    }
    // Проверяю является ли текущий ранг парой и выше ли он highestPair
    if (countRanks[rank] === 2 && rank > highestPair) {
      highestPair = rank;
    }
  }

  return highestPair;
};

export const bestHands = (hands) => {
  // создаю массив для хранения выигрышной руки
  const winningHands = [];
  // создаю переменную которая будет отслеживать самый высокий ранг
  let maxRank = -1;
  // перебираю каждую руку
  for (let i = 0; i < hands.length; i += 1) {
    // текущая рука
    const currentHand = hands[i];
    // получаю ранг текущей руки
    const currentRank = getHandRank(currentHand);
    // если текущий ранг выше maxRank
    // то очищаю массив winningHands и добавляю текущую руку
    if (currentRank > maxRank) {
      winningHands.length = 0;
      winningHands.push(currentHand);
      maxRank = currentRank;
    } else if (currentRank === maxRank) {
      const compareResult = compareHands(currentHand, winningHands[0]);
      if (compareResult > 0) {
        winningHands.length = 0;
        winningHands.push(currentHand);
      } else if (compareResult === 0) {
        winningHands.push(currentHand);
      }
    }
  }
  return winningHands;
};
