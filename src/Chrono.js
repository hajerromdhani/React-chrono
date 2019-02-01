import React from "react";

class ChronoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: 0,
      minute: 0,
      second: 0
    };

    this.start = this.start.bind(this);
    this.reset = this.reset.bind(this);
  }
  startSecond() {
    this.timer = setInterval(() => {
      this.setState(state => ({
        second: this.state.second + 1
      }));
    }, 100);
  }
  startMinute() {
    this.timer = setInterval(() => {
      this.setState(state => ({
        minute: this.state.minute + 1,
        second: 0
      }));
    }, 100);
  }
  startHour() {
    this.timer = setInterval(() => {
      this.setState(state => ({
        hour: this.state.hour + 1,
        minute: 0,
        second: 0
      }));
    }, 100);
  }
  start() {
    clearInterval(this.timer);
    if (this.state.second < 59) {
      this.startSecond();
    } else if (this.state.second == 59 && this.state.minute < 59) {
      this.startMinute();
    } else if (this.state.minute == 59 && this.state.hour < 59) {
      this.startHour();
    } else {
      this.reset();
    }
  }

  reset() {
    clearInterval(this.timer);
    setTimeout(() => {
      this.setState(state => ({
        hour: 0,
        minute: 0,
        second: 0
      }));
    }, 100);
  }
  render() {
    return (
      <div className="div-date">
        <div className="timer-div">
          <div>
            <h1>{String(this.state.hour).padStart(2, "0")}:</h1>
            <h5>Hour</h5>
          </div>
          <div>
            <h1>{String(this.state.minute).padStart(2, "0")}:</h1>
            <h5>Minute</h5>
          </div>
          <div>
            <h1>{String(this.state.second).padStart(2, "0")}</h1>
            <h5>Second</h5>
          </div>
        </div>
        <div className="btn-div">
          <button onClick={this.start}>Start</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default ChronoComponent;
