import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import teamActions from '~redux/Team/actions';
import Header from '~components/Header';
import SimpleSpinner from '~components/SimpleSpinner';

import styles from './styles.module.scss';

class TeamsContainer extends Component {
  componentDidMount() {
    this.props.getTeams();
  }

  render() {
    const { data, loading } = this.props;
    return (
      <>
        <Header />
        <div className={`${styles.content} col-10 card card-body`}>
          <div className={styles.header}>
            <div className={`${styles.cell} title`}>Nombre</div>
            <div className={`${styles.cell} title`}>Descripción</div>
            <div className={`${styles.cell} title`}>Privacidad</div>
          </div>
          <div className={styles.body}>
            {loading ? (
              <SimpleSpinner center classNameContainer={styles.spinner} />
            ) : (
              data.map(team => (
                <div className={styles.row} key={team.id}>
                  <div className={styles.cell}>{team.name}</div>
                  <div className={styles.cell}>{team.description}</div>
                  <div className={styles.cell}>{team.privacy}</div>
                </div>
              ))
            )}
          </div>
        </div>
      </>
    );
  }
}

TeamsContainer.defaultProps = {
  data: [],
  loading: false
};

TeamsContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
  getTeams: PropTypes.func,
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  data: state.team.data,
  loading: state.team.dataLoading
});

const mapDispatchToProps = dispatch => ({
  getTeams: () => dispatch(teamActions.getTeams())
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamsContainer);
