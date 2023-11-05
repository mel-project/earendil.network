import { redirect } from "@sveltejs/kit";
// import detectNearestBrowserLocale from "detect-nearest-browser-locale";

export function load() {
  const getLang = () => {
    try {
      return detectNearestBrowserLocale(["en"]);
    } catch (e) {
      return "en";
    }
  };

  throw redirect(308, `/${getLang()}/`);
}
