import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaInstagramSquare,
  FaSteam
} from 'react-icons/fa';
import './footer.css';

function Footer(props) {
  let iconStyles = { color: 'white' };
  const { profile } = props;
  return (
    <footer className="footer--pin">
      <div className="icon-wrapper">
        <a href={`https://www.github.com/${profile.github}`} className="mx-1">
          <FaGithub size="50" style={iconStyles} />
        </a>
        <a href={`${profile.linkedin}`} className="mx-1">
          <FaLinkedin size="50" style={iconStyles} />
        </a>
        <a href={profile.steam} className="mx-1">
          <FaSteam size="50" style={iconStyles} />
        </a>
        <a href={profile.instgram} className="mx-1">
          <FaInstagramSquare size="50" style={iconStyles} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
