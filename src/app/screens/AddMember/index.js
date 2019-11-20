import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import repositoryActions from '~redux/Repository/actions';
import Header from '~components/Header';

import AddMember from './layout';

class AddMemberContainer extends Component {
  handleSubmit = values => this.props.addMember(values);

  render() {
    const { loading } = this.props;
    return (
      <>
        <Header />
        <div className="row col-10 col-md-6 col-xl-4 m-auto">
          <AddMember onSubmit={this.handleSubmit} loading={loading} />
        </div>
      </>
    );
  }
}

AddMemberContainer.propTypes = {
  addMember: PropTypes.func,
  loading: PropTypes.bool
};

AddMemberContainer.defaultProps = {
  loading: false
};

const mapStateToProps = state => ({
  loading: state.repository.addMemberLoading
});

const mapDispatchToProps = dispatch => ({
  addMember: values => dispatch(repositoryActions.addMemberToOrg(values))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMemberContainer);
