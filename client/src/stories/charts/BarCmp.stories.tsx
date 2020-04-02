import React from 'react';
import { storiesOf } from '@storybook/react';
import BarCmp from './../../view/charts/BarCmp';
const data = [0,1, 2, 3, 4];
const label = ['Zero','One', 'Two', 'Three', 'Four'];

const mData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mLabel = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven','Eight','Nine', 'Ten'];


storiesOf('Bar Chart', module)
    .add('Basic', () => <BarCmp data={data} label={label} />)    
    .add('More Data', () => <BarCmp data={mData} label={mLabel} />)
    .add('No Data', () => <BarCmp />);