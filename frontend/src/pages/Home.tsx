import useApiHandle from "./api_handle";

const Home = () => {
  const { loading, error, data } = useApiHandle({ url: "/", method: "get" });

  return (
    <>
      <div>Home</div>

      <div>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {!loading && !error && data && <div>{JSON.stringify(data)}</div>}
      </div>
    </>
  );
};

export default Home;
