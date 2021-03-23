import React from "react";

export default function Search(props) {
  return (
    <>
      <div className="searchBox">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.showData();
          }}
        >
          <label htmlFor="searchBar">Enter Your City Name</label>
          <input
            type="text"
            name="searchBar"
            id="searchBar"
            placeholder="Enter City Name"
            onChange={props.handleChange}
          />
        </form>
      </div>
    </>
  );
}
