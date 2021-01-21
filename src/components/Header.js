import React from "react";

class Header extends React.Component {
  headerStyle = {
    padding: "20px 0",
    lineHeight: "2em",
  }

  componentDidUpdate(prevProps, prevState) {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor= "rgb(" + x + "," + y + "," + z + ")";

    if(prevProps.headerSpan !== this.props.headerSpan){
      document.getElementById("inH1").innerHTML = "clicked";
      document.getElementById("inH1").style.backgroundColor = bgColor;
    }
  }

  render() {
    return (
      <header style={this.headerStyle}>
        <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>Todos</h1> <span id="inH1"></span>
        <p style={{fontSize: "15px"}}>
          Please add to-do items
        </p>
      </header>
    )
  }
};

export default Header;