import { Mail, MapPin, Send, GitFork, BriefcaseBusiness } from "lucide-react";

export default function ContactPage() {
    return (
        <section style={styles.section}>
            <div style={styles.heading}>
                <p style={styles.kicker}>Contact</p>

                <h1 style={styles.title}>Discutons de votre projet.</h1>

                <p style={styles.subtitle}>
                    Besoin d'un site web, d'un dashboard data, d'une analyse SI ou d'une
                    approche cybersécurité ? Envoyez-moi un message.
                </p>
            </div>

            <div style={styles.grid}>
                <aside style={styles.card}>
                    <h2 style={styles.cardTitle}>Informations</h2>

                    <p style={styles.cardText}>
                        Disponible pour échanger autour d'un projet web, data, système
                        d'information ou cybersécurité.
                    </p>

                    <div style={styles.infoList}>
                        <a href="mailto:votre.email@example.com" style={styles.infoItem}>
                            <Mail style={styles.infoIcon} />
                            <div>
                                <p style={styles.infoTitle}>Email</p>
                                <p style={styles.infoText}>votre.email@example.com</p>
                            </div>
                        </a>

                        <a href="#" style={styles.infoItem}>
                            <BriefcaseBusiness style={styles.infoIcon} />
                            <div>
                                <p style={styles.infoTitle}>LinkedIn</p>
                                <p style={styles.infoText}>Votre profil LinkedIn</p>
                            </div>
                        </a>

                        <a href="#" style={styles.infoItem}>
                            <GitFork style={styles.infoIcon} />
                            <div>
                                <p style={styles.infoTitle}>GitHub</p>
                                <p style={styles.infoText}>Vos projets publics</p>
                            </div>
                        </a>

                        <div style={styles.infoItem}>
                            <MapPin style={styles.infoIcon} />
                            <div>
                                <p style={styles.infoTitle}>Localisation</p>
                                <p style={styles.infoText}>France / Remote</p>
                            </div>
                        </div>
                    </div>
                </aside>

                <form style={styles.form}>
                    <div style={styles.inputGrid}>
                        <div>
                            <label style={styles.label}>Nom</label>
                            <input
                                type="text"
                                placeholder="Votre nom"
                                style={styles.input}
                            />
                        </div>

                        <div>
                            <label style={styles.label}>Email</label>
                            <input
                                type="email"
                                placeholder="votre@email.com"
                                style={styles.input}
                            />
                        </div>
                    </div>

                    <div style={styles.field}>
                        <label style={styles.label}>Sujet</label>
                        <input
                            type="text"
                            placeholder="Projet web, data, SI, cybersécurité..."
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.field}>
                        <label style={styles.label}>Message</label>
                        <textarea
                            rows="7"
                            placeholder="Décrivez votre besoin..."
                            style={styles.textarea}
                        />
                    </div>

                    <button type="submit" style={styles.submitButton}>
                        Envoyer le message
                        <Send style={styles.buttonIcon} size={18} />
                    </button>
                </form>
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
        maxWidth: "672px",
        margin: "24px auto 0",
        color: "rgba(255, 255, 255, 0.6)",
        lineHeight: "28px",
    },

    grid: {
        display: "grid",
        gridTemplateColumns: "0.85fr 1.15fr",
        gap: "32px",
    },

    card: {
        padding: "28px",
        borderRadius: "32px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        background: "rgba(255, 255, 255, 0.04)",
        boxShadow: "0 25px 70px rgba(76, 29, 149, 0.25)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
    },

    cardTitle: {
        margin: 0,
        color: "#ffffff",
        fontSize: "30px",
        fontWeight: 950,
        letterSpacing: "-0.03em",
    },

    cardText: {
        marginTop: "16px",
        marginBottom: 0,
        color: "rgba(255, 255, 255, 0.6)",
        lineHeight: "28px",
    },

    infoList: {
        marginTop: "32px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
    },

    infoItem: {
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "16px",
        borderRadius: "16px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        background: "rgba(0, 0, 0, 0.2)",
        color: "#ffffff",
        textDecoration: "none",
    },

    infoIcon: {
        color: "#ddd6fe",
        flexShrink: 0,
    },

    infoTitle: {
        margin: 0,
        color: "#ffffff",
        fontWeight: 800,
    },

    infoText: {
        margin: "4px 0 0",
        color: "rgba(255, 255, 255, 0.55)",
        fontSize: "14px",
    },

    form: {
        padding: "28px",
        borderRadius: "32px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        background: "rgba(255, 255, 255, 0.04)",
        boxShadow: "0 25px 70px rgba(76, 29, 149, 0.25)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
    },

    inputGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "20px",
    },

    field: {
        marginTop: "20px",
    },

    label: {
        display: "block",
        color: "rgba(255, 255, 255, 0.7)",
        fontSize: "14px",
        fontWeight: 800,
        marginBottom: "8px",
    },

    input: {
        width: "100%",
        padding: "13px 16px",
        borderRadius: "16px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        background: "rgba(0, 0, 0, 0.3)",
        color: "#ffffff",
        outline: "none",
        fontSize: "16px",
        boxSizing: "border-box",
    },

    textarea: {
        width: "100%",
        minHeight: "170px",
        padding: "13px 16px",
        borderRadius: "16px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        background: "rgba(0, 0, 0, 0.3)",
        color: "#ffffff",
        outline: "none",
        fontSize: "16px",
        resize: "vertical",
        boxSizing: "border-box",
        fontFamily: "inherit",
    },

    submitButton: {
        marginTop: "24px",
        display: "inline-flex",
        alignItems: "center",
        border: "none",
        cursor: "pointer",
        borderRadius: "999px",
        background: "#c4b5fd",
        padding: "16px 32px",
        color: "#000000",
        fontWeight: 950,
        boxShadow: "0 18px 40px rgba(139, 92, 246, 0.35)",
    },

    buttonIcon: {
        marginLeft: "8px",
    },
};