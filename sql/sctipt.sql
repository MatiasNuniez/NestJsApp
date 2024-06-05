CREATE TYPE role AS ENUM ('admin', 'user', 'doctor');

CREATE TABLE Medicos (
    id SERIAL PRIMARY KEY, 
    nombre VARCHAR(100) NOT NULL,  
    especialidad VARCHAR(100) NOT NULL, 
    telefono VARCHAR(20), 
    email VARCHAR(100) UNIQUE,
    role role NOT NULL DEFAULT 'user',
    password VARCHAR(50),
    status BOOLEAN
);

CREATE TABLE Clientes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    telefono VARCHAR(20),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(50),
    role role NOT NULL DEFAULT 'doctor',
    status BOOLEAN
);

CREATE TABLE Turnos (
    id SERIAL PRIMARY KEY,
    fecha TIMESTAMP NOT NULL,
    medico_id INT NOT NULL,
    cliente_id INT NOT NULL,
    estado VARCHAR(50) NOT NULL,
    FOREIGN KEY (medico_id) REFERENCES Medicos(id),
    FOREIGN KEY (cliente_id) REFERENCES Clientes(id)
);

CREATE TABLE ClientesMedicos (
    cliente_id INT NOT NULL,
    medico_id INT NOT NULL,
    PRIMARY KEY (cliente_id, medico_id),
    FOREIGN KEY (cliente_id) REFERENCES Clientes(id),
    FOREIGN KEY (medico_id) REFERENCES Medicos(id)
);