CREATE TABLE FlightAttendant(
    ID INTEGER PRIMARY KEY, 
    Name VARCHAR(50)
);
CREATE TABLE Copilot(
    ID INTEGER PRIMARY KEY, 
    Name VARCHAR(50)
);
CREATE TABLE Pilot(
    ID INTEGER PRIMARY KEY, 
    Name VARCHAR(50)
);
CREATE TABLE Crew(
    CrewID INTEGER PRIMARY KEY, 
    FaID INTEGER REFERENCES FlightAttendant NOT NULL, 
    CopilotID INTEGER REFERENCES Copilot NOT NULL, 
    PilotID INTEGER REFERENCES Pilot NOT NULL
);
CREATE TABLE Aircraft(
    Model VARCHAR(50) PRIMARY KEY, 
    NumSeats INTEGER, 
    NumFlightAttendants INTEGER
);
CREATE TABLE Airport(
    AirportID INTEGER PRIMARY KEY, 
    Code CHAR(3), 
    NumGates INTEGER
);
CREATE TABLE Flight(
    FlightNum INTEGER PRIMARY KEY, 
    Model VARCHAR(50) REFERENCES Aircraft, 
    CrewID INTEGER REFERENCES Crew, 
    ArriveAirport INTEGER REFERENCES Airport, 
    DepartAirport INTEGER REFERENCES Airport,
    DateArrive DATE, 
    TimeArrive TIME with time zone, 
    DateDepart DATE, 
    TimeDepart TIME with time zone
);
CREATE TABLE Customer(
    ID INTEGER PRIMARY KEY, 
    DOB DATE, 
    FreqFlyNum INTEGER, 
	Password VARCHAR(50),
    Fname VARCHAR(50), 
    Lname VARCHAR(50)
);
CREATE TABLE Book(
    BookID INTEGER PRIMARY KEY, 
    FlightNum INTEGER REFERENCES Flight, 
    CustomerThatBooked INTEGER REFERENCES Customer, 
    CustomerFlying INTEGER REFERENCES Customer
);