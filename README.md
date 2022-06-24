# la-boleria-api Documentation
- **POST** `/flavours`
    - Deve receber as informações necessárias para a criação de um novo sabor de bolo.
    
    ```json
    {
    		"name": "Morango",
    }
    ```
    
    - **Response:** status 201
    - **Regras de Negócio**
        - `name` não pode ser **vazio** e conter pelo menos 2 caracteres ⇒ deve retornar **status 400**
        - `name` não pode ser um flavor já existente ⇒ se não, deve retornar **status 409**
       
- **POST** `/cakes`
    - Deve receber as informações necessárias para a criação de um novo tipo de bolo.
    
    ```json
    {
    		"name": "Bolo de pote",
    		"price": 13.00,
    		"description": "Bolo de chocolate com recheio de leite ninho",
    		"image":"encurtador.com.br/iDIX0",
        "flavourId":1
    }
    ```
    
    
    - **Response:** status 201
    - **Regras de Negócio**
        - `name` não pode ser **vazio** e conter pelo menos 2 caracteres ⇒ se não, deve retornar **status 400**
        - `name` não pode ser um nome de um bolo já existente ⇒ se não, deve retornar **status 409**
        - `price` não pode ser **vazio** e deve ser um valor **maior que zero** ⇒ se não, deve retornar **status 400**
        - `description` pode ser vazia e deve ser validado se é uma **string,** caso não seja deve retornar **status 400**
        - `image` não pode ser vazio e um link válido (procurar por validação de link no `Joi`) ⇒ deve retornar **status 422**
        - `flavourId` deve ser de um sabor de cobertura existente caso contrário deve retornar **status 404**
- **POST** `/clients`
    - Deve receber as informações necessárias para a criação de um novo cliente.
    
    ```json
    {
        "name": "Fulana",
        "address": "Rua tal",
        "phone": "2199999999"
    }
    ```
    
    - **Response:** status 201
    - **Regras de Negócio**
        - `name` não pode ser **vazio** ⇒  deve retornar **status 400**
        - `address` não pode ser **vazio** ⇒ deve retornar **status 400**
        - `phone` não pode ser vazio e deve ser uma **string** com 10 ou 11 caracteres numéricos ⇒ nesse caso deve retornar **status 400**
- **POST** `/order`
    - Deve receber as informações necessárias para registrar um novo pedido.
    
    ```json
    {
        "clientId": 1,
        "cakeId": 1,
        "quantity": 2,
        "totalPrice": 26.00
    }
    ```
    
    - **Response:** status 201, sem dados
    - **Regras de negócio**
        - `clientId` deve ser um id de um cliente existente. Caso não exista, retornar 404.
        - `cakeId` deve ser um id de um bolo existente. Caso não exista, retornar 404.
        - `quantity` deve ser um inteiro maior que zero e menor que 5, se não retornar 400.
        - ***OBS:*** Lembre de adicionar o valor ao campo ***createAt.***
- **GET** `/orders`
    - Deve retornar as informações dos pedidos
    
    Exemplo de retorno:
    
    ```json
    [
       {
    	    "client": {
    	        "id": 1,
    	        "name": "Fulana",
    	        "address": "Rua tal",
    	        "phone": "2199999999"
    	    },
    	    "cake": {
    					"id": 1
    	        "name": "Bolo de pote",
    	        "price": "13.00",
    					"description": "Bolo de chocolate com recheio de leite ninho",
    					"image": "encurtador.com.br/iDIX0",
              "flavour":"Goiaba"
    	    },
    	    "createdAt": "2022-03-16 10:30",
    	    "quantity": 2,
    	    "totalPrice": 26.00,
    		}
    ]
    ```
    
    - **Regras de Negócio**
        - Pode receber uma **query string** `date` com o formato `YYYY-MM-DD` e nesse caso, deve retornar apenas os pedidos da data especificada.
        - Caso não tenha nenhum pedido, retorna uma **array vazia** com status 404.
        - Em caso de sucesso, retorne os dados conforme o exemplo com o status 200.
            
            
- **GET** `/orders/:id`
    - Deve retornar as informações do pedido com id específico, seguindo o formato abaixo
    
    ```json
    {
        "client": {
            "id": 1,
            "name": "Fulana",
            "address": "Rua tal",
            "phone": "2199999999"
        },
        "cake": {
    				"id": 1
            "name": "Bolo de pote",
            "price": "13.00",
    				"description": "Bolo de chocolate com recheio de leite ninho",
    				"image": "encurtador.com.br/iDIX0"
            "flavour":"Goiaba"
        },
        "createdAt": "2022-03-16 10:30",
        "quantity": 2,
        "totalPrice": 26.00,
    }
    ```
    
    - **Regras de Negócio**
        - Se o **id** passado não existir ⇒ deve responder com **status 404**
        - Em caso de sucesso, deve retornar as informação seguindo o formato do exemplo junto com status 200.
- **GET**  `/clients/:id/orders`
    
    Deve retornar todos os pedidos de um determinado cliente.
    
    ```json
    [
        {
            "orderId": 1,
            "quantity": 2,
            "createdAt": "2022-03-16 10:30",
            "totalPrice": 26.00,
            "cakeName": "Bolo de pote",
            "flavour":"Goiaba"
        }
    ]
    ```
    
    - **Regras de negócio**
        - `id` caso não tenha um cliente com o ID passado, deve retornar status 404.
        - Em caso de sucesso, deve retornar os dados de acordo com o exemplo junto do status 200.
