import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import { AgeDisplay } from '../AgeDisplay';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;

  return (
    <Section sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-6 md:gap-y-0')}>
        {/* Profile image container */}
        {!!profileImageSrc && (
          <div className="flex justify-center items-center">
            <div className="relative h-full w-full max-h-[400px] max-w-[400px] md:h-auto md:w-auto overflow-hidden rounded-xl">
              <Image
                alt="about-me-image"
                className="h-auto w-auto object-cover"
                src={profileImageSrc}
                width={400}
                height={400}
              />
            </div>
          </div>
        )}

        {/* Text content */}
        <div className="flex flex-col gap-y-6 justify-center px-4 md:px-0">
          <div className="flex flex-col gap-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{color: 'rgba(249, 115, 22, 1)'}}>
              About Me
            </h2>
            <p className="prose prose-sm text-gray-300 sm:prose-base">{description}</p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3">
            {aboutItems.map(({ label, text, Icon }, idx) => (
              <li className="flex items-start gap-x-2 sm:col-span-2" key={idx}>
                {Icon && <Icon className="h-4 w-4 text-white" />}
                <div className="flex gap-2">
                  <span className="text-sm font-semibold text-white">{label}:</span>
                  {label === "Age" ? (
                    <span className="text-sm text-gray-300">{ <AgeDisplay/>}</span>
                  ) : (
                    <span className="text-sm text-gray-300">{text}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
         
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
