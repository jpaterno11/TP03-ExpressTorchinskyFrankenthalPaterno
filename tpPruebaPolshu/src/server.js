import express from 'express'; 
import cors from 'cors';
import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from './modules/omdb-wrapper.js';
import {PI, sumar, multiplicar, dividir, restar, mostrarArray} from './modules/matematica.js';
import Alumno from './models/alumno.js';
const app  = express();
const port = 3000;              // El puerto 3000 (http://localhost:3000)

// Agrego los Middlewares
app.use(cors());         // Middleware de CORS
app.use(express.json());


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
  if (isNaN(n1) || isNaN(n2) || n2 == 0){
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

const alumnosArray = [];
alumnosArray.push(new Alumno("Esteban Dido"  , "22888444", 20));
alumnosArray.push(new Alumno("Matias Queroso", "28946255", 51));
alumnosArray.push(new Alumno("Elba Calao"    , "32623391", 18));

app.get('/alumnos', (req, res) => { 
  var texto = "";

  for (let i = 0; i < alumnosArray.length; i++){
    texto += alumnosArray[i].toString() + "\n";
  }
  res.status(200).send("Lista de alumnos:\n" + texto);
});
app.get('/alumnos/:dni', (req, res) => {
  let dni = req.params.dni;
  let alumno = alumnosArray.find(alumno => alumno.getDNI() === dni.toString());
    if (!alumno) { 
    res.status(400).send('Datos mal ingresados');
  } else {
    res.status(200).send(alumno); 
  }
});
app.post('/alumnos', (req, res) =>{
  const nombre = req.query.nombre;
  const DNI = req.query.DNI;
  const edad = req.query.edad;
  alumnosArray.push(new Alumno(nombre, DNI, edad));
  res.status(200).send("Created"); 

})







app.listen(port, () => { 
  console.log('Servidor escuchando en puerto '+port); 
});