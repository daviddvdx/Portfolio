import {
    Globe2,
    Users,
    ShieldCheck,
    MapPin,
    CalendarDays,
} from "lucide-react";

/*
  Ajoute tes photos ici :

  src/
    assets/
      conference-1.jpg
      cyber-event.jpg
      association.png
*/

import conferenceImg from "../assets/conference-1.png";
import cyberEventImg from "../assets/cyber-event.png";
import associationImg from "../assets/association.png";

const engagements = [
    {
        icon: Globe2,
        image: conferenceImg,
        type: "Conférence internationale",
        title: "Congrès international d’astronautique",
        period: "2023",
        location: "Azercosmos IAC — Baku, Azerbaïdjan",
        description:
            "Participation au congrès international d’astronautique BAKU 2023, autour de l’espace durable, des innovations spatiales et des opportunités du secteur.",
        points: [
            "Espace durable",
            "Innovations spatiales",
            "Veille technologique",
            "Opportunités sectorielles",
        ],
    },
    {
        icon: ShieldCheck,
        image: cyberEventImg,
        type: "Cybersécurité",
        title: "Événements et sensibilisation cyber",
        period: "2024 - 2025",
        location: "Casablanca, Maroc",
        description:
            "Participation à des activités liées à la sécurité informatique, aux bonnes pratiques cyber et à la sensibilisation.",
        points: ["Sensibilisation", "Bonnes pratiques", "Culture cyber"],
    },
    {
        icon: Users,
        image: associationImg,
        type: "Expérience associative",
        title: "Vice-Président de l’UGM Tanger",
        period: "Septembre 2021 - Décembre 2022",
        location: "Union des Gabonais au Maroc — Tanger, Maroc",
        description:
            "Engagement associatif auprès des étudiants gabonais au Maroc, avec des actions d’entraide, d’intégration et d’organisation d’événements.",
        points: [
            "Collecte de fonds",
            "Tutorat étudiant",
            "Événements culturels",
            "Actions solidaires",
        ],
    },
];

export default function EngagementsPage() {
    return (
        <section style={styles.page}>
            <div style={styles.hero}>
                <p style={styles.kicker}>Engagements</p>

                <h1 style={styles.title}>
                    Conférences, associations et expériences collectives.
                </h1>

                <p style={styles.subtitle}>
                    Une page dédiée aux expériences qui montrent mon ouverture, mon
                    implication, ma communication et ma capacité à évoluer dans des
                    environnements collectifs.
                </p>
            </div>

            <div style={styles.summaryGrid}>
                <div style={styles.summaryCard}>
                    <span style={styles.summaryNumber}>01</span>
                    <h3 style={styles.summaryTitle}>Conférences</h3>
                    <p style={styles.summaryText}>Veille, échanges et ouverture.</p>
                </div>

                <div style={styles.summaryCard}>
                    <span style={styles.summaryNumber}>02</span>
                    <h3 style={styles.summaryTitle}>Associatif</h3>
                    <p style={styles.summaryText}>Organisation et engagement.</p>
                </div>

                <div style={styles.summaryCard}>
                    <span style={styles.summaryNumber}>03</span>
                    <h3 style={styles.summaryTitle}>Communication</h3>
                    <p style={styles.summaryText}>Présenter, expliquer et collaborer.</p>
                </div>
            </div>

            <div style={styles.grid}>
                {engagements.map((item, index) => (
                    <article
                        key={item.title}
                        style={{
                            ...styles.card,
                            ...(index === 0 ? styles.featuredCard : {}),
                        }}
                    >
                        <div
                            style={{
                                ...styles.imageWrapper,
                                ...(index === 0 ? styles.featuredImageWrapper : {}),
                            }}
                        >
                            <img src={item.image} alt={item.title} style={styles.image} />

                            <div style={styles.imageOverlay} />

                            <div style={styles.floatingType}>
                                <item.icon size={17} />
                                <span>{item.type}</span>
                            </div>
                        </div>

                        <div style={styles.cardBody}>
                            <div style={styles.metaRow}>
                <span style={styles.metaItem}>
                  <CalendarDays size={16} />
                    {item.period}
                </span>

                                <span style={styles.metaItem}>
                  <MapPin size={16} />
                                    {item.location}
                </span>
                            </div>

                            <h2 style={styles.cardTitle}>{item.title}</h2>

                            <p style={styles.description}>{item.description}</p>

                            <div style={styles.points}>
                                {item.points.map((point) => (
                                    <span key={point} style={styles.point}>
                    {point}
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
        maxWidth: "1180px",
        margin: "0 auto",
        padding: "80px 16px",
        boxSizing: "border-box",
    },

    hero: {
        maxWidth: "940px",
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
        fontSize: "clamp(44px, 7vw, 82px)",
        lineHeight: 0.95,
        fontWeight: 950,
        letterSpacing: "-0.06em",
    },

    subtitle: {
        maxWidth: "820px",
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

    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: "28px",
    },

    card: {
        overflow: "hidden",
        borderRadius: "34px",
        border: "1px solid rgba(255,255,255,0.1)",
        background:
            "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.025))",
        boxShadow: "0 25px 70px rgba(76,29,149,0.22)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
    },

    featuredCard: {
        gridColumn: "1 / -1",
    },

    imageWrapper: {
        position: "relative",
        height: "300px",
        overflow: "hidden",
        background:
            "linear-gradient(135deg, rgba(196,181,253,0.15), rgba(217,70,239,0.08))",
    },

    featuredImageWrapper: {
        height: "420px",
    },

    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
    },

    imageOverlay: {
        position: "absolute",
        inset: 0,
        background:
            "linear-gradient(to bottom, rgba(3,1,6,0.05), rgba(3,1,6,0.72))",
    },

    floatingType: {
        position: "absolute",
        left: "20px",
        bottom: "20px",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "10px 14px",
        borderRadius: "999px",
        border: "1px solid rgba(255,255,255,0.16)",
        background: "rgba(10,4,18,0.72)",
        color: "#ede9fe",
        fontSize: "12px",
        fontWeight: 900,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
    },

    cardBody: {
        padding: "26px",
    },

    metaRow: {
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
        marginBottom: "16px",
    },

    metaItem: {
        display: "inline-flex",
        alignItems: "center",
        gap: "7px",
        color: "rgba(255,255,255,0.68)",
        fontSize: "14px",
        fontWeight: 700,
    },

    cardTitle: {
        margin: 0,
        color: "#ffffff",
        fontSize: "30px",
        lineHeight: 1.08,
        fontWeight: 950,
        letterSpacing: "-0.035em",
    },

    description: {
        margin: "16px 0 0",
        color: "rgba(255,255,255,0.62)",
        lineHeight: "28px",
    },

    points: {
        marginTop: "22px",
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
    },

    point: {
        padding: "8px 12px",
        borderRadius: "999px",
        background: "rgba(0,0,0,0.26)",
        border: "1px solid rgba(255,255,255,0.1)",
        color: "rgba(255,255,255,0.78)",
        fontSize: "13px",
        fontWeight: 700,
    },
};