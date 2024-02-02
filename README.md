# bookstore-inventary
this repository is a simple web application for inventory management of a book store with a backend that handles the logic to create, list, update and delete books, and a frontend that allows the visualization and management of the API services created in the backend.

## Installation

You can install bookstore-inventary cloning this repository:

```bash
  git clone https://github.com/Jhon-Villamizar/bookstore-inventary.git
```

and you will find 2 folders, backend and frontend, first open the folder backend in a terminal, install the libraries and run the project with:

```bash
  cd backend
  npm install
  npm run dev
```
```http
  http://localhost:4000/api/books
```

secondly, go to the frontend folder and open it in the terminal, install the libraries and run the project with:

```bash
  cd frontend
  npm install
  npm start
```
```http
  http://localhost:3000
```


## API Reference

Root path:

```http
  http://localhost:4000
```

#### Get all Books

Path:

```http
  GET /api/books
```

Response:

```javascript
[
  {
    "id": 3,
    "title": "Dracula",
    "author": "Bran Stoker",
    "price": 50,
    "stockQuantity": 150
  }
]
```

#### Get item

Path:

```http
  GET /api/books/${id}
```
Parameters:
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required** Query parameter      |

Response:

```javascript
  {
    "id": 3,
    "title": "Dracula",
    "author": "Bran Stoker",
    "price": 50,
    "stockQuantity": 150
  }
```

#### Create Book

Path:

```http
  POST /api/createBook
```
Parameters:
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`   | `string` | **Required** Body parameter       |
| `author`  | `string` | **Required** Body parameter       |
| `price`   | `number` | **Required** Body parameter       |
| `stockQuantity`| `number` | **Required** Body parameter  |

Response:

```javascript
  {
    "id": 3,
    "title": "Dracula",
    "author": "Bran Stoker",
    "price": 50,
    "stockQuantity": 150
  }
```

#### Update Book

Path:

```http
  PUT /api/updateBook/${id}
```
Parameters:
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required** Query parameter      |
| `title`   | `string` | **Required** Body parameter       |
| `author`  | `string` | **Required** Body parameter       |
| `price`   | `number` | **Required** Body parameter       |
| `stockQuantity`| `number` | **Required** Body parameter  |

Response:

```javascript
  {
    "id": 3,
    "title": "Dracula",
    "author": "Bran Stoker",
    "price": 50,
    "stockQuantity": 150
  }
```

#### Delete Book

Path:

```http
  DELETE /api/deleteBook/${id}
```
Parameters:
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required** Query parameter      |

Response:

```javascript
  {
    "message": "Book deleted"
  }
```

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://jhon-villamizar.co/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jhon-villamizar-b92818160)