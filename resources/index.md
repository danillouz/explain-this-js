# 1. Introduction
> Every function that is being executed has an **execution context**.
> The `this` keyword is a **reference** to that execution context.

When we reason about `this`, it's important to keep in mind that there
is a difference between **lexical** and **dynamic** binding.
A comparison can be made to how the engine determines lexical scope at
the *compilation stage*, while dynamic scope is determined at the
*execution stage*. These stages are sometimes also referred to
*author time (lexical)* versus *run time (dynamic)*.

Knowledge of the dynamic mechanism is required to understand how the
`this` keyword works in JavaScript, because the execution context of
a function is determined by **how** said function is called, i.e the
**call site**.

---
* [resources](../README.md#overview)
