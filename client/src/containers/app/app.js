import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import AppStyleWrapper from "./appStyle";
import appAction from "../../redux/app/actions";
import Sidebar from "../../components/Sidebar/Sidebar";
const { changeView } = appAction;

const app = (props) => {
  return (
    <AppStyleWrapper>
      <Sidebar collapsed={props.collapsed}></Sidebar>
      <Switch>
        <Route exact path="/dashboard" component={() => <h1>Dashboard</h1>} />
      </Switch>
    </AppStyleWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    view: state.app.view,
    openDrawer: state.app.openDrawer,
    collapsed: state.app.collapsed,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeView: (width) => {
      dispatch(changeView(width));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(app);
