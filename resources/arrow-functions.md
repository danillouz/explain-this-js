# 4. Arrow functions
> Arrow functions do **not** bind their own `this`.

Even though `this` is a runtime binding, **lexical scoping rules**
still apply when a value for `this` needs to be resolved.

Because arrow functions do not bind their own `this`, the
reference to `this` is resolved by traveling up the **scope level chain** until a value is found.

## gotchas
- Arrow functions also do **not** bind
	* `arguments`
	* `super`
	* `new.target`
- Arrow functions can **not** be hard bound.

## example 1
```javascript
function foo() {
	return () => () => console.log(this.bar);
}

var bar = 99;

foo.call({ bar: 1})()(); // 1
```

## example 2
```javascript
function foo() {
	return () => console.log(this.bar);
}

var bar = 99;
var baz = foo.call({ bar: 1});
var bazBound = baz.bind({ bar: 88});

bazBound(); // 1
```

## additional resources
* [arrow functions](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

---
* [overview](../README.md#overview)
