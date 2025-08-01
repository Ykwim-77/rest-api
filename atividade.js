import express from "express";

var ultimoid = 1;
var usuarios = [];

const app = express();
app.use(express.json());

app.get('/usuarios', (req, res) => {
    console.log("usuarios");
    res.status(200).json(usuarios);
});

app.get('/usuario/:id', (req, res) => {
    console.log("rota usuarios com parametros: ", req.params);
});

app.post('/usuario/criar', (req, res) => {
    //quem me chamar vai passar/tem q passar nome e email no corpo(body) da requisição
    const { nome, email } = req.body;
    if (!nome || !email) {
        res.status(400).json({ message: "Preencha todos os campos" });
        return;
    }
    console.log(nome, email);
    const usuario = {
        id: ultimoid++,
        nome,
        email,
    };
    usuarios.push(usuario);
    res.status(201).json({ message: "usuario criado com sucesso" });
});

app.listen(3000);