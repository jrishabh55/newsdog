#Jnegular 

##APIs
####Base URL: 
/api/v1/

####Auth Headers
jnex-username\
jnex-token

###API Routes
#### Auth not required
POST /login\
POST /register

#### Auth required
GET /users/profile\
POST /users/info\
GET /users/news/{page} {page} //Optional parameter\
POST /users/news/read {id}\
GET /users/news/read\
GET /users/news/categories\
POST /users/news/categories {id?, name?} Require One of given
