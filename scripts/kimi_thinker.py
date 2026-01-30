import os
import requests
from dotenv import load_dotenv

# Carregar variáveis de ambiente com caminho absoluto
base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
dotenv_path = os.path.join(base_dir, '.env')
load_dotenv(dotenv_path)

class KimiThinker:
    def __init__(self):
        self.api_key = os.getenv("OPENROUTER_API_KEY")
        self.base_url = "https://openrouter.ai/api/v1"

    def ask_k25(self, prompt):
        """Chama o Kimi K2.5 via OpenRouter para raciocínio profundo."""
        if not self.api_key:
            return "❌ Erro: OPENROUTER_API_KEY não encontrada no arquivo .env"

        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {self.api_key}",
            "HTTP-Referer": "https://github.com/cbmal-estrategico", # Opcional: seu site
            "X-Title": "Cockpit CBMAL Antigravity" # Opcional: nome do app
        }

        payload = {
            "model": "moonshotai/kimi-k2.5", # Nome do modelo no OpenRouter
            "messages": [
                {"role": "system", "content": "Você é o módulo de raciocínio profundo (Thinking Mode) do Cockpit CBMAL. Foque em lógica pura, precisão e soluções complexas."},
                {"role": "user", "content": prompt}
            ],
            "temperature": 1.0 # Recomendado 1.0 para modelos de Thinking
        }

        try:
            response = requests.post(f"{self.base_url}/chat/completions", headers=headers, json=payload)
            response.raise_for_status()
            return response.json()['choices'][0]['message']['content']
        except Exception as e:
            error_detail = ""
            if hasattr(e, 'response') and e.response is not None:
                error_detail = f" - Detalhe: {e.response.text}"
            return f"❌ Erro na comunicação via OpenRouter: {str(e)}{error_detail}"

if __name__ == "__main__":
    import sys
    if len(sys.argv) < 2:
        print("Uso: python scripts/kimi_thinker.py 'Seu desafio de lógica'")
    else:
        thinker = KimiThinker()
        result = thinker.ask_k25(sys.argv[1])
        print(result)
