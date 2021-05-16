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
        edit: true,
      },
      formDisplay: {
        skills: false,
        job: true,
        school: false,
      },
      general: {
        name: 'YOUR FULL NAME',
        position: 'Your Current Position',
        phone: '(555) 555-5555',
        email: 'myemail@gmail.com',
        linkedIn: 'linkedin.com/in/myname',
        description: 'Summary of your professional background and objectives',
      },
      job: {
        id: uniqid(),
        startDate: 'Start date',
        endDate: 'End date',
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
        id: uniqid(),
        startDate: 'Start date',
        endDate: 'End date',
        institution: 'Name of Educational Institution',
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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split('-');
    const categoryObj = {...this.state[keys[0]]};

    if (keys[1] === 'responsibility') {
      categoryObj.responsibility.content = value;
    } else {
      categoryObj[keys[1]] = value;
    }

    this.setState({
      [keys[0]]: categoryObj,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { dataset } = e.target;
    const objKey = dataset.sectionName;
    const arrKey =  objKey + 's';

    const currentObj = {...this.state[objKey]};
    
    if (currentObj.responsibility) {
      currentObj.responsibility.content
      .split(';')
      .map((responsibility) => (
        currentObj.responsibilities.push({
          content: responsibility,
          id: uniqid(),
        })
      ));
    }
    
    const newObj = {...this.state[objKey]};

    for (const key of Object.keys(newObj)) {
      if (key === 'id') {
        newObj[key] = uniqid();
      } else if (key === 'responsibility') {
        newObj[key].id = uniqid();
        newObj[key].content = '';
      } else if (key === 'responsibilities') {
        newObj[key] = [];
      } else {
        newObj[key] = '';
      }
    }
    
    this.setState({
      [arrKey]: this.state[arrKey].concat(currentObj),
      [objKey]: newObj,
    });
  };

  onClickCancel = (e) => {

  };

  onClickAdd = (e) => {
    
  };

  onClickToggle = (e) => {
    
  };

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
        name: 'general-name',
        type: 'text',
        placeholder: 'Enter your full name',
        eventFunction: this.handleChange,
      },
      {
        name: 'general-position',
        type: 'text',
        placeholder: 'Enter your current position',
        eventFunction: this.handleChange,
      }
    ];

    const contactInput = [
      {
        name: 'general-email',
        type: 'email',
        placeholder: 'Enter your email address',
        eventFunction: this.handleChange,
      },
      {
        name: 'general-phone',
        type: 'tel',
        placeholder: 'Enter your phone number',
        eventFunction: this.handleChange,
      },
      {
        name: 'general-linkedIn',
        type: 'text',
        placeholder: 'Enter link to your LinkedIn account',
        eventFunction: this.handleChange,
      },
    ];

    const skillInput = [
      {
        name: 'skill-name',
        type: 'text',
        placeholder: 'Add your top 5 skills',
        eventFunction: this.handleChange,
      },
    ];

    const summaryInput = [
      {
        name: 'general-description',
        type: 'text-area',
        placeholder: 'Write a short summary of your background and professional goals',
        eventFunction: this.handleChange,
      },
    ];

    const experienceInput = [
      {
        name: 'location',
        label: 'Location',
        type: 'text',
        placeholder: 'City, State/Country',
        eventFunction: this.handleChange,
      },
      {
        name: 'startDate',
        label: 'From',
        type: 'date',
        eventFunction: this.handleChange,
      },
      {
        name: 'endDate',
        label: 'To',
        type: 'date',
        eventFunction: this.handleChange,
      },
      {
        name: 'responsibility',
        label: 'Responsibilities',
        type: 'text-area',
        placeholder: 
          'Describe some of your key responsibilities and accomplishments. Separate each one with a semi-colon.',
        eventFunction: this.handleChange,
      },
    ];

    const workInput = [
      {
        name: 'job-company',
        label: 'Company',
        type: 'text',
        placeholder: 'Company name',
        eventFunction: this.handleChange,
      },
      {
        name: 'job-position',
        label: 'Position',
        type: 'text',
        placeholder: 'Position',
        eventFunction: this.handleChange,
      },
    ];

    const schoolInput = [
      {
        name: 'school-institution',
        label: 'Educational institution',
        type: 'text',
        placeholder: 'Name of school or university',
        eventFunction: this.handleChange,
      },
      {
        name: 'school-degree',
        label: 'Diploma or degree earned',
        type: 'text',
        placeholder: 'Name of diploma or degree',
        eventFunction: this.handleChange,
      },
      {
        name: 'school-major',
        label: 'Major (if any)',
        type: 'text',
        placeholder: 'Name of major discipline',
        eventFunction: this.handleChange,
      },
    ];

    if (mode.edit) {
      return (
        <Editable
          formDisplay={formDisplay}
          header={headerInput}
          contact={contactInput}
          skills={skillInput}
          summary={summaryInput}
          work={workInput.concat(experienceInput.map((obj) => {
            const newObj = {...obj};
            newObj.name = 'job-' + obj.name;
            return newObj;
          }))}
          school={schoolInput.concat(experienceInput.map((obj) => {
            const newObj = {...obj};
            newObj.name = 'school-' + obj.name;
            return newObj;
          }))}
          onSubmit={this.onSubmit}
        />
      );
    } else {
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
    }
  }
};

export default App;
