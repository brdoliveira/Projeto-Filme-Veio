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

create table Chat(
 idChat int primary key auto_increment,
 nomeChat varchar(50)
);

insert into Chat values(null, 'Geral'),(null,'Film Noir'),(null,'Classicos'),(null,'Spaghetti Western');
select * from chat;

create table Publicacao(
	idPublicacao int primary key auto_increment,
    descricao varchar(200),
    fkUsuario int,
    fkChat int
);
alter table Publicacao add foreign key (fkUsuario) references Usuario(idUsuario);
alter table Publicacao add foreign key (fkChat) references Chat(idChat);

drop database FilmeVeio;