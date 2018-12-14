'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    email: {
      index: { unique: true },
      type: DataTypes.STRING,
      validate: {
        isUnique(value, next) {
          User.find({
            where: { email: value }
          }).done((user) => {
            if (user)
              return next("Le nom d'utilisateur est déjà utilisé.");

            next();
          });
        },
        notEmpty: {
          arg: true,
          msg: "Vous devez saisir un nom d'utilisateur."
        }
      }
    },
    salt: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          arg: true,
          msg: "Vous devez saisir un mot de passe."
        }
      }
    },
    first_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          arg: true,
          msg: "Vous devez saisir un nom."
        }
      }
    },
    last_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          arg: true,
          msg: "Vous devez saisir un prénom."
        }
      }
    },
    phone: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          arg: true,
          msg: "Vous devez saisir un numéro de téléphone valide."
        }
      }
    }
  }, {
    underscored: true,
    tableName: 'user',
  });

  User.beforeCreate((user, options) => {
    return new Promise ((resolve, reject) => {
      var salt = bcrypt.genSaltSync(8);
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        user.salt = salt;
        return resolve(user, options);
      });
    });
  });
  User.associate = function(models) {
    models.User.belongsTo(models.Restaurant, {
      as: 'restaurant',
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return User;
};