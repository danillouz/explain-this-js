# 2.3. Implicit binding
> Was the function called through a **containing object**? If so,
> use that object.

Whenever a function is called as a *property reference* on a
object, i.e. as a **method**. The `this` keyword will be bound
to the **containing object**.

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
* [binding rules](binding-rules.md#2-binding-rules)
* [overview](../README.md#overview)
