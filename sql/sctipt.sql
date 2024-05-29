create table Usuarios (
	usuarioID serial primary key,
	nombre varchar (20),
	apellido varchar (20),
	telefono varchar(20)
)

create table Responsable (
	usuarioID int references Usuarios(usuarioID),
	responsableID serial primary key,
	nombre varchar(20),
	matricula varchar(20),
	telefono varchar(20)
)

create table Turnos(
	turnosID serial primary key,
	usuarioID int references Usuarios(usuarioID),
	responsableID int references Responsable(responsableID),
	fecha date,
	hora TIME
)