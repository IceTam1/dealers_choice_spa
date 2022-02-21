const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/pets_db')

const Pet = sequelize.define('pet', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

const express = require('express')
const app = express();
const path = require('path');

app.use('/src', express.static(path.join(__dirname, 'src')));

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/pets', async (req, res, next)=> {
  try {
   res.send(await Pet.findAll());
  }
  catch (ex) {
   next(ex)
  }
})

const start = async () => {
  try {
    console.log('hello')
    await sequelize.sync({ force: true })
    await Pet.create({ name: 'Noodle the Poodle' });
    await Pet.create({ name: 'Daisy the Golden Retriever' });
    await Pet.create({ name: 'Ollie the Golden Doodle' });

    const port = process.env.PORT || 3000
    app.listen(port, ()=> console.log(`app listening on port ${port}`))
  }
  catch (ex) {
    console.log(ex)
  }
}

start()
