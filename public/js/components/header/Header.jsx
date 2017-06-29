import React from 'react';
import {Link} from 'react-router'
export default class Header extends React.Component{
    constructor(){
        super()
        this.state = {collapsed: false}
    }
    toggleButton(){
        const collapsed = !this.state.collapsed;
        this.setState({collapsed})
    }
    render(){
        let collapsed = this.state.collapsed;
        let buttonClass = collapsed ? 'collapsed' : '';
        let navClass = collapsed ? 'in' : '';
        return(
            <div class="navbar navbar-default navbar-fixed-top">
                <div class={this.props.containerCls}>
                    <div class="navbar-header">
                        <a href="../" class="navbar-brand">Vishvas Nagpal</a>
                        <button class={"navbar-toggle " + buttonClass} type="button" onClick={this.toggleButton.bind(this)} data-toggle="collapse" data-target="#navbar-main">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                    <div class={"navbar-collapse collapse " + navClass} id="navbar-main">
                        <ul class="nav navbar-nav">
                            <li>
                                <Link to="intro">Intro</Link>
                            </li>
                            <li>
                                <Link to="skills">skills</Link>
                            </li>
                            <li>
                                <Link to="tech-stack">Technology</Link>
                            </li>
                            <li>
                                <Link to="experience">experience</Link>
                            </li>
                            <li>
                                <Link to="projects">projects</Link>
                            </li>
                            <li>
                                <Link to="education">Education</Link>
                            </li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="/" target="_blank">Vishvas Nagpal</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

Header.defaultProps = {
    containerCls:'container-fluid'
}