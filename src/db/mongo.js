import {MongoClient} from 'mongodb';
// @ts-ignore
import { MONGODB_URI } from '$env/static/private'; 

const client = new MongoClient(MONGODB_URI)

export function start_mongo() {
	console.log('Starting mongo...');
	return client.connect();
}

export const db = client.db("sveltenew")