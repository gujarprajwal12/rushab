function showPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach((page, index) => {
        if (index === pageNumber - 1) {
            page.style.display = 'block';
        } else {
            page.style.display = 'none';
        }
    });
}
