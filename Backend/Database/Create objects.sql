CREATE DATABASE Ecommerce
USE Ecommerce


CREATE TABLE Users
(
    userId INT IDENTITY PRIMARY KEY,
    username VARCHAR(100) ,
    email VARCHAR(255) ,
    [password] VARCHAR(255) ,
    IsDeleted BIT NOT NULL DEFAULT 0,
   IsConfirmed BIT NOT NULL DEFAULT 0,
   [role] BIT NOT NULL DEFAULT 0
   );
GO
SELECT * FROM Users

CREATE TABLE Products(
    productId INT IDENTITY PRIMARY KEY,
    productName VARCHAR(100) ,
    description VARCHAR(255) ,
    price VARCHAR(100) ,
    category VARCHAR(255) ,
    productImage TEXT
);
GO
SELECT * FROM Products

CREATE TABLE Orders(
orderId INT IDENTITY PRIMARY KEY,
totalAmount DECIMAL(12,2),
userId INT FOREIGN KEY REFERENCES Users(userId)
);
GO
SELECT * FROM Orders

CREATE TABLE OrderDetails(
orderId INT FOREIGN KEY REFERENCES Orders(orderId),
quantity INT,
unitPrice DECIMAL(12,2),
orderDate DATETIME DEFAULT GETDATE(),
productId INT FOREIGN KEY REFERENCES Products(productId)
);
GO
SELECT * FROM OrdersDetails
