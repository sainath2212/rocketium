**Project: Language and Bio Information API**

This API allows users to fetch data with filtering and sorting functionalities. Below is a detailed explanation of all endpoints and possible cases.

---

## **Base URL**
`http://localhost:3000`

---

## **Endpoints**

### 1. **Initialize Data**
**URL:** `/`  
**Method:** `GET`  
**Description:** Initializes dummy data if not already present.  

#### **Response**
- **Success:**  
  ```json
  {
    "message": "Dummy data initialized"
  }
  ```

---

### 2. **Data Filtering and Sorting**
**URL:** `/data`  
**Method:** `GET`  
**Description:** Fetches data with optional filtering and sorting capabilities.  

#### **Query Parameters**
| Parameter  | Required | Description                                      | Example Values         |
|------------|----------|--------------------------------------------------|------------------------|
| `filterBy` | No       | Field to filter the data by.                     | `name`, `language`, `id`, `bio`, `version` |
| `value`    | No       | Value to filter the data.                        | `Adeel`, `Sindhi`, `V59OF92YF627HFY0` |
| `sortBy`   | No       | Field to sort the data by.                       | `name`, `language`, `id`, `bio`, `version` |
| `order`    | No       | Sort order. Defaults to `asc`.                   | `asc`, `desc` |

#### **Valid Fields**
- `name`
- `language`
- `id`
- `bio`
- `version`

---

### **Example Requests and Responses**

#### **1. Fetch All Data Without Filters or Sorting**
- **Request:**  
  `GET /data`
- **Response:**  
  ```json
  [
    {
      "name": "Adeel Solangi",
      "language": "Sindhi",
      "id": "V59OF92YF627HFY0",
      "bio": "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum.",
      "version": 6.1
    },
    {
      "name": "Afzal Ghaffar",
      "language": "Sindhi",
      "id": "ENTOCR13RSCLZ6KU",
      "bio": "Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et.",
      "version": 1.88
    },...
  ]
  ```

#### **2. Fetch Data with Filtering (Valid Filter)**
- **Request:**  
  `GET /data?filterBy=name&value=Adeel Solangi`
- **Response:**  
  ```json
  [
    {
      "name": "Adeel Solangi",
      "language": "Sindhi",
      "id": "V59OF92YF627HFY0",
      "bio": "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum.",
      "version": 6.1
    },...
  ]
  ```

#### **3. Fetch Data with Sorting (Valid Sort)**
- **Request:**  
  `GET /data?sortBy=name&order=desc`
- **Response:**  
  ```json
  [
    {
      "name": "Adeel Solangi",
      "language": "Sindhi",
      "id": "V59OF92YF627HFY0",
      "bio": "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum.",
      "version": 6.1
    },
    {
      "name": "Afzal Ghaffar",
      "language": "Sindhi",
      "id": "ENTOCR13RSCLZ6KU",
      "bio": "Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et.",
      "version": 1.88
    },...
  ]
  ```

#### **4. Fetch Data with Filtering and Sorting**
- **Request:**  
  `GET /data?filterBy=bio&value=Donec lobortis&sortBy=name&order=asc`
- **Response:**  
  ```json
  [
    {
      "name": "Adeel Solangi",
      "language": "Sindhi",
      "id": "V59OF92YF627HFY0",
      "bio": "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum.",
      "version": 6.1
    }...
  ]
  ```

#### **5. Invalid `filterBy` Field**
- **Request:**  
  `GET /data?filterBy=invalidField&value=Donec lobortis`
- **Response:**  
  ```json
  {
    "error": "Invalid filter field: invalidField. Valid fields are: name, language, id, bio, version"
  }
  ```

#### **6. Invalid `sortBy` Field**
- **Request:**  
  `GET /data?sortBy=invalidField`
- **Response:**  
  ```json
  {
    "error": "Invalid sort field: invalidField. Valid fields are: name, language, id, bio, version"
  }
  ```

#### **7. Both `filterBy` and `sortBy` Fields Are Invalid**
- **Request:**  
  `GET /data?filterBy=invalidFilter&value=test&sortBy=invalidSort`
- **Response:**  
  ```json
  {
    "error": "Invalid filter field: invalidFilter and sort field: invalidSort. Valid fields are: name, language, id, bio, version"
  }
  ```

#### **8. Missing `value` with `filterBy`**
- **Request:**  
  `GET /data?filterBy=name`
- **Response:**  
  ```json
  {
    "error": "Please provide a value to filter in query"
  }
  ```
---

## **Error Handling**

### **Common Error Responses**

1. **Invalid Filter Field**  
   When an invalid filter field is provided:
   ```json
   {
     "error": "Invalid filter field: <invalidFilter>. Valid fields are: name, language, id, bio, version"
   }
   ```

2. **Invalid Sort Field**  
   When an invalid sort field is provided:
   ```json
   {
     "error": "Invalid sort field: <invalidSort>. Valid fields are: name, language, id, bio, version"
   }
   ```

3. **Missing `value` for Filter**
   When `filterBy` is provided without a corresponding `value`:
   ```json
   {
     "error": "Please provide a value to filter in query"
   }
   ```

4. **Both Invalid `filterBy` and `sortBy`**
   When both `filterBy` and `sortBy` fields are invalid:
   ```json
   {
     "error": "Invalid filter field: <invalidFilter> and sort field: <invalidSort>. Valid fields are: name, language, id, bio, version"
   }
   ```

---

## **Development Notes**
- Ensure to initialize data before accessing the `/data` endpoint if dummy data has not been created.
- Sorting and filtering are case-insensitive.
- Sorting supports both ascending (`asc`) and descending (`desc`) orders.
- Valid fields for filtering and sorting are predefined (`name`, `language`, `id`, `bio`, `version`).

---

## **Setup Instructions**

1. **Clone the repository**
   ```bash
   git clone <repository_url>
   cd <repository_folder>
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Application**
   ```bash
   npm start or node app.js
   ```

4. **Test the Endpoints**
   You can test the API using tools like Postman or cURL to check various filtering and sorting cases.

---
