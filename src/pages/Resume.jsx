export default function Resume() {

  const pdfPath = "/Resume_TimScallonSept2024.pdf"
  
  return (
    <article>
      <h2>My Professional Resume & CV (Printable/Downloadable)</h2>
      <iframe
        src={pdfPath}
        title="Resume PDF"
        width="100%"
        height="500px"
        style={{ border: "none" }}
      ></iframe>
    </article>
  );
}