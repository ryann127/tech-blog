const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

// User.hasMany(Project, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

Blog.hasMany(Comment, {
    foreignKey: 'blog_id'
  });

Comment.belongsTo(User, {
    foreignKey: 'user-id'
})

module.exports = { User, Blog, Comment };