module.exports = {
    // Borrowed from MDN docs, here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
    makeRangeIterator: (start = 0, end = Infinity, step = 1) => {
        let nextIndex = start;
        let iterationCount = 0;

        const rangeIterator = {
            next: function () {
                let result;
                if (nextIndex < end) {
                    result = { value: nextIndex, done: false }
                    nextIndex += step;
                    iterationCount++;
                    return result;
                }
                return { value: iterationCount, done: true }
            }
        };
        return rangeIterator;
    },
    isPrime: (number) => {
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
    },
    getPrimes: (upTo) => {
        const it = module.exports.makeRangeIterator(1, upTo, 1);
        const primesUpTo = [];
        let result = it.next();
        while (!result.done) {
            primesUpTo.push(result.value);
            result = it.next();
        }
        primesUpTo.push(result.value);
        return primesUpTo;
    }
}