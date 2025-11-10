# 📨 Mini Message Board

A simple **Node.js + Express + EJS** application that lets users post short messages and view them in a message board format.  
Built as part of an introductory Express.js exercise.

---

## 📁 Project Structure

```

mini-message-board/
│
├── app.js
├── package.json
├── routes/
│   └── index.js
├── views/
│   ├── index.ejs
│   ├── form.ejs
│   └── message.ejs
├── public/
│   └── style.css
└── README.md

```

---

## 🚀 Features

- Displays a list of messages.
- Allows users to submit new messages via a form.
- Shows detailed view for each message.
- Automatically redirects to the main page after posting a new message.
- Uses EJS templating engine for dynamic rendering.

---

## 🧰 Technologies Used

- **Node.js** – JavaScript runtime environment
- **Express.js** – Web framework for Node.js
- **EJS (Embedded JavaScript)** – Template engine for rendering dynamic HTML
- **CSS** – Basic styling

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/kaziarman23/odin-mini-message-board.git
cd odin-mini-message-board
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Server

```bash
node app.js
```

---

## 🌐 Routes

| Route          | Method | Description                                      |
| -------------- | ------ | ------------------------------------------------ |
| `/`            | GET    | Displays all messages                            |
| `/new`         | GET    | Displays the form to add a new message           |
| `/new`         | POST   | Handles form submission and adds the new message |
| `/message/:id` | GET    | Displays details for a specific message          |

---

## 💬 Example Messages

```js
const messages = [
  { text: "Hi there!", user: "Amando", added: new Date() },
  { text: "Hello World!", user: "Charles", added: new Date() },
];
```

---

## 🧠 How It Works

1. **Home Page (`/`)**
   Displays all messages stored in the `messages` array.

2. **New Message Form (`/new`)**
   Contains inputs for name and message text. When submitted, it sends a `POST` request to `/new`.

3. **Form Submission**
   The app extracts data from `req.body`, adds it to the `messages` array, and redirects back to `/`.

4. **Message Detail Page (`/message/:id`)**
   Displays a single message's content, author, and date.

---

## 🧩 Middleware Used

```js
app.use(express.urlencoded({ extended: true }));
```

This middleware parses form submissions so they can be accessed via `req.body`.

---

## 🧾 License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing

Pull requests are welcome!
If you’d like to make improvements or add features, feel free to fork this repo and open a PR.

---

### ✨ Author

Created by **[Kazi Arman]**
📧 [[Email](mailto:kaziarman@proton.me)]
🌐 [[Github](https://github.com/kaziarman23)]
