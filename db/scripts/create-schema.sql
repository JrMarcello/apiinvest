--#######################################################################
--## 												CREATE SHEMA 												       ##
--#######################################################################
--DROP SCHEMA IF EXISTS buildinvest CASCADE;
CREATE SCHEMA buildinvest;

ALTER DATABASE buildinvest SET search_path TO buildinvest;
SET search_path TO buildinvest;

--#######################################################################
--##			    							CREATE TABLES 									 		       ##
--#######################################################################

-- DROP TABLE IF EXISTS investidor CASCADE;
CREATE TABLE investidor(
	id uuid NOT NULL,
	id_usuario uuid NOT NULL,
	cpf varchar(11),
	cnpj varchar(14),
	nome varchar(100) NOT NULL,
	razao_social varchar(100),
	endereco varchar(100) NOT NULL,
	data_criacao timestamp NOT NULL DEFAULT now(),
	ativo boolean NOT NULL DEFAULT true,
	CONSTRAINT investidor_id_pk PRIMARY KEY (id),
	CONSTRAINT investidor_cpf_uq UNIQUE (cpf),
	CONSTRAINT investidor_cnpj_uq UNIQUE (cnpj),
	CONSTRAINT investidor_razao_social_uq UNIQUE (razao_social)

);

-- DROP TABLE IF EXISTS telefone_investidor CASCADE;
CREATE TABLE telefone_investidor(
	id serial NOT NULL,
	id_investidor uuid NOT NULL,
	number varchar(11) NOT NULL,
	ativo boolean NOT NULL DEFAULT true,
	CONSTRAINT telefone_investidor_id_pk PRIMARY KEY (id)

);

-- DROP TABLE IF EXISTS construtora CASCADE;
CREATE TABLE construtora(
	id uuid NOT NULL,
	id_usuario uuid NOT NULL,
	cnpj varchar(14) NOT NULL,
	razao_social varchar(50) NOT NULL,
	nome_fantasia varchar(100) NOT NULL,
	endereco varchar(100) NOT NULL,
	data_criacao timestamp NOT NULL DEFAULT now(),
	ativo boolean NOT NULL DEFAULT true,
	CONSTRAINT construtora_id_pk PRIMARY KEY (id),
	CONSTRAINT construtora_cnpj_uq UNIQUE (cnpj)

);

-- DROP TABLE IF EXISTS obra CASCADE;
CREATE TABLE obra(
	id uuid NOT NULL,
	id_construtora uuid NOT NULL,
	spe varchar(14),
	matricula varchar(10) NOT NULL,
	nome varchar(50) NOT NULL,
	descricao text,
	endereco varchar(100) NOT NULL,
	valor numeric(11,2) NOT NULL,
	data_inicio date NOT NULL,
	data_fim date,
	data_criacao timestamp NOT NULL DEFAULT now(),
	ativo boolean NOT NULL,
	CONSTRAINT obra_id_pk PRIMARY KEY (id),
	CONSTRAINT obra_spe_uq UNIQUE (spe),
	CONSTRAINT oba_matricula_uq UNIQUE (matricula)

);

-- DROP TABLE IF EXISTS captacao CASCADE;
CREATE TABLE captacao(
	id uuid NOT NULL,
	id_obra uuid,
	id_custodiadora uuid,
	valor numeric(10,2) NOT NULL,
	data_inicio date NOT NULL,
	data_fim date NOT NULL,
	data_criacao timestamp NOT NULL DEFAULT now(),
	ativo boolean NOT NULL DEFAULT true,
	CONSTRAINT captacao_id_pk PRIMARY KEY (id)

);

-- DROP TABLE IF EXISTS investimento CASCADE;
CREATE TABLE investimento(
	id uuid NOT NULL,
	id_investidor uuid NOT NULL,
	id_captacao uuid NOT NULL,
	valor numeric(10,2) NOT NULL,
	percentual numeric(3,0) NOT NULL,
	data date NOT NULL,
	confirmado boolean NOT NULL DEFAULT false,
	data_criacao timestamp NOT NULL DEFAULT now(),
	ativo boolean NOT NULL DEFAULT true,
	CONSTRAINT investimento_id_pk PRIMARY KEY (id)

);

-- DROP TABLE IF EXISTS custodiadora CASCADE;
CREATE TABLE custodiadora(
	id uuid NOT NULL,
	cnpj varchar(14) NOT NULL,
	razao_social varchar(50) NOT NULL,
	nome_fantasia varchar(50) NOT NULL,
	cep varchar(8) NOT NULL,
	data_criacao timestamp NOT NULL DEFAULT now(),
	ativo boolean NOT NULL DEFAULT true,
	CONSTRAINT custodiadora_id_pk PRIMARY KEY (id),
	CONSTRAINT custodiadora_cnpj_uq UNIQUE (cnpj)

);

-- DROP TABLE IF EXISTS socio CASCADE;
CREATE TABLE socio(
	id uuid NOT NULL,
	id_construtora uuid NOT NULL,
	nome varchar(50) NOT NULL,
	razao_social varchar(50),
	cpf varchar(11),
	cnpj varchar(14),
	endereco varchar(100) NOT NULL,
	data_criacao timestamp NOT NULL DEFAULT now(),
	ativo boolean NOT NULL DEFAULT true,
	CONSTRAINT socio_id_pk PRIMARY KEY (id)

);

-- DROP TABLE IF EXISTS telefone_construtora CASCADE;
CREATE TABLE telefone_construtora(
	id serial NOT NULL,
	id_construtora uuid NOT NULL,
	number varchar(11) NOT NULL,
	ativo boolean NOT NULL DEFAULT true,
	CONSTRAINT telefone_construtora_id_pk PRIMARY KEY (id)

);

-- DROP TABLE IF EXISTS usuario CASCADE;
CREATE TABLE usuario(
	id uuid NOT NULL,
	id_perfil smallint NOT NULL DEFAULT 1,
	email varchar(50) NOT NULL,
	username varchar(25) NOT NULL,
	password varchar(60) NOT NULL,
	data_criacao timestamp NOT NULL DEFAULT now(),
	ativo boolean NOT NULL DEFAULT true,
	CONSTRAINT usuario_id_pk PRIMARY KEY (id),
	CONSTRAINT usuario_email_uq UNIQUE (email)

);

-- DROP TABLE IF EXISTS perfil CASCADE;
CREATE TABLE perfil(
	id smallserial NOT NULL,
	nome varchar(13) NOT NULL,
	ativo boolean NOT NULL DEFAULT true,
	CONSTRAINT perfil_id_pk PRIMARY KEY (id)

);

-- ALTER TABLE investidor DROP CONSTRAINT IF EXISTS investidor_id_usuario_fk CASCADE;
ALTER TABLE investidor ADD CONSTRAINT investidor_id_usuario_fk FOREIGN KEY (id_usuario)
REFERENCES usuario (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ALTER TABLE telefone_investidor DROP CONSTRAINT IF EXISTS telefone_investidor_id_investidor_fk CASCADE;
ALTER TABLE telefone_investidor ADD CONSTRAINT telefone_investidor_id_investidor_fk FOREIGN KEY (id_investidor)
REFERENCES investidor (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ALTER TABLE construtora DROP CONSTRAINT IF EXISTS construtora_id_usuario_fk CASCADE;
ALTER TABLE construtora ADD CONSTRAINT construtora_id_usuario_fk FOREIGN KEY (id_usuario)
REFERENCES usuario (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ALTER TABLE obra DROP CONSTRAINT IF EXISTS obra_id_construtora_fk CASCADE;
ALTER TABLE obra ADD CONSTRAINT obra_id_construtora_fk FOREIGN KEY (id_construtora)
REFERENCES construtora (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ALTER TABLE captacao DROP CONSTRAINT IF EXISTS captacao_id_custodiadora__fk CASCADE;
ALTER TABLE captacao ADD CONSTRAINT captacao_id_custodiadora__fk FOREIGN KEY (id_custodiadora)
REFERENCES custodiadora (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ALTER TABLE captacao DROP CONSTRAINT IF EXISTS captacao_id_obra_fk CASCADE;
ALTER TABLE captacao ADD CONSTRAINT captacao_id_obra_fk FOREIGN KEY (id_obra)
REFERENCES obra (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ALTER TABLE investimento DROP CONSTRAINT IF EXISTS investimento_id_investidor_fk CASCADE;
ALTER TABLE investimento ADD CONSTRAINT investimento_id_investidor_fk FOREIGN KEY (id_investidor)
REFERENCES investidor (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ALTER TABLE investimento DROP CONSTRAINT IF EXISTS investimento_id_captacao_fk CASCADE;
ALTER TABLE investimento ADD CONSTRAINT investimento_id_captacao_fk FOREIGN KEY (id_captacao)
REFERENCES captacao (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ALTER TABLE socio DROP CONSTRAINT IF EXISTS socio_id_construtora_fk CASCADE;
ALTER TABLE socio ADD CONSTRAINT socio_id_construtora_fk FOREIGN KEY (id_construtora)
REFERENCES construtora (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ALTER TABLE telefone_construtora DROP CONSTRAINT IF EXISTS telefone_construtora_id_construtora_fk CASCADE;
ALTER TABLE telefone_construtora ADD CONSTRAINT telefone_construtora_id_construtora_fk FOREIGN KEY (id_construtora)
REFERENCES construtora (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ALTER TABLE usuario DROP CONSTRAINT IF EXISTS usuario_id_perfil_fk CASCADE;
ALTER TABLE usuario ADD CONSTRAINT usuario_id_perfil_fk FOREIGN KEY (id_perfil)
REFERENCES perfil (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;



--#######################################################################
--##			    								INSERT DATA										 		       ##
--#######################################################################
INSERT INTO perfil (nome) VALUES 
  ('Investidor'),
  ('Contrutor'),
  ('Admin');
