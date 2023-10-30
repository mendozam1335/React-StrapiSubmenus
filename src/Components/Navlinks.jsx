import React from "react";
import sublinks from "../data";

const Navlinks = () => {
  return (
    <div className="nav-links">
      {sublinks.map((link) => {
        const { pageId, page } = link;
        return (
          <button key={pageId} className="nav-link">
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Navlinks;
