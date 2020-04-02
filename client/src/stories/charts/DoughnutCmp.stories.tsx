import React from 'react';
import { storiesOf } from '@storybook/react';
import DoughnutCmp from './../../view/charts/DoughnutCmp';
const data = [1, 2, 3, 4];
const label = ['One', 'Two', 'Three', 'Four'];

const mData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mLabel = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven','Eight','Nine', 'Ten'];


storiesOf('Doughnut chart', module)
    .add('Basic', () => <DoughnutCmp data={data} label={label} />)    
    .add('More Data', () => <DoughnutCmp data={mData} label={mLabel} />)
    .add('No Data', () => <DoughnutCmp />);