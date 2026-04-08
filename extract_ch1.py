import pdfplumber

pdf_path = "/Users/shivam/aiworkspace/nismresearch/study material/NISM-Series-XII Securities Markets FoundationCertification Examination_Dec 2025.pdf"

with pdfplumber.open(pdf_path) as pdf:
    print(f"Total pages: {len(pdf.pages)}")
    for i in range(min(35, len(pdf.pages))):
        page = pdf.pages[i]
        text = page.extract_text()
        if text:
            print(f"\n===== PAGE {i+1} =====")
            print(text)
