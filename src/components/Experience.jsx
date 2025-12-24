import { Briefcase } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            company: "ALSTOM",
            role: "WIO Troubleshooter & Associate Engineer",
            period: "Oct 2023 - Present",
            description: "Diagnosing electrical faults, performing software upgrades for Train Control Units (TCU), and optimizing asset management via SAP integration."
        },
        {
            company: "Wabtec Locomotive",
            role: "Junior Engineer Trainee",
            period: "Oct 2021 - Oct 2023",
            description: "Conducted system diagnostics, analyzed health data to identify patterns, and utilized Python for predictive maintenance models."
        },
        {
            company: "Dayal Aqua Science",
            role: "Junior Engineer Trainee",
            period: "June 2021 - Oct 2021",
            description: "Commissioned SCADA automated units, monitored PLC-based designs, and worked with OPC server/client technologies."
        }
    ];

    return (
        <section>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Briefcase color="var(--accent-primary)" /> Experience
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        style={{
                            borderLeft: '2px solid var(--accent-secondary)',
                            paddingLeft: '2rem',
                            position: 'relative'
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            left: '-9px',
                            top: '0',
                            width: '16px',
                            height: '16px',
                            borderRadius: '50%',
                            background: 'var(--bg-primary)',
                            border: '2px solid var(--accent-primary)'
                        }} />
                        <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>{exp.company}</h3>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <span style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>{exp.role}</span>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{exp.period}</span>
                        </div>
                        <p style={{ color: 'var(--text-secondary)' }}>{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
