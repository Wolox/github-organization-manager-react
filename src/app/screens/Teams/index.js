import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import teamActions from '~redux/Team/actions';
import Header from '~components/Header';

class TeamsContainer extends Component {
  handleSubmit = () => {
    this.props.getTeams();
  };

  render() {
    return (
      <>
        <Header />
        <div>Soy una lista de equipo</div>
      </>
    );
  }
}

TeamsContainer.propTypes = {
  getTeams: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  getTeams: () => dispatch(teamActions.getTeams())
});

export default connect(
  null,
  mapDispatchToProps
)(TeamsContainer);
