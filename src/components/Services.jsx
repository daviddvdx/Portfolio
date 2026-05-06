import {
    Database,
    Globe2,
    LockKeyhole,
    Server,
    ArrowUpRight,
} from "lucide-react";
import useIsMobile from "../hooks/useIsMobile.js";

const services = [
    {
        icon: Server,
        title: "Systèmes d'information",
        text: "Architecture, urbanisation SI, automatisation, supervision et documentation technique.",
    },
    {
        icon: Database,
        title: "Data",
        text: "Collecte, nettoyage, visualisation, tableaux de bord et exploitation orientée décision.",
    },
    {
        icon: Globe2,
        title: "Développement Web",
        text: "Interfaces modernes, responsive design, React, API, intégration et optimisation front-end.",
    },
    {
        icon: LockKeyhole,
        title: "Cybersécurité",
        text: "Sensibilisation, durcissement, analyse de risques, bonnes pratiques et sécurité applicative.",
    },
];

export default function Services() {
    const isMobile = useIsMobile();

    const handleScrollToContact = (event) => {
        event.preventDefault();

        const section = document.getElementById("contact");

        if (!section) return;

        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        window.history.replaceState(null, "", "#contact");
    };

    return (
        <section
            style={{
                ...styles.section,
                ...(isMobile ? styles.sectionMobile : {}),
            }}
        >
            <div
                style={{
                    ...styles.header,
                    ...(isMobile ? styles.headerMobile : {}),
                }}
            >
                <div>
                    <p style={styles.kicker}>Expertises</p>

                    <h2
                        style={{
                            ...styles.title,
                            ...(isMobile ? styles.titleMobile : {}),
                        }}
                    >
                        Un profil transversal.
                    </h2>
                </div>

                <p
                    style={{
                        ...styles.description,
                        ...(isMobile ? styles.descriptionMobile : {}),
                    }}
                >
                    Une vision complète : comprendre le SI, structurer la donnée,
                    développer l'interface et intégrer la sécurité dès la conception.
                </p>
            </div>

            <div
                style={{
                    ...styles.grid,
                    ...(isMobile ? styles.gridMobile : {}),
                }}
            >
                {services.map((service) => (
                    <article
                        key={service.title}
                        style={{
                            ...styles.card,
                            ...(isMobile ? styles.cardMobile : {}),
                        }}
                    >
                        <div
                            style={{
                                ...styles.iconBox,
                                ...(isMobile ? styles.iconBoxMobile : {}),
                            }}
                        >
                            <service.icon size={isMobile ? 22 : 24} />
                        </div>

                        <h3
                            style={{
                                ...styles.cardTitle,
                                ...(isMobile ? styles.cardTitleMobile : {}),
                            }}
                        >
                            {service.title}
                        </h3>

                        <p
                            style={{
                                ...styles.cardText,
                                ...(isMobile ? styles.cardTextMobile : {}),
                            }}
                        >
                            {service.text}
                        </p>
                    </article>
                ))}
            </div>

            <div style={styles.buttonWrapper}>
                <a
                    href="#contact"
                    onClick={handleScrollToContact}
                    style={{
                        ...styles.button,
                        ...(isMobile ? styles.buttonMobile : {}),
                    }}
                >
                    Discuter d’un service
                    <ArrowUpRight size={17} style={styles.buttonIcon} />
                </a>
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
        boxSizing: "border-box",
    },

    sectionMobile: {
        padding: "56px 14px",
    },

    header: {
        marginBottom: "40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        gap: "16px",
    },

    headerMobile: {
        marginBottom: "30px",
        flexDirection: "column",
        alignItems: "flex-start",
        textAlign: "left",
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

    titleMobile: {
        fontSize: "clamp(34px, 11vw, 48px)",
        lineHeight: 1,
    },

    description: {
        maxWidth: "512px",
        margin: 0,
        color: "rgba(255, 255, 255, 0.6)",
        lineHeight: "28px",
    },

    descriptionMobile: {
        maxWidth: "100%",
        fontSize: "15px",
        lineHeight: "26px",
    },

    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        gap: "20px",
    },

    gridMobile: {
        gridTemplateColumns: "1fr",
        gap: "16px",
    },

    card: {
        padding: "24px",
        borderRadius: "32px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        background: "rgba(255, 255, 255, 0.04)",
        color: "#ffffff",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        boxShadow: "0 25px 70px rgba(76, 29, 149, 0.18)",
        transition:
            "transform 0.25s ease, border-color 0.25s ease, background 0.25s ease",
    },

    cardMobile: {
        padding: "22px",
        borderRadius: "24px",
    },

    iconBox: {
        width: "48px",
        height: "48px",
        marginBottom: "32px",
        borderRadius: "16px",
        background: "rgba(196, 181, 253, 0.15)",
        color: "#ddd6fe",
        boxShadow: "0 12px 30px rgba(76, 29, 149, 0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    iconBoxMobile: {
        width: "44px",
        height: "44px",
        marginBottom: "22px",
        borderRadius: "14px",
    },

    cardTitle: {
        margin: 0,
        color: "#ffffff",
        fontSize: "20px",
        lineHeight: 1.2,
        fontWeight: 950,
        letterSpacing: "-0.03em",
    },

    cardTitleMobile: {
        fontSize: "19px",
    },

    cardText: {
        margin: "16px 0 0",
        color: "rgba(255, 255, 255, 0.6)",
        fontSize: "14px",
        lineHeight: "28px",
    },

    cardTextMobile: {
        marginTop: "12px",
        lineHeight: "25px",
    },

    buttonWrapper: {
        marginTop: "40px",
        display: "flex",
        justifyContent: "center",
    },

    button: {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "13px 28px",
        borderRadius: "999px",
        background: "linear-gradient(135deg, #7c3aed, #a855f7, #c084fc)",
        color: "#ffffff",
        textDecoration: "none",
        fontWeight: 900,
        boxShadow:
            "0 0 28px rgba(168, 85, 247, 0.48), 0 18px 40px rgba(139, 92, 246, 0.35)",
        border: "1px solid rgba(233, 213, 255, 0.35)",
    },

    buttonMobile: {
        width: "100%",
        justifyContent: "center",
        padding: "14px 20px",
    },

    buttonIcon: {
        marginLeft: "2px",
    },
};