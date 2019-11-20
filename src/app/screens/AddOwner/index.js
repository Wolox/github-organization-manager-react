import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import repositoryActions from '~redux/Repository/actions';
import Header from '~components/Header';

import AddOwner from './layout';

class AddOwnerToRepoContainer extends Component {
  componentDidMount() {
    this.props.getRepositories();
  }

  handleSubmit = values => this.props.addOwnersToRepo(values);

  render() {
    const { data, loading } = this.props;
    const repos = data.map(repository => ({ label: repository, value: repository }));
    return (
      <>
        <Header />
        <div className="row col-10 col-md-6 col-xl-4 m-auto">
          <AddOwner onSubmit={this.handleSubmit} data={repos} loading={loading} />
        </div>
      </>
    );
  }
}

AddOwnerToRepoContainer.propTypes = {
  addOwnersToRepo: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.string),
  getRepositories: PropTypes.func,
  loading: PropTypes.bool
};

AddOwnerToRepoContainer.defaultProps = {
  data: [],
  loading: false
};

const mapStateToProps = state => ({
  loading: state.repository.addCodeOwnerLoading,
  data: state.repository.data
});

const mapDispatchToProps = dispatch => ({
  getRepositories: () => dispatch(repositoryActions.getRepositories()),
  addOwnersToRepo: values => dispatch(repositoryActions.addOwnerToRepository(values))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddOwnerToRepoContainer);
