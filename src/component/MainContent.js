import img from "../images/illustration-intro.svg"
export default function () {
    return(
        <section className="main-content">
        <div className="container">
          <div className="text-content">
            <h1>Bring everyone together to build better products.</h1>
            <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
            <a href="#" className="btn-get-started">Get Started</a>
          </div>
          <div className="stats-content">
            <img src={img}></img>
          </div>
        </div>
      </section>
    )
}