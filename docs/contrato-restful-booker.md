# Documentação de Contrato de Integração - API Restful-booker

Este documento mapeia os contratos de integração (endpoints de leitura `GET` e criação `POST`) da API pública **Restful-booker**, utilizada como ambiente de playground para automação de testes.

---

## Endpoint 1: Leitura de Reserva específica (GET)

### 1. Identificação e Finalidade
* **Endpoint/Rota:** `/booking/:id`
* **Objetivo de Negócio:** Recuperar os detalhes completos de uma reserva específica de hotel com base no ID fornecido, permitindo visualizar os dados do hóspede, valores e datas de estadia.

### 2. Estrutura do Request (O que o cliente envia)
* **Método HTTP:** `GET`
* **URL Completa:** `https://restful-booker.herokuapp.com/booking/1` (exemplo utilizando o ID `1`)
* **Headers (Cabeçalhos):**
  * `Accept`: `application/json` (Define o formato de retorno desejado)
* **Body (Corpo):** 
  * `N/A`

### 3. Estrutura do Response (O que o servidor devolve)
* **Status Code Esperado:** `200 OK`
* **Payload de Retorno (Exemplo JSON):**
```json
{
    "firstname": "Sally",
    "lastname": "Brown",
    "totalprice": 111,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2013-02-23",
        "checkout": "2014-10-23"
    },
    "additionalneeds": "Breakfast"
}

---

## Endpoint 2: Criação de Nova Reserva (POST)

### 1. Identificação e Finalidade
* **Endpoint/Rota:** '/booking'
* **Objetivo de Negócio:** 'Cadastrar uma nova reserva de hotel no sistema, registrando as informações do cliente, o status do depósito, os valores e o período da estadia com objetos aninhados de datas.'

### 2. Estrutura do Request (O que o cliente envia)
* **Método HTTP:** 'POST'
* **URL Completa:** 'https://restful-booker.herokuapp.com/booking'
* **Headers (Cabeçalhos):**
    * **Content-Type:** 'application/json (Define o formato do payload enviado).'
    * **Accept:** 'application/json (Define o formato esperado na resposta).'
* **Body (Corpo):**
```json
{
    "firstname": "Jim",
    "lastname": "Brown",
    "totalprice": 111,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2018-01-01",
        "checkout": "2019-01-01"
    },
    "additionalneeds": "Breakfast"
}

---

## 3. Estrutura do Response (O que o servidor devolve)
* **Status Code Esperado:** '200 OK' (Nota: Conforme a documentação oficial da API, o sucesso de criação retorna o status 200 OK acompanhado do ID gerado).
* **Payload de Retorno (Exemplo JSON):**
```json
{
    "bookingid": 1,
    "booking": {
        "firstname": "Jim",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Breakfast"
    }
}

