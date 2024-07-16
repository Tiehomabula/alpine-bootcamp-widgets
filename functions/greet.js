function greet(name) {
    return `Hello, nice to see you ${name}!`;
}
document.addEventListener('DOMContentLoaded', async () => {
    const langFiles = {
        en: 'en.json',
        sot: 'sot.json',
        zul:'zul.json'
    };

    const app = document.querySelector('[x-data]');
    const translations = {};

    app.addEventListener('lang-changed', async (event) => {
        const lang = event.detail.lang;
        const response = await fetch(langFiles[lang]);
        const data = await response.json();
        translations[lang] = data;
    });
});