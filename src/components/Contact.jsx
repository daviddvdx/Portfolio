import {
    ArrowUpRight,
    BriefcaseBusiness,
    Code2,
    Mail,
    MapPin,
} from "lucide-react";
import useIsMobile from "../hooks/useIsMobile.js";

export default function Contact() {
    const isMobile = useIsMobile();

    return (
        <section
            id="contact"
            style={{
                ...styles.section,
                ...(isMobile ? styles.sectionMobile : {}),
            }}
        >
            <div
                style={{
                    ...styles.container,
                    ...(isMobile ? styles.containerMobile : {}),
                }}
            >
                <div
                    style={{
                        ...styles.grid,
                        ...(isMobile ? styles.gridMobile : {}),
                    }}
                >
                    <div>
                        <p style={styles.kicker}>Contact</p>

                        <h2
                            style={{
                                ...styles.title,
                                ...(isMobile ? styles.titleMobile : {}),
                            }}
                        >
                            Donnons vie à votre projet digital.
                        </h2>

                        <p
                            style={{
                                ...styles.description,
                                ...(isMobile ? styles.descriptionMobile : {}),
                            }}
                        >
                            Disponible pour échanger autour d'un projet web, data, système
                            d'information ou cybersécurité. L'objectif : construire une
                            solution claire, utile et durable.
                        </p>

                        <div
                            style={{
                                ...styles.actions,
                                ...(isMobile ? styles.actionsMobile : {}),
                            }}
                        >
                            <a
                                href="mailto:Daviddongandoumou@gmail.com"
                                style={{
                                    ...styles.primaryButton,
                                    ...(isMobile ? styles.buttonMobile : {}),
                                }}
                            >
                                Me contacter
                                <ArrowUpRight style={styles.buttonIcon} size={18} />
                            </a>

                            <a
                                href="/src/CV_DONGA.pdf"
                                download
                                style={{
                                    ...styles.secondaryButton,
                                    ...(isMobile ? styles.buttonMobile : {}),
                                }}
                            >
                                Télécharger mon CV
                            </a>
                        </div>
                    </div>

                    <div
                        style={{
                            ...styles.infoList,
                            ...(isMobile ? styles.infoListMobile : {}),
                        }}
                    >
                        <a
                            href="mailto:Daviddongandoumou@gmail.com"
                            style={{
                                ...styles.infoItem,
                                ...(isMobile ? styles.infoItemMobile : {}),
                            }}
                        >
              <span
                  style={{
                      ...styles.iconBox,
                      ...(isMobile ? styles.iconBoxMobile : {}),
                  }}
              >
                <Mail size={isMobile ? 20 : 22} />
              </span>

                            <div style={styles.infoContent}>
                                <p style={styles.infoTitle}>Email</p>
                                <p
                                    style={{
                                        ...styles.infoText,
                                        ...(isMobile ? styles.infoTextMobile : {}),
                                    }}
                                >
                                    daviddongandoumou@gmail.com
                                </p>
                            </div>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/daviddonga12"
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                ...styles.infoItem,
                                ...(isMobile ? styles.infoItemMobile : {}),
                            }}
                        >
              <span
                  style={{
                      ...styles.iconBox,
                      ...(isMobile ? styles.iconBoxMobile : {}),
                  }}
              >
                <BriefcaseBusiness size={isMobile ? 20 : 22} />
              </span>

                            <div style={styles.infoContent}>
                                <p style={styles.infoTitle}>LinkedIn</p>
                                <p
                                    style={{
                                        ...styles.infoText,
                                        ...(isMobile ? styles.infoTextMobile : {}),
                                    }}
                                >
                                    Mon profil professionnel
                                </p>
                            </div>
                        </a>

                        <a
                            href="https://github.com/daviddvdx"
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                ...styles.infoItem,
                                ...(isMobile ? styles.infoItemMobile : {}),
                            }}
                        >
              <span
                  style={{
                      ...styles.iconBox,
                      ...(isMobile ? styles.iconBoxMobile : {}),
                  }}
              >
                <Code2 size={isMobile ? 20 : 22} />
              </span>

                            <div style={styles.infoContent}>
                                <p style={styles.infoTitle}>GitHub</p>
                                <p
                                    style={{
                                        ...styles.infoText,
                                        ...(isMobile ? styles.infoTextMobile : {}),
                                    }}
                                >
                                    Mes projets et dépôts
                                </p>
                            </div>
                        </a>

                        <div
                            style={{
                                ...styles.infoItem,
                                ...(isMobile ? styles.infoItemMobile : {}),
                            }}
                        >
              <span
                  style={{
                      ...styles.iconBox,
                      ...(isMobile ? styles.iconBoxMobile : {}),
                  }}
              >
                <MapPin size={isMobile ? 20 : 22} />
              </span>

                            <div style={styles.infoContent}>
                                <p style={styles.infoTitle}>Localisation</p>
                                <p
                                    style={{
                                        ...styles.infoText,
                                        ...(isMobile ? styles.infoTextMobile : {}),
                                    }}
                                >
                                    Maroc / Remote
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
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

    container: {
        padding: "56px",
        borderRadius: "40px",
        border: "1px solid rgba(221, 214, 254, 0.15)",
        background:
            "linear-gradient(135deg, rgba(196,181,253,0.15), rgba(217,70,239,0.10), rgba(255,255,255,0.03))",
        boxShadow: "0 25px 70px rgba(76, 29, 149, 0.4)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
    },

    containerMobile: {
        padding: "28px 20px",
        borderRadius: "28px",
    },

    grid: {
        display: "grid",
        gridTemplateColumns: "1fr 0.9fr",
        gap: "40px",
        alignItems: "center",
    },

    gridMobile: {
        gridTemplateColumns: "1fr",
        gap: "30px",
    },

    kicker: {
        margin: 0,
        color: "#ddd6fe",
        fontSize: "14px",
        fontWeight: 800,
        textTransform: "uppercase",
        letterSpacing: "0.35em",
    },

    title: {
        maxWidth: "768px",
        margin: "16px 0 0",
        color: "#ffffff",
        fontSize: "clamp(40px, 5vw, 60px)",
        lineHeight: 1,
        fontWeight: 950,
        letterSpacing: "-0.04em",
    },

    titleMobile: {
        fontSize: "clamp(34px, 11vw, 48px)",
        lineHeight: 1,
    },

    description: {
        maxWidth: "672px",
        margin: "24px 0 0",
        color: "rgba(255, 255, 255, 0.65)",
        fontSize: "18px",
        lineHeight: "32px",
    },

    descriptionMobile: {
        marginTop: "18px",
        fontSize: "15px",
        lineHeight: "26px",
    },

    actions: {
        marginTop: "36px",
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
    },

    actionsMobile: {
        marginTop: "28px",
        flexDirection: "column",
        gap: "12px",
    },

    primaryButton: {
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
    },

    secondaryButton: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px 32px",
        borderRadius: "999px",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        background: "rgba(255, 255, 255, 0.05)",
        color: "#ffffff",
        textDecoration: "none",
        fontWeight: 950,
    },

    buttonMobile: {
        width: "100%",
        padding: "14px 20px",
        boxSizing: "border-box",
    },

    buttonIcon: {
        marginLeft: "8px",
    },

    infoList: {
        display: "flex",
        flexDirection: "column",
        gap: "16px",
    },

    infoListMobile: {
        gap: "12px",
    },

    infoItem: {
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "20px",
        borderRadius: "24px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        background: "rgba(0, 0, 0, 0.25)",
        color: "#ffffff",
        textDecoration: "none",
    },

    infoItemMobile: {
        padding: "16px",
        borderRadius: "20px",
        gap: "12px",
    },

    iconBox: {
        width: "48px",
        height: "48px",
        borderRadius: "16px",
        background: "rgba(196, 181, 253, 0.15)",
        color: "#ddd6fe",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
    },

    iconBoxMobile: {
        width: "42px",
        height: "42px",
        borderRadius: "14px",
    },

    infoContent: {
        minWidth: 0,
    },

    infoTitle: {
        margin: 0,
        color: "#ffffff",
        fontWeight: 950,
    },

    infoText: {
        margin: "4px 0 0",
        color: "rgba(255, 255, 255, 0.55)",
        fontSize: "14px",
    },

    infoTextMobile: {
        fontSize: "13px",
        lineHeight: "20px",
        overflowWrap: "anywhere",
    },
};