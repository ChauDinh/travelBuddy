import { Connection } from "typeorm";
import faker from "faker";

import { testConnection } from "./../../../__test__/testConnection";
import { grapqhlCall } from "./../../../__test__/graphqlCall";
import { User } from "./../../../entity/User";

let connection: Connection;
beforeAll(async () => {
  connection = await testConnection();
});
afterAll(async () => {
  await connection.close();
});

const meQuery = `
  {
    me {
      id
      firstName
      lastName
      name
      email
      phone
      postal
      street
      city
    }
  }
`;

describe("Me Query", () => {
  it("get current user", async () => {
    const user = await User.create({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      phone: faker.phone.phoneNumber(),
      postal: faker.address.zipCode(),
      street: faker.address.streetAddress(),
      city: faker.address.city(),
    }).save();

    const response = await grapqhlCall({
      source: meQuery,
      userId: user.id,
    });

    console.log(response);
    expect(response).toMatchObject({
      data: {
        me: {
          id: `${user.id}`,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          postal: user.postal,
          street: user.street,
          city: user.city,
        },
      },
    });
  });

  it("return null", async () => {
    const response = await grapqhlCall({
      source: meQuery,
    });

    expect(response).toMatchObject({
      data: {
        me: null,
      },
    });
  });
});
