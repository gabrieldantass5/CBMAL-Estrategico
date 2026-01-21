#!/usr/bin/env python3
"""
Extrator aprimorado de PDFs da pasta Taxa de Bombeiros
Extrai cada PDF para um arquivo texto separado
"""
import pdfplumber
import os
from pathlib import Path

pasta = Path(r"c:\Users\D_A_N\OneDrive\Desktop\Planejamento Estratégico - CBMAL\07_Taxa_de_Bombeiros")
output_file = pasta / "_ANALISE_COMPLETA.txt"

with open(output_file, 'w', encoding='utf-8') as out:
    for arquivo in sorted(pasta.glob("*.pdf")):
        out.write(f"\n{'='*100}\n")
        out.write(f"📄 ARQUIVO: {arquivo.name}\n")
        out.write(f"{'='*100}\n\n")
        try:
            with pdfplumber.open(arquivo) as pdf:
                for i, page in enumerate(pdf.pages):
                    texto = page.extract_text()
                    if texto:
                        out.write(f"\n--- Página {i+1} ---\n")
                        out.write(texto)
                        out.write("\n")
        except Exception as e:
            out.write(f"[ERRO] Não foi possível ler: {e}\n")

print(f"✅ Análise salva em: {output_file}")
print(f"📊 Tamanho do arquivo: {output_file.stat().st_size / 1024:.2f} KB")
