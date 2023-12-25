

# ROBOTIC_WEB

### FRAMWORK (NESTJS)
### DATABASE (POSTGRESQL)
### ORM (PRISMA)


## RUN DOCKER TO GOINFREE
[42toolbox ](https://github.com/alexandregv/42toolbox) Install 42toolbox  For Run Docker in goinfree.


## RUN DOCKER

```bash
$ git clone https://github.com/alexandregv/42toolbox ~/42toolbox
```
```bash
$ cd ~/42toolbox

$ ./init_docker.sh
```


## GO TO FOLDER PROJECT

## RUN POSTGRESQL

```bash
$ cd postgresql
```
```bash
$ make
```


## INSTALLATION 

```bash
$ cd ../backend


$ npm  install


$ npx  prisma migrate dev

# UI PRISMA
$ npx prisma studio
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## DATABASE STRUCT

![drawSQL-robotic-export-2023-11-16](https://github.com/yoelhaim/back-end_robotic/assets/30368947/dd35c77b-e84a-4753-9ee1-6fdaea22f60e)


## PROVIDOR AUTHENTICATION
```bash

$$  GOOGLE
$$  INTRA42

$$  LOCAL(email password)


```


## API STRUCT
```bash

#SIGN UP
$ METHOD [POST]  /auth

#LOGIN
$ METHOD [POST]  /auth

#LOGIN WHIT GOOGLE
$ METHOD [GET]  /google

#LOGIN WITH INTRA 42
$ METHOD [GET]  /intra

#GET INFO USER
$ METHOD [PUT]  /profile/${userId}


#GET ALL USERS INFO WITH PAGINATION
$ METHOD [GET]  /profile?page=1


#UPDATE INFO
$ METHOD [PUT]  /profile/



### CATEGORIES

#CREATE catagories
$ METHOD [POST]  /catagories

#GET catagories
$ METHOD [GET]  /catagories

#GET catagories BY ID
$ METHOD [GET]  /catagories/${id}

#UPDATE catagories BY ID
$ METHOD [PUT]  /catagories/${id}

#DELETE catagories BY ID
$ METHOD [DELETE]  /catagories/${id}




### BLOGGS

#CREATE BLOGS
$ METHOD [POST]  /blog?page=1

#GET BLOGS
$ METHOD [GET]  /blog

#GET BLOG BY ID
$ METHOD [GET]  /blog/${id}

#UPDATE BLOG BY ID
$ METHOD [PUT]  /blog/${id}

#DELETE BLOG BY ID
$ METHOD [DELETE]  /blog/${id}



### COMMENTS

#CREATE COMMENTS
$ METHOD [POST]  /comment/${postId}

#GET COMMENTS BY ID POST
$ METHOD [GET]  /comment/${id}/${postId}

#UPDATE COMMENTS BY ID POST
$ METHOD [PUT]  /comment/${id}/${postId}

#DELETE COMMENTS BY ID POST
$ METHOD [DELETE]  /comment/${id}/${postId}




### LIKES

#ADD LIKE POST


$ METHOD [POST]  /like/${postId}

#GET LIKE BY ID POST
$ METHOD [GET]  /like/${id}/${postId}

#REMOVE LIKE POST
$ METHOD [PUT]  /like/${id}/${postId}


```
