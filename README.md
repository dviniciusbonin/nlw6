
# NLW_TOGETHER 06
## nlw valoriza





## Tecnologias

Node.js

Typescript

Express

Typeorm

JWT -> Autenticação com json web token

  
## O projeto

É uma aplicação backend para uma plataforma de elogios entre times
onde um usuário pode enviar elogios para outro e associá-lo a uma #hashtag

  
## Instalação do projeto

Clone o pojeto

```bash
    git clone https://github.com/DViniciusBonin/nlw6
 ```

 Acesse a pasta do projeto e instale as dependências

```bash 
    cd path-projeto

    yarn install
```
Configure as variaveis de ambiente com as crendências necessárias. Obs: O projeto conta com um arquivo de exemplo


Execute as migrations para a criação das tabelas do banco de dados
```bash
    yarn typeorm migration:run
```

Execute o servidor com:

```bash
    yarn dev
```

    
## License

[MIT](https://choosealicense.com/licenses/mit/)

  