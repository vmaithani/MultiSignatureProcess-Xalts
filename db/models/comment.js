class Comment {
    constructor(id, processId, userId, text, visibleTo) {
      this.id = id;
      this.processId = processId;
      this.userId = userId;
      this.text = text;
      this.visibleTo = visibleTo;
    }
  }
  
  module.exports = Comment;
  