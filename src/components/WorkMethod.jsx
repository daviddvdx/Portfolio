import { Search, LayoutDashboard, Code2, ShieldCheck, FileCheck } from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "Comprendre",
        text: "Analyse du besoin, du contexte métier et des objectifs du projet.",
    },
    {
        icon: LayoutDashboard,
        title: "Structurer",
        text: "Organisation des fonctionnalités, des données et de l’architecture.",
    },
    {
        icon: Code2,
        title: "Développer",
        text: "Création d’une solution claire, maintenable et orientée utilisateur.",
    },
    {
        icon: ShieldCheck,
        title: "Sécuriser",
        text: "Application des bonnes pratiques de sécurité dès la conception.",
    },
    {
        icon: FileCheck,
        title: "Documenter",
        text: "Production d’une documentation claire pour faciliter la maintenance.",
    },
];

export default function WorkMethod() {
    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <p style={styles.kicker}>Méthode de travail</p>

                <h2 style={styles.title}>Une approche claire, structurée et sécurisée.</h2>

                <div style={styles.grid}>
                    {steps.map((step, index) => (
                        <article key={step.title} style={styles.card}>
                            <div style={styles.number}>0{index + 1}</div>

                            <div style={styles.iconBox}>
                                <step.icon size={24} />
                            </div>

                            <h3 style={styles.cardTitle}>{step.title}</h3>

                            <p style={styles.text}>{step.text}</p>
                        </article>
                    ))}
                </div>
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

    container: {
        padding: "40px",
        borderRadius: "40px",
        border: "1px solid rgba(221,214,254,0.15)",
        background:
            "linear-gradient(135deg, rgba(196,181,253,0.15), rgba(217,70,239,0.10), rgba(255,255,255,0.03))",
        boxShadow: "0 25px 70px rgba(76,29,149,0.4)",
        backdropFilter: "blur(18px)",
    },

    kicker: {
        margin: 0,
        color: "#ddd6fe",
        fontSize: "14px",
        fontWeight: 800,
        textTransform: "uppercase",
        letterSpacing: "0.35em",
    },

    title: {
        maxWidth: "780px",
        margin: "16px 0 0",
        color: "#ffffff",
        fontSize: "clamp(36px, 5vw, 56px)",
        lineHeight: 1,
        fontWeight: 950,
        letterSpacing: "-0.04em",
    },

    grid: {
        marginTop: "40px",
        display: "grid",
        gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
        gap: "16px",
    },

    card: {
        position: "relative",
        padding: "22px",
        borderRadius: "24px",
        border: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(0,0,0,0.22)",
    },

    number: {
        color: "rgba(255,255,255,0.25)",
        fontSize: "13px",
        fontWeight: 900,
        letterSpacing: "0.2em",
    },

    iconBox: {
        width: "48px",
        height: "48px",
        marginTop: "20px",
        borderRadius: "16px",
        background: "rgba(196,181,253,0.15)",
        color: "#ddd6fe",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    cardTitle: {
        margin: "20px 0 0",
        color: "#ffffff",
        fontSize: "20px",
        fontWeight: 950,
    },

    text: {
        margin: "12px 0 0",
        color: "rgba(255,255,255,0.58)",
        fontSize: "14px",
        lineHeight: "26px",
    },
};