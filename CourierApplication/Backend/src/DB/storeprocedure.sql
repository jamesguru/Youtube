CREATE PROCEDURE getAllParcels

AS 
 SELECT * From parcels WHERE deleted=0

 -- SOFT DELETE

CREATE PROCEDURE softDelete @id INT,@deleted INT

AS
    UPDATE Parcels SET deleted = @deleted WHERE id=@id

--GET PARCELS OWNED BY USER

CREATE PROCEDURE getParcelsForUser @email VARCHAR(100)

AS
SELECT * FROM parcels WHERE (senderEmail=@email OR receiverEmail=@email) AND deleted=0

-- DELETE PARCELS

CREATE PROCEDURE deleteParcels @id INT

AS 
 
 DELETE FROM parcels WHERE id=@id


-- Check parcel

CREATE PROCEDURE checkParcel
AS
SELECT * FROM parcels WHERE status=1

--Update status parcel and sent email

CREATE PROCEDURE updateParcelStatus
AS
UPDATE parcels SET status=2 WHERE status=1


-- SIGNIN

CREATE PROCEDURE signin @email NVARCHAR(100)

AS

SELECT * FROM Users WHERE email=@email

GO

-- SIGN UP USER


CREATE PROCEDURE signup @name NVARCHAR(100),@email NVARCHAR(100),@password NVARCHAR(200)

AS

    INSERT INTO Users(name,email,password)

    VALUES(@name, @email,@password)

GO

-- CHECK USER IN DATABASE 

CREATE PROCEDURE userLookUp @email NVARCHAR(100)

AS

SELECT * FROM Users WHERE email=@email

GO

-- CHECK USER IN DATABASE

CREATE PROCEDURE userCheck
AS 
SELECT * FROM Users WHERE register=0

--UPDATE USERS AND SEND EMAIL

CREATE PROCEDURE updateUser @id INT
AS 
UPDATE Users SET register=1 WHERE id=@id


-- UPDATE PARCEL

CREATE PROCEDURE updateParcel @id int, @status int
AS 

UPDATE Parcels SET status = @status WHERE id=@id

-- ADD PARCEL


CREATE PROCEDURE addParcel @senderEmail NVARCHAR(200),@receiverEmail  NVARCHAR(200), @trackId  NVARCHAR(200),
@location  NVARCHAR(200),@destination  NVARCHAR(200),@dispatchedDate  NVARCHAR(200),
@weight  int, @price int,@markers  NVARCHAR(200)
AS 
INSERT INTO Parcels (senderEmail,receiverEmail,trackId,location,destination,dispatchedDate,weight,price,markers)
VALUES(@senderEmail,@receiverEmail,@trackId,@location,@destination,@dispatchedDate,@weight,@price,@markers)

-- Check parcel

CREATE PROCEDURE checkParcel
AS
SELECT * FROM parcels WHERE status=1

--Update status parcel and sent email

CREATE PROCEDURE updateParcelStatus
AS
UPDATE parcels SET status=2 WHERE status=1 