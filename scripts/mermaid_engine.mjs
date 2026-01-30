import { renderMermaid, renderMermaidAscii, THEMES } from 'beautiful-mermaid';
import fs from 'fs';
import path from 'path';

/**
 * CBMAL Mermaid Engine
 * Script para renderizar diagramas estratégicos com alta qualidade visual.
 */

async function main() {
    const args = process.argv.slice(2);
    if (args.length < 1) {
        console.log("Uso: node scripts/mermaid_engine.mjs <arquivo_ou_string> [tema] [formato: svg|ascii]");
        process.exit(1);
    }

    let input = args[0];
    const themeName = args[1] || 'default';
    const format = args[2] || 'svg';

    // Se o input for um arquivo, lê o conteúdo
    let mermaidText = input;
    if (fs.existsSync(input)) {
        mermaidText = fs.readFileSync(input, 'utf-8');
    }

    const theme = THEMES[themeName] || THEMES.default;

    try {
        if (format === 'ascii') {
            const ascii = renderMermaidAscii(mermaidText);
            console.log(ascii);
        } else {
            const svg = await renderMermaid(mermaidText, { theme });
            const outputPath = `diagram_${Date.now()}.svg`;
            fs.writeFileSync(outputPath, svg);
            console.log(`✅ Diagrama renderizado com sucesso: ${outputPath}`);
        }
    } catch (error) {
        console.error("❌ Erro ao renderizar diagrama:", error.message);
        process.exit(1);
    }
}

main();
