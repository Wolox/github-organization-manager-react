import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { TECHNOLOGIES } from './constants';
import RepoCreation from './layout';

import { actionCreators as repositoryActions } from '~redux/Repository/actions';

import Header from '~components/Header';

class RepoCreationContainer extends Component {
  handleSubmit = values => {
    this.props.createRepo(values);
  };

  render() {
    return (
      <>
        <Header />
        <div className="main main-raised">
          <div className="profile-content">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ml-auto mr-auto">
                  <RepoCreation
                    onSubmit={this.handleSubmit}
                    repoCreated={this.props.repoCreated}
                    loading={this.props.loading}
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
  loading: PropTypes.bool,
  repoCreated: PropTypes.bool
};

RepoCreationContainer.defaultProps = {
  loading: false,
  repoCreated: false
};

const mapStateToProps = state => ({
  // obtener loading, lo cambia el action de registration
  repoCreated: state.repository.repoCreated,
  loading: state.repository.loading
});

const mapDispatchToProps = dispatch => ({
  createRepo: values => {
    const techs = [];
    Object.keys(TECHNOLOGIES).forEach(tech => {
      if (values[tech]) {
        techs.push(tech);
      }
    });
    /* eslint-disable no-param-reassign */
    values = { ...values, techs };
    return dispatch(repositoryActions.createRepository(values));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoCreationContainer);
