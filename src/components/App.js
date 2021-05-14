import React, { Component } from 'react';
import uniqid from 'uniqid';
import '../styles/App.css';
import Preview from './Preview';
import Editable from './Editable';

class App extends Component {
  constructor() {
    super();

    this.state = {
      mode: {
        edit: false,
      },
      formDisplay: {
        skill: false,
        job: false,
        school: false,
      },
      general: {
        name: 'YOUR FULL NAME',
        position: 'Your Current Position',
        contact: {
          phone: '(555) 555-5555',
          email: 'myemail@gmail.com',
          linkedIn: 'linkedin.com/in/myname'
        },
        description: 'Summary of your professional background and objectives',
      },
      job: {
        dates: {
          start: 'Start date',
          end: 'End date',
        },
        position: 'Position',
        company: 'Company name',
        location: 'City, State/Country',
        responsibility: {
          content: 'Description of key accomplishments and responsibilities',
          id: uniqid(),
        },
        responsibilities: [],
      },
      jobs: [],
      school: {
        dates: {
          start: 'Start date',
          end: 'End date',
        },
        name: 'Name of Educational Institution',
        degree: 'Diploma or degree earned',
        major: 'Your Major',
        location: 'City, State/Country',
        responsibility: {
          content: 'Description of key accomplishments',
          id: uniqid(),
        },
        responsibilities: [],
      },
      schools: [],
      skill: {
        name: 'Name of skill',
        id: uniqid(),
      },
      skills: [],
    };
  }

  render() {
    const { 
      general, 
      skill, 
      job, 
      school, 
      mode,
      skills,
      jobs,
      schools,
      formDisplay,
    } = this.state;

    const headerInput = [
      {
        name: 'full-name',
        label: 'Full name',
        inputType: 'text',
        placeholder: 'Enter your full name',
        eventFunction: '',
      },
      {
        name: 'current-position',
        label: 'Current position',
        inputType: 'text',
        placeholder: 'Enter your current position',
        eventFunction: '',
      }
    ];

    const contactInput = [
      {
        name: 'email-address',
        label: 'Email address',
        inputType: 'email',
        placeholder: 'Enter your email address',
        eventFunction: '',
      },
      {
        name: 'phone-number',
        label: 'Phone number',
        inputType: 'tel',
        placeholder: 'Enter your phone number',
        eventFunction: '',
      },
      {
        name: 'linkedin',
        label: 'LinkedIn',
        inputType: 'text',
        placeholder: 'Enter link to your LinkedIn account',
        eventFunction: '',
      },
    ];

    const skillInput = [
      {
        name: 'skill',
        label: 'Add up to 5 skills',
        inputType: 'text',
        placeholder: 'Enter skill here',
        eventFunction: '',
      },
    ];

    const summaryInput = [
      {
        name: 'summary',
        inputType: 'text',
        placeholder: 'Write a short summary of your background and professional goals',
        eventFunction: '',
      },
    ];

    const workInput = [
      {
        name: 'summary',
        inputType: 'text',
        placeholder: 'Write a short summary of your background and professional goals',
        eventFunction: '',
      },
    ];

    if (mode.edit) {
      return (
        <Preview 
          general={general}
          skill={skill} 
          job={job}
          school={school}
          skills={skills}
          jobs={jobs}
          schools={schools}
        />
      );
    } else {
      return (
        <Editable
          formDisplay={formDisplay}
          header={headerInput}
          contact={contactInput}
          skill={skillInput}
          summary={summaryInput}
          work={workInput}
        />
      );
    }
  }
};

export default App;
