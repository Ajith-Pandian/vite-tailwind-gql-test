import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import Products from "./Products";

const client = new ApolloClient({
  uri: "https://demo.saleor.io/graphql/",
  cache: new InMemoryCache(),
});

function App() {
  const [count, setCount] = useState(0);

  // client
  //   .query({
  //     query: GetProductsQuery,
  //     variables: {
  //       first: 5,
  //       channel: "default-channel",
  //     },
  //   })
  //   .then((result) => console.log({ result }));

  const ref = useRef<HTMLElement>(null);
  useEffect(() => {});
  return (
    <ApolloProvider client={client}>
      <div className="grid place-items-center relative h-full w-full">
        <div className={"absolute top-0 text-blue-200 shadow-md"}>
          <h1>Saleor Products</h1>
        </div>
        <div
          className="overflow-y-auto"
          style={{
            marginTop: ref?.current?.clientHeight,
          }}
        >
          <Products />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
