import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import repositoryActions from '../../../redux/Repository/actions';

import { TECHNOLOGIES } from './constants';
import RepoCreation from './layout';

import Header from '~components/Header';

class RepoCreationContainer extends Component {
  handleSubmit = values => {
    this.props.createRepo(values);
  };

  componentWillUnmount() {
    this.props.resetStateRepoCreated();
  }

  render() {
    const { repoCreated, repoCreatedLoading } = this.props;
    return (
      <>
        <Header />
        <div className="main main-raised">
          <div className="profile-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-10 ml-auto mr-auto">
                  <RepoCreation
                    onSubmit={this.handleSubmit}
                    repoCreated={repoCreated}
                    loading={repoCreatedLoading}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

RepoCreationContainer.propTypes = {
  createRepo: PropTypes.func.isRequired,
  repoCreated: PropTypes.bool,
  repoCreatedLoading: PropTypes.bool,
  resetStateRepoCreated: PropTypes.func
};

RepoCreationContainer.defaultProps = {
  repoCreated: false,
  repoCreatedLoading: false
};

const mapStateToProps = state => ({
  repoCreated: state.repository.repoCreated,
  repoCreatedLoading: state.repository.repoCreationLoading
});

const mapDispatchToProps = dispatch => ({
  createRepo: values => {
    const techs = [];
    Object.keys(TECHNOLOGIES).forEach(tech => {
      if (values[tech]) {
        techs.push(tech);
      }
    });
    dispatch(repositoryActions.createRepository({ ...values, techs }));
  },
  resetStateRepoCreated: () => dispatch(repositoryActions.repoCreated(false))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoCreationContainer);
