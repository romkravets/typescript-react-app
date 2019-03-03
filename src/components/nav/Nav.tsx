import { SearchForm } from '../searchForm';
import React from 'react';

import './Nav.scss';

export const Nav: React.FunctionComponent<any> = ({onSearch}) => {
  return <nav className={'page-nav'}>
    <div className='page-nav__container'>
      <SearchForm className={'page-nav__search-form'} onSubmit={onSearch}/>
    </div>
  </nav>
};
