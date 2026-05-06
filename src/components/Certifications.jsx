import { Award, BookOpenCheck, ShieldCheck } from "lucide-react";

const certifications = [
    {
        icon: ShieldCheck,
        status: "En cours",
        title: "Cybersécurité",
        description:
            "Approfondissement des notions de sécurité, gestion des risques, bonnes pratiques et protection des systèmes.",
    },
    {
        icon: BookOpenCheck,
        status: "Formation",
        title: "Développement Web React",
        description:
            "Création d’interfaces modernes avec React, composants réutilisables, routing et structuration d’application.",
    },
    {
        icon: Award,
        status: "Formation",
        title: "Data & Business Intelligence",
        description:
            "Analyse, structuration, visualisation de données et création de tableaux de bord orientés décision.",
    },
];

export default function Certifications() {
    return (
        <section style={styles.section}>
            <div style={styles.header}>
                <p style={styles.kicker}>Certifications & Formations</p>
                <h2 style={styles.title}>Une montée en compétence continue.</h2>
            </div>

            <div style={styles.grid}>
                {certifications.map((certification) => (
                    <article key={certification.title} style={styles.card}>
                        <div style={styles.iconBox}>
                            <certification.icon size={26} />
                        </div>

                        <span style={styles.status}>{certification.status}</span>

                        <h3 style={styles.cardTitle}>{certification.title}</h3>

                        <p style={styles.description}>{certification.description}</p>
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

    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: "24px",
    },

    card: {
        padding: "28px",
        borderRadius: "32px",
        border: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(255,255,255,0.04)",
        boxShadow: "0 25px 70px rgba(76,29,149,0.22)",
        backdropFilter: "blur(18px)",
    },

    iconBox: {
        width: "56px",
        height: "56px",
        borderRadius: "18px",
        background: "rgba(196,181,253,0.15)",
        color: "#ddd6fe",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "20px",
    },

    status: {
        display: "inline-flex",
        padding: "6px 12px",
        borderRadius: "999px",
        background: "rgba(217,70,239,0.12)",
        color: "#f5d0fe",
        fontSize: "12px",
        fontWeight: 800,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
    },

    cardTitle: {
        margin: "16px 0 0",
        color: "#ffffff",
        fontSize: "24px",
        fontWeight: 950,
    },

    description: {
        margin: "14px 0 0",
        color: "rgba(255,255,255,0.6)",
        lineHeight: "28px",
    },
};