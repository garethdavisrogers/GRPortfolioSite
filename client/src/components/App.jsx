import React from "react";
import mean_mug from "../../public/mean_mug_cropped.jpg";
import downArrow from "../../public/thick-arrow-pointing-down.png";
import Typical from "react-typical";
import Skills from "./Skills";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      blueArrow: false,
    };
  }

  blueArrow = () => {
    this.setState({ blueArrow: true });
  };
  textTimer = () => {
    setInterval(this.blueArrow, 13000);
  };

  componentDidMount() {
    this.textTimer();
  }

  render() {
    const { blueArrow } = this.state;
    return (
      <div className="page">
        <div className="header-image">
          <button
            className="skip-intro"
            onClick={() => this.setState({ blueArrow: true })}
          >
            Skip Intro
          </button>
          <img src={mean_mug} className="mean-mug" />
        </div>
        <div className="typical-intro">
          {!blueArrow && (
            <Typical
              steps={[
                1000,
                "Hi...",
                1000,
                "I'm Gareth",
                1000,
                "And I'm a software engineer",
                2000,
                "Follow me, please",
              ]}
            />
          )}
        </div>
        {blueArrow && <img className="pointing-arrow" src={downArrow} />}
        <Skills />
      </div>
    );
  }
}

export default App;
