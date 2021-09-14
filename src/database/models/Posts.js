'use strict'
module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define('posts', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        post: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    }, {
        underscored: true,
    });

    return Posts;
}