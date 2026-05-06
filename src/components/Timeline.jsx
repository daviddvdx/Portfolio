import { BriefcaseBusiness, GraduationCap, Rocket, ShieldCheck } from "lucide-react";

const timeline = [
    {
        icon: GraduationCap,
        period: "2023 - 2024",
        title: "Formation & bases techniques",
        description:
            "Consolidation des bases en systèmes d'information, développement web, data et cybersécurité.",
    },
    {
        icon: BriefcaseBusiness,
        period: "2024",
        title: "Premiers projets SI / Web / Data",
        description:
            "Création de projets concrets : interfaces web, tableaux de bord, documentation technique et analyse de besoins.",
    },
    {
        icon: ShieldCheck,
        period: "2024 - 2025",
        title: "Orientation cybersécurité",
        description:
            "Approfondissement des bonnes pratiques de sécurité, analyse des risques et sécurisation des accès.",
    },
    {
        icon: Rocket,
        period: "Aujourd’hui",
        title: "Profil transversal orienté projet",
        description:
            "Construction d'un profil hybride capable de comprendre le métier, structurer la donnée, développer et sécuriser.",
    },
];

export default function Timeline() {
    return (
        <section style={styles.section}>
            <div style={styles.header}>
                <p style={styles.kicker}>Parcours</p>
                <h2 style={styles.title}>Une évolution progressive et technique.</h2>
                <p style={styles.subtitle}>
                    Un parcours construit autour des systèmes d'information, de la data,
                    du développement web et de la cybersécurité.
                </p>
            </div>

            <div style={styles.timeline}>
                {timeline.map((item, index) => (
                    <article key={item.title} style={styles.item}>
                        <div style={styles.iconBox}>
                            <item.icon size={24} />
                        </div>

                        <div style={styles.content}>
                            <p style={styles.period}>{item.period}</p>
                            <h3 style={styles.itemTitle}>{item.title}</h3>
                            <p style={styles.description}>{item.description}</p>
                        </div>

                        {index !== timeline.length - 1 && <div style={styles.line} />}
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
        maxWidth: "760px",
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
        margin: "20px 0 0",
        color: "rgba(255,255,255,0.6)",
        lineHeight: "28px",
    },

    timeline: {
        display: "grid",
        gap: "24px",
    },

    item: {
        position: "relative",
        display: "grid",
        gridTemplateColumns: "64px 1fr",
        gap: "20px",
        padding: "24px",
        borderRadius: "28px",
        border: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(255,255,255,0.04)",
        boxShadow: "0 25px 70px rgba(76,29,149,0.18)",
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
    },

    content: {
        position: "relative",
    },

    period: {
        margin: 0,
        color: "#c4b5fd",
        fontSize: "13px",
        fontWeight: 800,
        textTransform: "uppercase",
        letterSpacing: "0.18em",
    },

    itemTitle: {
        margin: "8px 0 0",
        color: "#ffffff",
        fontSize: "24px",
        fontWeight: 950,
    },

    description: {
        margin: "12px 0 0",
        color: "rgba(255,255,255,0.6)",
        lineHeight: "28px",
    },
};