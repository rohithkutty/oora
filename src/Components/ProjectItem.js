import React from 'react';
import '../App.css';

class ProjectItem extends React.Component {

  deleteProject(id) {
    this.props.onDelete(id);
  }

  render() {
    let { title, category, id } = this.props.project;
    return (
      <li className="projectitem">
        {title} - {category}  <strong><a href={null} onClick={this.deleteProject.bind(this, id)}>Remove</a></strong>
      </li>
    );
  }
}

export default ProjectItem;
