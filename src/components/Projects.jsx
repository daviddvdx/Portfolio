import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile.js";

const projects = [
    {
        title: "Dashboard Data & KPI",
        category: "Data / BI",
        description:
            "Tableau de bord interactif pour suivre des indicateurs métier, analyser les performances et faciliter la prise de décision.",
    },
    {
        title: "Application Web React",
        category: "Web Development",
        description:
            "Interface responsive avec composants réutilisables, navigation fluide et expérience utilisateur moderne.",
    },
    {
        title: "Audit & Sécurisation SI",
        category: "Cybersec / SI",
        description:
            "Analyse de risques, recommandations de sécurité et documentation des bonnes pratiques opérationnelles.",
    },
];

export default function Projects() {
    const isMobile = useIsMobile();

    return (
        <section
            id="project"
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
                    <p style={styles.kicker}>Projets</p>

                    <h2
                        style={{
                            ...styles.title,
                            ...(isMobile ? styles.titleMobile : {}),
                        }}
                    >
                        Des cas concrets à valoriser.
                    </h2>
                </div>

                <p
                    style={{
                        ...styles.description,
                        ...(isMobile ? styles.descriptionMobile : {}),
                    }}
                >
                    Une sélection de projets autour du développement web, de la data, du
                    système d'information et de la cybersécurité.
                </p>
            </div>

            <div
                style={{
                    ...styles.grid,
                    ...(isMobile ? styles.gridMobile : {}),
                }}
            >
                {projects.map((project, index) => (
                    <motion.article
                        key={project.title}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                        style={{
                            ...styles.card,
                            ...(isMobile ? styles.cardMobile : {}),
                        }}
                    >
                        <div
                            style={{
                                ...styles.cardVisual,
                                ...(isMobile ? styles.cardVisualMobile : {}),
                            }}
                        >
                            <div style={styles.visualCode}>
                                <span style={styles.codeKeyword}>project</span>
                                <span style={styles.codeOperator}>.</span>
                                <span style={styles.codeMethod}>preview</span>
                                <span style={styles.codeBrackets}>()</span>
                            </div>
                        </div>

                        <div
                            style={{
                                ...styles.cardBody,
                                ...(isMobile ? styles.cardBodyMobile : {}),
                            }}
                        >
                            <p style={styles.category}>{project.category}</p>

                            <h3
                                style={{
                                    ...styles.cardTitle,
                                    ...(isMobile ? styles.cardTitleMobile : {}),
                                }}
                            >
                                {project.title}
                            </h3>

                            <p
                                style={{
                                    ...styles.cardText,
                                    ...(isMobile ? styles.cardTextMobile : {}),
                                }}
                            >
                                {project.description}
                            </p>

                            <Link
                                to="/projets"
                                style={{
                                    ...styles.detailLink,
                                    ...(isMobile ? styles.detailLinkMobile : {}),
                                }}
                            >
                                Voir le détail
                                <ArrowUpRight size={16} style={styles.linkIcon} />
                            </Link>
                        </div>
                    </motion.article>
                ))}
            </div>

            <div
                style={{
                    ...styles.buttonWrapper,
                    ...(isMobile ? styles.buttonWrapperMobile : {}),
                }}
            >
                <Link
                    to="/projets"
                    style={{
                        ...styles.secondaryButton,
                        ...(isMobile ? styles.secondaryButtonMobile : {}),
                    }}
                >
                    Voir tous les projets
                </Link>
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
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: "24px",
    },

    gridMobile: {
        gridTemplateColumns: "1fr",
        gap: "18px",
    },

    card: {
        overflow: "hidden",
        borderRadius: "32px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        background: "rgba(255, 255, 255, 0.04)",
        boxShadow: "0 25px 70px rgba(76, 29, 149, 0.2)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
    },

    cardMobile: {
        borderRadius: "26px",
    },

    cardVisual: {
        position: "relative",
        height: "176px",
        background:
            "radial-gradient(circle at 30% 20%, rgba(217,70,239,0.85), transparent 28%), radial-gradient(circle at 70% 70%, rgba(124,58,237,0.75), transparent 32%), linear-gradient(135deg, #09010f, #1b0731 45%, #050107)",
    },

    cardVisualMobile: {
        height: "150px",
    },

    visualCode: {
        position: "absolute",
        left: "18px",
        bottom: "18px",
        padding: "9px 12px",
        borderRadius: "14px",
        border: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(3, 1, 6, 0.58)",
        color: "#ffffff",
        fontSize: "13px",
        fontWeight: 800,
        fontFamily:
            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
    },

    codeKeyword: {
        color: "#c084fc",
    },

    codeOperator: {
        color: "#e9d5ff",
    },

    codeMethod: {
        color: "#ffffff",
    },

    codeBrackets: {
        color: "#a78bfa",
    },

    cardBody: {
        padding: "24px",
    },

    cardBodyMobile: {
        padding: "22px",
    },

    category: {
        margin: 0,
        color: "#c4b5fd",
        fontSize: "12px",
        fontWeight: 800,
        textTransform: "uppercase",
        letterSpacing: "0.25em",
    },

    cardTitle: {
        margin: "12px 0 0",
        color: "#ffffff",
        fontSize: "24px",
        lineHeight: 1.15,
        fontWeight: 950,
        letterSpacing: "-0.03em",
    },

    cardTitleMobile: {
        fontSize: "22px",
        lineHeight: 1.15,
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

    detailLink: {
        marginTop: "24px",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        color: "#ddd6fe",
        textDecoration: "none",
        fontSize: "14px",
        fontWeight: 800,
    },

    detailLinkMobile: {
        marginTop: "20px",
    },

    linkIcon: {
        marginLeft: "2px",
    },

    buttonWrapper: {
        marginTop: "40px",
        display: "flex",
        justifyContent: "center",
    },

    buttonWrapperMobile: {
        marginTop: "30px",
    },

    secondaryButton: {
        padding: "12px 28px",
        borderRadius: "999px",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        background: "linear-gradient(135deg, #7c3aed, #a855f7, #c084fc)",
        color: "#ffffff",
        textDecoration: "none",
        fontWeight: 800,
    },

    secondaryButtonMobile: {
        width: "100%",
        textAlign: "center",
        padding: "14px 20px",
        boxSizing: "border-box",
    },
};