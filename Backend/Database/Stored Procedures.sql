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
    
)
AS
BEGIN
    INSERT INTO Users
        (username, email, [password])
    VALUES
        ( @username, @email, @password)
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
CREATE OR ALTER PROCEDURE createOrder
    (
	@orderId int,
    @userId int,
    @productId int,
	@totalAmount decimal(12,2) = 0
    
)
AS
BEGIN
   INSERT INTO Orders
        (orderId, userId)
    VALUES
        ( @orderId,@userId)
END
Go
CREATE OR ALTER PROCEDURE addOrderDetails
  (
  @json NVARCHAR(1000)
  )
AS
BEGIN
   INSERT INTO OrderDetails
        (orderId, productId, unitPrice, quantity)
    SELECT orderId, productId, unitPrice, quantity
	FROM OPENJSON(@json)
	WITH(
	orderId INT,
	productId INT,
	unitPrice DECIMAL(12,2),
	quantity INT
	)
END
GO
