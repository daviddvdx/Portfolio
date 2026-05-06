import { ArrowLeft, MessageCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile.js";

const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "service", label: "Service" },
    { id: "project", label: "Project" },
    { id: "contact", label: "Contact" },
];

export default function SubPageNavbar() {
    const isMobile = useIsMobile();
    const navigate = useNavigate();

    const goToSection = (event, id) => {
        event.preventDefault();
        navigate(`/#${id}`);
    };

    return (
        <>
            <style>
                {`
          @keyframes discussPulse {
            0%, 100% {
              box-shadow:
                0 0 18px rgba(168, 85, 247, 0.35),
                0 12px 30px rgba(124, 58, 237, 0.25);
              filter: brightness(1);
            }

            50% {
              box-shadow:
                0 0 34px rgba(168, 85, 247, 0.85),
                0 0 58px rgba(192, 132, 252, 0.45),
                0 12px 34px rgba(124, 58, 237, 0.42);
              filter: brightness(1.12);
            }
          }
        `}
            </style>

            <header
                style={{
                    ...styles.header,
                    ...(isMobile ? styles.headerMobile : {}),
                }}
            >
                <nav
                    style={{
                        ...styles.nav,
                        ...(isMobile ? styles.navMobile : {}),
                    }}
                >
                    <Link
                        to="/"
                        style={{
                            ...styles.logo,
                            ...(isMobile ? styles.logoMobile : {}),
                        }}
                    >
                        <span style={styles.logoSymbol}>{"<"}</span>
                        <span>David</span>
                        {!isMobile && <span style={styles.logoDot}>.dev</span>}
                        <span style={styles.logoSymbol}>{"/>"}</span>
                    </Link>

                    <div
                        style={{
                            ...styles.linksWrapper,
                            ...(isMobile ? styles.linksWrapperMobile : {}),
                        }}
                    >
                        <div
                            style={{
                                ...styles.links,
                                ...(isMobile ? styles.linksMobile : {}),
                            }}
                        >
                            {navItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={`/#${item.id}`}
                                    onClick={(event) => goToSection(event, item.id)}
                                    style={{
                                        ...styles.link,
                                        ...(isMobile ? styles.linkMobile : {}),
                                    }}
                                >
                                    <span style={styles.linkPrefix}>#</span>
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <a
                        href="/#contact"
                        onClick={(event) => goToSection(event, "contact")}
                        style={{
                            ...styles.discussButton,
                            ...(isMobile ? styles.discussButtonMobile : {}),
                        }}
                    >
                        {!isMobile && <MessageCircle size={16} />}
                        {isMobile ? "Talk" : "Discuter"}
                    </a>
                </nav>

                <Link
                    to="/"
                    style={{
                        ...styles.backButton,
                        ...(isMobile ? styles.backButtonMobile : {}),
                    }}
                >
                    <ArrowLeft size={16} />
                    {isMobile ? "Portfolio" : "Retour au portfolio"}
                </Link>
            </header>
        </>
    );
}

const styles = {
    header: {
        position: "fixed",
        top: "16px",
        left: 0,
        right: 0,
        zIndex: 9999,
        padding: "0 16px",
        pointerEvents: "none",
    },

    headerMobile: {
        top: "10px",
        padding: "0 10px",
    },

    nav: {
        position: "relative",
        width: "100%",
        maxWidth: "1152px",
        margin: "0 auto",
        height: "64px",
        padding: "0 14px 0 18px",
        borderRadius: "999px",
        border: "1px solid rgba(168, 85, 247, 0.24)",
        background: "rgba(3, 1, 6, 0.78)",
        boxShadow:
            "0 18px 60px rgba(0, 0, 0, 0.45), inset 0 0 28px rgba(168, 85, 247, 0.08)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        pointerEvents: "auto",
        boxSizing: "border-box",
    },

    navMobile: {
        height: "58px",
        padding: "0 8px",
        gridTemplateColumns: "auto minmax(0, 1fr) auto",
        gap: "8px",
        borderRadius: "28px",
    },

    logo: {
        justifySelf: "start",
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        color: "#ffffff",
        textDecoration: "none",
        fontWeight: 900,
        letterSpacing: "-0.04em",
        fontSize: "18px",
        fontFamily:
            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        whiteSpace: "nowrap",
    },

    logoMobile: {
        fontSize: "13px",
        gap: "2px",
    },

    logoSymbol: {
        color: "#a855f7",
    },

    logoDot: {
        color: "#c084fc",
    },

    linksWrapper: {
        justifySelf: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 0,
    },

    linksWrapperMobile: {
        width: "100%",
        justifyContent: "flex-start",
        overflow: "hidden",
    },

    links: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "6px",
        overflowX: "auto",
        scrollbarWidth: "none",
    },

    linksMobile: {
        justifyContent: "flex-start",
        gap: "4px",
        width: "100%",
        padding: "0 2px",
        overflowX: "auto",
    },

    link: {
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        padding: "9px 12px",
        borderRadius: "999px",
        color: "rgba(255, 255, 255, 0.62)",
        textDecoration: "none",
        fontSize: "13px",
        fontWeight: 700,
        fontFamily:
            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        transition:
            "color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease",
        whiteSpace: "nowrap",
    },

    linkMobile: {
        padding: "8px 9px",
        fontSize: "12px",
    },

    linkPrefix: {
        color: "#a855f7",
    },

    discussButton: {
        justifySelf: "end",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        height: "42px",
        padding: "0 20px",
        borderRadius: "999px",
        background: "linear-gradient(135deg, #7c3aed, #a855f7, #c084fc)",
        color: "#ffffff",
        textDecoration: "none",
        fontSize: "13px",
        fontWeight: 900,
        fontFamily:
            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        boxShadow:
            "0 0 28px rgba(168, 85, 247, 0.48), 0 12px 30px rgba(124, 58, 237, 0.32)",
        border: "1px solid rgba(233, 213, 255, 0.35)",
        whiteSpace: "nowrap",
        animation: "discussPulse 2.4s ease-in-out infinite",
    },

    discussButtonMobile: {
        height: "38px",
        padding: "0 12px",
        fontSize: "12px",
        gap: 0,
    },

    backButton: {
        width: "fit-content",
        margin: "12px auto 0",
        padding: "9px 14px",
        borderRadius: "999px",
        border: "1px solid rgba(168, 85, 247, 0.18)",
        background: "rgba(3, 1, 6, 0.62)",
        color: "rgba(255, 255, 255, 0.72)",
        textDecoration: "none",
        fontSize: "12px",
        fontWeight: 800,
        fontFamily:
            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        pointerEvents: "auto",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
    },

    backButtonMobile: {
        marginTop: "8px",
        padding: "8px 12px",
        fontSize: "11px",
    },
};