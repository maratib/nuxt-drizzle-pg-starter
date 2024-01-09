import { User } from "~/server/model/user";

const user = new User()

export default defineEventHandler(async (event) => {
  if (event.node.req.method === 'GET') { // GET
    return await user.all();
  }

  if (event.node.req.method === 'POST') { // POST
    try {

      const body = await readBody(event)
      const newUser = user.create(body)

      event.node.res.statusCode = 201
      return newUser;

    } catch (e: any) { BAD_REQUEST(e) }
  }

})