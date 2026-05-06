import {
    GraduationCap,
    BriefcaseBusiness,
    Building2,
    ShieldCheck,
    Server,
} from "lucide-react";

/*
  Place tes logos ici :

  src/
    assets/
      logos/
        uic.png
        ensi.png
        nelson-mandela.png
        wb-technologies.png
        coca-cola.png
*/

import uicLogo from "../assets/logos/uic.png";
import ensiLogo from "../assets/logos/ensi.png";
import nelsonLogo from "../assets/logos/nelson-mandela.png";
import wbLogo from "../assets/logos/wb-technologies.png";
import cocaLogo from "../assets/logos/coca-cola.png";

const formations = [
    {
        icon: GraduationCap,
        logo: uicLogo,
        period: "Septembre 2022 - Juillet 2025",
        title: "Ingénierie des Systèmes d’Informations",
        school: "Université Internationale de Casablanca",
        location: "Casablanca, Maroc",
        description:
            "Formation orientée systèmes d'information, architecture SI, développement, data, réseaux, infrastructures et cybersécurité.",
        skills: [
            "Systèmes d'information",
            "Architecture SI",
            "Data",
            "Développement Web",
            "Cybersécurité",
        ],
    },
    {
        icon: GraduationCap,
        logo: ensiLogo,
        period: "Octobre 2020 - Juin 2022",
        title: "Classe Préparatoire Intégrée",
        school: "École Nouvelles Sciences et Ingénieries",
        location: "Tanger, Maroc",
        description:
            "Formation scientifique et technique préparatoire aux études d’ingénierie.",
        skills: [
            "Mathématiques",
            "Physique",
            "Sciences de l’ingénieur",
            "Logique",
        ],
    },
    {
        icon: GraduationCap,
        logo: nelsonLogo,
        period: "2019 - 2020",
        title: "Baccalauréat Scientifique",
        school: "Lycée d’application Nelson Mandela",
        location: "Libreville, Gabon",
        description:
            "Option Série C : Mathématiques & Physique-Chimie.",
        skills: ["Mathématiques", "Physique", "Chimie"],
    },
];

const experiences = [
    {
        icon: Server,
        logo: wbLogo,
        period: "Février 2025 - Juillet 2025",
        title: "Stage PFE Ingénieur Datacenter",
        company: "WB-Technologies",
        location: "Libreville, Gabon",
        category: "Datacenter / Systèmes d’information",
        missions: [
            "Standardisation des datacenters selon les normes Uptime.",
            "Analyse de l’existant et audit des infrastructures du datacenter.",
            "Réalisation de tests et contrôles pour valider la conformité aux normes.",
            "Analyse des infrastructures du datacenter pour détecter les failles de sécurité.",
            "Rédaction du plan de mise en conformité.",
        ],
        skills: [
            "Datacenter",
            "Audit infrastructure",
            "Normes Uptime",
            "Conformité",
            "Sécurité",
            "Documentation",
        ],
    },
    {
        icon: ShieldCheck,
        logo: cocaLogo,
        period: "Juillet 2024 - Septembre 2024",
        title: "Stage en Cybersécurité",
        company: "Equatorial Coca-Cola Bottling Company - Morocco",
        location: "Casablanca, Maroc",
        category: "Cybersécurité / Réseaux",
        missions: [
            "Mise en place d’un plan d’action pour renforcer la sécurité des systèmes informatiques.",
            "Audits de sécurité, tests d’intrusion web et réseaux, détection d’anomalies.",
            "Rédaction de rapports de synthèse sur les risques identifiés et les mesures prises.",
            "Configuration des pare-feux Palo Alto et des modems Wi-Fi.",
            "Utilisation de Microsoft Sentinel.",
            "Implémentation des normes internationales ISO 27001, NIST et ITIL.",
        ],
        skills: [
            "Cybersécurité",
            "Audit",
            "Pentest Web",
            "Réseaux",
            "Palo Alto",
            "Microsoft Sentinel",
            "ISO 27001",
            "NIST",
            "ITIL",
        ],
    },
];

export default function ParcoursPage() {
    return (
        <section style={styles.page}>
            <div style={styles.hero}>
                <p style={styles.kicker}>Parcours</p>

                <h1 style={styles.title}>Mon parcours académique et professionnel.</h1>

                <p style={styles.subtitle}>
                    Une trajectoire construite autour des systèmes d'information, des
                    infrastructures, de la data, du développement web et de la
                    cybersécurité, avec des expériences concrètes en entreprise.
                </p>
            </div>

            <div style={styles.summaryGrid}>
                <div style={styles.summaryCard}>
                    <span style={styles.summaryNumber}>01</span>
                    <h3 style={styles.summaryTitle}>Diplômes</h3>
                    <p style={styles.summaryText}>
                        Formation ingénieur en systèmes d'information.
                    </p>
                </div>

                <div style={styles.summaryCard}>
                    <span style={styles.summaryNumber}>02</span>
                    <h3 style={styles.summaryTitle}>Expériences</h3>
                    <p style={styles.summaryText}>
                        Stages en datacenter, cybersécurité et infrastructures.
                    </p>
                </div>

                <div style={styles.summaryCard}>
                    <span style={styles.summaryNumber}>03</span>
                    <h3 style={styles.summaryTitle}>Profil</h3>
                    <p style={styles.summaryText}>
                        Profil hybride SI, data, web et cybersécurité.
                    </p>
                </div>
            </div>

            <ParcoursSection
                id="formations"
                label="Diplômes et Formations"
                title="Mon parcours académique."
                description="Mes formations principales, de la base scientifique jusqu’à l’ingénierie des systèmes d’information."
                items={formations}
                type="formation"
            />

            <ParcoursSection
                id="experiences"
                label="Expériences professionnelles"
                title="Mes expériences en entreprise."
                description="Des expériences orientées cybersécurité, datacenter, audit, conformité et systèmes d’information."
                items={experiences}
                type="experience"
            />
        </section>
    );
}

function ParcoursSection({ id, label, title, description, items, type }) {
    return (
        <section id={id} style={styles.block}>
            <div style={styles.blockHeader}>
                <p style={styles.blockLabel}>{label}</p>
                <h2 style={styles.blockTitle}>{title}</h2>
                <p style={styles.blockDescription}>{description}</p>
            </div>

            <div style={styles.timeline}>
                {items.map((item, index) => (
                    <article key={`${item.title}-${item.period}`} style={styles.timelineItem}>
                        <div style={styles.leftColumn}>
                            <div style={styles.iconBox}>
                                <item.icon size={25} />
                            </div>

                            {index !== items.length - 1 && <div style={styles.line} />}
                        </div>

                        <div style={styles.card}>
                            <div style={styles.cardTop}>
                                <div style={styles.cardIdentity}>
                                    {item.logo && (
                                        <div style={styles.logoBox}>
                                            <img
                                                src={item.logo}
                                                alt={type === "formation" ? item.school : item.company}
                                                style={styles.logoImage}
                                            />
                                        </div>
                                    )}

                                    <div>
                                        <p style={styles.period}>{item.period}</p>
                                        <h3 style={styles.cardTitle}>{item.title}</h3>
                                    </div>
                                </div>

                                <span style={styles.category}>
                  {type === "formation" ? "Formation" : item.category}
                </span>
                            </div>

                            {type === "formation" ? (
                                <>
                                    <div style={styles.meta}>
                                        <Building2 size={17} />
                                        <span>{item.school}</span>
                                        <span style={styles.dotSeparator}>•</span>
                                        <span>{item.location}</span>
                                    </div>

                                    <p style={styles.cardDescription}>{item.description}</p>
                                </>
                            ) : (
                                <>
                                    <div style={styles.meta}>
                                        <BriefcaseBusiness size={17} />
                                        <span>{item.company}</span>
                                        <span style={styles.dotSeparator}>•</span>
                                        <span>{item.location}</span>
                                    </div>

                                    <ul style={styles.missionList}>
                                        {item.missions.map((mission) => (
                                            <li key={mission} style={styles.missionItem}>
                                                {mission}
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}

                            <div style={styles.skills}>
                                {item.skills.map((skill) => (
                                    <span key={skill} style={styles.skill}>
                    {skill}
                  </span>
                                ))}
                            </div>
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

    summaryGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: "20px",
        marginBottom: "80px",
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
        fontSize: "13px",
        fontWeight: 900,
        letterSpacing: "0.25em",
    },

    summaryTitle: {
        margin: "18px 0 0",
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

    block: {
        marginTop: "90px",
    },

    blockHeader: {
        maxWidth: "780px",
        marginBottom: "40px",
    },

    blockLabel: {
        margin: 0,
        color: "#c4b5fd",
        fontSize: "13px",
        fontWeight: 900,
        textTransform: "uppercase",
        letterSpacing: "0.3em",
    },

    blockTitle: {
        margin: "12px 0 0",
        color: "#ffffff",
        fontSize: "clamp(34px, 5vw, 56px)",
        lineHeight: 1,
        fontWeight: 950,
        letterSpacing: "-0.05em",
    },

    blockDescription: {
        margin: "18px 0 0",
        color: "rgba(255,255,255,0.6)",
        lineHeight: "28px",
    },

    timeline: {
        display: "flex",
        flexDirection: "column",
        gap: "28px",
    },

    timelineItem: {
        display: "grid",
        gridTemplateColumns: "72px 1fr",
        gap: "24px",
        position: "relative",
    },

    leftColumn: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
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
        zIndex: 2,
    },

    line: {
        position: "absolute",
        top: "64px",
        bottom: "-30px",
        width: "1px",
        background:
            "linear-gradient(to bottom, rgba(196,181,253,0.5), rgba(196,181,253,0.05))",
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
        justifyContent: "space-between",
        gap: "20px",
        alignItems: "flex-start",
    },

    cardIdentity: {
        display: "flex",
        alignItems: "center",
        gap: "18px",
    },

    logoBox: {
        width: "68px",
        height: "68px",
        borderRadius: "20px",
        border: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(255,255,255,0.06)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
        flexShrink: 0,
        boxShadow: "0 16px 36px rgba(76, 29, 149, 0.22)",
    },

    logoImage: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        display: "block",
    },

    period: {
        margin: 0,
        color: "#c4b5fd",
        fontSize: "13px",
        fontWeight: 900,
        textTransform: "uppercase",
        letterSpacing: "0.18em",
    },

    cardTitle: {
        margin: "10px 0 0",
        color: "#ffffff",
        fontSize: "30px",
        lineHeight: 1.1,
        fontWeight: 950,
        letterSpacing: "-0.03em",
    },

    category: {
        flexShrink: 0,
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

    meta: {
        marginTop: "18px",
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "8px",
        color: "rgba(255,255,255,0.72)",
        fontSize: "15px",
        lineHeight: "24px",
    },

    dotSeparator: {
        color: "rgba(255,255,255,0.35)",
    },

    cardDescription: {
        margin: "18px 0 0",
        color: "rgba(255,255,255,0.62)",
        lineHeight: "28px",
    },

    missionList: {
        margin: "22px 0 0",
        paddingLeft: "22px",
        color: "rgba(255,255,255,0.64)",
        lineHeight: "28px",
    },

    missionItem: {
        marginBottom: "8px",
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