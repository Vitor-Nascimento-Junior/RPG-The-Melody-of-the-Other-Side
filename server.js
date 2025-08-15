const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

// Rota para receber os dados do formulário
app.post('/cadastro', (req, res) => {
    console.log(req.body); // Adicione esta linha para ver o que está chegando

    const { nome, origem, classe, nex, patente, atributos } = req.body;

    // Garante que a pasta 'cadastro' existe
    const cadastroDir = path.join(__dirname, 'cadastro');
    if (!fs.existsSync(cadastroDir)) {
        fs.mkdirSync(cadastroDir);
    }

    // Cria um objeto com os dados do usuário
    const usuario = {
        nome,
        origem,
        classe,
        nex,
        patente,
        atributos: {
            agilidade: atributos?.agilidade,
            forca: atributos?.forca,
            inteligencia: atributos?.inteligencia,
            presenca: atributos?.presenca,
            vigor: atributos?.vigor
        }
    };

    // Define o caminho do arquivo onde os dados serão salvos
    const filePath = path.join(cadastroDir, `${nome}.json`);

    // Salva os dados do usuário em um arquivo JSON
    fs.writeFile(filePath, JSON.stringify(usuario, null, 2), (err) => {
        if (err) {
            console.error('Erro ao salvar os dados:', err);
            return res.status(500).send('Erro ao salvar os dados.');
        }
        res.status(200).send('Cadastro realizado com sucesso!');
    });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});