import React from 'react';
import { storiesOf } from '@storybook/react';

import TableCmp from './../view/TableCmp';
import 'bootstrap/dist/css/bootstrap.min.css';



const headers = [{ header: 'Name', key: 'name' }, { header: 'Age', key: 'age' }, { header: 'Country', key: 'country' }];
const data = [{
    name: 'Karthik',
    age: 34,
    country: 'India'
}, {
    name: 'Visakan',
    age: 1,
    country: 'India'
}];

storiesOf("Table Cmp", module)
    .add('With props', () => <TableCmp headers={headers} data={data} />)
    .add('Without props', () => <TableCmp />)
    .add('Without data props', () => <TableCmp headers={headers} />)
    .add('Without header props', () => <TableCmp data={data} />);
