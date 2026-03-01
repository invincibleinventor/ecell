"use client";

const sponsors = [
    { name: "ABCTECH", bg: "#141428" },
    { name: "INNOVATE", bg: "#6c5ce7" },
    { name: "KRETECH", bg: "#e8e4ff" },
];

export default function Sponsors() {
    return (
        <section id="sponsors" style={{
            background: "#0e0e0e",
            padding: "100px 48px",
        }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <h2 style={{
                    fontFamily: "var(--font-montserrat)",
                    fontWeight: 800,
                    fontSize: "clamp(36px, 5vw, 56px)",
                    color: "#00c853",
                    textAlign: "center",
                    marginBottom: 56,
                    fontStyle: "italic",
                }}>
                    Sponsors
                </h2>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 20,
                }}>
                    {sponsors.map((s, i) => (
                        <div
                            key={i}
                            style={{
                                background: s.bg,
                                borderRadius: 16,
                                height: 220,
                                display: "flex",
                                alignItems: "flex-end",
                                padding: 22,
                                border: i === 2 ? "1px solid #d0d0d0" : "1px solid rgba(255,255,255,0.06)",
                                cursor: "pointer",
                                transition: "transform 0.3s",
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
                        >
                            <span style={{
                                fontFamily: "var(--font-montserrat)",
                                fontWeight: 700,
                                fontSize: 13,
                                color: i === 2 ? "#444" : "rgba(255,255,255,0.5)",
                                letterSpacing: 1,
                                textTransform: "uppercase",
                                fontStyle: "italic",
                            }}>
                                {s.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
