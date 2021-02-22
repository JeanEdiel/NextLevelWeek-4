import express from 'express';

const app = express();


app.listen(3333, () => {
    console.log('server is running');
});

app.get('/', (request, response) => {
    return response.json({ message: 'Hello World' });
});

app.post('/', (request, response) => {
    return response.json({ message: 'Os dados foram salvos com sucesso!' });
});

/**
 * GET => Busca
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração específica
 */
