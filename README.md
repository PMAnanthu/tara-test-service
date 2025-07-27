# tara-test-service

A minimal Node.js web service for connectivity testing, designed to be deployed in a k3s cluster.

## Features
- Serves a simple web page to verify connectivity from different systems.
- Containerized with Docker.
- GitHub Actions workflow for Docker Hub publishing.

## Usage

### Local Development
```bash
npm install
npm start
```

Visit http://localhost:3000 to check the service.

### Docker
```bash
docker build -t yourdockerhub/tara-test-service:latest .
docker run -p 3000:3000 yourdockerhub/tara-test-service:latest
```

### Kubernetes (k3s)
Deploy using your preferred Kubernetes manifests.

## License
MIT
