import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import teamActions from '~redux/Team/actions';
import Header from '~components/Header';

import AddTeamToMember from './layout';
import { TECHNOLOGIES } from './constants';

class AddTeamToMemberContainer extends Component {
  componentDidMount() {
    this.props.getTeams();
  }

  handleSubmit = values => {
    this.props.addMembersToTeam(values);
  };

  componentWillUnmount() {
    this.props.resetStateMemberAdded();
  }

  render() {
    const { memberAdded, loading, data } = this.props;
    const repos = data.map(team => ({ label: team.name, value: team }));

    return (
      <>
        <Header />
        <div className="main main-raised">
          <div className="row">
            <div className="col-10 col-md-6 col-xl-4 m-auto">
              <AddTeamToMember
                onSubmit={this.handleSubmit}
                memberAdded={memberAdded}
                data={repos}
                loading={loading}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

AddTeamToMemberContainer.propTypes = {
  addMembersToTeam: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.any),
  getTeams: PropTypes.func,
  loading: PropTypes.bool,
  memberAdded: PropTypes.bool,
  resetStateMemberAdded: PropTypes.func
};

AddTeamToMemberContainer.defaultProps = {
  data: [],
  loading: false,
  memberAdded: false
};

const mapStateToProps = state => ({
  memberAdded: state.team.memberAdded,
  loading: state.team.addMemberLoading,
  data: state.team.data
});

const mapDispatchToProps = dispatch => ({
  addMembersToTeam: values => {
    const techs = [];
    Object.keys(TECHNOLOGIES).forEach(tech => {
      if (values[tech]) {
        techs.push(tech);
      }
    });
    return dispatch(teamActions.addMembersToTeam({ ...values, techs }));
  },
  getTeams: () => dispatch(teamActions.getTeams()),
  resetStateMemberAdded: () => dispatch(teamActions.memberAdded(false))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTeamToMemberContainer);
