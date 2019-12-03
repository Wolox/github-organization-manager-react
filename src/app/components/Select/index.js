import React from 'react';
import PropTypes from 'prop-types';
import AsyncPaginate from 'react-select-async-paginate';
import { t } from 'i18next';

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

const Select = ({ loadOptions, onChange, value }) => (
  <AsyncPaginate
    styles={customStyles}
    loadOptions={loadOptions}
    className="select"
    debounceTimeout={300}
    isClearable
    value={value}
    placeholder={t('Select:placeholder')}
    onChange={onChange}
    additional={{
      page: 1
    }}
  />
);

Select.propTypes = {
  loadOptions: PropTypes.func,
  value: PropTypes.objectOf(PropTypes.any),
  onChange: PropTypes.func
};

export default Select;
