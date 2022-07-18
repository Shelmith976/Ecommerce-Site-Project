CREATE or alter PROCEDURE EmailVerify(
    @email VARCHAR(255)
)
AS
BEGIN
    SELECT *
    FROM Users
    WHERE email = @email
END
GO

CREATE or alter PROCEDURE UsernameVerify(
    @username VARCHAR(100)
)
AS
BEGIN
    SELECT *
    FROM Users
    WHERE username = @username
END
GO

CREATE OR ALTER PROCEDURE addUsers
    (
    @username VARCHAR(100),
    @email VARCHAR(255),
    @password VARCHAR(255),
    @role VARCHAR(90)
)
AS
BEGIN
    INSERT INTO Users
        (username, email, [password], role)
    VALUES
        ( @username, @email, @password, @role)
END
Go

CREATE OR ALTER PROCEDURE updateProducts
    (
    @productId int,
    @productName VARCHAR(100),
    @description VARCHAR(255),
    @price VARCHAR(255),
    @category VARCHAR(255),
    @productImage text
)
AS
BEGIN
UPDATE Products
 SET
 productName=@productName,description=@description,price=@price,
 category=@category,productImage=@productImage WHERE productId=@productId
   
END
Go

CREATE OR ALTER PROCEDURE addProducts
    (
    @productName VARCHAR(100),
    @description VARCHAR(255),
    @price VARCHAR(255),
    @category VARCHAR(255),
    @productImage text
)
AS
BEGIN
   INSERT INTO Products
        ( productName, description, price, category, productImage)
    VALUES
        (  @productName,  @description , @price,@category, @productImage)
END
Go

CREATE OR ALTER PROCEDURE addCategories
    (
    @categoryName VARCHAR(100),
    @productId int 
)
AS
BEGIN
   INSERT INTO Categories
        (categoryName, productId)
    VALUES
        (  @categoryName, @productId)
END
Go
CREATE OR ALTER PROCEDURE addOrders
    (
    @userId int,
    @productId int ,
    @orderTotals int
)
AS
BEGIN
   INSERT INTO Orders
        (userId, productId, orderTotals)
    VALUES
        (  @userId, @productId,@orderTotals)
END
Go