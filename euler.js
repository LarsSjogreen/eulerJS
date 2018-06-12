function euler() {

};

euler.prototype.euler1 = function(max, mul1, mul2) {
	var sum = 0;

	for(var i = 0;i<max;i++) {
		if (((i % mul1) == 0)||((i % mul2) == 0)) {
			sum += i;
		}
	}

	return sum;
};

euler.prototype.euler2 = function(max) {
	var sum = 0;
	var fibLast = 1;
	var fibCurr = 2;
	var fibNext = 0;

	while(fibNext < max) {
		if ((fibCurr % 2) == 0) {
			sum += fibCurr;
		}
		fibNext = fibLast + fibCurr;
		fibLast = fibCurr;
		fibCurr = fibNext;
	}

	return sum;
}

euler.prototype.euler3 = function(number) {
	return 2;	
}

euler.prototype.euler4 = function(digits) {
	return 2;	
}

euler.prototype.euler5 = function(max) {
	var toBeKept = [];
	var toBeAdded = [];

	var isPrime = function(number) {
		for (var i=2;i<number;i++) {
			if (number % i === 0) return false;
		}
		return number !== 1;
	}

	for (var i = max;i>0;i--) {
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

	return toBeKept.reduce(function (a,b) { return a*b; });
}

euler.prototype.euler6 = function(upto) {
	return 2;
}

euler.prototype.euler7 = function(primenum) {
	return 2;
}

/* ---- */

euler.prototype.euler22 = function(name) {
	var namevalue = function(name) {
		var namesum = 0;
		for (var i=0;i<name.length;i++) {
			namesum += name[i].charCodeAt(0);
		};
		return namesum;
	};

	var fs = require('fs');

	let nameArray = [];
	nameArray = fs.readFileSync('./resources/p022_names.txt').toString().split("\n");
	nameArray.sort();
	let totalSum = 0;
	for(var i=0;i<nameArray.length;i++) {
		totalSum += namevalue(nameArray[i]) * (i+1);
	}
	return totalSum;
}

module.exports = euler;