import Hero from './components/Hero'
import About from './components/About'

function App() {
  return (
    <div className="app">
      <Hero />

      <main>
        <About />

        <section id="projects">
          <p className="sectionLabel">Selected work</p>
          <h2 className="sectionTitle">Projects</h2>
          <p>Projects coming next.</p>
        </section>

        <section id="interests">
          <p className="sectionLabel">Outside of coding</p>
          <h2 className="sectionTitle">Off the Clock</h2>
          <p>Off the Clock coming next.</p>
        </section>

        <section id="contact">
          <p className="sectionLabel">Get in touch</p>
          <h2 className="sectionTitle">Contact</h2>
          <p>Contact section coming next.</p>
        </section>
      </main>
    </div>
  )
}

export default App