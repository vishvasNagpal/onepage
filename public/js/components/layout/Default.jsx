import React from 'react';

import Header from './../header/Header.jsx'
import Footer from './../footer/Footer.jsx'
import Main from './../pages/Main.jsx'
import { Link,hashHistory,browserHistory } from 'react-router'
import * as ReactRedux from 'react-redux';

class Layout extends React.Component{
    render(){
        console.log(this.props);
        return(
            <div class={this.props.containerCls}>
                <Header/>
                <Main component={this.props.children}/>
                <Footer/>
            </div>

        )
    }
}

Layout.defaultProps = {
    containerCls:'container'
}

export default ReactRedux.connect(function(store){
    console.log('store',store);
    return {store:store}
})(Layout);