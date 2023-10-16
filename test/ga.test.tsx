import * as React from 'react';
import * as ReactDOM from 'react-dom';

function MyApp() {
  return <></>;
}

// TODO: write a test
describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MyApp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
