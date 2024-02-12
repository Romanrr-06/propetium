import express from "express";
import * as db from './db-connection';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();
const jsonParser = bodyParser.json();
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello from express and typescript');
});

// app.get('/usuarios/:usuarios', async (req, res) => {
//   console.log("ENDPOINT: /usuarios/:usuarios");
//   console.log("INPUT VALUES: " + req.params.usuarios);
//   let usuario;
//   // 1. Buscar el usuario en la tabla 'usuarios'
//   try {
//     const result = await db.query("SELECT * FROM usuarios WHERE id = '" + req.params.usuarios + "'");
//     console.log(JSON.stringify(result.rows));
//     usuario = result.rows;
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Internal Server Error. Error al recuperar usuario de base de datos');
//   }

//   if(usuario.length > 0){
//     // El susuario existe
//     res.json({user: usuario[0], created: false});
//   } else{
//     // El usuario NO existe
//     try {
//       const result = await db.query(`INSERT INTO usuarios (id) VALUES ('${req.params.usuario}')`);
//       console.log(result);
//       res.json({user: {id:req.params.usuario}, created: true});
//     } catch (err) {
//       console.error(err);
//       res.status(500).send('Internal Server Error. Error al crear usuario.');
//     }
//   }
//   // 1.1 Si el usuario existe, devolver datos de usuario

  
//   // 1.2 Si el usuario no existe, crearlo y devolver datos de usuario

// });

app.get('/usuarios/:usuario', async (req, res) => {
  console.log("ENDPOINT: /usuarios/:usuario");
  console.log("INPUT VALUES: " + req.params.usuario);
  let usuario;

  // 1. Buscar el usuario en la tabla 'usuarios'
  try {
    const result = await db.query(`SELECT * FROM usuarios WHERE id = '${req.params.usuario}'`);
    console.log(JSON.stringify(result.rows));
    usuario = result.rows;
  } catch (err) {
    console.error(err);
    return res.status(500).send('Internal Server Error. Error al recuperar usuario de base de datos');
  }

  if (usuario.length > 0) {
    // El usuario existe
    return res.json({ user: usuario[0] });
  } else {
    // El usuario NO existe
    try {
      // Crear nuevo usuario con un valor por defecto para 'name'
      const insertResult = await db.query(`INSERT INTO usuarios (id, name) VALUES ('${req.params.usuario}', 'DefaultName')`);
      console.log(insertResult);

      // Fetch the newly inserted user
      const newUserResult = await db.query(`SELECT * FROM usuarios WHERE id = '${req.params.usuario}'`);
      const newUser = newUserResult.rows[0];

      return res.json({ user: newUser, created: true });
    } catch (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error. Error al crear usuario.');
    }
  }
});



app.get('/alumnos/:alumno', async (req, res) => {
  console.log("SELECT * FROM alumnos WHERE name = '" + req.params.alumno + "'");
  try {
    const result = await db.query("SELECT * FROM alumnos WHERE name = '" + req.params.alumno + "'");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/alumnos', async (req, res) => {

  console.log(`SELECT * FROM alumnos WHERE name = '${req.query.name}'`);
  try {
    const result = await db.query("SELECT * FROM alumnos");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }

});




// preguntas
app.get('/preguntas/:id', async (req, res) => {
  const { respuesta } = req.query;
  const id = req.params.id;

  console.log(`UPDATE preguntas SET Respuesta = $1 WHERE id = $2`);

  try {
    await db.query({
      text: `UPDATE preguntas SET Respuesta = $1 WHERE id = $2`,
      values: [respuesta, id],
    });
    res.json({ message: 'Respuesta guardada exitosamente.' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/preguntas', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM preguntas WHERE Respuesta IS NULL');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


// crypto

app.get('/crypto/:id', async (req, res) => {
  console.log("ENDPOINT: /crypto/:id");
  console.log("SELECT * FROM crypto WHERE id = '" + req.params.id + "'");
// guardar el result en una variable 
  try {
    const result = await db.query("SELECT * FROM crypto Where id = '" + req.params.id + "'");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
   
  }

});
app.get('/crypto', async (req, res) => {

  console.log(`SELECT * FROM crypto ='${req.query.preguntas}'`);
  try {
    const result = await db.query("SELECT * FROM crypto");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('lose');
  }
});


// app.post('/guardar-conversacion', jsonParser, async (req, res) => {
//   const { user_id, conversation } = req.body;
  
//   try {
//     const result = await db.query(
//       `INSERT INTO community_conversations (user_id, conversation) VALUES ('${user_id}', '${conversation}')`
//     );
//     console.log(result);
//     res.json({ success: true });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, error: 'Internal Server Error' });
//   }
// });



app.get('/chat/messages', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM chat_messages');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});



const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on PORT ${port}`));