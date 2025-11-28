// src/CategoryPage.js
import { Link } from "react-router-dom";

export default function CategoryPage({ title, description }) {
  // later you can replace this static list with real posts from backend / JSON
  const samplePosts = [
    {
      id: 1,
      title: `${title} Post 1 (Sample)`,
      excerpt: "This is a placeholder post. Replace it with your real content later.",
      date: "2025-01-01",
    },
    {
      id: 2,
      title: `${title} Post 2 (Sample)`,
      excerpt: "Use this space to share updates, stories, or announcements.",
      date: "2025-01-05",
    },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <header style={styles.header}>
          <Link to="/" style={styles.backLink}>← Back to Blog Home</Link>
          <h1 style={styles.title}>{title}</h1>
          <p style={styles.subtitle}>{description}</p>
        </header>

        <section style={styles.posts}>
          {samplePosts.map((post) => (
            <article key={post.id} style={styles.postCard}>
              <h2 style={styles.postTitle}>{post.title}</h2>
              <p style={styles.postMeta}>Published: {post.date}</p>
              <p style={styles.postExcerpt}>{post.excerpt}</p>
              {/* later you can link to a /category/post-slug page */}
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #020617 0, #000 60%)",
    color: "#e5e7eb",
    padding: "2rem 1.5rem",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  header: {
    marginBottom: "1.5rem",
  },
  backLink: {
    display: "inline-block",
    marginBottom: "0.5rem",
    fontSize: "0.85rem",
    color: "#9ca3af",
    textDecoration: "none",
  },
  title: {
    fontSize: "2rem",
    margin: "0 0 0.3rem 0",
  },
  subtitle: {
    margin: 0,
    color: "#9ca3af",
    fontSize: "0.95rem",
  },
  posts: {
    marginTop: "1.5rem",
    display: "grid",
    gap: "1rem",
  },
  postCard: {
    borderRadius: "16px",
    border: "1px solid #1f2937",
    background: "rgba(15,23,42,0.9)",
    padding: "1.25rem",
  },
  postTitle: {
    margin: "0 0 0.3rem 0",
    fontSize: "1.1rem",
  },
  postMeta: {
    margin: "0 0 0.5rem 0",
    fontSize: "0.8rem",
    color: "#6b7280",
  },
  postExcerpt: {
    margin: 0,
    fontSize: "0.9rem",
    color: "#d1d5db",
  },
};
