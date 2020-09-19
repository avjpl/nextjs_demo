import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

import '../../web/css/index.css';

function MyApp({ Component, pageProps, router }) {
  const { route } = router;

  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={route} />
    </AnimatePresence>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
  router: PropTypes.object,
};

export default MyApp;
