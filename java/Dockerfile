# Use o Tomcat 10 como imagem
FROM tomcat:10

# Defina o diretório de trabalho como: /usr/local/tomcat/webapps
WORKDIR /usr/local/tomcat/webapps/

# Copie o arquivo WAR da aplicação para o diretório padrão de implantação do Tomcat
# O arquivo WAR deve ter o seguinte nome: DimMoneyApp<seuRM>.war
COPY ./target/DimDim.war ./DimMoneyAppRM99565.war

# Exponha a porta adequada para que a aplicação seja acessível pelo nosso Host
EXPOSE 8080

# Inicie o Tomcat
CMD ["catalina.sh", "run"]