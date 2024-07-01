 
<body>
    <h1>MERN Bookstore Application</h1>

  <p>This is a MERN (MongoDB, Express.js, React, Node.js) application for managing a bookstore. It allows users to add, view, edit, and delete books.</p>
  <h2>Features</h2>
    <ul>
        <li>View a list of books</li>
        <li>Add a new book</li>
        <li>Edit book details</li>
        <li>Delete a book</li>
        <li>Display the total number of books in the footer</li>
    </ul>
    <h2>Prerequisites</h2>
    <p>Before you begin, ensure you have met the following requirements:</p>
    <ul>
        <li>Node.js and npm installed on your machine</li>
        <li>MongoDB installed and running</li>
    </ul>
    <h2>Getting Started</h2>
    <h3>Backend Setup</h3>
    <ol>
        <li><strong>Clone the repository:</strong>
            <pre><code>git clone &lt;repository-url&gt;
cd mern-bookstore</code></pre>
        </li>
        <li><strong>Navigate to the <code>backend</code> directory:</strong>
            <pre><code>cd backend</code></pre>
        </li>
        <li><strong>Install backend dependencies:</strong>
            <pre><code>npm install</code></pre>
        </li>
        <li><strong>Create a <code>.env</code> file in the <code>backend</code> directory and add your MongoDB connection string:</strong>
            <pre><code>MONGO_URI=mongodb://localhost:27017/bookstore</code></pre>
        </li>
        <li><strong>Start the backend server:</strong>
            <pre><code>npm start</code></pre>
        </li>
    </ol>

  <h3>Frontend Setup</h3>
    <ol>
        <li><strong>Navigate to the <code>frontend</code> directory:</strong>
            <pre><code>cd ../frontend</code></pre>
        </li>
        <li><strong>Install frontend dependencies:</strong>
            <pre><code>npm install</code></pre>
        </li>
        <li><strong>Start the frontend development server:</strong>
            <pre><code>npm start</code></pre>
        </li>
        <li><strong>Open your browser and navigate to:</strong>
            <pre><code>http://localhost:3000</code></pre>
        </li>
    </ol>

   <h2>Project Structure</h2>
    <pre><code>mern-bookstore/
├── backend/
│   ├── models/
│   │   └── bookModel.js
│   ├── routes/
│   │   └── bookRoutes.js
│   ├── app.js
│   ├── server.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── BookDetail.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HomePage.jsx
│   │   │   └── Modal.jsx
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── axios.js
│   ├── public/
│   ├── .env
│   ├── package.json
│   └── README.md
├── README.md
└── package.json</code></pre>

  <h2>API Endpoints</h2>
    <ul>
        <li><code>GET /books</code> - Get all books</li>
        <li><code>POST /books</code> - Add a new book</li>
        <li><code>GET /books/:id</code> - Get a single book by ID</li>
        <li><code>PATCH /books/:id</code> - Update a book by ID</li>
        <li><code>DELETE /books/:id</code> - Delete a book by ID</li>
    </ul>

   <h2>Components</h2>

   <h3>Backend Components</h3>
    <ul>
        <li><strong>Book Model (<code>bookModel.js</code>):</strong>
            <ul>
                <li>Defines the schema for the books.</li>
            </ul>
        </li>
        <li><strong>Book Routes (<code>bookRoutes.js</code>):</strong>
            <ul>
                <li>Defines the routes for the CRUD operations on books.</li>
            </ul>
        </li>
    </ul>

  <h3>Frontend Components</h3>
    <ul>
        <li><strong>HomePage (<code>HomePage.jsx</code>):</strong>
            <ul>
                <li>Displays the list of books and allows adding a new book.</li>
            </ul>
        </li>
        <li><strong>BookDetail (<code>BookDetail.jsx</code>):</strong>
            <ul>
                <li>Displays the details of a single book and allows editing or deleting the book.</li>
            </ul>
        </li>
        <li><strong>Button (<code>Button.jsx</code>):</strong>
            <ul>
                <li>A reusable button component.</li>
            </ul>
        </li>
        <li><strong>Card (<code>Card.jsx</code>):</strong>
            <ul>
                <li>A card component to display individual book details in the list.</li>
            </ul>
        </li>
        <li><strong>Footer (<code>Footer.jsx</code>):</strong>
            <ul>
                <li>A footer component that displays the total number of books.</li>
            </ul>
        </li>
        <li><strong>Modal (<code>Modal.jsx</code>):</strong>
            <ul>
                <li>A modal component for adding or editing books.</li>
            </ul>
        </li>
    </ul>
  <h2>Contact</h2>
    <p>If you have any questions or need further assistance, feel free to contact me at [abdikumela036@gmail.com].</p>

</body>
</html>
