import Link from 'next/link'
import { PiNetworkDuotone, PiCpuDuotone, PiShieldCheckeredDuotone, PiDatabaseDuotone } from "react-icons/pi";
import { Container } from './Container';
import GlareHover from './GlareHover';

const Systems = () => (
  <GlareHover
    width="100%"
    height="auto"
    background="transparent"
    borderRadius="12px"
    borderColor="#374151"
    glareColor="#ffffff"
    glareOpacity={0.1}
    glareAngle={-45}
    glareSize={250}
    transitionDuration={650}
    playOnce={false}
    className="border border-zinc-800/80 shadow-xl hover:border-pink-500/10 hover:shadow-pink-500/10"
  >
    <div className="p-8">
      <PiNetworkDuotone size={36} color='#db2777' />
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
  </GlareHover>
);

const Backend = () => (
  <GlareHover
    width="100%"
    height="auto"
    background="transparent"
    borderRadius="12px"
    borderColor="#374151"
    glareColor="#ffffff"
    glareOpacity={0.1}
    glareAngle={-45}
    glareSize={200}
    transitionDuration={650}
    playOnce={false}
    className="border border-zinc-800/80 shadow-xl hover:border-pink-500/10 hover:shadow-pink-500/10"
  >
    <div className="p-8">
      <PiDatabaseDuotone size={36} color='#db2777' />
      <h2 className="mt-4 text-xl font-bold text-white">Backend</h2>
      <div className="mt-1 text-sm text-gray-300">
        I worked on many backend systems and have experience designing and scaling backend architecture especially microservice architectures. Some
        <ul>
          <li className='ps-2'>- Authentication (e.g. JWT, X.509 Certificates)</li>
          <li className='ps-2'>- Authorization (e.g. IAM, Least Privilege)</li>
          <li className='ps-2'>- Databases (SQL & NoSQL)</li>
          <li className='ps-2'>- API (incl. gRPC, REST)</li>
          <li className='ps-2'>- Deployment (Docker, Kubernetes, Terraform)</li>
          <li className='ps-2'>- Cloud (AWS and GCP)</li>
        </ul>
      </div>
    </div>
  </GlareHover>
);

const Embedded = () => (
  <GlareHover
    width="100%"
    height="auto"
    background="transparent"
    borderRadius="12px"
    borderColor="#374151"
    glareColor="#ffffff"
    glareOpacity={0.1}
    glareAngle={-45}
    glareSize={200}
    transitionDuration={650}
    playOnce={false}
    className="border border-zinc-800/10 shadow-xl hover:border-pink-500/10 hover:shadow-pink-500/10"
  >
    <div className="p-8">
      <PiCpuDuotone size={36} color='#db2777' />
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
  </GlareHover>
);

const Security = () => (
  <GlareHover
    width="100%"
    height="auto"
    background="transparent"
    borderRadius="12px"
    borderColor="#374151"
    glareColor="#ffffff"
    glareOpacity={0.1}
    glareAngle={-45}
    glareSize={200}
    transitionDuration={650}
    playOnce={false}
    className="border border-zinc-800/80 shadow-xl hover:border-pink-500/10 hover:shadow-pink-500/10"
  >
    <div className="p-8">
      <PiShieldCheckeredDuotone size={36} color='#db2777' />
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
  </GlareHover>
);

export default function WhatIDo() {
  return (
    <div className="flex justify-center bg-zinc-900 text-white flex justify-evenly dark:bg-black">
      <div className='max-w-7xl px-8 lg:px-16 xl:px-8'>
        <div className='w-full inset-0 py-8'>
          <div className="px-4 py-4 sm:px-6 sm:py-8 lg:px-8 lg:py-2">
            <div className="mx-auto max-w-xl text-center">
              <h1 className="text-5xl font-bold">What I Do</h1>

              <p className="mt-4 text-zinc-300">
                I&apos;m a Backend engineer with experience in Distributed Systems, Networking, Security, Infrastructure and Embedded Development.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
              <Systems />
              <Backend />
              <Security />
              <Embedded />
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/#ContactMe"
                scroll={false}
                className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div >
      </div >
    </div>
  );
}
