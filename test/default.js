var chai = require('chai');
var expect = chai.expect;

describe('default binding', function () {
	it('determine the value of `this.foo`', function () {
		global.foo = 100;

		function bar() {
			return this.foo;
		}

		expect( bar() ).to.equal(/* TODO */);
	});

	it('determine the value of `this.bar`', function () {
		global.bar = 5;

		var foo = {
			bar: 8,
			baz: function () {
				function fooBar() {
					return this.bar;
				}

				expect( fooBar() ).to.equal(/* TODO */);
			}
		};

		foo.baz();
	});
});
