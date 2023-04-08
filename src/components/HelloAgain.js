import React, { Component } from "react";
import styles from "../style/hello.again.css";

class HelloAgain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number : 0
    }
  }

  tambahAngka = () => {
    this.setState({ number: this.state.number + 1 });
  }

  kurangAngka = () => {
    this.setState({ number: this.state.number - 1 });
  }

  resetAngka = () => {
    this.setState({ number: 0})
  }

  render() {
    return (
      <>
      <h1>Hello Again!</h1>
      <p>{this.state.number}</p>
      <button className= {`${styles}, btn`} onClick={this.tambahAngka}>
        tambahAngka
      </button>
      <button className= "btn-sm" onClick={this.kurangAngka}>
        kurangAngka
      </button>
      <button className= "btn-success" onClick={this.resetAngka}>
        Reset
      </button>
      </>
    )
  }
}

export default HelloAgain;