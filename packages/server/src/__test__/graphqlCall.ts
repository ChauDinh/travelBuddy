import { graphql, GraphQLSchema } from "graphql";

import { createSchema } from "../utils/createSchema";
// @ts-ignore
import Maybe from "graphql/tsutils/Maybe";

interface Options {
  source: string;
  variableValues?: Maybe<{ [key: string]: any }>;
  userId?: number;
}

let schema: GraphQLSchema;

export const grapqhlCall = async ({
  source,
  variableValues,
  userId,
}: Options) => {
  if (!schema) {
    schema = await createSchema();
  }
  return graphql({
    schema,
    source,
    variableValues,
    contextValue: {
      req: {
        session: { userId },
      },
      res: {
        clearCookie: jest.fn(),
      },
    },
  });
};
