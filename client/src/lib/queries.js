import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient("http://localhost:9000/graphql");

export const getJobs = async () => {
  const query = gql`
    query {
      jobs {
        id
        date
        title
        company {
          id
          name
          description
        }
      }
    }
  `;
  const { jobs } = await client.request(query);

  return jobs;
};

export const getJobById = async (id) => {
  const query = gql`
    query JobById($id: ID!) {
      job(id: $id) {
        id
        date
        title
        company {
          id
          name
        }
        description
      }
    }
  `;

  const { job } = await client.request(query, { id });
  return job;
};

export const getCompanyById = async (id) => {
  const query = gql`
    query CompanyById($id: ID!) {
      company(id: $id) {
        id
        name
        description
      }
    }
  `;

  const { company } = await client.request(query, { id });

  return company;
};
