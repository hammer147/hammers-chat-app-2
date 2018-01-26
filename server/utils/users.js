class Users {
  constructor() {
    this.users = [];
  }
  addUser(id, name, room) {
    const user = { id, name, room };
    this.users.push(user);
    return user;
  }
  removeUser(id) {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      return undefined;
    }
    return this.users.splice(userIndex, 1)[0];
  }
  getUser(id) {
    return this.users.find(user => user.id === id);
  }
  getUserList(room) {
    const users = this.users.filter(user => user.room === room);
    const namesArray = users.map(user => user.name);
    return namesArray;
  }
}

module.exports = { Users };
