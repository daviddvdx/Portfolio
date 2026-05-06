export default function SectionWrapper({
                                           id,
                                           label,
                                           index,
                                           children,
                                           background = "transparent",
                                       }) {
    const sectionName = label || id || "section";
    const lineNumber = String(index).padStart(2, "0");

    return (
        <section id={id} style={{ ...styles.section, background }}>
            <div style={styles.inner}>
                <div style={styles.codeHeader}>
                    <span style={styles.lineNumber}>{lineNumber}</span>
                    <span style={styles.keyword}>const</span>
                    <span style={styles.sectionName}>{sectionName}</span>
                    <span style={styles.operator}>=</span>
                    <span style={styles.bracket}>{"{"}</span>
                </div>

                <div style={styles.content}>{children}</div>

                <div style={styles.codeFooter}>
                    <span style={styles.lineNumber}>{lineNumber}</span>
                    <span style={styles.bracket}>{"}"}</span>
                    <span style={styles.comment}>// end {sectionName}</span>
                </div>
            </div>
        </section>
    );
}

const styles = {
    section: {
        position: "relative",
        minHeight: "100vh",
        padding: "112px 16px 80px",
        scrollMarginTop: "96px",
        borderTop: "1px solid rgba(168, 85, 247, 0.14)",
        boxSizing: "border-box",
    },

    inner: {
        width: "100%",
        maxWidth: "1152px",
        margin: "0 auto",
    },

    codeHeader: {
        marginBottom: "28px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        fontFamily:
            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        fontSize: "13px",
        color: "rgba(255, 255, 255, 0.5)",
        whiteSpace: "nowrap",
        overflowX: "auto",
    },

    codeFooter: {
        marginTop: "28px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        fontFamily:
            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        fontSize: "13px",
        color: "rgba(255, 255, 255, 0.35)",
        whiteSpace: "nowrap",
        overflowX: "auto",
    },

    lineNumber: {
        minWidth: "24px",
        color: "rgba(168, 85, 247, 0.75)",
        userSelect: "none",
    },

    keyword: {
        color: "#c084fc",
    },

    sectionName: {
        color: "#ffffff",
    },

    operator: {
        color: "#a78bfa",
    },

    bracket: {
        color: "#e9d5ff",
    },

    comment: {
        color: "rgba(255, 255, 255, 0.35)",
    },

    content: {
        position: "relative",
        zIndex: 2,
    },
};