"use client";

import { useState } from "react";

export default function Navbar() {
    const [open, setopen] = useState(false);

    return (
        <nav style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 1000,
            background: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}>
            <div style={{
                maxWidth: 1200,
                margin: "0 auto",
                padding: "18px 48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <div className="hidden md:flex" style={{
                    display: "flex",
                    gap: 28,
                    fontSize: 13,
                    fontWeight: 500,
                    fontFamily: "var(--font-poppins)",
                }}>
                    <a href="#events" style={{ color: "#111" }}>Our Events</a>
                    <a href="#about" style={{ color: "#777" }}>About Us</a>
                    <a href="#faq" style={{ color: "#777" }}>FAQs</a>
                </div>

                <span style={{
                    fontFamily: "var(--font-montserrat)",
                    fontWeight: 800,
                    fontSize: 18,
                    letterSpacing: 4,
                    color: "#111",
                    textTransform: "uppercase",
                }}>
                    E CELL
                </span>

                <div className="hidden md:flex" style={{
                    display: "flex",
                    gap: 28,
                    fontSize: 13,
                    fontWeight: 500,
                    fontFamily: "var(--font-poppins)",
                }}>
                    <a href="#sponsors" style={{ color: "#777" }}>Sponsors</a>
                    <a href="#contact" style={{ color: "#777" }}>Contact Us</a>
                </div>

                <button
                    className="md:hidden"
                    onClick={() => setopen(!open)}
                    style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#111" }}
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>

            {open && (
                <div className="md:hidden" style={{
                    padding: "12px 48px 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    fontSize: 14,
                    fontWeight: 500,
                    fontFamily: "var(--font-poppins)",
                    borderTop: "1px solid #eee",
                    color: "#555",
                }}>
                    <a href="#events" onClick={() => setopen(false)}>Our Events</a>
                    <a href="#about" onClick={() => setopen(false)}>About Us</a>
                    <a href="#faq" onClick={() => setopen(false)}>FAQs</a>
                    <a href="#sponsors" onClick={() => setopen(false)}>Sponsors</a>
                    <a href="#contact" onClick={() => setopen(false)}>Contact Us</a>
                </div>
            )}
        </nav>
    );
}
