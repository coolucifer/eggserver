# https://www.jianshu.com/p/8cd7ba8bc3d5
# https://nodejs.org/zh-cn/docs/guides/nodejs-docker-webapp/
# step 1
FROM node:10.16.0 as build

ENV HOST 0.0.0.0
ENV NODE_ENV=production

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./
RUN npm install --production

# if you are building your code for production
# RUN npm ci --only=production

# Boundle app source
COPY . .

# Build nuxt
# RUN npm run build

# step 2
# https://www.jianshu.com/p/147a5262e356
FROM node:10.16.0-alpine
COPY --from=build /app /app
WORKDIR /app

# Expose port
EXPOSE 7001

# Run
CMD npm start