import '../images/RobertNeyrinckResume.pdf' 
const Footer = () => {
  return (
    <footer id="contact_section">
      <h3>@rob-neyrinck</h3>

      <div className="footer-links">
        <a
          className="email-me"
          href="mailto:robert.a.neyrinck@gmail.com?subject=Robert Neyrinck's Portfolio"
        >
          <h4>Email me</h4>
        </a>
        <a
          className="download-resume"
          href={'https://docs.google.com/document/d/1lli2RrjXKFHZp-WOEKLmlniocHS-htE7oEXC3qK2_w0/edit?usp=sharing'}
          target="_blank"
          download
        >
          {/* <span
            className="iconify"
            data-icon="akar-icons:arrow-down"
            // style={"color: #cfff69 fontSize=20px"}
          ></span> */}
          <h4>Check out my resume</h4>
        </a>
      </div>
      <h4>(c) ROBERT NEYRINCK, 2022</h4>
    </footer>
  );
};
export default Footer;
