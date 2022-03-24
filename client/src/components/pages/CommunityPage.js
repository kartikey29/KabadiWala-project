import React from "react";
import { Row, Col } from "react-bootstrap";
import classes from "./CommunityPage.module.css";
import SideBar from "../Community/Sidebar/SideBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Community/Home/HomePage";
import Article from "../Community/Articles/Articles";

const CommunityPage = () => {
  return (
    <div className={classes.div}>
      <Row>
        <Col lg={2} md={2} xs={3} className={classes.nopadding}>
          <SideBar></SideBar>
        </Col>
        <Col className={classes.nopadding}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Articles" element={<Article />} />
            <Route path="/Chats" element={<div>Chats</div>} />
          </Routes>
        </Col>
      </Row>
    </div>
  );
};

export default CommunityPage;
