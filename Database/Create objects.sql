CREATE DATABASE Ecommerce
USE Ecommerce


CREATE TABLE Users
(
    userId INT IDENTITY PRIMARY KEY,
    username VARCHAR(100) ,
    email VARCHAR(255) ,
    [password] VARCHAR(255) ,
    role varchar (90),
    IsDeleted BIT NOT NULL DEFAULT 0,
   IsConfirmed BIT NOT NULL DEFAULT 0);
GO
SELECT * FROM Users
DELETE FROM Users WHERE username ='Bax'

CREATE TABLE Products(
    productId INT IDENTITY PRIMARY KEY,
    productName VARCHAR(100) ,
    description VARCHAR(255) ,
    price VARCHAR(100) ,
    category VARCHAR(255) ,
    productImage TEXT,
    userId INT FOREIGN KEY REFERENCES Users(userId)
);
GO
SELECT * FROM Products
ALTER TABLE Products alter column productImage TEXT

CREATE TABLE Orders(
        orderId INT IDENTITY PRIMARY KEY,
            userId INT FOREIGN KEY REFERENCES Users(userId),
    productId INT FOREIGN KEY REFERENCES Products(productId),
     orderDate DATETIME DEFAULT GETDATE(),
    orderTotals INT 


);
GO
SELECT * FROM Orders

CREATE TABLE Categories(
    categoryId INT IDENTITY PRIMARY KEY,
        productId INT FOREIGN KEY REFERENCES Products(productId),
        categoryName VARCHAR(255) ,
);
GO
SELECT * FROM Categories