import {
  faDiscord,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { discordUri, mediumUri, twitterUri } from "./index";

export const links = [
  { href: "/#order", text: "The Order" },
  { href: "/#traits", text: "Traits" },
  { href: "/#roadmap", text: "Roadmap" },
  { href: "/#benefit", text: "benefits" },

  { href: "/#team", text: "Team" },

  { href: "/#policy", text: "Policy i.d" },
];

export const socialLinks = [
  { href: mediumUri, icon: faMedium, text: "Medium" },
  { href: twitterUri, icon: faTwitter, text: "Twitter" },
  { href: discordUri, icon: faDiscord, text: "Discord" },
];
