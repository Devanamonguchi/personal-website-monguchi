function About() {
  return (
    <section className="about" id="about">
      <p className="sectionLabel">The gist</p>

      <h2 className="sectionTitle">
        A little about my den
      </h2>

      <div className="aboutGrid">
        <div className="badgeDen">
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Bear profile icon"
          >
            <circle cx="30" cy="24" r="12" fill="#d98e2d" />
            <circle cx="70" cy="24" r="12" fill="#d98e2d" />
            <circle cx="50" cy="55" r="38" fill="#d98e2d" />
            <circle cx="38" cy="50" r="5" fill="#4a2e1a" />
            <circle cx="62" cy="50" r="5" fill="#4a2e1a" />
            <ellipse cx="50" cy="65" rx="8" ry="6" fill="#4a2e1a" />
          </svg>

          <p className="badgeName">
            Devana Monguchi
          </p>

          <p className="badgeRole">
            Software Engineering Graduate
          </p>
        </div>

        <div className="aboutCopy">
          <p className="aboutLede">
            I'm a builder with an interest in web development,
            app development, and quality assurance.
          </p>

          <p>
            I graduated from the <strong>University of Canterbury</strong>{' '}
            with a <strong>BSc in Computer Science</strong>, after working
            through a broad range of courses and projects along the way.
          </p>

          <p>
            What I keep coming back to is the process itself — building
            something, testing how it actually behaves, and improving the
            small details until the final result does what it's supposed to do.
          </p>

          <div className="credential">
            <span>🎓</span>
            <span>BSc Computer Science — University of Canterbury</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About