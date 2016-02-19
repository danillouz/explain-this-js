# 2. Binding rules
> There are **4 rules** to how the `this` keyword gets **bound** to
> the **execution context** and they all depend on the **call site**
> fo the executing function.

1. [New binding](new-binding.md#2.1. New binding)
2. [Explicit binding](explicit-binding.md#2.2. Explicit-binding)
3. [Implicit binding](implicit-binding.md#2.3. Implicit-binding)
4. [Default binding](default-binding.md#2.4. Default-binding)

Note that there is a **precedence** to these rules. Therefore, when
determining the `this` binding you must always start from the top and
work your way down. The last rule (default binding) is basically the
*catch all rule*, which always applies when the previous 3 don't.

---
* [resources](../README.md#overview)
