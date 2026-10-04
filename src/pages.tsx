import type { JSX } from "solid-js";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Steps from "./components/Steps";
import Mods from "./components/Mods";
import MakeAMod from "./components/MakeAMod";
import Footer from "./components/Footer";
import { NotFound, Privacy, Terms } from "./components/Legal";

const home = () => (
  <>
    <Hero />
    <Steps />
    <Mods />
    <MakeAMod />
  </>
);

export const pages: Record<string, { path: string; title: string; description: string; body: () => JSX.Element }> = {
  index: {
    path: "/",
    title: "Modzarella · mods for Cheese Rolling",
    description: "Modzarella installs and runs mods for Cheese Rolling: drive a BMW down the hill, fly a rocket toilet, add guns and Euphoria ragdolls. macOS, Windows and Linux.",
    body: home,
  },
  privacy: { path: "/privacy", title: "Privacy · Modzarella", description: "What the Modzarella website and app collect: nothing personal.", body: Privacy },
  terms: { path: "/terms", title: "Terms · Modzarella", description: "Licence and terms for Modzarella and its mods.", body: Terms },
  "404": { path: "/404", title: "Not found · Modzarella", description: "This page doesn't exist.", body: NotFound },
};

export function Layout(props: { children: JSX.Element }) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
