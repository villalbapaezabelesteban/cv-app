import React, { Component } from 'react';

export default class Job extends Component {

    render() {
        const { company } = this.props;

        return (
            <div>
                <p>{company.name}</p>
                <p>{company.from} - {company.to}</p>
                <p>{company.description}</p>
            </div>
        );
    }
}