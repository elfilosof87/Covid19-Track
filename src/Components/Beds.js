import React, { Component, Fragment } from "react";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

import Badge from "react-bootstrap/Badge";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export default class Beds extends Component {
  state = {
    data: [],
    sources1: [],
    sources2: [],
    summary: [],
    lastRefreshed: "",
    isLoading: true,
    colleges: [],
  };

  componentDidMount() {
    axios({
      method: "GET",
      url: "https://api.rootnet.in/covid19-in/hospitals/beds",
    }).then((res) => {
      console.log(res.data.data.sources);
      this.setState({
        data: res.data.data.regional,
        sources1: res.data.data.sources,
        summary: res.data.data.summary,
        lastRefreshed: res.data.lastRefreshed,
        isLoading: false,
      });
    });

    axios({
      method: "GET",
      url: "https://api.rootnet.in/covid19-in/hospitals/medical-colleges",
    }).then((res) => {
      console.log(res.data.data.sources);
      this.setState({
        colleges: res.data.data.medicalColleges,
        sources2: res.data.data.sources,
      });
    });
  }

  fieldsDisplay1 = (data) =>
    data.map((datas) => (
      <tr>
        <td>{datas.state}</td>
        <td>{datas.ruralHospitals}</td>
        <td>{datas.ruralBeds}</td>
        <td>{datas.urbanHospitals}</td>
        <td>{datas.urbanBeds}</td>
        <td>{datas.totalHospitals}</td>
        <td>{datas.totalBeds}</td>
      </tr>
    ));

  fieldsDisplay2 = (colleges) =>
    colleges.map((college) => (
      <tr>
        <td>{college.state}</td>
        <td>{college.name}</td>
        <td>{college.city}</td>
        <td>{college.ownership}</td>
        <td>{college.hospitalBeds}</td>
      </tr>
    ));

  sourceDisplay = (sources) => sources.map((datas) => <span>{datas.url}</span>);

  sourceDisplay2 = (sources) =>
    sources.map((datas) => <span style={{ width: "80%" }}>{datas}</span>);

  render() {
    const {
      data,
      sources1,
      sources2,
      //eslint-disable-next-line
      summary,
      //eslint-disable-next-line
      lastRefreshed,
      isLoading,
      colleges,
    } = this.state;

    return (
      <Fragment>
        <center>
          {isLoading ? (
            <Spinner animation="grow" className="spinner" variant="warning" />
          ) : (
            <div className="back">
              <h1 className="covid-text marg-top">Hospital bed count</h1>
              <div className="prep1">
                <Tabs defaultActiveKey="beds" id="uncontrolled-tab-example">
                  <Tab eventKey="beds" title="Hospital Beds">
                    <Table
                      responsive="md"
                      bordered
                      striped
                      hover="true"
                      variant="dark"
                    >
                      <thead>
                        <tr>
                          <th>State</th>
                          <th>Rural Hospitals</th>
                          <th>Rural Beds</th>
                          <th>Urban Hospitals</th>
                          <th>Urban Beds</th>
                          <th>Total Hospitals</th>
                          <th>Total Beds</th>
                        </tr>
                      </thead>
                      <tbody>{this.fieldsDisplay1(data)}</tbody>
                    </Table>
                    <Badge pill variant="success">
                      Source: {this.sourceDisplay(sources1)}
                    </Badge>
                  </Tab>
                  <Tab eventKey="colleges" title="Medical Colleges">
                    <Table
                      responsive="md"
                      bordered
                      striped
                      hover="true"
                      variant="dark"
                    >
                      <thead>
                        <tr>
                          <th>State</th>
                          <th>University Name</th>
                          <th>City</th>
                          <th>Ownership</th>
                          <th>Hospital Beds</th>
                        </tr>
                      </thead>
                      <tbody>{this.fieldsDisplay2(colleges)}</tbody>
                    </Table>
                    <Badge variant="success">
                      Source: {this.sourceDisplay2(sources2)}
                    </Badge>
                  </Tab>
                </Tabs>
              </div>
            </div>
          )}
        </center>
      </Fragment>
    );
  }
}
