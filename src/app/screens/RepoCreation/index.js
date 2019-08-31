import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators as repositoryActions } from '../../../redux/Repository/actions';

import RepoCreation from './layout';
import { TECHNOLOGIES } from './constants';

class RepoCreationContainer extends Component {
  handleSubmit = values => {
    this.props.createRepo(values);
  };

  render() {
    return <RepoCreation onSubmit={this.handleSubmit} repoCreated={this.props.repoCreated} />;
  }
}

RepoCreationContainer.propTypes = {
  createRepo: PropTypes.func.isRequired,
  isError: PropTypes.bool,
  repoCreated: PropTypes.bool
};

RepoCreationContainer.defaultProps = {
  isError: false,
  repoCreated: false
};

const mapStateToProps = state => ({
  // obtener loading, lo cambia el action de registration
  isError: state.repository.isError,
  repoCreated: state.repository.repoCreated
});

const mapDispatchToProps = dispatch => ({
  // funciones que llaman acciones
  createRepo: values => {
    console.log('aaaaa', values);
    const techs = [];
    Object.keys(TECHNOLOGIES).forEach(tech => {
      values[tech] && techs.push(tech);
    });
    values = { ...values, techs };
    return dispatch(repositoryActions.createRepository(values));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoCreationContainer);
