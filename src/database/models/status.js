export default (sequelize, DataTypes) => {
    const Status = sequelize.define(
        'Status',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            name: {
                type: DataTypes.STRING,
                allowNull: false
            },

            description: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            tableName: 'status'
        }
    )

    return Status
}
