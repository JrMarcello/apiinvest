/**
 * Constants file
 */
const constants = {
  validations: {
    // E00xx
    INVALID_REQUEST_DATA: { code: 'E0000', message: 'Dados de requisição inválidos' },
    INVALID_DATA_FIELD: { code: 'E0001', message: 'Dado inválido' }
  },
  auth: {
    // E01xx
    error: {
      UNAUTHORIZED: { code: 'E0100', message: 'Acesso negado! Token inválido ou inexistente' }
    }
  },
  user: {
    // S02xx
    success: {
      CREATE: { code: 'S0200', message: 'Usuário criado com sucesso' },
      UPDATE: { code: 'S0201', message: 'Usuário atualizado com sucesso' },
      REMOVE: { code: 'S0202', message: 'Usuário deletado com sucesso' },
      LOGGED: { code: 'S0203', message: 'Usuario logado' }
    },
    // E02xx
    error: {
      CREATE: { code: 'E0200', message: 'Erro ao criar o Usuário' },
      UPDATE: { code: 'E0201', message: 'Erro ao atualizar Usuário' },
      REMOVE: { code: 'E0202', message: 'Erro ao deletar Usuário' },
      LOGGED: { code: 'E0203', message: 'Erro ao realizar login' },
      NOT_FOUND: { code: 'E0204', message: 'Erro ao buscar Usuário(s)' }
    }
  },
  investor: {
    // S03xx
    success: {
      CREATE: { code: 'S0300', message: 'Investidor criado com sucesso' },
      UPDATE: { code: 'S0301', message: 'Investidor atualizado com sucesso' }
    },
    // E03xx
    error: {
      NOT_FOUND: { code: 'E0300', message: 'Erro ao buscar Investidor(es)' },
      INVESTMENTS_NOT_FOUND: { code: 'E0301', message: 'Erro ao buscar Investimentos' },
      INVESTMENTS_COUNT: { code: 'E0302', message: 'Erro ao buscar total de Investimentos' },
      INVESTED_AMOUNT: { code: 'E0303', message: 'Erro ao buscar valor total investido' },
      RECEIVED_AMOUNT: { code: 'E0304', message: 'Erro ao buscar valor total recebido' },
      PROJECTED_AMOUNT: { code: 'E0305', message: 'Erro ao buscar valor total projetado' },
      CREATE: { code: 'E0306', message: 'Erro ao criar o Investidor' },
      UPDATE: { code: 'E0307', message: 'Erro ao atualizar o Investidor' }
    },
    phone: {
      // S03xx
      success: {
        CREATE: { code: 'S0302', message: 'Telefone(s) criado(s) com sucesso' },
        REMOVE: { code: 'S0303', message: 'Telefone(s) deletado(s) com sucesso' }
      },
      // E03xx
      error: {
        NOT_FOUND: { code: 'E0308', message: 'Telefone(s) não encontrado' },
        CREATE: { code: 'E0309', message: 'Erro ao criar o(s) telefone(s)' },
        REMOVE: { code: 'E0310', message: 'Erro ao deletar o(s) telefone(s)' }
      }
    },
    bank_account: {
      // S03xx
      success: {
        CREATE: { code: 'S0304', message: 'Conta(s) criada(s) com sucesso' },
        REMOVE: { code: 'S0305', message: 'Conta(s) deletada(s) com sucesso' }
      },
      // E03xx
      error: {
        NOT_FOUND: { code: 'E0311', message: 'Conta(s) não encontrada(s)' },
        CREATE: { code: 'E0312', message: 'Erro ao criar a(s) conta(s)' },
        REMOVE: { code: 'E0313', message: 'Erro ao deletar a(s) conta(s)' }
      }
    },
    document: {
      // S03xx
      success: {
        CREATE: { code: 'S0306', message: 'Comprovantes enviados com sucesso' }
      },
      // E03xx
      error: {
        NOT_FOUND: { code: 'E0314', message: 'Comprovantes não encontrados' },
        CREATE: { code: 'E0315', message: 'Erro ao tentar enviar os comprovantes' }
      }
    }
  },
  investment: {
    // S04xx
    success: {
      CREATE: { code: 'S0401', message: 'Investimento criado com sucesso' },
      CANCEL: { code: 'S0402', message: 'Investimento cancelado com sucesso' },
      TED_CONFIRMATION: { code: 'S0404', message: 'Comprovante de TED enviado' },
      CONFIRMATION: { code: 'S0405', message: 'Investimento(s) comnfirmado(s)' }
    },
    // E04xx
    error: {
      NOT_FOUND: { code: '4501', message: 'Erro ao buscar Investimento(s)' },
      CREATE: { code: '4502', message: 'Erro ao criar o investimento' },
      CANCEL: { code: '4504', message: 'Erro ao cancelar o investimento' },
      TED_CONFIRMATION: { code: '4505', message: 'Erro ao enviar comprovante de TED' },
      CONFIRMATION: { code: '4506', message: 'Erro ao confirmar o(s) investimento(s)' }
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
      NOT_REMOVED_INVESTMENT: { code: 6504, message: 'Já existem investimentos realizados na captação' },
      AMOUNT_RAISED: { code: 6501, message: 'Erro ao buscar total captado' },
      INVESTORS: { code: 6501, message: 'Erro ao buscar os Investidores da Captação' }
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
  }
}

export default constants
