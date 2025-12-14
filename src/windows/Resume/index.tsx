import { pdfjs, Document, Page } from "react-pdf";
import { RESUME_WINDOW_PDF_PAGE_NUMBER } from "@constants";
import WindowWrapper from "@hoc/WindowWrapper";
import ResumeHeader from "./ResumeHeader";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  return (
    <>
      <ResumeHeader />
      <Document file="files/resume.pdf">
        <Page
          pageNumber={RESUME_WINDOW_PDF_PAGE_NUMBER}
          renderTextLayer
          renderAnnotationLayer
        />
      </Document>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
