import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import repositoryActions from '~redux/Repository/actions';
import Header from '~components/Header';

import AddOwner from './layout';

class AddOwnerToRepoContainer extends Component {
  handleSubmit = values => this.props.addOwnersToRepo(values);

  render() {
    const { loading } = this.props;
    return (
      <>
        <Header />
        <div className="row col-10 col-md-6 col-xl-4 m-auto">
          <AddOwner onSubmit={this.handleSubmit} loading={loading} />
        </div>
      </>
    );
  }
}

AddOwnerToRepoContainer.propTypes = {
  addOwnersToRepo: PropTypes.func.isRequired,
  loading: PropTypes.bool
};

AddOwnerToRepoContainer.defaultProps = {
  loading: false
};

const mapStateToProps = state => ({
  loading: state.repository.addCodeOwnerLoading
});

const mapDispatchToProps = dispatch => ({
  addOwnersToRepo: values => dispatch(repositoryActions.addOwnerToRepository(values))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddOwnerToRepoContainer);
