import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Menu from '~components/Menu';

import { actionCreators as teamActions } from '../../../redux/Team/actions';

import AddTeamToMember from './layout';
import { TECHNOLOGIES } from './constants';
import styles from './styles.module.scss';

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

  handleOnChange = value => console.log(value);

  handleSubmit = values => {
    console.log(values);
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
                    handleOnChange={this.handleOnChange}
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
  // isError: PropTypes.bool,
  loading: PropTypes.bool,
  memberAdded: PropTypes.bool
};

AddTeamToMemberContainer.defaultProps = {
  // isError: false,
  memberAdded: false,
  loading: false
};

const mapStateToProps = state => ({
  // obtener loading, lo cambia el action de registration
  // isError: state.team.isError,
  memberAdded: state.team.memberAdded,
  loading: state.team.loading
});

const mapDispatchToProps = dispatch => ({
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
