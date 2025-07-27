# High Level Design: tara-test-service

## Overview
`tara-test-service` is a minimal Node.js web service designed for connectivity testing, containerized with Docker, and deployable in a k3s (Kubernetes) cluster.

## Architecture
- **Client**: Any browser or HTTP client that accesses the service endpoint.
- **tara-test-service**: Node.js Express server running in a container, serving a simple web page for connectivity verification.
- **k3s Cluster**: Lightweight Kubernetes cluster where the service is deployed as a Pod, exposed via a Kubernetes Service.

## Components
1. **Web Server**
   - Built with Node.js and Express.
   - Responds to HTTP GET requests at `/` with a simple HTML page.
2. **Docker Container**
   - Encapsulates the Node.js app for consistent deployment.
3. **Kubernetes Manifests**
   - Deployment: Manages Pod lifecycle.
   - Service: Exposes the Pod within the cluster or externally.
4. **CI/CD**
   - GitHub Actions workflow builds and pushes Docker images to Docker Hub on code changes.

## Flow Diagram
```
Client ---> [K8s Service] ---> [tara-test-service Pod]
```

## Sequence
1. User deploys the service in k3s using provided manifests.
2. Service is exposed via a NodePort/LoadBalancer/Ingress.
3. User accesses the service URL from any system to verify connectivity.

## Extensibility
- Can be extended to add health checks, authentication, or more endpoints as needed.
