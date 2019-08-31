import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Menu from '~components/Menu';

import { actionCreators as repositoryActions } from '../../../redux/Repository/actions';

import AddOwner from './layout';
import styles from './styles.module.scss';

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
    console.log(values);
    this.props.addOwnersToRepo(values);
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
  // isError: PropTypes.bool,
  loading: PropTypes.bool,
  ownerAdded: PropTypes.bool
};

AddOwnerToRepoContainer.defaultProps = {
  // isError: false,
  ownerAdded: false,
  loading: false
};

const mapStateToProps = state => ({
  // obtener loading, lo cambia el action de registration
  // isError: state.repository.isError,
  ownerAdded: state.repository.ownerAdded,
  loading: state.repository.loading
});

const mapDispatchToProps = dispatch => ({
  // funciones que llaman acciones
  addOwnersToRepo: values => {
    console.log('aaaaa', values);
    // const techs = [];
    // Object.keys(TECHNOLOGIES).forEach(tech => {
    //   values[tech] && techs.push(tech);
    // });
    /* eslint-disable no-param-reassign */
    // values = { ...values, techs };
    return dispatch(repositoryActions.addOwnerToRepository(values));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddOwnerToRepoContainer);
