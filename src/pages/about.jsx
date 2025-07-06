import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import warsawFencePic from "@/images/pics/warsaw_fence_pic.jpg"

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'

import czechiaPic from '@/images/pics/czechia_pic.jpg'
import delahPic from '@/images/pics/delah_pic.jpg'


function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Abdu Mohamdy</title>
        <meta
          name="description"
          content="I’m Abdu."
        />
      </Head>
      <Container className="mt-48">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
            <div className="p-6 pb-28 w-80 mb-10 lg:max-w-lg -rotate-12 shadow-2xl bg-gradient-to-t from-gray-100 to-white relative -top-16">
                <div
                    className="shadow-inner"
                >
                <Image
                    src={warsawFencePic}
                    className="w-"
                />
                <p className='absolute bottom-4 font-mono text-blue-900 font-light tracking-tight'>Warsaw, Poland</p>
                </div>
            </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              &quot;I&apos;m sort of a hippie pacifist in terms of general persona.&quot;
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I grew up in a small village north of Cairo and only had three routers in my village. Three routers and a whole lot of switches and ethernet cables running between rooftops. My first &quot;debugging&quot; experience was figuring out why my internet wasn&quot; working. The anticlimactic reason was typically that one of the chickens my neighbors raised on their rooftops had bitten through a cable. 
              </p>
              <p>
                More stuff here
              </p>
              <p>
                words words words
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/amohamdy99/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:a.mohamdy99@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                abdu @ email
              </SocialLink>
            </ul>
          </div>

          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={delahPic}
                alt=""
                className="aspect-[2/3] rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
        </div>
        <div className="px-4 mt-16">
          <Image
            src={czechiaPic}
            alt=""
            className="aspect-[3/1] rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
          />
        </div>
      </Container>
    </>
  )
}
