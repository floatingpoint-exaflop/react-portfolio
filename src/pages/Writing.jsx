import { useState } from "react";
import Written from "../components/Written";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

export default function Writing() {
  const [selectedDoc, setSelectedDoc] = useState(null);

  const writtenList = [
    {
      id: 1,
      label: "Physical and Mental Activity and Their Effects on Short Term Recall and Task Anxiety",
      docHref: "../../public/documents/Stress.pdf",
    },
    {
      id: 2,
      label: "Phytopathogenic Enterobacteria, the Conserved Core, and the Oxygen Response: A Summary",
      docHref: "../../public/documents/Regulon.pdf",
    },
    {
      id: 3,
      label: "Race to Face: Contact Zones in the Writing Fellow Conference",
      docHref: "../../public/documents/Race2Face.pdf",
    },
    {
      id: 4,
      label: "Effects of Graded Treatment with Phthalates, 4-Alkylphenols, and 17α-ethynylestradiol on Feminization of Male Fish",
      docHref: "../../public/documents/Xeno.pdf",
    },
    {
      id: 5,
      label: "Meow Meow",
      docHref: "../../public/documents/MeowMeow.pdf",
    },
    {
      id: 6,
      label: "Infinite Monkey Theorem",
      docHref: "../../public/documents/Infinite.pdf",
    },
    {
      id: 7,
      label: "Boom",
      docHref: "../../public/documents/Boom.pdf",
    },
  ];
  const handleDocClick = (docHref) => {
    setSelectedDoc([{ uri: docHref }]);
  };

  return (
    <section className="card portfoliocard">
      <h2>Here's some of my technical and creative writing:</h2>
      <div className="container">
        <div className="row">
          {writtenList.map((written) => (
            <Written
              key={written.id}
              written={written}
              onClick={handleDocClick}
            />
          ))}
        </div>
      </div>
      {selectedDoc && (
        <div className="doc-viewer-container">
          <DocViewer
            pluginRenderers={DocViewerRenderers}
            documents={selectedDoc}
          />
        </div>
      )}
    </section>
  );
}
