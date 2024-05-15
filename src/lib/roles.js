import logoShv from '@/images/logos/shv.png'
import logoMeta from '@/images/logos/meta.png'
import logoGoogle from '@/images/logos/google.png'
import logoNvidia from '@/images/logos/nvidia.png'

export const allRoles = [
    {
      slug: 'shv',
      company: 'Sutter Hill Ventures',
      title: 'Software Engineer',
      logo: logoShv,
      start: 'Aug 2023',
      end: 'Apr 2024',
      description: "I was part of Sutter Hill Ventures Codepoint Fellowship where I rotated with two of their portfolio companies working as a full-time software engineer.\n\nAt Edgeguardian (Lacework Company):\n- Added support for an Android client by configuring the VPN service class and selectively forwarding DNS queries to be able to capture and proxy traffic to the SASE network.\n- Improved the in-cloud connector agent's reliability by improving the connection pool's fail-safe mechanism.\n- Designed a mechanism to use MDM SCEP certificates to securely authenticate guest users.\n\nAt Sigma Computing:\n- Designed service to securely crawl and migrate interlaced customer data (RDBMS and Object Storage) to different clouds.\n- Improved scalability of in-house deployment service using Kubernetes and Terraform."
    },
    {
      slug: 'meta',
      company: 'Meta',
      title: 'Software Engineer Intern',
      logo: logoMeta,
      start: 'Jun 2022',
      end: 'Sep 2022',
      description: "I worked with the WAN Controller team to develop a new tool to measure traffic loss across Meta's Express Backbone network that connects their Data Centers.\n\n Some of what I did was:\n- Proposed and developed a large extension to the project that uses multiple versions of Next Hop Groups in Arista's LSP Agents for better accuracy until the feature's release.\n- Built tests that simulate multiple versions of Next Hop Groups feature until the feature's release and induce traffic loss by both overloading physical links as well as selectively turning off forwarding interfaces to test the tool.",
    },
    {
      slug: 'google',
      company: 'Google',
      title: 'Software Engineer Intern',
      logo: logoGoogle,
      start: 'Jun 2021',
      end: 'Sep 2021',
      description: "I worked with the gSSD team (part of GCloud) to create a fuzzing tool to test Google-designed NVMe SSD flash drives used in GCloud.",
    },
    {
      slug: 'nvidia',
      company: 'Nvidia',
      title: 'Software Engineer Intern',
      logo: logoNvidia,
      start: 'Mar 2021',
      end: 'Jun 2021',
      description: "I was part of the Neural graphics team, but I worked with multiple teams to design, prototype and implement a new tool to compare video-quality side-by-side.\nI also added support for low-level graphics drivers to support Nvidia's proprietary ML upscaling technology, DLSS. At the time, I didn't have any graphics knowledge, but I learned quickly on the job (SO to The Cherno and OpenGL youtube course)",
    },
]