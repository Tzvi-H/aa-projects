// Implement the SocialNetwork class here
class SocialNetwork {
  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    this.currentID++;
    const user = { id: this.currentID, name };
    this.users[user.id] = user;
    this.follows[user.id] = new Set();
    return user.id;
  }

  getUser(userID) {
    const user = this.users[userID];
    return user ? user : null;
  }

  follow(userID1, userID2) {
    if (!this.getUser(userID1) || !this.getUser(userID2)) {
      return false;
    }

    this.follows[userID1].add(userID2);
    return true;
  }

  getFollows(userID) {
    return this.follows[userID];
  }

  getFollowers(userID) {
    const followers = new Set();
    for (const followerId in this.follows) {
      if (followerId !== userID && this.follows[followerId].has(userID)) {
        followers.add(followerId);
      }
    }
    return followers;
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here
  }
}

module.exports = SocialNetwork;
