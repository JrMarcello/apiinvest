module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.createTable('document', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            reference_id: {
                type: DataTypes.UUID,
                allowNull: false
            },

            reference_entity: {
                type: DataTypes.STRING,
                allowNull: false
            },

            name: {
                type: DataTypes.STRING,
                allowNull: false
            },

            description: {
                type: DataTypes.STRING,
            },

            url: {
                type: DataTypes.STRING,
                allowNull: false
            },

            type: {
                type: DataTypes.INTEGER,
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

    down: async (queryInterface) => {
        await queryInterface.dropTable('document')
    }
};
