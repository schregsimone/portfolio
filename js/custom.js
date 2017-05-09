/* Funktion um per Klick zwischen Menu und Close zu wechseln*/
function replace(hide, show) {
    document.getElementById(hide).style.display = "none";
    document.getElementById(show).style.display = "block";
}

/* Set the height of the about tab to 100% */
function openNav() {
    document.getElementById("about-tab").style.height = "100%";
    document.getElementById("social-icons").style.visibility = "visible";
}

/* Set the height of the about tab to 0 */
function closeNav() {
    document.getElementById("about-tab").style.height = "0";
    document.getElementById("social-icons").style.visibility = "hidden";
}
