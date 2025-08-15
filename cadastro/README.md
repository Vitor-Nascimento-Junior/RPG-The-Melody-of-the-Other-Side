# Documentação da Pasta de Cadastro

Esta pasta contém os dados dos novos usuários que se registram no aplicativo "The Melody of the Other Side". Os dados coletados através do formulário na página principal (`index.html`) serão armazenados aqui.

## Estrutura dos Dados

Os dados dos usuários serão salvos em arquivos individuais, onde cada arquivo conterá as informações do usuário, como:

- Nome
- Origem
- Classe
- NEX
- Patente
- Atributos (Agilidade, Força, Inteligência, Presença, Vigor)

## Como os Dados São Armazenados

Os dados serão enviados para o servidor através do formulário e, em seguida, processados pelo `server.js`. O servidor irá criar um novo arquivo na pasta `cadastro` para cada novo usuário, garantindo que as informações sejam armazenadas de forma organizada.

## Instruções para Desenvolvimento

1. Certifique-se de que o servidor esteja configurado corretamente no `server.js` para receber os dados do formulário.
2. Verifique se a lógica para criar e salvar arquivos na pasta `cadastro` está implementada.
3. Teste o formulário em `index.html` para garantir que os dados sejam coletados e armazenados corretamente.

## Contribuições

Sinta-se à vontade para contribuir com melhorias ou correções nesta documentação ou na implementação do sistema de cadastro.