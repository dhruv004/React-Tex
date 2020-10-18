
[![NPM](https://img.shields.io/npm/v/react-tex.svg)](https://www.npmjs.com/package/react-tex)
[![Build Status](https://travis-ci.org/dhruv004/React-Tex.svg?branch=master)](https://travis-ci.org/dhruv004/React-Tex)

# react-tex

Display TeX-based math with [React](https://github.com/facebook/react) and [KaTeX](https://github.com/Khan/KaTeX).

---

## Installation

react-tex is available as an [NPM package](https://www.npmjs.com/package/react-tex):

```sh
$ npm install --save react-tex
```

You can [download KaTeX](https://github.com/khan/katex/releases) and host it on your server or include the `katex.min.css` file on your page directly from a CDN:

```html
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous">
```

## Usage

react-tex has two components you can use, `<Tex>` and `<InlineTex>`.

### TeX

The `<Tex>` component allows you to display TeX-based math.

![tex](https://cloud.githubusercontent.com/assets/17777371/24044786/bd8233ce-0b42-11e7-9a48-4abf6d90ed0e.png)

This expected output is produced by the following example:

```js
import { Tex } from 'react-tex';

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

You can use the following props with Tex:

| Property | Type | Default | Description |
|:---|:---|:---|:---|
| `texContent` | string | `` | TeX string |

### Inline TeX

The `<InlineTex>` component allows you to display TeX-based math inline with text by wrapping a TeX string with double dollar signs (`$$`).

![inlinetex](https://cloud.githubusercontent.com/assets/17777371/24044794/c554ccf6-0b42-11e7-8b06-9718fb0d19d3.png) 

This expected output is produced by the following example:

```js
import { InlineTex } from 'react-tex';

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

You can use the following props with InlineTex:

| Property | Type | Default | Description |
|:---|:---|:---|:---|
| `texContent` | string | `` | TeX string |
| `texSeperator` | string | `${2}` | Regex string to seperate TeX from text |
