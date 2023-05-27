import axios from "axios";
import queryString from "query-string";

const PAGE_SIZE = 9;

export const getJobs = async (inputOptions) => {
  const qsOption = queryString.stringify(
    { ...inputOptions, limit: PAGE_SIZE },
    {
      skipNull: true,
    }
  );
  const { data } = await axios.get(`https://jabama-devjobs-api.vercel.app/api/v1/jobs?${qsOption}`);

  return { jobs: data.result.items, totalCount: data.result.meta.total };
};
