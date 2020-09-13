import React, { Component } from 'react';

import me from '../jsons/me.json'

export default class AboutMe extends Component {

    render() {
        return (
            <p>{me.aboutMe}</p>
        );
    }
}