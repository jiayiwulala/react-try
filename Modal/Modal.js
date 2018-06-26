import React, { Component } from 'react';
import './Modal.css';
import Aux from '../Aux';
import BackDrop from '../BackDrop/BackDrop';

class Modal extends Component {

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentWillUpdate () {
        console.log('[Modal] WillUpdate');
    }

    render () {
        return (
            <Aux>
                <BackDrop show={this.props.show} clicked={this.props.modalClosed} />
                <div className={'Modal'}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;
