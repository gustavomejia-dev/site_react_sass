import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn /> },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href="https://www.linkedin.com/in/gustavoanalistadesenvolvimentodesistemas/" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
    
        </a>
        
        
        
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
