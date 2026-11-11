
import Header from "@/components/Header/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <Header />

      <section className={styles.intro} id="introduction">
        <p className={styles.eyebrow}>
          An independent visual &amp; sonic journal
        </p>

        <h1 className={styles.title}>
          A study of{" "}
          <em className={styles.touch}>touch.</em>
        </h1>

        <p className={styles.description}>
          An exploration of movement, softness, rhythm,
          and the quiet relationship between body and mind.
        </p>
      </section>
    </main>
  );
}
