const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

const { Student, sequelize} = require('./database');

app.use(express.json());
app.use(cors());

app.post('/cadastro', async (request, response) => {
    const{matricula, nome, nota1, nota2, nota3} = request.body;

    try {
        const media = (nota1 + nota2 + nota3) / 3;
        
        await Student.create({
            matricula: matricula,
            nome: nome,
            nota1: nota1,
            nota2: nota2,
            nota3: nota3,
            media: media
        });
        return response.status(201).send('Usuário criado com sucesso!');
        } catch (error) {
        console.error('Erro no cadastro', error);
        return response.status(500).send('Erro no cadastro');
    }
    
});

app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}`)
});