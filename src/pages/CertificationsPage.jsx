import {
    ShieldCheck,
    Award,
    BookOpenCheck,
    LockKeyhole,
    Radar,
    Bug,
    Network,
} from "lucide-react";

const certifications = [
    {
        icon: ShieldCheck,
        title: "Fortinet Certified Associate Cybersecurity",
        issuer: "Fortinet",
        category: "Cybersécurité",
        status: "Certification",
        description:
            "Certification orientée fondamentaux de la cybersécurité, sécurité réseau et bonnes pratiques de protection des systèmes.",
        skills: ["Cybersecurity", "Network Security", "Fortinet", "Security Basics"],
    },
    {
        icon: BookOpenCheck,
        title: "MOOC ANSSI - Sécurité Informatique",
        issuer: "ANSSI",
        category: "Sécurité informatique",
        status: "MOOC",
        description:
            "Formation de sensibilisation aux principes essentiels de la sécurité numérique et aux bonnes pratiques de protection.",
        skills: ["ANSSI", "Hygiène numérique", "Risques", "Bonnes pratiques"],
    },
    {
        icon: Radar,
        title: "Threat Intelligence Analyst",
        issuer: "Formation / Certification",
        category: "Threat Intelligence",
        status: "Certification",
        description:
            "Analyse des menaces, compréhension des indicateurs de compromission et suivi des comportements malveillants.",
        skills: ["Threat Intel", "IOC", "Analyse", "Cyberdéfense"],
    },
    {
        icon: Network,
        title: "Cisco Introduction to Cybersecurity",
        issuer: "Cisco",
        category: "Cybersécurité",
        status: "Certification",
        description:
            "Introduction aux concepts fondamentaux de la cybersécurité, aux menaces, aux attaques et aux mécanismes de défense.",
        skills: ["Cisco", "Cybersecurity", "Réseaux", "Menaces"],
    },
    {
        icon: Bug,
        title: "Pentester Jr",
        issuer: "TryHackMe",
        category: "Pentest",
        status: "Parcours",
        description:
            "Parcours pratique orienté tests d’intrusion, reconnaissance, exploitation, vulnérabilités web et méthodologie offensive.",
        skills: ["Pentest", "TryHackMe", "Web Security", "Reconnaissance"],
    },
    {
        icon: LockKeyhole,
        title: "Fortinet Certified Fundamentals Cybersecurity",
        issuer: "Fortinet",
        category: "Fondamentaux cyber",
        status: "Certification",
        description:
            "Certification couvrant les bases de la cybersécurité, les concepts de sécurité réseau et la protection des environnements numériques.",
        skills: ["Fortinet", "Security Fundamentals", "Réseaux", "Protection"],
    },
];

export default function CertificationsPage() {
    return (
        <section style={styles.page}>
            <div style={styles.hero}>
                <p style={styles.kicker}>Certifications</p>

                <h1 style={styles.title}>Certifications informatiques.</h1>

                <p style={styles.subtitle}>
                    Un ensemble de certifications et formations orientées cybersécurité,
                    sécurité réseau, threat intelligence, pentest et bonnes pratiques de
                    protection des systèmes d’information.
                </p>
            </div>

            <div style={styles.summaryGrid}>
                <div style={styles.summaryCard}>
                    <span style={styles.summaryNumber}>06</span>
                    <h3 style={styles.summaryTitle}>Certifications</h3>
                    <p style={styles.summaryText}>
                        Cybersécurité, pentest, threat intelligence et sécurité réseau.
                    </p>
                </div>

                <div style={styles.summaryCard}>
                    <span style={styles.summaryNumber}>03</span>
                    <h3 style={styles.summaryTitle}>Domaines clés</h3>
                    <p style={styles.summaryText}>
                        Défense, analyse des menaces et sécurité offensive.
                    </p>
                </div>

                <div style={styles.summaryCard}>
                    <span style={styles.summaryNumber}>100%</span>
                    <h3 style={styles.summaryTitle}>Orientation cyber</h3>
                    <p style={styles.summaryText}>
                        Une montée en compétence continue en sécurité informatique.
                    </p>
                </div>
            </div>

            <div style={styles.grid}>
                {certifications.map((certification) => (
                    <article key={certification.title} style={styles.card}>
                        <div style={styles.cardHeader}>
                            <div style={styles.iconBox}>
                                <certification.icon size={26} />
                            </div>

                            <span style={styles.status}>{certification.status}</span>
                        </div>

                        <p style={styles.category}>{certification.category}</p>

                        <h2 style={styles.cardTitle}>{certification.title}</h2>

                        <p style={styles.issuer}>{certification.issuer}</p>

                        <p style={styles.description}>{certification.description}</p>

                        <div style={styles.skills}>
                            {certification.skills.map((skill) => (
                                <span key={skill} style={styles.skill}>
                  {skill}
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
    page: {
        position: "relative",
        zIndex: 10,
        maxWidth: "1152px",
        margin: "0 auto",
        padding: "80px 16px",
        boxSizing: "border-box",
    },

    hero: {
        maxWidth: "900px",
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
        margin: "16px 0 0",
        color: "#ffffff",
        fontSize: "clamp(48px, 7vw, 84px)",
        lineHeight: 0.95,
        fontWeight: 950,
        letterSpacing: "-0.06em",
    },

    subtitle: {
        maxWidth: "780px",
        margin: "24px 0 0",
        color: "rgba(255, 255, 255, 0.62)",
        fontSize: "18px",
        lineHeight: "32px",
    },

    summaryGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: "20px",
        marginBottom: "64px",
    },

    summaryCard: {
        padding: "24px",
        borderRadius: "28px",
        border: "1px solid rgba(255,255,255,0.1)",
        background:
            "linear-gradient(135deg, rgba(255,255,255,0.055), rgba(255,255,255,0.025))",
        boxShadow: "0 25px 70px rgba(76,29,149,0.18)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
    },

    summaryNumber: {
        color: "#c4b5fd",
        fontSize: "24px",
        fontWeight: 950,
        letterSpacing: "-0.03em",
    },

    summaryTitle: {
        margin: "14px 0 0",
        color: "#ffffff",
        fontSize: "24px",
        fontWeight: 950,
        letterSpacing: "-0.03em",
    },

    summaryText: {
        margin: "10px 0 0",
        color: "rgba(255,255,255,0.58)",
        lineHeight: "26px",
    },

    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: "24px",
    },

    card: {
        padding: "28px",
        borderRadius: "32px",
        border: "1px solid rgba(255,255,255,0.1)",
        background:
            "linear-gradient(135deg, rgba(255,255,255,0.055), rgba(255,255,255,0.025))",
        boxShadow: "0 25px 70px rgba(76,29,149,0.22)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
    },

    cardHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        marginBottom: "22px",
    },

    iconBox: {
        width: "58px",
        height: "58px",
        borderRadius: "20px",
        border: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(196,181,253,0.15)",
        color: "#ddd6fe",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 16px 36px rgba(76,29,149,0.35)",
    },

    status: {
        padding: "8px 12px",
        borderRadius: "999px",
        border: "1px solid rgba(196,181,253,0.2)",
        background: "rgba(196,181,253,0.1)",
        color: "#ede9fe",
        fontSize: "12px",
        fontWeight: 800,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
    },

    category: {
        margin: 0,
        color: "#c4b5fd",
        fontSize: "13px",
        fontWeight: 900,
        textTransform: "uppercase",
        letterSpacing: "0.2em",
    },

    cardTitle: {
        margin: "12px 0 0",
        color: "#ffffff",
        fontSize: "28px",
        lineHeight: 1.1,
        fontWeight: 950,
        letterSpacing: "-0.03em",
    },

    issuer: {
        margin: "10px 0 0",
        color: "rgba(255,255,255,0.72)",
        fontSize: "15px",
        fontWeight: 700,
    },

    description: {
        margin: "18px 0 0",
        color: "rgba(255,255,255,0.62)",
        lineHeight: "28px",
    },

    skills: {
        marginTop: "22px",
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
    },

    skill: {
        padding: "8px 12px",
        borderRadius: "999px",
        background: "rgba(0,0,0,0.26)",
        border: "1px solid rgba(255,255,255,0.1)",
        color: "rgba(255,255,255,0.78)",
        fontSize: "13px",
        fontWeight: 700,
    },
};