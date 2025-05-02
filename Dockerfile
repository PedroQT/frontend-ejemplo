# Usa una imagen de Nginx
FROM nginx:alpine

# Elimina la configuración por defecto
RUN rm -rf /usr/share/nginx/html/*

# Copia los archivos compilados de Angular
COPY dist/demofrontend /usr/share/nginx/html

# Expone el puerto
EXPOSE 81

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]
