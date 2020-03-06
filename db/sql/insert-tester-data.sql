--Model Author: Majun                           --PostgreSQL version: 11
--#######################################################################
--##			    		INSERT TESTER DATA			 		       ##
--#######################################################################
INSERT INTO building (
	id,
	id_builder,
	cnpj,
	registration,
	name,
	description,
	address_street,
	address_number,
	address_neighborhood,
	address_city,
	address_state,
	address_cep,
	vgv,
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
	'58000000',
	1000000,
	NOW(),
	NOW() + INTERVAL'1 year'
);

INSERT INTO fundraising (
	id,
	id_building,
	id_custodian,
	amount,
	investment_min_value,
	investment_percentage,
	initial_date,
	final_date 
) VALUES (
	'647ac188-62c8-4618-8a0a-be14174aac49',
	'647ac188-62c8-4618-8a0a-be14174aac49',
	'647ac188-62c8-4618-8a0a-be14174aac49',
	1000,
	0.05,
	50000,
	NOW(),
	NOW() + INTERVAL'6 months'
);