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

create table Publicacao(
	idChat int primary key auto_increment,
    descricao varchar(200),
    fk_usuario int
);
alter table Publicacao add foreign key (fk_usuario) references Usuario(idUsuario);

drop database FilmeVeio;