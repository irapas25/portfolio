import React from "react";
import Tech from "./Tech";

export default function TechList({ techArr }) {
  return (
    <>
      <h2>Technologies</h2>
      <div className="tech-list">
        {techArr.map((tech, index) => (
          <Tech key={`${index}-${tech}`} tech={tech} />
        ))}
      </div>
    </>
  );
}
