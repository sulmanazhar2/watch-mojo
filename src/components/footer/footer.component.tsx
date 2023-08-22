import Logo from "../../assets/Group 36701.svg";
import "./footer.styles.scss";

const links = [
  { label: "Home", url: "/" },
  { label: "Benefits", url: "/benefits" },
  { label: "Services", url: "/services" },
  { label: "Work Us", url: "/Work Us" },
  { label: "FAQs", url: "/faq" },
  { label: "Help Centre", url: "/help" },
  { label: "Privacy Policy", url: "/privacy-policy" },
  { label: "Terms and Conditions", url: "/terms-and-conditions" },
  { label: "Information Help", url: "/information-help" },
];

const contactInfo = [
  "ask@innovativemojo.com",
  "+12 793 012 03",
  "www.innovativemojo.com",
];

const Footer: React.FC = () => {
  return (
    <div className="footer-component">
      <div className="main-container">
        <div className="about-application">
          <Logo />
          <p className="description">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi .
          </p>
        </div>
        <div className="links-and-contact">
          <div className="links-container">
            <div className="column">
              {links.slice(0, 5).map((link) => (
                <a href={link.url} key={link.label}>
                  {link.label}
                </a>
              ))}
            </div>
            <div className="column">
              {links.slice(5).map((link) => (
                <a href={link.url} key={link.label}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="contact-container">
            {contactInfo.map((info) => (
              <p key={info}>{info}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="rights-container">
        <p>
          © 2023 Innovative Mojo. All Rights Reserved. With love by Broskeez
        </p>
      </div>
    </div>
  );
};

export default Footer;
