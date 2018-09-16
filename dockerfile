#########################
### build environment ###
#########################

# base image
FROM node:8 as builder

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install -g @angular/cli@1.7.1 --unsafe

# add app
COPY . /usr/src/app

# run tests

# generate build
RUN npm run build

##################
### production ###
##################


# expose port 80
EXPOSE 80

CMD ["npm", "run", "start"]
