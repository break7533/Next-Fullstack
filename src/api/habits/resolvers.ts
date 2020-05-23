/* eslint-disable @typescript-eslint/no-explicit-any */
import { GraphQLScalarType } from 'graphql';
import { Kind, ValueNode } from 'graphql/language';
import Habits from './habits';

export const habitsResolvers = {
    Query: {
        async habits(): Promise<any> {
            try {
                return await Habits.find();
            } catch (e) {
                // eslint-disable-next-line no-console
                console.log(e);
            }
        }
    },

    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar',
        parseValue(value: string): Date {
            return new Date(value);
        },
        serialize(value: Date): number {
            return value.getTime();
        },
        parseLiteral(ast: ValueNode): Date {
            if (ast.kind === Kind.INT) {
                return new Date(ast.value);
            }
            return null;
        }
    })
};
