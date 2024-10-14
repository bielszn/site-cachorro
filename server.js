const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// Dados sobre os cachorros
const dogs = [
  {
    name: "Chihuahua",
    description: "O Chihuahua é uma das menores raças de cães do mundo, conhecida pelo seu tamanho diminuto e personalidade marcante.",
    image: "/src/imagens/Chihuahua.jpg"
  },
  {
    name: "Dachshund",
    description: "O Dachshund, ou 'cão salsicha', é uma raça de cachorro de corpo longo e pernas curtas, originária da Alemanha.",
    image: "/src/imagens/Dachshund.jpg"
  },
  // Adicionar o restante das raças...
];

// Rota para obter todas as raças de cachorros
app.get('/dogs', (req, res) => {
  res.json(dogs);
});

// Rota para obter uma raça específica por nome
app.get('/dogs/:name', (req, res) => {
  const dog = dogs.find(d => d.name.toLowerCase() === req.params.name.toLowerCase());
  if (dog) {
    res.json(dog);
  } else {
    res.status(404).send('Dog not found');
  }
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
