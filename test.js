const urlParameters = new URL(window.location).searchParams;
const id = urlParameters.get('id');

const form = document.querySelector('form');
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const file = document.getElementById('file');
    const data = new FormData();
    data.append('file', file.files[0]);

    try {
        const response = await fetch('./upload', {
            method: 'POST',
            body: data
        });
        if (response.ok) {
            console.log('uploaded');
        } else {
            console.error('failed', response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
});