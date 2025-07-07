
const blocks = [
    '01_section',
    '02_section',
    '03_section',
    '04_section',
    '05_section',
    '06_section',
    '07_section',
    '08_section',
    '09_section',
    '10_section',
    '11_section',
    '12_section',
    '13_section',
    '14_section',
    '15_section',
    '16_section',
    '17_section',
    '18_section',
    '19_section',
    'header',
    'footer',
];

async function loadBlock(blockName) {
    const placeholder = document.getElementById(`block_${blockName}`);

    if (!placeholder) {
        console.error(`Ошибка: Не найден div-слот с ID "block_${blockName}"`);
        return;
    }

    try {
        const response = await fetch(`blocks/${blockName}.html`);

        if (response.ok) {
            const html = await response.text();
            placeholder.innerHTML = html;
        } else {
            throw new Error(`Не удалось загрузить файл: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.error(`Ошибка при загрузке блока "${blockName}":`, error);
        placeholder.innerHTML = `<p style="color: red;">Не удалось загрузить блок: ${blockName}.html</p>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    Promise.all(blocks.map(blockName => loadBlock(blockName)));
});
