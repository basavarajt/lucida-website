diff --git a/src/App.jsx b/src/App.jsx
index c901dcf67705192f928fa238a0209b3e2ee4ee8a..ecfd45c8c0d316c1b85e27b5c2af351bd8560e62 100644
--- a/src/App.jsx
+++ b/src/App.jsx
@@ -1,87 +1,260 @@
-import "./App.css";
+import './App.css'
+
+const pipelineBars = [72, 58, 83, 64, 91, 76]
+const sourceRows = [
+  { source: 'LinkedIn Ads', winRate: '34%', score: '+18%' },
+  { source: 'Inbound SEO', winRate: '41%', score: '+25%' },
+  { source: 'Referrals', winRate: '53%', score: '+31%' },
+]
 
 function App() {
   return (
     <div>
-      {/* NAVBAR */}
       <nav className="nav">
         <div className="wrapper">
           <h2>Lucida Analytics</h2>
-          <a href="#contact" className="nav-btn">Get Early Access</a>
+          <div className="nav-links">
+            <a href="#about">About</a>
+            <a href="#features">Features</a>
+            <a href="#analytics">Analytics</a>
+            <a href="#contact" className="nav-btn">
+              Get Early Access
+            </a>
+          </div>
         </div>
       </nav>
 
-      {/* HERO */}
-<section className="slide dark">
-  <div>
-    <h1>
-      Close Deals Faster With <span className="span">Sales Intelligence</span>
-    </h1>
-    <p>
-      Lucida Analytics helps founders and sales teams track pipeline,
-      predict outcomes, and prioritize high-value opportunities using
-      data-driven insights.
-    </p>
-    <div className="hero-buttons">
-      <a href="#contact" className="primary-btn">Join Waitlist</a>
-      <a href="#about" className="secondary-btn">Learn More</a>
-    </div>
-  </div>
-</section>
+      <section className="slide dark hero" id="home">
+        <div className="content hero-grid">
+          <div className="hero-copy">
+            <p className="eyebrow">Sales Intelligence SaaS</p>
+            <h1>
+              Close More Deals with <span className="span">Predictive Sales Intelligence</span>
+            </h1>
+            <p>
+              Lucida combines analytics and predictive modeling to help businesses prioritize
+              high-quality leads, improve conversion rates, and optimize every stage of their
+              sales pipeline.
+            </p>
+            <div className="hero-buttons">
+              <a href="#contact" className="primary-btn">
+                Join the Waitlist
+              </a>
+              <a href="#analytics" className="secondary-btn">
+                View Live Metrics
+              </a>
+            </div>
+          </div>
+
+          <div className="dashboard-card" aria-label="Animated sales analytics dashboard preview">
+            <div className="dashboard-kpis">
+              <article>
+                <span>Lead Quality</span>
+                <strong>87</strong>
+                <p>+12% this week</p>
+              </article>
+              <article>
+                <span>Conversion Prob.</span>
+                <strong>64%</strong>
+                <p>Top segment</p>
+              </article>
+              <article>
+                <span>Avg. Response</span>
+                <strong>17m</strong>
+                <p>-23% faster</p>
+              </article>
+            </div>
+            <div className="sparkline" />
+            <div className="bar-chart" aria-hidden="true">
+              {pipelineBars.map((height, index) => (
+                <span key={index} style={{ '--bar-height': `${height}%`, '--delay': `${index * 120}ms` }} />
+              ))}
+            </div>
+          </div>
+        </div>
+      </section>
+
+      <section className="slide dark-alt" id="about">
+        <div className="content">
+          <h1>
+            What Lucida is <span className="span">All About</span>
+          </h1>
+          <p>
+            Instead of relying on guesswork, Lucida analyzes follow-up behavior, response
+            time, deal value, and source performance to generate actionable insights and
+            conversion probability scores. We help teams focus on the right leads at the
+            right time.
+          </p>
+          <div className="grid two-col">
+            <article className="card">
+              <h3>Our Vision</h3>
+              <p>
+                Give every sales team clarity on where to focus so pipeline decisions are
+                based on evidence, not assumptions.
+              </p>
+            </article>
+            <article className="card">
+              <h3>Our Mission</h3>
+              <p>
+                Turn day-to-day sales activity into predictive insights that increase
+                conversion efficiency and revenue outcomes.
+              </p>
+            </article>
+          </div>
+        </div>
+      </section>
 
-     {/* PROBLEM */}
-<section className="slide dark-alt">
-  <div>
-    <h1>The <span className="span">Problem</span></h1>
-    <p>
-      Most early-stage teams rely on spreadsheets and guesswork.
-      Forecasting is unclear. Follow-ups are inconsistent.
-      Revenue becomes unpredictable.
-    </p>
-  </div>
-</section>
+      <section className="slide dark" id="features">
+        <div className="content">
+          <h1>
+            Platform <span className="span">Features</span>
+          </h1>
+          <div className="grid three-col">
+            <article className="card">
+              <h3>Lead Prioritization Engine</h3>
+              <p>
+                Automatically rank leads by conversion likelihood so reps can focus on the
+                most promising opportunities first.
+              </p>
+            </article>
+            <article className="card">
+              <h3>Conversion Probability Scores</h3>
+              <p>
+                Use predictive modeling to estimate deal outcomes and identify opportunities
+                that need immediate action.
+              </p>
+            </article>
+            <article className="card">
+              <h3>Follow-Up Behavior Insights</h3>
+              <p>
+                Understand which outreach patterns improve replies, meetings, and closed
+                deals across your pipeline.
+              </p>
+            </article>
+            <article className="card">
+              <h3>Response-Time Analytics</h3>
+              <p>
+                Measure speed-to-lead and response delays to reduce drop-off and improve
+                lead engagement quality.
+              </p>
+            </article>
+            <article className="card">
+              <h3>Deal Value Forecasting</h3>
+              <p>
+                Estimate potential revenue and risk across the funnel so teams can forecast
+                with confidence.
+              </p>
+            </article>
+            <article className="card">
+              <h3>Source Performance Tracking</h3>
+              <p>
+                Compare channels by lead quality and win rate to optimize budget allocation
+                and campaign strategy.
+              </p>
+            </article>
+          </div>
+        </div>
+      </section>
+
+      <section className="slide dark-alt" id="analytics">
+        <div className="content">
+          <h1>
+            Interactive <span className="span">Analytics Preview</span>
+          </h1>
+          <p>
+            A live-style snapshot of the technical views Lucida gives your team — dynamic
+            pipeline health, source quality movement, and conversion patterns.
+          </p>
+          <div className="analytics-grid">
+            <article className="card pulse-card">
+              <h3>Pipeline Momentum</h3>
+              <div className="wave-lines" aria-hidden="true">
+                <span />
+                <span />
+                <span />
+              </div>
+            </article>
+
+            <article className="card source-table-card">
+              <h3>Source Quality Tracker</h3>
+              <div className="source-table">
+                {sourceRows.map((row) => (
+                  <div key={row.source}>
+                    <span>{row.source}</span>
+                    <span>{row.winRate}</span>
+                    <span>{row.score}</span>
+                  </div>
+                ))}
+              </div>
+            </article>
 
-     {/* SOLUTION */}
-<section className="slide dark">
-  <div>
-    <h1>The <span className="span">Solution</span></h1>
-    <p>
-      Lucida Analytics brings structure to your sales process.
-      Track behavior patterns, analyze performance trends,
-      and make confident revenue decisions — all in one dashboard.
-    </p>
-  </div>
-</section>
+            <article className="card donut-card">
+              <h3>Deal Stage Distribution</h3>
+              <div className="donut" aria-hidden="true" />
+              <p>SQL 38% • Demo 27% • Proposal 21% • Negotiation 14%</p>
+            </article>
+          </div>
+        </div>
+      </section>
 
-{/* CONTACT */}
-<section className="slide dark-alt" id="contact">
-  <div>
-    <h1>Get Early <span className="span">Access</span></h1>
-    <p>Be among the first to try Lucida Analytics.</p>
+      <section className="slide dark" id="how-it-works">
+        <div className="content">
+          <h1>
+            How it <span className="span">Works</span>
+          </h1>
+          <div className="timeline">
+            <div className="step">
+              <span>1</span>
+              <p>Connect your lead and pipeline data from your CRM and outreach tools.</p>
+            </div>
+            <div className="step">
+              <span>2</span>
+              <p>Lucida analyzes behavioral signals and deal-level patterns in real time.</p>
+            </div>
+            <div className="step">
+              <span>3</span>
+              <p>Get lead scores, conversion forecasts, and next-best-action recommendations.</p>
+            </div>
+            <div className="step">
+              <span>4</span>
+              <p>Prioritize high-impact opportunities and improve close rates consistently.</p>
+            </div>
+          </div>
+        </div>
+      </section>
 
-    <form
-      action="https://formspree.io/f/mqedbwjd"
-      method="POST"
-      className="form"
-    >
-      <input
-        type="email"
-        name="email"
-        placeholder="Enter your email"
-        required
-      />
-      <button type="submit" className="primary-btn">Join Waitlist</button>
-    </form>
-  </div>
-</section>
+      <section className="slide dark-alt" id="contact">
+        <div className="content">
+          <h1>
+            Contact & <span className="span">Early Access</span>
+          </h1>
+          <p>
+            Want to improve lead quality, forecast accuracy, and pipeline performance?
+            Join the waitlist and we’ll contact you.
+          </p>
 
+          <form action="https://formspree.io/f/mqedbwjd" method="POST" className="form">
+            <input type="text" name="name" placeholder="Your name" required />
+            <input type="email" name="email" placeholder="Work email" required />
+            <input type="text" name="organization" placeholder="Company" />
+            <textarea
+              name="message"
+              rows="4"
+              placeholder="Tell us about your sales goals"
+            ></textarea>
+            <button type="submit" className="primary-btn">
+              Request Access
+            </button>
+          </form>
+        </div>
+      </section>
 
-      {/* FOOTER */}
       <footer className="footer">
-        © {new Date().getFullYear()} Lucida Analytics. All rights reserved.
+        <p>© {new Date().getFullYear()} Lucida Analytics. All rights reserved.</p>
+        <p>Sales Intelligence + Predictive Analytics + Pipeline Optimization</p>
       </footer>
     </div>
-  );
+  )
 }
 
-export default App;
+export default App
