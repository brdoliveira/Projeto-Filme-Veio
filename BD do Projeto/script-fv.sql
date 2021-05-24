create database FilmeVeio;
use FilmeVeio;

create table Usuario(
	idUsuario int primary key auto_increment,
    nome varchar(60),
    telefone char(12),
    dataNasc date,
    login varchar(16),
	senha varchar(16)
);

drop database FilmeVeio;