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
	username, 
	password
)
VALUES (
	'647ac188-62c8-4618-8a0a-be14174aac49',
	3,
	'admin@buildinvest.com.br',
	'Admin Buildinvest',
	'$2b$10$o8Av/20hYJX3IKRRUKK5UO/bfjWIbYTIpLc6dtlvnk8NrTxTdf9r2' --123456
);

INSERT INTO investor (
	id,
	id_user,
	cpf,
	name,
	address_street,
	address_number,
	address_neighborhood,
	address_city,
	address_state,
	address_cep,
	terms
) 
VALUES (
	'647ac188-62c8-4618-8a0a-be14174aac49',
	'647ac188-62c8-4618-8a0a-be14174aac49',
	'69629586410',
	'Admin Buildinvest',
	'Rua do admin',
	'123',
	'Bairro',
	'Cidade',
	'Estado',
	'58000000',
	true
);

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
	'58000000'
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
