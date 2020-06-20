module.exports = function(Sequelize) {
  const { STRING, DATE, INTEGER } = Sequelize;

  return {
    id: { type: STRING(70), primaryKey: true },
    title: STRING(30),
    cover: STRING(100),
    describe: STRING(100),
    content: STRING(),
    author_id: STRING(70),
    hot: INTEGER(100),
    created_at: DATE,
    updated_at: DATE
  };
};
