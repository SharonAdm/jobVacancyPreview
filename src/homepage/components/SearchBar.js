import React from "react";
import { useForm } from "react-hook-form";
import { Search, MapPin } from "react-feather";

function SearchBar({ setSearchFilters, options }) {
  const { register, handleSubmit } = useForm({
    values: options
  });

  return (
    <div>
      <form onSubmit={handleSubmit(setSearchFilters)}>
        <div className="title-input">
          <Search color="green" size={15} className="icon" />
          <input name="keyword" placeholder="Filter by title, companies... " {...register("keyword")} />
        </div>
        <div className="location-input">
          <MapPin color="green" size={15} className="icon" />
          <input name="location" placeholder="Filter by location..." {...register("location")} />
        </div>
        <div className="checkbox-input">
          <div style={{ display: "flex", alignItems: "center" }}>
            <input name="fullTimeOnly" type="checkbox" value="true" {...register("fullTimeOnly")} style={{ width: "auto", marginRight: "15px" }} />
            Full Time Only
          </div>
          <button type="submit" className="button">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
