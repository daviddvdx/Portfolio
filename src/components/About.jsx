import { motion } from "framer-motion";
import {
    Braces,
    Code2,
    Database,
    GitBranch,
    Server,
    ShieldCheck,
    Terminal,
} from "lucide-react";
import useIsMobile from "../hooks/useIsMobile.js";

export default function About() {
    const isMobile = useIsMobile();

    return (
        <section
            style={{
                ...styles.section,
                ...(isMobile ? styles.sectionMobile : {}),
            }}
        >
            <motion.div
                style={{
                    ...styles.left,
                    ...(isMobile ? styles.leftMobile : {}),
                }}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7 }}
            >
                <div
                    style={{
                        ...styles.badge,
                        ...(isMobile ? styles.badgeMobile : {}),
                    }}
                >
                    <Terminal size={16} />
                    about.config
                </div>

                <h2
                    style={{
                        ...styles.title,
                        ...(isMobile ? styles.titleMobile : {}),
                    }}
                >
                    Un profil hybride entre{" "}
                    <span style={styles.highlight}>systèmes</span>,{" "}
                    <span style={styles.highlight}>web</span> et{" "}
                    <span style={styles.highlight}>data</span>.
                </h2>

                <p
                    style={{
                        ...styles.description,
                        ...(isMobile ? styles.descriptionMobile : {}),
                    }}
                >
                    Je suis David DONGA NDOUMOU, ingénieur en Systèmes d’Information.
                    Je transforme les besoins métiers en solutions digitales claires, fiables
                    et sécurisées, en combinant développement web, data, architecture SI et
                    cybersécurité.
                </p>

                <p
                    style={{
                        ...styles.description,
                        ...(isMobile ? styles.descriptionMobile : {}),
                    }}
                >
                    J’aime travailler à l’intersection des systèmes d’information, de la data et
                    de la cybersécurité. Mon approche consiste à rendre les environnements
                    numériques plus structurés, plus sûrs et plus utiles pour les utilisateurs
                    comme pour les organisations.
                </p>

                <div
                    style={{
                        ...styles.tags,
                        ...(isMobile ? styles.tagsMobile : {}),
                    }}
                >
                    <span style={styles.tag}>React</span>
                    <span style={styles.tag}>Systèmes d’Information</span>
                    <span style={styles.tag}>Data</span>
                    <span style={styles.tag}>Cybersecurity</span>
                    <span style={styles.tag}>Architecture</span>
                </div>
            </motion.div>

            <motion.div
                style={{
                    ...styles.right,
                    ...(isMobile ? styles.rightMobile : {}),
                }}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: 0.1 }}
            >
                <div
                    style={{
                        ...styles.terminalCard,
                        ...(isMobile ? styles.terminalCardMobile : {}),
                    }}
                >
                    <div
                        style={{
                            ...styles.terminalTop,
                            ...(isMobile ? styles.terminalTopMobile : {}),
                        }}
                    >
                        <span style={{ ...styles.dot, background: "#ef4444" }} />
                        <span style={{ ...styles.dot, background: "#f59e0b" }} />
                        <span style={{ ...styles.dot, background: "#22c55e" }} />

                        <span
                            style={{
                                ...styles.fileName,
                                ...(isMobile ? styles.fileNameMobile : {}),
                            }}
                        >
              david.profile.js
            </span>
                    </div>

                    <div
                        style={{
                            ...styles.codeBlock,
                            ...(isMobile ? styles.codeBlockMobile : {}),
                        }}
                    >
                        <p style={{ ...styles.codeLine, ...(isMobile ? styles.codeLineMobile : {}) }}>
                            <span style={styles.lineNumber}>01</span>
                            <span style={styles.keyword}>const</span>{" "}
                            <span style={styles.variable}>profile</span>{" "}
                            <span style={styles.operator}>=</span>{" "}
                            <span style={styles.bracket}>{"{"}</span>
                        </p>

                        <p style={{ ...styles.codeLine, ...(isMobile ? styles.codeLineMobile : {}) }}>
                            <span style={styles.lineNumber}>02</span>
                            <span style={styles.property}>name</span>
                            <span style={styles.operator}>:</span>{" "}
                            <span style={styles.string}>"DONGA NDOUMOU David"</span>
                            <span style={styles.operator}>,</span>
                        </p>

                        <p style={{ ...styles.codeLine, ...(isMobile ? styles.codeLineMobile : {}) }}>
                            <span style={styles.lineNumber}>03</span>
                            <span style={styles.property}>role</span>
                            <span style={styles.operator}>:</span>{" "}
                            <span style={styles.string}>
                "Ingénieur en Systèmes d’Information"
              </span>
                            <span style={styles.operator}>,</span>
                        </p>

                        <p style={{ ...styles.codeLine, ...(isMobile ? styles.codeLineMobile : {}) }}>
                            <span style={styles.lineNumber}>04</span>
                            <span style={styles.property}>focus</span>
                            <span style={styles.operator}>:</span>{" "}
                            <span style={styles.bracket}>[</span>
                            <span style={styles.string}>"Web"</span>
                            <span style={styles.operator}>, </span>
                            <span style={styles.string}>"Data"</span>
                            <span style={styles.operator}>, </span>
                            <span style={styles.string}>"Système d'information"</span>
                            <span style={styles.operator}>, </span>
                            <span style={styles.string}>"Cybersecurity"</span>
                            <span style={styles.bracket}>]</span>
                            <span style={styles.operator}>,</span>
                        </p>

                        <p style={{ ...styles.codeLine, ...(isMobile ? styles.codeLineMobile : {}) }}>
                            <span style={styles.lineNumber}>05</span>
                            <span style={styles.property}>mission</span>
                            <span style={styles.operator}>:</span>{" "}
                            <span style={styles.string}>
                "Aligner technologie, données et sécurité avec les besoins métier"
              </span>
                            <span style={styles.operator}>,</span>
                        </p>

                        <p style={{ ...styles.codeLine, ...(isMobile ? styles.codeLineMobile : {}) }}>
                            <span style={styles.lineNumber}>06</span>
                            <span style={styles.property}>mindset</span>
                            <span style={styles.operator}>:</span>{" "}
                            <span style={styles.string}>"Structured systems. Secure decisions."</span>
                        </p>

                        <p style={{ ...styles.codeLine, ...(isMobile ? styles.codeLineMobile : {}) }}>
                            <span style={styles.lineNumber}>07</span>
                            <span style={styles.bracket}>{"}"}</span>
                            <span style={styles.operator}>;</span>
                        </p>
                    </div>
                </div>

                <div
                    style={{
                        ...styles.cardsGrid,
                        ...(isMobile ? styles.cardsGridMobile : {}),
                    }}
                >
                    <div style={styles.miniCard}>
                        <Server size={20} />
                        <span>Systèmes</span>
                    </div>

                    <div style={styles.miniCard}>
                        <Code2 size={20} />
                        <span>Développement</span>
                    </div>

                    <div style={styles.miniCard}>
                        <Database size={20} />
                        <span>Data</span>
                    </div>

                    <div style={styles.miniCard}>
                        <ShieldCheck size={20} />
                        <span>Sécurité</span>
                    </div>

                    <div style={styles.miniCard}>
                        <GitBranch size={20} />
                        <span>Workflow</span>
                    </div>

                    <div style={styles.miniCard}>
                        <Braces size={20} />
                        <span>Architecture</span>
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
        minHeight: "78vh",
        margin: "0 auto",
        padding: "32px 16px",
        display: "grid",
        gridTemplateColumns: "0.95fr 1.05fr",
        alignItems: "center",
        gap: "48px",
        boxSizing: "border-box",
    },

    sectionMobile: {
        minHeight: "auto",
        padding: "56px 14px",
        gridTemplateColumns: "1fr",
        gap: "34px",
    },

    left: {
        minWidth: 0,
    },

    leftMobile: {
        textAlign: "left",
    },

    right: {
        minWidth: 0,
    },

    rightMobile: {
        width: "100%",
    },

    badge: {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        marginBottom: "24px",
        padding: "8px 16px",
        borderRadius: "999px",
        border: "1px solid rgba(196, 181, 253, 0.2)",
        background: "rgba(196, 181, 253, 0.08)",
        color: "#ede9fe",
        fontSize: "14px",
        fontFamily:
            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
    },

    badgeMobile: {
        marginBottom: "18px",
        fontSize: "12px",
        padding: "7px 12px",
    },

    title: {
        margin: 0,
        color: "#ffffff",
        fontSize: "clamp(34px, 5vw, 66px)",
        lineHeight: 1,
        fontWeight: 950,
        letterSpacing: "-0.055em",
    },

    titleMobile: {
        fontSize: "clamp(34px, 12vw, 50px)",
        lineHeight: 1,
        letterSpacing: "-0.05em",
    },

    highlight: {
        color: "#c084fc",
        textShadow: "0 0 26px rgba(168, 85, 247, 0.35)",
    },

    description: {
        maxWidth: "660px",
        marginTop: "24px",
        marginBottom: 0,
        color: "rgba(255, 255, 255, 0.68)",
        fontSize: "17px",
        lineHeight: "30px",
    },

    descriptionMobile: {
        maxWidth: "100%",
        marginTop: "18px",
        fontSize: "15px",
        lineHeight: "26px",
    },

    tags: {
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        marginTop: "32px",
    },

    tagsMobile: {
        marginTop: "24px",
        gap: "8px",
    },

    tag: {
        padding: "9px 13px",
        borderRadius: "999px",
        border: "1px solid rgba(168, 85, 247, 0.25)",
        background: "rgba(168, 85, 247, 0.08)",
        color: "#e9d5ff",
        fontSize: "13px",
        fontWeight: 700,
        fontFamily:
            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
    },

    terminalCard: {
        position: "relative",
        borderRadius: "24px",
        border: "1px solid rgba(168, 85, 247, 0.22)",
        background:
            "linear-gradient(145deg, rgba(12, 5, 20, 0.92), rgba(3, 1, 6, 0.92))",
        boxShadow:
            "0 30px 80px rgba(0, 0, 0, 0.45), inset 0 0 50px rgba(168, 85, 247, 0.06)",
        overflow: "hidden",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
    },

    terminalCardMobile: {
        borderRadius: "22px",
    },

    terminalTop: {
        height: "48px",
        padding: "0 18px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        background: "rgba(255, 255, 255, 0.035)",
    },

    terminalTopMobile: {
        height: "44px",
        padding: "0 14px",
    },

    dot: {
        width: "10px",
        height: "10px",
        borderRadius: "999px",
    },

    fileName: {
        marginLeft: "10px",
        color: "rgba(255, 255, 255, 0.5)",
        fontSize: "13px",
        fontFamily:
            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
    },

    fileNameMobile: {
        fontSize: "12px",
        marginLeft: "6px",
    },

    codeBlock: {
        padding: "25px 25px 26px",
        overflowX: "auto",

    },

    codeBlockMobile: {
        padding: "18px 14px 20px",
    },

    codeLine: {
        margin: "0 0 12px",
        color: "rgba(255, 255, 255, 0.72)",
        fontSize: "14px",
        lineHeight: "24px",
        fontFamily:
            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        whiteSpace: "nowrap",
    },

    codeLineMobile: {
        fontSize: "12px",
        lineHeight: "22px",
        marginBottom: "10px",
    },

    lineNumber: {
        display: "inline-block",
        width: "28px",
        marginRight: "14px",
        color: "rgba(168, 85, 247, 0.48)",
        userSelect: "none",
    },

    keyword: {
        color: "#c084fc",
    },

    variable: {
        color: "#ffffff",
    },

    operator: {
        color: "#a78bfa",
    },

    bracket: {
        color: "#e9d5ff",
    },

    property: {
        color: "#93c5fd",
    },

    string: {
        color: "#c4b5fd",
    },

    cardsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "12px",
        marginTop: "16px",
    },

    cardsGridMobile: {
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "10px",
    },

    miniCard: {
        minHeight: "74px",
        padding: "14px",
        borderRadius: "18px",
        border: "1px solid rgba(255, 255, 255, 0.09)",
        background: "rgba(255, 255, 255, 0.045)",
        color: "#ddd6fe",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "8px",
        fontSize: "13px",
        fontWeight: 800,
        boxSizing: "border-box",
    },
};