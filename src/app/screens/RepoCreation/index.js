import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import repositoryActions from '~redux/Repository/actions';
import Header from '~components/Header';

import RepoCreation from './layout';

class RepoCreationContainer extends Component {
  handleSubmit = values => {
    const techs = Object.entries(values.techs)
      .filter(e => e[1])
      .map(e => e[0]);
    return this.props.createRepo({ ...values, techs });
  };

  render() {
    const { repoCreationLoading } = this.props;
    return (
      <>
        <Header />
        <div className="row col-10 col-md-6 col-xl-4 m-auto">
          <RepoCreation onSubmit={this.handleSubmit} loading={repoCreationLoading} />
        </div>
      </>
    );
  }
}

RepoCreationContainer.propTypes = {
  createRepo: PropTypes.func.isRequired,
  repoCreationLoading: PropTypes.bool
};

RepoCreationContainer.defaultProps = {
  repoCreationLoading: false
};

const mapStateToProps = state => ({
  repoCreationLoading: state.repository.repoCreationLoading
});

const mapDispatchToProps = dispatch => ({
  createRepo: values => dispatch(repositoryActions.createRepository(values))
});

export default connect(mapStateToProps, mapDispatchToProps)(RepoCreationContainer);
