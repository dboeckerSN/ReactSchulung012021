import React, { useEffect, useRef } from "react";

const Header = props => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "2em",
  }
  const isInitialMount = useRef(true);
  console.log(isInitialMount);

  useEffect(() => {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor= "rgb(" + x + "," + y + "," + z + ")";

    if(isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      document.getElementById("inH1").innerHTML = "clicked";
      document.getElementById("inH1").style.backgroundColor = bgColor;
    }
  }, [props.headerSpan])

  // const componentDidUpdate = (prevProps, prevState) {
  //   let x = Math.floor(Math.random() * 256);
  //   let y = Math.floor(Math.random() * 256);
  //   let z = Math.floor(Math.random() * 256);
  //   let bgColor= "rgb(" + x + "," + y + "," + z + ")";

  //   if(prevProps.headerSpan !== this.props.headerSpan){
  //     document.getElementById("inH1").innerHTML = "clicked";
  //     document.getElementById("inH1").style.backgroundColor = bgColor;
  //   }
  // }

  return (
    <header style={headerStyle}>
      <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>Todos</h1> <span id="inH1"></span>
      <p style={{fontSize: "15px"}}>
        Please add to-do items
      </p>
    </header>
  )
};

export default Header;