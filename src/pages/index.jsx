import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { motion } from 'framer-motion'


import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'

import { PiCubeDuotone, PiNetworkDuotone, PiCpuDuotone, PiShieldCheckeredDuotone} from "react-icons/pi";

import {
  GitHubIcon,
  LinkedInIcon,
  HashnodeIcon
} from '@/components/SocialIcons'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'

import igPic from '@/images/pics/ig_pic.jpg'
import cafePic from '@/images/pics/cafe_pic.jpg'
import paragladePic from '@/images/pics/paraglade_pic.jpg'
import paintingsPic from '@/images/pics/paintings_pic.jpg'
import oreoPic from '@/images/pics/oreo_pic.jpg'
import tahoePic from '@/images/pics/tahoe_pic.jpg'

import { formatDate } from '@/lib/formatDate'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { ReactTyped } from 'react-typed'

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

const projectSnippetMotionVariant = {
  offscreen: {
    x: -10,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "ease-in",
      duration: 0.8
    }
  }
};

function ProjectSnippet({ project }) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.2 }}
      variants={projectSnippetMotionVariant}
    >
    <Card as="projsnippet">
      <Card.Title href={`/projects#${project.slug}`}>
        {project.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={project.date} decorate>
        {formatDate(project.date)}
      </Card.Eyebrow>
      <Card.Description>{project.description}</Card.Description>
      <Card.Cta>Read more..</Card.Cta>
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
  return (
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
  )
}

function Resume() {
  let resume = [
    {
      company: 'Planetaria',
      title: 'CEO',
      logo: logoPlanetaria,
      start: '2019',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Airbnb',
      title: 'Product Designer',
      logo: logoAirbnb,
      start: '2014',
      end: '2019',
    },
    {
      company: 'Facebook',
      title: 'iOS Software Engineer',
      logo: logoFacebook,
      start: '2011',
      end: '2014',
    },
    {
      company: 'Starbucks',
      title: 'Shift Supervisor',
      logo: logoStarbucks,
      start: '2008',
      end: '2011',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
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
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function AnimationsOnScroll() {
  return (
    <div className="flex justify-center">
      <TEAnimation
        animation="[slide-right_1s_ease-in-out]"
        start="onScroll"
        className="[&>svg]:w-11"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
        </svg>
      </TEAnimation>
    </div>
  );
}

const photoMotionVariant = (index) => {
  return {
    offscreen: {
      y: (index % 2 == 0)? 10 : -20,
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

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2'];

  return (
    <div className="my-2 sm:mt-12">
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
      >
      <div className="flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[tahoePic, paragladePic, cafePic, oreoPic, paintingsPic].map((image, imageIndex) => (
          <motion.div
            variants={photoMotionVariant(imageIndex)}
          >
          <div
            key={imageIndex}
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
    <Container className="my-20">
      <div className='flex flex-row-reverse'>
        <div className='flex-initial basis-1/3 min-w-80 m-6'>
          <Image
            src={avatarImage}
            alt=""
            className={clsx(
              'aspect-square rounded-3xl bg-zinc-100 object-cover dark:bg-zinc-800 w-80'
            )}
          />
        </div>
        <div className="max-w-4xl basis-2/3 mt-8">
          <div className='mb-8'>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              ABDU MOHAMDY
            </h1>
            <ReactTyped
              strings={["> Software Engineer"]}
              typeSpeed={40} 
              className="text-2xl font-thin tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
              />
          </div>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I'm Abdu, a software engineer based out of San Francisco. I love research and hacking and I'm passtionate about education accessibility and freedom of the press. I enjoy reading, cooking, and building objectively cool stuff in my free time.
          </p>
          <div className="mt-6 flex gap-6">
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
    </Container>
  );
}

function WhatIDo() {
  return (
    <div className='flex inset-0 justify-center my-8'>
    <div className="bg-zinc-900 text-white w-full flex justify-center dark:bg-zinc-950 py-8">
    <div className="max-w-screen-xl px-4 py-4 sm:px-6 sm:py-8 lg:px-8 lg:py-2">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-4xl font-bold">What I Do</h1>

        <p className="mt-4 text-zinc-300">
          I'm a Backend engineer with experience in Distributed Systems, Networking, Security, Infrastructure and Embedded Development.
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
            I enjoy breaking things (legally!). I studied and TA'ed classes in Computer and Network Security, and Cryptography. I have also built a repertoire of skills in:
            <ul>
              <li className='ps-2'>- Systems Security</li>
              <li className='ps-2'>- Network Security</li>
              <li className='ps-2'>- Web Security</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a
          href="#"
          className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Contact Me
        </a>
      </div>
    </div>
  </div>
  </div>
  );
}

function SelectedProjects({ articles }) {
  return (
    <div id="selectedprojects" className=''>
      <div className='flex gap-3 mb-4'>
      <PiCubeDuotone color='#A1A1AA' size={32} className='mt-1'/>
      <h1 className='text-4xl font-semibold mb-6 text-zinc-700'>Selected Projects</h1>
      </div>
      <div className="flex flex-col gap-16">
        {articles.map((article) => (
          <ProjectSnippet key={article.slug} project={article} />
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles }) {
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
      <Photos /> 
      <Container className="mt-8 md:mt-16">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <SelectedProjects articles={articles}/>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
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
