# zegami-enzyme-matchers

Project for the Zegami Enzyme Matcher Functions for using with Jest/Enzyme

An assertion library for [enzyme](https://github.com/airbnb/enzyme/).

This library supports several testing frameworks including [Jest](https://github.com/facebook/jest) and [Jasmine](http://jasmine.github.io/).

## Assertions

> Notes
> * The syntax for using these assertions may be different depending on your testing framework. For more information, visit the framework you are using's package README in `packages/`

> * Not all assertions work with every rendering strategy.
>   If you are wondering what rendering mechanism to use when, refer to
>   [enzyme's documentation](https://github.com/airbnb/enzyme).

* [toBeAFunction()](#toBeAFunction)


#### `toBeAFunction()`

Assert that the given object is a function:

```js
import React from 'react'
import {mount, shallow} from 'enzyme'

function Mock = () => {
  return null;
}

expect(Mock).toBeAFunction();
```

## Development

#### Setup

```shell
$ git clone <this repo>
$ cd zegami-enzyme-matchers
$ npm install
```

#### Tests

Linters:

```shell
$ npm run lint
```

Tests:

```shell
$ npm test
