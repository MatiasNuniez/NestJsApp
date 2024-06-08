# Utiliza la imagen oficial de Node.js como imagen base
FROM node:20.14.0

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install -g @nestjs/cli
RUN npm install

# Copia el resto de los archivos del proyecto al directorio de trabajo
COPY . .

# Exponer el puerto que utiliza la aplicación
EXPOSE 3000

# Comando por defecto para ejecutar la aplicación en modo desarrollo
CMD ["npm", "run", "start:dev"]
