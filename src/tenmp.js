import React from "react";
import img1 from "./images/oleato.png";
import img2 from "./images/savory.png";
import img3 from "./images/sbrewards.png";
import img4 from "./images/collection.png";
import img5 from "./images/sblogo.png";
import img6 from "./images/sb.png";
import img7 from "./images/sbcom.png";

const App = () => {
  return (
    <div>
      {/* Starbucks Header Section */}
      <header className="header">
        <div className="header-container">
          <div className="header-wrapper">
            <div className="logo">
              <img src={img5} alt="Logo" />
            </div>

            <div className="header_menue">
              <nav>
                <ul>
                  <li>
                    <a href="#">MENU</a>
                  </li>
                  <li>
                    <a href="#">REWARDS</a>
                  </li>
                  <li>
                    <a href="#">GIFT CARDS</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="header2nd-flex">
              <div className="header-icon">
                <i
                  className="fa-solid fa-location-dot"
                  style={{ fontSize: "2em" }}
                ></i>
                <div className="find-store">
                  <p>Find a store</p>
                </div>
              </div>

              <div className="header-link-button">
                <div>
                  <a href="#" className="btn-one">
                    Sign in
                  </a>
                </div>
                <div>
                  <a href="#" className="btn-two">
                    Join now
                  </a>
                </div>
              </div>
              <div className="bx bx-menu-alt-right" id="menu-icon"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Starbucks all Section */}

      <main>
        {/* Section 2 */}
        <section>
          <div class="box-container">
            <div className="flex-wrapper">
              <div className="poster-four">
                <img src={img1} alt="" />
              </div>

              <div class="poster-four">
                <h2>Introducing Oleato™</h2>
                <p>
                  A luxuriously smooth coffee experience perfectly balanced with
                  Partanna® extra virgin olive oil.
                </p>
                <a href="#">Order now</a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <div className="box-container">
            <div className="flex-wrapper-three">
              <div className="poster-three">
                <h2>Savory and satisfying</h2>
                <p>
                  Grab a subtly sweet Chicken, Maple Butter & Egg Sandwich on
                  the way.
                </p>
                <a href="#">Order now</a>
              </div>

              <div className="duck">
                <img src={img2} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="box-container">
            <div class="flex-wrapper-two">
              <div class="coffee-image">
                <img src={img3} alt="" />
              </div>

              <div class="poster-two">
                <h2>Get rewarded for your routine</h2>
                <p>
                  Savor each sip a little more with Rewards in the Starbucks
                  app. Join now and the more you visit, the more free favorites
                  you can earn.*
                </p>
                <a href="#">Join for free</a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <div className="box-container">
            <div className="flex-wrapper-four">
              <div className="poster-four">
                <h2>Our latest collection</h2>
                <p>
                  Damon Brown celebrates Black culture and his take on community
                  using surprising color palettes, angles, and shapes in this
                  artist series.
                </p>
                <a href="#">Meet Damon</a>
              </div>

              <div className="duck">
                <img src={img4} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="box-container">
            <div class="flex-wrapper-two">
              <div class="coffee-image">
                <img src={img6} alt="" />
              </div>

              <div class="poster-two">
                <h2>Your go-to brought to you</h2>
                <p>
                  Enjoy 20% off Starbucks orders of $15+ on DoorDash. Offer
                  valid 1/22-2/4. New customers only. Max discount up to $5.
                  Terms apply.**
                </p>
                <a href="#">Order Now</a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <div className="box-container">
            <div className="flex-wrapper-five">
              <div className="poster-five">
                <h2>
                  “This is our community. We’re in it together.” - Olivia,
                  Starbucks Partner (Employee)
                </h2>
                <p>
                  Our partners uplift each other and their communities every
                  day.
                </p>
                <a href="#">Learn more</a>
              </div>

              <div className="duck">
                <img src={img7} alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Starbucks all Section END */}

      {/* Starbucks Customizations Section */}
      <section className="paragraph">
        <div className="box-container">
          <div className="flex-wrapper-seven">
            {/* Paragraph One */}
            <div className="paragraph-one">
              <p>
                *Restrictions apply. At participating stores. See
                starbucks.com/terms for details.
              </p>
            </div>

            {/* Paragraph Two */}
            <div className="paragraph-two">
              <p>
                **Valid 1/22-2/4, enjoy 20% off your Starbucks order of $15 or
                more through the DoorDash app, excluding taxes and fees. Maximum
                discount is up to $5. New customers only. Restrictions and other
                taxes/fees/gratuity still apply. See DoorDash app for details
                and location availability. Fees subject to change. Restricted
                delivery area. Menu limited. Delivery orders may be limited to a
                maximum subtotal no more than $100, excluding taxes and fees, on
                any single transaction. We may adjust this limit at any time at
                our discretion. Product image may vary from delivered product.
                Available at participating locations only. All deliveries
                subject to availability. Must have or create a valid DoorDash
                account with valid form of accepted payment on file. No cash
                value. Non-transferable. Prices for Starbucks items purchased
                through DoorDash may be higher than as marked or posted in
                stores. May not be combined with other offers, discounts or
                promotions. See DoorDash terms and conditions at
                help.doordash.com/consumers/s/article/offer-terms-conditions.
                <span>
                  <a
                    href="help.doordash.com/consumers/s/article/offer-terms-conditions. "
                    target="_blank"
                  >
                    help.doordash.com/consumers/s/article/offer-terms-conditions.
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Starbucks Customizations Section END */}

      {/* Essential Pages */}
      <section className="info-links">
        {/* ... (rest of essential pages code) */}
      </section>
      {/* Essential Pages End */}
      <section className="info-links">
        <div className="box-container">
          <div className="link-wrapper">
            {/* About Us */}
            <div className="bold">
              <p>About Us</p>
              <a href="#">Our Company</a>
              <a href="#">Our Coffee</a>
              <a href="#">Stories & News</a>
              <a href="#">Starbucks Archive</a>
              <a href="#">Investor Relations</a>
              <a href="#">Customer Service</a>
              <a href="#">Contact Us</a>
            </div>

            {/* Careers */}
            <div className="bold">
              <p>Careers</p>
              <a href="#">Culture and Values</a>
              <a href="#">Inclusion, Diversity, and Equity </a>
              <a href="#">College Achievement Plan</a>
              <a href="#">Alumni Community</a>
              <a href="#">US Careers</a>
              <a href="#">International Careers</a>
            </div>

            {/* Social Impact */}
            <div className="bold">
              <p>Social Impact</p>
              <a href="#">People</a>
              <a href="#">Planet</a>
              <a href="#">Environmental and Social Impact Reporting</a>
            </div>

            {/* For Business Partners */}
            <div className="bold">
              <p>For Business Partners</p>
              <a href="#">Landlord Support Center</a>
              <a href="#">Suppliers</a>
              <a href="#">Corporate Gift Card Sales</a>
              <a href="#">Office and Foodservice Coffee</a>
            </div>

            {/* Order and Pick Up */}
            <div className="bold">
              <p>Order and Pick Up</p>
              <a href="#">Order on the App</a>
              <a href="#">Order on the Web</a>
              <a href="#">Delivery</a>
              <a href="#">Order and Pick Up Options</a>
              <a href="#">Explore and Find Coffee for Home</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <section>
          <div className="box-container">
            <div className="icon-box">
              <i className="fa-brands fa-spotify bx-tada-hover"></i>
              <i className="fa-brands fa-facebook bx-tada-hover"></i>
              <i className="fa-brands fa-pinterest bx-tada-hover"></i>
              <i className="fa-brands fa-instagram bx-tada-hover"></i>
              <i className="fa-brands fa-youtube bx-tada-hover"></i>
              <i className="fa-brands fa-twitter bx-tada-hover"></i>
            </div>
            <div className="policy-page">
              <div className="policy-page-link">
                <a href="#">Privacy Notice</a>
                <a href="#">Terms of Use</a>
                <a href="#">Do Not Share My Personal Information </a>
                <a href="#">CA Supply Chain Act</a>
                <a href="#">Accessibility</a>
              </div>

              <span>
                <a href="#" className="preferences">
                  Cookie Preferences
                </a>
              </span>
            </div>
            <div className="footer-p">
              <p>© 2024 Starbucks Coffee Company. All rights reserved.</p>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default App;
