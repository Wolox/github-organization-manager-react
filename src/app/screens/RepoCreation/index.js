import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import repositoryActions from '~redux/Repository/actions';
import Header from '~components/Header';

import { TECHNOLOGIES } from './constants';
import RepoCreation from './layout';

class RepoCreationContainer extends Component {
  handleSubmit = values => this.props.createRepo(values);

  render() {
    const { repoCreationLoading } = this.props;
    return (
      <>
        <Header />
        <div className="main main-raised">
          <div className="row col-10 col-md-6 col-xl-4 m-auto">
            <RepoCreation onSubmit={this.handleSubmit} loading={repoCreationLoading} />
          </div>
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
  createRepo: values => {
    const techs = Object.keys(TECHNOLOGIES).filter(tech => values[tech]);
    return dispatch(repositoryActions.createRepository({ ...values, techs }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoCreationContainer);
