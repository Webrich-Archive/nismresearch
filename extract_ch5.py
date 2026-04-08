from pypdf import PdfReader

reader = PdfReader('/Users/shivam/aiworkspace/nismresearch/study material/NISM-Series-XII Securities Markets FoundationCertification Examination_Dec 2025.pdf')

with open('/Users/shivam/aiworkspace/nismresearch/ch5_text.txt', 'w') as f:
    for i in range(160, 200):
        text = reader.pages[i].extract_text()
        f.write(f'=== PAGE {i+1} ===\n')
        f.write(text)
        f.write('\n\n')
    print("Done extracting Chapter 5")
