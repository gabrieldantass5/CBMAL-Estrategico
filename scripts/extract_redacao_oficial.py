#!/usr/bin/env python3
import pdfplumber
import os

pasta = r"c:\Users\D_A_N\OneDrive\Desktop\Planejamento Estratégico - CBMAL\04_Normatizacao_e_Modelos\Redação Oficial - CBMAL"
saida = os.path.join(pasta, "_ANALISE_REDACAO.txt")

with open(saida, "w", encoding="utf-8") as out:
    for arquivo in os.listdir(pasta):
        if arquivo.endswith(".pdf"):
            caminho = os.path.join(pasta, arquivo)
            out.write(f"\n{'='*100}\n📄 ARQUIVO: {arquivo}\n{'='*100}\n\n")
            try:
                with pdfplumber.open(caminho) as pdf:
                    for i, page in enumerate(pdf.pages):
                        texto = page.extract_text()
                        if texto:
                            out.write(f"\n--- Página {i+1} ---\n{texto}\n")
            except Exception as e:
                out.write(f"ERRO: {e}\n")

print(f"Extração concluída: {saida}")
