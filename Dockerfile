FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
COPY target/Shopping-Cart-1.0-1.0.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
EXPOSE 8080