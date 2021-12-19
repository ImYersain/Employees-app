import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      data: [
        {name:"John Smith", salary: "1000", increase: false, id: 1},
        {name:"Alex Jane", salary: "500", increase: true, id: 2},
        {name:"Frank Savage", salary: "2000", increase: false, id: 3},
      ]
    }
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      // const index = data.findIndex(elem => elem.id == id);       способ удаления элемента через поиска индекса, и конкатенации массива
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newArr = [...before, ...after];

      return{
        data: data.filter(item => item.id != id)          /* более короткий способ, с помощью метода филтер возвращается новвый массив, с элементами которые проходят проверку фильтрем*/
      }
    })
  }
 
  



  render(){
    return (
      <div className="app">
        <AppInfo />
  
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList 
            data={this.state.data} 
            onDelete={this.deleteItem}/>
        <EmployeesAddForm />
      </div>
    );
  }
}


export default App;