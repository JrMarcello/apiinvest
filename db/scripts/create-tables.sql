--Model Author: Majun                           --PostgreSQL version: 11
--#######################################################################
--## 							CREATE TABLES			 		       ##
--#######################################################################
CREATE TABLE investor (
	id uuid NOT NULL,
	id_user uuid NOT NULL,
	cpf varchar(11),
	cnpj varchar(14),
	name varchar NOT NULL,
	company_name varchar,
	address_street varchar NOT NULL,
	address_number varchar NOT NULL DEFAULT 'SN',
	address_neighborhood varchar NOT NULL,
	address_city varchar NOT NULL,
	address_state varchar NOT NULL,
	address_country varchar NOT NULL DEFAULT 'Brasil',
	address_cep varchar(8) NOT NULL,
	created_date timestamp NOT NULL DEFAULT now(),
	active boolean NOT NULL DEFAULT true,
	CONSTRAINT investor_id_pk PRIMARY KEY (id),
	CONSTRAINT investor_cpf_uq UNIQUE (cpf),
	CONSTRAINT investor_cnpj_uq UNIQUE (cnpj),
	CONSTRAINT investor_company_name_uq UNIQUE (company_name)
);

CREATE TABLE investor_phone (
	id serial NOT NULL,
	id_investor uuid NOT NULL,
	number varchar NOT NULL,
	active boolean NOT NULL DEFAULT true,
	CONSTRAINT investor_phone_id_pk PRIMARY KEY (id)
);

CREATE TABLE builder (
	id uuid NOT NULL,
	id_user uuid NOT NULL,
	cnpj varchar(14) NOT NULL,
	company_name varchar NOT NULL,
	company_fancy_name varchar NOT NULL,
	address_street varchar NOT NULL,
	address_number varchar NOT NULL DEFAULT 'SN',
	address_neighborhood varchar NOT NULL,
	address_city varchar NOT NULL,
	address_state varchar NOT NULL,
	address_country varchar NOT NULL DEFAULT 'Brasil',
	address_cep varchar(8) NOT NULL,
	logo_url varchar,
	created_date timestamp NOT NULL DEFAULT now(),
	active boolean NOT NULL DEFAULT true,
	CONSTRAINT builder_id_pk PRIMARY KEY (id),
	CONSTRAINT builder_cnpj_uq UNIQUE (cnpj)
);

CREATE TABLE building (
	id uuid NOT NULL,
	id_builder uuid NOT NULL,
	spe varchar(14),
	registration varchar(10) NOT NULL,
	name varchar(50) NOT NULL,
	description text,
	address_street varchar(100) NOT NULL,
	address_number varchar NOT NULL DEFAULT 'SN',
	address_neighborhood varchar NOT NULL,
	address_city varchar NOT NULL,
	address_state varchar NOT NULL,
	address_country varchar NOT NULL DEFAULT 'Brasil',
	address_cep varchar(8) NOT NULL,
	amount numeric(15,2) NOT NULL,
	initial_date date NOT NULL,
	final_date date,
	created_date timestamp NOT NULL DEFAULT now(),
	active boolean NOT NULL DEFAULT true,
	CONSTRAINT building_id_pk PRIMARY KEY (id),
	CONSTRAINT building_spe_uq UNIQUE (spe),
	CONSTRAINT building_registration_uq UNIQUE (registration)
);

CREATE TABLE fundraising (
	id uuid NOT NULL,
	id_building uuid,
	id_custodian uuid,
	amount numeric(15,2) NOT NULL,
	initial_date date NOT NULL,
	final_date date NOT NULL,
	created_date timestamp NOT NULL DEFAULT now(),
	active boolean NOT NULL DEFAULT true,
	CONSTRAINT fundraising_id_pk PRIMARY KEY (id)
);

CREATE TABLE investment (
	id uuid NOT NULL,
	id_investor uuid NOT NULL,
	id_fundraising uuid NOT NULL,
	amount numeric(15,2) NOT NULL,
	percentage numeric(3,2) NOT NULL,
	date date NOT NULL,
	ted_proof_url varchar,
	confirmed boolean NOT NULL DEFAULT false,
	created_date timestamp NOT NULL DEFAULT now(),
	active boolean NOT NULL DEFAULT true,
	CONSTRAINT investment_id_pk PRIMARY KEY (id)
);

CREATE TABLE custodian (
	id uuid NOT NULL,
	cnpj varchar(14) NOT NULL,
	company_name varchar NOT NULL,
	company_fancy_name varchar NOT NULL,
	phone varchar NOT NULL,
	create_date timestamp NOT NULL DEFAULT now(),
	active boolean NOT NULL DEFAULT true,
	CONSTRAINT custodian_id_pk PRIMARY KEY (id),
	CONSTRAINT custodian_cnpj_uq UNIQUE (cnpj)
);

CREATE TABLE partner(
	id uuid NOT NULL,
	id_builder uuid NOT NULL,
	name varchar NOT NULL,
	company_name varchar,
	cpf varchar(11),
	cnpj varchar(14),
	phone varchar NOT NULL,
	address_street varchar NOT NULL,
	address_number varchar,
	address_nieghborhood varchar,
	address_city varchar,
	address_state varchar,
	address_country varchar,
	address_cep varchar,
	created_date timestamp NOT NULL DEFAULT now(),
	active boolean NOT NULL DEFAULT true,
	CONSTRAINT partner_id_pk PRIMARY KEY (id)
);

CREATE TABLE builder_phone (
	id serial NOT NULL,
	id_builder uuid NOT NULL,
	number varchar(11) NOT NULL,
	active boolean NOT NULL DEFAULT true,
	CONSTRAINT builder_phone_id_pk PRIMARY KEY (id)
);

CREATE TABLE "user" (
	id uuid NOT NULL,
	id_profile smallint NOT NULL DEFAULT 1,
	email varchar NOT NULL,
	username varchar NOT NULL,
	password varchar NOT NULL,
	avatar_url varchar,
	create_date timestamp NOT NULL DEFAULT now(),
	active boolean NOT NULL DEFAULT true,
	CONSTRAINT user_id_pk PRIMARY KEY (id)
);

CREATE TABLE profile (
	id smallserial NOT NULL,
	name varchar NOT NULL,
	active boolean NOT NULL DEFAULT true,
	CONSTRAINT profile_id_pk PRIMARY KEY (id)
);


--FUNCTION TO CHECK IF EMAIL AREALY EXISTS
CREATE FUNCTION user_check_email ()
	RETURNS trigger
	LANGUAGE plpgsql
	AS $$
BEGIN
	IF EXISTS(SELECT 1 FROM "user" WHERE email = NEW.email AND active) THEN
		RAISE EXCEPTION 'User email realy exists';
  	END IF;

  	RETURN NEW;
END
$$;

CREATE TRIGGER user_check_email_trg
	BEFORE INSERT 
	ON "user"
	FOR EACH ROW
	EXECUTE PROCEDURE user_check_email();


CREATE TABLE investor_bank_account (
	id smallserial NOT NULL,
	id_investor uuid NOT NULL,
	agency varchar NOT NULL,
	account varchar NOT NULL,
	created_date timestamp NOT NULL DEFAULT now(),
	active boolean NOT NULL DEFAULT true,
	CONSTRAINT investor_bank_account_id_pk PRIMARY KEY (id)
);

CREATE TABLE investor_document (
	id smallserial NOT NULL,
	id_investor uuid NOT NULL,
	url varchar NOT NULL,
	"order" smallint NOT NULL,
	CONSTRAINT investor_document_id_pk PRIMARY KEY (id)
);

CREATE TABLE building_image (
	id smallserial NOT NULL,
	id_building uuid NOT NULL,
	url varchar NOT NULL,
	CONSTRAINT building_image_id_pk PRIMARY KEY (id)

);

--CONTRAINTS
ALTER TABLE investor ADD CONSTRAINT investor_id_user_fk FOREIGN KEY (id_user)
REFERENCES "user" (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE investor_phone ADD CONSTRAINT investor_phone_id_investor_fk FOREIGN KEY (id_investor)
REFERENCES investor (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE builder ADD CONSTRAINT builder_id_user_fk FOREIGN KEY (id_user)
REFERENCES "user" (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE building ADD CONSTRAINT building_id_builder_fk FOREIGN KEY (id_builder)
REFERENCES builder (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE fundraising ADD CONSTRAINT fundraising_id_custodian_fk FOREIGN KEY (id_custodian)
REFERENCES custodian (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE fundraising ADD CONSTRAINT fundraising_id_building_fk FOREIGN KEY (id_building)
REFERENCES building (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE investment ADD CONSTRAINT investment_id_investor_fk FOREIGN KEY (id_investor)
REFERENCES investor (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE investment ADD CONSTRAINT investment_id_fundraising_fk FOREIGN KEY (id_fundraising)
REFERENCES fundraising (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE partner ADD CONSTRAINT partner_id_builder_fk FOREIGN KEY (id_builder)
REFERENCES builder (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE builder_phone ADD CONSTRAINT builder_phone_id_builder_fk FOREIGN KEY (id_builder)
REFERENCES builder (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "user" ADD CONSTRAINT user_id_profile_fk FOREIGN KEY (id_profile)
REFERENCES profile (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE investor_bank_account ADD CONSTRAINT investor_bank_account_id_investor_fk FOREIGN KEY (id_investor)
REFERENCES investor (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE investor_document ADD CONSTRAINT investor_document_id_investor_fk FOREIGN KEY (id_investor)
REFERENCES investor (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE building_image ADD CONSTRAINT building_image_id_building_fk FOREIGN KEY (id_building)
REFERENCES building (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;


--#######################################################################
--##			    		INSERT DEFAULT DATA			 		       ##
--#######################################################################
INSERT INTO "profile"
	(name)
VALUES
	('Investidor'),
	('Contrutor'),
	('Admin');

INSERT INTO "user"
	(id, id_profile, email, username, password)
VALUES																						   --123456
	('647ac188-62c8-4618-8a0a-be14174aac49', 3, 'buildinvest@admin.com', 'Buildinvest Admin', '$2b$10$o8Av/20hYJX3IKRRUKK5UO/bfjWIbYTIpLc6dtlvnk8NrTxTdf9r2');

INSERT INTO builder (
	id,
	id_user,
	cnpj,
	company_name,
	company_fancy_name,
	address_street,
	address_number,
	address_neighborhood,
	address_city,
	address_state,
	address_country,
	address_cep
) VALUES (
	'647ac188-62c8-4618-8a0a-be14174aac49',
	'647ac188-62c8-4618-8a0a-be14174aac49',
	'34096667000151',
	'Construtora default SA',
	'Construtora default',
	'Rua da construtora',
	'123',
	'Bairro',
	'Cidade',
	'Estado',
	'Pais',
	'58000000'
);

INSERT INTO building (
	id,
	id_builder,
	spe,
	registration,
	name,
	description,
	address_street,
	address_number,
	address_neighborhood,
	address_city,
	address_state,
	address_country,
	address_cep,
	amount,
	initial_date,
	final_date
) VALUES (
	'647ac188-62c8-4618-8a0a-be14174aac49',
	'647ac188-62c8-4618-8a0a-be14174aac49',
	'34096667000151',
	'123456',
	'Empreendimento default',
	'Uma breve descrição do empreendimento',
	'Rua da empreendimento',
	'123',
	'Bairro',
	'Cidade',
	'Estado',
	'Pais',
	'58000000',
	1000000.00,
	NOW(),
	NOW() + INTERVAL'1 year'
);

INSERT INTO custodian (
	id,
	cnpj,
	company_name,
	company_fancy_name,
	phone
) VALUES (
	'647ac188-62c8-4618-8a0a-be14174aac49',
	'34096667000151',
	'Custodiadora Default SA',
	'Custodiadora Default',
	'8333334444'
);

INSERT INTO fundraising (
	id,
	id_building,
	id_custodian,
	amount,
	initial_date,
	final_date 
) VALUES (
	'647ac188-62c8-4618-8a0a-be14174aac49',
	'647ac188-62c8-4618-8a0a-be14174aac49',
	'647ac188-62c8-4618-8a0a-be14174aac49',
	500000.00,
	NOW(),
	NOW() + INTERVAL'6 months'
);