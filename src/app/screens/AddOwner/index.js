import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import { actionCreators as teamActions } from '../../../redux/Team/actions';

// import AddTeamToMember from './layout';
// import { TECHNOLOGIES } from './constants';

class AddOwnerToRepoContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {
        data: []
      };
    }

  componentDidMount() {
    // teamActions.getTeams().then(response => {
    //     this.setState({data: response.teams})
    // })
  };

  handleSubmit = values => {
    console.log(values);
    this.props.addOwnersToRepo(values);
  };

  render() {
    return ''; // TODO Remove this
    // return <AddTeamToMember onSubmit={this.handleSubmit} ownerAdded={this.props.ownerAdded} data={this.state.data.map(team => ({label: team.name, value: team}))} />;
  }
}

AddOwnerToRepoContainer.propTypes = {
  addOwnersToRepo: PropTypes.func.isRequired,
  // isError: PropTypes.bool,
  ownerAdded: PropTypes.bool
};

AddOwnerToRepoContainer.defaultProps = {
  // isError: false,
  ownerAdded: false
};

const mapStateToProps = state => ({
  // obtener loading, lo cambia el action de registration
  // isError: state.team.isError,
  ownerAdded: state.team.ownerAdded
});

const mapDispatchToProps = dispatch => ({
  // funciones que llaman acciones
  addOwnersToRepo: values => {
    // console.log('aaaaa', values);
    // const techs = [];
    // Object.keys(TECHNOLOGIES).forEach(tech => {
    //   values[tech] && techs.push(tech);
    // });
    /* eslint-disable no-param-reassign */
    // values = { ...values, techs };
    return ''; // TODO Remove this
    // return dispatch(teamActions.addOwnersToRepo(values));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddOwnerToRepoContainer);
