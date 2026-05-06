import { useEffect, useMemo, useState } from "react";

// Configuration centralisée
const CONFIG = {
    PARTICLE_COUNT: 100,
    COLLAPSE_DELAY: 3200,
    EXIT_DELAY: 4000,
    FINISH_DELAY: 800,
};

const createParticles = (count) => {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        angle: `${(i * 360) / count}deg`,
        delay: `${Math.random() * 2}s`,
        duration: `${1.5 + Math.random() * 1.5}s`,
        height: `${60 + Math.random() * 100}px`,
        width: `${0.5 + Math.random() * 1.5}px`,
        opacity: 0.2 + Math.random() * 0.6,
        dist: `${400 + Math.random() * 250}px`,
    }));
};

export default function WelcomeAnimation({ onFinish, name = "David DONGA" }) {
    const [phase, setPhase] = useState("intro");
    const particles = useMemo(() => createParticles(CONFIG.PARTICLE_COUNT), []);
    const greeting = useMemo(() => {
        const hour = new Date().getHours();
        return hour >= 18 || hour < 5 ? "Bonsoir" : "Bonjour";
    }, []);

    useEffect(() => {
        const t1 = setTimeout(() => setPhase("collapsing"), CONFIG.COLLAPSE_DELAY);
        const t2 = setTimeout(() => {
            setPhase("hidden");
            setTimeout(() => onFinish?.(), CONFIG.FINISH_DELAY);
        }, CONFIG.EXIT_DELAY);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, [onFinish]);

    return (
        <>
            <style>{`
                :root {
                    --c-primary: #a855f7;
                    --c-glow: rgba(168, 85, 247, 0.6);
                    --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
                }

                @keyframes tunnelTravel {
                    0% { transform: rotate(var(--angle)) translateY(var(--dist)) translateZ(-1000px); opacity: 0; }
                    20% { opacity: var(--opacity); }
                    100% { transform: rotate(var(--angle)) translateY(0) translateZ(500px); opacity: 0; }
                }

                @keyframes glitchText {
                    0% { text-shadow: 2px 0 red, -2px 0 blue; opacity: 0; }
                    1% { opacity: 1; }
                    2% { text-shadow: none; }
                    100% { opacity: 1; }
                }

                .w-container {
                    position: fixed; inset: 0; z-index: 9999;
                    background: #000; display: flex; align-items: center; justify-content: center;
                    perspective: 1000px; overflow: hidden;
                    transition: opacity 0.8s ease;
                }

                .w-scene {
                    position: absolute; transform-style: preserve-3d;
                    transition: transform 1s cubic-bezier(0.7, 0, 0.3, 1), filter 1s ease;
                }

                .phase-collapsing .w-scene { transform: scale(0) rotate(360deg); filter: blur(20px); }
                .phase-hidden { opacity: 0; pointer-events: none; }

                .particle {
                    position: absolute; width: var(--width); height: var(--height);
                    background: linear-gradient(to top, transparent, var(--c-primary), #fff);
                    transform-origin: bottom center; mix-blend-mode: screen;
                    animation: tunnelTravel var(--duration) linear infinite;
                    animation-delay: var(--delay);
                }

                .w-content {
                    position: relative; z-index: 10; text-align: center;
                    animation: glitchText 0.1s stage-1 forwards;
                }

                .w-title {
                    font-size: clamp(2.5rem, 8vw, 6rem); font-weight: 900; color: #fff;
                    letter-spacing: -0.05em; line-height: 0.9; margin: 0;
                    filter: drop-shadow(0 0 20px var(--c-glow));
                }

                .w-accent { color: var(--c-primary); }

                .w-bar-container {
                    width: 200px; height: 1px; background: rgba(255,255,255,0.1);
                    margin: 2rem auto; position: relative; overflow: hidden;
                }

                .w-bar-fill {
                    position: absolute; inset: 0; background: var(--c-primary);
                    transform: scaleX(0); transform-origin: left;
                    animation: load 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                    box-shadow: 0 0 15px var(--c-primary);
                }

                @keyframes load { to { transform: scaleX(1); } }

                .w-sub {
                    font-family: var(--font-mono); font-size: 10px; color: var(--c-primary);
                    letter-spacing: 0.3em; text-transform: uppercase; opacity: 0.7;
                }
            `}</style>

            <div className={`w-container phase-${phase}`}>
                <div className="w-scene">
                    {/* Tunnel de particules 3D */}
                    {particles.map(p => (
                        <div key={p.id} className="particle" style={{
                            '--angle': p.angle, '--duration': p.duration,
                            '--delay': p.delay, '--height': p.height,
                            '--width': p.width, '--opacity': p.opacity,
                            '--dist': p.dist
                        }} />
                    ))}

                    {/* Halo central dynamique */}
                    <div style={{
                        position: 'absolute', width: '400px', height: '400px',
                        background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)',
                        filter: 'blur(40px)', animation: 'pulseGlow 2s infinite'
                    }} />
                </div>

                <div className="w-content">
                    <div className="w-sub" style={{ marginBottom: '10px' }}>
                        {greeting} · SYSTEM_INIT_V.4
                    </div>

                    <h1 className="w-title">
                        {name.split(' ')[0]} <span className="w-accent">{name.split(' ')[1]}</span>
                    </h1>

                    <div className="w-bar-container">
                        <div className="w-bar-fill" />
                    </div>

                    <div className="w-sub" style={{ fontSize: '9px', opacity: 0.5 }}>
                        {">"} DEPLOYING_INTERFACE...
                    </div>
                </div>
            </div>
        </>
    );
}