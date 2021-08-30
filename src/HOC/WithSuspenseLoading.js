import React, { Suspense } from 'react';

import Preloader from '../components/common/Preloader/Preloader';

const WithSuspenseLoading = (Component) => {
  return (props) => {
    return (
      <Suspense fallback={<Preloader />}>
        <Component {...props} />
      </Suspense>
    )
  }
}

export default WithSuspenseLoading;