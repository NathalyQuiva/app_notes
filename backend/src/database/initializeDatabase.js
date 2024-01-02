// initializeDatabase.js

const { db, DataTypes } = require('./src/database/database.js');

const initializeDatabase = async () => {
  try {
    // Aquí coloca tu lógica de inicialización de la base de datos
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
    
    // Define relaciones, sincronización de modelos, etc.
    // ...

    await db.sync();

    console.log('La base de datos ha sido inicializada correctamente.');
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
    process.exit(1);
  }
};

initializeDatabase();
