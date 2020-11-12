const fetch = require("node-fetch")

// Apollo에서 제공하는 클라이언트 라이브러리
const { ApolloClient } = require("apollo-client")
const { InMemoryCache } = require("apollo-cache-inmemory")
const { createHttpLink } = require("apollo-link-http")

// GraphQL Query Parsing - Template literal
const gql = require("graphql-tag")

const client = new ApolloClient({
  // link, cahce는 필수 옵션
  link: createHttpLink({ uri: "http://localhost:4000/graphql", fetch: fetch }),
  cache: new InMemoryCache(),
})

(async function () {
  const { loading, error, data } = await client.query({
    query: gql`
      query {
        books {
          title
          author
        }
      }
    `,
  })

  // 데이터 수신되는 동안 true -> UI 구현시 로딩메세지나 스피너에서 활용 가능
  console.log("loading:", loading)
  // Error
  console.log("error:", error)
  // Result
  console.log("data:", data)
})()