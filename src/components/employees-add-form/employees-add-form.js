import { Component } from 'react';

// import './employees-add-form.css';
import './employees-add-form.scss';

class EmployeesAddForm extends Component {
  state = {
    name: '',
    salary: '',
  };

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name === '' || this.state.salary === '') return;
    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({
      name: '',
      salary: '',
    });
  };

  static onLog = () => {
    console.log('Hey');
  };

  static logged = 'on';

  render() {
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Add a new employee</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Name"
            name="name"
            value={name}
            onChange={this.onValueChange}
            required
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Salary in $"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
            required
          />
          <button type="submit" className="btn btn-outline-light">
            Add
          </button>
        </form>
      </div>
    );
  }
}

EmployeesAddForm.onLog();
console.log(EmployeesAddForm.logged);

export default EmployeesAddForm;
