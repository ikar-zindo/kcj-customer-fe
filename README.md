# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Running an application in Docker

```bash
# Collect images for all services
docker-compose -p ems build

# Start all services
docker-compose -p ems up -d

# Check the status of running containers
docker-compose -p ems ps

# View logs (optional)
docker-compose -p ems logs -f

# Stop all services
docker-compose -p ems stop

# Start all services
docker-compose -p ems start

# Deactivate all services (if necessary)
docker-compose -p ems down
```


```
fnm env --use-on-cd | Out-String | Invoke-Expression

npm run dev
```