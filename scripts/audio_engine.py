#!/usr/bin/env python3
import os
import sys
import whisper
import imageio_ffmpeg
from pathlib import Path
import subprocess

def transcribe():
    # Adiciona o binário do ffmpeg ao PATH
    ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
    ffmpeg_dir = os.path.dirname(ffmpeg_exe)
    os.environ["PATH"] = ffmpeg_dir + os.pathsep + os.environ["PATH"]
    
    # Verifica se o ffmpeg está acessível
    try:
        subprocess.run(["ffmpeg", "-version"], capture_output=True, check=True)
        print("✅ ffmpeg detectado no PATH.")
    except Exception as e:
        print(f"❌ Erro ao detectar ffmpeg: {e}")
        return

    inbox_dir = Path(r"c:\Users\D_A_N\OneDrive\Desktop\Planejamento Estratégico - CBMAL\Inbox")
    output_file = inbox_dir / "TRANSCRICAO_MAJ_MACEDO.md"
    
    print("🚀 Carregando modelo Whisper (base)...")
    model = whisper.load_model("base")
    
    files = sorted(list(inbox_dir.glob("*.ogg")))
    if not files:
        print("❌ Nenhum arquivo .ogg encontrado na Inbox.")
        return

    full_transcription = [f"# 🎤 Transcrição: Áudios Maj Macedo\n**Data da Sessão**: 25/01/2026\n"]
    
    for i, file_path in enumerate(files, 1):
        print(f"🎙️ Transcrevendo ({i}/{len(files)}): {file_path.name}...")
        try:
            # Whisper internally calls ffmpeg
            result = model.transcribe(str(file_path), language="pt")
            text = result["text"].strip()
            full_transcription.append(f"## 📝 Áudio {i} ({file_path.name})\n{text}\n")
        except Exception as e:
            print(f"❌ Erro no Áudio {i}: {e}")
            full_transcription.append(f"## 📝 Áudio {i} ({file_path.name})\n⚠️ Erro na transcrição: {str(e)}\n")

    with open(output_file, "w", encoding="utf-8") as f:
        f.write("\n".join(full_transcription))
    
    print(f"✅ Transcrição concluída! Arquivo gerado: {output_file}")

if __name__ == "__main__":
    transcribe()
