var chai = require('chai');
var expect = chai.expect;

describe('implicit binding', function () {
	it('`foo.baz` method returns `foo.bar` property', function () {
		var foo = {
			bar: 1,
			baz() {
				// TODO: use the `this` binding to make the test pass
			}
		};

		var bar = foo.baz();

		expect(bar).to.equal(foo.bar);
	});

	it('`foo.baz` method returns global `bar` value', function () {
		global.bar = 2;

		var foo = {
			bar: 1,
			baz() {
				return this.bar;
			}
		};

		// TODO: invoke the method in a way to make the test pass.

		expect(/* TODO */).to.equal(bar);
	});
});
