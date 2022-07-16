import Banner from './components/Banner';
import Services from './components/Services';
import Templates from './components/Templates';
import Workwithus from './components/Workwithus';
import NavBar from './components/NavBar';
import './css/app.css'
import './css/vendor/bootstrap.min.css'
import './css/vendor/font-awesome.css'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Services/>
      <Templates/>
      <Workwithus/>
    </div>
  );
}

export default App;