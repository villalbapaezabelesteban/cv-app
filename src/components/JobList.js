import React, { Component } from 'react';
import Job from './Job';

import jobs from '../jsons/jobs.json';

export default class JobList extends Component {

    state = {
        jobs: jobs
    }

    render() {
        return (
            <div>
                <h4>Job List</h4>
                {this.state.jobs.map(job => <Job key={job.id} company={job} />)}
            </div>

        );
    }
}