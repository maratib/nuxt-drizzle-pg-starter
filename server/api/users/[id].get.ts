import { User } from "~/server/model/user";
import { findUserById } from "~/server/model/users"

export default defineEventHandler(async (event) => {
  
  const id = event.context.params?.id as string;
  const user = new User();
      
  return user.findById(id);
})
