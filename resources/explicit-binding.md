# 2.2. Explicit binding
> Was the function called with `call` or `apply`? If so, use the
> object that was passed as **context**.

The `call` and `apply` methods allow you to **invoke** a function
without using parentheses `()`.

These methods both accept a **context object** as the first
argument.
When an object is passed, it will be bound to the `this` keyword
when the function is executed.

## gotchas
- If a function is called in **non strict mode** and `null`
or `undefined` is passed as the context object, the execution
context will be bound to the **global object**.

## example 1
```javascript
function foo() {
	console.log('invoked foo');
}

foo.call(); // invoked foo
foo.apply(); // invoked foo
```

## example 2
```javascript
function foo() {
	console.log(this.bar);
}

foo.call({ bar: 1 }); // 1
foo.apply({ bar: 2 }); // 2
```

## methods
* [call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
* [apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

---
* [binding rules](binding-rules.md#2-binding-rules)
* [overview](../README.md#overview)
