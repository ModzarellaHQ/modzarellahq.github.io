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
    title: "Modzarella · Cheese Rolling mod manager",
    description: "Modzarella is a free mod manager for Cheese Rolling. Install mods in one click, change their settings in game and make your own in Lua. For macOS, Windows and Linux.",
    body: home,
  },
  privacy: { path: "/privacy", title: "Privacy · Modzarella", description: "What the Modzarella website and mod manager collect: nothing that identifies you.", body: Privacy },
  terms: { path: "/terms", title: "Terms · Modzarella", description: "Licence and terms of use for the Modzarella mod manager and website.", body: Terms },
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
