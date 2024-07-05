import Currency from './3-currency';

/**
 * Represents a pricing structure with an amount and currency.
 */
export default class Pricing {
  /**
   * Creates an instance of Pricing.
   * @param {number} amount - The amount of the pricing.
   * @param {Currency} currency - The currency object representing the currency type.
   */
  constructor(amount, currency) {
    this._amount = amount; // Private property to store the amount
    this._currency = currency; // Private property to store the currency object
  }

  /**
   * Retrieves the amount of the pricing.
   * @returns {number} The amount of the pricing.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Sets the amount of the pricing.
   * @param {number} value - The new amount to set.
   * @throws {TypeError} If the value is not a number.
   */
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount should be a number');
    } else {
      this._amount = value;
    }
  }

  /**
   * Retrieves the currency object representing the currency type.
   * @returns {Currency} The currency object.
   */
  get currency() {
    return this._currency;
  }

  /**
   * Sets the currency object representing the currency type.
   * @param {Currency} value - The new currency object to set.
   * @throws {TypeError} If the value is not an instance of Currency.
   */
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency should be an instance of Currency');
    } else {
      this._currency = value;
    }
  }

  /**
   * Returns a formatted string representing the full price including currency details.
   * @returns {string} The formatted price string.
   */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  /**
   * Converts the given amount using the provided conversion rate.
   * @param {number} amount - The amount to convert.
   * @param {number} conversionRate - The conversion rate.
   * @returns {number} The converted amount.
   * @throws {TypeError} If either amount or conversionRate is not a number.
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('The amount should be a number');
    }

    if (typeof conversionRate !== 'number') {
      throw new TypeError('The conversion rate should be a number');
    }

    return amount * conversionRate;
  }
}
