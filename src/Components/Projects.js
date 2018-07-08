import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem';

class Project extends React.Component {
  constructor() {
    super();
    this.deleteProject = this.deleteProject.bind(this);
  }

  deleteProject(id) {
    this.props.onDelete(id);
  }

  render() {
    // let { projects } = this.props.projects;
    let projectItems;

    if (this.props.projects) {
      projectItems = this.props.projects.map((project) => {
        // console.log(project);
        return (
          <ProjectItem onDelete={this.deleteProject} key={project.id} project={project} />
        );
      });
    }
    return (
      <div className='projects'>
        <h1>My Projects</h1>
        {projectItems}
      </div>
    );
  }
}

Project.propTypes = {
  projects: PropTypes.array,
  onDelete: PropTypes.func
}

export default Project;
