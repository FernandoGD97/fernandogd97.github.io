
function toggleSection(sectionId) {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.classList.add("hidden");
        section.classList.remove("visible");
    });

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove("hidden");
        selectedSection.classList.add("visible");
    }
}

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

const journalPublications  = [
    {
        title: "Maintaining flexibility in smart grid consumption through deep learning and deep reinforcement learning",
        authors: "F Gallego, C Martín, M Díaz, D Garrido",
        journal: "Energy and AI 13, 100241",
        year: 2023,
        category: "Q1-Computer Science"
    },
    {
        title: "Recognition and normalization of multilingual symptom entities using in-domain-adapted BERT models and classification layers",
        authors: "F Gallego, FJ Veredas",
        journal: "Database 2024, baae087",
        year: 2024,
        category: "Q1-Computational Biology"
    },
];

const conferencePublications = [
    {
        title: "Clinlinker: Medical entity linking of clinical concept mentions in spanish",
        authors: "F Gallego, G López-García, L Gasco-Sánchez, M Krallinger, FJ Veredas",
        journal: "International Conference on Computational Science, 266-280",
        year: 2024,
    },
    {
        title: "ICB-UMA at BioCreative VIII@ AMIA 2023 Task 2 SYMPTEMIST (Symptom TExt Mining Shared Task)",
        authors: "F Gallego, FJ Veredas",
        journal: "Proceedings of the BioCreative VIII Challenge and Workshop: Curation and Evaluation in the era of Generative Models",
        year: 2023,
    },
    {
        title: "Artificial Intelligence for Natural Language Processing of Clinical Text in Spanish for Real-World-Data Analysis (Text2RWD Project)",
        authors: "FJ Veredas, F Gallego, G López-García, N Ribelles, E Alba, JM Jerez",
        journal: "SEPLN (Projects and Demonstrations)",
        year: 2024,
    },
    {
        title: "Clasificación de Historias Clínicas Reales según CIE-10-ES para Localización de Neoplasias mediante Modelos Transformer",
        authors: "A Pascual-Mellado, F Gallego, N Ribelles, JM Jerez, FJ Moreno-Barea",
        journal: "XX Conferencia de la Asociación Española para la Inteligencia Artificial",
        year: 2024,
    },
];

const otherPublications = [
    {
        title: "Aceleración en GPU del procesamiento de vóxeles en tiempo real",
        authors: "F Gallego",
        journal: "University of Malaga",
        year: 2019
    },
];

function renderPublications() {
    const journalList = document.getElementById("journalPublications");
    const conferenceList = document.getElementById("conferencePublications");
    const otherList = document.getElementById("otherPublications");

    const sortPublications = pubs =>
        pubs.sort((a, b) => {
            if (b.year !== a.year) {
                return b.year - a.year; 
            }
            return b.title.localeCompare(a.title, undefined, { sensitivity: "base" }) * -1; 
        });

    journalList.innerHTML = "";
    sortPublications(journalPublications).forEach(pub => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${pub.title}</strong>, ${pub.authors}, ${pub.journal}, ${pub.year}, <em>${pub.category}</em>`;
        journalList.appendChild(listItem);
    });

    conferenceList.innerHTML = "";
    sortPublications(conferencePublications).forEach(pub => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${pub.title}</strong>, ${pub.authors}, ${pub.journal}, ${pub.year}</em>`;
        conferenceList.appendChild(listItem);
    });

    otherList.innerHTML = "";
    sortPublications(otherPublications).forEach(pub => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${pub.title}</strong>, ${pub.authors}, ${pub.journal}, ${pub.year}</em>`;
        otherList.appendChild(listItem);
    });
}

function toggleMenu() {
    const navMenu = document.querySelector(".nav-menu");
    navMenu.classList.toggle("active");
}

function closeMenuOnSelection() {
    const navMenu = document.querySelector(".nav-menu");
    if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
    }
}

document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", closeMenuOnSelection);
});
document.addEventListener("DOMContentLoaded", renderPublications);