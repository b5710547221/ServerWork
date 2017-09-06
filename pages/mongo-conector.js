import {MongoClient ,ObjectId} from 'mongodb';

// 1
const MONGO_URL = 'mongodb://localhost:27017/labdoor';

// 2
module.exports = async () => {
  const db = await MongoClient.connect(MONGO_URL);
  return {list_1: db.collection('list_1')};
}