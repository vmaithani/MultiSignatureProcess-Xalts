class User {
    constructor(id, name, email, password, metamaskWallet) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.password = password;
      this.metamaskWallet = metamaskWallet;
    }
  }
  
  module.exports = User;
  