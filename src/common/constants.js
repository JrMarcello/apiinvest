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
      INVALID_REQUEST_DATA: { code: 2500, message: 'Dados da requisição inválidos' },
      NOT_FOUNDS: { code: 2501, message: 'Ainda não exitem usuários cadastrados' },
      NOT_FOUND: { code: 2502, message: 'Usuario não encontrado' },
      NOT_CREATED: { code: 2503, message: 'Erro ao criar o usuário' },
      NOT_UPDATED: { code: 2504, message: 'Erro ao atualizar o usuário' },
      NOT_REMOVED: { code: 2505, message: 'Erro ao remover o usuário' },
      INVALID_USER_LOGIN: { code: 2506, message: 'Email ou senha inválido' }
    }
  },
  validations: {
    INVALID_DATA_FIELD: 'Dado inválido'
  }
}

export default constants
