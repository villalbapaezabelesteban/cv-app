import React, { Component } from 'react';
import AboutMe from './AboutMe';
import Knowledge from './Knowledge';
import WorkExperience from './WorkExperience';
import Contact from './Contact';

export default class Body extends Component {

    render() {
        return (
        <div>
            <AboutMe />
            <Knowledge />
            <WorkExperience />
            <Contact />
        </div>
        );
    }
}