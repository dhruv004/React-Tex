import React,{Component} from 'react';
import katex from 'katex';

class LatexComponent extends Component{
    render(){
        var string = "\int_{a}^{b} f(x)dx = F(b) - F(a)";
        var KatexString = katex.renderToString(string);
        return(
            <span dangerouslySetInnerHTML={{__html: KatexString}}/>
        )
    }
}

export default LatexComponent