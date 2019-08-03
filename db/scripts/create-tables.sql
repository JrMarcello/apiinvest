--#######################################################################
--##			    							CREATE TABLES 									 		       ##
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
	address_state varchar NOT NULL,
	address_country varchar NOT NULL DEFAULT 'Brasil',
	address_cep varchar(8) NOT NULL,
	amount numeric(11,2) NOT NULL,
	initial_date date NOT NULL,
	final_date date,
	created_date timestamp NOT NULL DEFAULT now(),
	active boolean NOT NULL,
	CONSTRAINT building_id_pk PRIMARY KEY (id),
	CONSTRAINT building_spe_uq UNIQUE (spe),
	CONSTRAINT building_registration_uq UNIQUE (registration)
);

CREATE TABLE fundraising (
	id uuid NOT NULL,
	id_building uuid,
	id_custodian uuid,
	amount numeric(10,2) NOT NULL,
	initial_date date NOT NULL,
	final_date date NOT NULL,
	created_date timestamp NOT NULL DEFAULT now(),
	active boolean NOT NULL DEFAULT true,
	CONSTRAINT fundraising_id_pk PRIMARY KEY (id)
);

CREATE TABLE investiment (
	id uuid NOT NULL,
	id_investor uuid NOT NULL,
	id_fundraising uuid NOT NULL,
	amout numeric(10,2) NOT NULL,
	percentage numeric(3,0) NOT NULL,
	date date NOT NULL,
	confirmed boolean NOT NULL DEFAULT false,
	created_date timestamp NOT NULL DEFAULT now(),
	ativo boolean NOT NULL DEFAULT true,
	CONSTRAINT investiment_id_pk PRIMARY KEY (id)
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

CREATE TABLE partner (
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
	email varchar(50) NOT NULL,
	username varchar(25) NOT NULL,
	password varchar(60) NOT NULL,
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

CREATE FUNCTION user_check_email ()
	RETURNS trigger
	LANGUAGE plpgsql 
	VOLATILE 
	CALLED ON NULL INPUT
	SECURITY INVOKER
	COST 1
	AS $$
BEGIN
	IF EXISTS(SELECT 1 FROM "user" WHERE email = NEW.email AND active) THEN
		RAISE EXCEPTION 'User email realy exists';
  	END IF;

  	RETURN NEW;
END
$$;

CREATE TRIGGER user_check_email_trg
	BEFORE INSERT ON "user"
	FOR EACH ROW EXECUTE PROCEDURE user_check_email();

ALTER TABLE investor ADD CONSTRAINT investor_id_user_fk FOREIGN KEY (id_user)
REFERENCES "user" (id);

ALTER TABLE investor_phone ADD CONSTRAINT investor_phone_id_investor_fk FOREIGN KEY (id_investor)
REFERENCES investor (id);

ALTER TABLE builder ADD CONSTRAINT builder_id_user_fk FOREIGN KEY (id_user)
REFERENCES "user" (id);

ALTER TABLE building ADD CONSTRAINT building_id_builder_fk FOREIGN KEY (id_builder)
REFERENCES builder (id);

ALTER TABLE fundraising ADD CONSTRAINT fundraising_id_custodian_fk FOREIGN KEY (id_custodian)
REFERENCES custodian (id);

ALTER TABLE fundraising ADD CONSTRAINT fundraising_id_building_fk FOREIGN KEY (id_building)
REFERENCES building (id);

ALTER TABLE investiment ADD CONSTRAINT investiment_id_investor_fk FOREIGN KEY (id_investor)
REFERENCES investor (id);

ALTER TABLE investiment ADD CONSTRAINT investiment_id_fundraising_fk FOREIGN KEY (id_fundraising)
REFERENCES fundraising (id);

ALTER TABLE partner ADD CONSTRAINT partner_id_builder_fk FOREIGN KEY (id_builder)
REFERENCES builder (id);

ALTER TABLE builder_phone ADD CONSTRAINT builder_phone_id_builder_fk FOREIGN KEY (id_builder)
REFERENCES builder (id);

ALTER TABLE "user" ADD CONSTRAINT user_id_profile_fk FOREIGN KEY (id_profile)
REFERENCES profile (id);

--#######################################################################
--##			    								INSERT DATA										 		       ##
--#######################################################################
INSERT INTO "profile"
	(name)
VALUES
	('Investidor'),
	('Contrutor'),
	('Admin');

-- INSERT INTO "user"
-- 	(id, id_profile, email, username, password)
-- VALUES
-- 	('', 3, 'admin@mail.com', 'Admin', '');
