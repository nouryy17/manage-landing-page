import img from "../images/illustration-intro.svg"
import "../style/MainContent.sass"
import 'animate.css'
export default function () {
    return(
        <section className="main-content">
        
          <div className="text-content">
            <h1 className="animate__animated  animate__backInDown">Bring everyone together to build better products.</h1>
            <p className="animate__animated animate__bounceInLeft">Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
            <span  className="animate__animated animate__bounceInLeft">Get Started</span>
          </div>
          <div className="stats-content">
            <img className="animate__animated animate__rollIn" src={img}></img>
          </div>
        
      </section>
    )
}