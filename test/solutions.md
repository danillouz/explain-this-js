# new binding
**use `this` to make the constructor instance property `bar` equal the value `10`**

```diff
function Foo(n) {
- 	// TODO: use the `this` binding to make the test pass
+ 	this.bar = n;
}

- var foo = /* TODO */
+ var foo = new Foo(10);

expect(foo.bar).to.equal(10);
```

**determine the value of `foo.baz`**

```diff
function Foo() {
	this.baz = this.bar || 1;
}

var Foo = Foo.bind({ bar: 99 });
var foo = new Foo();

- expect(foo.baz).to.equal(/* TODO */);
+ expect(foo.baz).to.equal(1);
```

# explicit binding
**use `call` to make the `foo` function return the value `2`**

```diff
function foo() {
	return this.bar + this.baz;
}

- expect(/* TODO: use `call` to invoke `foo` and make the test pass */).to.equal(2)
+ expect( foo.call({ bar: 1, baz: 1 }) ).to.equal(2);
```

**use `apply` to make the `foo` function return the value `100`**

```diff
global.bar = 99;

function foo(n) {
	return this.bar + n;
}

- expect(/* TODO: use `apply` to invoke `foo` and make the test pass */).to.equal(100);
+ expect( foo.apply(undefined, [1]) ).to.equal(100);
```

# implicit binding
**use `this` to make the `foo.baz` method return the `foo.bar` property**

```diff
var foo = {
	bar: 1,
	baz() {
-		// TODO: use the `this` binding to make the test pass
+		return this.bar;
	}
};

var bar = foo.baz();

expect(bar).to.equal(foo.bar);
```

**use `this` to make the `foo.baz` method return the global `bar` value**

```diff
global.bar = 2;

var foo = {
	bar: 1,
	baz() {
		return this.bar;
	}
};

- // TODO: invoke the method in a way to make the test pass.
+ var fooBaz = foo.baz;

- expect(/* TODO */).to.equal(bar);
+ expect( fooBaz() ).to.equal(bar);
```

# default binding
**determine the value of `this.foo`**

```diff
global.foo = 100;

function bar() {
	return this.foo;
}

- expect( bar() ).to.equal(/* TODO */);
+ expect( bar() ).to.equal(100);
```

**determine the value of `this.bar`**

```diff
global.bar = 5;

var foo = {
	bar: 8,
	baz: function () {
		function fooBar() {
			return this.bar;
		}

-		expect( fooBar() ).to.equal(/* TODO */);
+		expect( fooBar() ).to.equal(5);
	}
};

foo.baz();
```

# arrow functions
**determine the value of `this.bar` in nested functions**

```diff
global.bar = 8;

function foo() {
	return () => () => () => () => this.bar;
}

- expect( foo()()()()() ).to.equal(/* TODO */);
+ expect( foo()()()()() ).to.equal(8);
```

**determine the value of `this.bar` in a hard bound function**

```diff
global.bar = 8;

function foo() {
	return () => () => () => () => this.bar;
}

var fooBound = foo.call({ bar: 200 });

- expect( fooBound()()()() ).to.equal(/* TODO */);
+ expect( fooBound()()()() ).to.equal(200);
```

**determine the value of `this.bar` in a function nested in a method**

```diff
global.bar = 33;

var foo = {
	bar: 5,
	baz() {
		var fooBaz = () => {
			return this.bar;
		}

-		expect( fooBaz() ).to.equal(/* TODO */);
+		expect( fooBaz() ).to.equal(5);
	}
};

foo.baz();
```

**determine the value of `arguments`**

```diff
function foo() {
	return () => {
		var args = [ ...arguments ];

-		expect(args).to.deep.equal(/* TODO */);
+		expect(args).to.deep.equal([ 1, 2, 3 ]);
	};
}

var bar = foo(1, 2, 3);

bar(4, 5, 6);
```
