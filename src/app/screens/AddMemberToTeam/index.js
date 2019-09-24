import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import teamActions from '../../../redux/Team/actions';

import AddTeamToMember from './layout';
import { TECHNOLOGIES } from './constants';

import Header from '~components/Header';

class AddTeamToMemberContainer extends Component {
  componentDidMount() {
    this.props.getTeams();
  }

  handleSubmit = values => {
    this.props.addMembersToTeam(values);
  };

  render() {
    const { memberAdded, loading, data } = this.props;
    return (
      <>
        <Header />
        <div className="main main-raised">
          <div className="profile-content">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ml-auto mr-auto">
                  <AddTeamToMember
                    onSubmit={this.handleSubmit}
                    memberAdded={memberAdded}
                    data={data.map(team => ({ label: team.name, value: team }))}
                    loading={loading}
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

AddTeamToMemberContainer.propTypes = {
  addMembersToTeam: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.any),
  getTeams: PropTypes.func,
  loading: PropTypes.bool,
  memberAdded: PropTypes.bool
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
  getTeams: () => dispatch(teamActions.getTeams())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTeamToMemberContainer);
