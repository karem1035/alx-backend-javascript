/**
 * Represents a currency with a code and a name.
 */
export default class Currency {
  /**
   * Creates an instance of Currency.
   * @param {string} code - The code of the currency (e.g., USD, EUR).
   * @param {string} name - The name of the currency (e.g., US Dollar, Euro).
   */
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  /**
   * Returns a string representation of the currency in the format:
   * "Currency Name (Currency Code)"
   * @returns {string} The full currency representation.
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
