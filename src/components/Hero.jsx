import Navbar from './Navbar'

function Hero() {
  return (
    <header className="hero">
      <Navbar />

      <div className="heroContent">
        <div className="heroText">
          <p className="kicker">
            Software Engineering Graduate · University of Canterbury
          </p>

          <h1>
            Hi, I'm Devana.
            <span> I build, test, and tidy up until it works.</span>
          </h1>

          <p className="heroDescription">
            Fresh out of a BSc in Computer Science, I'm a builder at heart —
            someone who likes making things, testing how they behave, and
            polishing the details until the final result works as intended.
          </p>

          <div className="heroButtons">
            <a href="#projects" className="primaryButton">
              View my work
            </a>

            <a href="#contact" className="secondaryButton">
              Contact me
            </a>
          </div>
        </div>

        <div className="heroBear">
          <svg
            viewBox="0 0 300 300"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Bear illustration"
          >
            <ellipse
              cx="150"
              cy="270"
              rx="80"
              ry="14"
              fill="#0e150a"
              opacity="0.3"
            />

            <circle cx="95" cy="70" r="30" fill="#6b4226" />
            <circle cx="205" cy="70" r="30" fill="#6b4226" />

            <circle cx="95" cy="70" r="14" fill="#4a2e1a" />
            <circle cx="205" cy="70" r="14" fill="#4a2e1a" />

            <circle cx="150" cy="150" r="95" fill="#6b4226" />

            <ellipse
              cx="150"
              cy="185"
              rx="55"
              ry="48"
              fill="#d98e2d"
            />

            <circle cx="115" cy="130" r="9" fill="#241a10" />
            <circle cx="185" cy="130" r="9" fill="#241a10" />

            <circle cx="118" cy="126" r="3" fill="#f6efe0" />
            <circle cx="188" cy="126" r="3" fill="#f6efe0" />

            <ellipse
              cx="150"
              cy="168"
              rx="16"
              ry="12"
              fill="#241a10"
            />

            <path
              d="M150 178 Q150 195 128 198"
              stroke="#241a10"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />

            <path
              d="M150 178 Q150 195 172 198"
              stroke="#241a10"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </header>
  )
}

export default Hero