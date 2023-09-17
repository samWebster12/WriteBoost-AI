FROM node:18-alpine

ARG SHOPIFY_API_KEY
ENV SHOPIFY_API_KEY=$SHOPIFY_API_KEY
EXPOSE 8081
EXPOSE 5173
WORKDIR /app 
COPY ./ /app
RUN npm install
RUN cd client && npm install
RUN cd ..
CMD ["npm", "run", "start"]
