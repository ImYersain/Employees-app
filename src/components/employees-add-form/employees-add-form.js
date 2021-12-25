import {Component} from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: '',
            error: false
        }
    }

    onValueChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.name.length >= 3 && this.state.salary !== ''){
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: '',
                error: false
            })
        } else {
            this.setState({
                error: true
            })
        }

        
    }



    render(){
        const {name, salary, error} = this.state;
        let classNames = `form-control new-post-label`;
        if(error === true) {
            classNames += ' red';
        }
        
        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className={classNames}
                        placeholder='What is his name?'
                        onChange={this.onValueChange} 
                        name="name"
                        value={name} />
                    <input type="number"
                        className={classNames}
                        placeholder='Salary in USD?'
                        onChange={this.onValueChange} 
                        name="salary"
                        value={salary} />
    
                    <button type="submit"
                            className="btn btn-outline-light">Add</button>
                </form>
            </div>
        )
    }

}

export default EmployeesAddForm;