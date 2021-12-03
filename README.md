# Babel Stock Manager Solution 

HOW IT WORKS

Any user can view the various wine information by entering the site. For
be able to add, note or
to comment on a product, the user must create an account with their login details. Users can search for a particular reference through the help of the search bar.

## ARCHITECTURE


### How to install it ?

First of all, to be able to use our website, you have to run 
```
npm intall -- save 
```
Create a back folder:
```
mkdir back
```

Create a customer file for the front:
```
mkdir client
```

To start the back, and to run the front use the command inside babel/client and babel/back:
```
npm run dev 
```
To start locally the db, use : 
```
docker-compose up db
```

Installation of all services in docker use the following command:

```
docker-compose up build
```

## PROJECT :

Once your project is installed.

You will be able to register your account via the register and then the login.

Once identified you will enter directly on the product list.
As a simple user you will only have access to products already registered by administrators or manager profiles.
This access allows you to know the characteristics, and to see the photo of it.



Administrators will have access to the following features:

- Crud Product
- Crud Users
- Kpi products
- Modification of user roles

This product offers managers, responsible for stock, the vision as well as the possibility of managing, controlling, training on their products.

This application was created by Franco Jonathan and Triton Rémi.

Thanks you for reading, if you have any questions, please contact : remi.triton@epitech.eu
