"""
Script de Conversão: Markdown para PDF Estilizado (E-book CBMAL)
Utiliza pdfkit/wkhtmltopdf com identidade visual do CBMAL.
"""

import markdown
import pdfkit
from pathlib import Path

# Caminhos
BASE_DIR = Path(r"c:\Users\D_A_N\OneDrive\Desktop\Planejamento Estratégico - CBMAL")
MANUAL_MD = BASE_DIR / "08_Manual_EPD_CBMAL" / "Manual_EPD_CBMAL.md"
OUTPUT_PDF = BASE_DIR / "08_Manual_EPD_CBMAL" / "Manual_EPD_CBMAL_v1.0.pdf"

# CSS com identidade visual do CBMAL
CSS_CBMAL = """
<style>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;600;700;800&display=swap');

body {
    font-family: 'Exo 2', 'Segoe UI', Arial, sans-serif;
    font-size: 11pt;
    line-height: 1.7;
    color: #333;
    max-width: 100%;
    margin: 0;
    padding: 40px;
    background: white;
}

/* Títulos */
h1 {
    font-size: 26pt;
    font-weight: 800;
    color: #C10A0A;
    border-bottom: 4px solid #FFCC00;
    padding-bottom: 12px;
    margin-top: 50px;
    margin-bottom: 25px;
    page-break-before: always;
}

h1:first-of-type {
    page-break-before: avoid;
    text-align: center;
    border-bottom: none;
    font-size: 32pt;
}

h2 {
    font-size: 16pt;
    font-weight: 700;
    color: #C10A0A;
    margin-top: 35px;
    margin-bottom: 15px;
    border-left: 5px solid #FFCC00;
    padding-left: 15px;
    background: linear-gradient(90deg, #fff5e6 0%, white 100%);
    padding-top: 8px;
    padding-bottom: 8px;
}

h3 {
    font-size: 13pt;
    font-weight: 600;
    color: #333;
    margin-top: 25px;
    margin-bottom: 12px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 5px;
}

h4 {
    font-size: 11pt;
    font-weight: 600;
    color: #555;
    margin-top: 20px;
}

/* Parágrafos */
p {
    margin-bottom: 12px;
    text-align: justify;
}

/* Listas */
ul, ol {
    margin-left: 25px;
    margin-bottom: 15px;
}

li {
    margin-bottom: 6px;
}

/* Links */
a {
    color: #C10A0A;
    text-decoration: none;
}

/* Tabelas */
table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 10pt;
    page-break-inside: avoid;
}

th {
    background: linear-gradient(135deg, #C10A0A 0%, #8B0000 100%);
    color: white;
    font-weight: 600;
    padding: 12px 10px;
    text-align: left;
    border: 1px solid #C10A0A;
}

td {
    padding: 10px;
    border: 1px solid #ddd;
    background-color: #fafafa;
}

tr:nth-child(even) td {
    background-color: #fff8e1;
}

/* Código */
pre {
    background: #1e1e1e;
    color: #d4d4d4;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: 'Consolas', 'Monaco', monospace;
    font-size: 9pt;
    border-left: 4px solid #FFCC00;
}

code {
    font-family: 'Consolas', 'Monaco', monospace;
    font-size: 9pt;
    background-color: #f5f5f5;
    padding: 2px 6px;
    border-radius: 3px;
    color: #C10A0A;
}

pre code {
    background: none;
    padding: 0;
    color: #d4d4d4;
}

/* Blockquotes (Analogias) */
blockquote {
    background: linear-gradient(135deg, #fff8e1 0%, #ffe0b2 100%);
    border-left: 5px solid #FFCC00;
    margin: 20px 0;
    padding: 15px 20px;
    font-style: italic;
    border-radius: 0 12px 12px 0;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
}

blockquote strong {
    color: #C10A0A;
    font-style: normal;
}

/* Divisores */
hr {
    border: none;
    height: 3px;
    background: linear-gradient(90deg, #C10A0A, #FFCC00, #C10A0A);
    margin: 35px 0;
    border-radius: 2px;
}

/* Checkboxes visualmente */
li p:first-child {
    display: inline;
}

/* Seções especiais */
.cover {
    text-align: center;
    padding: 100px 0;
}

/* Footer */
.footer {
    text-align: center;
    font-size: 10pt;
    color: #666;
    margin-top: 50px;
    padding-top: 20px;
    border-top: 2px solid #FFCC00;
}

/* Emojis */
p, li, h1, h2, h3, h4, th, td {
    line-height: 1.6;
}

/* Page breaks */
h1 {
    page-break-before: always;
}

h1:first-child, h1:first-of-type {
    page-break-before: avoid;
}

/* Print optimizations */
@media print {
    body {
        padding: 0;
    }
    pre {
        white-space: pre-wrap;
        word-wrap: break-word;
    }
}
</style>
"""

def convert_md_to_pdf():
    print("📖 Lendo arquivo Markdown...")
    md_content = MANUAL_MD.read_text(encoding='utf-8')
    
    print("🎨 Convertendo para HTML com estilo CBMAL...")
    md = markdown.Markdown(extensions=['tables', 'fenced_code', 'toc', 'nl2br'])
    html_body = md.convert(md_content)
    
    # HTML completo
    full_html = f"""
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Manual EPD-CBMAL</title>
        {CSS_CBMAL}
    </head>
    <body>
        {html_body}
    </body>
    </html>
    """
    
    # Salvar HTML intermediário
    html_file = BASE_DIR / "08_Manual_EPD_CBMAL" / "Manual_EPD_CBMAL.html"
    html_file.write_text(full_html, encoding='utf-8')
    print(f"📄 HTML intermediário salvo: {html_file}")
    
    print("📄 Gerando PDF...")
    
    # Configurações do wkhtmltopdf
    options = {
        'page-size': 'A4',
        'margin-top': '20mm',
        'margin-right': '15mm',
        'margin-bottom': '20mm',
        'margin-left': '20mm',
        'encoding': 'UTF-8',
        'enable-local-file-access': None,
        'footer-center': '[page] / [topage]',
        'footer-font-size': '9',
        'footer-font-name': 'Segoe UI',
        'header-center': 'Manual EPD-CBMAL',
        'header-font-size': '8',
        'header-font-name': 'Segoe UI',
        'header-spacing': '5',
        'footer-spacing': '5',
    }
    
    # Caminho do wkhtmltopdf
    config = pdfkit.configuration(wkhtmltopdf=r'C:\Program Files\wkhtmltopdf\bin\wkhtmltopdf.exe')
    
    pdfkit.from_file(str(html_file), str(OUTPUT_PDF), options=options, configuration=config)
    
    print(f"✅ PDF gerado com sucesso!")
    print(f"📍 Local: {OUTPUT_PDF}")
    print(f"📊 Tamanho: {OUTPUT_PDF.stat().st_size / 1024:.1f} KB")

if __name__ == "__main__":
    convert_md_to_pdf()
