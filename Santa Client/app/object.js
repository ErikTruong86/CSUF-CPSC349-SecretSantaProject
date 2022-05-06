function Account(user, pwd) {
  this.username = user;
  this.password = pwd;
  Object.defineProperty(this, 'Info:', {
    get: function() {return `${this.username} ${this.password}`}
  })
}
