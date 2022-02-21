import {
  BsGithub,
  BsLinkedin,
  BsFillEnvelopeFill,
  BsMessenger,
} from "react-icons/bs";

const About = () => {
  return (
    <>
    <section className="about" id="about" id="about_section">
      <div id="me"></div>

      <a href="https://github.com/rneyrinck/" target="_blank">
        <h4 className="doc">Documentation {"->"}</h4>
      </a>
      <h2 className="title">Hi, I'm Robert</h2>
      <p className="p1">
        Web-developer, VR enthusiast, tabletop gamer, cat-dad.
        <br />
        Check out some of my projects below, reach out to collab, and link up on
        social media!
      </p>
    </section>
      <div className="main social-links">
        <a href="https://github.com/rneyrinck/" target="_blank">
          <span
            id="social_hover_1"
            className="iconify"
            data-icon="carbon:logo-github"
          >
            <BsGithub />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/robert-neyrinck-5933a0104/"
          target="_blank"
        >
          <span
            id="social_hover_2"
            className="iconify"
            data-icon="carbon:logo-linkedin"
          >
            <BsLinkedin />
          </span>
        </a>
        <a href="http://m.me/robert.neyrinck.7" target="_blank">
          <span
            id="social_hover_3"
            className="iconify"
            data-icon="mdi:facebook-messenger"
            // style={"height: 32px", "width: 32px"}
          >
            <BsMessenger />
          </span>
        </a>
      </div>
      </>
  );
};
export default About;
