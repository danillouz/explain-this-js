# 1. Introduction
> Every function that is being executed has an **execution context**.
> The `this` keyword is a **reference** to that execution context.

When we reason about `this`, it's important to keep in mind that
there is a difference between **lexical** and **dynamic** binding.
A comparison could be made to how the engine determines lexical
scope at the *compilation stage*, i.e. **where** functions are
declared. While dynamic scope is determined at the *execution stage*, i.e. **how** a function was invoked.

Knowledge of the dynamic mechanism is required to understand how
the `this` keyword works in JavaScript, because the execution
context of a function is determined by **how** said function is
called, i.e the **call site**.

After the call site has been determined, we need to figure which
one of the [binding rules](binding-rules.md#2-binding-rules) is
applicable.

---
* [resources](../README.md#overview)
