import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import repositoryActions from '~redux/Repository/actions';
import Header from '~components/Header';

import AddMember from './layout';

class AddMemberContainer extends Component {
  handleSubmit = values => {
    this.props.addMember(values);
  };

  componentWillUnmount() {
    this.props.resetStateMemberAdded();
  }

  render() {
    const { memberAdded, loading } = this.props;
    return (
      <>
        <Header />
        <div className="main main-raised">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-10 ml-auto mr-auto">
                <AddMember onSubmit={this.handleSubmit} memberAdded={memberAdded} loading={loading} />
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
  memberAdded: PropTypes.bool,
  resetStateMemberAdded: PropTypes.func
};

AddMemberContainer.defaultProps = {
  loading: false,
  memberAdded: false
};

const mapStateToProps = state => ({
  memberAdded: state.repository.memberAdded,
  loading: state.repository.addMemberLoading
});

const mapDispatchToProps = dispatch => ({
  addMember: values => dispatch(repositoryActions.addMemberToOrg(values)),
  resetStateMemberAdded: () => dispatch(repositoryActions.memberAdded(false))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMemberContainer);
