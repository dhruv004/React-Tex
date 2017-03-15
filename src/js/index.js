var React = require('react');
var katex = require('katex');

LatexComponent = React.createClass({
    "render":function(){
        var string = "\int_{a}^{b} f(x)dx = F(b) - F(a)";
        var KatexString = katex.renderToString(string);
        return(
            <span dangerouslySetInnerHTML={{__html: KatexString}}/>
        )
    }
})
    
module.exports = {
    "katex":LatexComponent
}