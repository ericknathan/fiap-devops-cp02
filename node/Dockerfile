# Use uma imagem Node na versão lts-alpine3.19 como base
FROM node:lts-alpine3.19

# Defina o diretório de trabalho como: /app-money
WORKDIR /app-money

# Copie todos os diretórios e arquivos da sua aplicação para o Container
COPY . .

# Realize o empacotamento do seu App no seu host primeiramente
RUN npm install

# Utilize o usuário node para executar a aplicação
USER node

# Exponha a porta adequada para que a aplicação seja acessível
EXPOSE 3000

# Configure o comando padrão para executar seu App NodeJS. Pode utilizar CMD ou ENTRYPOINT
CMD ["npm", "start"]