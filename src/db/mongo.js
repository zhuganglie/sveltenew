import {MongoClient} from 'mongodb';
// @ts-ignore
import { VITE_MONGO_URL } from '$env/static/private'; 

const client = new MongoClient(VITE_MONGO_URL)

export function start_mongo() {
	console.log('Starting mongo...');
	return client.connect();
}

export const db = client.db("sveltenew")