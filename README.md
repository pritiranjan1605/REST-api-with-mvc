## REST-API with MVC for employee management

## Overview
this majorly consist of 4 methods GET,POST,PATCH,DELETE usign these four methods we store and retrive the data from and on mongo db . 
## Table of Contents
- [Endpoints](#endpoints)
- [Authentication](#authentication)
- [Request Format](#request-format)
- [API Methods](#api-methods)
  - [1. GET](#1-get)
  - [2. POST](#2-post)
  - [3. PATCH](#3-patch)
  - [4. DELETE](#4-delete)
- [Key Notes](#key-notes)
## Endpoints
List and describe the main endpoints of your API.

- `/user`: this endpoint is used to make get and post request by which new wmployee can be created or the data of all the existing employes are fetched.
- `/user/:id`:this end point is used to retrive data of an existing employee with given id as 'id' passed as a parameter.

## Authentication
No, this api dont require any form of authentication.

## Request Format
for making a get request simply we have to pass the endpoint as '/user' ,  and the stored data of all the users will be displayed

in order to make a post request we have to pass the following parameters:-
- [Parameters](#parameters)
  - [1. firstname](#1-firstname)
  - [2. lastname](#2-lastname)
  - [3. email](#3-email)
  - [4. gender](#4-gender)

## API Methods

### 1. GET
GET method here works for two endpoints . 

#### Endpoint: `/user`
- Description: Retrives all the data of the previously stored employees.
- Example:
  ```http
  GET http://localhost:8000/user
  
#### Endpoint: `/user/:id`
- Description: Retrives all the data of the previously stored employees which have the id that is passed in the parameter.
- Example:
- parameter
 -id:65b3c84944c521ea70169822

  in place of id replace the value with the desired id whose record is needed to be retrived
  ```http
  GET http://localhost:8000/user/id

### 1. POST
POST method is used to add a new user record to the database
#### Endpoint: `/user`
- Description: use to make a new entry in the database by passing the certain parameters where the parameters are
- - [Parameters](#parameters)
  - [1. firstname](#1-firstname)
  - [2. lastname](#2-lastname)
  - [3. email](#3-email)
  - [4. gender](#4-gender)

- Example:
  ```http
  POST http://localhost:8000/user/firstname=testname&lastname=testlast&email=test@test.com&gender=test
  
## Key Notes
you can filter your query by modifying the given code like a get request can be mate with several possible conditions which woud be desined further 

in order to retrive the data and visualize the data you should have mongosh the download link is mentioned below 
```http
  https://www.mongodb.com/try/download/shell
