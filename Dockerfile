# Use the official bun image (change the tag if you wish)
FROM oven/bun:latest

# Set the working directory
WORKDIR /srv/app

# Copy only the manifests first for better caching
COPY package.json bun.lockb ./

# Install Python and make for node-gyp
RUN apt-get update && apt-get install -y python3 make build-essential && rm -rf /var/lib/apt/lists/*

# Install all dependencies (including devDependencies needed for build)
RUN bun install

# Copy the rest of the application code
COPY . .

# Build the Strapi application for production
RUN bun run build

# Set environment to production
ENV NODE_ENV=production

# Expose the default Strapi port
EXPOSE 1337

# The command to start the application
CMD ["bun", "run", "start"]
