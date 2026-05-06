import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section style={styles.section}>
            <div style={styles.content}>
                <p style={styles.kicker}>Erreur 404</p>

                <h1 style={styles.title}>Page introuvable.</h1>

                <p style={styles.description}>
                    La page que vous cherchez n'existe pas ou a été déplacée.
                </p>

                <Link to="/" style={styles.button}>
                    Retour à l'accueil
                </Link>
            </div>
        </section>
    );
}

const styles = {
    section: {
        position: "relative",
        zIndex: 10,
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 16px",
        textAlign: "center",
    },

    content: {
        maxWidth: "760px",
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
        fontSize: "clamp(56px, 8vw, 96px)",
        lineHeight: 0.95,
        fontWeight: 950,
        letterSpacing: "-0.06em",
    },

    description: {
        maxWidth: "576px",
        margin: "24px auto 0",
        color: "rgba(255, 255, 255, 0.6)",
        lineHeight: "28px",
    },

    button: {
        marginTop: "32px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px 32px",
        borderRadius: "999px",
        background: "#c4b5fd",
        color: "#000000",
        textDecoration: "none",
        fontWeight: 950,
        boxShadow: "0 18px 40px rgba(139, 92, 246, 0.35)",
        transition: "background 0.25s ease, transform 0.25s ease",
    },
};