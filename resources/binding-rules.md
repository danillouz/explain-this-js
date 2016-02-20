# 2. Binding rules
> There are **4 rules** to how the `this` keyword gets **bound** to
> the **execution context** and they all depend on the **call site**
> of the executing function.

1. [New binding](new-binding.md#21-new-binding)
2. [Explicit binding](explicit-binding.md#22-explicit-binding)
3. [Implicit binding](implicit-binding.md#23-implicit-binding)
4. [Default binding](default-binding.md#24-default-binding)

Note that there's a **precedence** to these rules. Therefore, when
determining the `this` binding, you must always start from the top and
work your way down. The last rule (default binding) is basically the
*catch all rule*, which always applies when the previous 3 don't.

---
* [resources](../README.md#overview)
