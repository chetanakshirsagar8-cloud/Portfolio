function openSection(sectionId) {
    // 1. Hide all sections first
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // 2. Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (sectionId === 'projects') {
        selectedSection.style.display = 'block'; // Or 'grid'
    } else {
        selectedSection.style.display = 'block';
    }

    // 3. Scroll to top automatically
    window.scrollTo({ top: 0, behavior: 'smooth' });
}