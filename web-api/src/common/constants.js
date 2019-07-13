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
  }
}

export { constants as default }
