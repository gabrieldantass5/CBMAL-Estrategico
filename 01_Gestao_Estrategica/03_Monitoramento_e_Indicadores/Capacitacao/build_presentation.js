const pptxgen = require('pptxgenjs');
const html2pptx = require('../../../../Skills/pptx/scripts/html2pptx');
const path = require('path');

async function generate() {
    console.log("Iniciando geração da apresentação...");
    
    const pptx = new pptxgen();
    pptx.layout = 'LAYOUT_16x9';
    pptx.author = 'APO - CBMAL';
    pptx.title = 'Template RME';

    const slidesDir = path.join(__dirname, 'slides_html');
    const files = ['01_title.html', '02_pauta.html', '03_farol.html', '04_pcm.html'];

    for (const file of files) {
        console.log(`Processando slide: ${file}`);
        const filePath = path.join(slidesDir, file);
        
        try {
            await html2pptx(filePath, pptx);
        } catch (err) {
            console.error(`Erro ao processar ${file}:`, err);
        }
    }

    const outputFile = path.join(__dirname, 'Template_Apresentacao_RME.pptx');
    await pptx.writeFile({ fileName: outputFile });
    console.log(`Apresentação salva em: ${outputFile}`);
}

generate().catch(err => console.error("Erro fatal:", err));
