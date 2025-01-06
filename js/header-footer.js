function loadHeaderFooter() {
    const headerElement = document.getElementById("header");
    const footerElement = document.getElementById("footer");

    if (headerElement) {
        fetch("components/header.html")
            .then(response => response.text())
            .then(data => {
                headerElement.innerHTML = data;
            })
            .catch(error => console.error("Error loading header:", error));
    } else {
        console.error("Header element not found in the DOM!");
    }

    if (footerElement) {
        fetch("components/footer.html")
            .then(response => response.text())
            .then(data => {
                footerElement.innerHTML = data;
            })
            .catch(error => console.error("Error loading footer:", error));
    } else {
        console.error("Footer element not found in the DOM!");
    }
}

document.addEventListener("DOMContentLoaded", loadHeaderFooter);


