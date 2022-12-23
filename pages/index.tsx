// require('dotenv').config()
import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Link from "next/link";
import { GetStaticProps } from "next";
import { PageInfo, Project, Skill, Social } from "../typings";
import { fetchSkills } from "../utils/fetchSkill";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProject } from "../utils/fetchProjects";
import { fetchSocial } from "../utils/fetchSocials";
const inter = Inter({ subsets: ["latin"] });

type Props = {
  pageInfo : PageInfo,
  skills : Skill[],
  projects : Project[],
  socials : Social[]
}

export default function Home({pageInfo,skills,projects,socials} : Props) {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 
    scrollbar-thumb-[#F7AB0A]/80"
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header socials={socials}/>

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo}/>
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills}/>
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects}/>
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <Link href='#hero'>
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
            src="/me.jpg"
            alt=""/>

          </div>
        </footer>
      </Link>

    </div>
  );
}

export const getStaticProps :GetStaticProps<Props> = async() => {
  const pageInfo : PageInfo = await fetchPageInfo() || null;
  const projects : Project[] = await fetchProject() || null;
  const skills : Skill[] = await fetchSkills() || null;
  const socials : Social[] = await fetchSocial() || null;
  
  return {
    props : {
      pageInfo,
      projects,
      skills,
      socials
    },
    // validator : 10
  }
}