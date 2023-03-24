import Web3Image from "@/assests/images/metaverse.webp";
import AiImage from "@/assests/images/ai.webp";
import CloudImage from "@/assests/images/cloud.webp";
import AmbientCompImage from "@/assests/images/ambient.webp";
import GenomicImage from "@/assests/images/genomics.webp";
import NetworkImage from "@/assests/images/network.webp";

const programsData = [
  {
    slug: "web3",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description:
      "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image: Web3Image,
    quarters: [
      {
        header: "Quarter IV",
        details:
          "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
        numb: 4,
      },
      {
        header: "Quarter V",
        details:
          "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        numb: 5,
      },
    ],
  },
  {
    slug: "ai",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description:
      "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    image: AiImage,
    quarters: [
      {
        header: "Quarter IV",
        details:
          "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
        numb: 4,
      },
      {
        header: "Quarter V",
        details: "AI-361: Deep Learning and MLOps",
        numb: 5,
      },
    ],
  },
  {
    slug: "cc",
    header: "Cloud-Native Computing Specialization",
    description:
      "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    image: CloudImage,
    quarters: [
      {
        header: "Quarter IV",
        details: "CN-351: Certified Kubernetes Application Developer (CKAD)",
        numb: 4,
      },
      {
        header: "Quarter V",
        details: "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
        numb: 5,
      },
    ],
  },
  {
    slug: "acs",
    header: "Ambient Computing and IoT Specialization",
    description:
      "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
    image: AmbientCompImage,
    quarters: [
      {
        header: "Quarter IV",
        details:
          "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
        numb: 4,
      },
      {
        header: "Quarter V",
        details: "AC-361: Embedded Programming using C and Rust",
        numb: 5,
      },
    ],
  },
  {
    slug: "gbs",
    header: "Genomics and Bioinformatics Specialization",
    description:
      "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
    image: GenomicImage,
    quarters: [
      {
        header: "Quarter IV",
        details: "Bio-351: Python for Biologists",
        numb: 4,
      },
      {
        header: "Quarter V",
        details: "Bio-361: Bioinformatics with Python",
        numb: 5,
      },
    ],
  },
  {
    slug: "npa",
    header: "Network Programmability Automation Specialization",
    description:
      "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
    image: NetworkImage,
    quarters: [
      {
        header: "Quarter IV",
        details: "NPA-351: CCNA 200-301 Certification",
        numb: 4,
      },
      {
        header: "Quarter V",
        details: "NPA-361: Network Programmability and Automation",
        numb: 5,
      },
    ],
  },
];
export default programsData;
