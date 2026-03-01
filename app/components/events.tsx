"use client";

import { useRef } from "react";

const events = [
    { title: "Lorem Ipsum", cta: "Get Now" },
    { title: "Lorem Ipsum", cta: "Get Now" },
    { title: "Lorem Ipsum", cta: "Get Now" },
    { title: "Lorem Ipsum", cta: "Get Now" },
];

export default function Events() {
    const scrollref = useRef<HTMLDivElement>(null);

    const scroll = (dir: number) => {
        if (scrollref.current) {
            scrollref.current.scrollBy({ left: dir * 320, behavior: "smooth" });
        }
    };

    return (
        <section id="events" style={{
            background: "#111",
            padding: "80px 0 60px",
        }}>
            <div style={{
                maxWidth: 1200,
                margin: "0 auto",
                padding: "0 48px",
            }}>
                <div style={{ textAlign: "center", marginBottom: 8 }}>
                    <span style={{
                        display: "inline-block",
                        background: "#222",
                        color: "#888",
                        fontSize: 10,
                        fontWeight: 600,
                        padding: "6px 16px",
                        borderRadius: 20,
                        fontFamily: "var(--font-poppins)",
                        textTransform: "uppercase",
                        letterSpacing: 1.5,
                    }}>
                        ✦ Featured Events
                    </span>
                </div>

                <h2 style={{
                    fontFamily: "var(--font-montserrat)",
                    fontWeight: 700,
                    fontSize: "clamp(30px, 4vw, 46px)",
                    color: "#fff",
                    textAlign: "center",
                    marginBottom: 40,
                    marginTop: 12,
                }}>
                    Tagline - Lorem Ipsum
                </h2>

                <div
                    ref={scrollref}
                    style={{
                        display: "flex",
                        gap: 18,
                        overflowX: "auto",
                        scrollSnapType: "x mandatory",
                        paddingBottom: 8,
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                    }}
                >
                    {events.map((event, i) => (
                        <div
                            key={i}
                            style={{
                                minWidth: 280,
                                maxWidth: 280,
                                height: 240,
                                flexShrink: 0,
                                scrollSnapAlign: "start",
                                position: "relative",
                            }}
                        >
                            <div style={{
                                width: "100%",
                                height: "100%",
                                background: "#1c1c1c",
                                borderRadius: 20,
                                border: "1px solid #2a2a2a",
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "column",
                            }}>
                                <div style={{
                                    flex: 1,
                                    margin: "10px 10px 0",
                                    background: "#252525",
                                    borderRadius: "14px 14px 0 0",
                                    position: "relative",
                                }}>
                                    <div style={{
                                        position: "absolute",
                                        bottom: -1,
                                        left: 0,
                                        right: 0,
                                        height: 20,
                                        background: "#1c1c1c",
                                        borderRadius: "20px 20px 0 0",
                                    }} />
                                </div>

                                <div style={{
                                    padding: "0 20px 18px",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-end",
                                }}>
                                    <span style={{
                                        fontSize: 13,
                                        color: "#aaa",
                                        fontFamily: "var(--font-poppins)",
                                        fontWeight: 400,
                                    }}>
                                        {event.title}
                                    </span>
                                    <button style={{
                                        background: "#6c5ce7",
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: 20,
                                        padding: "8px 22px",
                                        fontSize: 12,
                                        fontWeight: 600,
                                        cursor: "pointer",
                                        fontFamily: "var(--font-poppins)",
                                    }}>
                                        {event.cta}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 10,
                    marginTop: 20,
                }}>
                    <button
                        onClick={() => scroll(-1)}
                        style={{
                            width: 36,
                            height: 36,
                            borderRadius: "50%",
                            background: "#222",
                            border: "1px solid #333",
                            color: "#aaa",
                            fontSize: 16,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        ←
                    </button>
                    <button
                        onClick={() => scroll(1)}
                        style={{
                            width: 36,
                            height: 36,
                            borderRadius: "50%",
                            background: "#222",
                            border: "1px solid #333",
                            color: "#aaa",
                            fontSize: 16,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        →
                    </button>
                </div>
            </div>
        </section>
    );
}
