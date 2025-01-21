**User Management System**

A RESTful API built with **Node.js**, **Express.js**, and **MongoDB** for managing users in an application. 

---

## **Features**

1. **User Features**:
   - Register a new user with name, email, password, and phone number.
   - Log in with email and password to receive a JWT token.
   - View user details (name, email, and phone number).
   - Update user profile (name and phone number).
   - Deactivate user account.

2. **Admin Features**:
   - Admin users can view all registered users.
   - Admin users can promote other users to admin (optional).

3. **Account Deactivation**:
   - Instead of deleting a user's account, the status is set to `inactive`. Inactive users cannot log in but their data is retained in the database.

4. **Data Validation**:
   - Email format validation.
   - Password must be at least 8 characters long.
   - Unique email constraint to avoid duplicate registrations.

5. **Security**:
   - Passwords are hashed using **bcrypt.js**.
   - Authentication is managed using **JWT (JSON Web Token)**.
   - Admin-only routes are protected.

---


## **Installation and Setup**

### **Prerequisites**
1. Node.js and npm installed on your system.
2. MongoDB installed and running locally or access to a MongoDB cloud instance.
3. Postman for API testing.

### **Steps to Run the Application**

1. Clone the repository:
   ```bash
   git clone https://github.com/AnshAg111/UserManagementSystem.git
   cd UserManagementSystem
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   MONGO_URI=mongodb://localhost:27017/user-management
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

4. Seed a super admin (optional):
   Run the provided script to create a super admin account:
   ```bash
   node seedAdmin.js
   ```

5. Start the server:
   ```bash
   npm run start
   ```
   The application will run on `http://localhost:5000`.

---

## **API Endpoints**

### **Authentication Routes**

| **Route**          | **Method** | **Description**                     | **Authorization** |
|---------------------|------------|-------------------------------------|-------------------|
| `/api/auth/register`| `POST`     | Register a new user                 | No                |
| `/api/auth/login`   | `POST`     | Login to get a JWT token            | No                |

---

### **User Routes**

| **Route**         | **Method** | **Description**                     | **Authorization** |
|-------------------|------------|-------------------------------------|-------------------|
| `/api/user`       | `GET`      | Get user details                    | Yes (Bearer Token)|
| `/api/user`       | `PUT`      | Update user details                 | Yes (Bearer Token)|
| `/api/user`       | `DELETE`   | Deactivate user account             | Yes (Bearer Token)|

---

### **Admin Routes**

| **Route**         | **Method** | **Description**                     | **Authorization** |
|-------------------|------------|-------------------------------------|-------------------|
| `/api/admin`      | `GET`      | Get details of all users            | Yes (Admin Only)  |
| `/api/admin/promote`| `PUT`    | Promote a user to admin             | Yes (Admin Only)  |

---

## **Testing the API**

1. Open Postman and import the `postman_collection.json` file (included in the project).
2. Set up the `base_url` and `token` variables in Postman:
   - `base_url`: `http://localhost:5000/api`
   - `token`: Use the JWT token received after login.
3. Use the endpoints provided in the collection to test features like:
   - Registering a user.
   - Logging in to receive a token.
   - Viewing and updating user details.
   - Deactivating a user account.
   - Admin-only actions (e.g., viewing all users, promoting users to admin).

---

## **Example User for Testing**

### Register a User:
```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123",
  "phone": "1234567890"
}
```

### Login:
```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```

Use the token from the login response to access authenticated routes.
