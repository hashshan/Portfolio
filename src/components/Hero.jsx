const Hero = () => {
    return (
        <section style={{
            padding: '4rem 0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: '60vh',
            textAlign: 'center',
            alignItems: 'center'
        }}>
            <div style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid var(--accent-primary)',
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)',
                marginBottom: '2rem'
            }}>
                <img
                    src="/profile-pic.png"
                    alt="Shantanu Kumar Pandey"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>

            <span style={{
                color: 'var(--accent-secondary)',
                fontWeight: 600,
                letterSpacing: '0.05em',
                marginBottom: '1rem',
                textTransform: 'uppercase',
                fontSize: '0.9rem'
            }}>
                Hello, I'm
            </span>
            <h1 style={{
                fontSize: 'clamp(3rem, 5vw, 5rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: '1.5rem',
                background: 'linear-gradient(to right, white, #94a3b8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}>
                Shantanu Kumar Pandey
            </h1>
            <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                background: 'var(--accent-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '1.5rem',
                fontWeight: 700
            }}>
                Software Engineer & Automation Specialist
            </h2>
            <p style={{
                maxWidth: '600px',
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                marginBottom: '3rem',
                lineHeight: '1.8'
            }}>
                Building robust solutions in safe-critical domains (Rail/SCADA) and crafting modern software tools.
                Passionate about Java, Python, and Full-Stack Development.
            </p>

            <div style={{ display: 'flex', gap: '1rem' }}>
                <button style={{
                    padding: '12px 32px',
                    borderRadius: '30px',
                    background: 'var(--text-primary)',
                    color: 'var(--bg-primary)',
                    fontWeight: 600,
                    fontSize: '1rem',
                    transition: 'transform 0.2s'
                }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                    View Projects
                </button>
                <button style={{
                    padding: '12px 32px',
                    borderRadius: '30px',
                    background: 'transparent',
                    color: 'var(--text-primary)',
                    border: '1px solid var(--glass-border)',
                    fontWeight: 600,
                    fontSize: '1rem',
                    transition: 'transform 0.2s, background 0.2s'
                }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.05)';
                        e.target.style.background = 'var(--glass-bg)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.background = 'transparent';
                    }}
                >
                    Contact Me
                </button>
            </div>
        </section>
    );
};

export default Hero;
