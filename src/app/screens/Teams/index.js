import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import teamActions from '../../../redux/Team/actions';

import styles from './styles.module.scss';
import TeamCreation from './layout';

import Menu from '~components/Menu';

class TeamsContainer extends Component {
  handleSubmit = values => {
    this.props.createTeam(values);
  };

  componentWillUnmount() {
    this.props.resetStateTeamCreated();
  }

  render() {
    const { isError, loading, teamCreated } = this.props;
    return (
      <>
        <Menu />
        <div className={`page-header ${styles.pageHeader}`} data-parallax="true" />
        <div className="main main-raised">
          <div className="profile-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-10 ml-auto mr-auto">
                  <TeamCreation
                    onSubmit={this.handleSubmit}
                    isError={isError}
                    loading={loading}
                    teamCreated={teamCreated}
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
  resetStateTeamCreated: PropTypes.func,
  teamCreated: PropTypes.bool
};

TeamsContainer.defaultProps = {
  loading: false,
  teamCreated: false
};

const mapStateToProps = state => ({
  isError: state.team.creationTeamError,
  loading: state.team.creationTeamLoading,
  teamCreated: state.team.teamCreated
});

const mapDispatchToProps = dispatch => ({
  createTeam: values => dispatch(teamActions.createTeam(values)),
  resetStateTeamCreated: () => dispatch(teamActions.teamCreated(false))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamsContainer);
