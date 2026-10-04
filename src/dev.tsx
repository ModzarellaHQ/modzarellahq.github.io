import { render } from "solid-js/web";
import { Layout, pages } from "./pages";

const name = Object.keys(pages).find((k) => pages[k].path === location.pathname.replace(/\.html$/, "").replace(/\/index$/, "/")) ?? "404";
document.title = pages[name].title;
const root = document.getElementById("root")!;
root.textContent = "";
render(() => <Layout>{pages[name].body()}</Layout>, root);
