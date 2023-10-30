import React from "react";
import sublinks from "../data";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? "show-sidebar sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>

        <div className="sidebar-links">
          {sublinks.map((link) => {
            const { pageId, page, links } = link;
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <ul className="sidebar-sublinks">
                  {links.map((sublink) => {
                    const { id, label, icon, url } = sublink;
                    return (
                      <li key={id}>
                        <a href={url}>
                          {icon}
                          {label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
