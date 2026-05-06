import {
    Database,
    Server,
    ShieldCheck,
    BarChart3,
    Code2,
    Network,
    Monitor,
    Bug,
} from "lucide-react";
import SubPageNavbar from "../components/SubPageNavbar.jsx";

const services = [
    {
        icon: Server,
        title: "Optimisation SI",
        description: "Structurer les outils, documenter les processus et fiabiliser l’environnement IT.",
        items: ["Organisation", "Documentation", "Continuité"],
    },
    {
        icon: Network,
        title: "Sécurisation réseau",
        description: "Renforcer les accès, les flux et les environnements sensibles.",
        items: ["Protection", "Contrôle", "Analyse"],
    },
    {
        icon: Monitor,
        title: "Administration système",
        description: "Préparer, maintenir et superviser les environnements Windows/Linux.",
        items: ["Maintenance", "Supervision", "Support"],
    },
    {
        icon: Code2,
        title: "Solutions web",
        description: "Concevoir des applications web complètes, utiles et évolutives.",
        items: ["Front-end", "Back-end", "API", "React","Springboot","PostGreSQl"],
    },
    {
        icon: Bug,
        title: "Analyse sécurité",
        description: "Évaluer les vulnérabilités, tester les risques et recommander des corrections.",
        items: ["Audit", "Test d’intrusion", "Détection", "Correction"],
    },
    {
        icon: Database,
        title: "Pilotage data",
        description: "Transformer les données en indicateurs utiles à la décision.",
        items: ["Analyse", "Reporting", "Décision"],
    },
];

const process = [
    {
        icon: Network,
        title: "Observer",
        text: "Comprendre le contexte.",
    },
    {
        icon: BarChart3,
        title: "Clarifier",
        text: "Prioriser les besoins.",
    },
    {
        icon: Code2,
        title: "Construire",
        text: "Livrer une solution utile.",
    },
    {
        icon: ShieldCheck,
        title: "Fiabiliser",
        text: "Sécuriser et documenter.",
    },
];
export default function ServicesPage() {
    return (
        <>
            <SubPageNavbar />

            <section style={styles.section}>
                <div style={styles.heading}>
                    <p style={styles.kicker}>Services</p>

                    <h1 style={styles.title}>Ce que je peux apporter.</h1>

                    <p style={styles.subtitle}>
                        Une approche orientée infrastructures IT, réseaux, cybersécurité,
                        développement et data.
                    </p>
                </div>

                <div style={styles.servicesGrid}>
                    {services.map((service) => (
                        <article key={service.title} style={styles.serviceCard}>
                            <div style={styles.iconBox}>
                                <service.icon size={27} />
                            </div>

                            <h2 style={styles.cardTitle}>{service.title}</h2>

                            <p style={styles.cardText}>{service.description}</p>

                            <ul style={styles.list}>
                                {service.items.map((item) => (
                                    <li key={item} style={styles.listItem}>
                                        <span style={styles.listDot} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                <div style={styles.methodCard}>
                    <p style={styles.methodKicker}>Méthode</p>

                    <h2 style={styles.methodTitle}>
                        Une méthode simple, claire et sécurisée.
                    </h2>

                    <div style={styles.processGrid}>
                        {process.map((step) => (
                            <div key={step.title} style={styles.processCard}>
                                <step.icon style={styles.processIcon} size={28} />
                                <h3 style={styles.processTitle}>{step.title}</h3>
                                <p style={styles.processText}>{step.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
const styles = {
    section: {
        position: "relative",
        zIndex: 10,
        maxWidth: "1152px",
        margin: "0 auto",
        padding: "80px 16px",
        boxSizing: "border-box",
    },

    heading: {
        marginBottom: "56px",
        textAlign: "center",
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
        fontSize: "clamp(48px, 6vw, 72px)",
        lineHeight: 0.95,
        fontWeight: 950,
        letterSpacing: "-0.06em",
    },

    subtitle: {
        maxWidth: "650px",
        margin: "24px auto 0",
        color: "rgba(255, 255, 255, 0.6)",
        lineHeight: "28px",
    },

    servicesGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: "24px",
    },

    serviceCard: {
        padding: "28px",
        borderRadius: "32px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        background: "rgba(255, 255, 255, 0.04)",
        boxShadow: "0 25px 70px rgba(76, 29, 149, 0.2)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
    },

    iconBox: {
        width: "56px",
        height: "56px",
        marginBottom: "24px",
        borderRadius: "18px",
        background: "rgba(196, 181, 253, 0.15)",
        color: "#ddd6fe",
        boxShadow: "0 12px 30px rgba(76, 29, 149, 0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    cardTitle: {
        margin: 0,
        color: "#ffffff",
        fontSize: "30px",
        lineHeight: 1.1,
        fontWeight: 950,
        letterSpacing: "-0.03em",
    },

    cardText: {
        margin: "14px 0 0",
        color: "rgba(255, 255, 255, 0.6)",
        lineHeight: "24px",
        fontSize: "15px",
    },

    list: {
        margin: "20px 0 0",
        padding: 0,
        listStyle: "none",
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
    },

    listItem: {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        color: "rgba(255, 255, 255, 0.72)",
        lineHeight: "22px",
        fontSize: "14px",
    },

    listDot: {
        width: "7px",
        height: "7px",
        borderRadius: "999px",
        background: "#c4b5fd",
        boxShadow: "0 0 12px rgba(196,181,253,0.9)",
        flexShrink: 0,
    },

    methodCard: {
        marginTop: "80px",
        padding: "40px",
        borderRadius: "40px",
        border: "1px solid rgba(221, 214, 254, 0.15)",
        background:
            "linear-gradient(135deg, rgba(196,181,253,0.15), rgba(217,70,239,0.1), rgba(255,255,255,0.03))",
        boxShadow: "0 25px 70px rgba(76, 29, 149, 0.4)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
    },

    methodKicker: {
        margin: 0,
        color: "#ddd6fe",
        fontSize: "14px",
        fontWeight: 800,
        textTransform: "uppercase",
        letterSpacing: "0.35em",
    },

    methodTitle: {
        margin: "16px 0 0",
        color: "#ffffff",
        fontSize: "clamp(36px, 5vw, 48px)",
        lineHeight: 1,
        fontWeight: 950,
        letterSpacing: "-0.05em",
    },

    processGrid: {
        marginTop: "40px",
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        gap: "20px",
    },

    processCard: {
        padding: "20px",
        borderRadius: "24px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        background: "rgba(0, 0, 0, 0.2)",
    },

    processIcon: {
        color: "#ddd6fe",
    },

    processTitle: {
        margin: "20px 0 0",
        color: "#ffffff",
        fontSize: "20px",
        fontWeight: 950,
    },

    processText: {
        margin: "12px 0 0",
        color: "rgba(255, 255, 255, 0.55)",
        fontSize: "14px",
        lineHeight: "24px",
    },
};