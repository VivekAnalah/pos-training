import React from 'react';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import Pppt from "../Assets/POSP_Training.pdf";

const PPTViewer = () => {
    const docs = [
       
        { uri: Pppt }, // Local File
      ];
  return (
    <div>
      <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
    </div>
  )
}

export default PPTViewer




