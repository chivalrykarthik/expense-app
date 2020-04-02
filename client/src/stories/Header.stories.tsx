import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from '../view/Header';

storiesOf('Header', module)
    .add('Basic', () => <Header />)