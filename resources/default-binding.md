# 2.4. Default binding
> Was the function called in a way where the previous rules were not
> satisfied? If so use the global object.

Whenever the new-, explicit- or implicit binding rules don't apply,
the default binding will be enforced.

## gotchas
- When in strict mode, the `this` keyword will default to `undefined`.

- When **not** in strict mode, the `this` keyword will default to the
`global` object.

## example 1
```javascript
function foo() {
	console.log(this.bar);
}

var bar = 1;

foo(); // 1
```

## example 2
```javascript
var bar = 99;
var foo = {
	bar: 1,
	baz() {
		console.log(this.bar);
	}
};
var fooBaz = foo.baz;

fooBaz(); // 99
```

## example 3
```javascript
'use strict'

function foo() {
	console.log(this.bar);
}

var bar = 1;

try {
	foo(); // throws an error!
} catch (err) {
	console.log(e.toString()); // TypeError: Cannot read property 'bar' of undefined
}
```

---
* [binding rules](binding-rules.md#2. Binding rules)
* [overview](../README.md#overview)
