const stacks = [
    {
        category: "Systèmes d'information",
        tools: ["GLPI", "ITSM", "Documentation", "Gestion de parc", "Supervision"],
    },
    {
        category: "Data",
        tools: ["SQL", "Power BI", "Excel avancé", "Python", "Data visualisation"],
    },
    {
        category: "Développement Web",
        tools: ["React", "JavaScript", "CSS", "Vite", "API REST", "GitHub"],
    },
    {
        category: "Cybersécurité",
        tools: ["Analyse de risques", "OWASP", "IAM", "Durcissement", "Sensibilisation"],
    },
];

export default function TechStack() {
    return (
        <section style={styles.section}>
            <div style={styles.header}>
                <p style={styles.kicker}>Stack technique</p>
                <h2 style={styles.title}>Les outils que j’utilise.</h2>
                <p style={styles.subtitle}>
                    Une stack polyvalente pour concevoir, développer, analyser et sécuriser
                    des solutions numériques.
                </p>
            </div>

            <div style={styles.grid}>
                {stacks.map((stack) => (
                    <article key={stack.category} style={styles.card}>
                        <h3 style={styles.cardTitle}>{stack.category}</h3>

                        <div style={styles.badges}>
                            {stack.tools.map((tool) => (
                                <span key={tool} style={styles.badge}>
                  {tool}
                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

const styles = {
    section: {
        position: "relative",
        zIndex: 10,
        maxWidth: "1152px",
        margin: "0 auto",
        padding: "80px 16px",
    },

    header: {
        textAlign: "center",
        marginBottom: "48px",
    },

    kicker: {
        margin: 0,
        color: "#c4b5fd",
        fontSize: "14px",
        fontWeight: 800,
        textTransform: "uppercase",
        letterSpacing: "0.35em",
    },

    title: {
        margin: "12px 0 0",
        color: "#ffffff",
        fontSize: "clamp(36px, 5vw, 60px)",
        lineHeight: 1,
        fontWeight: 950,
        letterSpacing: "-0.04em",
    },

    subtitle: {
        maxWidth: "680px",
        margin: "20px auto 0",
        color: "rgba(255,255,255,0.6)",
        lineHeight: "28px",
    },

    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        gap: "20px",
    },

    card: {
        padding: "24px",
        borderRadius: "28px",
        border: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(255,255,255,0.04)",
        boxShadow: "0 25px 70px rgba(76,29,149,0.18)",
        backdropFilter: "blur(18px)",
    },

    cardTitle: {
        margin: 0,
        color: "#ffffff",
        fontSize: "20px",
        fontWeight: 950,
    },

    badges: {
        marginTop: "20px",
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
    },

    badge: {
        padding: "8px 12px",
        borderRadius: "999px",
        border: "1px solid rgba(196,181,253,0.2)",
        background: "rgba(196,181,253,0.1)",
        color: "#ede9fe",
        fontSize: "13px",
        fontWeight: 700,
    },
};