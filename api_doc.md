# GameRoom API Documentation

## Endpoints

### List of Available Endpoints:

#### Game Room

- **GET** `/gamerooms`
- **GET** `/gamerooms/:id`
- **PATCH** `/gamerooms/:id`
- **PATCH** `/gamerooms/:id/reset`

#### Gemini

- **GET** `/generate-name`

---

### 1. GET `/gamerooms`

**Description:**  
Retrieve all available game rooms.

**Request:**  
No parameters required.

**Response:**

- **200 - OK**

  ```json
  [
    {
      "id": 1,
      "player1": "string",
      "player2": "string",
      "isFull": false
    }
  ]
  ```

- **500 - Internal Server Error**
  ```json
  {
    "message": "Internal Server Error"
  }
  ```

---

### 2. GET `/gamerooms/:id`

**Description:**  
Retrieve a single game room by its ID.

**Request:**

- **Params:**
  ```json
  {
    "id": "number (required)"
  }
  ```

**Response:**

- **200 - OK**

  ```json
  {
    "id": 1,
    "player1": "string",
    "player2": "string",
    "isFull": false
  }
  ```

- **404 - Not Found**

  ```json
  {
    "message": "Room id <id> not found"
  }
  ```

- **500 - Internal Server Error**
  ```json
  {
    "message": "Internal Server Error"
  }
  ```

---

### 3. PATCH `/gamerooms/:id`

**Description:**  
Join a game room by updating it with a player's name.

**Request:**

- **Params:**

  ```json
  {
    "id": "number (required)"
  }
  ```

- **Body:**
  ```json
  {
    "name": "string (required)"
  }
  ```

**Response:**

- **200 - OK**

  ```json
  {
    "id": 1,
    "player1": "string",
    "player2": "string",
    "isFull": true
  }
  ```

- **400 - Bad Request**

  ```json
  {
    "message": "Room id <id> is full"
  }
  ```

- **404 - Not Found**

  ```json
  {
    "message": "Room id <id> not found"
  }
  ```

- **500 - Internal Server Error**
  ```json
  {
    "message": "Internal Server Error"
  }
  ```

---

### 4. PATCH `/gamerooms/:id/reset`

**Description:**  
Reset a specific game room to its initial state (clears players and sets `isFull` to `false`).

**Request:**

- **Params:**
  ```json
  {
    "id": "number (required)"
  }
  ```

**Response:**

- **200 - OK**

  ```json
  {
    "id": 1,
    "player1": null,
    "player2": null,
    "isFull": false
  }
  ```

- **404 - Not Found**

  ```json
  {
    "message": "Room id <id> not found"
  }
  ```

- **500 - Internal Server Error**
  ```json
  {
    "message": "Internal Server Error"
  }
  ```

---

### 5. GET `/generate-name`

**Description:**  
Generate a random character full name from Dora the Explorer (excluding Swiper).

**Request:**  
No body or parameters required.

**Response:**

- **200 - OK**

  ```json
  "Dora Márquez"
  ```

- **500 - Internal Server Error**
  ```json
  {
    "message": "Internal Server Error"
  }
  ```
