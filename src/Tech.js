import React from "react";
import ReactTooltip from "react-tooltip";

export default function Tech(props) {
  const tech = props.tech;
  let imageSrc =
    `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg` &&
    `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`;
  function addDifferentImg(event) {
    event.target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-plain.svg`;
  }
  return (
    <>
      {imageSrc && (
        <>
          <img
            className="tech-icon"
            alt={`${tech}`}
            data-for="toolTip"
            data-tip={tech}
            onError={addDifferentImg}
            src={imageSrc}
          />
          <ReactTooltip id="toolTip" getContent={(dataTip) => `${dataTip}`} />
        </>
      )}
    </>
  );
}
