
[![Build Status](https://travis-ci.org/dhruv004/React-Tex.svg?branch=master)](https://travis-ci.org/dhruv004/React-Tex)
[![npm version](https://badge.fury.io/js/react-tex.svg)](https://badge.fury.io/js/react-tex)
[![dependencies Status](https://david-dm.org/boennemann/badges/status.svg)](https://david-dm.org/boennemann/badges)

[![NPM](https://nodei.co/npm/react-tex.png)](https://nodei.co/npm/react-tex/)
[![NPM](https://nodei.co/npm-dl/react-tex.png?months=12&height=3)](https://nodei.co/npm/react-tex/)


# React-Tex

## Install

```sh
$ npm install --save react-tex
```

## Using

1.In your component
```js
import {Tex} from 'react-tex';

class TexWrapper extends Component{
  render(){
    let latexString = "\int_{a}^{b} f(x)dx = F(b) - F(a)";
    return(
      <div>
        <Tex texContent={latexString}/>
      </div>
    )
  }
}
```
Output:![tex](https://cloud.githubusercontent.com/assets/17777371/24044786/bd8233ce-0b42-11e7-9a48-4abf6d90ed0e.png)

Available props for Tex are:

- `texContent`: `string`. Latex string . (default: ``)

For Inline component wrap the latex string in between $$
```js
import {InlineTex} from 'react-tex';

class InlineTexWrapper extends Component{
  render(){
    let latexString = "This is inline $$\int_{a}^{b} f(x)dx = F(b) - F(a)$$ latex string";
    return(
      <div>
        <InlineTex texContent={latexString}/>
      </div>
    )
  }
}
```
Output:![inlinetex](https://cloud.githubusercontent.com/assets/17777371/24044794/c554ccf6-0b42-11e7-8b06-9718fb0d19d3.png)

Available props for InlineTex are:

- `texContent`: `string`. Latex string . (default: ``)
- `texSeperator`: `string`. Latex string seperator using regex . (default: `${2}`)

2. Include Katex CSS in your html

```html

<html>
    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css">
    </head>
</html>

```
