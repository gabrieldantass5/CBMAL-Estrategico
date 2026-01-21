import sys
import fitz  # PyMuPDF
import os

def extract_text_fast(pdf_path):
    """
    Extrai texto de um PDF de forma rápida e limpa usando PyMuPDF.
    Ideal para documentos oficiais, ofícios, portarias e despachos.
    """
    if not os.path.exists(pdf_path):
        print(f"Erro: Arquivo não encontrado: {pdf_path}")
        return

    try:
        doc = fitz.open(pdf_path)
        full_text = []
        
        print(f"--- LENDO ARQUIVO: {os.path.basename(pdf_path)} ({len(doc)} páginas) ---")
        
        for i, page in enumerate(doc):
            # Extrair texto preservando blocos
            text = page.get_text("text")
            
            # Cabeçalho de página para contexto
            header = f"\n=== PÁGINA {i+1} ===\n"
            full_text.append(header + text)
            
        final_output = "".join(full_text)
        
        # Verificação simples se o PDF é imagem (escaneado)
        if len(final_output.strip()) < 50:
             print("\n[ALERTA] Pouco texto detectado. Este PDF pode ser uma imagem (escaneado).")
             print("Sugestão: Solicite o uso de OCR ou ferramentas visuais para este arquivo.")
        else:
            print(final_output)
            
        doc.close()

    except Exception as e:
        print(f"Erro crítico ao ler PDF: {str(e)}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Uso: python scripts/read_pdf_fast.py <caminho_do_pdf>")
    else:
        extract_text_fast(sys.argv[1])
