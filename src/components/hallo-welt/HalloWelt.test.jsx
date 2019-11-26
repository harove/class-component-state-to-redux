import React from 'react';
import ReactDOM from 'react-dom';
import HalloWelt from './HalloWelt';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HalloWelt />, div);
  ReactDOM.unmountComponentAtNode(div);
});
