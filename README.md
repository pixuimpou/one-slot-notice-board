# one-slot-notice-board

## Criar o banco de dados (mysql):

``` CREATE DATABASE one_slot_notice_board ```  

```
CREATE TABLE post(
  id PRIMARY KEY AUTO_INCREMENT,
  content varchar(400),
  title varchar(100)
); 
```

## Instalar dependências e iniciar servidor:

``` npm install ```  
``` node server.js ```  

Acesse o localhost na porta 3000:  
http://localhost:3000
