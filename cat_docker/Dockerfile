# images                        
# Build images                  : docker build -t zeevmindali/cats:1.0 .  (dont forget the dot)
# Display all images            : docker images
# Remove image  from            : docker image rm zeevmindali/cats:1.0 
# Login to docker registry      : docker login
# Logout from docker registry   : docker logout
# Push image to the hub         : docker push zeevmindali/cats:1.0
# Pull image from the hub       : docker pull zeevmindali/cats:1.0

# containers:
# create a new containers       : docker create --name cat-container -p 5000:4000 zeevmindali/cats:1.0
# display all containers        : docker ps -a
# start container               : docker start cat-container
# stop container                : docker stop cat-container
# start container in netowrk    : docker start cat-container --network class-82
# remove non-running container  : docker rm cat-container
# remove running container      : docker rm cat-container -f
# create & start container      : docker run -d --name cat-container -p 5000:4000 zeevmindali/cats:1.0

# networking 
# create network                : docker network create class-82
# list containers in network    : docker network inspect class-82

# inherit current image from an alpine image containing node (for latest versions use nod:alpine)
FROM node:18-alpine3.16

# install ts-node globally for running typescript
RUN npm i -g ts-node

# create an empty directory for project files and set it as the current directory:
WORKDIR /app

# copy local package.json & package-lock.json into /app
COPY package*.json /app

# install npm dependencies & devDependencies:
RUN npm i

# copy project local files (first dot) into /app:
COPY . /app

# Execute "npm start" inside /app (workdir) when container starts:
ENTRYPOINT npm start