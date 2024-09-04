import "../style/style.scss";
export default function () {
    const features = [
        {
          id: 1,
          num:"01",
          title: 'Track company-wide progress',
          description:
            'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way down to the smallest of details. Never lose sight of the bigger picture again.',
        },
        {
          id: 2,
          num:"02",
          title: 'Advanced built-in reports',
          description:
            'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.',
        },
        {
          id: 3,
          num:"03",
          title: 'Everything you need in one place',
          description:
            'Stop jumping from one service to another to communicate, store files, track tasks, and share documents. Manage offers an all-in-one team productivity solution.',
        },
      ];
      return(
        <section className="featuresSection">
          <div className="sectionText">
                 <h1 className="titel">What's different about Manage?</h1>
                 <p className="discription">
                  Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams. </p>
          </div>
          
         <div className="faeturesList">{
                features.map((featur)=> (
                    <div key={featur.id} className="feature-item">
                        <span> {featur.num} </span>
                        <div className="textList">


                           <h5 className="feature-title">{featur.title}</h5>
                           <p className="feature-description">{featur.description}</p>
                        </div>
                    </div>
                ) )
                } </div>
        </section>
      )
}