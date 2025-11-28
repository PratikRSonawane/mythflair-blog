// src/App.js
import { Link } from "react-router-dom";

function App() {
  const categories = [
    {
      path: "/community",
      name: "Community",
      description: "News, discussions, and updates for the Mythflair community.",
    },
    {
      path: "/global-community",
      name: "Global Community",
      description: "Worldwide announcements, collaborations, and global events.",
    },
    {
      path: "/universe-lore",
      name: "Universe Lore",
      description: "Deep lore posts about the Mythflair worlds and characters.",
    },
    {
      path: "/creator-updates",
      name: "Creator Updates",
      description: "Behind-the-scenes posts, devlogs, and personal notes.",
    },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <header style={styles.header}>
          <h1 style={styles.title}>Mythflair Blog</h1>
          <p style={styles.subtitle}>
            Updates, lore, and stories from the Mythflair universe and community.
          </p>
        </header>

        <section style={styles.grid}>
          {categories.map((cat) => (
            <Link key={cat.path} to={cat.path} style={styles.tile}>
              <h2 style={styles.tileTitle}>{cat.name}</h2>
              <p style={styles.tileText}>{cat.description}</p>
              <span style={styles.tag}>View posts →</span>
            </Link>
          ))}
        </section>

        <footer style={styles.footer}>
          © {new Date().getFullYear()} Mythflair. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #1f2937 0, #020617 60%)",
    color: "#e5e7eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1.5rem",
  },
  card: {
    width: "100%",
    maxWidth: "960px",
    background: "rgba(15, 23, 42, 0.95)",
    borderRadius: "24px",
    border: "1px solid #1f2937",
    padding: "2rem",
  },
  header: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  title: {
    fontSize: "2.2rem",
    margin: 0,
    letterSpacing: "-0.03em",
  },
  subtitle: {
    marginTop: "0.5rem",
    color: "#9ca3af",
    fontSize: "0.95rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1rem",
  },
  tile: {
    borderRadius: "18px",
    border: "1px solid #1f2937",
    background: "rgba(15, 23, 42, 0.9)",
    padding: "1.25rem",
    textDecoration: "none",
    color: "inherit",
  },
  tileTitle: {
    margin: "0 0 0.4rem",
    fontSize: "1.1rem",
  },
  tileText: {
    fontSize: "0.9rem",
    marginBottom: "0.8rem",
    color: "#9ca3af",
  },
  tag: {
    fontSize: "0.75rem",
    textTransform: "uppercase",
    color: "#c4b5fd",
  },
  footer: {
    marginTop: "2rem",
    fontSize: "0.7rem",
    color: "#6b7280",
    textAlign: "center",
  },
};

export default App;
