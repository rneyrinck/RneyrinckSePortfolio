import project1 from "../PicOfGTC.png";
import './projectList.css'
const ProjectList = () => {
  return (
    <>
      <div className="recentWork">
        <h4 className="recentWorkH4-1">Recent Work</h4>
        {/* <a href="#lastCard">
          <h4 className="recentWorkH4-2">See more {"->"}</h4>
        </a> */}
      </div>
      <section id="projects">
        <a href="https://rneyrinck.github.io/Project-2/">
          <div className="card-top" style={{backgroundImage:`url(${project1})`, backgroundPosition:'center'}}></div>
          <div className="card-bottom">
            <h1 className="name-div2-h1">Galaxy Cards</h1>
            <p>
              Create unique space themed trading cards using an API from NASA.
            </p>
          </div>
        </a>
        <a href="">
          <div className="card-top" style={{ background: { project1 } }}></div>
          <div className="card-bottom">
            <h1 className="name-div2-h1">Project Name</h1>
            <p>
              Project description will go here eventually with a super specific
              character limit
            </p>
          </div>
        </a>
        <a href="">
          <div className="card-top"></div>
          <div className="card-bottom">
            <h1 className="name-div2-h1">Project Name</h1>
            <p>
              Project description will go here eventually with a super specific
              character limit
            </p>
          </div>
        </a>
        <a href="" id="lastCard">
          <div className="card-top"></div>
          <div className="card-bottom">
            <h1 className="name-div2-h1">Project Name</h1>
            <p>
              Project description will go here eventually with a super specific
              character limit
            </p>
          </div>
        </a>
      </section>
    </>
  );
};
export default ProjectList;
