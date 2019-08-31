import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators as teamActions } from '../../../redux/Repository/actions';

import AddMember from './layout';

class AddMemberContainer extends Component {
  handleSubmit = values => {
    this.props.addMember(values);
  };

  render() {
    return <AddMember onSubmit={this.handleSubmit} />;
  }
}

AddMemberContainer.propTypes = {
  addMember: PropTypes.func,
  isError: PropTypes.bool
};

const mapStateToProps = state => ({
  // obtener loading, lo cambia el action de registration
  isError: state.isError
});

const mapDispatchToProps = dispatch => ({
  // acciones
  // funciones que llaman acciones
  addMember: values => dispatch(teamActions.addMemberToOrg(values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMemberContainer);
