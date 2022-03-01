import Head from "next/head";
import styles from "../styles/Home.module.css";
import vision from "@google-cloud/vision";
const client = new vision.ImageAnnotatorClient();

export const getStaticProps = async () => {
  const [result] = await client.textDetection("cat.jpeg");
  const labels = result.labelAnnotations;
  console.log(labels, "uwu");
  return {
    props: {
      uwu: "uwu"
    }
  };
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>uwu</main>
    </div>
  );
}
