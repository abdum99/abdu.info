import Link from 'next/link'
import { PiNetworkDuotone, PiCpuDuotone, PiShieldCheckeredDuotone, PiDatabaseDuotone } from "react-icons/pi";

const Systems = () => (
  <div
    className="block rounded-xl border border-zinc-800/80 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
  >
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
);

const Backend = () => (
  <div
    className="block rounded-xl border border-zinc-800/80 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
  >
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
);

const Embedded = () =>
(
  <div
    className="block rounded-xl border border-zinc-800/80 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
  >
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
);

const Security = () => (
  <div
    className="block rounded-xl border border-zinc-800/80 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
  >
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
);

export default function WhatIDo() {
  return (
    <div className='flex inset-0 justify-center'>
      <div className="bg-zinc-900 text-white w-full flex justify-evenly dark:bg-zinc-950 py-8 shadow-xl shadow-pink-300/50 dark:shadow-pink-900/5">
        <div className=" px-4 py-4 sm:px-6 sm:py-8 lg:px-8 lg:py-2">
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
      </div>
    </div>
  );
}
