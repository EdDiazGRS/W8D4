document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('create-form');
    const titleInput = document.getElementById('title');
    const contentInput = document.getElementById('content');
    const entriesList = document.getElementById('entries-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = titleInput.value.trim();
        const content = contentInput.value.trim();

        if (title && content) {
            createEntry(title, content);
            titleInput.value = '';
            contentInput.value = '';
        } else {
            alert('Please enter both title and content.');
        }
    });

    function createEntry(title, content) {
        const entry = document.createElement('li');
        entry.innerHTML = `
            <h3>${title}</h3>
            <p>${content}</p>
        `;
        entriesList.appendChild(entry);
    }
});
