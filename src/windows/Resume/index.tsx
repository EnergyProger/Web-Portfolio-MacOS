import { pdfjs, Document, Page } from "react-pdf";
import {
  RESUME_WINDOW_PDF_PAGE_NUMBER,
  RESUME_WINDOW_PDF_PAGE_SCALE,
} from "@constants";
import WindowWrapper from "@hoc/WindowWrapper";
import ResumeHeader from "./ResumeHeader";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerPort = new Worker(
  new URL("pdfjs-dist/build/pdf.worker.mjs", import.meta.url),
  { type: "module" }
);

const Resume = () => {
  return (
    <>
      <ResumeHeader />
      <Document
        file="files/resume.pdf"
        loading={<div>Loading resume...</div>}
        error={<div>Failed to load resume. Please try again.</div>}
      >
        <Page
          pageNumber={RESUME_WINDOW_PDF_PAGE_NUMBER}
          scale={RESUME_WINDOW_PDF_PAGE_SCALE}
          renderTextLayer
          renderAnnotationLayer
        />
      </Document>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
