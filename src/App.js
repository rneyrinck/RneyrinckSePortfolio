import logo from './logo.svg';
import './App.css';
import Header from './header/header';
import About from './about/about';
import ProjectList from './projectList/projectList';
import Footer from './footer/footer';
import './grid.css'
import './Style2.css'

function App() {
  return (
    <div className="App">
        <Header/>
        <About/>
        <ProjectList/>
        <Footer/>
    </div>
  );
}

export default App;
