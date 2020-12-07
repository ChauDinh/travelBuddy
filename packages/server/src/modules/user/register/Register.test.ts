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

const registerMutation = `
  mutation Register($data: RegisterInput!){
    register(data: $data) {
      email
      phone
      postal
      street
      city
    }
  }
`;

describe("Test Register", () => {
  it("create user", async () => {
    const user = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      phone: faker.phone.phoneNumber(),
      postal: faker.address.zipCode(),
      street: faker.address.streetAddress(),
      city: faker.address.city(),
    };

    const response = await grapqhlCall({
      source: registerMutation,
      variableValues: {
        data: user,
      },
    });

    console.log("GRAPHQL REGISTER RESPONSE: ", response);

    expect(response).toMatchObject({
      data: {
        register: {
          email: user.email,
          phone: user.phone,
          postal: user.postal,
          street: user.street,
          city: user.city,
        },
      },
    });

    const dbUser = await User.findOne({ where: { email: user.email } });
    expect(dbUser).toBeDefined();
    expect(dbUser!.confirmed).toBeFalsy();
    expect(dbUser!.firstName).toBe(user.firstName);
  });
});
