import {
  DM_Sans,
  Urbanist,
  Kaushan_Script,
  Italiana,
  Oswald,
  Josefin_Sans,
  Blinker,
} from "next/font/google";

export const urbanist = Urbanist({ subsets: ["latin"] });

export const kaushan = Kaushan_Script({ subsets: ["latin"], weight: "400" });

export const dmsans = DM_Sans({ subsets: ["latin"], weight: "500" });

export const italiana = Italiana({ subsets: ["latin"], weight: "400" });

export const oswald = Oswald({ subsets: ["latin"], weight: "400" });

export const josefinSans = Josefin_Sans({ subsets: ["latin"], weight: "200" });

export const blinker = Blinker({ subsets: ["latin"], weight: "400" });
