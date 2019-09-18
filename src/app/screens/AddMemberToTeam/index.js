import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators as teamActions } from '../../../redux/Team/actions';

import styles from './styles.module.scss';
import AddTeamToMember from './layout';
import { TECHNOLOGIES } from './constants';

import Menu from '~components/Menu';

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
    this.props.addMembersToTeam(values);
  };

  render() {
    return (
      <>
        <Menu />
        <div className={`page-header ${styles.pageHeader}`} data-parallax="true" />
        <div className="main main-raised">
          <div className="profile-content">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ml-auto mr-auto">
                  <AddTeamToMember
                    onSubmit={this.handleSubmit}
                    memberAdded={this.props.memberAdded}
                    data={this.state.data.map(team => ({ label: team.name, value: team }))}
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

AddTeamToMemberContainer.propTypes = {
  addMembersToTeam: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  memberAdded: PropTypes.bool
};

AddTeamToMemberContainer.defaultProps = {
  loading: false,
  memberAdded: false
};

const mapStateToProps = state => ({
  // obtener loading, lo cambia el action de registration
  memberAdded: state.team.memberAdded,
  loading: state.team.loading
});

const mapDispatchToProps = dispatch => ({
  addMembersToTeam: values => {
    const techs = [];
    Object.keys(TECHNOLOGIES).forEach(tech => {
      if (values[tech]) {
        techs.push(tech);
      }
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
