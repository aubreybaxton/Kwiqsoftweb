import { Poppins, Roboto } from "next/font/google";
import localFont from 'next/font/local'


export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose what you need
  variable: "--font-roboto",     // optional CSS variable
})

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose what you need
  variable: "--font-roboto",     // optional CSS variable
});
  
export const mandatoryPlaything = localFont({
  src: [
    {
      path: "./font/mandatory_plaything/Mandatory Plaything.otf",
      weight: "400",
      style: "normal",
    }
  ],
  variable: "--font-mandatory-plaything",
  display: "swap",
})