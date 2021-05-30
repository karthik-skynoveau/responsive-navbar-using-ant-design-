import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
 
import { Input, Space } from 'antd';

function Search() {

    const { Search } = Input;
const onSearch = value => console.log(value);
    return (
        <div>
  <Space direction="vertical">
    
  <Search placeholder="search food" onSearch={onSearch}  id="searchfood" />
     
  </Space>

        </div>
    )
}

export default Search
