import React from "react";

import TechList from "./TechList";
import { techArr } from "./projectList";

export default function ContactMe() {
  return (
    <section className="tab-content">
      <h2>Contact me</h2>
      <div className="contact">
        <div className="contact-info">
          <p>
            Are you looking to bring your web project to life? Look no
            further! With my strong foundation in modern JavaScript frameworks
            and a track record of delivering high-quality work on time, I am
            ready to take on new challenges and contribute to the success of
            your organization. Contact me to learn more about how I can add
            value to your team
          </p>
          <p>
            <span className="bold">Email: </span>
            <a href="mailto:irapas25@yahoo.fr">irapas25@yahoo.fr</a>
          </p>
        </div>
      </div>
      <TechList techArr={techArr} />
    </section>
  );
}
