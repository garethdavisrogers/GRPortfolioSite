import React from "react";
import Intro from "./Intro";
import Bio from "./Bio";
import PersonalInterests from "./PersonalInterests";
import Resume from "./Resume";
import EmailMe from "./EmailMe";
import Accomplishments from "./Accomplishments";

const App = () => {
  return (
    <div className="page">
      <nav>Gareth Rogers</nav>
      <Intro />
      <Bio />
      <Resume />
      <PersonalInterests />
      <Accomplishments />
      <EmailMe />
    </div>
  );
};

export default App;
