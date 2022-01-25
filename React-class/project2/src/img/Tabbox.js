import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

function Tabbox() {
  let [tabView, tabViewCng] = useState("1");
  let tabToggle = (a) => {
    tabViewCng(a);
  };

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={tabView === "1" ? "active" : ""}
            onClick={() => {
              tabToggle("1");
            }}
          >
            Tab1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={tabView === "2" ? "active" : ""}
            onClick={() => {
              tabToggle("2");
            }}
          >
            Tab2
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={tabView}>
        <TabPane tabId="1">
          <h4>Tab 1 Contents</h4>
        </TabPane>
        <TabPane tabId="2">
          <h4>Tab 2 Contents</h4>
        </TabPane>
      </TabContent>
    </div>
  );
}
export default Tabbox;
