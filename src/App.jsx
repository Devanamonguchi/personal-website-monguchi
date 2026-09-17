import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

function App() {
  return (
    <div className="app">
      <header className="siteHeader">
        <Navbar />
        <Hero />
      </header>

      <main>
        <About />

        <section id="projects">
          <p>Projects coming next.</p>
        </section>

        <section id="interests">
          <p>Off the Clock coming next.</p>
        </section>
      </main>
    </div>
  )
}

export default App