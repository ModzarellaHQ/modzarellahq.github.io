import { renderToString } from "solid-js/web";
import { Layout, pages } from "./pages";

export { pages };
export const render = (name: string) => renderToString(() => <Layout>{pages[name].body()}</Layout>);
