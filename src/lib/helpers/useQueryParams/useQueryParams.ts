import { useSearchParams } from "react-router-dom";

export function useQueryParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams: Record<string, string | undefined> = Object.fromEntries([
    ...searchParams,
  ]);

  const getQueryParams = () => {
    return { ...queryParams };
  };

  const formatSearchQuery = (values: Record<string, string | undefined>) => {
    let query = "";

    for (const [key, value] of Object.entries(values)) {
      if (value) {
        query += query === "" ? `${key}=${value}` : `&${key}=${value}`;
      }
    }
    return query;
  };

  const clearQueryParams = () => {
    const k = searchParams.keys();

    [...k].forEach((element) => {
      searchParams.delete(element);
    });

    setSearchParams(searchParams);
  };

  const clearQueryParam = (key: string) => {
    if (searchParams.has(key)) {
      searchParams.delete(key);
      setSearchParams(searchParams);
    }
  };

  return {
    getQueryParams,
    clearQueryParam,
    clearQueryParams,
    formatSearchQuery,
  };
}
