"use client";

const items = [
    { icon: "📈", title: "Adaptive AI\nGrowth", row: "1", col: "1" },
    { icon: "📊", title: "Real-Time AI\nInsights", row: "1 / 3", col: "2", tall: true },
    { icon: "⚡", title: "Effortless\nAutomation", row: "1", col: "3" },
    { icon: "🔍", title: "Real-Time AI\nInsights", row: "2", col: "1" },
    { icon: "🚀", title: "Real-Time AI\nInsights", row: "2", col: "3" },
];

export default function FAQ() {
    return (
        <section id="faq" style={{
            padding: "80px 48px 100px",
            maxWidth: 1200,
            margin: "0 auto",
        }}>
            <p style={{
                fontSize: 13,
                color: "#aaa",
                fontFamily: "var(--font-poppins)",
                marginBottom: 28,
                fontStyle: "italic",
                fontWeight: 400,
            }}>
                frequently asked questions
            </p>

            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gridTemplateRows: "1fr 1fr",
                gap: 14,
                minHeight: 380,
            }}>
                {items.map((item, i) => (
                    <div
                        key={i}
                        style={{
                            background: "#f7f7f7",
                            borderRadius: 16,
                            border: "1px solid #ebebeb",
                            padding: 24,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: item.tall ? "flex-start" : "flex-end",
                            gridRow: item.row,
                            gridColumn: item.col,
                            position: "relative",
                            overflow: "hidden",
                            cursor: "pointer",
                            transition: "box-shadow 0.3s",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = "none";
                        }}
                    >
                        {item.tall && (
                            <div style={{
                                width: "80%",
                                height: 120,
                                background: "linear-gradient(135deg, #e0e0e0, #d0d0d0)",
                                borderRadius: 10,
                                marginBottom: 16,
                                alignSelf: "center",
                            }} />
                        )}
                        <span style={{ fontSize: 18, marginBottom: 8 }}>{item.icon}</span>
                        <h4 style={{
                            fontFamily: "var(--font-montserrat)",
                            fontWeight: 700,
                            fontSize: 14,
                            color: "#111",
                            lineHeight: 1.4,
                            whiteSpace: "pre-line",
                        }}>
                            {item.title}
                        </h4>
                    </div>
                ))}
            </div>
        </section>
    );
}
