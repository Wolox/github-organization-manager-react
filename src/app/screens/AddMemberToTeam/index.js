import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators as teamActions } from '../../../redux/Team/actions';

import AddTeamToMember from './layout';
import { TECHNOLOGIES } from './constants';

class AddTeamToMemberContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    teamActions.getTeams().then(response => {
      this.setState({ data: response.teams });
    });
  }

  handleSubmit = values => {
    console.log(values);
    this.props.addMembersToTeam(values);
  };

  render() {
    return (
      <AddTeamToMember
        onSubmit={this.handleSubmit}
        memberAdded={this.props.memberAdded}
        data={this.state.data.map(team => ({ label: team.name, value: team }))}
      />
    );
  }
}

AddTeamToMemberContainer.propTypes = {
  addMembersToTeam: PropTypes.func.isRequired,
  // isError: PropTypes.bool,
  memberAdded: PropTypes.bool
};

AddTeamToMemberContainer.defaultProps = {
  // isError: false,
  memberAdded: false
};

const mapStateToProps = state => ({
  // obtener loading, lo cambia el action de registration
  // isError: state.team.isError,
  memberAdded: state.team.memberAdded
});

const mapDispatchToProps = dispatch => ({
  // funciones que llaman acciones
  addMembersToTeam: values => {
    console.log('aaaaa', values);
    const techs = [];
    Object.keys(TECHNOLOGIES).forEach(tech => {
      values[tech] && techs.push(tech);
    });
    /* eslint-disable no-param-reassign */
    values = { ...values, techs };
    return dispatch(teamActions.addMembersToTeam(values));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTeamToMemberContainer);
