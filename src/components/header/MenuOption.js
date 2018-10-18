import React from 'react';
import { Link } from "react-router-dom";

export default ({text, route}) => (
  <div className="items-header-settings">
    <Link className="items-text-header-active opacity" to={`/${route}`}>{text}</Link>
  </div>
)
