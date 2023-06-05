import React from 'react';
import classNames from "classnames";

 /*class Button extends React.Component {
    render() {
       // return <button className={"button button--outline"}>{this.props.text}</button>
       // return <button className={ `button ${this.props.outline ? "button--outline": ''}`}>{this.props.children}</button>
        return <button className={classNames('button',{
            'button--outline':this.props.outline
        })}>{this.props.children}</button>
    }
}*/

function Button(props) {
    return(
        <button className={classNames('button',{
            'button--outline':props.outline
        })}>{props.children}</button>
    )

}

export default Button

