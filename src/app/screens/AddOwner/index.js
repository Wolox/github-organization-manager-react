import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import repositoryActions from '../../../redux/Repository/actions';

import AddOwner from './layout';

import Header from '~components/Header';

class AddOwnerToRepoContainer extends Component {
  componentDidMount() {
    this.props.getRepositories();
  }

  handleSubmit = values => {
    this.props.addOwnersToRepo(values);
  };

  render() {
    const { data } = this.props;
    const repos = data.map(repository => ({ label: repository, value: repository }));
    return (
      <>
        <Header />
        <div className="main main-raised">
          <div className="profile-content">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ml-auto mr-auto">
                  <AddOwner
                    onSubmit={this.handleSubmit}
                    ownerAdded={this.props.ownerAdded}
                    data={repos}
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

AddOwnerToRepoContainer.propTypes = {
  addOwnersToRepo: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.string),
  getRepositories: PropTypes.func,
  loading: PropTypes.bool,
  ownerAdded: PropTypes.bool
};

AddOwnerToRepoContainer.defaultProps = {
  data: [],
  loading: false,
  ownerAdded: false
};

const mapStateToProps = state => ({
  // obtener loading, lo cambia el action de registration
  ownerAdded: state.repository.ownerAdded,
  loading: state.repository.loading,
  data: state.repository.data
});

const mapDispatchToProps = dispatch => ({
  getRepositories: () => {
    dispatch(repositoryActions.getRepositories());
  },
  addOwnersToRepo: values => dispatch(repositoryActions.addOwnerToRepository(values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddOwnerToRepoContainer);
