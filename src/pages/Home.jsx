import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Services from "../components/Services.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import SectionWrapper from "../layout/SectionWrapper.jsx";

const homeSections = [
    {
        id: "home",
        label: "Home",
        component: <Hero />,
    },
    {
        id: "about",
        label: "About",
        component: <About />,
    },
    {
        id: "service",
        label: "Service",
        component: <Services />,
    },
    {
        id: "project",
        label: "Project",
        component: <Projects />,
    },
    {
        id: "contact",
        label: "Contact",
        component: <Contact />,
    },
];

export default function Home() {
    return (
        <div style={styles.page}>
            {homeSections.map((section, index) => (
                <SectionWrapper
                    key={section.id}
                    id={section.id}
                    label={section.label}
                    index={index + 1}
                >
                    {section.component}
                </SectionWrapper>
            ))}
        </div>
    );
}

const styles = {
    page: {
        position: "relative",
        width: "100%",
    },
};