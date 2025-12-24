import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Voice Bridge",
            description: "Speech-to-Text USB Typing Utility (Android, Python, Selenium). Hands-free typing solution converting audio to text via ML APIs.",
            tech: ["Android", "Python", "Selenium"],
            link: "#"
        },
        {
            title: "Email Guardian",
            description: "Desktop software for offline/online lookup of English words using Trie data structures and web scraping.",
            tech: ["Python", "BS4", "Trie"],
            link: "#"
        }
    ];

    return (
        <section>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Featured Projects</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="project-card"
                        style={{
                            background: 'var(--glass-bg)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '16px',
                            padding: '2rem',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            cursor: 'pointer',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(139, 92, 246, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>{project.title}</h3>
                            <ArrowUpRight size={20} color="var(--accent-secondary)" />
                        </div>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{project.description}</p>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            {project.tech.map((t, i) => (
                                <span key={i} style={{
                                    fontSize: '0.8rem',
                                    padding: '4px 12px',
                                    borderRadius: '20px',
                                    background: 'rgba(255,255,255,0.05)',
                                    color: 'var(--accent-primary)',
                                    border: '1px solid rgba(139, 92, 246, 0.2)'
                                }}>
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
