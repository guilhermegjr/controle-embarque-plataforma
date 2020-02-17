# Sobre

Esse foi um projeto desenvolvido para demonstrar os conhecimentos no desenvolvimento Front-end usando Angular.

# Tecnologias utilizadas

-   Angular 8
-   Angular Flex (Flex Layout)
-   RxJS 6 (Para uso do padrão Observer | Programação reativa)
-   NGRX 8 (Implementação do padrão Redux no Angular)
-   Ionic 5 (Components de interface)

# Abordagem usada no desenvolvimento

O desenvolvimento do sitema foi realizado utilizando a principal proposta do Angular que é a componentização para segregação de funções e responsabilidades. Foram utilizados diversos recursos do framework como por exemplo: **Pipe**, **Component**, **Services**, **Directive**

Também utilizei a abordagem de programação reativa implementando o padrão Redux com NGRX + RxJS

Para desenvolver uma interface mais bonita, utilizei os componentes do Ionic.

> **Importante**: Os dados não são persistidos. Os `services` da aplicação apenas retornam dados "fakes" simulando o sucesso das operações no backend.
>
> Entretanto, os dados cadastrados ou atualizados são devidamente tratados pela `Store` do NGRX para que a aplicação possa reagir às mudanças de estado da Store.

# Como rodar a aplicação

Após clonar o projeto em sua maquina, execute os seguintes comandos:

-   `npm install` para instalar as dependências
-   `ionic serve` para rodar a aplicação em ambiente de desenvolvimento

# Login (Usuário / Senha)

-   E-mail: joao@oilgascorp.com
-   Senha: 123
