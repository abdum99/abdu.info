import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import Chip from '@/components/Chip'
import { Container } from '@/components/Container'
import { SimpleLayout } from '@/components/SimpleLayout'

import logoOpenShuttle from '@/images/logos/open-shuttle.svg'

import kunafaPic from '@/images/pics/kunafa_pic.jpg'

import { allProjects } from '@/lib/projects'

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Abdu Mohamdy</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <Container className="mt-16 sm:mt-24">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:grid-rows-[auto_1fr] lg:gap-y-12 lg:gap-x-12">
          <div className="lg:max-w-sm flex justify-center">
            <Image
              src={kunafaPic}
              alt=""
              className="aspect-[4/5] -rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
          <header className="col-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Things I’ve made trying to put my dent in the universe.
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              I’ve worked on tons of little projects over the years. Here are some of them. 
            </p>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              If you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.
            </p>
          </header>
        </div>
        <div className="mt-2 sm:mt-6">
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
          >
            {Object.values(allProjects).map((project) => (
              <Card as="li" key={project.slug} id={project.slug}>
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <Image
                    src={project.logo ?? logoOpenShuttle}
                    alt=""
                    className="h-8 w-8"
                    unoptimized
                  />
                </div>
                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  <Card.Link href={project.link.href} target="_blank">{project.title}</Card.Link>
                </h2>
                <Chip status={project.status} />
                <Card.Description>{project.description}</Card.Description>
                <Card.Chips chips={project.skills} />
                <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                  <LinkIcon className="h-6 w-6 flex-none" />
                  <span className="ml-2">{project.link.label}</span>
                </p>
              </Card>
            ))}
          </ul>
        </div>
      </Container>
    </>
  )
}
