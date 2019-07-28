/**
 * Constants file
 */
const constants = {
  // Code: 1xxx
  auth: {
    // 10xx
    // success: {

    // },
    // 15xx
    error: {
      UNAUTHORIZED: { code: 1500, message: 'Acesso negado! Token inválido ou inexistente' }
    }
  },
  user: {
    // 20xx
    success: {
      CREATED: { code: 2000, message: 'Usuário criado com sucesso' },
      UPDATED: { code: 2001, message: 'Usuário atualizado com sucesso' },
      REMOVED: { code: 2002, message: 'Usuário removido com sucesso' },
      LOGGED: { code: 2003, message: 'Usuario logado' }
    },
    // 25xx
    error: {
      NOT_FOUNDS: { code: 2500, message: 'Ainda não exitem usuários cadastrados' },
      NOT_FOUND: { code: 2501, message: 'Usuario não encontrado' },
      NOT_CREATED: { code: 2502, message: 'Erro ao tentar criar o usuário' },
      NOT_UPDATED: { code: 2503, message: 'Erro ao tentar atualizar o usuário' },
      NOT_REMOVED: { code: 2504, message: 'Erro ao tentar remover o usuário' },
      INVALID_USER_LOGIN: { code: 2505, message: 'Email ou senha inválido' }
    }
  },
  investor: {
    // 30xx
    success: {
      CREATED: { code: 3000, message: 'Investidor criado com sucesso' },
      UPDATED: { code: 3001, message: 'Investidor atualizado com sucesso' },
      REMOVED: { code: 3002, message: 'Investidor removido com sucesso' }
    },
    // 35xx
    error: {
      NOT_FOUNDS: { code: 3500, message: 'Ainda não exitem investidores cadastrados' },
      NOT_FOUND: { code: 3501, message: 'Investidor não encontrado' },
      NOT_CREATED: { code: 3502, message: 'Erro ao tentar criar o investidor' },
      NOT_UPDATED: { code: 3503, message: 'Erro ao tentar atualizar o investidor' },
      NOT_REMOVED: { code: 3504, message: 'Erro ao tentar remover o investidor' }
    }
  },
  investiment: {
    // 40xx
    success: {
      CREATED: { code: 4000, message: 'Investimento criado com sucesso' },
      UPDATED: { code: 4001, message: 'Investimento atualizado com sucesso' },
      REMOVED: { code: 4002, message: 'Investimento removido com sucesso' }
    },
    // 45xx
    error: {
      NOT_FOUNDS: { code: 4500, message: 'Ainda não exitem investimentos cadastrados' },
      NOT_FOUND: { code: 4501, message: 'Investimento não encontrado' },
      NOT_CREATED: { code: 4502, message: 'Erro ao tentar criar a investimento' },
      NOT_UPDATED: { code: 4503, message: 'Erro ao tentar atualizar a investimento' },
      NOT_REMOVED: { code: 4504, message: 'Erro ao tentar remover a investimento' }
    }
  },
  builder: {
    // 50xx
    success: {
      CREATED: { code: 5000, message: 'Construtora criada com sucesso' },
      UPDATED: { code: 5001, message: 'Construtora atualizada com sucesso' },
      REMOVED: { code: 5002, message: 'Construtora removida com sucesso' }
    },
    // 55xx
    error: {
      NOT_FOUNDS: { code: 5500, message: 'Ainda não exitem construtoras cadastradas' },
      NOT_FOUND: { code: 5501, message: 'Construtora não encontrada' },
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
      NOT_FOUNDS: { code: 6500, message: 'Ainda não exitem obras cadastradas' },
      NOT_FOUND: { code: 6501, message: 'Obra não encontrada' },
      NOT_CREATED: { code: 6502, message: 'Erro ao tentar criar a obra' },
      NOT_UPDATED: { code: 6503, message: 'Erro ao tentar atualizar a obra' },
      NOT_REMOVED: { code: 6504, message: 'Erro ao tentar remover a obra' }
    }
  },
  validations: {
    INVALID_REQUEST_DATA: { code: 9999, message: 'Dados da requisição inválidos' },
    INVALID_DATA_FIELD: 'Dado inválido'
  }
}

export default constants
