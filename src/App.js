import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/headerComponent'
import FooterComponent from './components/footerComponent'


function App() {
  return (
    <div>
      <HeaderComponent/>
      <ListEmployeeComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
