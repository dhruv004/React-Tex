# React-Tex

## Install

```sh
$ npm install --save react-tex
```

## Using

1.In your component
```js
import Tex from 'react-tex';

class TexWrapper extends Component{
  render(){
    return(
      <div>
        <Tex texContent="\int_{a}^{b} f(x)dx = F(b) - F(a)"/>
      </div>
    )
  }
}
```
2. Include Katex CSS in your html

```html

<html>
    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css">
    </head>
</html>

```
