import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { Container, Row } from "react-bootstrap";
import uri from "../components/Resume_TimScallonSept2024.pdf";

export default function Resume() {;
  const docs = [{ uri }];

  return (
    <article>
      <h2>My Professional Resume & CV (Printable/Downloadable)</h2>
      <Container>
        <Row>
          <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
        </Row>
      </Container>
    </article>
  );
}