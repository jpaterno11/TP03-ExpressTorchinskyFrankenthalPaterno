import express from 'express'; 
import cors from 'cors';
import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from './modules/omdb-wrapper.js';
import {PI, sumar, multiplicar, dividir, restar, mostrarArray} from './modules/matematica.js';
const app  = express();
const port = 3000;              // El puerto 3000 (http://localhost:3000)

// Agrego los Middlewares
app.use(cors());         // Middleware de CORS
app.use(express.json());
app.listen(port, () => { 
  console.log('Servidor escuchando en puerto '+port); 
});

app.get('/', (req, res) => { 
  res.send('¡Ya estoy respondiendo!');
});
app.get('/saludar/:nombre', (req, res) => {

  let nombre=req.params.nombre
    res.status(200).send('Hola' + nombre);
})
app.get('/validarfecha/:ano/:mes/:dia', (req, res) => {
  let fecha = req.params.ano + '/' + req.params.mes + '/' + req.params.dia;
  if (isNaN(Date.parse(fecha))){
    res.send.status(400)('Bad Request');
  }
  else{
  res.status(200).send('OK');
}
})
app.get('/matematica/sumar', (req, res) => {
  let n1 = parseFloat(req.query.n1);
  let n2 = parseFloat(req.query.n2);
  if (isNaN(n1) || isNaN(n2)){
    res.status(400).send('datos mal ingresados');
  }
  res.status(200).send(sumar(n1, n2));
});
app.get('/matematica/restar', (req, res) => {
  let n1 = parseFloat(req.query.n1);
  let n2 = parseFloat(req.query.n2); 
  if (isNaN(n1) || isNaN(n2)){
    res.status(400).send('datos mal ingresados');
  }
  res.status(200).send(restar(n1, n2));
});
app.get('/matematica/multiplicar', (req, res) => {
  let n1 = parseFloat(req.query.n1);
  let n2 = parseFloat(req.query.n2); 
  if (isNaN(n1) || isNaN(n2)){
    res.status(400).send('datos mal ingresados');
  }
  res.status(200).send(multiplicar(n1, n2));
});
app.get('/matematica/dividir', (req, res) => {
  let n1 = parseFloat(req.query.n1);
  let n2 = parseFloat(req.query.n2);
  if (isNaN(n1) || isNaN(n2)){
    res.status(400).send('datos mal ingresados');
  } 
  res.status(200).send(dividir(n1, n2));
});
app.get('/omdb/searchbypage', async (req, res) => {
  const texto = req.query.search;
  const pagina = req.query.p;
  res.status(200).send(await OMDBSearchByPage(texto, pagina));
});
app.get('/omdb/searchcomplete', async (req, res) => {
  const texto = req.query.search;
  res.status(200).send(await OMDBSearchComplete(texto));
});
app.get('/omdb/getbyomdbid', async (req, res) => {
  const id = req.query.imdbID;
  res.status(200).send(await OMDBGetByImdbID(id));
});

