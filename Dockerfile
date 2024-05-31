# Use Node.js version 14 as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 (the default port for Nest.js applications)
EXPOSE 3000

# Command to run the application with live reload
CMD ["npm", "run", "start:dev"]
