var chai = require('chai');
var expect = chai.expect;

describe('arrow functions', function () {
	it('determine the value of `this.bar` in nested functions', function () {
		global.bar = 8;

		function foo() {
			return () => () => () => () => this.bar;
		}

		expect( foo()()()()() ).to.equal(/* TODO */);
	});

	it('determine the value of `this.bar` in a hard bound function', function () {
		global.bar = 8;

		function foo() {
			return () => () => () => () => this.bar;
		}

		var fooBound = foo.call({ bar: 200 });

		expect( fooBound()()()() ).to.equal(/* TODO */);
	});

	it('determine the value of `this.bar` in a function nested in a method', function () {
		global.bar = 33;

		var foo = {
			bar: 5,
			baz() {
				var fooBaz = () => {
					return this.bar;
				}

				expect( fooBaz() ).to.equal(/* TODO */);
			}
		};

		foo.baz();
	});

	it('determine the value of `arguments`', function () {
		function foo() {
			return () => {
				var args = Array.prototype.slice.call(arguments);

				expect(args).to.deep.equal(/* TODO */);
			};
		}

		var bar = foo(1, 2, 3);

		bar(4, 5, 6);
	});
});
