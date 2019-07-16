/**
 * Constants file
 */
const constants = {
  // Code: 1xxx
  auth: {
    // 10xx
    success: {
      CREATED: { code: 2000, message: 'movement successfully created' },
      UPDATED: { code: 2001, message: 'movement successfully updated' },
      REMOVED: { code: 2002, message: 'movement successfully removed' }
    },
    // 11xx
    error: {
      DESTINY_HARDWARE: {
        code: 2100,
        message: 'Target hardware is different from the station hardware'
      }
    }
  },
  user: {
    // 20xx
    success: {
      CREATED: { code: 2000, message: 'Usuario criado com sucesso' },
      UPDATED: { code: 2001, message: 'Usuario atualizado com sucesso' },
      REMOVED: { code: 2002, message: 'Usuario removido com sucesso' }
    },
    // 21xx
    error: {
      NOT_FOUNDS: { code: 2100, message: 'Ainda não exitem usuários cadastrados' },
      NOT_FOUND: { code: 2100, message: 'Usuario não encontrado' }
    }
  }
}

export { constants as default }
