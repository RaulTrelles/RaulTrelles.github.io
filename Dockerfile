# Usa la imagen base oficial de Nginx
FROM nginx:latest

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/share/nginx/html

# Copia todos los archivos de la carpeta actual al directorio de trabajo del contenedor
COPY . .

# Expone el puerto 80 (por defecto para Nginx dentro del contenedor)
EXPOSE 80
