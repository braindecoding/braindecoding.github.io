document.getElementById('contactBtn').addEventListener('click', function() {
    alert('Thank you for your interest! Please send us an email at awangga@gmail.com.');
});

document.querySelectorAll('.btn-show-bibtex').forEach(button => {
    button.addEventListener('click', () => {
        const bibtexEntry = button.nextElementSibling;
        bibtexEntry.style.display = bibtexEntry.style.display === 'none' ? 'block' : 'none';
    });
});
