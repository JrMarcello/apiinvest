module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.createTable('status', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },

            description: {
                type: DataTypes.STRING,
                allowNull: false
            },

            created_at: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW
            },

            updated_at: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW
            }
        })
    },

    down: async queryInterface => {
        await queryInterface.dropTable('status')
    }
}
