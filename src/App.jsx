import "./App.css";

function App() {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="nav">
        <div className="wrapper">
          <h2>Lucida Analytics</h2>
          <a href="#contact" className="nav-btn">Get Early Access</a>
        </div>
      </nav>

      {/* HERO */}
<section className="slide dark">
  <div>
    <h1>
      Close Deals Faster With <span className="span">Sales Intelligence</span>
    </h1>
    <p>
      Lucida Analytics helps founders and sales teams track pipeline,
      predict outcomes, and prioritize high-value opportunities using
      data-driven insights.
    </p>
    <div className="hero-buttons">
      <a href="#contact" className="primary-btn">Join Waitlist</a>
      <a href="#about" className="secondary-btn">Learn More</a>
    </div>
  </div>
</section>

     {/* PROBLEM */}
<section className="slide dark-alt">
  <div>
    <h1>The <span className="span">Problem</span></h1>
    <p>
      Most early-stage teams rely on spreadsheets and guesswork.
      Forecasting is unclear. Follow-ups are inconsistent.
      Revenue becomes unpredictable.
    </p>
  </div>
</section>

     {/* SOLUTION */}
<section className="slide dark">
  <div>
    <h1>The <span className="span">Solution</span></h1>
    <p>
      Lucida Analytics brings structure to your sales process.
      Track behavior patterns, analyze performance trends,
      and make confident revenue decisions — all in one dashboard.
    </p>
  </div>
</section>

{/* CONTACT */}
<section className="slide dark-alt" id="contact">
  <div>
    <h1>Get Early <span className="span">Access</span></h1>
    <p>Be among the first to try Lucida Analytics.</p>

    <form
      action="https://formspree.io/f/your-form-id"
      method="POST"
      className="form"
    >
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        required
      />
      <button type="submit" className="primary-btn">Join Waitlist</button>
    </form>
  </div>
</section>


      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} Lucida Analytics. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
