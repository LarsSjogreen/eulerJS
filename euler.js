const { getPrimes } = require('./helpers.js');
function euler() { }

euler.prototype.euler1 = function (max, mul1, mul2) {
  var sum = 0;

  for (var i = 0; i < max; i++) {
    if (i % mul1 == 0 || i % mul2 == 0) {
      sum += i;
    }
  }

  return sum;
};

euler.prototype.euler2 = function (max) {
  var sum = 0;
  var fibLast = 1;
  var fibCurr = 2;
  var fibNext = 0;

  while (fibNext < max) {
    if (fibCurr % 2 == 0) {
      sum += fibCurr;
    }
    fibNext = fibLast + fibCurr;
    fibLast = fibCurr;
    fibCurr = fibNext;
  }

  return sum;
};

euler.prototype.euler3 = function (number) {
  const primesToNumber = getPrimes(15000); // This is not good
  const isDivisibleBy = (num, prime) => { return ((num % prime) === 0) };
  const factors = [];
  let primeCounter = 1;
  let restNumber = number;
  while (restNumber !== 1) {
    if (isDivisibleBy(restNumber, primesToNumber[primeCounter])) {
      restNumber = restNumber / primesToNumber[primeCounter];
      factors.push(primesToNumber[primeCounter]);
      if (restNumber === 1) {
        return [...factors].pop();
      }
    } else {
      primeCounter = primeCounter + 1;
    }
  }
  return [...factors].pop();
};

euler.prototype.euler4 = function (digits) {
  var isPalindromic = number =>
    number.toString() ===
    number
      .toString()
      .split("")
      .reverse()
      .join("");
  var maxnum = parseInt("9".repeat(digits * 2));
  var startnum = parseInt("9".repeat(digits));

  var stopSearching = false;

  for (var i = maxnum; i > 0; i--) {
    for (var j = startnum; j > 0; j--) {
      if (i % j === 0) {
        let otherTerm = i / j;
        if (otherTerm > startnum) {
          continue;
        } else {
          if (isPalindromic(i)) {
            return i;
          }
        }
      }
    }
  }
  return 2;
};

euler.prototype.euler5 = function (max) {
  var toBeKept = [];
  var toBeAdded = [];

  var isPrime = function (number) {
    for (var i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }
    return number !== 1;
  };

  for (var i = max; i > 0; i--) {
    if (isPrime(i)) {
      toBeKept.push(i);
    }
  }

  toBeKept.forEach(function (num) {
    powed = 2;
    while (Math.pow(num, powed) <= max) {
      toBeAdded.push(num);
      powed++;
    }
  });
  toBeKept = toBeKept.concat(toBeAdded);

  return toBeKept.reduce(function (a, b) {
    return a * b;
  });
};

euler.prototype.euler6 = function (upto) {
  return 2;
};

euler.prototype.euler7 = function (primenumlimit) {
  var isPrimeNaive = function (number) {
    for (var i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }
    return number !== 1;
  };

  var isPrimeAKS = function (number) {
    if (number <= 1) return false;
    if (number <= 3) return true;

    if (number % 2 === 0 || number % 3 === 0) {
      return false;
    }

    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return false;
      }
    }

    return true;
  };

  var primecount = 0;
  var lastprime = 0;
  for (var i = 1; i < 1000000; i++) {
    if (isPrimeAKS(i)) {
      primecount++;
      lastprime = i;
    }
    if (primecount === primenumlimit) {
      break;
    }
  }

  return lastprime;
};

euler.prototype.euler8 = function (numberOfDigits) {
  var calcProduct = function (stringpart) {
    var nuArr = stringpart.split("");
    return nuArr.reduce(function (a, b) {
      return a * b;
    });
  };
  var numstr =
    "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";
  var highest = 0;

  for (var i = 0; i < numstr.length - numberOfDigits; i++) {
    var newSnip = numstr.substr(i, numberOfDigits);
    var newProduct = calcProduct(newSnip);
    if (newProduct > highest) {
      highest = newProduct;
    }
  }
  return highest;
};

euler.prototype.euler9 = function (limiter) {
  var checkTriplet = function (a, b, c, limit) {
    if (a < b && b < c) {
      if (a + b + c === limit) {
        if (a ** 2 + b ** 2 === c ** 2) {
          return true;
        }
      }
    }
    return false;
  };

  for (var i = 1; i < limiter; i++) {
    for (var j = 2; j < limiter; j++) {
      for (var k = 3; k < limiter; k++) {
        if (checkTriplet(i, j, k, limiter)) {
          return i * j * k;
        }
      }
    }
  }
  return 2;
};

euler.prototype.euler10 = function (limit) {
  return 2;
};

euler.prototype.euler11 = function () {
  const grid =
    [[08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08],
    [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00],
    [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65],
    [52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91],
    [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
    [24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
    [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
    [67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21],
    [24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
    [21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95],
    [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92],
    [16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57],
    [86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
    [19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40],
    [04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
    [88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
    [04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36],
    [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16],
    [20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54],
    [01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48]];

  const searchRow = (grid, rowNum) => {
    const row = grid[rowNum];
    let highestIndex = null;
    let highestValue = 0;
    for (var i = 0; i < row.length - 4; i++) {
      const aValue = row[i] * row[i + 1] * row[i + 2] * row[i + 3];
      if (aValue > highestValue) {
        highestValue = aValue;
        highestIndex = i;
      }
    }
    return { highestValue, highestIndex };
  }

  const searchRows = grid => {
    let bestStats = { highestValue: 0, highestIndex: null };
    for (var j = 0; j < grid.length; j++) {
      const rowStats = searchRow(grid, j);
      if (rowStats.highestValue > bestStats.highestValue) {
        bestStats = rowStats;
      }
    }
    return bestStats.highestValue;
  }

  const searchColumn = (grid, column) => {
    return 0;
  }

  const searchColumns = grid => {
    return 0;
  }

  const searchDiagonal = (grid, row, column) => {
    return 0;
  }

  const searchDiagonals = grid => {
    return 0;
  }

  return searchRows(grid);
};

euler.prototype.euler14 = function (limit) {
  return 10;
};

/* ---- */

euler.prototype.euler22 = function (name) {
  var namevalue = function (name) {
    var namesum = 0;
    /* Below you can find an ugly-ass hack. I couldn't be bothered to strip the quote marks from names
       during import so instead I just skip them on char value calculation instead. Sacrificing memory
       space for speed (and also enabling myself to be lazy, which is a programmer virtue, right?). */
    for (var i = 1; i < name.length - 1; i++) {
      namesum += name[i].charCodeAt(0) - 64;
    }
    return namesum;
  };

  var fs = require("fs");

  let nameArray = [];
  nameArray = fs
    .readFileSync("./resources/p022_names.txt")
    .toString()
    .split(",");
  nameArray.sort();
  let totalSum = 0;
  for (var i = 0; i < nameArray.length; i++) {
    totalSum += namevalue(nameArray[i]) * (i + 1);
  }
  return totalSum;
};

module.exports = euler;
