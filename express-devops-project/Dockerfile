FROM node:18

WORKDIR /mymainapp

COPY . .

RUN npm config set strict-ssl false
RUN npm install

RUN npm install typescript -g
RUN npm run 
# Expose the container port
# EXPOSE 3001
# # Start the application
# CMD [ "node", "index.js" ]

ENTRYPOINT NODE_APP= node index.js  --host=0.0.0.0 --port=3000





