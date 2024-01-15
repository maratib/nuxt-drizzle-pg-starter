import { User } from "~/server/model/user";

export default defineEventHandler(async (event) => {

  const user = new User(event);

  if (event.node.req.method === 'GET') { // GET
    return await user.all();
  }

  if (event.node.req.method === 'POST') { // POST
    try {

      const body = await readBody(event)
      const newUser = user.create(body)

      event.node.res.statusCode = 201
      return newUser;

    } catch (e: any) { return BAD_REQUEST(event) }
  }

})