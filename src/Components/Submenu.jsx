import React, { useRef } from "react";
import { useGlobalContext } from "./context";
import sublinks from "../data";

const Submenu = () => {
  const { pageId, closeSubmenu } = useGlobalContext();
  const page = sublinks.find((el) => el.pageId === pageId);
  const submenuContainer = useRef(null);

  return (
    <div
      className={pageId ? "submenu show-submenu" : "submenu"}
      ref={submenuContainer}
      onMouseLeave={closeSubmenu}
    >
      <h5>{page?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns: page?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {page?.links?.map((link) => {
          const { id, label, icon, url } = link;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
