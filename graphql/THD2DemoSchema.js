import { gql } from 'apollo-server';

const typeDefs = `
  type Appointments {
    id: ID!
    Work_Type: String!
    Status: String!
    Appointment_ID: String!
    products: [Product!]!
    customers: [Customer!]!
  }

  type Product {
    id: ID!
    Product: String!
    Product_ID: String!
  }

  type Customer {
    id: ID!
    Customer_name: String!
    Address: String!
    Mobile: String!
  }

  input AppointmentsInput {
    id: ID!
    Work_Type: String!
    Status: String!
    Appointment_ID: String!
    products: [ProductInput!]!
    customers: [CustomerInput!]!
  }

  input ProductInput {
    id: ID!
    Product: String!
    Product_ID: String!
  }

  input CustomerInput {
    id: ID!
    Customer_name: String!
    Address: String!
    Mobile: String!
  }

  input EditFinanceInput {
    id: ID!
    Finance_amount: Float!
  }

  type Mutation {
    editApplyForFinance(input: EditFinanceInput!): Appointments!
  }

  type Query {
    getAppointment(id: ID!): Appointments
  }
`;

export default typeDefs;