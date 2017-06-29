import React from 'react';
export default class Main extends React.Component{
    style={
        marginTop: '100px'
    }
    render(){
        return(
            <div class={this.props.containerCls} style={this.style}>
                {this.props.component}
            </div>
        )
    }
}

Main.defaultProps = {
    containerCls: 'container-fluid'
}