import Head from 'next/head';
import MainLayout from '@/layouts/MainLayout';
import LandingHero from '@/components/landing/hero';
import SectionTechnology from '@/components/landing/technology';
import SectionProjects from '@/components/landing/projects';
import SectionJourney from '@/components/landing/journey';
import SectionHire from '@/components/landing/hire';
import SectionSosialMedia from '@/components/landing/sosmed';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <LandingHero />
        <SectionTechnology />
        <SectionProjects />
        <SectionJourney />
        <SectionHire />
      </MainLayout>
    </>
  )
}
