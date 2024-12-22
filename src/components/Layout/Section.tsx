import classNames from 'classnames';
import { FC, memo, PropsWithChildren } from 'react';
import { useInView, animated } from '@react-spring/web';

import { SectionId } from '../../data/data';


const Section: FC<PropsWithChildren<{ sectionId: SectionId; sectionTitle?: string; noPadding?: boolean; className?: string }>> = memo(({ children, sectionId, noPadding = false, className }) => {
  // Detect if the section is in view
  const [ref, springs] = useInView(
    () => ({
      from: { opacity: 0, y: 100 },
      to: { opacity: 1, y: 0 },
    }),
    {
      rootMargin: '-40% 0%', // Trigger animation when 40% of the element is in view
    }
  );

  return (
    <section className={classNames(className, { 'px-4 py-16 md:py-24 lg:px-8': !noPadding })} id={sectionId}>
      <div className={classNames({ 'mx-auto max-w-screen-lg': !noPadding })}>
        {/* Apply the animated styles from react-spring */}
        <animated.div ref={ref} style={springs}>
          {children}
        </animated.div>
      </div>
    </section>
  );
});

Section.displayName = 'Section';
export default Section;
