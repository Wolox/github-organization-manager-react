import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '~components/Header';
import { actionCreators as teamActions } from '~redux/Repository/actions';

import AddMember from './layout';

class AddMemberContainer extends Component {
  handleSubmit = values => {
    this.props.addMember(values);
  };

  render() {
    return (
      <>
        <Header />
        <div className="main main-raised">
          <div className="container">
            <div className="row">
              <div className="col-md-6 ml-auto mr-auto">
                <AddMember
                  onSubmit={this.handleSubmit}
                  memberAdded={this.props.memberAdded}
                  loading={this.props.loading}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

AddMemberContainer.propTypes = {
  addMember: PropTypes.func,
  loading: PropTypes.bool,
  memberAdded: PropTypes.bool
};

AddMemberContainer.defaultProps = {
  loading: false,
  memberAdded: false
};

const mapStateToProps = state => ({
  // obtener loading, lo cambia el action de registration
  memberAdded: state.repository.memberAdded,
  loading: state.repository.loading
});

const mapDispatchToProps = dispatch => ({
  addMember: values => dispatch(teamActions.addMemberToOrg(values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMemberContainer);
