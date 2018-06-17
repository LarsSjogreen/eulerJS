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

euler.prototype.euler7 = function(primenumlimit) {
	var isPrimeNaive = function(number) {
		for (var i=2;i<number;i++) {
			if (number % i === 0) return false;
		}
		return number !== 1;
	}

	var isPrimeAKS = function(number) {
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
	}

	var primecount = 0;
	var lastprime = 0;
	for (var i=1;i<1000000;i++) {
		if (isPrimeAKS(i)) {
			primecount++;
			lastprime = i;
		}
		if (primecount === primenumlimit) {
			break;
		}
	}

	return lastprime;
}

euler.prototype.euler8 = function(numberOfDigits) {
	var calcProduct = function(stringpart) {
		var nuArr = stringpart.split('');
		return nuArr.reduce(function(a,b){return a*b;});
	}
	var numstr = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";
	var highest = 0;

	for (var i=0;i<numstr.length-numberOfDigits;i++) {
		var newSnip = numstr.substr(i,numberOfDigits);
		var newProduct = calcProduct(newSnip);
		if (newProduct > highest) {
			highest = newProduct;
		}
	}
	return highest;
}

euler.prototype.euler9 = function(limiter) {
	var checkTriplet = function(a,b,c, limit) {
		if ((a<b)&&(b<c)) {
			if ((a+b+c) === limit) {
				if ((a**2+b**2) === c**2) {
					return true;
				}	
			}
		}
		return false;
	}

	for (var i = 1; i<limiter;i++) {
		for (var j = 2; j<limiter;j++) {
			for (var k = 3; k<limiter;k++) {
				if (checkTriplet(i,j,k,limiter)) {
					return i*j*k;
				}
			}
		}	
	}
	return 2;
}

/* ---- */

euler.prototype.euler22 = function(name) {
	var namevalue = function(name) {
		var namesum = 0;
		/* Below you can find an ugly-ass hack. I couldn't be bothered to strip the quote marks from names
		   during import so instead I just skip them on char value calculation instead. Sacrificing memory
		   space for speed (and also enabling myself to be lazy, which is a programmer virtue, right?). */
		for (var i=1;i<name.length-1;i++) {
			namesum += name[i].charCodeAt(0)-64;
		};
		return namesum;
	};

	var fs = require('fs');

	let nameArray = [];
	nameArray = fs.readFileSync('./resources/p022_names.txt').toString().split(',');
	nameArray.sort();
	let totalSum = 0;
	for(var i=0;i<nameArray.length;i++) {
		totalSum += namevalue(nameArray[i]) * (i+1);
	}
	return totalSum;
}

module.exports = euler;