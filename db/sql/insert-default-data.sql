--Model Author: Majun                           --PostgreSQL version: 11
--#######################################################################
--##			    		INSERT DEFAULT DATA			 		       ##
--#######################################################################
INSERT INTO "profile"
	(name)
VALUES
	('Investidor'),
	('Construtor'),
	('Admin');

INSERT INTO "user" (
	id,
	id_profile,
	email,
	username, password)
VALUES (
	'647ac188-62c8-4618-8a0a-be14174aac49',
	3,
	'buildinvest@admin.com',
	'Buildinvest Admin',
	'$2b$10$o8Av/20hYJX3IKRRUKK5UO/bfjWIbYTIpLc6dtlvnk8NrTxTdf9r2' --123456
);

-- INSERT INTO builder (
-- 	id,
-- 	id_user,
-- 	cnpj,
-- 	company_name,
-- 	company_fancy_name,
-- 	address_street,
-- 	address_number,
-- 	address_neighborhood,
-- 	address_city,
-- 	address_state,
-- 	address_country,
-- 	address_cep
-- ) VALUES (
-- 	'647ac188-62c8-4618-8a0a-be14174aac49',
-- 	'647ac188-62c8-4618-8a0a-be14174aac49',
-- 	'34096667000151',
-- 	'Construtora default SA',
-- 	'Construtora default',
-- 	'Rua da construtora',
-- 	'123',
-- 	'Bairro',
-- 	'Cidade',
-- 	'Estado',
-- 	'Pais',
-- 	'58000000'
-- );

-- --INSERT INTO builder_phone
-- --INSERT INTO builder_partner

-- INSERT INTO building (
-- 	id,
-- 	id_builder,
-- 	spe,
-- 	registration,
-- 	name,
-- 	description,
-- 	address_street,
-- 	address_number,
-- 	address_neighborhood,
-- 	address_city,
-- 	address_state,
-- 	address_country,
-- 	address_cep,
-- 	amount,
-- 	initial_date,
-- 	final_date
-- ) VALUES (
-- 	'647ac188-62c8-4618-8a0a-be14174aac49',
-- 	'647ac188-62c8-4618-8a0a-be14174aac49',
-- 	'34096667000151',
-- 	'123456',
-- 	'Empreendimento default',
-- 	'Uma breve descrição do empreendimento',
-- 	'Rua da empreendimento',
-- 	'123',
-- 	'Bairro',
-- 	'Cidade',
-- 	'Estado',
-- 	'Pais',
-- 	'58000000',
-- 	1000000.00,
-- 	NOW(),
-- 	NOW() + INTERVAL'1 year'
-- );

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

-- INSERT INTO fundraising (
-- 	id,
-- 	id_building,
-- 	id_custodian,
-- 	amount,
-- 	initial_date,
-- 	final_date 
-- ) VALUES (
-- 	'647ac188-62c8-4618-8a0a-be14174aac49',
-- 	'647ac188-62c8-4618-8a0a-be14174aac49',
-- 	'647ac188-62c8-4618-8a0a-be14174aac49',
-- 	500000.00,
-- 	NOW(),
-- 	NOW() + INTERVAL'6 months'
-- );

-- investor": {
--         "id": "fc340d07-161f-4fb8-8654-849d5c3bda5d",
--         "id_user": "647ac188-62c8-4618-8a0a-be14174aac49",
--         "cpf": "06595512416",
--         "cnpj": null,
--         "name": "Buildinvest Admin",
--         "company_name": null,
--         "address_street": "Rua do investidor",
--         "address_number": "123",
--         "address_neighborhood": "Bairro do investidor",
--         "address_city": "Cidade do Investidor",
--         "address_state": "Estado do Investidor",
--         "address_country": "Pais do Investidor",
--         "address_cep": "58000000",
--         "created_date": "2019-08-25T06:57:12.971Z",
--         "active": true

-- INSERT INTO investor 
-- INSERT INTO investor_phone
-- INSERT INTO investor_bank_account
-- INSERT INTO investor_document
