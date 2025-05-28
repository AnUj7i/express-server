# Express Server

A lightweight, production-ready Express.js server template designed for rapid development and deployment. This project provides a solid foundation for building REST APIs, web applications, and microservices.

## 🚀 Features

- **Minimal Setup**: Get started with just a few commands
- **Hot Reload**: Development server with automatic restart on file changes
- **Error Handling**: Built-in error handling middleware
- **CORS Support**: Cross-origin resource sharing configured
- **Environment Variables**: Configuration management with dotenv
- **Logging**: Request logging with Morgan
- **Security**: Basic security headers with Helmet
- **JSON Support**: Built-in JSON parsing middleware

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 14.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** as package manager
- **Git** (optional) - [Download here](https://git-scm.com/)

You can verify your installations by running:
```bash
node --version
npm --version
```

## 🛠️ Installation

### Option 1: Clone the Repository
```bash
# Clone the repository
git clone https://github.com/AnUj7i/express-server.git

# Navigate to project directory
cd express-server

# Install dependencies
npm install
```

### Option 2: Start from Scratch
```bash
# Create new directory
mkdir my-express-server
cd my-express-server

# Initialize npm project
npm init -y

# Install Express and dependencies
npm install express cors helmet morgan dotenv
npm install -D nodemon
```

## 🚦 Quick Start

### Development Mode
```bash
# Start with hot reload (recommended for development)
npm run dev

# Or using npx
npx nodemon index.js
```

### Production Mode
```bash
# Start the server
npm start

# Or directly with node
node index.js
```

The server will start on `http://localhost:3000` by default.

## 📁 Project Structure

```
express-server/
├── index.js              # Main server file
├── package.json          # Project dependencies and scripts
├── .env                  # Environment variables (create this)
├── .gitignore           # Git ignore rules
├── routes/              # Route handlers (optional)
│   ├── api.js
│   └── auth.js
├── middleware/          # Custom middleware (optional)
│   └── errorHandler.js
├── public/              # Static files (optional)
│   ├── css/
│   ├── js/
│   └── images/
└── README.md           # This file
```

## ⚙️ Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database (if applicable)
DB_HOST=localhost
DB_PORT=5432
DB_NAME=myapp
DB_USER=username
DB_PASS=password

# JWT Secret (if using authentication)
JWT_SECRET=your-super-secret-key

# API Keys
API_KEY=your-api-key
```

### Package.json Scripts
Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest",
    "lint": "eslint .",
    "format": "prettier --write ."
  }
}
```

## 🔧 Enhanced Server Example

Here's an enhanced version of the server with additional features:

```javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(morgan('combined')); // Request logging
app.use(express.json({ limit: '10mb' })); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.static('public')); // Serve static files

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Express Server!',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api', require('./routes/api')); // If you have API routes

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.originalUrl
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`⏰ Started at: ${new Date().toLocaleString()}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  process.exit(0);
});
```

## 🛣️ Adding Routes

### Basic Route Example
```javascript
// In routes/api.js
const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  res.json({ users: [] });
});

router.post('/users', (req, res) => {
  const { name, email } = req.body;
  // Add user logic here
  res.status(201).json({ message: 'User created', user: { name, email } });
});

module.exports = router;
```

## 🔒 Security Best Practices

- **Use Helmet**: Adds security headers
- **Validate Input**: Always validate and sanitize user input
- **Rate Limiting**: Implement rate limiting for APIs
- **HTTPS**: Use HTTPS in production
- **Environment Variables**: Never commit sensitive data
- **Update Dependencies**: Keep packages up to date

## 🧪 Testing

### Install Testing Dependencies
```bash
npm install -D jest supertest
```

### Example Test
```javascript
// tests/server.test.js
const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('should return welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Welcome to Express Server!');
  });
});
```

## 🚀 Deployment

### Heroku
```bash
# Install Heroku CLI and login
heroku create your-app-name
git push heroku main
```

### Docker
```dockerfile
# Dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]
```

### PM2 (Process Manager)
```bash
# Install PM2 globally
npm install -g pm2

# Start application with PM2
pm2 start index.js --name "express-server"

# Save PM2 configuration
pm2 save
pm2 startup
```

## 📚 Additional Resources

### Express.js Resources
- [Express.js Official Documentation](https://expressjs.com/)
- [Express.js GitHub Repository](https://github.com/expressjs/express)
- [Express.js Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)

### Node.js Resources
- [Node.js Documentation](https://nodejs.org/docs/)
- [NPM Documentation](https://docs.npmjs.com/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

### Learning Materials
- [MDN Express Tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)
- [freeCodeCamp Node.js Course](https://www.freecodecamp.org/learn/back-end-development-and-apis/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Find process using port 3000
lsof -i :3000
# Kill the process
kill -9 <PID>
```

**Module not found:**
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Permission denied (macOS/Linux):**
```bash
# Fix npm permissions
sudo chown -R $(whoami) ~/.npm
```

## 📞 Support

- 📧 Email: your-email@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/AnUj7i/express-server/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/AnUj7i/express-server/discussions)

---

**Happy Coding! 🎉**

*Made with ❤️ by [AnUj7i](https://github.com/AnUj7i)*
