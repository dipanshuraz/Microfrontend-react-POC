// import React, { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

// const AuthApp = React.lazy(() => import("auth/App"));

// export default () => {
//   const history = useHistory();

//   useEffect(() => {
//     const { onParentNavigate } = mount(ref.current, {
//       onNavigate: ({ pathname: nextPathname }) => {
//         const { pathname } = history.location;

//         if (pathname !== nextPathname) {
//           history.push(nextPathname);
//         }
//       },
//     });

//     history.listen(onParentNavigate);
//   }, []);

//   return <AuthApp />;
// };




import { mount } from 'exchange/App';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
