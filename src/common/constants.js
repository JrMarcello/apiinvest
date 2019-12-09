/**
 * Constants file
 */
const constants = {
  // Code: 1xxx
  auth: {
    // S00xx
    // success: {

    // },
    // E00xx
    error: {
      UNAUTHORIZED: { code: 1500, message: 'Acesso negado! Token inválido ou inexistente' }
    }
  },
  user: {
    // S01xx
    success: {
      CREATED: { code: 'S0000', message: 'Usuário criado com sucesso' },
      UPDATED: { code: 'S0001', message: 'Usuário atualizado com sucesso' },
      REMOVED: { code: 'S0002', message: 'Usuário removido com sucesso' },
      LOGGED: { code: 'S0003', message: 'Usuario logado' },
      NOT_FOUNDS: { code: 2500, message: 'Ainda não existem usuários cadastrados' },
      NOT_FOUND: { code: 2501, message: 'Usuario não encontrado' }
    },
    // E01xx
    error: {
      NOT_FOUNDS: { code: 2500, message: 'Erro ao tetar buscar usuário' },
      NOT_CREATED: { code: 2502, message: 'Erro ao tentar criar o usuário' },
      NOT_UPDATED: { code: 2503, message: 'Erro ao tentar atualizar o usuário' },
      NOT_REMOVED: { code: 2504, message: 'Erro ao tentar remover o usuário' },
      INVALID_USER_LOGIN: { code: 2505, message: 'Email ou senha inválido' }
    }
  },
  investor: {
    // S01xx
    success: {
      CREATED: { code: 3000, message: 'Investidor criado com sucesso' },
      UPDATED: { code: 3001, message: 'Investidor atualizado com sucesso' },
      REMOVED: { code: 3002, message: 'Investidor removido com sucesso' }
    },
    // E01xx
    error: {
      NOT_FOUNDS: { code: 3500, message: 'Ainda não existem investidores cadastrados' },
      NOT_FOUND: { code: 3501, message: 'Investidor não encontrado' },
      NOT_CREATED: { code: 3502, message: 'Erro ao tentar criar o investidor' },
      NOT_UPDATED: { code: 3503, message: 'Erro ao tentar atualizar o investidor' },
      NOT_REMOVED: { code: 3504, message: 'Erro ao tentar remover o investidor' }
    }
  },
  investment: {
    // 40xx
    success: {
      CREATE: { code: 4000, message: 'Investimento criado com sucesso' },
      REMOVE: { code: 4002, message: 'Investimento removido com sucesso' },
      TED_CONFIRMATION: { code: 4003, message: 'Comprovante de TED enviado' },
      CONFIRMATION: { code: 4004, message: 'Investimento(s) comnfirmado' }
    },
    // 45xx
    error: {
      NOT_FOUNDS: { code: 4500, message: 'Não foi possivel carregar investimentos' },
      NOT_FOUND: { code: 4501, message: 'Não foi possivel carregar o investimento' },
      CREATE: { code: 4502, message: 'Erro ao tentar criar a investimento' },
      CANCEL: { code: 4504, message: 'Erro ao tentar cancelar o investimento' },
      TED_CONFIRMATION: { code: 4505, message: 'Erro ao tentar enviar comprovante de TED' },
      CONFIRMATION: { code: 4506, message: 'Erro ao tentar confirmar o investimento' }
    }
  },
  builder: {
    // 50xx
    success: {
      CREATED: { code: 5000, message: 'Construtora criada com sucesso' },
      UPDATED: { code: 5001, message: 'Construtora atualizada com sucesso' },
      REMOVED: { code: 5002, message: 'Construtora removida com sucesso' },
      NOT_FOUNDS: { code: 5500, message: 'Ainda não existem construtoras cadastradas' },
      NOT_FOUND: { code: 5501, message: 'Construtora não encontrada' }
    },
    // 55xx
    error: {
      NOT_FOUND: { code: 5501, message: 'Erro ao buscar construtora(s)' },
      NOT_CREATED: { code: 5502, message: 'Erro ao tentar criar a construtora' },
      NOT_UPDATED: { code: 5503, message: 'Erro ao tentar atualizar a construtora' },
      NOT_REMOVED: { code: 5504, message: 'Erro ao tentar remover a construtora' }
    }
  },
  building: {
    // 60xx
    success: {
      CREATED: { code: 6000, message: 'Obra criada com sucesso' },
      UPDATED: { code: 6001, message: 'Obra atualizada com sucesso' },
      REMOVED: { code: 6002, message: 'Obra removida com sucesso' }
    },
    // 65xx
    error: {
      NOT_FOUNDS: { code: 6500, message: 'Ainda não existem obras cadastradas' },
      NOT_FOUND: { code: 6501, message: 'Obra não encontrada' },
      NOT_CREATED: { code: 6502, message: 'Erro ao tentar criar a obra' },
      NOT_UPDATED: { code: 6503, message: 'Erro ao tentar atualizar a obra' },
      NOT_REMOVED: { code: 6504, message: 'Erro ao tentar remover a obra' }
    }
  },
  fundraising: {
    // 70xx
    success: {
      CREATED: { code: 6000, message: 'Captação criada com sucesso' },
      UPDATED: { code: 6001, message: 'Captação atualizada com sucesso' },
      REMOVED: { code: 6002, message: 'Captação removida com sucesso' },
      FINISHED: { code: 6000, message: 'Captação encerrada com sucesso' }
    },
    // 75xx
    error: {
      NOT_FOUNDS: { code: 6500, message: 'Ainda não existem captações cadastradas' },
      NOT_FOUND: { code: 6501, message: 'Captação não encontrada' },
      NOT_CREATED: { code: 6502, message: 'Erro ao tentar criar a captação' },
      NOT_UPDATED: { code: 6503, message: 'Erro ao tentar atualizar a captação' },
      NOT_REMOVED: { code: 6504, message: 'Erro ao tentar remover a captação' },
      NOT_REMOVED_INVESTMENT: { code: 6504, message: 'Já existem investimentos realizados na captação' }
    }
  },
  custodian: {
    // 80xx
    success: {
      CREATED: { code: 6000, message: 'Custodiador criado com sucesso' },
      UPDATED: { code: 6001, message: 'Custodiador atualizado com sucesso' },
      REMOVED: { code: 6002, message: 'Custodiador removido com sucesso' }
    },
    // 85xx
    error: {
      NOT_FOUNDS: { code: 6500, message: 'Ainda não existem custodiadores cadastrados' },
      NOT_FOUND: { code: 6501, message: 'Custodiador não encontrado' },
      NOT_CREATED: { code: 6502, message: 'Erro ao tentar criar o custodiador' },
      NOT_UPDATED: { code: 6503, message: 'Erro ao tentar atualizar o custodiador' },
      NOT_REMOVED: { code: 6504, message: 'Erro ao tentar remover o custodiador' }
    }
  },
  partner: {
    // 80xx
    success: {
      CREATED: { code: 6000, message: 'Sócio criado com sucesso' },
      UPDATED: { code: 6001, message: 'Sócio atualizado com sucesso' },
      REMOVED: { code: 6002, message: 'Sócio removido com sucesso' }
    },
    // 85xx
    error: {
      NOT_FOUNDS: { code: 6500, message: 'Ainda não existem sócios cadastrados' },
      NOT_FOUND: { code: 6501, message: 'Sócio não encontrado' },
      NOT_CREATED: { code: 6502, message: 'Erro ao tentar criar o sócio' },
      NOT_UPDATED: { code: 6503, message: 'Erro ao tentar atualizar o sócio' },
      NOT_REMOVED: { code: 6504, message: 'Erro ao tentar remover o sócio' }
    }
  },
  investor_phone: {
    // 90xx
    success: {
      CREATED: { code: 9000, message: 'Telefone criado com sucesso' },
      UPDATED: { code: 9001, message: 'Telefone atualizado com sucesso' },
      REMOVED: { code: 9002, message: 'Telefone removido com sucesso' }
    },
    // 95xx
    error: {
      NOT_FOUNDS: { code: 9500, message: 'Ainda não existem telefones cadastrados' },
      NOT_FOUND: { code: 9501, message: 'Telefone não encontrado' },
      NOT_CREATED: { code: 9502, message: 'Erro ao tentar criar o telefone' },
      NOT_UPDATED: { code: 9503, message: 'Erro ao tentar atualizar o telefone' },
      NOT_REMOVED: { code: 9504, message: 'Erro ao tentar remover o telefone' }
    }
  },
  investor_bank_account: {
    // 90xx
    success: {
      CREATED: { code: 9000, message: 'Conta criada com sucesso' },
      UPDATED: { code: 9001, message: 'Conta atualizada com sucesso' },
      REMOVED: { code: 9002, message: 'Conta removida com sucesso' }
    },
    // 95xx
    error: {
      NOT_FOUNDS: { code: 3500, message: 'Ainda não existem contas cadastradas' },
      NOT_FOUND: { code: 3501, message: 'Conta não encontrado' },
      NOT_CREATED: { code: 3502, message: 'Erro ao tentar criar a conta' },
      NOT_UPDATED: { code: 3503, message: 'Erro ao tentar atualizar a conta' },
      NOT_REMOVED: { code: 3504, message: 'Erro ao tentar remover a conta' }
    }
  },
  investor_document: {
    // 90xx
    success: {
      CREATED: { code: 9000, message: 'Comprovante enviado com sucesso' },
      UPDATED: { code: 9001, message: 'Comprovante atualizado com sucesso' },
      REMOVED: { code: 9002, message: 'Comprovante removido com sucesso' }
    },
    // 95xx
    error: {
      NOT_FOUNDS: { code: 3500, message: 'Ainda não existem comprovante cadastrados' },
      NOT_FOUND: { code: 3501, message: 'Comprovante não encontrado' },
      NOT_CREATED: { code: 3502, message: 'Erro ao tentar enviar o comprovante' },
      NOT_UPDATED: { code: 3503, message: 'Erro ao tentar atualizar o comprovante' }
      // NOT_REMOVED: { code: 3504, message: 'Erro ao tentar remover o comprovante' }
    }
  },
  building_image: {
    // 90xx
    success: {
      CREATED: { code: 9000, message: 'Comprovante enviado com sucesso' },
      REMOVED: { code: 9002, message: 'Imagens removidas com sucesso' }
    },
    // 95xx
    error: {
      NOT_FOUNDS: { code: 3500, message: 'Ainda não existem imagens cadastradas' },
      NOT_CREATED: { code: 3502, message: 'Erro ao tentar enviar a imagem' },
      REMOVED: { code: 3504, message: 'Erro ao tentar remover a imagem' }
    }
  },
  builder_phone: {
    // 90xx
    success: {
      CREATED: { code: 9000, message: 'Telefone criado com sucesso' },
      REMOVED: { code: 9002, message: 'Telefone removido com sucesso' }
    },
    // 95xx
    error: {
      NOT_FOUNDS: { code: 3500, message: 'Erro ao tentar buscar telefones' },
      NOT_CREATED: { code: 3502, message: 'Erro ao tentar criar telefone(s)' },
      NOT_REMOVED: { code: 3504, message: 'Erro ao tentar remover o telefone' }
    }
  },
  builder_partner: {
    // 90xx
    success: {
      CREATED: { code: 9000, message: 'Sócio criado com sucesso' },
      REMOVED: { code: 9002, message: 'Sócio removido com sucesso' }
    },
    // 95xx
    error: {
      NOT_FOUNDS: { code: 3500, message: 'Erro ao tentar buscar sócios' },
      NOT_CREATED: { code: 3502, message: 'Erro ao tentar criar o sócio' },
      NOT_REMOVED: { code: 3504, message: 'Erro ao tentar remover o sócio' }
    }
  },
  validations: {
    INVALID_REQUEST_DATA: { code: 9999, message: 'Dados da requisição inválidos' },
    INVALID_DATA_FIELD: 'Dado inválido'
  }
}

export default constants
