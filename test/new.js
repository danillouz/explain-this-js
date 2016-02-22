var chai = require('chai');
var expect = chai.expect;

describe('new binding', function () {
	it('use `this` to make the constructor instance property `bar` equal the value `10`', function () {
		function Foo(n) {
			// TODO: use the `this` binding to make the test pass
		}

		var foo = /* TODO */

		expect(foo.bar).to.equal(10);
	});

	it('determine the value of `foo.baz`', function () {
		function Foo() {
			this.baz = this.bar || 1;
		}

		var Foo = Foo.bind({ bar: 99 });
		var foo = new Foo();

		expect(foo.baz).to.equal(/* TODO */);
	});
});
