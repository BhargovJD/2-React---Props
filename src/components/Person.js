import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div>
                <hr />
                <h1>I am from class component(Person)</h1>
                <h3>Name: {this.props.name}</h3>
                <h3>Age: {this.props.age}</h3>

                <hr />
            </div>
        )
    }
}
