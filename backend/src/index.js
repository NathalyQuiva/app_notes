import app from './app.js'
import { sequelize } from './database/database.js'

// import './models/Category.js'
// import './models/Note.js'

//Setting
app.set('port', process.env.PORT || 3006);   
// app.set('json spaces', 2);


// //Routes
// app.use(require('./routes/index'));
// app.use('/api/categories', require('./routes/categories.js'));


//Starting database and server
async function main() {
    await sequelize.sync({force: false});
    app.listen(app.get('port'), ()=>{
        console.log(`Listen on port ${app.get('port')}`)
    })
}

main();