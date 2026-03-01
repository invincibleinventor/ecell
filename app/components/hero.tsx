"use client";

export default function Hero() {
    return (
        <section style={{
            position: "relative",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "140px 48px 80px",
            maxWidth: 1200,
            margin: "0 auto",
        }}>
            <div style={{
                position: "absolute",
                top: 100,
                left: 100,
                width: 180,
                height: 200,
                background: "#00c853",
                borderRadius: "40% 60% 50% 50% / 40% 30% 70% 60%",
                transform: "rotate(-15deg)",
                zIndex: 0,
            }} />

            <div style={{ position: "relative", zIndex: 1 }}>
                <h1 style={{
                    fontFamily: "var(--font-montserrat)",
                    fontWeight: 900,
                    fontSize: "clamp(52px, 9vw, 100px)",
                    lineHeight: 0.95,
                    letterSpacing: -3,
                    color: "#0a0a0a",
                }}>
                    EMPOWER
                </h1>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    marginTop: 6,
                    flexWrap: "wrap",
                }}>
                    <div style={{ display: "flex", gap: 8 }}>
                        <span style={{
                            background: "#1a1a1a",
                            color: "#fff",
                            borderRadius: 40,
                            padding: "12px 28px",
                            fontSize: 15,
                            fontWeight: 700,
                            fontFamily: "var(--font-poppins)",
                            letterSpacing: 0.5,
                        }}>320M+</span>
                        <span style={{
                            background: "#1a1a1a",
                            color: "#fff",
                            borderRadius: 40,
                            padding: "12px 28px",
                            fontSize: 15,
                            fontWeight: 700,
                            fontFamily: "var(--font-poppins)",
                            letterSpacing: 0.5,
                        }}>500K+</span>
                    </div>
                    <h1 style={{
                        fontFamily: "var(--font-montserrat)",
                        fontWeight: 900,
                        fontSize: "clamp(52px, 9vw, 100px)",
                        lineHeight: 0.95,
                        letterSpacing: -3,
                        color: "#0a0a0a",
                    }}>
                        IDEATE
                    </h1>
                </div>

                <h1 style={{
                    fontFamily: "var(--font-montserrat)",
                    fontWeight: 900,
                    fontSize: "clamp(52px, 9vw, 100px)",
                    lineHeight: 0.95,
                    letterSpacing: -3,
                    color: "#0a0a0a",
                    marginTop: 6,
                }}>
                    INCUBATE
                </h1>

                <h1 style={{
                    fontFamily: "var(--font-montserrat)",
                    fontWeight: 900,
                    fontSize: "clamp(52px, 9vw, 100px)",
                    lineHeight: 0.95,
                    letterSpacing: -3,
                    color: "#0a0a0a",
                    marginTop: 6,
                }}>
                    INNOVATE
                </h1>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginTop: 40,
                }}>
                    <button style={{
                        background: "#0a0a0a",
                        color: "#fff",
                        border: "none",
                        borderRadius: 32,
                        padding: "15px 36px",
                        fontSize: 14,
                        fontWeight: 600,
                        cursor: "pointer",
                        fontFamily: "var(--font-poppins)",
                    }}>
                        Know More
                    </button>
                    <button style={{
                        background: "#fff",
                        color: "#111",
                        border: "1.5px solid #e0e0e0",
                        borderRadius: 32,
                        padding: "12px 20px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                    }}>
                        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#00c853", display: "inline-block" }} />
                        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#00c853", display: "inline-block" }} />
                        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#00c853", display: "inline-block" }} />
                    </button>
                </div>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    marginTop: 40,
                }}>
                    <div style={{ display: "flex" }}>
                        {[0, 1, 2].map((i) => (
                            <div key={i} style={{
                                width: 34,
                                height: 34,
                                borderRadius: "50%",
                                background: i === 0 ? "#222" : i === 1 ? "#555" : "#999",
                                border: "2.5px solid #fff",
                                marginLeft: i > 0 ? -10 : 0,
                            }} />
                        ))}
                    </div>
                    <p style={{
                        fontSize: 12,
                        color: "#999",
                        fontFamily: "var(--font-poppins)",
                        lineHeight: 1.5,
                    }}>
                        Join 320M+ entrepreneurs building<br />the future of innovation
                    </p>
                </div>
            </div>
        </section>
    );
}
