

## Tecnologias utilizadas

### API
    Spring Boot - 2.2.10.RELEASE
    JDK - 1.8
    Spring Data JPA
	MongoDB

### Front end - Angular

    Angular 10.2.2
    PrimeNg 10.0.0
    npm- 6.14.6

### Ferramentas

    IDE API - Eclipse Spring Tool Suite 4 (4.7.2) 
	IDE Angular - Visual Studio Code
    Angular CLI
	Maven - 3     
 
## Como executar a aplicação 
	API 
		* mvn spring-boot:run command
	Front-end 
		* ng install (baixar todas os pacotes)
		* ng serve (default porta -4200)
		
	
## ENDPOINTS - POSTMAN (desafiojfo-api\doc\postman\stefanini-desafiojfo.postman_collection.json)
	
* Obter token - post
** https://desafio-jfo.herokuapp.com/oauth/token

* Listar pessoas - get
** https://desafio-jfo.herokuapp.com/pessoas

* Adicionar pessoa - post
** https://desafio-jfo.herokuapp.com/pessoas/novo

* Visualizar pessoa - get
** https://desafio-jfo.herokuapp.com/pessoas/5f69e5a8e2799d38522334c5

* Apagar pessoa - delete
** https://desafio-jfo.herokuapp.com/pessoas/5f69e5a8e2799d38522334c5


 