import os
import sys
import traceback
from pathlib import Path
from docling.document_converter import DocumentConverter

def convert_pdf_to_md(pdf_path, output_dir):
    try:
        pdf_path = Path(pdf_path)
        if not pdf_path.exists():
            print(f"Erro: Arquivo não encontrado: {pdf_path}")
            return

        print(f"🚀 Iniciando conversão de alta fidelidade: {pdf_path.name}")
        
        # Inicializa o conversor do Docling
        converter = DocumentConverter()
        
        # Realiza a conversão
        result = converter.convert(str(pdf_path))
        
        # Extrai o conteúdo em Markdown
        md_content = result.document.export_to_markdown()
        
        # Define o nome do arquivo de saída
        output_file = Path(output_dir) / f"{pdf_path.stem}.md"
        
        # Salva o arquivo
        with open(output_file, "w", encoding="utf-8") as f:
            f.write(md_content)
            
        print(f"✅ Sucesso! O arquivo foi convertido e salvo em:\n{output_file}")
        
    except Exception as e:
        print(f"❌ Erro durante a conversão: {e}")
        traceback.print_exc()

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Uso: python converter_pdf.py <arquivo.pdf> <diretorio_saida>")
    else:
        convert_pdf_to_md(sys.argv[1], sys.argv[2])
