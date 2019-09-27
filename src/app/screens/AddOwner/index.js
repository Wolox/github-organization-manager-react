import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '~components/Header';
import { actionCreators as repositoryActions } from '~redux/Repository/actions';

import AddOwner from './layout';

class AddOwnerToRepoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    repositoryActions.getRepositories().then(response => {
      this.setState({ data: response });
    });
  }

  handleSubmit = values => {
    this.props.addOwnersToRepo(values);
  };

  render() {
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
                    data={this.state.data.map(repository => ({ label: repository, value: repository }))}
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
  loading: PropTypes.bool,
  ownerAdded: PropTypes.bool
};

AddOwnerToRepoContainer.defaultProps = {
  loading: false,
  ownerAdded: false
};

const mapStateToProps = state => ({
  // obtener loading, lo cambia el action de registration
  ownerAdded: state.repository.ownerAdded,
  loading: state.repository.loading
});

const mapDispatchToProps = dispatch => ({
  addOwnersToRepo: values => dispatch(repositoryActions.addOwnerToRepository(values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddOwnerToRepoContainer);
