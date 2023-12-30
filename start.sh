#!/bin/bash

# Añadir la ruta de psql al PATH
export PATH=$PATH:"/c/Program Files/PostgreSQL/15/bin"

# Añadir la ruta de node al PATH
export PATH=$PATH:"/c/Program Files/nodejs"

# Verificar si Node.js y npm están instalados
if ! command -v node &> /dev/null || ! command -v npm &> /dev/null; then
    echo "Node.js y npm son necesarios para ejecutar la aplicación. Instálalos antes de continuar."
    exit 1
fi

# Verificar si las dependencias están instaladas
if [ ! -d "node_modules" ]; then
    echo "Instalando dependencias..."
    npm install
fi

# Configuración inicial para el backend
echo "Instalando dependencias del backend..."
cd backend
npm install cors@2.8.5 dotenv@16.3.1 express@4.18.2 pg@8.11.3 pg-hstore@2.3.4 sequelize@6.35.2
cd ..

# Configuración inicial para la base de datos
echo "Creando la base de datos y tablas..."
cd backend
# Asegúrate de tener PostgreSQL instalado y configurado con las credenciales necesarias
# Ejemplo de comandos para crear la base de datos y las tablas
psql -c "CREATE DATABASE IF NOT EXISTS notes;"

# Ejecutar migraciones (reemplaza con la ruta correcta a tu archivo de migración)
psql -d notes -f ./backend/migrations/20231229_create_tables.sql
cd ..

# Modelos y relaciones
echo "Creando modelos y relaciones en la base de datos..."
cd backend
node -e "const { sequelize, DataTypes } = require('./src/database/database'); const Note = sequelize.define('notes', { id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, title: { type: DataTypes.STRING }, content: { type: DataTypes.STRING }, done: { type: DataTypes.BOOLEAN, defaultValue: false }, active: { type: DataTypes.BOOLEAN, defaultValue: true } }, { timestamps: false }); const Category = sequelize.define('categories', { id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, name: { type: DataTypes.STRING }, description: { type: DataTypes.STRING } }, { timestamps: true }); Category.hasMany(Note, { foreignKey: 'categoryId', sourceKey: 'id' }); Note.belongsTo(Category, { foreignKey: 'categoryId', targetId: 'id' }); sequelize.sync();"  # Ajusta la ruta al archivo sequelize-instance.js
cd ..

# Configuración inicial para el frontend
echo "Instalando dependencias del frontend..."
cd frontend
npm install axios@1.6.3 react@18.2.0 react-redux@9.0.4 react-scripts@5.0.1 redux@5.0.1 redux-thunk@3.1.0
cd ..

# Iniciar backend
echo "Iniciando el servidor backend..."
cd backend
npm run dev  # Utiliza "npm run dev" en lugar de "npm start" si ese es tu comando para iniciar el servidor en desarrollo
cd ..

# Iniciar frontend
echo "Iniciando la aplicación frontend..."
cd frontend
npm start  # Ajusta este comando según cómo inicies tu aplicación frontend
cd ..

# Mensaje de éxito
echo "La aplicación ha sido configurada y está lista para ser ejecutada."
