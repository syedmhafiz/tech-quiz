# Step 1: Uses a Node.js image to build the app
# We name this stage 'build' to refer to it later
FROM node:18-alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy package files first (better for caching)
COPY package.json package-lock.json ./

# Install the project dependencies
RUN npm ci

# Copy the rest of the source code
COPY . .

# Run the build script from package.json
RUN npm run build

# Step 2: Use a lightweight Nginx image to serve the static files
FROM nginx:alpine

# Copy the production build files from the 'build' stage to Nginx's default folder
COPY --from=build /app/build /usr/share/nginx/html

# Copy our custom Nginx config that handles React Router properly
# This replaces the default config and ensures all routes serve index.html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Tell Docker that this container listens on port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
