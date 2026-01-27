#!/usr/bin/env python3
import sys
import fitz  # PyMuPDF
import os
from pathlib import Path

def extract_text(pdf_path, output_file=None):
    """Extrai texto de um PDF único ou de uma pasta inteira."""
    path = Path(pdf_path)
    
    if path.is_file():
        _process_file(path, output_file)
    elif path.is_dir():
        _process_directory(path, output_file)
    else:
        print(f"❌ Erro: Caminho não encontrado: {pdf_path}")

def _process_file(file_path, output_file=None):
    try:
        doc = fitz.open(file_path)
        content = [f"\n{'='*80}\n📄 ARQUIVO: {file_path.name}\n{'='*80}\n"]
        
        for i, page in enumerate(doc):
            text = page.get_text("text")
            content.append(f"\n--- Página {i+1} ---\n{text}")
        
        output = "".join(content)
        
        if output_file:
            with open(output_file, 'a', encoding='utf-8') as f:
                f.write(output)
        else:
            print(output)
            
        doc.close()
    except Exception as e:
        print(f"❌ Erro ao processar {file_path.name}: {e}")

def _process_directory(dir_path, output_file=None):
    print(f"📂 Processando diretório: {dir_path}")
    if not output_file:
        output_file = dir_path / f"_ANALISE_{dir_path.name.upper()}.txt"
    
    # Limpar arquivo se existir
    if os.path.exists(output_file):
        os.remove(output_file)
        
    pdf_files = sorted(list(dir_path.glob("*.pdf")))
    for pdf in pdf_files:
        print(f"🔍 Lendo: {pdf.name}")
        _process_file(pdf, output_file)
    
    print(f"✅ Extração concluída. Salvo em: {output_file}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Uso: python scripts/pdf_engine.py <arquivo_ou_pasta> [arquivo_saida]")
    else:
        out = sys.argv[2] if len(sys.argv) > 2 else None
        extract_text(sys.argv[1], out)
