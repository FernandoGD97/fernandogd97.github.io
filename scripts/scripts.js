// scripts.js

// Alternar la visibilidad de una sección
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
        section.classList.add('visible');
    } else {
        section.classList.remove('visible');
        section.classList.add('hidden');
    }
}

// Filtrar repositorios en la tabla
function filterRepos() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const tableRows = document.querySelectorAll("#reposTable tbody tr");

    tableRows.forEach(row => {
        const repoName = row.cells[0].innerText.toLowerCase();
        const repoDesc = row.cells[1].innerText.toLowerCase();
        const techTags = row.cells[2].innerText.toLowerCase();

        if (repoName.includes(searchInput) || repoDesc.includes(searchInput) || techTags.includes(searchInput)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}
