"use client";

export default function Footer() {
    return (
        <footer id="contact" style={{
            background: "#f8f8f8",
            borderTop: "1px solid #eee",
        }}>
            <div style={{
                maxWidth: 1200,
                margin: "0 auto",
                padding: "80px 48px 36px",
            }}>
                <div style={{
                    background: "#111",
                    borderRadius: 24,
                    padding: "56px 40px",
                    textAlign: "center",
                    marginBottom: 40,
                }}>
                    <h3 style={{
                        fontFamily: "var(--font-montserrat)",
                        fontWeight: 700,
                        fontSize: "clamp(24px, 3vw, 34px)",
                        color: "#fff",
                        lineHeight: 1.3,
                        marginBottom: 14,
                    }}>
                        Do you have<br />any questions?
                    </h3>
                    <p style={{
                        fontSize: 13,
                        color: "#777",
                        fontFamily: "var(--font-poppins)",
                        marginBottom: 28,
                        maxWidth: 360,
                        margin: "0 auto 28px",
                        lineHeight: 1.6,
                    }}>
                        Reach out to us and we&apos;ll get back to you as soon as possible.
                    </p>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 10,
                        maxWidth: 420,
                        margin: "0 auto",
                    }}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            style={{
                                flex: 1,
                                padding: "13px 22px",
                                borderRadius: 30,
                                border: "1px solid #333",
                                background: "#1a1a1a",
                                color: "#fff",
                                fontSize: 13,
                                fontFamily: "var(--font-poppins)",
                                outline: "none",
                            }}
                        />
                        <button style={{
                            background: "#fff",
                            color: "#111",
                            border: "none",
                            borderRadius: 30,
                            padding: "13px 30px",
                            fontSize: 13,
                            fontWeight: 600,
                            cursor: "pointer",
                            fontFamily: "var(--font-poppins)",
                            whiteSpace: "nowrap",
                        }}>
                            Submit
                        </button>
                    </div>
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: 20,
                    borderTop: "1px solid #e5e5e5",
                    flexWrap: "wrap",
                    gap: 10,
                }}>
                    <p style={{
                        fontSize: 11,
                        color: "#aaa",
                        fontFamily: "var(--font-poppins)",
                        fontWeight: 500,
                    }}>
                        MADE WITH <span style={{ color: "#e74c3c" }}>♥</span> BY TECH-E
                    </p>
                    <p style={{
                        fontSize: 11,
                        color: "#aaa",
                        fontFamily: "var(--font-poppins)",
                        fontWeight: 500,
                    }}>
                        © E-Cell SASTRA. All Rights Reserved 2026
                    </p>
                </div>
            </div>
        </footer>
    );
}
