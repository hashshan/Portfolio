import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Socials from './components/Socials'

function App() {
  return (
    <div className="app-container" style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      gap: '4rem'
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '1rem',
        marginBottom: '2rem'
      }}>
        <div style={{
          fontWeight: 800,
          fontSize: '1.5rem',
          background: 'var(--accent-gradient)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.02em'
        }}>
          SHANTANU
        </div>
        <a href="mailto:shantanu22040@gmail.com" style={{
          fontSize: '0.9rem',
          color: 'var(--text-secondary)',
          fontWeight: 500
        }}>Contact</a>
      </nav>

      <main style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
        <Hero />
        <Experience />
        <Projects />
        <section>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Connect With Me</h2>
          <Socials />
        </section>
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '4rem 0 2rem',
        marginTop: '2rem',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        borderTop: '1px solid var(--glass-border)'
      }}>
        <p>© {new Date().getFullYear()} Built with React & Vite</p>
      </footer>
    </div>
  )
}

export default App
