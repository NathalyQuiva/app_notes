import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import { DataTypes } from 'sequelize'

dotenv.config();

const { USER_NAME, USER_PASSWORD, HOST } = process.env;

const initializeDatabase = async () => {
  try {
    const sequelize = new Sequelize('postgres', USER_NAME, USER_PASSWORD, {
      host: HOST,
      dialect: 'postgres',
    });

    // Verificar si la base de datos 'notes' existe, de lo contrario, crearla
    const [result] = await sequelize.query("SELECT 'notes' AS db_name FROM pg_database WHERE datname = 'notes'");
    if (result.length === 0) {
      await sequelize.query('CREATE DATABASE notes');
    }

    // Establecer la conexión a la base de datos 'notes'
    const db = new Sequelize(
      'notes', 
      USER_NAME, 
      USER_PASSWORD, 
      {
      host: HOST,
      dialect: 'postgres',
    });

    // Aquí puedes definir tus modelos y realizar otras configuraciones con la base de datos 'notes'
    // Por ejemplo:
    // db.define('Note', {
    //   // Definición de tu modelo Note
    // });
    const Note = db.define('notes', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true 
      },
      tittle: {
          type: DataTypes.STRING
      },
      content: {
          type: DataTypes.STRING
      },
      done: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
      },
      active: {
          type: DataTypes.BOOLEAN, 
          defaultValue: true
      },
  }, {
      timestamps: false
  });

  const Category = db.define('categories', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
}, {
    timestamps: true
});


//Relations
Category.hasMany(Note, {
    foreignKey: 'categoryId',
    sourceKey: 'id'
});

Note.belongsTo(Category, {
    foreignKey: 'categoryId',
    targetId: 'id'
});


    // Sincronizar los modelos con la base de datos 'notes'
    // db.sync();

    console.log('La base de datos "notes" está lista.');
    return db;
  } catch (error) {
    console.error('Error al crear o conectar con la base de datos "notes":', error);
    throw new Error('Error al inicializar la base de datos');
  }
};

export default initializeDatabase;

