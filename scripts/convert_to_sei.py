import markdown
import sys
import os
import re

def convert_to_html(md_path):
    try:
        with open(md_path, 'r', encoding='utf-8') as f:
            text = f.read()
        
        # 1. Detecção de blocos Mermaid antes da conversão para Markdown
        # Substitui blocos ```mermaid ... ``` por um aviso visual em HTML
        mermaid_pattern = re.compile(r'```mermaid\s+(.*?)\s+```', re.DOTALL)
        warning_msg = (
            '<div style="border: 2px dashed #cc0000; padding: 15px; margin: 20px 0; background-color: #fff4f4; text-align: center;">'
            '<p style="color: #cc0000; font-weight: bold; margin: 0;">⚠️ DIAGRAMA MERMAID DETECTADO</p>'
            '<p style="color: #333; font-size: 10pt; margin: 5px 0 0 0;">O Google Docs não processa diagramas automáticos. '
            'Por favor, copie o diagrama como imagem (Right-click -> Copy Snapshot) no Obsidian e cole aqui.</p>'
            '</div>'
        )
        text = mermaid_pattern.sub(warning_msg, text)

        # 2. Converter Markdown para HTML
        html_body = markdown.markdown(text, extensions=['extra', 'nl2br'])
        
        # 3. Envelopar em um HTML com CSS otimizado para Google Docs/SEI
        html_content = f"""
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Documento Estratégico - CBMAL</title>
            <style>
                body {{
                    font-family: Arial, Helvetica, sans-serif;
                    font-size: 12pt;
                    line-height: 1.5;
                    color: #000000;
                    max-width: 210mm;
                    margin: 20px auto;
                    padding: 20px;
                    background-color: #ffffff;
                }}
                p {{ margin-bottom: 0px; margin-top: 10px; text-align: justify; }}
                h1, h2, h3 {{ color: #000000; margin-top: 25px; margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 5px; }}
                ul, ol {{ margin-top: 5px; margin-bottom: 5px; }}
                li {{ margin-bottom: 5px; }}
                strong {{ font-weight: bold; }}
                hr {{ border: 1px solid #ccc; margin: 25px 0; }}
                
                /* Estilização Elegante para Tabelas (Pronto para Google Docs) */
                table {{
                    border-collapse: collapse;
                    width: 100%;
                    margin: 20px 0;
                    font-size: 11pt;
                }}
                th {{
                    background-color: #f2f2f2;
                    border: 1px solid #999;
                    padding: 10px;
                    text-align: left;
                    font-weight: bold;
                }}
                td {{
                    border: 1px solid #ccc;
                    padding: 8px;
                    vertical-align: top;
                }}
                tr:nth-child(even) {{
                    background-color: #fafafa;
                }}
            </style>
        </head>
        <body>
            {html_body}
        </body>
        </html>
        """
        
        out_path = md_path.replace('.md', '.html')
        with open(out_path, 'w', encoding='utf-8') as f:
            f.write(html_content)
        
        print(f"Sucesso: {out_path}")
    except Exception as e:
        print(f"Erro ao converter {md_path}: {str(e)}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        for file_path in sys.argv[1:]:
            # Resolver o caminho para lidar com aspas ou barras de sistema
            abs_path = os.path.abspath(file_path)
            convert_to_html(abs_path)
    else:
        print("Uso: python scripts/convert_to_sei.py arquivo1.md arquivo2.md")
