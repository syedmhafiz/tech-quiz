# Tech Quiz App
> **Take the quiz and master the technology which you hate!**

A web-based quiz application built with **React** and styled with **Tailwind CSS**. Test your expertise across various tech topics in a responsive, interactive environment.

## ✨ Features

- **Interactive Quizzes**: Multiple-choice questions on programming & tech.
- **Responsive Design**: Optimized for both desktop and mobile users.
- **Real-time Scoring**: Track your performance as you go.
- **Dynamic Routing**: Smooth navigation powered by React Router.

## 🛠 Tech Stack

- **React** (v18+)
- **Tailwind CSS**
- **React Router**
- **Docker** & **Nginx**

## 🐳 Running with Docker

The app uses a multi-stage Dockerfile (Node.js for building, Nginx for serving) for optimal performance and minimal image size.

### Quick Start

**Build the image:**
```bash
docker build -t tech-quiz .
```

**Run the container:**
```bash
docker run -d -p 80:80 --name tech-quiz-app tech-quiz
```

Visit **http://localhost:80** to see the app running.

### Useful Docker Commands

**Stop the container:**
```bash
docker stop tech-quiz-app
```

**Start it again:**
```bash
docker start tech-quiz-app
```

**View logs:**
```bash
docker logs tech-quiz-app
```

**Remove the container:**
```bash
docker rm -f tech-quiz-app
```

### Using from Docker Hub

```bash
docker pull syedmhafiz/tech-quiz:latest
docker run -d -p 80:80 syedmhafiz/tech-quiz:latest
```

## 💻 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start dev server**:
   ```bash
   npm run start
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```
