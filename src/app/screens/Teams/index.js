import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators as teamActions } from '../../../redux/Team/actions';

import TeamCreation from './layout';

class TeamsContainer extends Component {
  handleSubmit = values => {
    this.props.createTeam(values);
  };

  render() {
    return <TeamCreation onSubmit={this.handleSubmit} />;
  }
}

TeamsContainer.propTypes = {
  createTeam: PropTypes.func,
  isError: PropTypes.bool
};

const mapStateToProps = state => ({
  // obtener loading, lo cambia el action de registration
  isError: state.isError
});

const mapDispatchToProps = dispatch => ({
  // acciones
  // funciones que llaman acciones
  createTeam: values => dispatch(teamActions.createTeam(values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamsContainer);
