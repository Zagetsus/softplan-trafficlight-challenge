<h1 align="center">
   <img src='.github/assets/logo.png' style="border-radius:50%" />
</h1>

<h1 align="center">
   SoftPlan Challenge
</h1>

<p align="center">
  <img alt="SoftPlan" src="https://badgen.net/badge/SoftPlan/Challenge/b">

  <a href="https://github.com/Zagetsus">
    <img alt="Made by Luan Verdelho" src="https://badgen.net/badge/made by/Luan Verdelho/b">
  </a>
</p>

<p align="center">
  <a href="#about">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#run-project">Como rodar o Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#explanation">Explicação</a>&nbsp;&nbsp;&nbsp;
</p>

## Sobre o projeto <a href='about'></a>

Projeto consiste no funcionamento de um semáforo que apresentará para o usuário em tempos diferentes qual estágio no 
farol se encontra.

O projeto foi construido utilizando typescript com conceitos de SOLID.

### Especificações:
**Repetir a impressão a cada 1 segundo:**

Cor      | Tempo de Permanência no Estado | Imprenssão              |
-------- |--------------------------------|-------------------------|
Vermelho | 15s                            | "ESPERE AÍ"             |
Verde    | 5s                             | "SIMBORA!"              |
Amarelo  | 10s                            | "FICA ESPERTO, QUERIDO" |


### Requisitos:

- [NodeJS `>18.13.0`](https://nodejs.org/en/)
- [Yarn `>1.22.19`](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

## Como rodar o projeto <a href='run-project'></a>

1. Instale as dependências do projeto com o  `yarn`
2. Rode o comando `yarn start`

## Explicação: <a href='explanation'></a>
1. Interface ITrafficLight: Define o contrato para o semáforo.
2. Interface ITrafficLightState: Define o contrato para os estados do semáforo.
3. Classe de estados (CreateTrafficLightState): Implementa a interface e definem os comportamentos específicos de cada estado.
4. Classe TrafficLight: Gerencia o estado atual e a transição entre estados. Usa um setInterval para simular a mudança de estados a cada intervalo definido.
5. Princípios Aplicados:
   - SRP: Cada classe tem uma responsabilidade única.
   - OCP: Novos estados podem ser adicionados sem modificar as classes existentes.
   - LSP: As classes de estado podem substituir a interface ITrafficLightState.
   - ISP: A interface ITrafficLightState é específica para os estados do semáforo.
   - DIP: A classe TrafficLight depende da abstração ITrafficLightState, não das implementações concretas.

Este código segue os princípios de KISS (mantenha simples e claro) e DRY (não repita a si mesmo), garantindo que o código é fácil de entender e manter.