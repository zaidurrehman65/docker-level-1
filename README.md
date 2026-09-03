# 🐳 Docker Level 1 — React + Vite

A beginner DevOps project focused on **containerizing a React + Vite web application using Docker**.

This project demonstrates the fundamentals of Docker, including creating a Dockerfile, building a Docker image, running containers, mapping ports, and deploying a frontend application inside a container.

## 🚀 Project Overview

This project takes a React + Vite application and packages it into a Docker container so the application can run in a consistent and isolated environment.

### What I implemented

* ⚛️ React + Vite application
* 🐳 Docker containerization
* 📦 Docker image creation
* 🔧 Custom Dockerfile
* 🌐 Container port mapping
* 🗂️ `.dockerignore` configuration
* 🧹 `.gitignore` configuration
* 💻 Local container deployment

## 🛠️ Technologies Used

| Technology | Purpose                                 |
| ---------- | --------------------------------------- |
| React      | Frontend application                    |
| Vite       | Development & build tool                |
| Docker     | Application containerization            |
| Git        | Version control                         |
| GitHub     | Source code & project hosting           |
| Node.js    | JavaScript runtime & package management |

## 📁 Project Structure

```text
docker-level-1/
├── public/
├── src/
├── .dockerignore
├── .gitignore
├── Dockerfile
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## 🐳 Docker Implementation

### 1. Build the Docker image

```bash
docker build -t docker-level-1 .
```

### 2. Run the container

```bash
docker run -p 5173:5173 docker-level-1
```

The application can then be accessed locally through:

```text
http://localhost:5173
```

## 🔍 Useful Docker Commands

Check running containers:

```bash
docker ps
```

Check all containers:

```bash
docker ps -a
```

List Docker images:

```bash
docker images
```

Stop a container:

```bash
docker stop <container-id>
```

Remove a container:

```bash
docker rm <container-id>
```

Remove an image:

```bash
docker rmi <image-id>
```

## 📚 What I Learned

Through this project, I practiced:

* Understanding Docker fundamentals
* Creating and working with a Dockerfile
* Building Docker images
* Running applications inside containers
* Mapping container ports to the host machine
* Using `.dockerignore`
* Managing Docker containers and images
* Connecting Docker with Git and GitHub
* Understanding the basic workflow of application containerization

## 🎯 Next Steps

This is **Level 1** of my DevOps learning journey.

Future improvements will include:

* Docker Compose
* Multi-stage Docker builds
* Environment variables
* Docker networking
* Container optimization
* AWS deployment
* CI/CD automation
* Infrastructure as Code

## 👨‍💻 Author

**Zaid Ur Rehman**

Aspiring DevOps & Cloud Engineer

GitHub: [@zaidurrehman65](https://github.com/zaidurrehman65)

---

⭐ This project is part of my hands-on journey toward becoming a **DevOps & Cloud Engineer**.
