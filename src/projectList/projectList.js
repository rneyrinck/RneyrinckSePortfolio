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
        <a href="https://rneyrinck.github.io/Project-2/" target='_blank'>
          <div className="card-top" style={{backgroundImage:`url(${project1})`, backgroundPosition:'center'}}></div>
          <div className="card-bottom">
            <h1 className="name-div2-h1">Galaxy Cards</h1>
            <p>
              Create unique space themed trading cards using an API from NASA.
            </p>
          </div>
        </a>
        <a href="https://pages.git.generalassemb.ly/rob-neyrinck/Cookbook-client/#/" target='_blank'>
          <div className="card-top" style={{ backgroundImage: `url("https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408?k=20&m=1155240408&s=612x612&w=0&h=Zvr3TwVQ-wlfBnvGrgJCtv-_P_LUcIK301rCygnirbk=")` }}></div>
          <div className="card-bottom">
            <h1 className="name-div2-h1">Cookbooker</h1>
            <p>
              Full stack MERN application where users can add their favorite cookbooks and authors. 
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
