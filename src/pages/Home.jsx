import { Link } from 'react-router-dom'
import StudioShell from '../components/StudioShell.jsx'
import { Showcase } from '../components/Devices.jsx'
import Masthead from '../components/Masthead.jsx'
import RailNav from '../components/RailNav.jsx'
import Reveal from '../components/Reveal.jsx'
import { brands } from '../data/brands.jsx'
import { works } from '../data/works.jsx'

const LaunchIcon = () => (
  <svg className="icon-launch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
  </svg>
)

export default function Home() {
  return (
    <StudioShell
      rail={<RailNav />}
      footer={
        <footer className="studio-foot studio-foot-home">
          <div className="contact-info">
            <a href="mailto:ngedenidze@outlook.com" className="contact-link">ngedenidze@outlook.com</a>
            <a href="tel:+17177750711" className="contact-link">717.775.0711</a>
            <a href="https://www.linkedin.com/in/ngedenidze" target="_blank" rel="noopener noreferrer" className="contact-link">linkedin.com/in/ngedenidze</a>
            <a href="https://github.com/Ngedenidze" target="_blank" rel="noopener noreferrer" className="contact-link">github.com/Ngedenidze</a>
          </div>
          <p className="footer-copyright">© 2026 Nika Gedenidze</p>
        </footer>
      }
    >
      <Masthead className="home-masthead" />

      <main className="home-main">
          <section id="work" className="home-section">
            <h2 className="section-heading">Work</h2>
            <div className="projects-list">
              {works.map((w) => (
                <Reveal as="article" className="studio-block home-work-block" key={w.slug}>
                  <p className="studio-label">
                    <b>work / {w.number}</b> &nbsp;<span>— {w.name.toLowerCase()}</span>
                  </p>
                  <p className="studio-desc">{w.description}</p>
                  {w.homePanel ?? w.steps[0].panel}
                  <div className="work-links">
                    <Link className="project-caselink" to={`/work/${w.slug}`}>view case study →</Link>
                    <a className="project-caselink work-visit" href={w.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${w.name} website`}>
                      visit site <LaunchIcon />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="brand-book" className="home-section">
            <h2 className="section-heading">Brand Book</h2>
            <Reveal as="article" className="studio-block home-brand-block">
              <p className="studio-label">
                <b>brand book</b> &nbsp;<span>— identity systems</span>
              </p>
              <p className="studio-desc">
                A structured library of the visual systems behind the products I
                architect and design — from product marks and color standards to
                UI components, voice, and usage rules.
              </p>
              <Showcase>
                <div className="board cols-3">
                  {brands.map((brand) => (
                    <Link
                      className="stage-card tile brand-tile"
                      to={`/brand-book/${brand.id}`}
                      key={brand.id}
                      aria-label={`View ${brand.name} brand guidelines`}
                    >
                      <div className="lockup brand-tile-logo">
                        <img src={brand.logo} alt={`${brand.name} logo`} />
                      </div>
                      <p className="tile-cap"><b>{brand.name}</b></p>
                    </Link>
                  ))}
                </div>
              </Showcase>
              <Link className="project-caselink" to="/brand-book">view brand book →</Link>
            </Reveal>
          </section>

          <section id="research" className="home-section">
            <h2 className="section-heading">Research &amp; Publications</h2>
            <Reveal as="article" className="studio-block home-research-block">
              <p className="studio-label">
                <b>role</b>
              </p>
              <div className="section-card">
                <div className="research-role">
                  <h3 className="role-title">Interdisciplinary Center for Quantitative Research</h3>
                  <p className="role-org">
                    Artificial Intelligence Research Assistant
                    <br />
                    March 2022 — May 2024
                  </p>
                  <p className="role-description">
                    Led research project optimizing training workflows of Convolutional
                    Neural Networks on 150,000+ item dataset through transfer learning.
                    Designed and implemented 100+ diverse architecture models using
                    Python, TensorFlow, and Keras. Reduced training times by 57.7% and
                    66.2% through layer freezing and transfer learning approaches.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal as="article" className="studio-block home-research-block">
              <p className="studio-label">
                <b>publications</b>
              </p>
              <div className="section-card">
                <div className="publications-list home-publications-list">
                  <div className="publication-item">
                    <p>Gedenidze, N. &amp; Veksler, V. D. (2024). A Layer-Freezing Approach for Reduced Backpropagation Demand. 28th annual conference of the Consortium for Computing Sciences in Colleges, Northeastern Region (CCSCNE).</p>
                  </div>
                  <div className="publication-item">
                    <p>Gedenidze, N. &amp; Veksler, V. D. (2023). Backpropagation is expensive. Is it necessary? 27th annual conference of the Consortium for Computing Sciences in Colleges, Northeastern Region (CCSCNE).</p>
                  </div>
                  <div className="publication-item">
                    <p>Veksler, V.D., Gedenidze, N., &amp; Yadav, R. (2023). Visual Cortex Doesn't Change, Why Should Convolutional Layers? The 16th International Conference on Brain Informatics.</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal as="article" className="studio-block home-research-block">
              <p className="studio-label">
                <b>recognition</b>
              </p>
              <div className="section-card">
                <div className="recognition">
                  <ul className="recognition-list">
                    <li>Top 3 Presenters at Research Day</li>
                    <li>Dean's List: Fall 2020, Fall 2021, Spring 2022, Spring 2023</li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </section>

          <section id="about" className="home-section">
            <h2 className="section-heading">Education</h2>
            <div className="section-card">
              <div className="education-entry">
                <h3 className="education-school">Caldwell University</h3>
                <p className="education-degree">Bachelor's degree, Computer Science</p>
                <p className="education-years">2020 — 2024</p>
                <p className="education-achievements">
                  Dean's List recognition across multiple semesters. Active participant
                  in research initiatives focused on artificial intelligence and machine
                  learning optimization.
                </p>
              </div>
            </div>
          </section>
      </main>
    </StudioShell>
  )
}
