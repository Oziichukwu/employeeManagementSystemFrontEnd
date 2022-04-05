import { Route, Switch } from 'react-router-dom';
import AddEmployee from './components/addEmployee'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/headerComponent'
import FooterComponent from './components/footerComponent'
import './App.css';


function App() { 
  return (
    <div>
      
        <HeaderComponent/>
        <div className="container">
          <Switch>
            
            <Route exact path = "/" component = {ListEmployeeComponent}/>
            <Route exact path = "/employees" component = {ListEmployeeComponent}/>
            <Route path = "/add-employee" component = {AddEmployee}/>
            <Route path = "/edit-employee/:id" component = {AddEmployee}/>
          </Switch>
        
        </div>
        <FooterComponent/>
     
    </div>
  );
}

export default App;
