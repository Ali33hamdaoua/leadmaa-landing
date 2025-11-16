import Head from "next/head";
import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";
import Benefits from "../components/Benefits";
import ProofBlock from "../components/ProofBlock";
import HowItWorks from "../components/HowItWorks";
import QualificationForm from "../components/QualificationForm";
import PricingSection from "../components/PricingSection";


export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      <NextSeo
        title="Lead Landing Page"
        description="Close more deals with exclusive, verified real estate leads. Transparent, pay-per-lead model built for your success."
        canonical="https://leadmaa.com/"
        openGraph={{
          url: "https://leadmaa.com/",
          title: "Lead Landing Page",
          description:
            "Exclusive, verified real estate leads for your market. Close more deals with high-quality leads.",
          images: [
            {
              url: "/images/image.png",
            },
          ],
          site_name: "Lead Landing Page",
        }}
      />
      <Head>
        <link rel="icon" href="" />
      </Head>

      <Header />

      <section className="relative">
        <div className="px-4 pt-10 mx-auto max-w-7xl md:pt-16">
          <div className="w-full pb-5 mx-auto text-center md:w-11/12">
            <h1 className="mb-3 text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl">
              Close More Deals with
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                High-Quality Leads.
              </span>
            </h1>
            <p className="max-w-xl pt-5 mx-auto text-lg text-gray-600 dark:text-gray-400 md:text-lg">
              Exclusive. Verified. Pay per lead — any non-valid lead is replaced for free.
            </p>

            <div className="mt-8 text-center">
              <a
                href="https://leadmaa.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white rounded-full shadow-lg transition transform hover:scale-105 hover:shadow-xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-700 hover:via-purple-700 hover:to-indigo-700"
              >
                Discover More →
              </a>
            </div>
          </div>
        </div>
      </section>
      <ProofBlock />
      <Benefits />
      <PricingSection />
      <QualificationForm />
    </div>
  );
}
