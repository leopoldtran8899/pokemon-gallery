import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class SelectInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchType: '',
      searchText: '',
      errorText: '',
    };
  }
  static defaultProps = {
    inputPlaceholder: 'Enter text...',
    options: [],
    suggestions: null,
  };
  componentDidMount = () => {
    this.setState((state, props) => ({
      ...state,
      searchType: props.options.length > 0 ? props.options[0].type : 'text',
    }));
  };

  handleChangeSelect = e => {
    const type = this.props.options[e.target.value].type;
    this.setState(state => ({
      ...state,
      searchType: type,
    }));
  };
  handleOnChangeInput = e => {
    e.preventDefault();
    if(this.state.searchType === 'number' && !/^[0-9]+$/.test(e.target.value) && e.target.value !== '') {
      this.setState(state => ({
        ...state,
        searchText: '',
        errorText:'Invalid Input'
      }));
    } else {
      this.setState(state => ({
        ...state,
        searchText: e.target.value,
        errorText:''
      }));
    }
  };
  render() {
    return (
      <div className='relative flex w-max focus-within:outline focus-within:outline-1 focus-within:outline-teal-500 group'>
        {' '}
        {/* Search box */}
        <input
          id='search-box'
          className='flex-grow px-2 py-1 bg-black-800 focus:outline-none peer'
          onChange={this.handleOnChangeInput}
          value={this.state.searchText}
          required
        />
        <label
          htmlFor='search-box'
          className='absolute text-sm inset-y-1 left-2 peer-focus:-translate-y-6 no peer-valid:-translate-y-6 peer-focus:after:content-["*"]'
        >
          {this.props.inputPlaceholder}
        </label>
        {this.props.options.length > 0 ? (
          <div className=''>
            <label className='sr-only'>Search by</label>
            <select
              className='h-full py-0 pl-2 text-right bg-black-800'
              onChange={this.handleChangeSelect}
            >
              {this.props.options.map((option, i) => (
                <option key={i} className='hover:bg-black-500' value={i}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        ) : null}
        <div className='absolute max-w-screen-sm text-sm text-red-500 top-8'>{this.state.errorText}</div>
      </div>
    );
  }
}

export default SelectInput;
