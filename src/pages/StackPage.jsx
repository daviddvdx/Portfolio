import {
    Network,
    ShieldCheck,
    Server,
    DatabaseBackup,
    MonitorCog,
    Code2,
    Bug,
    Terminal,
    Database,
} from "lucide-react";

const skillGroups = [
    {
        icon: Network,
        title: "Réseaux et sécurité",
        description:
            "Administration réseau, sécurisation des flux et protection des infrastructures.",
        skills: [
            "Routage",
            "Pare-feux",
            "VPN",
            "Switch",
            "Protocoles réseau",
            "Wireshark",
            "Cryptographie",
        ],
    },
    {
        icon: Server,
        title: "Infrastructures IT",
        description:
            "Administration, supervision, virtualisation et sauvegarde des environnements IT.",
        skills: [
            "Docker",
            "Virtualisation",
            "VMware",
            "Veeam Backup",
            "openNMS",
            "Supervision",
            "Sauvegardes",
        ],
    },
    {
        icon: MonitorCog,
        title: "Systèmes d’exploitation",
        description:
            "Utilisation et administration de systèmes Windows et Linux.",
        skills: [
            "Windows Server",
            "Windows",
            "Linux",
            "Kali Linux",
            "Ubuntu",
            "Administration système",
        ],
    },
    {
        icon: Code2,
        title: "Programmation",
        description:
            "Développement web, backend, scripts et applications mobiles.",
        skills: [
            "C++",
            "Python",
            "Django",
            "Java",
            "Spring Boot",
            "HTML",
            "CSS",
            "JavaScript",
            "Dart",
            "Flutter",
        ],
    },
    {
        icon: Database,
        title: "Data & reporting",
        description:
            "Analyse, structuration et visualisation des données.",
        skills: [
            "SQL",
            "Power BI",
            "Excel avancé",
            "KPI",
            "Reporting",
            "Tableaux de bord",
            "Analyse de données",
        ],
    },
    {
        icon: Bug,
        title: "Test d’intrusion Web",
        description:
            "Sécurité offensive, analyse de vulnérabilités et tests d’intrusion web.",
        skills: [
            "Metasploit Framework",
            "Burp Suite",
            "Nmap",
            "Phishing",
            "PTES",
            "Reconnaissance",
            "Analyse de vulnérabilités",
        ],
    },
];

const highlights = [
    {
        icon: ShieldCheck,
        value: "Cyber",
        label: "Sécurité réseau, pentest web et durcissement.",
    },
    {
        icon: Terminal,
        value: "Dev",
        label: "Web, backend, scripts et mobile.",
    },
    {
        icon: Database,
        value: "Data",
        label: "Analyse, reporting, KPI et tableaux de bord.",
    },
    {
        icon: DatabaseBackup,
        value: "Infra",
        label: "Systèmes, sauvegarde, supervision et virtualisation.",
    },
];

export default function StackPage() {
    return (
        <section style={styles.page}>
            <div style={styles.hero}>
                <p style={styles.kicker}>Compétences</p>

                <h1 style={styles.title}>Ma stack technique.</h1>

                <p style={styles.subtitle}>
                    Un socle de compétences orienté réseaux, cybersécurité,
                    infrastructures IT, systèmes d’exploitation, programmation, data et
                    tests d’intrusion web.
                </p>
            </div>

            <div style={styles.highlightGrid}>
                {highlights.map((item) => (
                    <article key={item.value} style={styles.highlightCard}>
                        <div style={styles.highlightIcon}>
                            <item.icon size={25} />
                        </div>

                        <h3 style={styles.highlightValue}>{item.value}</h3>
                        <p style={styles.highlightLabel}>{item.label}</p>
                    </article>
                ))}
            </div>

            <div style={styles.grid}>
                {skillGroups.map((group) => (
                    <article key={group.title} style={styles.card}>
                        <div style={styles.cardTop}>
                            <div style={styles.iconBox}>
                                <group.icon size={28} />
                            </div>

                            <span style={styles.badge}>Stack</span>
                        </div>

                        <h2 style={styles.cardTitle}>{group.title}</h2>

                        <p style={styles.description}>{group.description}</p>

                        <div style={styles.skills}>
                            {group.skills.map((skill) => (
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
        maxWidth: "920px",
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

    highlightGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        gap: "20px",
        marginBottom: "64px",
    },

    highlightCard: {
        padding: "24px",
        borderRadius: "28px",
        border: "1px solid rgba(255,255,255,0.1)",
        background:
            "linear-gradient(135deg, rgba(196,181,253,0.13), rgba(217,70,239,0.07), rgba(255,255,255,0.025))",
        boxShadow: "0 25px 70px rgba(76,29,149,0.2)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
    },

    highlightIcon: {
        width: "52px",
        height: "52px",
        borderRadius: "18px",
        background: "rgba(196, 181, 253, 0.15)",
        color: "#ddd6fe",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "18px",
        boxShadow: "0 16px 36px rgba(76, 29, 149, 0.3)",
    },

    highlightValue: {
        margin: 0,
        color: "#ffffff",
        fontSize: "26px",
        fontWeight: 950,
        letterSpacing: "-0.03em",
    },

    highlightLabel: {
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

    cardTop: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        marginBottom: "24px",
    },

    iconBox: {
        width: "58px",
        height: "58px",
        borderRadius: "20px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        background: "rgba(196, 181, 253, 0.15)",
        color: "#ddd6fe",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 16px 36px rgba(76, 29, 149, 0.35)",
    },

    badge: {
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

    cardTitle: {
        margin: 0,
        color: "#ffffff",
        fontSize: "30px",
        lineHeight: 1.1,
        fontWeight: 950,
        letterSpacing: "-0.03em",
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