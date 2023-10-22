class Process {
    constructor(id, userId, signatoryIds, comments, picture) {
      this.id = id;
      this.userId = userId;
      this.signatoryIds = signatoryIds;
      this.comments = comments;
      this.picture = picture;
    }
  }
  
  module.exports = Process;
  