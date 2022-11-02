'use strict';
module.exports = mongoose => {
  const newSchema = new mongoose.Schema({
    userName: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    }
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });
  const User = mongoose.model('User', newSchema);
  return User;
};