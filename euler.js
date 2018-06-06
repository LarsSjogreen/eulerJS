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
	return 2;	
}

euler.prototype.euler6 = function(upto) {
	return 2;
}

module.exports = euler;