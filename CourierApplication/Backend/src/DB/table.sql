CREATE TABLE Users(

    id int IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    role VARCHAR(100) DEFAULT 'user' NOT NULL,
    register int NOT NULL DEFAULT 0,

)

CREATE TABLE Parcels(

    id int PRIMARY KEY IDENTITY(1,1),
    senderEmail VARCHAR(100) NOT NULL,
    receiverEmail VARCHAR(200) NOT NULL,
    trackId VARCHAR(200) NOT NULL,
    location VARCHAR(100) NOT NULL,
    destination VARCHAR(100) NOT NULL,
    dispatchedDate VARCHAR(100) NOT NULL,
    weight int NOT NULL,
    price int NOT NULL,
    markers VARCHAR(1000) NOT NULL,
    status int NOT NULL DEFAULT 0,
    deleted int NOT NULL DEFAULT 0,
)
