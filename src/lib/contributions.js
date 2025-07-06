import tockLogo from '@/images/pics/tock.jpeg'
import lightSculpturePicture from '@/images/pics/light_sculpture.jpg'

export const allContributions = {
    "tock": {
        slug: "tock",
        title: "Tock OS",
        role: "Research Assistant",
        domain: "tockos.org",
        link: "https://tockos.org",
        skills: ["Rust", "ARM", "SPI", "Watchdog"],
        pic: tockLogo,
        description: "Tock is an embedded operating system for mutually distrustful applications on low-memory and low-power microcontrollers."
    },
    "lightsculpture": {
        slug: "lightsculpture",
        title: "Interactive Light Sculpture",
        role: "Developer",
        link: "https://sites.google.com/stanford.edu/ee125-interactive-light-sculpt",
        domain: "sites.google.com",
        skills: ["Java", "I2C", "Graphics"],
        pic: lightSculpturePicture,
        description: "Interactive light sculpture made of many LED Acryllic Fractal Flyers and installed in a 3-story glass stairwell of the Packard building at Stanford." 
    },
    "mypyvy": {
        slug: "mypyvy",
        title: "mypyvy",
        role: "Research Assistant",
        link: "https://github.com/wilcoxjay/mypyvy",
        skills: ["Formal Verification", "Python"],
        domain: "github.com",
        description: "Mypyvy is a language for symbolic transition systems, inspired by Ivy."
    },
}