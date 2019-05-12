import Loadable from "react-loadable";

function AsyncComponentFactory(componentImportCallback) {
  return Loadable({
    loader: componentImportCallback,
    loading: ({ isLoading, error }) =>
      (isLoading && 'Loading...') ||
      (error && 'Component load failed') ||
      null
  });
}

export default AsyncComponentFactory;
