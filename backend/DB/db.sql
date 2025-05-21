CREATE DATABASE MoviesDB;

USE MoviesDB;

CREATE TABLE Media (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Title NVARCHAR(200) NOT NULL,
    Overview NVARCHAR(MAX),
    PosterPath NVARCHAR(255),
    ReleaseDate DATE,
    VoteAverage DECIMAL(3,1),
    MediaType CHAR(1) NOT NULL,
    Seasons INT NULL,
    TotalEpisodes INT NULL,
    DurationMinutes INT NULL,
    CreatedAt DATETIME DEFAULT GETDATE()
);

CREATE TABLE Users (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) UNIQUE NOT NULL,
    Password NVARCHAR(255) NOT NULL,
    CreatedAt DATETIME DEFAULT GETDATE()
);

CREATE TABLE Favorites (
    UserId INT NOT NULL,
    MediaId INT NOT NULL,
    AddedAt DATETIME DEFAULT GETDATE(),
    PRIMARY KEY (UserId, MediaId),
    FOREIGN KEY (UserId) REFERENCES Users(Id) ON DELETE CASCADE,
    FOREIGN KEY (MediaId) REFERENCES Media(Id) ON DELETE CASCADE
);

CREATE TABLE Genres (
    Id INT PRIMARY KEY,
    Name NVARCHAR(50) NOT NULL
);

CREATE TABLE MediaGenres (
    MediaId INT NOT NULL,
    GenreId INT NOT NULL,
    PRIMARY KEY (MediaId, GenreId),
    FOREIGN KEY (MediaId) REFERENCES Media(Id) ON DELETE CASCADE,
    FOREIGN KEY (GenreId) REFERENCES Genres(Id) ON DELETE CASCADE
);

INSERT INTO Users (Name, Email, Password)
VALUES ('John Doe', 'correo@email.com', 'securepassword123');

INSERT INTO Genres (Id, Name)
VALUES 
  (1, 'Action'),
  (2, 'Crime'),
  (3, 'Drama'),
  (4, 'Thriller'), 
  (5, 'Adventure');

INSERT INTO Media (Title, Overview, PosterPath, ReleaseDate, VoteAverage, MediaType, Seasons, TotalEpisodes, DurationMinutes)
VALUES 
  ('Skyfall', 'James Bond becomes M as MI6 is attacked, and he must track down and destroy the threat.', 
   'https://artofthemovies.co.uk/cdn/shop/files/IMG_7829_720x@2x.jpg?v=1723206212', 
   '2012-11-09', 7.8, 'M', NULL, NULL, 143),

  ('John Wick', 'An ex-hitman comes out of retirement to hunt down the gangsters that killed his dog.', 
   'https://m.media-amazon.com/images/I/71i6JuSZUGL.jpg', 
   '2014-10-24', 7.4, 'M', NULL, NULL, 101),

  ('The Dark Knight', 'Batman battles the Joker, Gotham’s greatest threat, in this gripping thriller.', 
   'https://www.kwikkopy.com.au/wp-content/uploads/2014/11/The-Dark-Knight.jpg', 
   '2008-07-18', 9.0, 'M', NULL, NULL, 152);

INSERT INTO MediaGenres (MediaId, GenreId)
VALUES 
  (1, 5),
  (1, 4),
  (2, 1),
  (2, 4),
  (2, 2),
  (3, 1),
  (3, 2),
  (3, 3);

INSERT INTO Favorites (UserId, MediaId)
VALUES 
  (1, 1), 
  (1, 2),
  (1, 3);