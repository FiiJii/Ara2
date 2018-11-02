import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import '../../styles/components/loader.css';

const Loader = (props) => (
  <div className="loader">
    <CircularProgress size={50} />
  </div>
);

export default Loader;
