module.exports = function(Sequelize) {
  const { STRING, DATE } = Sequelize;

  return {
    id: { type: STRING(70), primaryKey: true },
    username: STRING(30),
    password: STRING(70),
    nickname: STRING(50),
    avatar: STRING(200),
    role: {
      type: STRING(50),
      defaultValue: 'user'
    },
    created_at: DATE,
    updated_at: DATE
  };
};
