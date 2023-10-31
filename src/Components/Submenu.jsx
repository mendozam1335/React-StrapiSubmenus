import React, { useRef } from "react";
import { useGlobalContext } from "./context";
import sublinks from "../data";

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const page = sublinks.find((el) => el.pageId === pageId);
  const submenuContainer = useRef(null);

  const handleMouseLeave = (event) => {
    const submenu = submenuContainer.current;
    const { clientX, clientY } = event;
    const { left, right, bottom } = submenu.getBoundingClientRect();

    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }

    console.log(clientX, clientY);
  };
  return (
    <div
      className={pageId ? "submenu show-submenu" : "submenu"}
      ref={submenuContainer}
      onMouseLeave={handleMouseLeave}
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
