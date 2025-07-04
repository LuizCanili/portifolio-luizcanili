/*Este código permite alternar entre um tema claro e um tema escuro.*/

// Seleciona o botão que vai ativar a mudança de tema
const themeToggleButton = document.getElementById('theme-toggle');

// Verifica se o botão existe na página atual
if (themeToggleButton) {
    // Adiciona um "ouvinte de evento" de clique ao botão
    themeToggleButton.addEventListener('click', () => {
        // Alterna a classe 'dark-mode' no elemento body
        document.body.classList.toggle('dark-mode');

        /* Salvar a preferência do usuário no armazenamento local do navegador
         para que o tema persista mesmo depois que o usuário fechar a página.*/
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}

// Verifica se o usuário já tinha uma preferência de tema salva ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});