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
      CREATE: { code: 'S0400', message: 'Investimento criado com sucesso' },
      CANCEL: { code: 'S0401', message: 'Investimento cancelado com sucesso' },
      TED_CONFIRMATION: { code: 'S0402', message: 'Comprovante de TED enviado' },
      CONFIRMATION: { code: 'S0403', message: 'Investimento(s) comnfirmado(s)' }
    },
    // E04xx
    error: {
      NOT_FOUND: { code: 'E0400', message: 'Erro ao buscar Investimento(s)' },
      CREATE: { code: 'E0401', message: 'Erro ao criar o investimento' },
      CANCEL: { code: 'E0402', message: 'Erro ao cancelar o investimento' },
      TED_CONFIRMATION: { code: 'E0403', message: 'Erro ao enviar comprovante de TED' },
      CONFIRMATION: { code: 'E0404', message: 'Erro ao confirmar o(s) investimento(s)' }
    }
  },
  fundraising: {
    // S05xx
    success: {
      CREATE: { code: 'S0501', message: 'Captação criada com sucesso' },
      UPDATE: { code: 'S0502', message: 'Captação atualizada com sucesso' },
      REMOVE: { code: 'S0503', message: 'Captação deletada com sucesso' },
      FINISH: { code: 'S0504', message: 'Captação encerrada com sucesso' }
    },
    // E05xx
    error: {
      NOT_FOUND: { code: 'E0501', message: 'Erro ao buscar a(s) Captação(ões)' },
      AMOUNT_RAISED: { code: 'E0502', message: 'Erro ao buscar total captado' },
      INVESTORS: { code: 'E0503', message: 'Erro ao buscar os Investidores da Captação' },
      CREATE: { code: 'E0504', message: 'Erro ao criar a captação' },
      UPDATE: { code: 'E0505', message: 'Erro ao atualizar a captação' },
      REMOVE: { code: 'E0506', message: 'Erro ao deletar a captação' },
      FINISH: { code: 'E0504', message: 'Erro ao encerrar a captação' },
      NOT_REMOVED_INVESTMENT: { code: 'E0507', message: 'Já existem investimentos realizados na captação' }
    }
  },
  custodian: {
    // S06xx
    success: {
      CREATE: { code: 'S0600', message: 'Custodiador criado com sucesso' },
      UPDATE: { code: 'S0601', message: 'Custodiador atualizado com sucesso' },
      REMOVE: { code: 'S0602', message: 'Custodiador deletado com sucesso' }
    },
    // E06xx
    error: {
      NOT_FOUND: { code: 'E0600', message: 'Erro ao buscar o Custodiador' },
      CREATE: { code: 'E0602', message: 'Erro ao criar o custodiador' },
      UPDATE: { code: 'E0603', message: 'Erro ao atualizar o custodiador' },
      REMOVE: { code: 'E0604', message: 'Erro ao deletar o custodiador' }
    }
  },
  building: {
    // S07xx
    success: {
      CREATE: { code: 'S0700', message: 'Obra criada com sucesso' },
      UPDATE: { code: 'S0701', message: 'Obra atualizada com sucesso' },
      REMOVE: { code: 'S0702', message: 'Obra deletada com sucesso' }
    },
    // E07xx
    error: {
      NOT_FOUND: { code: 'E0700', message: 'Erro ao buscar Obra(s)' },
      CREATE: { code: 'E0701', message: 'Erro ao criar Obra' },
      UPDATE: { code: 'E0702', message: 'Erro ao atualizar Obra' },
      REMOVE: { code: 'E0703', message: 'Erro ao deletar Obra' }
    },
    images: {
      // S07xx
      success: {
        CREATE: { code: 'S0703', message: 'Imagens enviadas com sucesso' },
        REMOVE: { code: 'S0704', message: 'Imagens deletadas com sucesso' }
      },
      // E07xx
      error: {
        NOT_FOUND: { code: 'E0704', message: 'Erro ao buscar imagens' },
        CREATE: { code: 'E0705', message: 'Erro ao enviar as imagens' },
        REMOVE: { code: 'E0706', message: 'Erro ao deletar as imagens' }
      }
    }
  },
  builder: {
    // S08xx
    success: {
      CREATE: { code: 'S0800', message: 'Construtora criada com sucesso' },
      UPDATE: { code: 'S0801', message: 'Construtora atualizada com sucesso' },
      REMOVE: { code: 'S0802', message: 'Construtora deletada com sucesso' }
    },
    // E08xx
    error: {
      NOT_FOUND: { code: 'E0800', message: 'Erro ao buscar construtora(s)' },
      CREATE: { code: 'E0801', message: 'Erro ao criar a construtora' },
      UPDATE: { code: 'E0802', message: 'Erro ao atualizar a construtora' },
      REMOVE: { code: 'E0803', message: 'Erro ao deletar a construtora' }
    },
    phones: {
      // S08xx
      success: {
        CREATE: { code: 'S0803', message: 'Telefone(s) criado(s) com sucesso' },
        REMOVE: { code: 'S0804', message: 'Telefone(s) deletado(s) com sucesso' }
      },
      // E08xx
      error: {
        NOT_FOUND: { code: 'E0804', message: 'Erro ao buscar telefones' },
        CREATE: { code: 'E0805', message: 'Erro ao criar telefone(s)' },
        REMOVE: { code: 'E0806', message: 'Erro ao deletar telefone(s)' }
      }
    },
    partners: {
      // S08xx
      success: {
        CREATE: { code: 'S0805', message: 'Sócio(s) criado(s) com sucesso' },
        REMOVE: { code: 'S0806', message: 'Sócio(s) deletado(s) com sucesso' }
      },
      // E08xx
      error: {
        NOT_FOUND: { code: 'E0807', message: 'Erro ao buscar sócios' },
        CREATE: { code: 'E0808', message: 'Erro ao criar sócio(s)' },
        REMOVE: { code: 'E0809', message: 'Erro ao deletar sócio(s)' }
      }
    }
  }
}

export default constants
