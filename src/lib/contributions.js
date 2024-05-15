import tockLogo from '@/images/pics/tock.svg'
import lightSculpturePicture from '@/images/pics/light_sculpture.jpg'
import notFoundPic from '@/images/pics/404_pic.jpeg'

export const allContributions = {
    "tock": {
        slug: "tock",
        title: "Tock OS",
        domain: "tockos.org",
        link: "https://tockos.org",
        pic: tockLogo,
        description: "Tock is an embedded operating system for mutually distrustful applications on low-memory and low-power microcontrollers."
    },
    "lightsculpture": {
        slug: "lightsculpture",
        title: "Interactive Light Sculpture",
        link: "https://sites.google.com/stanford.edu/ee125-interactive-light-sculpt",
        domain: "sites.google.com",
        pic: lightSculpturePicture,
        description: "Tock is an embedded operating system for mutually distrustful applications on low-memory and low-power microcontrollers."
    },
    "mypyvy": {
        slug: "mypyvy",
        title: "mypyvy",
        link: "https://github.com/wilcoxjay/mypyvy",
        domain: "github.com",
        pic: notFoundPic,
        description: "Mypyvy is a language for symbolic transition systems, inspired by Ivy."
    },
}