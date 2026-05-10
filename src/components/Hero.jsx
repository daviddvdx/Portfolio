import { motion } from "framer-motion";
import {
    ArrowDownToLine,
    ArrowUpRight,
    Database,
    Globe2,
    LockKeyhole,
    Server,
    Sparkles,
} from "lucide-react";
import profileImage from "../assets/profile.png";
import useIsMobile from "../hooks/useIsMobile.js";

export default function Hero() {
    const isMobile = useIsMobile();

    return (
        <section
            style={{
                ...styles.section,
                ...(isMobile ? styles.sectionMobile : {}),
            }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                style={{
                    ...styles.visualWrapper,
                    ...(isMobile ? styles.visualWrapperMobile : {}),
                }}
            >
                <div style={styles.visualGlow} />

                <div
                    style={{
                        ...styles.visualOrbit,
                        ...(isMobile ? styles.visualOrbitMobile : {}),
                    }}
                />

                <div
                    style={{
                        ...styles.profileCircle,
                        ...(isMobile ? styles.profileCircleMobile : {}),
                    }}
                >
                    <img
                        src={profileImage}
                        alt="Portrait de David"
                        style={styles.profileImage}
                    />
                </div>

                <div
                    style={{
                        ...styles.floatingBadge,
                        ...styles.badgeReact,
                        ...(isMobile ? styles.badgeReactMobile : {}),
                    }}
                >
                    React
                </div>

                <div
                    style={{
                        ...styles.floatingBadge,
                        ...styles.badgeCyber,
                        ...(isMobile ? styles.badgeCyberMobile : {}),
                    }}
                >
                    Cybersec
                </div>

                <div
                    style={{
                        ...styles.floatingBadge,
                        ...styles.badgeData,
                        ...(isMobile ? styles.badgeDataMobile : {}),
                    }}
                >
                    Data
                </div>

                <div
                    style={{
                        ...styles.floatingBadge,
                        ...styles.badgeSI,
                        ...(isMobile ? styles.badgeSIMobile : {}),
                    }}
                >
                    SI
                </div>

                <div
                    style={{
                        ...styles.iconRowFloating,
                        ...(isMobile ? styles.iconRowFloatingMobile : {}),
                    }}
                >
          <span style={styles.smallIconCircle}>
            <Server size={18} />
          </span>

                    <span style={styles.smallIconCircle}>
            <Database size={18} />
          </span>

                    <span style={styles.smallIconCircle}>
            <Globe2 size={18} />
          </span>

                    <span style={styles.smallIconCircle}>
            <LockKeyhole size={18} />
          </span>
                </div>
            </motion.div>

            <motion.div
                style={{
                    ...styles.textContent,
                    ...(isMobile ? styles.textContentMobile : {}),
                }}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
            >
                <div
                    style={{
                        ...styles.badge,
                        ...(isMobile ? styles.badgeMobile : {}),
                    }}
                >
                    <Sparkles size={16} />
                    Data · Web · SI · Cybersecurity
                </div>

                <div style={styles.heroTitleBlock}>
                    <style>
                        {`
              @keyframes titleGlowPulse {
                0%, 100% {
                  opacity: 1;
                  text-shadow:
                    0 0 24px rgba(168, 85, 247, 0.45),
                    0 0 60px rgba(124, 58, 237, 0.28);
                  filter: brightness(1);
                }

                50% {
                  opacity: 0.86;
                  text-shadow:
                    0 0 32px rgba(192, 132, 252, 0.95),
                    0 0 78px rgba(168, 85, 247, 0.55),
                    0 0 110px rgba(124, 58, 237, 0.35);
                  filter: brightness(1.18);
                }
              }
            `}
                    </style>

                    <h1
                        style={{
                            ...styles.title,
                            ...(isMobile ? styles.titleMobile : {}),
                        }}
                    >
                        Des systèmes robustes.{" "}
                        <span
                            style={{
                                ...styles.titleAccent,
                                ...(isMobile ? styles.titleAccentMobile : {}),
                            }}
                        >
              Des données intelligentes.
            </span>
                    </h1>

                    <p
                        style={{
                            ...styles.titleSubtitle,
                            ...(isMobile ? styles.titleSubtitleMobile : {}),
                        }}
                    >
                        Des interfaces qui créent de la valeur.
                    </p>
                </div>

                <p
                    style={{
                        ...styles.description,
                        ...(isMobile ? styles.descriptionMobile : {}),
                    }}
                >
                    Profil hybride entre systèmes d'information, data, développement web
                    et cybersécurité. Je transforme des besoins métiers en plateformes
                    performantes, fiables et orientées résultats.
                </p>

                <div
                    style={{
                        ...styles.actions,
                        ...(isMobile ? styles.actionsMobile : {}),
                    }}
                >
                    <a href="#project" style={styles.primaryButton}>
                        Voir mes projets
                        <ArrowUpRight style={styles.buttonIcon} size={18} />
                    </a>

                    <a href="/CV_DONGA.pdf" download style={styles.secondaryButton}>
                        Télécharger mon CV
                        <ArrowDownToLine style={styles.buttonIcon} size={18} />
                    </a>
                </div>

                <div
                    style={{
                        ...styles.statsGrid,
                        ...(isMobile ? styles.statsGridMobile : {}),
                    }}
                >
                    <div style={styles.statCard}>
                        <p style={styles.statNumber}>4</p>
                        <p style={styles.statLabel}>Domaines</p>
                    </div>

                    <div style={styles.statCard}>
                        <p style={styles.statNumber}>100%</p>
                        <p style={styles.statLabel}>Focus ROI</p>
                    </div>

                    <div style={styles.statCard}>
                        <p style={styles.statNumber}>24/7</p>
                        <p style={styles.statLabel}>Fiabilité</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

const styles = {
    section: {
        position: "relative",
        zIndex: 10,
        width: "100%",
        maxWidth: "1152px",
        minHeight: "100vh",
        margin: "0 auto",
        padding: "0px 14px 52px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "5px",
        boxSizing: "border-box",
        textAlign: "center",
        marginTop: "-85px",
    },

    sectionMobile: {
        minHeight: "auto",
        padding: "92px 14px 56px",
        marginTop: 0,
        gap: "18px",
    },

    visualWrapper: {
        position: "relative",
        width: "100%",
        maxWidth: "420px",
        aspectRatio: "1 / 1",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    visualWrapperMobile: {
        maxWidth: "300px",
    },

    visualGlow: {
        position: "absolute",
        inset: "-18px",
        borderRadius: "999px",
        background:
            "radial-gradient(circle, rgba(217, 70, 239, 0.65), rgba(124, 58, 237, 0.38) 42%, rgba(67, 56, 202, 0.2) 62%, transparent 72%)",
        filter: "blur(34px)",
        opacity: 0.9,
    },

    visualOrbit: {
        position: "absolute",
        width: "370px",
        height: "370px",
        borderRadius: "999px",
        background:
            "linear-gradient(135deg, rgba(217,70,239,0.9), rgba(124,58,237,0.75), rgba(67,56,202,0.8))",
        boxShadow:
            "0 0 70px rgba(168, 85, 247, 0.5), inset 0 0 55px rgba(0, 0, 0, 0.5)",
    },

    visualOrbitMobile: {
        width: "260px",
        height: "260px",
    },

    profileCircle: {
        position: "relative",
        zIndex: 10,
        width: "310px",
        height: "310px",
        borderRadius: "999px",
        padding: "8px",
        background:
            "linear-gradient(135deg, rgba(217,70,239,0.9), rgba(124,58,237,0.95), rgba(67,56,202,0.9))",
        boxShadow:
            "0 0 55px rgba(168, 85, 247, 0.65), 0 25px 80px rgba(0, 0, 0, 0.55)",
        overflow: "hidden",
    },

    profileCircleMobile: {
        width: "225px",
        height: "225px",
        padding: "7px",
    },

    profileImage: {
        width: "100%",
        height: "100%",
        borderRadius: "999px",
        objectFit: "cover",
        objectPosition: "center 25%",
        display: "block",
        border: "5px solid rgba(3, 1, 6, 0.88)",
        boxSizing: "border-box",
    },

    textContent: {
        width: "100%",
        maxWidth: "1250px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },

    textContentMobile: {
        maxWidth: "100%",
    },

    badge: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        marginBottom: "26px",
        padding: "8px 16px",
        borderRadius: "999px",
        border: "1px solid rgba(196, 181, 253, 0.2)",
        background: "rgba(196, 181, 253, 0.1)",
        color: "#ede9fe",
        fontSize: "14px",
    },

    badgeMobile: {
        marginBottom: "18px",
        fontSize: "12px",
        padding: "7px 12px",
    },

    heroTitleBlock: {
        width: "100%",
        maxWidth: "1250px",
        margin: "0 auto",
        textAlign: "center",
    },

    title: {
        width: "100%",
        maxWidth: "1250px",
        margin: 0,
        color: "#ffffff",
        fontSize: "clamp(42px, 6.2vw, 84px)",
        lineHeight: 0.95,
        fontWeight: 950,
        letterSpacing: "-0.065em",
        textAlign: "center",
    },

    titleMobile: {
        fontSize: "clamp(34px, 13vw, 54px)",
        lineHeight: 0.96,
        letterSpacing: "-0.055em",
    },

    titleAccent: {
        display: "inline-block",
        color: "#c084fc",
        whiteSpace: "nowrap",
        animation: "titleGlowPulse 2.6s ease-in-out infinite",
    },

    titleAccentMobile: {
        whiteSpace: "normal",
    },

    titleSubtitle: {
        width: "fit-content",
        margin: "22px auto 0",
        padding: "10px 18px",
        borderRadius: "999px",
        border: "1px solid rgba(168, 85, 247, 0.28)",
        background:
            "linear-gradient(135deg, rgba(168, 85, 247, 0.18), rgba(3, 1, 6, 0.52))",
        color: "#e9d5ff",
        fontSize: "clamp(16px, 2vw, 22px)",
        fontWeight: 800,
        letterSpacing: "-0.02em",
        boxShadow: "0 0 36px rgba(168, 85, 247, 0.18)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
    },

    titleSubtitleMobile: {
        maxWidth: "92%",
        marginTop: "16px",
        padding: "9px 14px",
        fontSize: "14px",
        lineHeight: "20px",
    },

    description: {
        maxWidth: "720px",
        marginTop: "28px",
        marginBottom: 0,
        color: "rgba(255, 255, 255, 0.68)",
        fontSize: "18px",
        lineHeight: "32px",
        textAlign: "center",
    },

    descriptionMobile: {
        maxWidth: "92%",
        marginTop: "20px",
        fontSize: "15px",
        lineHeight: "26px",
    },

    actions: {
        display: "flex",
        justifyContent: "center",
        gap: "16px",
        marginTop: "36px",
        flexWrap: "wrap",
    },

    actionsMobile: {
        width: "100%",
        marginTop: "28px",
        gap: "12px",
    },

    primaryButton: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px 28px",
        borderRadius: "999px",
        background: "#c4b5fd",
        color: "#000",
        textDecoration: "none",
        fontWeight: 800,
        boxShadow: "0 18px 40px rgba(139, 92, 246, 0.35)",
    },

    secondaryButton: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px 28px",
        borderRadius: "999px",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        background: "rgba(255, 255, 255, 0.05)",
        color: "#ffffff",
        textDecoration: "none",
        fontWeight: 800,
    },

    buttonIcon: {
        marginLeft: "8px",
    },

    statsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "16px",
        width: "100%",
        maxWidth: "576px",
        marginTop: "40px",
        textAlign: "center",
    },

    statsGridMobile: {
        gridTemplateColumns: "1fr",
        maxWidth: "320px",
        marginTop: "28px",
    },

    statCard: {
        padding: "16px",
        borderRadius: "16px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        background: "rgba(255, 255, 255, 0.04)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
    },

    statNumber: {
        margin: 0,
        color: "#ddd6fe",
        fontSize: "24px",
        fontWeight: 950,
    },

    statLabel: {
        margin: "6px 0 0",
        color: "rgba(255, 255, 255, 0.45)",
        fontSize: "12px",
        textTransform: "uppercase",
        letterSpacing: "0.25em",
    },

    iconRowFloating: {
        position: "absolute",
        zIndex: 12,
        bottom: "18px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        justifyContent: "center",
        gap: "12px",
    },

    iconRowFloatingMobile: {
        bottom: "8px",
        gap: "8px",
    },

    smallIconCircle: {
        width: "40px",
        height: "40px",
        borderRadius: "999px",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        background: "rgba(3, 1, 6, 0.62)",
        color: "#ddd6fe",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: "0 12px 30px rgba(76, 29, 149, 0.35)",
    },

    floatingBadge: {
        position: "absolute",
        zIndex: 12,
        padding: "12px 16px",
        borderRadius: "16px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        background: "rgba(3, 1, 6, 0.62)",
        color: "#ffffff",
        fontSize: "14px",
        fontWeight: 800,
        boxShadow: "0 25px 60px rgba(76, 29, 149, 0.4)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
    },

    badgeReact: {
        left: "16px",
        top: "62px",
    },

    badgeReactMobile: {
        left: "0px",
        top: "52px",
        padding: "9px 12px",
        fontSize: "12px",
    },

    badgeCyber: {
        right: "10px",
        bottom: "92px",
    },

    badgeCyberMobile: {
        right: "0px",
        bottom: "78px",
        padding: "9px 12px",
        fontSize: "12px",
    },

    badgeData: {
        left: "12px",
        bottom: "82px",
    },

    badgeDataMobile: {
        left: "4px",
        bottom: "72px",
        padding: "9px 12px",
        fontSize: "12px",
    },

    badgeSI: {
        left: "282px",
        bottom: "330px",
    },

    badgeSIMobile: {
        left: "220px",
        bottom: "235px",
        padding: "9px 12px",
        fontSize: "12px",
    },
};