import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Menu from '~components/Menu';

import { actionCreators as teamActions } from '../../../redux/Repository/actions';

import AddMember from './layout';
import styles from './styles.module.scss';

class AddMemberContainer extends Component {
  handleSubmit = values => {
    this.props.addMember(values);
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
                  <AddMember
                    onSubmit={this.handleSubmit}
                    memberAdded={this.props.memberAdded}
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

AddMemberContainer.propTypes = {
  addMember: PropTypes.func,
  isError: PropTypes.bool,
  loading: PropTypes.bool,
  memberAdded: PropTypes.bool
};

AddMemberContainer.defaultProps = {
  memberAdded: false,
  loading: false
};

const mapStateToProps = state => ({
  // obtener loading, lo cambia el action de registration
  // isError: state.isError
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
