import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { motion, useInView, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'

import { PiFileTextDuotone, PiCubeDuotone, PiNetworkDuotone, PiCpuDuotone, PiShieldCheckeredDuotone} from "react-icons/pi";

import {
  GitHubIcon,
  LinkedInIcon,
  HashnodeIcon
} from '@/components/SocialIcons'

import igPic from '@/images/pics/ig_pic.jpg'
import cafePic from '@/images/pics/cafe_pic.jpg'
import paragladePic from '@/images/pics/paraglade_pic.jpg'
import paintingsPic from '@/images/pics/paintings_pic.jpg'
import oreoPic from '@/images/pics/oreo_pic.jpg'
import tahoePic from '@/images/pics/tahoe_pic.jpg'

import { formatDate } from '@/lib/formatDate'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { allProjects } from '@/lib/projects'
import { ReactTyped } from 'react-typed'
import { Contributions } from '@/components/Contributions'
import { allContributions } from '@/lib/contributions'
import { allRoles } from '@/lib/roles'
import { SimpleLayout } from '@/components/SimpleLayout'
import Chip from '@/components/Chip'
import { fadeInLeftMotionVariant, fadeInTopMotionVariant } from '@/lib/motionVariants'
import { useRef } from 'react'
import ContactMe from '@/components/ContactMe'

const avatarImage = igPic

function AvatarContainer({ className, ...props }) {
  return (
    <div
      className={clsx(
        className,
        'h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10'
      )}
      {...props}
    />
  )
}

function Avatar({ large = false, className, ...props }) {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, 'pointer-events-auto')}
      {...props}
    >
      <Image
        src={avatarImage}
        alt=""
        className={clsx(
          'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800',
          large ? 'h-100 w-100' : 'h-9 w-9'
        )}
      />
    </Link>
  )
}

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function ProjectSnippet({ project }) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInLeftMotionVariant}
    >
    <Card>
      <Card.Title href={`/projects#${project.slug}`}>
        <div className='flex gap-2'>
          <h1>{project.title}</h1>
          <Chip status={project.status} />
        </div>
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={project.date}>
        {`${project.startDate} - ${project.endDate}`}
      </Card.Eyebrow>
      <Card.Description>{project.description}</Card.Description>
      <Card.Chips chips={project.skills} />
      {/* <Card.Cta>Read more..</Card.Cta> */}
    </Card>
    </motion.div>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-700 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  const newsletterMotionVariant = {
    offscreen: {
      x: 40,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "ease-in",
        duration: 1
      }
    }
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={newsletterMotionVariant}
    >
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
    </motion.div>
  )
}

function Work() {
  const roles = allRoles.slice(0, 4)

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInTopMotionVariant}
    >
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {roles.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-5 p-0.5 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="w-20 rounded-full" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Link href="/experience" className='flex justify-center py-4 text-xs w-fill'>
        <span className="text-zinc-400 hover:text-zinc-500">
        View more..
        </span>
      </Link>
    </div>
    </motion.div>
  )
}

const photoMotionVariant = (index) => {
  return {
    offscreen: {
      y: (index % 2 == 0)? (8 + 10 * index) : (-12 - (4 * index)),
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "ease-in",
        duration: 1.5
      }
    }
}};

const photoY = (index, opacity) => {
  return 
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2'];
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    container: ref,
    axis: "y"
  })

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15],
    [0, 1]
  )

  const TranslationY = (index) => useTransform(
    scrollYProgress,
    [0, 0.1],
    [(index % 2 == 0)? (8 + 40 * index) : (-12 - (40 * index)), 0]
  )

  return (
    <div className="overflow-visible">
      <motion.div
        className="overflow-visible"
        viewport={{ once: true, amount: 0.4 }}
      >
      <div className="flex justify-center gap-5 overflow-visible py-4 sm:gap-8">
        {[tahoePic, paragladePic, cafePic, oreoPic, paintingsPic].map((image, imageIndex) => (
          <motion.div
            key={imageIndex}
            variants={photoMotionVariant(imageIndex)}
            style={{
              opacity: opacity,
              y: TranslationY(imageIndex),
            }}
          >
          <div
            className={
              `relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl transition ease-in duration-300 hover:-translate-y-2 break-before-auto ${rotations[imageIndex % rotations.length]}`
            }
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          </motion.div>
        ))}
      </div>
      </motion.div>
    </div>
  )
}

function Intro() {
  return (
    <div className="min-h-screen flex flex-col justify-center overflow-visible mt-12">
      <div className='flex justify-center basis-1/3'>
        <Image
          src={avatarImage}
          alt=""
          className={clsx(
            'aspect-square rounded-3xl bg-zinc-100 object-cover dark:bg-zinc-800 w-96'
          )}
        />
      </div>
      <div className='flex justify-center basis-1/3'>
        <div className="max-w-4xl basis-2/3 mt-8">
        <div className='mb-8'>
          <h1 className="text-4xl font-thin tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl mb-4">
            Hi, I&apos;m
          </h1>
          <h1 className="text-6xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl mb-4">
            ABDU MOHAMDY
          </h1>
          <ReactTyped
            strings={["> Software Engineer"]}
            typeSpeed={40} 
            className="text-4xl font-thin tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl"
            />
        </div>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I&apos;m based out of San Francisco. I love research and hacking and I&apos;m passtionate about education accessibility and freedom of the press. I enjoy reading, cooking, and building objectively cool stuff in my free time.
        </p>
        <div className="mt-6 mb-12 flex gap-6">
          <SocialLink
            href="https://linkedin.com/in/amohamdy99"
            aria-label="LinkedIn"
            icon={LinkedInIcon}
            target="_blank"
          />
          <SocialLink
            href="https://github.com/abdum99"
            aria-label="GitHub"
            icon={GitHubIcon}
            target="_blank"
          />
          <SocialLink
            href="https://hashnode.com/@amohamdy"
            aria-label="Hashnode"
            icon={HashnodeIcon}
            target="_blank"
          />
        </div>
        </div>
      </div>
      <Photos /> 
      </div>
  );
}

function WhatIDo() {
  return (
    <div className='flex inset-0 justify-center'>
    <div className="bg-zinc-900 text-white w-full flex justify-center dark:bg-zinc-950 py-8">
    <div className="max-w-screen-xl px-4 py-4 sm:px-6 sm:py-8 lg:px-8 lg:py-2">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-5xl font-bold">What I Do</h1>

        <p className="mt-4 text-zinc-300">
          I&apos;m a Backend engineer with experience in Distributed Systems, Networking, Security, Infrastructure and Embedded Development.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          className="block rounded-xl border border-zinc-800/80 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        >
          <PiNetworkDuotone size={36} color='#db2777'/>
          <h2 className="mt-4 text-xl font-bold text-white">Systems</h2>
          <p className="mt-1 text-sm text-gray-300">
            I studied Distributed Systems, Networking and Kernel Development and I enjoy working on systems with multiple moving components. I also love reading books and research papers on the topic. 
          </p>
          <div className="mt-1 text-sm text-gray-300">
            Most notably I have worked on:
            <ul>
              <li className='ps-2'>- Operating System Kernels in Rust & C</li>
              <li className='ps-2'>- SASE & ZTA Networks</li>
              <li className='ps-2'>- MPLS </li>
              <li className='ps-2'>- Distristful Distributed Systems </li>
            </ul>
          </div>
        </div>

        <div
          className="block rounded-xl border border-zinc-800/80 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        >
          <PiCpuDuotone size={36} color='#db2777'/>
          <h2 className="mt-4 text-xl font-bold text-white">Embedded</h2>
          <p className="mt-1 text-sm text-zinc-300">
            I love working close to the hardware. I have a lot of experience working with low-power micro-controllers and SBCs like Raspberry Pi, ESP and Teensy boards.
          </p>
          <div className="mt-1 text-sm text-zinc-300">
            I have worked with/on:
            <ul>
              <li className='ps-2'>- RTOS</li>
              <li className='ps-2'>- SPI, I2C, UART</li>
              <li className='ps-2'>- Many IoT Devices</li>
            </ul>
          </div>
        </div>

        <div
          className="block rounded-xl border border-zinc-800/80 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        >
          <PiShieldCheckeredDuotone size={36} color='#db2777'/>
          <h2 className="mt-4 text-xl font-bold text-white">Security & Cryptography</h2>
          <div className="mt-1 text-sm text-gray-300">
            I enjoy breaking things (legally!). I studied and TA&apos;ed classes in Computer and Network Security, and Cryptography. I have also built a repertoire of skills in:
            <ul>
              <li className='ps-2'>- Systems Security</li>
              <li className='ps-2'>- Network Security</li>
              <li className='ps-2'>- Web Security</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/#ContactMe"
          className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Contact Me
        </Link>
      </div>
    </div>
  </div>
  </div>
  );
}

function SelectedProjects() {
  const selectedProjects = [
    allProjects['ruban'],
    allProjects['osiris'],
    allProjects['yugioh'],
  ]
  return (
    <div
      id="selectedprojects"
    >
      <motion.div
        className='mb-12'
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={fadeInTopMotionVariant}
      >
        <div className='flex gap-3 mb-1'>
          <PiCubeDuotone size={36} className='mt-3 fill-zinc-400'/>
          <h1 className='text-5xl font-semibold text-zinc-700 dark:text-zinc-200'>Personal Projects</h1>
        </div>

        <p className="text-base text-zinc-600 dark:text-zinc-300 px-2">
          I’ve worked on a lot of personal projects over the years, these are some of the ones that I&apos;m most proud of.
        </p>
      </motion.div>
      <div className="flex flex-col gap-12 mb-8">
        {selectedProjects.map((proj) => (
          <ProjectSnippet key={proj.slug} project={proj} />
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Abdu Mohamdy
        </title>
        <link rel="icon" type="image/x-icon" href="@/public/favicon.ico" />
        <meta
          name="description"
          content="I'm Abdu, a software engineer based out of San Francisco. I love research and hacking and I'm passtionate about education accessibility and freedom of the press. I enjoy reading, cooking, and building objectively cool stuff in my free time"
        />
      </Head>
      <Intro />
      <WhatIDo />
      <Container className="mt-8 md:mt-16">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-10 lg:max-w-none lg:grid-cols-2">
          <SelectedProjects />
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Work />
            <Button href="/Abdu_Mohamdy_Resume.pdf" target="_blank" variant="secondary" className="group w-full bg-zinc-800 hover:bg-zinc-900">
              <PiFileTextDuotone size={20} className='fill-zinc-100 group-hover:fill-zinc-50'/>
              <p className='text-zinc-100 group-hover:text-zinc-50'>
              Download Resume
              </p>
            </Button>
            <Newsletter />
          </div>
        </div>
        <Contributions ctrs={allContributions} />
        <ContactMe />
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
