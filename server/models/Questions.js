module.exports = (sequelize, DataTypes) => {
  const Questions = sequelize.define("Questions", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    qnBody: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Questions.associate = (models) => {
    Questions.hasMany(models.Comments, {
      onDelete: "cascade",
    });
  };

  return Questions;
};
