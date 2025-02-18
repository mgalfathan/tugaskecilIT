const links = [
    { name: 'Wisuda April 2025', url: 'https://www.wispril2025.wisudaitb.id' },
    { name: 'Wisuda Oktober 2024', url: 'https://www.wispril2025.wisudaitb.id' },
    { name: 'Wisuda April 2024', url: 'https://www.wispril2025.wisudaitb.id' },
    { name: 'Wisuda Oktober 2023', url: 'https://www.wispril2025.wisudaitb.id' }
];

const container = document.getElementById('links-container');

links.forEach(link => {
    const a = document.createElement('a');
    a.href = link.url;
    a.textContent = link.name;
    a.className = 'link';
    container.appendChild(a);
});
