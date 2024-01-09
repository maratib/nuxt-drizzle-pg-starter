import 'dotenv/config'
import { faker } from "@faker-js/faker";
import { db } from "~/db";
import { hash } from "~/server/utils/encrypt";
import { UsersTable, type NewUser } from './schema';

if (!("DB_URL" in process.env))
  throw new Error("DB_URL not found on .env.development");

const main = async () => {
  console.log('Seeding starts ...');
  const data: NewUser[] = [];

  data.push({
    user: 'admin',
    email: 'admin@mail.com',
    password: await hash('Admin322'),
    name: 'Admin',
    roles: 'ADMIN'
  },
    {
      user: 'user',
      email: 'user@mail.com',
      password: await hash('User322'),
      name: 'User',
    }
  )

  // for (let index = 0; index < 4; index++) {
  //   const name = faker.internet.userName();
  //   data.push({
  //     user: name,
  //     email: faker.internet.email(),
  //     password: faker.internet.password(),
  //     name: name,
  //   })
  // }

  // console.log(data);
  await db.insert(UsersTable).values(data)
  console.log('Seeding done ...');


}

main();
