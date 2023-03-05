import { useQuery } from "@apollo/client";
import { ProductCountableConnection } from "./generated/graphql";
import GetProductsQuery from "./graphql/getProducts";

const Products = () => {
  const { loading, error, data } = useQuery(GetProductsQuery, {
    variables: {
      first: 50,
      channel: "default-channel",
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="flex flex-col items-start">
      <h2 className="text-[24px] text-orange-400">Products</h2>
      <div className="flex flex-col gap-3 items-center max-h-[500px] overflow-y-auto">
        {(data?.products as ProductCountableConnection)?.edges?.map(
          ({ node: { name } }) => (
            <div key={name}>{name}</div>
          )
        )}
      </div>
    </div>
  );
};

export default Products;
