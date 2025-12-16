# Tech Quiz App
> **Take the quiz and master the technology which you hate!**

A web-based quiz application built with **React** and styled with **Tailwind CSS**. Test your expertise across various tech topics in a responsive, interactive environment.


## Features

- **Interactive Quizzes**: Multiple-choice questions on programming & tech.
- **Responsive Design**: Optimized for both desktop and mobile users.
- **Real-time Scoring**: Track your performance as you go.
- **Dynamic Routing**: Smooth navigation powered by React Router.

## Tech Stack

- **React** (v18+)
- **Tailwind CSS**
- **React Router**
- **Docker** & **Nginx**

## Running with Docker

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

## Local Development

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

## CI/CD Deployment

This project includes an automated CI/CD pipeline that builds and pushes Docker images to **Amazon ECR**.

### 🚀 Quick Start

1. **Create ECR Repository**
   ```bash
   aws ecr create-repository --repository-name tech-quiz --region us-west-2
   ```

2. **Configure GitHub Secrets**
   - `AWS_ACCESS_KEY_ID` - Your AWS access key
   - `AWS_SECRET_ACCESS_KEY` - Your AWS secret key

3. **Push to main branch**
   ```bash
   git push origin main
   ```

###  Workflow

The pipeline automatically:
- ✅ Runs tests and builds the React app
- ✅ Creates a Docker image
- ✅ Pushes to Amazon ECR
- ✅ Runs security scanning with Trivy
- ✅ Optionally pushes to Docker Hub

### Image Tags

Images are tagged with:
- `latest` - Most recent build
- `main-<sha>` - Specific commit
- `YYYYMMDD-HHmmss` - Timestamp

### Pull from ECR

```bash
# Login to ECR
aws ecr get-login-password --region us-west-2 | \
    docker login --username AWS --password-stdin \
    <account-id>.dkr.ecr.us-west-2.amazonaws.com

# Pull and run
docker pull <account-id>.dkr.ecr.us-west-2.amazonaws.com/tech-quiz:latest
docker run -p 80:80 <account-id>.dkr.ecr.us-west-2.amazonaws.com/tech-quiz:latest
```

## Kubernetes Deployment (Minikube)

Deploy the app to a local Kubernetes cluster using Minikube.

### Prerequisites

Install the required tools on macOS:

```bash
# Install kubectl
brew install kubectl

# Install Minikube
brew install minikube
```

### Start Minikube

```bash
# Start cluster with Docker driver
minikube start --driver=docker

# Verify cluster is running
minikube status
kubectl get nodes
```

### Deploy the App

```bash
# Apply all manifests (namespace, deployment, service, ingress)
kubectl apply -f manifests/

# Watch pods come up
kubectl get pods -n tech-quiz -w

# Get the URL to access the app
minikube service tech-quiz -n tech-quiz --url
```

### Access via Ingress (Optional)

For hostname-based access:

```bash
# Enable ingress addon
minikube addons enable ingress

# Add to /etc/hosts
echo "$(minikube ip) tech-quiz.local" | sudo tee -a /etc/hosts

# Access in browser
open http://tech-quiz.local
```

### Local Image Build (Without Registry)

Build and deploy without pushing to a registry:

```bash
# Point Docker to Minikube's daemon
eval $(minikube docker-env)

# Build image inside Minikube
docker build -t tech-quiz:local .

# Update deployment to use local image
# Edit k8s/deployment.yaml: image: tech-quiz:local, imagePullPolicy: Never
kubectl apply -f manifests/
```

### Useful kubectl Commands

```bash
# View all resources in namespace
kubectl get all -n tech-quiz

# View pod logs
kubectl logs -f deployment/tech-quiz -n tech-quiz

# Exec into a pod
kubectl exec -it deployment/tech-quiz -n tech-quiz -- sh

# Scale replicas
kubectl scale deployment tech-quiz --replicas=3 -n tech-quiz

# Rollout status
kubectl rollout status deployment/tech-quiz -n tech-quiz

# Rollback to previous version
kubectl rollout undo deployment/tech-quiz -n tech-quiz

# Delete all resources
kubectl delete -f manifests/
```

## License

MIT
