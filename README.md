# explain-this-js
[Crowdynews](http://www.crowdynews.com/) mini workshop explaining how the `this` keyword works in JavaScript.

There's some [reading material](#reading-material) and there're some exercises you can work through to get a better understanding on the topic at hand.

# exercises
The exercises consist of a couple of failing tests, which you need
to modify, in order to make them pass again.

They're self explanatory, but contain some comments in order to
be as clear as possible.

You should be able to complete the exercises after going trough
all topics of the [reading material](#reading-material).

## running the exercises
All exercises are located in the `test` directory, but first you
need to install all dependencies with:
```
npm i
```
Then you can either run all tests, i.e. exercises, once with:
```
npm test
```
Or you can `watch` the tests with:
```
npm run exercises
```
The latter will (re)run all tests automatically whenever a
change is made to any file in the `test` directory. This way
you don't have to run `npm test` every time you want to see if
you have solved an exercise correctly. If you want to quit, simply
type `CTRL + C`.

## running a test suite or case individually
Inside the `test` directory the following files are considered
a test suite:
* `new.js`
* `explicit.js`
* `implicit.js`
* `default.js`
* `arrow-functions.js`

If you look at the code, a test suite is wrapped in a `describe` block, and it contains `it` blocks, which are test cases:

```javascript
// Test suite.
describe('arrow function', function () {

	// Test case.
	it('nested functions', function () {
		// ...
	});

	// ...
});
```

If you'd like to run a test suite individually, you can use the
`only` method:

```javascript
// Now only the `arrow function` test suite will run (including it's own test cases).
describe.only('arrow function', function () {
	it('nested functions', function () {
		// ...
	});

	// ...
});
```

Same applies for a test case:

```javascript
describe('arrow function', function () {

	// Now only the `nested functions` test case will run
	it.only('nested functions', function () {
		// ...
	});

	// ...
});
```

## solutions
If you really, really get stuck (you won't!), you can always check
`test/solutions.md`.

The best way to view the solutions is [here](https://github.com/danillouz/explain-this-js/blob/master/test/solutions.md), it'll be easier to
spot the changes.

# requirements
You need to run node `v4.2` or above.

# reading material
1. [Introduction](resources/index.md#1-introduction)
2. [Binding rules](resources/binding-rules.md#2-binding-rules)
3. [Hard binding](resources/hard-binding.md#3-hard-binding)
4. [Arrow functions](resources/arrow-functions.md#4-arrow-functions)

## additional resources
- [You don't know js: this & object prototypes](https://github.com/getify/You-Dont-Know-JS/tree/master/this%20%26%20object%20prototypes)
- [MDN: this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [Getify blog: arrow this](http://blog.getify.com/arrow-this/)
