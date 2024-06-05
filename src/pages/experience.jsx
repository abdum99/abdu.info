import { Container } from "@/components/Container";
import { allRoles } from "@/lib/roles";
import Head from "next/head";
import Image from "next/image";

import { motion } from 'framer-motion'

import turingPic from '@/images/pics/turing_pic.jpg'

const sideMotionVariant = {
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

const topMotionVariant = {
  offscreen: {
    y: -10,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "ease-in",
      duration: 0.8
    }
  }
};


function Roles({ props }) {
    const roles = allRoles
    return (
        <div>
        <h1 className="font-bold tracking-tight text-zinc-800 dark:text-zinc-100 text-5xl mb-12">Experience</h1>
        <Container {...props} >
        <div class="-my-6">
            {roles.map((role) => (
                <div key={role.slug} id={role.slug} class="relative pl-8 sm:pl-32 py-6 group">
                    <div class="flex flex-col sm:flex-row items-start group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-zinc-200 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-2 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-zinc-500 dark:after:bg-zinc-50 after:border-8 after:box-content after:border-white dark:after:border-zinc-900 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <motion.div className="sm:absolute left-9 text-xs font-semibold uppercase w-12 bg-zinc-100 rounded-full flex flex-none shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={sideMotionVariant}
                        >
                            <Image src={role.logo} alt="" className="w-20 rounded-full" unoptimized />
                        </motion.div>

                        <motion.div
                            class="font-caveat font-medium text-2xl text-zinc-700 dark:text-zinc-100"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={sideMotionVariant}
                        >
                            {role.title}
                        </motion.div>
                    </div>

                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={topMotionVariant}
                    >
                        <div class="text-xl font-bold text-zinc-600 dark:text-zinc-200">
                        {role.company}
                        </div>

                    <div className="font-light text-sm -translate-y-2 text-zinc-700 dark:text-zinc-200" >
                        {`${role.start} - ${role.end}`}
                    </div>
                    </motion.div>

                    <motion.div class="text-zinc-700 dark:text-zinc-100 whitespace-pre-wrap"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={sideMotionVariant}
                    >
                        {role.description}
                    </motion.div>
                </div>
            ))}
        </div>
        </Container>
        </div>
    );
}

export default function Experience( {props} ) {
    return (
    <>
      <Head>
        <title>Experience - Abdu Mohamdy</title>
        <meta
          name="description"
          content="Abdu Mohamdy Experience"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={turingPic}
                alt=""
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
                I work with a sense of ownership
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I graduated from Stanford with a B.S. in Computer Science (Systems track) in 2022, and finished my M.S. (Computer & Network Security concentration) a year later - 2023. 
              </p>
              <p>
                I have experience working in both &quot;Big Tech&quot; and smaller startups, and although I prefer the fast-paced environment and greater flexibility of startups, I&apos;m able to balance my sense of ownership in my work with a pragmatic approach to deliver both business impact and engineering excellence.
              </p> 
            </div>
          </div>
        </div>
        <Roles />
    </Container>
    </>
)}