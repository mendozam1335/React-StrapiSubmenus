import React from "react";
import sublinks from "../data";
import { useGlobalContext } from "./context";

const Navlinks = () => {
  const { setPage } = useGlobalContext();
  return (
    <div className="nav-links">
      {sublinks.map((link) => {
        const { pageId, page } = link;
        return (
          <button
            key={pageId}
            className="nav-link"
            onMouseEnter={() => setPage(pageId)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Navlinks;
