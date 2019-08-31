import React, { Component } from 'react';

class ContainerTeams extends Component {
  render() {
    return (
      <form className="container">
        <div className="form-group">
          <span className="h1">Create a new team</span>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Team Name</label>
          <input
            type="text"
            className="form-control"
            id="inputNameProject"
            required
            placeholder="wolox-devs, wolox-reviewers"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default ContainerTeams;
