/*create table cargo (
	id integer primary key auto_increment,
	nome varchar(100) not null
);

create table funcionarios (
	id integer primary key auto_increment,
	nome varchar(250) not null,
	cargo_id int,
	foreign key (cargo_id) references cargo(id)
);*/

insert into cargo (nome) values ('Gerente');
insert into cargo (nome) values ('Contador');

select * from cargo;
select nome from cargo;
select nome, id  from cargo;
select * from cargo where nome = 'Gerente';

insert into funcionarios (nome, cargo_id) values ('João', 2);
insert into funcionarios (nome, cargo_id) values ('Renan', 1);

select f.id, f.nome from funcionarios f;

select f.id, f.nome, c.nome from funcionarios f inner join cargo c on f.cargo_id = c.id order by f.nome;

delete from funcionarios where id = 3;