export default function () {
    const testimonials = [
        {
          id: 1,
          name: 'Anisha Li',
          text: 'Manage has supercharged our team’s workflow. The maintain visibility on larger milestones at all times keeps everyone motivated.',
          image: '../images/avatar-anisha.png', 
        },
        {
          id: 2,
          name: 'Ali Bravo',
          text: 'We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.',
          image: '../images/avatar-ali.png',
        },
        {
          id: 3,
          name: 'Richard Watts',
          text: 'Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!',
          image: 'avatar-richard.png', 
        },
      ];
    
      return (
        <section className="testimonials-section">
          
            <div className="testimonials-list">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-item">
                  <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                </div>
              ))}
            </div>
          
        </section>
      );
}