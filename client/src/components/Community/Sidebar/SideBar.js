import React from "react";
import classes from "./SideBar.module.css";
import SideBarMenuEle from "./SideBarMenuEle";

const Sidebar = () => {
  return (
    <div className={classes.side}>
      <SideBarMenuEle name={"Home"} path={"/"} />
      <SideBarMenuEle name={"Articles"} path={"/Articles"} />
      <SideBarMenuEle name={"Stream & Connect"} path={"/Chats"} />
      <SideBarMenuEle name={"Groups"} path={"/Chats"} />
    </div>
  );
};

export default Sidebar;
