
import { users } from "../../db/users";

/** @type {import('./$types').PageServerLoad} */

export async function load () {
	const usersArr = await users.find().toArray();
	let data = usersArr.map((doc) => {
		return {...doc, _id:doc._id.toHexString()}
	})
	return {
		users: data
	}
}




//export const prerender = true;
