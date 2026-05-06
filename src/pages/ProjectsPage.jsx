import { useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    GraduationCap,
    BriefcaseBusiness,
    Layers,
    X,
    Building2,
    Code2,
} from "lucide-react";

import SubPageNavbar from "../components/SubPageNavbar.jsx";
import useIsMobile from "../hooks/useIsMobile.js";

import cocaColaLogo from "../assets/logos/coca-cola.png";
import uic from "../assets/logos/uic.png";
import wb from "../assets/logos/wb-technologies.png";

const projects = [
    {
        title: "Standardisation des Datacenters selon les normes de l’Uptime Institute",
        category: "Datacenter / Infrastructure",
        scope: "Professionnel",
        company: "Projet PFE",
        companyLogo: wb,
        description:
            "Projet orienté audit, conformité et standardisation des infrastructures datacenter selon les exigences de l’Uptime Institute.",
        details:
            "Ce projet consiste à analyser l’existant d’une infrastructure datacenter, identifier les écarts par rapport aux bonnes pratiques de l’Uptime Institute, puis proposer une démarche de standardisation. L’objectif est d’améliorer la disponibilité, la documentation, la sécurité physique/logique et la résilience globale.",
        stack: [
            "Datacenter",
            "Uptime Institute",
            "Audit",
            "Conformité",
            "Sécurité",
            "Documentation",
        ],
        missions: [
            "Analyse de l’infrastructure existante",
            "Étude des standards Uptime Institute",
            "Identification des écarts de conformité",
            "Documentation technique",
            "Proposition d’améliorations",
        ],
    },
    {
        title: "Stage en Cybersécurité",
        category: "Cybersécurité / Réseaux",
        scope: "Professionnel",
        company: "Coca-Cola Morocco",
        companyLogo: cocaColaLogo,
        description:
            "Audits de sécurité, tests d’intrusion web et réseaux, configuration Palo Alto et utilisation de Microsoft Sentinel.",
        details:
            "Expérience orientée sécurité offensive et défensive, avec une approche pratique sur les environnements réseau, les outils de supervision et les bonnes pratiques de durcissement. Le projet inclut l’analyse de vulnérabilités, la configuration d’équipements de sécurité et la surveillance d’événements.",
        stack: [
            "Pentest",
            "Palo Alto",
            "Microsoft Sentinel",
            "ISO 27001",
            "NIST",
            "ITIL",
        ],
        missions: [
            "Analyse de vulnérabilités",
            "Tests d’intrusion web et réseau",
            "Configuration d’équipements de sécurité",
            "Utilisation de Microsoft Sentinel",
            "Recommandations de remédiation",
        ],
    },
    {
        title: "Gestion de parc informatique",
        category: "Système d'information",
        scope: "Professionnel",
        company: "Service IT",
        companyLogo: wb,
        description:
            "Mise en place d’une solution de suivi du matériel, des utilisateurs, des incidents et des interventions techniques.",
        details:
            "Projet centré sur l’organisation du support informatique et la traçabilité du matériel. L’objectif est de mieux suivre les équipements, les affectations, les incidents et les interventions, afin d’améliorer la qualité du service IT.",
        stack: ["SI", "GLPI", "ITSM", "Support", "Gestion de parc"],
        missions: [
            "Inventaire du matériel",
            "Structuration des tickets",
            "Suivi des interventions",
            "Gestion des utilisateurs",
            "Documentation du processus support",
        ],
    },
    {
        title: "Site web de transport de l’Université Internationale de Casablanca",
        category: "Développement Web / Service universitaire",
        scope: "Académique / Professionnel",
        company: "UIC",
        companyLogo: uic,
        description:
            "Développement d’une solution web dédiée à la gestion et à l’organisation du transport universitaire.",
        details:
            "Plateforme web pensée pour simplifier l’organisation du transport universitaire. Elle permet de centraliser les informations, améliorer l’accès au service et faciliter la gestion côté administration.",
        stack: [
            "Développement Web",
            "Gestion transport",
            "Interface utilisateur",
            "Base de données",
            "Université",
        ],
        missions: [
            "Conception de l’interface utilisateur",
            "Organisation des données de transport",
            "Création des pages principales",
            "Structuration de la base de données",
            "Optimisation de l’expérience utilisateur",
        ],
    },
    {
        title: "Dashboard Data & KPI",
        category: "Data / Business Intelligence",
        scope: "Académique / Professionnel",
        company: "Projet Data",
        companyLogo: uic,
        description:
            "Conception d’un tableau de bord pour suivre des indicateurs clés et faciliter la prise de décision.",
        details:
            "Projet orienté Business Intelligence avec collecte, préparation et visualisation de données. Le dashboard permet de suivre des KPI importants et de transformer des données brutes en informations exploitables.",
        stack: ["Power BI", "SQL", "KPI", "Reporting", "Data"],
        missions: [
            "Nettoyage des données",
            "Modélisation des indicateurs",
            "Création de visualisations",
            "Analyse des tendances",
            "Présentation des KPI",
        ],
    },
    {
        title: "IA de prédiction du prix des voitures",
        category: "Intelligence Artificielle / Data",
        scope: "Académique",
        company: "Projet académique",
        companyLogo: uic,
        description:
            "Création d’un modèle de prédiction du prix des voitures à partir de données structurées et de variables explicatives.",
        details:
            "Projet de Machine Learning basé sur la préparation de données, l’analyse des variables explicatives et l’entraînement d’un modèle de prédiction. L’objectif est d’estimer le prix d’un véhicule selon ses caractéristiques.",
        stack: [
            "Machine Learning",
            "Python",
            "Data preprocessing",
            "Régression",
            "Prédiction",
        ],
        missions: [
            "Préparation du dataset",
            "Nettoyage des données",
            "Analyse exploratoire",
            "Entraînement du modèle",
            "Évaluation des performances",
        ],
    },
    {
        title: "Audit de sécurité d’un système réel",
        category: "Cybersécurité / Audit",
        scope: "Académique",
        company: "Projet sécurité",
        companyLogo: wb,
        description:
            "Audit de sécurité réalisé sur un système réel avec tests offensifs, analyse des failles et recommandations.",
        details:
            "Projet d’audit axé sur l’identification des vulnérabilités, l’évaluation des risques et la rédaction de recommandations techniques. L’objectif est de produire une vision claire de l’exposition du système.",
        stack: ["Pentest", "Audit", "Rapport", "Remédiation"],
        missions: [
            "Reconnaissance",
            "Analyse des vulnérabilités",
            "Tests de sécurité",
            "Classification des risques",
            "Rédaction du rapport",
        ],
    },
    {
        title: "Réseau social sécurisé",
        category: "Développement Web / Sécurité",
        scope: "Académique",
        company: "Projet académique",
        companyLogo: uic,
        description:
            "Création d’un réseau social avec Vue.js, Django REST Framework, API sécurisée et déploiement sur serveur de test.",
        details:
            "Application web complète intégrant une interface utilisateur, une API REST et des mécanismes de sécurité applicative. Le projet met l’accent sur l’authentification, la gestion des données et la séparation front-end/back-end.",
        stack: ["Vue.js", "Django REST", "Python", "CSS", "API sécurisée"],
        missions: [
            "Création du front-end",
            "Développement de l’API REST",
            "Gestion de l’authentification",
            "Sécurisation des endpoints",
            "Déploiement de test",
        ],
    },
    {
        title: "Simulation d’attaque en environnement contrôlé",
        category: "Cybersécurité offensive",
        scope: "Académique",
        company: "Lab cybersécurité",
        companyLogo: uic,
        description:
            "Simulation d’attaque pour identifier les vulnérabilités critiques, évaluer la sécurité du SI et proposer des correctifs.",
        details:
            "Projet réalisé dans un environnement contrôlé afin de comprendre les étapes d’une attaque, détecter les vulnérabilités et proposer des mesures de correction. L’objectif est pédagogique et orienté amélioration de la sécurité.",
        stack: [
            "Sécurité offensive",
            "Vulnérabilités",
            "Scénarios d’attaque",
            "Correction",
        ],
        missions: [
            "Préparation de l’environnement de test",
            "Simulation de scénarios d’attaque",
            "Analyse des failles",
            "Évaluation de l’impact",
            "Proposition de correctifs",
        ],
    },
];

function getScopeIcon(scope) {
    if (scope === "Professionnel") return BriefcaseBusiness;
    if (scope === "Académique") return GraduationCap;
    return Layers;
}

function getScopeStyle(scope) {
    if (scope === "Professionnel") {
        return {
            border: "1px solid rgba(196, 181, 253, 0.35)",
            background: "rgba(196, 181, 253, 0.16)",
            color: "#ede9fe",
        };
    }

    if (scope === "Académique") {
        return {
            border: "1px solid rgba(217, 70, 239, 0.35)",
            background: "rgba(217, 70, 239, 0.14)",
            color: "#f5d0fe",
        };
    }

    return {
        border: "1px solid rgba(255, 255, 255, 0.18)",
        background: "rgba(10, 4, 18, 0.72)",
        color: "#ffffff",
    };
}

export default function ProjectsPage() {
    const isMobile = useIsMobile();
    const [selectedProject, setSelectedProject] = useState(null);

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <>
            <SubPageNavbar />

            <section
                style={{
                    ...styles.section,
                    ...(isMobile ? styles.sectionMobile : {}),
                }}
            >
                <div
                    style={{
                        ...styles.heading,
                        ...(isMobile ? styles.headingMobile : {}),
                    }}
                >
                    <p style={styles.kicker}>Projets</p>

                    <h1
                        style={{
                            ...styles.title,
                            ...(isMobile ? styles.titleMobile : {}),
                        }}
                    >
                        Mes réalisations.
                    </h1>

                    <p
                        style={{
                            ...styles.subtitle,
                            ...(isMobile ? styles.subtitleMobile : {}),
                        }}
                    >
                        Une sélection de projets professionnels, académiques et hybrides
                        autour des infrastructures, du web, de la data, de l’IA et de la
                        cybersécurité.
                    </p>
                </div>

                <div
                    style={{
                        ...styles.legend,
                        ...(isMobile ? styles.legendMobile : {}),
                    }}
                >
          <span style={styles.legendItem}>
            <BriefcaseBusiness size={15} />
            Professionnel
          </span>

                    <span style={styles.legendItem}>
            <Layers size={15} />
            Académique / Professionnel
          </span>

                    <span style={styles.legendItem}>
            <GraduationCap size={15} />
            Académique
          </span>
                </div>

                <div
                    style={{
                        ...styles.grid,
                        ...(isMobile ? styles.gridMobile : {}),
                    }}
                >
                    {projects.map((project, index) => {
                        const ScopeIcon = getScopeIcon(project.scope);

                        return (
                            <motion.article
                                key={project.title}
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
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
                  <span
                      style={{
                          ...styles.scopeBadge,
                          ...(isMobile ? styles.scopeBadgeMobile : {}),
                          ...getScopeStyle(project.scope),
                      }}
                  >
                    <ScopeIcon size={15} />
                      {project.scope}
                  </span>

                                    <div
                                        style={{
                                            ...styles.visualCode,
                                            ...(isMobile ? styles.visualCodeMobile : {}),
                                        }}
                                    >
                                        <span style={styles.codeKeyword}>project</span>
                                        <span style={styles.codeOperator}>.</span>
                                        <span style={styles.codeMethod}>build</span>
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

                                    <h2
                                        style={{
                                            ...styles.cardTitle,
                                            ...(isMobile ? styles.cardTitleMobile : {}),
                                        }}
                                    >
                                        {project.title}
                                    </h2>

                                    <p
                                        style={{
                                            ...styles.description,
                                            ...(isMobile ? styles.descriptionMobile : {}),
                                        }}
                                    >
                                        {project.description}
                                    </p>

                                    <div
                                        style={{
                                            ...styles.stack,
                                            ...(isMobile ? styles.stackMobile : {}),
                                        }}
                                    >
                                        {project.stack.slice(0, isMobile ? 3 : 4).map((tech) => (
                                            <span key={tech} style={styles.stackItem}>
                        {tech}
                      </span>
                                        ))}
                                    </div>

                                    <div
                                        style={{
                                            ...styles.cardFooter,
                                            ...(isMobile ? styles.cardFooterMobile : {}),
                                        }}
                                    >
                                        <div style={styles.company}>
                                            <div
                                                style={{
                                                    ...styles.companyLogo,
                                                    ...(isMobile ? styles.companyLogoMobile : {}),
                                                }}
                                            >
                                                <img
                                                    src={project.companyLogo}
                                                    alt={`${project.company} logo`}
                                                    style={styles.companyLogoImage}
                                                />
                                            </div>

                                            <div>
                                                <p style={styles.companyLabel}>
                                                    Entreprise / contexte
                                                </p>
                                                <p style={styles.companyName}>{project.company}</p>
                                            </div>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => setSelectedProject(project)}
                                            style={{
                                                ...styles.primaryButton,
                                                ...(isMobile ? styles.primaryButtonMobile : {}),
                                            }}
                                        >
                                            Voir le projet
                                            <ArrowUpRight style={styles.buttonIcon} size={17} />
                                        </button>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </section>

            {selectedProject && (
                <div
                    style={{
                        ...styles.modalOverlay,
                        ...(isMobile ? styles.modalOverlayMobile : {}),
                    }}
                    onClick={closeModal}
                >
                    <motion.div
                        style={{
                            ...styles.modal,
                            ...(isMobile ? styles.modalMobile : {}),
                        }}
                        initial={{ opacity: 0, scale: 0.92, y: 24 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={closeModal}
                            style={{
                                ...styles.closeButton,
                                ...(isMobile ? styles.closeButtonMobile : {}),
                            }}
                            aria-label="Fermer la fenêtre"
                        >
                            <X size={20} />
                        </button>

                        <div
                            style={{
                                ...styles.modalTop,
                                ...(isMobile ? styles.modalTopMobile : {}),
                            }}
                        >
              <span
                  style={{
                      ...styles.scopeBadgeModal,
                      ...getScopeStyle(selectedProject.scope),
                  }}
              >
                {(() => {
                    const ScopeIcon = getScopeIcon(selectedProject.scope);
                    return <ScopeIcon size={15} />;
                })()}
                  {selectedProject.scope}
              </span>

                            <div style={styles.modalCompany}>
                                <div
                                    style={{
                                        ...styles.companyLogoLarge,
                                        ...(isMobile ? styles.companyLogoLargeMobile : {}),
                                    }}
                                >
                                    <img
                                        src={selectedProject.companyLogo}
                                        alt={`${selectedProject.company} logo`}
                                        style={styles.companyLogoImage}
                                    />
                                </div>

                                <div>
                                    <p style={styles.companyLabel}>Entreprise / contexte</p>
                                    <p style={styles.companyName}>{selectedProject.company}</p>
                                </div>
                            </div>
                        </div>

                        <p style={styles.modalCategory}>{selectedProject.category}</p>

                        <h2
                            style={{
                                ...styles.modalTitle,
                                ...(isMobile ? styles.modalTitleMobile : {}),
                            }}
                        >
                            {selectedProject.title}
                        </h2>

                        <p
                            style={{
                                ...styles.modalDescription,
                                ...(isMobile ? styles.modalDescriptionMobile : {}),
                            }}
                        >
                            {selectedProject.details}
                        </p>

                        <div
                            style={{
                                ...styles.modalGrid,
                                ...(isMobile ? styles.modalGridMobile : {}),
                            }}
                        >
                            <div
                                style={{
                                    ...styles.modalPanel,
                                    ...(isMobile ? styles.modalPanelMobile : {}),
                                }}
                            >
                                <div style={styles.modalPanelTitle}>
                                    <Code2 size={18} />
                                    Technologies utilisées
                                </div>

                                <div style={styles.modalStack}>
                                    {selectedProject.stack.map((tech) => (
                                        <span key={tech} style={styles.modalStackItem}>
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>

                            <div
                                style={{
                                    ...styles.modalPanel,
                                    ...(isMobile ? styles.modalPanelMobile : {}),
                                }}
                            >
                                <div style={styles.modalPanelTitle}>
                                    <Building2 size={18} />
                                    Missions réalisées
                                </div>

                                <ul style={styles.missionList}>
                                    {selectedProject.missions.map((mission) => (
                                        <li key={mission} style={styles.missionItem}>
                                            <span style={styles.missionDot} />
                                            {mission}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    );
}

const styles = {
    section: {
        position: "relative",
        zIndex: 10,
        maxWidth: "1152px",
        margin: "0 auto",
        padding: "150px 16px 80px",
        boxSizing: "border-box",
    },

    sectionMobile: {
        padding: "128px 14px 56px",
    },

    heading: {
        marginBottom: "36px",
        textAlign: "center",
    },

    headingMobile: {
        marginBottom: "28px",
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

    titleMobile: {
        fontSize: "clamp(38px, 12vw, 54px)",
        lineHeight: 1,
    },

    subtitle: {
        maxWidth: "760px",
        margin: "24px auto 0",
        color: "rgba(255, 255, 255, 0.6)",
        lineHeight: "28px",
    },

    subtitleMobile: {
        maxWidth: "100%",
        marginTop: "18px",
        fontSize: "15px",
        lineHeight: "26px",
    },

    legend: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "12px",
        marginBottom: "44px",
    },

    legendMobile: {
        justifyContent: "flex-start",
        gap: "10px",
        marginBottom: "30px",
    },

    legendItem: {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "9px 13px",
        borderRadius: "999px",
        border: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(255,255,255,0.05)",
        color: "rgba(255,255,255,0.76)",
        fontSize: "13px",
        fontWeight: 800,
    },

    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: "28px",
    },

    gridMobile: {
        gridTemplateColumns: "1fr",
        gap: "22px",
    },

    card: {
        overflow: "hidden",
        borderRadius: "32px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        background: "rgba(255, 255, 255, 0.04)",
        boxShadow: "0 25px 70px rgba(76, 29, 149, 0.3)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
    },

    cardMobile: {
        borderRadius: "26px",
    },

    cardVisual: {
        position: "relative",
        height: "224px",
        background:
            "radial-gradient(circle at 25% 20%, rgba(217,70,239,0.85), transparent 28%), radial-gradient(circle at 75% 70%, rgba(124,58,237,0.75), transparent 32%), linear-gradient(135deg, #09010f, #1b0731 45%, #050107)",
    },

    cardVisualMobile: {
        height: "170px",
    },

    visualCode: {
        position: "absolute",
        left: "24px",
        bottom: "24px",
        padding: "10px 14px",
        borderRadius: "14px",
        border: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(3, 1, 6, 0.58)",
        color: "#ffffff",
        fontSize: "14px",
        fontWeight: 800,
        fontFamily:
            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
    },

    visualCodeMobile: {
        left: "18px",
        bottom: "18px",
        fontSize: "12px",
        padding: "9px 12px",
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

    scopeBadge: {
        position: "absolute",
        left: "20px",
        top: "20px",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "9px 13px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: 900,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
    },

    scopeBadgeMobile: {
        left: "16px",
        top: "16px",
        fontSize: "11px",
        padding: "8px 11px",
    },

    cardBody: {
        padding: "28px",
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
        letterSpacing: "0.28em",
    },

    cardTitle: {
        margin: "12px 0 0",
        color: "#ffffff",
        fontSize: "30px",
        lineHeight: 1.1,
        fontWeight: 950,
        letterSpacing: "-0.03em",
    },

    cardTitleMobile: {
        fontSize: "24px",
        lineHeight: 1.15,
    },

    description: {
        margin: "16px 0 0",
        color: "rgba(255, 255, 255, 0.6)",
        lineHeight: "28px",
    },

    descriptionMobile: {
        fontSize: "14px",
        lineHeight: "25px",
    },

    stack: {
        marginTop: "24px",
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
    },

    stackMobile: {
        marginTop: "18px",
    },

    stackItem: {
        padding: "6px 12px",
        borderRadius: "999px",
        border: "1px solid rgba(196, 181, 253, 0.2)",
        background: "rgba(196, 181, 253, 0.1)",
        color: "#ede9fe",
        fontSize: "12px",
        fontWeight: 700,
    },

    cardFooter: {
        marginTop: "30px",
        paddingTop: "22px",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        flexWrap: "wrap",
    },

    cardFooterMobile: {
        alignItems: "stretch",
        flexDirection: "column",
        marginTop: "24px",
        paddingTop: "18px",
    },

    company: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
    },

    companyLogo: {
        width: "44px",
        height: "44px",
        padding: "8px",
        borderRadius: "14px",
        background: "rgba(255,255,255,0.92)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 0 24px rgba(168, 85, 247, 0.32)",
        boxSizing: "border-box",
        flexShrink: 0,
    },

    companyLogoMobile: {
        width: "42px",
        height: "42px",
        borderRadius: "13px",
    },

    companyLogoLarge: {
        width: "58px",
        height: "58px",
        padding: "9px",
        borderRadius: "18px",
        background: "rgba(255,255,255,0.92)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 0 28px rgba(168, 85, 247, 0.38)",
        boxSizing: "border-box",
        flexShrink: 0,
    },

    companyLogoLargeMobile: {
        width: "52px",
        height: "52px",
        borderRadius: "16px",
    },

    companyLogoImage: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        display: "block",
    },

    companyLabel: {
        margin: 0,
        color: "rgba(255,255,255,0.38)",
        fontSize: "11px",
        fontWeight: 800,
        textTransform: "uppercase",
        letterSpacing: "0.18em",
    },

    companyName: {
        margin: "5px 0 0",
        color: "#ffffff",
        fontSize: "14px",
        fontWeight: 900,
    },

    primaryButton: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "12px 20px",
        borderRadius: "999px",
        border: "none",
        background: "linear-gradient(135deg, #7c3aed, #a855f7, #c084fc)",
        color: "#ffffff",
        textDecoration: "none",
        fontWeight: 900,
        cursor: "pointer",
        boxShadow:
            "0 0 28px rgba(168, 85, 247, 0.38), 0 12px 30px rgba(139, 92, 246, 0.3)",
    },

    primaryButtonMobile: {
        width: "100%",
        padding: "13px 18px",
    },

    buttonIcon: {
        marginLeft: "8px",
    },

    modalOverlay: {
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        padding: "24px",
        background: "rgba(3, 1, 6, 0.76)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    modalOverlayMobile: {
        padding: "12px",
        alignItems: "flex-end",
    },

    modal: {
        position: "relative",
        width: "100%",
        maxWidth: "900px",
        maxHeight: "88vh",
        overflowY: "auto",
        borderRadius: "34px",
        border: "1px solid rgba(168, 85, 247, 0.28)",
        background:
            "radial-gradient(circle at top left, rgba(168,85,247,0.24), transparent 35%), linear-gradient(135deg, rgba(15, 5, 28, 0.96), rgba(3, 1, 6, 0.98))",
        boxShadow:
            "0 35px 100px rgba(0, 0, 0, 0.65), 0 0 80px rgba(168, 85, 247, 0.22)",
        padding: "34px",
        boxSizing: "border-box",
    },

    modalMobile: {
        maxHeight: "88vh",
        padding: "24px",
        borderRadius: "28px 28px 0 0",
    },

    closeButton: {
        position: "absolute",
        right: "22px",
        top: "22px",
        width: "42px",
        height: "42px",
        borderRadius: "999px",
        border: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(255,255,255,0.06)",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
    },

    closeButtonMobile: {
        right: "18px",
        top: "18px",
        width: "38px",
        height: "38px",
    },

    modalTop: {
        paddingRight: "54px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "18px",
        flexWrap: "wrap",
    },

    modalTopMobile: {
        paddingRight: "44px",
        alignItems: "flex-start",
        flexDirection: "column",
    },

    scopeBadgeModal: {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "9px 13px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: 900,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
    },

    modalCompany: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
    },

    modalCategory: {
        margin: "30px 0 0",
        color: "#c4b5fd",
        fontSize: "12px",
        fontWeight: 900,
        textTransform: "uppercase",
        letterSpacing: "0.28em",
    },

    modalTitle: {
        margin: "14px 0 0",
        color: "#ffffff",
        fontSize: "clamp(32px, 5vw, 52px)",
        lineHeight: 1,
        fontWeight: 950,
        letterSpacing: "-0.05em",
    },

    modalTitleMobile: {
        fontSize: "clamp(28px, 9vw, 38px)",
        lineHeight: 1.05,
    },

    modalDescription: {
        maxWidth: "780px",
        margin: "22px 0 0",
        color: "rgba(255,255,255,0.68)",
        lineHeight: "30px",
        fontSize: "16px",
    },

    modalDescriptionMobile: {
        fontSize: "15px",
        lineHeight: "26px",
    },

    modalGrid: {
        marginTop: "30px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "18px",
    },

    modalGridMobile: {
        gridTemplateColumns: "1fr",
    },

    modalPanel: {
        padding: "22px",
        borderRadius: "24px",
        border: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(255,255,255,0.045)",
    },

    modalPanelMobile: {
        padding: "18px",
    },

    modalPanelTitle: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        color: "#ffffff",
        fontSize: "15px",
        fontWeight: 900,
        marginBottom: "16px",
    },

    modalStack: {
        display: "flex",
        flexWrap: "wrap",
        gap: "9px",
    },

    modalStackItem: {
        padding: "8px 12px",
        borderRadius: "999px",
        border: "1px solid rgba(196, 181, 253, 0.22)",
        background: "rgba(196, 181, 253, 0.1)",
        color: "#ede9fe",
        fontSize: "12px",
        fontWeight: 800,
    },

    missionList: {
        margin: 0,
        padding: 0,
        listStyle: "none",
        display: "grid",
        gap: "12px",
    },

    missionItem: {
        display: "flex",
        alignItems: "flex-start",
        gap: "10px",
        color: "rgba(255,255,255,0.66)",
        fontSize: "14px",
        lineHeight: "22px",
    },

    missionDot: {
        width: "7px",
        height: "7px",
        borderRadius: "999px",
        background: "#c4b5fd",
        boxShadow: "0 0 12px rgba(196,181,253,0.9)",
        marginTop: "7px",
        flexShrink: 0,
    },
};