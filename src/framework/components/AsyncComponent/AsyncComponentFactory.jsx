import React from 'react';
import Loadable from "react-loadable";

function AsyncComponentFactory(componentImportCallback) {
  return Loadable({
    loader: componentImportCallback,
    loading: ({ isLoading, error }) =>
      (isLoading && <span>Loading...</span>) ||
      (error && <span>Component load failed</span>) ||
      null
  });
}

export default AsyncComponentFactory;
