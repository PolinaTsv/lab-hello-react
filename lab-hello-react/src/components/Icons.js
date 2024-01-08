import img1 from "../images/icon1.png"
import img2 from "../images/icon2.png"
import img3 from "../images/icon3.png"
import img4 from "../images/icon4.png"


function Icons() {
    return (
        <div className="Icons-box">
        <div className="Icon-box">
      <img
        src={img1}
        alt="icons"
      />
      <h4>Declarative</h4>
      <p> React makes it painless to create interactive UIs</p>
      </div>
      <div className="Icon-box">
      <img
        src={img2}
        alt="icons"
      />
      <h4>Components</h4>
      <p> React makes it painless to create interactive UIs</p>
      </div>
      <div className="Icon-box">
      <img
        src={img3}
        alt="icons"
      />
      <h4>Single-way</h4>
      <p> React makes it painless to create interactive UIs</p>
      </div>
      <div className="Icon-box">
      <img
        src={img4}
        alt="icons"
      />
      <h4>JSX</h4>
      <p> React makes it painless to create interactive UIs</p>
      </div>
      </div>
    );
  }
  
  export default Icons;