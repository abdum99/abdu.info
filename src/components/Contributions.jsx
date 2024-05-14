import Image from 'next/image';

function Contribution({ ctr }) {
    return (
        <a href={ctr.link} target='_blank' className="group relative block h-64 max-w-72 sm:h-80 lg:h-96">
        <span className="absolute inset-0 border-2 border-dashed border-black rounded-2xl">
            <Image
                src={ctr.pic}
                className='rounded-2xl opacity-70 w-full h-full'
            />
        </span>
      
        <div
          className="relative flex align-center h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-xl"
        >
          <div
            className="!pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 overflow-hidden bg-black"
          >
            <Image
                src={ctr.pic}
                className='rounded-2xl opacity-70 w-full h-full'
            />
            <h2 className="absolute bottom-0 text-zinc-50 text-xl font-medium sm:text-2xl p-4">{ctr.title}</h2>
          </div>
      
          <div
            className="rounded-2xl absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
          >
            <h3 className="mt-4 text-xl font-medium sm:text-2xl">{ctr.title}</h3>
      
            <p className="mt-4 text-sm sm:text-base">
                {ctr.description}
            </p>
      
            <p className="mt-8 font-bold">Read more</p>
          </div>
        </div>
      </a>
    )
}

export function Contributions({ ctrs = [], props }) {
    return (
        <div {...props} >
            <h1 className="text-4xl font-semibold mb-6 text-zinc-700 dark:text-zinc-20">
                Projects I'm Proud to have been a part of 
            </h1>
            <div className="flex flex-initial justify-center px-12 gap-4">
            {Object.values(ctrs).map((ctr) => 
                <Contribution ctr={ctr} />
            )}
            </div>
        </div>
    );
}