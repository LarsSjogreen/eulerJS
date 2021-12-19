var assert = require("assert");
var eu = require("../euler.js");

var euler = new eu();

describe("Euler", function () {
  describe("euler1", function () {
    it("should run euler.euler1(10,3,5) and return 23", function () {
      assert.equal(23, euler.euler1(10, 3, 5));
    });
    it("should run euler.euler1(1000,3,5) and return 233168", function () {
      assert.equal(233168, euler.euler1(1000, 3, 5));
    });
  });

  describe("euler2", function () {
    it("should run euler.euler2(100) and return 44", function () {
      assert.equal(44, euler.euler2(100));
    });
    it("should run euler.euler2(4000000) and return 4613732", function () {
      assert.equal(4613732, euler.euler2(4000000));
    });
  });

  describe("euler3", function () {
    it("should run euler.euler3(13195) and return 29", function () {
      assert.equal(29, euler.euler3(13195));
    });
    it("should run euler.euler3(600851475143) and return 6857", function () {
      assert.equal(6857, euler.euler3(600851475143));
    });
  });

  describe("euler4", function () {
    it("should run euler.euler4(2) and return 9009", function () {
      assert.equal(9009, euler.euler4(2));
    });
    it("should run euler.euler4(3) and return 906609", function () {
      assert.equal(906609, euler.euler4(3));
    });
  });

  describe("euler5", function () {
    it("should run euler.euler5(10) and return 2520", function () {
      assert.equal(2520, euler.euler5(10));
    });
    it("should run euler.euler5(20) and return 232792560", function () {
      assert.equal(232792560, euler.euler5(20));
    });
  });

  describe("euler6", function () {
    it("should run euler.euler6(10) and return 2640", function () {
      assert.equal(2640, euler.euler6(10));
    });
    it("should run euler.euler6(4) and return 70", function () {
      assert.equal(70, euler.euler6(4));
    });
  });

  describe("euler7", function () {
    it("should run euler.euler7(6) and return 13", function () {
      assert.equal(13, euler.euler7(6));
    });
    it("should run euler.euler7(10001) and return 104743", function () {
      assert.equal(104743, euler.euler7(10001));
    });
  });

  describe("euler8", function () {
    it("should run euler.euler8(4) and return 5832", function () {
      assert.equal(5832, euler.euler8(4));
    });
    it("should run euler.euler8(13) and return 23514624000", function () {
      assert.equal(23514624000, euler.euler8(13));
    });
  });

  describe("euler9", function () {
    it("should run euler.euler9(12) and return 60", function () {
      assert.equal(60, euler.euler9(12));
    });
    it("should run euler.euler9(1000) and return 31875000", function () {
      assert.equal(31875000, euler.euler9(1000));
    });
  });

  describe("euler10", function () {
    it("should run euler.euler10(10) and return 17", function () {
      assert.equal(17, euler.euler10(10));
    });
    it("should run euler.euler10(2000000) and return 142913828922", function () {
      assert.equal(142913828922, euler.euler10(2000000));
    });
  });

  describe("euler11", function () {
    it("should run euler.euler11() and return 70600674", function () {
      assert.equal(70600674, euler.euler11());
    });
  });

  describe("euler14", function () {
    it('should run euler.euler14(13) and return 10', function () {
      assert.equal(10, euler.euler14(13));
    });
    it('should run euler.euler14(1000000) and return 123', function () {
      assert.equal(123, euler.euler14(1000000));
    });
  });

  describe("euler22", function () {
    it("should consume names.txt, sort and then calculate name score (position * name sum) and sum all", function () {
      assert.equal(871198282, euler.euler22());
    });
  });
});
