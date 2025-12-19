import WindowControls from "@components/WindowControls";
import { Download } from "lucide-react";

const ResumeHeader = () => {
  return (
    <div className="window-header">
      <WindowControls target="resume" />
      <h2>Resume.pdf</h2>
      <a
        href="files/resume.pdf"
        download
        className="cursor-pointer"
        title="Download resume"
      >
        <Download className="icon" />
      </a>
    </div>
  );
};

export default ResumeHeader;
