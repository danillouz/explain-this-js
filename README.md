# explain-this-js
[Crowdynews](http://www.crowdynews.com/) mini workshop explaining how the `this` keyword works in JavaScript.

There's some [reading material](#table-of-contents) and there're some exercises you can work through to get a better understanding on the topic at hand.

# exercises
The exercises consist of a couple of failing tests, which you need
to modify, in order to make them pass again.

They're self explanatory, but contain some comments in order to
be as clear as possible.

You should be able to complete the exercises after going trough
all topics of the [reading material](#table-of-contents).

## running the exercises
All exercises are located in the `test` directory, but first you
need to install all dependencies with:
```
npm i
```
Then you can either run all tests, i.e. exercises, once with:
```
npm test
```
Or you can `watch` the tests with:
```
npm run exercises
```
The latter will (re)run all tests automatically whenever a
change is made to any file in the `test` directory. This way
you don't have to run `npm test` every time you want to see if
you have solved an exercise correctly. If you want to quit, simply
type `CTRL + C`.

# table of contents
1. [Introduction](resources/index.md#1-introduction)
2. [Binding rules](resources/binding-rules.md#2-binding-rules)
3. [Hard binding](resources/hard-binding.md#3-hard-binding)
4. [Arrow functions](resources/arrow-functions.md#4-arrow-functions)
