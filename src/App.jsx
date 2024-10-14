import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Asset1 from '../src/assets/Asset1.png';
import Asset2 from '../src/assets/Asset2.png';
import Logo1 from '../src/assets/logo1.png';
import Logo2 from '../src/assets/logo2.png';
import Logo3 from '../src/assets/logo3.png';

function App() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const sideNavRef = useRef(null);
  const searchInputRef = useRef(null);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const handleClickOutside = (event) => {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
      setIsSideNavOpen(false);
    }
  };

  useEffect(() => {
    if (isSideNavOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSideNavOpen]);

  const handleSearchHover = () => {
    setIsSearchOpen(true);
    searchInputRef.current.focus();
  };

  const handleSearchBlur = () => {
    setIsSearchOpen(false);
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <div className="logo">JH | SERENO</div>
        </div>
        <div className="navbar-center">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact Us</a>
        </div>
        <div className="navbar-right">
          <div className="search-container" onMouseEnter={handleSearchHover} onMouseLeave={handleSearchBlur}>
            <button className="search-button">Search</button>
            <input
              type="text"
              className={`search-input ${isSearchOpen ? 'open' : ''}`}
              ref={searchInputRef}
              onBlur={handleSearchBlur}
            />
          </div>
          <div className="hamburger-icon" onClick={toggleSideNav}>☰</div>
        </div>
      </nav>

      {isSideNavOpen && (
        <div className="side-nav" ref={sideNavRef}>
          <ul>
            <li><a href="#meet-the-team">Meet the Team</a></li>
            <li><a href="#search-for-homes">Search for Homes</a></li>
            <li><a href="#our-communities">Our Communities</a></li>
            <li><a href="#home-valuation">Home Valuation</a></li>
            <li><a href="#homes-across-america">Homes Across America</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
          </ul>
        </div>
      )}
      <header className="hero-section">
        <div className="hero-image"></div>
        <div className="hero-content">
          <h1>Our Services</h1>
          <p>
            At JH Sereno, we’re dedicated to providing comprehensive real estate services to help you make informed and confident decisions. Whether you're buying, selling, renting, or investing, we offer a wide range of solutions tailored to meet your needs.
          </p>
          <button className="cta-button">Book an Appointment</button>
        </div>
      </header>
      <section className="marketing-plan">
        <div className='dash'></div>
        <h2>Marketing Plan</h2>
        <div className="plan-cards">
          <div className="plan-card">
            <div className="icon">📧</div>
            <h3>Responsive</h3>
            <p>I am always available via phone, text, or email.</p>
          </div>
          <div className="plan-card">
            <div className="icon">🏳️</div>
            <h3>Syndication</h3>
            <p>I market your property locally, nationally, and internationally.</p>
          </div>
          <div className="plan-card">
            <div className="icon">📍</div>
            <h3>Virtual Tour</h3>
            <p>Let's make your home stand out with a high quality virtual tour.</p>
          </div>
          <div className="plan-card">
            <div className="icon">🖼️</div>
            <h3>Photography</h3>
            <p>Beautiful, high-end photography is a central part of our marketing plan for your property.</p>
          </div>
        </div>
      </section>
      <section className="decor-guidance">
        <div className="decor-grid">
          <div className="decor-image">
            {/* Image can be added here */}
          </div>
          <div className="decor-content">
            <h2>Decor Guidance</h2>
          </div>
          <div className="layout-content">
            <h2>Intentional Layout</h2>
          </div>
          <div className="guidance-list">
          <div class="background-image"></div>
            <ul>
              <li>Unclutter and organize your home</li>
              <li>Neatly arrange drawers and cabinets</li>
              <li>Keep pets outdoors or off the premises</li>
              <li>Play soft music</li>
            </ul>
          </div>
          <div className="layout-list">
          <div class="background-image"></div>
            <ul>
              <li>Unclutter and organize your home</li>
              <li>Neatly arrange drawers and cabinets</li>
              <li>Keep pets outdoors or off the premises</li>
              <li>Play soft music</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="process-section">
        <div className="dash-2"></div>
        <h2>The Selling Process</h2>
        <div className="process-cards">
          {[
            { title: "Consult & Plan", description: "Discuss your goals and create a strategy." },
            { title: "Prepare Your Home", description: "Get your home ready for the market." },
            { title: "Market Your Home", description: "Utilize our marketing strategies to reach buyers." },
            { title: "Negotiate Offers", description: "Review and negotiate offers with expert guidance." },
            { title: "Close the Deal", description: "Finalize the sale and complete the transaction." }
          ].map((step, index) => (
            <div className="process-card" key={index}>
              <div className="step-number">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
        <div className="dash-2"></div>
        <h2>The Buying Process</h2>
        <div className="process-cards">
          {[
            { title: "Initial Consultation", description: "Understand your needs and preferences." },
            { title: "Home Search", description: "Find properties that match your criteria." },
            { title: "Make an Offer", description: "Submit an offer and negotiate terms." },
            { title: "Close the Purchase", description: "Complete the purchase and move in." }
          ].map((step, index) => (
            <div className="process-card" key={index}>
              <div className="step-number">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="experience-section">
        <div className="experience-grid">
          <div className="experience-image">
            {/* Image can be added here */}
          </div>
          <div className="experience-content">
            <h2>We Want To Create An Unforgettable Experience For You...</h2>
            <p>
              We combine data gained from your home's Comparative Market Analysis with local market research to create a marketing plan designed to help you meet your selling goals. Your home's carefully designed plan will include a range of online, print, and other marketing tools targeted to the best-qualified pool of buyers. Successfully marketing a home in today's real estate environment requires a firm with experience and flexibility. Hansen Partners provides both.
            </p>
          </div>
          <div className="success-content">
            <h2>Over 33 Years of Real Estate Success</h2>
            <p>
              We provide every one of our clients with a level of service they won't find anywhere else. We give them what they need, often before they know they need it. In real estate, almost everything can be negotiated. When you choose Hansen Partners it is experience is 100% nonnegotiable. And it's an experience like no other.
            </p>
          </div>
          <div className="success-image">
            {/* Image can be added here */}
          </div>
          <div className="tablet-image">
            {/* Image can be added here */}
          </div>
          <div className="tablet-content">
            <h2>The Hansen Partners Communications Tablet</h2>
            <p>
              To enhance communication, we offer the Hansen Partners Communications Tablet, a tool that keeps you updated on your home's status and marketing efforts. Key benefits include:
            </p>
            <ul>
              <li>The ability to review and sign documents from anywhere.</li>
              <li>Real-time access to marketing materials and updates.</li>
              <li>Dedicated communication space for quick notes or video messages.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="marketing-strategy">
        <div className="strategy-header">
          <p>"We believe in transparency and guiding you through the real estate process, especially in uncertain times. With our proven track record, you can trust us to handle your needs efficiently and thoughtfully, anticipating your requirements along the way. After all, you are who you work with."</p>
        </div>
        <div className="strategy-content">
          <div className="strategy-text">
            <h2>We Market Your Home to The World</h2>
            <p>Our Online Marketing Strategy</p>
            <p>The Bay Area remains one of the world's most sought-after regions to live in, and when looking to sell, it is vital that your home be marketed online to audiences locally, nationally, and internationally.</p>
          </div>
          <div className="exposure-grid">
            <div className="exposure-item">
              <h3>Local Exposure</h3>
              <p>Through our partnerships with local media, we ensure your property is seen by the right audience. Our targeted approach maximizes visibility and engagement within the community.</p>
            </div>
            <div className="exposure-item">
              <h3>National Exposure</h3>
              <p>We use top-ranking portals and influencers to reach a national audience, ensuring your property is marketed to potential buyers across the country.</p>
            </div>
            <div className="exposure-item">
              <h3>International Exposure</h3>
              <p>Foreign buyers keep looking for a slice of paradise. We market your property on international platforms, reaching buyers in key markets such as China, Europe, Canada, and more.</p>
            </div>
          </div>
        </div>
      </section>
        <section className="global-partners">
          <div className="partners-images">
            <div className="partners-image">
              <img className="small-image" src={Asset1} alt="Description of Image 1" />
            </div>
            <div className="partners-image">
              <img className="small-image" src={Asset2} alt="Description of Image 2" />
            </div>
          </div>
          <div className="partners-content">
            <p>Leading Real Estate Companies of The World & Luxury Portfolio International</p>
            <p>
              JHRealty is a founding member of Luxury Portfolio International, the luxury division of Leading Real Estate Companies of the World®. With more than 500 member firms around the world, our luxury listings are exposed to a vast global audience and local real estate buyers and investors in over 70 countries.
            </p>
            <p>Who is Luxury Real Estate?</p>
            <p>Who’s Who in Luxury Real Estate is a global collection of luxury real estate brokers.</p>
            <p>
              Through our international affiliations, we have a strong presence in over 70 countries. Our luxury listings are sent to prominent international real estate sites, reaching over 70 million potential buyers and investors worldwide through our relationships with:
            </p>
            <div className="partners-logos">
              <img src={Logo1} alt="Leading Real Estate" />
              <img src={Logo2} alt="Luxury Portfolio" />
              <img src={Logo3} alt="Luxury Real Estate" />
            </div>
          </div>
        </section>
        <section className="work-with-us">
        <div className="work-with-us-container">
          <div className="work-content">
            <div className="work-text">
              <h2>Work With Us</h2>
              <p>
                With decades of experience in luxurious Tri Valley real estate, our team is here to ensure that your dreams are a reality. Let us guide you through your home buying journey, contact us today!
              </p>
              <button className="contact-button">Contact Us</button>
              <h3>Newsletter</h3>
              <p>Subscribe to our Newsletter for latest news and updates. Stay tuned!</p>
              <div className="newsletter-checkbox">
                <input type="checkbox" id="newsletterConsent" />
                <label htmlFor="newsletterConsent">By providing Julie Hansen Partnership your contact information, you acknowledge and agree to our Privacy Policy and consent to receiving marketing communications, including through automated calls, texts, and emails, some of which may use artificial or prerecorded voices. This consent isn’t necessary for purchasing any products or services and you may opt out at any time. To opt out from texts, you can reply, ‘stop’ at any time. To opt out from emails, you can click on the unsubscribe link in the emails. Message and data rates may apply.</label>
              </div>
              <input className='emailInput' type="email" placeholder="Email Address" />
              <button className="subscribe-button">Subscribe</button>
            </div>
          </div>
          <div className="contact-info">
            <h3>Julie Hansen Partnership</h3>
            <p>
              An elite group of the East Bay's most talented and visionary real estate professionals believed buyers and sellers deserved more from their real estate company. More service. More resources. More integrity. More global reach. In a word, more of everything people should expect when they buy or sell their homes.
            </p>
            <div className="contact-info-grid">
              <div className="address">
                <h2>Address</h2>
                <p>4733 Chabot Drive #100</p>
                <p>Pleasanton, CA 94588</p>
              </div>
              <div className="contact-details">
                <h2>Contact Details</h2>
                <p>(925) 553-6707</p>
                <p>luxuryhomesinwc@icloud.com</p>
              </div>
            </div>
            <p>Julie Hansen-Orvis | CA DRE# 00934447</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default App