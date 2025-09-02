module.exports = {
    async beforeCreate(event) {
        const { email } = event.params.data;
        if ('username' in event.params.data) {
            delete event.params.data.username;
        }

        if (email) {
            event.params.data.username = email;
        }
    },

    async beforeUpdate(event) {
        const { email } = event.params.data;
        if ('username' in event.params.data) {
            delete event.params.data.username;
        }
        if (email) {
            event.params.data.username = email;
        }
    },
};
