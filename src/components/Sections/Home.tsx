import { ArrowDownTrayIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import { FC, memo, useEffect, useState } from 'react';

import { homeData, SectionId } from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Home: FC = memo(() => {
  const { imageSrc, name, description, actions } = homeData;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure rendering happens only on the client-side
  }, []);

  const handleDownload = () => {
    const resumeUrl = '/Ritik-Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Ritik-Resume.pdf';
    link.click();
  };

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Section noPadding sectionId={SectionId.Home}>
      <div className="relative flex flex-col lg:flex-row h-screen  items-center justify-center px-4 lg:px-16">
        {/* Left Section: Text & Buttons */}
        {isClient && (
          <div className="z-10 max-w-[700px] flex flex-col justify-center gap-y-6 text-left  p-6 rounded-lg shadow-lg backdrop-blur-sm w-full lg:w-1/2">
            <h1 className="text-[clamp(2rem,5vw,6rem)] lg:leading-[1.6] font-bold text-white sm:text-5xl lg:text-7xl infinite-typing">
              {name}
            </h1>
            <p className="text-sm sm:text-base text-gray-200">{description}</p>
            <div className="flex gap-x-4 text-neutral-100">
              <Socials />
            </div>
            <div className="flex gap-x-4">
              <button
                className={classNames(
                  'flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base border-orange-500 ring-orange-500',
                )}
                onClick={handleDownload}
              >
                Resume
                <ArrowDownTrayIcon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
              </button>
              {actions.map(({ href, text, primary, Icon }) => (
                <a
                  className={classNames(
                    'flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                    primary ? 'border-orange-500 ring-orange-500' : 'border-white ring-white',
                  )}
                  href={href}
                  key={text}
                >
                  {text}
                  {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Right Section: Image */}
        {isClient && (
          <div className="w-full lg:w-1/2 flex items-center justify-center mt-4 lg:mt-0">
            <Image
              alt={`${name}-image`}
              className="object-contain w-3/4 h-auto sm:w-2/3 lg:w-full lg:h-[550px]"
              placeholder="blur"
              priority
              src={imageSrc}
            />
          </div>
        )}

        {/* Scroll Down Icon */}
       <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <button
            onClick={() => handleScroll('about')}
            className="rounded-full bg-white p-2 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-3"
          >
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </button>
        </div>
      </div>

      {/* Typing Animation */}
      <style jsx>{`
        @keyframes typing {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes blink {
          0%,
          100% {
            border-color: transparent;
          }
          50% {
            border-color: white;
          }
        }

        /* Typing effect with infinite loop */
        .infinite-typing {
          overflow: hidden;
          white-space: nowrap;
          border-right: 4px solid white;
          animation: typing 4s steps(${name.length}) 1s infinite, blink 1s step-end infinite;
        }
      `}</style>
    </Section>
  );
});

Home.displayName = 'Home';
export default Home;
