import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators as teamActions } from '../../../redux/Repository/actions';

import styles from './styles.module.scss';
import AddMember from './layout';

import Menu from '~components/Menu';

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
