"use strict";
import React,{Component} from 'react';
import katex from 'katex';

class InlineTex extends Component{
    constructor(props){
        super(props);
        this.props={
            "texContent":"",
            "texSeperator":"${2}"
        }
    }

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

export {InlineTex}