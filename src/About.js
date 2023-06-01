import React from "react";

export default function About() {
  return (
    <section className="tab-content">
      <h2>About me</h2>
      <p>
        Hi there! I'm a passionate and dedicated web developer
        with a strong foundation in{" "}
        <strong className="html-abbr"> HTML</strong>,{" "}
        <strong className="css-abbr">CSS</strong>, and{" "}
        <strong className="js-abbr">JavaScript</strong>. I have
        experience working with various front-end frameworks and libraries,
        including <strong className="react-abbr">React.js</strong>, which
        I thoroughly enjoy using to build interactive and dynamic user interfaces.</p>

      <p> In addition to my front-end skills, I am proficient in back-end development
        using technologies such as <strong className="expr-abbr">Express.js</strong> {" "}
        and <strong className="node-abbr">Node.js</strong>. I have a solid understanding
        of server-side programming and RESTful API development. I love the process
        of creating robust and efficient server-side applications that power modern
        web applications.</p>

      <p>I have also worked with databases like <strong className="mongodb-abbr">MongoDB</strong>, utilizing its flexibility
        and scalability to design and implement data models that suit specific project
        requirements. My knowledge of database systems allows me to develop efficient
        and optimized data-driven applications.

      </p>

    </section>
  );
}
