import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import teamActions from '~redux/Team/actions';
import Header from '~components/Header';

import TeamCreation from './layout';

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
        <Header />
        <div className="main main-raised">
          <div className="row col-10 col-md-6 col-xl-4 m-auto">
            <TeamCreation
              onSubmit={this.handleSubmit}
              isError={isError}
              loading={loading}
              teamCreated={teamCreated}
            />
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
