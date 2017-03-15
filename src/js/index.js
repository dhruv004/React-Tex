"use strict";
import React,{Component} from 'react';
import katex from 'katex';

class Tex extends Component{
    render(){
        let { texContent } = this.props;
        let katexString = katex.renderToString(texContent,{"throwOnError":false});
        return(
            <span dangerouslySetInnerHTML={{__html: katexString}}/>
        )
    }
}

export default Tex