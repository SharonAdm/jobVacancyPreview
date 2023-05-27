import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import { getJobs } from "./hooks/useJobsData";

function Homepage() {
  const [options, setOptions] = useState({});
  const [jobsData, setJobsData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const filterValues = Object.fromEntries(searchParams.entries());
    setOptions({ ...filterValues, page: 1 });
  }, []);

  useEffect(() => {
    if (options.page) {
      // Handle search params in url
      const searchParams = new URLSearchParams(window.location.search);
      Object.entries(options).forEach(([key, value]) => {
        if (key !== 'page') {
          if (value) {
            searchParams.set(key, value);
          } else {
            searchParams.delete(key);
          }
        }
      });
      window.history.replaceState(null, null, `?${searchParams.toString()}`);

      setLoading(true);
      getJobs(options).then(({ jobs, totalCount: resultCount }) => {
        setJobsData((oldJobData) => {
          if (options.page === 1) {
            return jobs;
          }
          return [...oldJobData, ...jobs];
        });
        setTotalCount(resultCount);
        setLoading(false);
      });
    }
  }, [options]);

  const handleLoadMore = () => {
    setOptions((oldOptions) => ({ ...oldOptions, page: oldOptions.page + 1 }));
  };

  const setSearchFilters = (data) => {
    setOptions({ ...data, page: 1 });
  };

  return (
    <div>
      <SearchBar setSearchFilters={setSearchFilters} options={options} />

      <div className="homepage-body">
        {jobsData &&
          jobsData.map((jobVacancy, index) => {
            return <Card data={jobVacancy} key={index} />;
          })}
      </div>

      {!loading && jobsData.length === 0 && <div className="empty-page"> No Data Was Found :(</div>}
      {jobsData.length !== 0 && jobsData.length !== totalCount && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="button" disabled={loading} onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
      {loading && <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>Loading...</div>}
    </div>
  );
}

export default Homepage;
