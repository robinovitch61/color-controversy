import React, { ReactElement } from 'react';

class ErrorBoundary extends React.Component<
  { fallback: ReactElement },
  { error: boolean }
> {
  state = { error: false };

  static getDerivedStateFromError(error: any) {
    return { error };
  }

  componentDidCatch(error: any) {
    // Log or store the error
    console.error(error);
  }

  render() {
    return this.state.error ? this.props.fallback : this.props.children;
  }
}

export default ErrorBoundary;

export const useAsyncError = () => {
  const [_, setError] = React.useState();
  return React.useCallback(
    (e) => {
      setError(() => {
        throw e;
      });
    },
    [setError]
  );
};

// const BrokenComponent = () => {
//   throw new Error('Render error');
// };

// ReactDOM.render(
//   <ErrorBoundary fallback={<p>Something went wrong</p>}>
//     <BrokenComponent />
//   </ErrorBoundary>,
//   document.getElementById('app')
// );
