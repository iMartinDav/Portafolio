import React, { useState } from "react"; // Removed 'useEffect'
import { Container, Row } from "react-bootstrap"; // Removed 'Col'
import Button from "react-bootstrap/Button";
import { AiOutlineDownload, AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { View, StyleSheet } from "@react-pdf/renderer";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Particle from "../Particle";
import resumePDF from "../../Assets/Software_Engineer_Martin_DAVILA.pdf";

const RESUME_LINK =
  "https://drive.google.com/file/d/19JNK4Qntbu6HV8AFek9tLsvT0xBIBWpu/view?usp=sharing";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const styles = StyleSheet.create({
  section: {
    width: 200,
    "@media (max-width: 400px)": {
      width: 300,
    },
    "@media (orientation: landscape)": {
      width: 400,
    },
  },
});

const DownloadButton = () => (
  <Button
    variant="primary"
    href={RESUME_LINK}
    target="_blank"
    style={{ maxWidth: "250px" }}
  >
    <AiOutlineDownload />
    &nbsp;Download CV
  </Button>
);

function PDFViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= numPages) {
      setPageNumber(newPage);
    }
  };

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <DownloadButton />
      </Row>

      <Row
        className="resume"
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100% - 50px)",
          bottom: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            height: "100%",
          }}
        >
          <Document file={resumePDF} onLoadSuccess={onDocumentLoadSuccess} removeText={true}>
            <Page
              size="A4"
              pageNumber={pageNumber}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              width={1000}
              height={"15in"}
              style={styles.page}
              dpi={150}
            >
              <View style={styles.section}></View>
            </Page>
          </Document>
        </div>
      </Row>

      <Row style={{ justifyContent: "center", position: "relative" }}>
        <p>Page {pageNumber} of {numPages}</p>
      </Row>

      <Row style={{ justifyContent: "center", position: "relative" }}>
        <div className="pagination-buttons">
          <Button
            variant="primary"
            onClick={() => handlePageChange(pageNumber - 1)}
            disabled={pageNumber === 1}
            style={{ borderRadius: "50%", padding: "0.5rem", marginRight: "1rem" }}
          >
            <AiOutlineArrowLeft />
          </Button>
          <Button
            variant="primary"
            onClick={() => handlePageChange(pageNumber + 1)}
            disabled={pageNumber === numPages}
            style={{ borderRadius: "50%", padding: "0.5rem" }}
          >
            <AiOutlineArrowRight />
          </Button>
        </div>
      </Row>
    </Container>
  );
}

function ResumeNew() {
  return <PDFViewer />;
}

export default ResumeNew;
