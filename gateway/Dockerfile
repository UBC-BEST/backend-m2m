FROM node:14.11.0-alpine

# Create app directory
WORKDIR /usr/src/app
VOLUME [ "/usr/src/app" ]

# Install app dependencies
COPY package.json ./
COPY package-lock.json ./

RUN npm install -only=production

# Bundle app source
COPY . .

# Expose port
EXPOSE 9400

# Set runtime configurations
ENV NODE_ENV=testing
RUN addgroup -S microservices
RUN adduser -S -D -h /usr/src/app gateway microservices
RUN chown -R gateway:microservices /usr/src/app
USER gateway

# Execute server
CMD ["node", "./server.js"]
