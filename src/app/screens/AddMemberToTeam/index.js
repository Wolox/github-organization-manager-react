import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import teamActions from '~redux/Team/actions';
import Header from '~components/Header';

import AddMemberToTeam from './layout';

class AddTeamToMemberContainer extends Component {
  componentDidMount() {
    this.props.getTeams();
  }

  handleSubmit = values => this.props.addMembersToTeam(values);

  render() {
    const { loading, data } = this.props;
    const repos = data.map(team => ({ label: team.name, value: team }));

    return (
      <>
        <Header />
        <div className="row col-10 col-md-6 col-xl-4 m-auto">
          <AddMemberToTeam onSubmit={this.handleSubmit} data={repos} loading={loading} />
        </div>
      </>
    );
  }
}

AddTeamToMemberContainer.propTypes = {
  addMembersToTeam: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.any),
  getTeams: PropTypes.func,
  loading: PropTypes.bool
};

AddTeamToMemberContainer.defaultProps = {
  data: [],
  loading: false
};

const mapStateToProps = state => ({
  loading: state.team.addMemberLoading,
  data: state.team.data
});

const mapDispatchToProps = dispatch => ({
  addMembersToTeam: values => dispatch(teamActions.addMembersToTeam(values)),
  getTeams: () => dispatch(teamActions.getTeams())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTeamToMemberContainer);
