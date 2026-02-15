---
sidebar_label: Database Diagrams
sidebar_position: 1
description: Entity-Relationship Diagram and Relational Schema
---


# Database Documentation

## Entity-Relationship Diagram
![Capstone ERD](databaseImages/Capstone%20ERD.png)

## Relational Schema
![Capstone Relational Schema](databaseImages/Capstone%20Relational%20Schema.png)


## Code
```CREATE TABLE INTEREST
(
  name VARCHAR NOT NULL,
  Interest_ID INT NOT NULL,
  Interest_Icon NOT NULL,
  PRIMARY KEY (Interest_ID)
);

CREATE TABLE BEACON
(
  Room_ID INT NOT NULL,
  SerialNum INT NOT NULL,
  LocationName VARCHAR NOT NULL,
  PRIMARY KEY (Room_ID)
);

CREATE TABLE USER
(
  User_ID INT NOT NULL,
  UserName VARCHAR NOT NULL,
  Password VARCHAR NOT NULL,
  Email VARCHAR NOT NULL,
  Room_ID INT NOT NULL,
  PRIMARY KEY (User_ID),
  FOREIGN KEY (Room_ID) REFERENCES BEACON(Room_ID)
);

CREATE TABLE PHRASE
(
  PhraseText VARCHAR NOT NULL,
  Phrase_ID INT NOT NULL,
  Phrase_Icon jpg NOT NULL,
  Interest_ID INT NOT NULL,
  PRIMARY KEY (Phrase_ID),
  FOREIGN KEY (Interest_ID) REFERENCES INTEREST(Interest_ID)
);

CREATE TABLE HAS
(
  User_ID INT NOT NULL,
  Interest_ID INT NOT NULL,
  PRIMARY KEY (User_ID, Interest_ID),
  FOREIGN KEY (User_ID) REFERENCES USER(User_ID),
  FOREIGN KEY (Interest_ID) REFERENCES INTEREST(Interest_ID)
);```