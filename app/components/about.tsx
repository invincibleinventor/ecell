"use client";

import { useEffect, useState, useRef } from "react";

const stats = [
    { value: 320, suffix: "M+", prefix: "" },
    { value: 500, suffix: "K+", prefix: "" },
    { value: 438, suffix: "B+", prefix: "$" },
];

function Counter({ target, prefix, suffix }: { target: number; prefix: string; suffix: string }) {
    const [count, setcount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !started.current) {
                    started.current = true;
                    const duration = 2000;
                    const t0 = performance.now();
                    const step = (now: number) => {
                        const p = Math.min((now - t0) / duration, 1);
                        setcount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
                        if (p < 1) requestAnimationFrame(step);
                    };
                    requestAnimationFrame(step);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return (
        <div ref={ref}>
            <p style={{
                fontFamily: "var(--font-montserrat)",
                fontWeight: 800,
                fontSize: 24,
                color: "#111",
            }}>
                {prefix}{count} {suffix}
            </p>
        </div>
    );
}

export default function About() {
    return (
        <section id="about" style={{
            padding: "100px 48px",
            maxWidth: 1200,
            margin: "0 auto",
        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 48,
            }}>
                <h2 style={{
                    fontFamily: "var(--font-montserrat)",
                    fontWeight: 700,
                    fontSize: "clamp(28px, 4vw, 40px)",
                    color: "#111",
                }}>
                    Lorem Ipsum
                </h2>
                <div style={{ display: "flex", gap: 6 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ddd" }} />
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#111" }} />
                </div>
            </div>

            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 48,
                alignItems: "center",
            }}>
                <div style={{
                    background: "#f4f4f4",
                    borderRadius: 20,
                    aspectRatio: "4/3",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                }}>
                    <div style={{
                        width: "55%",
                        aspectRatio: "1",
                        background: "linear-gradient(145deg, #e8e8e8, #d5d5d5)",
                        borderRadius: 14,
                    }} />
                </div>

                <div>
                    <div style={{ marginBottom: 4 }}>
                        <h3 style={{
                            fontFamily: "var(--font-montserrat)",
                            fontWeight: 700,
                            fontSize: 18,
                            color: "#111",
                        }}>
                            E CELL SASTRA
                        </h3>
                    </div>

                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 14,
                        marginBottom: 20,
                        marginTop: 6,
                    }}>
                        <span style={{
                            background: "#111",
                            color: "#fff",
                            borderRadius: 20,
                            padding: "5px 16px",
                            fontSize: 11,
                            fontWeight: 600,
                            fontFamily: "var(--font-poppins)",
                        }}>
                            SASTRA
                        </span>
                        <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00c853" }} />
                            <span style={{ fontSize: 12, color: "#999", fontFamily: "var(--font-poppins)" }}>E-POD</span>
                        </span>
                    </div>

                    <p style={{
                        fontSize: 13,
                        lineHeight: 1.8,
                        color: "#777",
                        fontFamily: "var(--font-poppins)",
                        marginBottom: 32,
                        maxWidth: 380,
                    }}>
                        The Entrepreneurship Cell of SASTRA Deemed University is a student-run organization that aims to foster the spirit of entrepreneurship among students and aspiring entrepreneurs.
                    </p>

                    <div style={{ display: "flex", gap: 36 }}>
                        {stats.map((s, i) => (
                            <Counter key={i} target={s.value} prefix={s.prefix} suffix={s.suffix} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
