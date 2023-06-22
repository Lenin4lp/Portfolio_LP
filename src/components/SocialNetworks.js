import React from "react";
import "../styleSheets/SocialNetworks.css";

// *This function shows social networks logos and their respective url

function SocialNetworks({ sNetworks }) {
  return (
    <a
      className="sn-logo"
      href={sNetworks.snlink}
      rel="noopener noreferrer"
      target="_blank"
    >
      <img
        className="img-fluid"
        src={require(`../images/${sNetworks.sn}.svg`)}
        alt=""
      />
    </a>
  );
}

export default SocialNetworks;
