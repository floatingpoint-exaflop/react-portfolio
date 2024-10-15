import { useState } from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

export default function Written({ written, onClick }) {
  return (
    <div className="col-12 col-md-6 mb-4">
      <div className="card">
        <div className="card-body">
          <a href="#" onClick={() => onClick(written.docHref)} className="card-link">
            <span className="card-text">{written.label}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
