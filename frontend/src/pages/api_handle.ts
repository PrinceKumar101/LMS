import axios_setup from "@/assets/Axios";
import { useEffect, useState } from "react";

type ApiProps = {
  url: string;
  method: "get" | "post" | "put" | "delete";
};

const useApiHandle = ({ url, method }: ApiProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios_setup.request({
          url,
          method,
        });
        setData(res.data);
      } catch (err) {
        console.error(err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method]);

  return { loading, error, data };
};

export default useApiHandle;
