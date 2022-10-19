import {MongoClient} from 'mongodb';
// @ts-ignore
import { MONGODB_URL } from '$env/static/private'; 

const client = new MongoClient(MONGODB_URL)

export function start_mongo() {
	console.log('Starting mongo...');
	return client.connect();
}

export const db = client.db("sveltenew")