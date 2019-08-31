import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import { actionCreators as repositoryActions } from '';

import RepoCreation from './layout';

class RepoCreationContainer extends Component {
  handleSubmit = values => {
    console.log('valuessssssssssss', values);
    this.props.createRepo(values);
  };

  render() {
    return <RepoCreation onSubmit={this.handleSubmit} />;
  }
}

RepoCreationContainer.PropTypes = {
  createRepo: propTypes.funct,
  isError: fdsf
};

const mapStateToProps = state => ({
  // obtener loading, lo cambia el action de registration
  isError: state.isError
});

const mapDispatchToProps = dispatch => ({
  // acciones
  // funciones que llaman acciones
  createRepo: values => dispatch(repositoryActions.createRepo(values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoCreationContainer);
