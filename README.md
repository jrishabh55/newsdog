[![Known Vulnerabilities](https://snyk.io/test/github/jrishabh55/newsdog/badge.svg)](https://snyk.io/test/github/jrishabh55/newsdog)

#Jnegular

##APIs
####Base URL:
/api/v1/

####Authentication Headers
jnex-username\
jnex-token

###API Routes
#### Authentication not required
POST /login\
POST /register

#### Authentication required (Updated)
GET /users/profile\
POST /users/info {data, name, email, password} Required any one\
GET /users/news/{page} {page} //Optional parameter\
POST /users/news/read {id}\
GET /users/news/read\
GET /users/news/categories\
POST /users/news/categories {id?, name?} Require One of given
POST /users/withdraw/{type} {'recharge' or 'bank'}
  Type = recharge {amount, number, operator}
  Type = bank {amount}
