const config = {
    mongoConnectionString: process.env.MONGO_URL || 'mongodb://<username>:<password>@<cluster>:27017,<host>.mongodb.net:27017,<host N>.mongodb.net:27017/<database>?ssl=true&replicaSet=<replicasetName>&authSource=admin&retryWrites=true'
};
module.exports = config;