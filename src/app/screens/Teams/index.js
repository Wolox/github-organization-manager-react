import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators as teamActions } from '../../../redux/Team/actions';

import TeamCreation from './layout';
import styles from './styles.module.scss';

class TeamsContainer extends Component {
  handleSubmit = values => {
    this.props.createTeam(values);
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
                  <TeamCreation
                    onSubmit={this.handleSubmit}
                    isError={this.props.isError}
                    loading={this.props.loading}
                    teamCreated={this.props.teamCreated}
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

TeamsContainer.propTypes = {
  createTeam: PropTypes.func,
  isError: PropTypes.bool,
  loading: PropTypes.bool,
  teamCreated: PropTypes.bool
};

TeamsContainer.defaultProps = {
  // isError: false,
  loading: false,
  teamCreated: false
};

const mapStateToProps = state => ({
  // obtener loading, lo cambia el action de registration
  isError: state.team.isError,
  loading: state.team.loading,
  teamCreated: state.team.teamCreated
});

const mapDispatchToProps = dispatch => ({
  // acciones
  // funciones que llaman acciones
  createTeam: values => dispatch(teamActions.createTeam(values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamsContainer);
