# Use the official Node.js image
FROM node:18.12.1

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the remaining source code
COPY . .

# Copy the .env file
COPY .env .

# Expose the port 3000
EXPOSE 3000

# Define the environment variables
ENV PORT=3000
ENV POSTGRES_HOST=localhost
ENV POSTGRES_PORT=5433
ENV POSTGRES_USERNAME=root
ENV POSTGRES_PASSWORD=jlpv123
ENV POSTGRES_DATABASE=finance_db

# Start the application
CMD ["npm", "start"]
