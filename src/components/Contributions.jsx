import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInBottomMotionVariant, fadeInLeftMotionVariant, fadeInTopMotionVariant } from '@/lib/motionVariants';

import { PiLinkBold } from 'react-icons/pi';

import blueprintPic from '@/images/pics/blueprint.jpg'

// TODO: make each contribution animate with a delay
// See: https://www.framer.com/motion/animation/#%23dynamic-variants
function Contribution({ ctr, idx, props }) {
    return (
      <motion.div
        className="group relative rounded-2xl dark:border-zinc-700/40 lg:w-72 w-full lg:aspect-[2/3] aspect-square overflow-hidden flex-none bg-zinc-950 shadow-2xl transition border-pink-500 hover:border hover:shadow-pink-500/20"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        custom={idx}
        variants={fadeInBottomMotionVariant}
      >
      <a
        href={ctr.link}
        target='_blank'
        rel="noreferrer"
      >
        <Image
          alt=""
          src={ctr.pic ?? blueprintPic}
          className="absolute h-full w-full transition-opacity group-hover:opacity-40"
        />

        <div className="absolute h-full w-full p-4 sm:p-6 lg:p-8">
          <p className="text-sm font-medium uppercase tracking-widest text-pink-500 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">{ctr.role}</p>

          <p className="text-xl font-bold text-white sm:text-2xl drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)]">{ctr.title}</p>

          <div className='absolute bottom-6 flex gap-2 flex-wrap group-hover:opacity-0'>
            {ctr.skills.map((skill) => (
              <div
              key={skill}
              className="relative grid select-none items-center whitespace-nowrap rounded-full bg-gradient-to-tr shadow-sm shadow-zinc-600/50 from-zinc-900 to-zinc-700 px-2 text-xs text-zinc-100 tracking-tight">
                {skill}
              </div>
            ))}
          </div>

          <div className="absolute bottom-6">
            <div
              className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
            >
              <p className="text-sm text-white">
                {ctr.description}
              </p>
              <div className='text-xs font-semibold my-1'>
                <PiLinkBold className='mt-1 mx-2 fill-zinc-100 flex-none inline-block ms-0 ml-1'/>
                <p className='text-zinc-100 inline-block'>{ctr.domain}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
      </motion.div>
    )
}

export function Contributions({ ctrs = [], props }) {
    return (
        <div {...props} className="mt-12" >
            <motion.div
              className='mb-12'
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInTopMotionVariant}
            >
            <h1 className="text-5xl font-semibold text-zinc-700 dark:text-zinc-200 mb-2">
              Other Projects I Worked on
            </h1>
            <p className="text-base text-zinc-600 dark:text-zinc-300 px-2">
              I love research and over the years I&apos;ve worked on a many projects including these
              I’ve worked on a lot of personal projects over the years, these are some of the ones that I&apos;m most proud of.
            </p>
            </motion.div>
            <div className="flex flex-initial flex-wrap justify-evenly gap-6 px-12">
            {Object.values(ctrs).map((ctr, idx) => 
                <Contribution ctr={ctr} key={ctr.slug} idx={idx}/>
            )}
            </div>
        </div>
    );
}