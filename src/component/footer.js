export default function () {
    return (
        <footer className="footer">
          <div className="footer-top">
            <h2>Simplify how your team works today.</h2>
            <button className="get-started-btn">Get Started</button>
          </div>
          <div className="footer-middle">
            <div className="footer-column">
              <h3>Manage</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">About Us</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Careers</h3>
              <ul>
                <li><a href="#">Community</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Stay Updated</h3>
              <form>
                <input type="email" placeholder="johnmadden@mail.com" />
                <button type="submit">Go</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="social-icons">
              <a href="#"><img src="path/to/facebook-icon.png" alt="Facebook" /></a>
              <a href="#"><img src="path/to/youtube-icon.png" alt="YouTube" /></a>
              <a href="#"><img src="path/to/twitter-icon.png" alt="Twitter" /></a>
              <a href="#"><img src="path/to/pinterest-icon.png" alt="Pinterest" /></a>
              <a href="#"><img src="path/to/instagram-icon.png" alt="Instagram" /></a>
            </div>
            <p>&copy; 2020. All Rights Reserved</p>
          </div>
        </footer>
      );
}