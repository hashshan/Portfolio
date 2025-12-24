import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Socials = () => {
    const socialLinks = [
        { icon: <Github size={24} />, href: "https://github.com/hashshan", label: "GitHub" },
        { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/shantanu-kumar-pandey-199995199", label: "LinkedIn" },
    ];

    return (
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '2rem' }}>
            {socialLinks.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: 'var(--text-secondary)',
                        padding: '10px',
                        borderRadius: '50%',
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--glass-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--text-primary)';
                        e.currentTarget.style.background = 'var(--accent-primary)';
                        e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-secondary)';
                        e.currentTarget.style.background = 'var(--glass-bg)';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                >
                    {link.icon}
                </a>
            ))}
        </div>
    );
};

export default Socials;
