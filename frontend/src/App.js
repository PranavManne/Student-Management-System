import './App.css';
import EmployeeListComponent from './components/EmployeeListComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
function App()
{
  return(
    <div className="bg-color">
          <HeaderComponent/>
          
          <div className="container mt-5">
            <EmployeeListComponent/>
          </div>
          
          <FooterComponent/>
    </div>
  )
}
export default App;