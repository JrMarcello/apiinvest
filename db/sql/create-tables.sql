--Model Author: Majun                            --PostgreSQL version: 11
--#######################################################################
--## 						CREATE TABLES				 		       ##
--#######################################################################

CREATE TABLE profile(
	id smallserial NOT NULL,
	name varchar NOT NULL,
	active boolean NOT NULL DEFAULT true,
	CONSTRAINT profile_id_pk PRIMARY KEY (id)
);

CREATE TABLE buildinvest."user"(
	id uuid NOT NULL,
	id_profile smallint NOT NULL DEFAULT 1,
	id_facebook varchar,
	id_google varchar,
	email varchar NOT NULL,
	username varchar NOT NULL,
	password varchar NOT NULL,
	avatar_url varchar,
	reset_token varchar,
	reset_expires timestamp,
	create_date timestamp NOT NULL DEFAULT now(),
	active boolean NOT NULL DEFAULT true,
	CONSTRAINT user_id_pk PRIMARY KEY (id)
);

ALTER TABLE "user" ADD CONSTRAINT user_id_profile_fk FOREIGN KEY (id_profile) REFERENCES profile (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

CREATE TABLE investor(
	id uuid NOT NULL,
	id_user uuid NOT NULL,
	cpf varchar(11),
	cnpj varchar(14),
	name varchar NOT NULL,
	company_name varchar,
	address_street varchar NOT NULL,
	address_number varchar NOT NULL DEFAULT 'SN',
	address_complement varchar,
	address_neighborhood varchar NOT NULL,
	address_city varchar NOT NULL,
	address_state varchar NOT NULL,
	address_country varchar NOT NULL DEFAULT 'Brasil',
	address_cep varchar(8) NOT NULL,
	terms boolean NOT NULL DEFAULT false,
	created_date timestamp NOT NULL DEFAULT now(),
	active boolean NOT NULL DEFAULT true,
	CONSTRAINT investor_id_pk PRIMARY KEY (id),
	CONSTRAINT investor_cpf_uq UNIQUE (cpf),
	CONSTRAINT investor_cnpj_uq UNIQUE (cnpj),
	CONSTRAINT investor_company_name_uq UNIQUE (company_name)
);

ALTER TABLE investor ADD CONSTRAINT investor_id_user_fk FOREIGN KEY (id_user) REFERENCES "user" (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

CREATE TABLE investor_phone(
	id bigserial NOT NULL,
	id_investor uuid NOT NULL,
	number varchar NOT NULL,
	CONSTRAINT investor_phone_id_pk PRIMARY KEY (id)
);

ALTER TABLE investor_phone ADD CONSTRAINT investor_phone_id_investor_fk FOREIGN KEY (id_investor) REFERENCES investor (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

CREATE TABLE investor_bank_account(
	id bigserial NOT NULL,
	id_investor uuid NOT NULL,
	bank_code char(4) NOT NULL,
	agency varchar NOT NULL,
	account varchar NOT NULL,
	created_date timestamp NOT NULL DEFAULT now(),
	active boolean NOT NULL DEFAULT true,
	CONSTRAINT investor_bank_account_id_pk PRIMARY KEY (id)
);

ALTER TABLE investor_bank_account ADD CONSTRAINT investor_bank_account_id_investor_fk FOREIGN KEY (id_investor) REFERENCES investor (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

CREATE TABLE investor_document(
	id bigserial NOT NULL,
	id_investor uuid NOT NULL,
	url varchar NOT NULL,
	"order" smallint NOT NULL,
	CONSTRAINT investor_document_id_pk PRIMARY KEY (id)
);

ALTER TABLE investor_document ADD CONSTRAINT investor_document_id_investor_fk FOREIGN KEY (id_investor) REFERENCES investor (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

CREATE TABLE builder(
	id uuid NOT NULL,
	id_user uuid NOT NULL,
	cnpj varchar(14) NOT NULL,
	company_name varchar NOT NULL,
	company_fancy_name varchar NOT NULL,
	address_street varchar NOT NULL,
	address_number varchar NOT NULL DEFAULT 'SN',
	address_complement varchar,
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

ALTER TABLE builder ADD CONSTRAINT builder_id_user_fk FOREIGN KEY (id_user) REFERENCES "user" (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

CREATE TABLE builder_phone(
	id bigserial NOT NULL,
	id_builder uuid NOT NULL,
	number varchar(11) NOT NULL,
	CONSTRAINT builder_phone_id_pk PRIMARY KEY (id)
);

ALTER TABLE builder_phone ADD CONSTRAINT builder_phone_id_builder_fk FOREIGN KEY (id_builder) REFERENCES builder (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

CREATE TABLE builder_partner(
	id bigserial NOT NULL,
	id_builder uuid NOT NULL,
	name varchar NOT NULL,
	company_name varchar,
	cpf varchar(11),
	cnpj varchar(14),
	phone varchar NOT NULL,
	address_street varchar NOT NULL,
	address_number varchar NOT NULL DEFAULT 'SN',
	address_complement varchar,
	address_neighborhood varchar,
	address_city varchar,
	address_state varchar,
	address_country varchar,
	address_cep varchar,
	created_date timestamp NOT NULL DEFAULT now(),
	CONSTRAINT builder_partner_id_pk PRIMARY KEY (id)
);

ALTER TABLE builder_partner ADD CONSTRAINT builder_partner_id_builder_fk FOREIGN KEY (id_builder) REFERENCES builder (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

CREATE TABLE building(
	id uuid NOT NULL,
	id_builder uuid NOT NULL,
	cnpj varchar(14),
	registration varchar(10) NOT NULL,
	name varchar(50) NOT NULL,
	description text,
	address_street varchar(100) NOT NULL,
	address_number varchar NOT NULL DEFAULT 'SN',
	address_complement varchar,
	address_neighborhood varchar NOT NULL,
	address_city varchar NOT NULL,
	address_state varchar NOT NULL,
	address_country varchar NOT NULL DEFAULT 'Brasil',
	address_cep varchar(8) NOT NULL,
	vgv numeric NOT NULL,
	initial_date date NOT NULL,
	final_date date,
	created_date timestamp NOT NULL DEFAULT now(),
	active boolean NOT NULL DEFAULT true,
	CONSTRAINT building_id_pk PRIMARY KEY (id),
	CONSTRAINT building_spe_uq UNIQUE (cnpj),
	CONSTRAINT building_registration_uq UNIQUE (registration)
);

ALTER TABLE building ADD CONSTRAINT building_id_builder_fk FOREIGN KEY (id_builder) REFERENCES builder (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

CREATE TABLE building_image(
	id bigserial NOT NULL,
	id_building uuid NOT NULL,
	url varchar NOT NULL,
	CONSTRAINT building_image_id_pk PRIMARY KEY (id)
);

ALTER TABLE building_image ADD CONSTRAINT building_image_id_building_fk FOREIGN KEY (id_building) REFERENCES building (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

CREATE TABLE custodian(
	id uuid NOT NULL,
	cnpj varchar(14) NOT NULL,
	company_name varchar NOT NULL,
	company_fancy_name varchar NOT NULL,
	phone varchar NOT NULL,
	agent_name varchar,
	agent_email varchar,
	agent_phone varchar,
	create_date timestamp NOT NULL DEFAULT now(),
	active boolean NOT NULL DEFAULT true,
	CONSTRAINT custodian_id_pk PRIMARY KEY (id),
	CONSTRAINT custodian_cnpj_uq UNIQUE (cnpj)
);

CREATE TABLE fundraising(
	id uuid NOT NULL,
	id_building uuid,
	id_custodian uuid,
	amount numeric NOT NULL,
	investment_min_value numeric NOT NULL DEFAULT 1000,
	investment_percentage numeric NOT NULL,
	return_date date,
	initial_date date NOT NULL,
	final_date date NOT NULL,
	finished boolean NOT NULL DEFAULT false,
	ted_proof_url varchar,
	created_date timestamp NOT NULL DEFAULT now(),
	active boolean NOT NULL DEFAULT true,
	CONSTRAINT fundraising_id_pk PRIMARY KEY (id)
);

ALTER TABLE fundraising ADD CONSTRAINT fundraising_id_custodian_fk FOREIGN KEY (id_custodian) REFERENCES custodian (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE fundraising ADD CONSTRAINT fundraising_id_building_fk FOREIGN KEY (id_building) REFERENCES building (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

CREATE TABLE investment(
	id uuid NOT NULL,
	id_investor uuid NOT NULL,
	id_fundraising uuid NOT NULL,
	amount numeric NOT NULL,
	amount_returned numeric,
	date date NOT NULL DEFAULT now(),
	is_qualified boolean NOT NULL DEFAULT false,
	ted_proof_url varchar,
	confirmed boolean NOT NULL DEFAULT false,
	created_date timestamp NOT NULL DEFAULT now(),
	active boolean NOT NULL DEFAULT true,
	CONSTRAINT investment_id_pk PRIMARY KEY (id)
);

ALTER TABLE investment ADD CONSTRAINT investment_id_investor_fk FOREIGN KEY (id_investor) REFERENCES investor (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE investment ADD CONSTRAINT investment_id_fundraising_fk FOREIGN KEY (id_fundraising) REFERENCES fundraising (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;

-- CREATE FUNCTION investiment_check_investiment ()
-- 	RETURNS trigger
-- 	LANGUAGE plpgsql
-- 	VOLATILE 
-- 	CALLED ON NULL INPUT
-- 	SECURITY INVOKER
-- 	COST 1
-- 	AS $$
-- BEGIN
-- 	IF NOT EXISTS(	SELECT 1 FROM fundraising WHERE id = NEW.id_fundraising AND finished = false) THEN
-- 		RAISE EXCEPTION 'Fundraising is finished';
-- 	END IF;

-- 	RETURN NEW;
-- END;
-- $$;

-- CREATE TRIGGER investiment_check_investiment_trg
-- 	BEFORE INSERT 
-- 	ON investment
-- 	FOR EACH ROW
-- 	EXECUTE PROCEDURE investiment_check_investiment();

-- CREATE FUNCTION investment_fundraising_finish ()
-- 	RETURNS trigger
-- 	LANGUAGE plpgsql
-- 	VOLATILE 
-- 	CALLED ON NULL INPUT
-- 	SECURITY INVOKER
-- 	COST 1
-- 	AS $$
-- DECLARE
--     fundraising_max_amount fundraising.amount%TYPE;
--     fundraising_total_amount fundraising.amount%TYPE;
-- BEGIN
--     SELECT COUNT(amount) INTO fundraising_total_amount FROM investment WHERE id_fundraising = NEW.id_fundraising AND confirmed;
--     SELECT amount INTO fundraising_max_amount FROM fundraising WHERE id = NEW.id_fundraising;

-- 	IF fundraising_total_amount >= fundraising_max_amount THEN
-- 		UPDATE fundraising SET finished = true WHERE id = NEW.id_fundraising;
-- 	END IF;

-- 	RETURN NEW;
-- END;
-- $$;

-- CREATE TRIGGER investment_fundraising_finish_trg
-- 	AFTER INSERT 
-- 	ON investment
-- 	FOR EACH ROW
-- 	EXECUTE PROCEDURE investment_fundraising_finish();