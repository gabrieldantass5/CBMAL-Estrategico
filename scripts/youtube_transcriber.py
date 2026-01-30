#!/usr/bin/env python3
import os
import sys
import whisper
import yt_dlp
import imageio_ffmpeg
import subprocess
from pathlib import Path
from datetime import datetime

def setup_ffmpeg():
    ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
    ffmpeg_dir = os.path.dirname(ffmpeg_exe)
    os.environ["PATH"] = ffmpeg_dir + os.pathsep + os.environ["PATH"]

def download_audio(url, output_path):
    setup_ffmpeg()
    print(f"📥 Baixando áudio do YouTube: {url}...")
    ydl_opts = {
        'format': 'm4a/bestaudio/best',
        'outtmpl': str(output_path / '%(title)s.%(ext)s'),
        'postprocessors': [{
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'm4a',
        }],
        'quiet': True,
        'no_warnings': True,
        'nocheckcertificate': True,
        'user_agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'extractor_args': {'youtube': {'player_client': ['android']}},
    }
    
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        info = ydl.extract_info(url, download=True)
        filename = ydl.prepare_filename(info)
        # Ensure extension is m4a even if download logic says otherwise
        base, _ = os.path.splitext(filename)
        return Path(base + ".m4a"), info.get('title', 'Video_YouTube')

def transcribe_and_format(audio_path, video_title, url):
    print(f"🚀 Carregando modelo Whisper (base)...")
    model = whisper.load_model("base")
    
    print(f"🎙️ Transcrevendo: {video_title}...")
    result = model.transcribe(str(audio_path), language="pt")
    text = result["text"].strip()
    
    date_str = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
    
    markdown_content = f"""# 📺 Transcrição: {video_title}
**Fonte**: [{url}]({url})
**Data da Transcrição**: {date_str}

---

## 🤖 AUTO-RESUMO (PONTOS CHAVE)
> *Nota: Ative o comando `/executar` para que a IA analise este texto e preencha este campo com insights estratégicos.*

---

## 💡 IDEIAS PARA O ECOSSISTEMA CBMAL
> *Espaço reservado para insights sobre como aplicar estes conceitos no Cockpit Estratégico.*

---

## 📝 CONTEÚDO ÍNTEGRO
{text}

---
*Gerado automaticamente pelo Cockpit Estratégico CBMAL.*
"""
    return markdown_content

def main():
    if len(sys.argv) < 2:
        print("❌ Uso: python youtube_transcriber.py [LINK_DO_YOUTUBE]")
        return

    url = sys.argv[1]
    inbox_dir = Path(r"c:\Users\D_A_N\OneDrive\Desktop\Planejamento Estratégico - CBMAL\Inbox")
    temp_dir = inbox_dir / "temp_audio"
    temp_dir.mkdir(exist_ok=True)

    try:
        audio_file, title = download_audio(url, temp_dir)
        
        md_content = transcribe_and_format(audio_file, title, url)
        
        # Limpa o nome do arquivo para o windows
        safe_title = "".join([c for c in title if c.isalnum() or c in (' ', '-', '_')]).strip()
        output_file = inbox_dir / f"TRANSCRICAO_YT_{safe_title.replace(' ', '_')}.md"
        
        with open(output_file, "w", encoding="utf-8") as f:
            f.write(md_content)
        
        print(f"✅ Sucesso! Arquivo gerado: {output_file}")
        
        # Cleanup temp audio
        if audio_file.exists():
            audio_file.unlink()
        if temp_dir.exists() and not any(temp_dir.iterdir()):
            temp_dir.rmdir()

    except Exception as e:
        print(f"❌ Erro no processo: {e}")

if __name__ == "__main__":
    main()
