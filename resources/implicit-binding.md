# 2.3. Implicit binding
> Was the function called through a containing object? If so use
> the containing object.

Whenever a function is called as a property reference on a object,
i.e. as a method. The `this` keyword will be bound to the containing
context object.

## example 1
```javascript
var bar = 99;
var foo = {
	bar: 1,
	baz() {
		console.log(this.bar);
	}
};

foo.baz(); // 1
```

---
* [binding rules](binding-rules.md#2. Binding rules)
* [overview](../README.md#overview)
