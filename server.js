const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/pets_db')




const start = async()=> {
    try {
        console.log('hello')
        await sequelize.sync({ force:true })

    }
    catch (ex){
        console.log(ex)
    }
}

start()