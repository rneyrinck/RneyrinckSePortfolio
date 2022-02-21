import './header.css'
const Header = () => {
    return(
        <nav>
        <div className="header title">
          <h1 className="header title h1" id="header_title">Robert Neyrinck</h1>
        </div>
        <div className="dropdown-menu" id="dropdown-menu">
          
          <a href="#projects" id="project_button1"><h2>Projects</h2></a>
          <a href="#contact_section" id="project_button2"><h2>Contact</h2></a>
        </div>
      </nav>
    )
}
export default Header