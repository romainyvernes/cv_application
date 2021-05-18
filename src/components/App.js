import React, { Component } from 'react';
import uniqid from 'uniqid';
import '../styles/App.css';
import Preview from './Preview';
import Editable from './Editable';
import { format } from 'date-fns';

class App extends Component {
  constructor() {
    super();

    this.state = {
      mode: {
        edit: true,
      },
      formDisplay: {
        skill: false,
        job: false,
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
        index: 0,
        id: uniqid(),
        startDate: format(new Date(2021, 0, 1), 'yyyy-MM-dd'),
        endDate: '',
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
        index: 0,
        id: uniqid(),
        startDate: format(new Date(2021, 0, 1), 'yyyy-MM-dd'),
        endDate: '',
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
        index: 0,
        name: 'Name of skill',
        id: uniqid(),
      },
      skills: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleFormDisplay = this.toggleFormDisplay.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.editExperience  = this.editExperience.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
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

    const { name, dataset } = e.target;
    
    const objKey = name;
    const arrKey =  objKey + 's';

    // retrieve current object in state
    const currentObj = {...this.state[objKey]};
    
    // break down responsibilities into separate objects and push them into
    // responsibilities array
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
    
    // retrieve copy of current state and reset all its keys
    const objToReset = {...this.state[objKey]};

    for (const key of Object.keys(objToReset)) {
      if (key === 'id') {
        objToReset[key] = uniqid();
      } else if (key === 'responsibility') {
        objToReset[key].id = uniqid();
        objToReset[key].content = '';
      } else if (key === 'responsibilities') {
        objToReset[key] = [];
      } else if (key === 'index') {
        objToReset[key] = objToReset[key] + 1;
      } else {
        objToReset[key] = '';
      }
    }
    
    // reset index property of current object if index is out of range
    if (this.state[arrKey].length < dataset.index + 1) {
      currentObj.index = this.state[arrKey].length;
    }
    
    this.setState({
      [arrKey]: this.state[arrKey].length < dataset.index + 1
        ? this.state[arrKey].concat(currentObj)
        : [...this.state[arrKey]].splice(dataset.index, 0, currentObj),
      [objKey]: objToReset,
    });
  };

  toggleFormDisplay = (e) => {
    const { name } = e.target;
    const newObj = {...this.state.formDisplay};
    
    for (const key of Object.keys(newObj)) {
      if (key === name) {
        newObj[key] ? newObj[key] = false : newObj[key] = true;
      }
    }

    this.setState({
      formDisplay: newObj,
    });
  };

  toggleEditMode = () => {
    this.setState({
      mode: {
        edit: this.state.mode.edit ? false : true,
      },
    });
  };

  editExperience = (e) => {
    // 1. remove experience from jobs/schools array
    // 2. load it into current state
    
    // retrieve the name of the section being edited, and the value of its id
    const { name, value } = e.currentTarget;
    
    // retrieve the current array of jobs or schools or skills
    const currentArr = [...this.state[name + 's']];
    
    // variable that saves the matching object in currentArr
    let newObj;
    
    // create new array that excludes the matching object
    const newArr = currentArr.reduce((arr, experienceObj) => {
      if (experienceObj.id === value) {
        newObj = experienceObj;
        return arr;
      }
      arr.push(experienceObj);
      return arr;
    }, []);

    if (newObj.responsibilities.length > 0) {
      // load responsibilities back as a single string separated by semi-colons
      const responsibilityStr = newObj.responsibilities
        .reduce((str, responsibility, index, sourceArr) => {
          if (index < sourceArr.length - 1) {
            str = str + responsibility.content + ';';
            return str;
          }
          str = str + responsibility.content;
          return str
        }, '');

      newObj.responsibility.content = responsibilityStr;
      newObj.responsibilities = [];
    }

    this.setState({
      [name + 's']: newArr,
      [name]: newObj,
    });
  };

  deleteItem = (e) => {
    const { name, value } = e.currentTarget;
    
    // create a new array without matching object
    const newArr = this.state[name + 's'].reduce((arr, obj) => {
      if (obj.id === value) {
        return arr;
      }
      arr.push(obj);
      return arr;
    }, []);

    this.setState({
      [name + 's']: newArr,
    });
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
      },
      {
        name: 'general-position',
        type: 'text',
        placeholder: 'Enter your current position',
      }
    ];

    const contactInput = [
      {
        name: 'general-email',
        type: 'email',
        placeholder: 'Enter your email address',
      },
      {
        name: 'general-phone',
        type: 'tel',
        placeholder: 'Enter your phone number',
      },
      {
        name: 'general-linkedIn',
        type: 'text',
        placeholder: 'Enter link to your LinkedIn account',
      },
    ];

    const skillInput = [
      {
        name: 'skill-name',
        type: 'text',
        placeholder: 'Add your top 5 skills',
      },
    ];

    const summaryInput = [
      {
        name: 'general-description',
        type: 'text-area',
        placeholder: 'Write a short summary of your background and professional goals',
      },
    ];

    const experienceInput = [
      {
        name: 'location',
        label: 'Location',
        type: 'text',
        placeholder: 'City, State/Country',
      },
      {
        name: 'startDate',
        label: 'From',
        type: 'date',
      },
      {
        name: 'endDate',
        label: 'To',
        type: 'date',
      },
      {
        name: 'responsibility',
        label: 'Responsibilities',
        type: 'text-area',
        placeholder: 
          'Describe some of your key responsibilities and/or accomplishments. Separate each one with a semi-colon.',
      },
    ];

    const workInput = [
      {
        name: 'job-company',
        label: 'Company',
        type: 'text',
        placeholder: 'Company name',
      },
      {
        name: 'job-position',
        label: 'Position',
        type: 'text',
        placeholder: 'Position',
      },
    ];

    const schoolInput = [
      {
        name: 'school-institution',
        label: 'Educational institution',
        type: 'text',
        placeholder: 'Name of school or university',
      },
      {
        name: 'school-degree',
        label: 'Diploma or degree earned',
        type: 'text',
        placeholder: 'Name of diploma or degree',
      },
      {
        name: 'school-major',
        label: 'Major (if any)',
        type: 'text',
        placeholder: 'Name of major discipline',
      },
    ];

    return (
      <div className='content-wrapper'>
        <label   
          className='toggle-preview'
        >
          <input 
            type="checkbox" 
            className='toggle-input' 
            onClick={this.toggleEditMode}
          />
          <span className='toggle-slider'></span>
        </label>
        {mode.edit
          ? <Editable
              formDisplay={formDisplay}
              headerInput={headerInput}
              contactInput={contactInput}
              skillInput={skillInput}
              summaryInput={summaryInput}
              workInput={workInput.concat(experienceInput.map((obj) => {
                const newObj = {...obj};
                newObj.name = 'job-' + obj.name;
                return newObj;
              }))}
              schoolInput={schoolInput.concat(experienceInput.map((obj) => {
                const newObj = {...obj};
                newObj.name = 'school-' + obj.name;
                return newObj;
              }))}
              general={general}
              skill={skill} 
              job={job}
              school={school}
              skills={skills}
              jobs={jobs}
              schools={schools}
              editMode={mode.edit}
              onSubmit={this.onSubmit}
              onChange={this.handleChange}
              onClick={this.toggleFormDisplay}
              onEdit={this.editExperience}
              onDelete={this.deleteItem}
            />
          : <Preview 
              general={general}
              skill={skill} 
              job={job}
              school={school}
              skills={skills}
              jobs={jobs}
              schools={schools}
            />
        }
      </div>
    );
  }
};

export default App;
