export default function () {
    return (
        <footer className="footer">
            <div className="logo&social">

            <div className="social-icons">
              <a href="#"><img src="path/to/facebook-icon.png" alt="Facebook" /></a>
              <a href="#"><img src="path/to/youtube-icon.png" alt="YouTube" /></a>
              <a href="#"><img src="path/to/twitter-icon.png" alt="Twitter" /></a>
              <a href="#"><img src="path/to/pinterest-icon.png" alt="Pinterest" /></a>
              <a href="#"><img src="path/to/instagram-icon.png" alt="Instagram" /></a>
            </div>
            </div>
          <div className="footer-top">
            <div className="footer-column">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">About Us</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <ul>
                <li><a href="#">Community</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <form>
                <input type="email" placeholder="johnmadden@mail.com" />
                <button type="submit">Go</button>
              </form>
            </div>
          </div>
         
        </footer>
      );
}