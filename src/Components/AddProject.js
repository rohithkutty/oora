import React from 'react';
import uuid from 'uuid';

class AddProject extends React.Component {
  constructor() {
    super();
    this.state = {
      newProject: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static defaultProps = {
    categories: ['web development', 'mobile development', 'native development']
  }

  handleSubmit(e) {
    if (this.refs.title.value === '') {
      alert("Title is required");
    } else {
      this.setState({
        newProject: {
          id: uuid.v4(),
          title: this.refs.title.value,
          category: this.refs.category.value
        }
      }, function () {
        console.log(this.state.newProject);
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }

  render() {
    let categoriesOption = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    })

    return (
      <div className='projects'>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title</label>
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label>
            <select ref="category">
              {categoriesOption}
            </select>
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default AddProject;
