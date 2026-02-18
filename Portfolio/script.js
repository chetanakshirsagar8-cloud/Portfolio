function openHome() {
    document.getElementById('home-page').style.display = 'block';
    document.getElementById('about-page').style.display = 'none';
    document.getElementById('projects-page').style.display = 'none';
}

function openAbout() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('about-page').style.display = 'block';
    document.getElementById('projects-page').style.display = 'none';
}

function openProjects() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('about-page').style.display = 'none';
    document.getElementById('projects-page').style.display = 'block';
}

// Nav links properly work honyasathi he add kara
function showHome() { openHome(); }