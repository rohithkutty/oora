import React, { Component } from 'react';
import './App.css';
import Project from './Components/Projects';
import AddProject from './Components/AddProject';
import uuid from 'uuid';
import Todos from './Components/Todos';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

  getToDos() {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(json => this.setState({todos: json}))
  }

  getProjects() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Google dashboard',
          category: 'web development'
        },
        {
          id: uuid.v4(),
          title: 'Amazon dashboard',
          category: 'mobile development'
        },
        {
          id: uuid.v4(),
          title: 'Azure dashboard',
          category: 'native development'
        }
      ]
    });
  }

  componentDidMount() {
    this.getToDos();
  }

  componentWillMount() {
    this.getProjects();
    this.getToDos();
  }

  handleAddProject(newProject) {
    let projects = this.state.projects;
    projects.push(newProject)
    this.setState({ projects: projects })
  }

  handleDelete(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({ projects: projects })
  }

  render() {
    return (
      <div className="App">
        <Project onDelete={this.handleDelete.bind(this)} projects={this.state.projects} />
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <hr />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
