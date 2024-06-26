import { plugin } from "mongoose";
import { Raleway } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"},
        purple:{
          "50": "#f5e4f1",
          "100": "#e7c4de",
          "200": "#d597c8",
          "300": "#c069b0",
          "400": "#a73a96",
          "500": "#8b1a7d",
          "600": "#771569",
          "700": "#621052",
          "800": "#4e083c",
          "900": "#3c052b",
          "950": "#29031b"
        }
        
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    
    },
  },
    
  
};
 


export default config;
