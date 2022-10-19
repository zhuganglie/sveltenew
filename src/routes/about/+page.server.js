
import { recipe } from "../../db/recipe";

/** @type {import('./$types').PageServerLoad} */

export async function load () {
	const recArr = await recipe.find().toArray();
	let data = recArr.map((doc) => {
		return {...doc, _id:doc._id.toHexString()}
	})
	return {
		recipe: data
	}
}




//export const prerender = true;
