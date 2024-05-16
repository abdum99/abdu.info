export const ProjectStatus = {
    v01: "v0.1",
    IN_PROGRESS: "In Progress",
}

export const allProjects = {
    "ruban": {
        slug: "ruban",
        title: "Ruban: Distrustful P2P Transactions",
        link: "",
        startDate: "Mar 2023",
        endDate: "June 2023",
        date: "June 2023",
        skills: ["P2P", "2PC", "X.509", "Python"],
        status: ProjectStatus.v01,
        description: "Ruban is a Mutually distrustful turn-based P2P transaction system. It builds off Two-Phase Commit and allows nodes to commit and challenge each action with a novel majority-based challenge resolution mechanism. I'm using it for my Yu-Gi-Oh dueling disk project."
    },
    "osiris": {
        slug: "osiris",
        title: "Osiris IoT Hub",
        link: "",
        startDate: "Oct 2023",
        endDate: "Feb 2024",
        date: "Present",
        skills: ["React", "Node.js", "JWT", "ReaspberryPi", "MQTT", "OpenVPN"],
        status: ProjectStatus.v01,
        description: "A Server running on a rpi/4 that exposes OpenVPN port for secure remote connection, MQTT Broker to orchestrate messages between different IoT devices and a frontend application to monitor and control those projects. I use it to control a few personal projects on MCU and SBCs including a self-watering plant pot, a digital E-Ink Photo Album (Inky), coffee machine and Led matrix."
    },
    "yugioh": {
        slug: "yugioh",
        title: "Yu-Gi-Oh Dueling Disk",
        link: "",
        startDate: "Jun 2023",
        endDate: "Present",
        date: "Present",
        skills: ["ESP32", "RFID", "Embedded Linux"],
        status: ProjectStatus.IN_PROGRESS,
        description: "I'm building a real-life Yu-Gi-Oh Dueling Disk to play the game. It uses a few MFRC522 to read the RFID cards (attached to the back of the playing cards) and sends them to a rpi/0 which manages the game state. I plan to use Ruban to disallow players from cheating - useful for some tricky cases with face-down trap cards"
    },
}