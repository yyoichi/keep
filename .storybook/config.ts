import { configure } from '@storybook/react';
import '../src/index.css';

const req = require.context('../src', true, /\.stories\.tsx$/);

const loadStories = () => {
  req.keys().forEach(req);
};

configure(loadStories, module);
