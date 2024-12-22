// import {DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/outline';

import {FC, memo, useEffect, useRef} from 'react';

// import {contact, SectionId} from '../../../data/data';
import {SectionId} from '../../../data/data';
// import {ContactType, ContactValue} from '../../../data/dataDef';
// import FacebookIcon from '../../Icon/FacebookIcon';
// import GithubIcon from '../../Icon/GithubIcon';
// import InstagramIcon from '../../Icon/InstagramIcon';
// import LinkedInIcon from '../../Icon/LinkedInIcon';
// import TwitterIcon from '../../Icon/TwitterIcon';
import Section from '../../Layout/Section';
// import ContactForm from './ContactForm';
import DotGrid from './DotGrid';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import newStyled from '@emotion/styled';
import Card from './Card';


// const ContactValueMap: Record<ContactType, ContactValue> = {
//   [ContactType.Email]: {Icon: EnvelopeIcon, srLabel: 'Email'},
//   [ContactType.Phone]: {Icon: DevicePhoneMobileIcon, srLabel: 'Phone'},
//   [ContactType.Location]: {Icon: MapPinIcon, srLabel: 'Location'},
//   [ContactType.Github]: {Icon: GithubIcon, srLabel: 'Github'},
//   [ContactType.LinkedIn]: {Icon: LinkedInIcon, srLabel: 'LinkedIn'},
//   [ContactType.Facebook]: {Icon: FacebookIcon, srLabel: 'Facebook'},
//   [ContactType.Twitter]: {Icon: TwitterIcon, srLabel: 'Twitter'},
//   [ContactType.Instagram]: {Icon: InstagramIcon, srLabel: 'Instagram'},
// };

const ContactNew: FC = memo(() => {

  
const cardRef = useRef<HTMLDivElement>(null);


  const RotationWrapper = newStyled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
`;
const CardWrapper = newStyled(motion.div)`
  border-radius: 20px;
  backdrop-filter: blur(3px) brightness(120%);
`;


const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);

// State to track mouse movement
useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => window.removeEventListener("mousemove", handleMouseMove);
}, [mouseX, mouseY]);

const dampen = 20; // Control sensitivity for smoother motion

// Calculate 3D transforms with useTransform
const rotateX = useTransform(mouseY, (value) => {
  const rect = cardRef.current?.getBoundingClientRect();
  if (!rect) return 0;
  const newRotateX = (value - rect.top - rect.height / 2) / dampen;
  return -newRotateX;
});

const rotateY = useTransform(mouseX, (value) => {
  
  
  const rect = cardRef.current?.getBoundingClientRect();
  console.log("rect :",rect,"mouseX:",mouseX ,value);
  if (!rect) return 0;
  const newRotateY = (value - rect.left - rect.width / 2) / dampen;
  return newRotateY;
});
  // const {headerText, description, items} = contact;
  return (
    <Section className="bg-black-800" sectionId={SectionId.Contact}>
             
             <RotationWrapper  style={{
          rotateX: rotateX.toString() + "deg",
          rotateY: rotateY.toString() + "deg",
        }}>
            <DotGrid /> 
            <CardWrapper ref={cardRef} >
                <Card  />
            </CardWrapper>
        </RotationWrapper>
      {/* <div className="flex flex-col gap-y-6 ">
        <div className="flex flex-col gap-6 md:flex-row md:items-center ">
          <EnvelopeIcon className="hidden h-16 w-16 text-white md:block" />
          <h2 className="text-2xl font-bold text-white">{headerText}</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="order-2 col-span-1 md:order-1  ">
            <ContactForm />
          </div>
          <div className="order-1 col-span-1 flex flex-col gap-y-4 md:order-2">
            <p className="prose leading-6 text-neutral-300">{description}</p>
            <dl className="flex flex-col space-y-4 text-base text-neutral-500 sm:space-y-2">
              {items.map(({type, text, href}) => {
                const {Icon, srLabel} = ContactValueMap[type];
                return (
                  <div key={srLabel}>
                    <dt className="sr-only">{srLabel}</dt>
                    <dd className="flex items-center">
                      <a
                        className={classNames(
                          '-m-2 flex rounded-md p-2 text-neutral-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500',
                          {'hover:text-white': href},
                        )}
                        href={href}
                        target="_blank">
                        <Icon
                          aria-hidden="true"
                          className="h-4 w-4 flex-shrink-0 text-neutral-100 sm:h-5 sm:w-5"
                          id="social-links"
                        />
                        <span className="ml-3 text-sm sm:text-base" id="social-links">
                          {text}
                        </span>
                      </a>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div> */}
    </Section>
  );
});

ContactNew.displayName = 'About';
export default ContactNew;
