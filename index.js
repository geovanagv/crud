const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

let carros = [];

app.get('/carros', (req, res) => {
  res.json(carros);
});

app.post('/carros', (req, res) => {
  const { marca, modelo, cor, valor } = req.body;


  if (!marca || !modelo || !cor || !valor) {
    return res.status(400).json({ message: 'Por favor, forneça todos os campos.' });
  }

  const newCar = { marca, modelo, cor, valor };
  cars.push(novocarro);

  res.status(201).json(newCar);
});

app.put('/carros/:id', (req, res) => {
  const { id } = req.params;
  const { marca, modelo, cor, valor } = req.body;

  const carIndex = carros.findIndex(car => carro.id === parseInt(id));

  if (carIndex === -1) {
    return res.status(404).json({ message: 'Carro não encontrado.' });
  }

  if (marca) carros[carIndex].marca = marca;
  if (modelo) carros[carIndex].modelo = modelo;
  if (cor) carros[carIndex].cor = cor;
  if (valor) carros[carIndex].valor = valor;

  res.json(carros[carIndex]);
});

app.delete('/carros/:id', (req, res) => {
  const { id } = req.params;

  cars = cars.filter(car => car.id !== parseInt(id));

  res.sendStatus(204);
});

app.get('/carros/cor/:cor', (req, res) => {
  const { color } = req.params;

  const filteredCars = cars.filter(car => car.cor === color);

  res.json(filteredCars);
});

app.get('/carros/cor/:cor/total-value', (req, res) => {
  const { color } = req.params;

  const totalValue = carros.reduce((total, car) => {
    if (carro.cor === cor) {
      return total + carro.valor;
    }
    return total;
  }, 0);

  res.json({ totalValue });
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
