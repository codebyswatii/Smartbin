// Injects the shared footer.html into the current page
function injectSharedFooter() {
    // Use relative path for compatibility
    fetch('footer.html')
        .then(response => {
            if (!response.ok) throw new Error('Not found');
            return response.text();
        })
        .then(html => {
            document.querySelectorAll('footer.site-footer').forEach(el => el.remove());
            const footerContainer = document.createElement('div');
            footerContainer.innerHTML = html;
            document.body.appendChild(footerContainer);
        });
}
window.addEventListener('DOMContentLoaded', injectSharedFooter);