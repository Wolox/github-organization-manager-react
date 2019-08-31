import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators as repositoryActions } from '../../../redux/Repository/actions';

import AddOwner from './layout';
// import { TECHNOLOGIES } from './constants';

class AddOwnerToRepoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    repositoryActions.getRepositories().then(response => {
      this.setState({ data: response });
    });
  }

  handleSubmit = values => {
    console.log(values);
    this.props.addOwnersToRepo(values);
  };

  render() {
    return (
      <AddOwner
        onSubmit={this.handleSubmit}
        ownerAdded={this.props.ownerAdded}
        data={this.state.data.map(repository => ({label: repository, value: repository}))}
      />
    );
  }
}

AddOwnerToRepoContainer.propTypes = {
  addOwnersToRepo: PropTypes.func.isRequired,
  // isError: PropTypes.bool,
  ownerAdded: PropTypes.bool
};

AddOwnerToRepoContainer.defaultProps = {
  // isError: false,
  ownerAdded: false
};

const mapStateToProps = state => ({
  // obtener loading, lo cambia el action de registration
  // isError: state.repository.isError,
  ownerAdded: state.repository.ownerAdded
});

const mapDispatchToProps = dispatch => ({
  // funciones que llaman acciones
  addOwnersToRepo: values => {
    console.log('aaaaa', values);
    // const techs = [];
    // Object.keys(TECHNOLOGIES).forEach(tech => {
    //   values[tech] && techs.push(tech);
    // });
    /* eslint-disable no-param-reassign */
    // values = { ...values, techs };
    return dispatch(repositoryActions.addOwnerToRepository(values));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddOwnerToRepoContainer);
