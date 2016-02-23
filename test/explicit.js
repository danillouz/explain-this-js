var chai = require('chai');
var expect = chai.expect;

describe('explicit binding', function () {
	it('use `call` to make the `foo` function return the value `2`', function () {
		function foo() {
			return this.bar + this.baz;
		}

		expect(/* TODO: use `call` to invoke `foo` and make the test pass */).to.equal(2)
	});

	it('use `apply` to make the `foo` function return the value `100`', function () {
		global.bar = 99;

		function foo(n) {
			return this.bar + n;
		}

		expect(/* TODO: use `apply` to invoke `foo` and make the test pass */).to.equal(100);
	});
});
