import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import teamActions from '~redux/Team/actions';
import Header from '~components/Header';

import TeamCreation from './layout';

class TeamsContainer extends Component {
  handleSubmit = values => this.props.createTeam(values);

  render() {
    const { loading } = this.props;
    return (
      <>
        <Header />
        <div className="row col-10 col-md-6 col-xl-4 m-auto">
          <TeamCreation onSubmit={this.handleSubmit} loading={loading} />
        </div>
      </>
    );
  }
}

TeamsContainer.propTypes = {
  createTeam: PropTypes.func,
  loading: PropTypes.bool
};

TeamsContainer.defaultProps = {
  loading: false
};

const mapStateToProps = state => ({
  loading: state.team.creationTeamLoading
});

const mapDispatchToProps = dispatch => ({
  createTeam: values => dispatch(teamActions.createTeam(values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamsContainer);
