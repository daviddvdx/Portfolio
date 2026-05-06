import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CustomCursor from "./components/CustomCursor.jsx";
import WelcomeAnimation from "./components/WelcomeAnimation.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
      <>
        {showWelcome && (
            <WelcomeAnimation onFinish={() => setShowWelcome(false)} />
        )}

        <BrowserRouter>
          <main style={styles.app}>
            <CustomCursor />

            <div style={styles.background}>
              <div style={{ ...styles.blob, ...styles.blobLeft }} />
              <div style={{ ...styles.blob, ...styles.blobRight }} />
              <div style={{ ...styles.blob, ...styles.blobBottom }} />
              <div style={styles.gridOverlay} />
              <div style={styles.overlay} />
            </div>

            <div style={styles.content}>
              <Navbar />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projets" element={<ProjectsPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </main>
        </BrowserRouter>
      </>
  );
}

const styles = {
  app: {
    position: "relative",
    minHeight: "100vh",
    overflowX: "hidden",
    background: "#030106",
    color: "#ffffff",
  },

  background: {
    pointerEvents: "none",
    position: "fixed",
    inset: 0,
    zIndex: 0,
  },

  blob: {
    position: "absolute",
    borderRadius: "999px",
    filter: "blur(90px)",
  },

  blobLeft: {
    left: "-10%",
    top: "-10%",
    width: "384px",
    height: "384px",
    background: "rgba(109, 40, 217, 0.28)",
  },

  blobRight: {
    right: "-10%",
    top: "10%",
    width: "448px",
    height: "448px",
    background: "rgba(217, 70, 239, 0.18)",
  },

  blobBottom: {
    left: "30%",
    bottom: "-20%",
    width: "480px",
    height: "480px",
    background: "rgba(67, 56, 202, 0.2)",
  },

  gridOverlay: {
    position: "absolute",
    inset: 0,
    opacity: 0.16,
    backgroundImage:
        "linear-gradient(rgba(168, 85, 247, 0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.18) 1px, transparent 1px)",
    backgroundSize: "42px 42px",
    maskImage:
        "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.25), rgba(0,0,0,1))",
    WebkitMaskImage:
        "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.25), rgba(0,0,0,1))",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
        "radial-gradient(circle at center, rgba(168,85,247,0.14), transparent 35%), linear-gradient(to bottom, rgba(3,1,6,0.12), #030106 82%)",
  },

  content: {
    position: "relative",
    zIndex: 10,
  },
};