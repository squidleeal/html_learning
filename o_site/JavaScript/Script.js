document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const preview = document.getElementById('preview');

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        };

        reader.readAsDataURL(file);
    } else {
        preview.src = '';
        preview.style.display = 'none';
    }
});

document.getElementById('checkButton').addEventListener('click', function() {
const jegue = document.getElementById('jegue'); // Obtém o checkbox pelo ID

if (jegue.checked) {
    alert('Você é uma pessoa incrível, nunca desista de ser quem você é');
} else {
    alert('Você não terminou de preencher tudo');
}
});