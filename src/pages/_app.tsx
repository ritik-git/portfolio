import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type { AppProps } from 'next/app';
import { useTransition, animated } from '@react-spring/web';
import { useRouter } from 'next/router';
import { memo } from 'react';

const MyApp = memo(({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();

  const transitions = useTransition(router.pathname, {
    from: { opacity: 0, transform: 'translateY(10%)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(-10%)' },
  });

  return (
    <>
      {transitions((style, pathname) => (
        <animated.div
          key={pathname}
          style={{
            ...style,
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        >
          <Component {...pageProps} />
        </animated.div>
      ))}
    </>
  );
});

export default MyApp;
