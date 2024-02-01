function SbFooter() {
  return (
    <div>
      {" "}
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
}

export default SbFooter;
