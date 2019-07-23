/**
 * Classe para Exceções customizadas
 */
class Exception extends Error {
  /**
   * @param {Object} data -
   * @param {Object} data.message -
   * @param {Object} data.code -
   * @param {Object} data.name -
   */
  constructor(data) {
    super(data)
    this.message = data.message
    this.code = data.code
    // this.name = data.name;
  }
}

export default Exception
