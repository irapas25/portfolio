import React, { useEffect, useState } from "react";
import About from "./About";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import avatar from "./images/avatar.jpg";
export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [tabs, setTabs] = useState([
    {
      id: 1,
      title: "About",
      Component: <About />,
    },
    {
      id: 2,
      title: "Projects",
      Component: <Projects />,
    },
    {
      id: 3,
      title: "Contact",
      Component: <ContactMe />,
    },
  ]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const handleDarkMode = (value) => {
    setDarkMode(value);
  };

  return (
    <main className="container">
      <div className="dark-mode-toggler">
        <input
          type="checkbox"
          id="toggler"
          onChange={(e) => {
            if (e.target.checked) {
              handleDarkMode(true);
            } else {
              handleDarkMode(false);
            }
          }}
          checked={darkMode}
        />

        <label htmlFor="toggler" aria-label="toggler for Dark Mode" />
      </div>
      <div className="header-section">
        <div className="header-frame">
          <h1>Pascal Irankunda</h1>
          <h2>Web Developer in Edmonton</h2>
        </div>
        <div className="gradient-box">
          <img src={avatar} className="img-frame" alt="Pascal Irankunda" />
        </div>
      </div>
      <section className="tabs-section">
        <div className="tabs">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              className={index === activeTab ? "tab active-tab" : "tab"}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="tab-content">
          {tabs[activeTab] && tabs[activeTab].Component}
        </div>
      </section>
    </main>
  );
}
