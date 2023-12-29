import app from './app.js'
import { sequelize } from './database/database.js'
import cors from 'cors'

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//Setting
app.set('port', process.env.PORT || 3006);   

//Starting database and server
async function main() {
    await sequelize.sync({force: false});
    app.listen(app.get('port'), ()=>{
        console.log(`Listen on port ${app.get('port')}`)
    })
}

main();