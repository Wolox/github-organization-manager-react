import React from 'react';
import PropTypes from 'prop-types';
import AsyncPaginate from 'react-select-async-paginate';

const customStyles = {
  control: provided => ({
    ...provided,
    borderTop: 'none',
    borderRight: 'none',
    borderLeft: 'none',
    borderRadius: '0',
    boxShadow: 'none'
  })
};

const Select = ({ loadOptions }) => (
  <AsyncPaginate
    styles={customStyles}
    loadOptions={loadOptions}
    className="select"
    debounceTimeout={300}
    isClearable
    additional={{
      page: 1
    }}
  />
);

Select.propTypes = {
  loadOptions: PropTypes.func
};

export default Select;
