import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((res) => setUserData(res))
        .catch((err) => console.log(err));
    }
    fetchAPI();
  }, []);

  return (
    <div className="d-flex justify-content-around flex-wrap align-content-around text-light bg-warning ">
      {userData &&
        userData.map((i) => (
          <div
            className="card mt-5 mb-5 shadow p-3"
            key={i.id}
            style={{ width: "34rem" }}
          >
            <div className="card-header d-flex flex-column bg-primary p-3">
              <div> User_ID: &nbsp;{i.id}</div>
              <div>Username: &nbsp;{i.username}</div>
            </div>
            <div className="card-body d-flex flex-column bg-success p-4">
              <div>Name: &nbsp;{i.name}</div>
              <div>Email: &nbsp;{i.email}</div>
              <div className="d-flex justify-centent-between align-items-center">
                <div className="d-flex align-self-start">Address:&nbsp;</div>
                <div>
                  <div>
                    <br />
                  </div>
                  <div>Street: &nbsp;{i.address.street}</div>
                  <div>Suite: &nbsp;{i.address.suite}</div>
                  <div>City: &nbsp;{i.address.city}</div>
                  <div>ZipCode: &nbsp;{i.address.zipcode}</div>
                  <div className="d-flex d-flex justify-centent-between align-items-center">
                    <div className="d-flex align-self-start">
                      Geo-Location:&nbsp;
                    </div>
                    <div>
                      <div>
                        <br />
                      </div>
                      <div>lat: &nbsp;{i.address.geo.lat}</div>
                      <div>lng: &nbsp;{i.address.geo.lng}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>Phone: &nbsp;{i.phone}</div>
              <div>Website: &nbsp;{i.website}</div>
              <div>
                <div className="d-flex  justify-centent-between align-items-center">
                  <div className="d-flex align-self-start">Company:&nbsp;</div>
                  <div>
                    <div>
                      <br />
                    </div>
                    <div>Name: &nbsp;{i.company.name}</div>
                    <div>CatchPhrase: &nbsp;{i.company.catchPhrase}</div>
                    <div>BS: &nbsp;{i.company.bs}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer p-4 bg-danger"></div>
          </div>
        ))}
    </div>
  );
}
export default App;
