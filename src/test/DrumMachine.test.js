import React from 'react';
import ReactDOM from 'react-dom';
import ReactUnit from 'react-unit';
import DrumMachine from '../DrumMachine';

describe('DrumMachine', () => {
  it('should render without any issues', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DrumMachine />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
