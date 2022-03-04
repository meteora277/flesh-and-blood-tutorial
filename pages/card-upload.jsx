import vision from "@google-cloud/vision";
const client = new vision.ImageAnnotatorClient();

//setup for google cloud vision api can be found here https://cloud.google.com/vision/docs/setup

export const getStaticProps = async () => {
  const [result] = await client.textDetection(
    "cards/bittering-thorns-yellow.png"
  );
  const labels = result.textAnnotations;
  console.log(labels[0].description);
  return {
    props: {
      uwu: "uwu"
    }
  };
};

export default function cardUploader() {
  return <h1>Hewwo</h1>;
}
