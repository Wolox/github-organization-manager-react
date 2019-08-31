import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators as repositoryActions } from '../../../redux/Repository/actions';

import RepoCreation from './layout';
import { TECHNOLOGIES } from './constants';
import styles from './styles.module.scss';

class RepoCreationContainer extends Component {
  handleSubmit = values => {
    this.props.createRepo(values);
  };

  render() {
    return (
      <>
        <div className={`page-header ${styles.pageHeader}`} data-parallax="true" />
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
  repoCreated: false,
  loading: false
};

const mapStateToProps = state => ({
  // obtener loading, lo cambia el action de registration
  repoCreated: state.repository.repoCreated,
  loading: state.repository.loading
});

const mapDispatchToProps = dispatch => ({
  // funciones que llaman acciones
  createRepo: values => {
    console.log('aaaaa', values);
    const techs = [];
    Object.keys(TECHNOLOGIES).forEach(tech => {
      values[tech] && techs.push(tech);
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
