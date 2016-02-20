# 3. Hard binding
> It's possible to **hard bind** a function, in order to enforce
> an **explicit** execution context.

In certain implementations a *loss of context* might occur.

```javascript
var bar = 99;

var foo = {
	bar: 1,
	baz() {
		function printBar() {
			console.log(this.bar);
		}

		printBar();
	}
};

foo.baz(); // 99
```

Without knowing the [binding rules](binding-rules.md#2-binding-rules), you might expect `1` to be printed. But if you first
determine the **call site** and then follow the precedence
of the **binding rules**, we can see that **none** of the first 3
apply. Therefore the **default binding** is enforced and `this`
references the **global** object, resulting in `99` being
printed.

The most *simple* way to solve this problem is by using **scope resolution**.

```javascript
var bar = 99;

var foo = {
	bar: 1,
	baz() {
		var context = this;

		function printBar() {
			console.log(context.bar);
		}

		printBar();
	}
};

foo.baz(); // 1
```

Even though this works, we're using a **different** mechanism
entirely. Instead of using the **dynamic** binding mechanism, we
use the **lexical** binding mechanism.

A better way to accomplish this, is through the dynamic binding
mechanism, by creating a simple **closure** and **explicitly**
calling the function to be bound with the desired **context**.

```javascript
function bindFn(fn, context) {
	return function () {
		fn.call(context);
	};
}

var bar = 99;

var foo = {
	bar: 1,
	baz() {
		function printBar() {
			console.log(this.bar);
		}

		var boundPrintBar = bindFn(printBar, this);

		boundPrintBar();
	}
};

foo.baz(); // 1
```

As of `ES5`, every function has a `bind` method available to
accomplish this behavior.

*Compared to the `bind` method, the `bindFn` function above is a
very naïve implementation.*

```javascript
var bar = 99;

var foo = {
	bar: 1,
	baz() {
		var printBar = function () {
			console.log(this.bar);
		}.bind(this);

		printBar();
	}
};

foo.baz(); // 1
```

## methods
* [bind](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind)

---
* [overview](../README.md#overview)
