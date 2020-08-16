const {
  MongoClient
} = require('mongodb');
const logger = require('../middlewares/logger');

class Mongo {
  constructor() {
    this.client = new MongoClient(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }

  async main() {
    await this.client.connect();
    logger.ready('Connected to MongoDB');
    /* 
    change this to your database and collection before uncommenting.
    this.db = client.db('your-db');
    this.collection = this.db.collection('your-collection');
    this.db = this.client.db(); 
    */
  }
}

module.exports = new Mongo();
