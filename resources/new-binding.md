# 2.1. New binding
> Was the function called with the `new` keyword? If so use the
> object created by the constructor call.

The `new` keyword can be used with **any** function. When this happens,
the function call becomes a so called **constructor call**.

Whenever a function is called with the `new` keyword, the following
will happen inside said function:
1. a **new empty object** is created
2. the newly created object (step 1) gets **prototype linked**
3. the newly created object (step 1) gets **bound to the `this` keyword**
4. the newly created object (step 1) is (implicitly) **returned**

## gotchas
- Note that using a constructor function is not the same as
instantiating a Class. JavaScript does **not** have classes.

- The `new` keyword can override any of the other rules, because it
has the most precedence.

## example 1
```javascript
function foo() {
	this.bar = 1;
}

var bar = 99;
var baz = new foo();

console.log(baz.bar); // 1
console.log(bar); // 99
```

## example 2
```javascript
function foo() {
	console.log(this.bar);
}

foo = foo.bind({ bar: 99 });

foo(); // 99
new foo(); // undefined
```

---
* [binding rules](binding-rules.md#2. Binding rules)
* [overview](../README.md#overview)
