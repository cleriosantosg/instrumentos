import express from 'express';
import Instrumento from './models/Instrumento.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Liberar acesso à pasta public
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(__dirname + '/public'));

// Rota raiz redirecionando para a listagem
app.get('/', (req, res) => {
    res.redirect('/instrumento/lst');
});

// 4. Rota para listar instrumentos (Read)
app.get('/instrumento/lst', async (req, res) => {
    try {
        const instrumentos = await Instrumento.find();
        res.render("instrumento/lst", { instrumentos });
    } catch (error) {
        console.error("Erro ao buscar instrumentos:", error);
        res.render("instrumento/lst", { instrumentos: [], erro: "Não foi possível carregar os registros do banco de dados." });
    }
});

// 2. Rota GET para abrir o formulário de cadastro
app.get('/instrumento/add', (req, res) => {
    res.render('instrumento/add');
});

// 2. Rota POST para gravar os dados no MongoDB (Create)
app.post('/instrumento/add/ok', async (req, res) => {
    try {
        const { nome, fabricante, preco, tipo } = req.body;
        await Instrumento.create({ nome, fabricante, preco, tipo });
        res.render("instrumento/addok", { nome });
    } catch (error) {
        console.error("Erro ao salvar instrumento:", error);
        res.status(500).send("Erro ao cadastrar o instrumento. Verifique os dados informados.");
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});