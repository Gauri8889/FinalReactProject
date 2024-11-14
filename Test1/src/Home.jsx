const box1 = {
    width: "370px",
    height: "200px",
    alignContent: "center",
    marginTop: "15%",
    marginLeft: "45%",
    borderRadius: "5%",
    backgroundColor: "skyblue", 
    border: "2px solid black",
  };
  const box2 = {
    width: "250px",
    height: "130px",
    alignContent: "center",
    marginTop: "2%",
    marginLeft: "14%",
    borderRadius: "10%",
    backgroundColor: "yellow", 
    border: "2px solid black",
  };
  const box3 = {
    width: "200px",
    height: "50px",
    alignContent: "center",
    marginTop: "3%",
    marginLeft: "10%",
    textAlign: "center",
    borderRadius: "20%",
    backgroundColor: "red", 
    border: "2px solid black",
  };
  const p = {
    color: "white",
    fontSize: "20px", 
  };
  
  const Home = () => {
    return (
      <>
        <div style={box1}>
          <div style={box2}>
            <div style={box3}>
              <p style={p}>Cybrom</p>
            </div>
          </div>
        </div>
      </>
    );
  };
  export default Home;