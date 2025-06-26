# 🚀 BookManager API

![GitHub last commit](https://img.shields.io/github/last-commit/Fransuelton/api-book?color=blue)
![GitHub repo size](https://img.shields.io/github/repo-size/Fransuelton/api-book)
![GitHub issues](https://img.shields.io/github/issues/Fransuelton/api-book)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Fransuelton/api-book)
![GitHub License](https://img.shields.io/github/license/Fransuelton/bookmanager-api)
![Project Status](https://img.shields.io/badge/status-in%20progress-yellow)
![Project Type](https://img.shields.io/badge/type-api-blue)

📌 A simple REST API for managing users and books. Allows user registration, book registration linked to users, and book listing by user. Designed as a foundation for future features like book search, login, or wishlist functionality.

---

## 📚 Table of Contents

- [🚀 BookManager API](#-bookmanager-api)
  - [📚 Table of Contents](#-table-of-contents)
  - [📝 About](#-about)
  - [✨ Features](#-features)
    - [💼 Business Rules](#-business-rules)
  - [🧰 Tech Stack](#-tech-stack)
  - [🚀 Getting Started](#-getting-started)
    - [📋 Prerequisites](#-prerequisites)
    - [🔧 Installation](#-installation)
  - [🔌 API Documentation](#-api-documentation)
    - [Example Endpoints:](#example-endpoints)
  - [📁 Folder Structure](#-folder-structure)
  - [🎯 What I Learned](#-what-i-learned)
  - [📄 License](#-license)
  - [📬 Contact](#-contact)

---

## 📝 About

This project is a backend API developed as a practical exercise with Node.js and Express. Its current focus is basic user and book management, serving as the foundation for future catalog, search, or book management applications.

---

## ✨ Features

- 👤 User registration and listing  
- 📚 Book registration linked to users  
- 🔍 Book listing by user  
- 🧱 Modular structure with Controllers, Middlewares, and Routers  
- 🚀 Code ready for future authentication and feature expansion  

### 💼 Business Rules

- It is not possible to register a user with an existing email
- It is not possible to register the same book
- It is not possible to delete a non-existent account
- It is not possible to delete a non-existent book

---

## 🧰 Tech Stack

[![My Skills](https://skillicons.dev/icons?i=js,nodejs,express)](https://skillicons.dev)

- **Backend:** Node.js / Express.js  
- **Language:** JavaScript (ES Modules)  
- **Other:** UUID for unique ID generation  

---

## 🚀 Getting Started

### 📋 Prerequisites

- Node.js >= 18.x  
- npm  
- Git  

### 🔧 Installation

```bash
# Clone the repository
git clone git@github.com:Fransuelton/api-book.git

# Navigate to the project folder
cd api-book

# Install dependencies
npm install

# Start the server
npm run dev
```

---

## 🔌 API Documentation

- Base URL: `http://localhost:3333`

### Example Endpoints:

```http
POST /users
```
Registers a new user.  
Request Body:
```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

---

```http
GET /users
```
Returns a list of all registered users.

---

```http
POST /books
```
Registers a book for an authenticated user (simulated with email header).  
Headers:
```http
email: john@example.com
```
Request Body:
```json
{
  "name": "Book Title",
  "author": "Author Name",
  "company": "Publisher",
  "description": "Book description",
  "user_id": "user-uuid"
}
```

---

```http
GET /books/:user_id
```
Returns all books linked to a specific user.

---

## 📁 Folder Structure

```bash
api-book/
├── src/
│   ├── controllers/
│   ├── data/
│   ├── middlewares/
│   ├── routes/
│   ├── app.js
│   └── server.js
├── .gitignore
├── package.json
└── README.md
```

---

## 🎯 What I Learned

During the development of this project, I practiced key backend development concepts:  

- API organization using Controllers, Middlewares, and Routers  
- Best practices with Express.js  
- Separation of data simulating future database integration  
- First steps for building fullstack projects with Node.js  

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## 📬 Contact

**Fransuelton Francisco**  
📫 contato@fransuelton.dev  
🌐 [fransuelton.dev](https://fransuelton.dev)  
🐙 [github.com/Fransuelton](https://github.com/Fransuelton)  
💼 [linkedin.com/in/fransuelton](https://www.linkedin.com/in/fransuelton)  

---

⭐️ If you found this project useful or are learning from it, please consider leaving a star!
