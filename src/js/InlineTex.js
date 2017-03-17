"use strict";
import React,{Component} from 'react';
import katex from 'katex';

class InlineTex extends Component{
    render(){
        let { texContent, texSeperator} = this.props;
        let pattern  = new RegExp("\\" + texSeperator + "(.*?)\\" + texSeperator,"g")
        let html = texContent.replace(pattern,function(x){
            let string = x.split(new RegExp("\\" + texSeperator))[1];
            return string ? katex.renderToString(string,{"throwOnError":false}) : "";
        });
        return(
            <span dangerouslySetInnerHTML={{__html: html}}/>
        )
    }
}

InlineTex.defaultProps = {
    "texContent":'',
    "texSeperator": '${2}'
};

export {InlineTex}