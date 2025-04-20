class PaymentProcessor {
    processPayment(amount) {
      throw new Error("This method must be overridden!");
    }
  }
  
  class CreditCardProcessor extends PaymentProcessor {
    processPayment(amount) {
      console.log(`Processing credit card payment of $${amount}`);
    }
  }
  
  class PayPalProcessor extends PaymentProcessor {
    processPayment(amount) {
      console.log(`Processing PayPal payment of $${amount}`);
    }
  }
  
  module.exports = { CreditCardProcessor, PayPalProcessor };