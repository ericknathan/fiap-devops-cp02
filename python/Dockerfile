# Use a imagem Python na versão 3.9-slim como base
FROM python:3.9-slim

# Defina o diretório de trabalho como: /app
WORKDIR /app

# Utilize um Argumento para receber o nome da Aplicação no Build e uma Variável de Ambiente para ser executada no CMD
ARG APP_NAME

ENV APP_NAME=$APP_NAME

# Copie o arquivo Python da aplicação para o Container
COPY ./app99565.py ./app.py

# Configure o comando padrão para executar seu App no Python. Utilizar o CMD
CMD ["python", "app.py"]