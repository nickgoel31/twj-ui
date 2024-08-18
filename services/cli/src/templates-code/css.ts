export const CSS_STYLE_VARIABLES = `@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
    :root {
      --radius: 0.5rem;

      --background: 0 0% 3.9%;
      --foreground: 0 0% 98%;

      --card: 0 0% 3.9%;
      --card-foreground: 0 0% 98%;

      --popover: 0 0% 3.9%;
      --popover-foreground: 0 0% 98%;

      --primary: 0 0% 98%;
      --primary-foreground: 0 0% 9%;

      --secondary: 0 0% 14.9%;
      --secondary-foreground: 0 0% 98%;

      --muted: 0 0% 14.9%;
      --muted-foreground: 0 0% 63.9%;

      --accent: 0 0% 14.9%;
      --accent-foreground: 0 0% 98%;

      --destructive: 0 62.8% 30.6%;
      --destructive-foreground: 0 0% 98%;

      --border: 0 0% 14.9%;
      --input: 0 0% 14.9%;
      --ring: 0 0% 83.1%;
    }

    .dark {
      --background: 0 0% 3.9%;
      --foreground: 0 0% 98%;

      --card: 0 0% 3.9%;
      --card-foreground: 0 0% 98%;

      --popover: 0 0% 3.9%;
      --popover-foreground: 0 0% 98%;

      --primary: 0 0% 98%;
      --primary-foreground: 0 0% 9%;

      --secondary: 0 0% 14.9%;
      --secondary-foreground: 0 0% 98%;

      --muted: 0 0% 14.9%;
      --muted-foreground: 0 0% 63.9%;

      --accent: 0 0% 14.9%;
      --accent-foreground: 0 0% 98%;

      --destructive: 0 62.8% 30.6%;
      --destructive-foreground: 0 0% 98%;

      --border: 0 0% 14.9%;
      --input: 0 0% 14.9%;
      --ring: 0 0% 83.1%;
    }

    [data-color-scheme="sky"]{
      --background: 66 100% 97.7%;
      --foreground: 168 100% 10.6%;
      --primary: 167 43% 61.2%;
      --primary-foreground: 168 100% 6.3%;
      --secondary: 81 21.7% 82.2%;
      --secondary-foreground: 168 100% 6.3%;
      --muted: 81 34.5% 75.3%;
      --muted-foreground: 148 11.8% 63.9%;
      --accent: 81 34.5% 75.3%;
      --accent-foreground: 168 100% 6.3%;
      --destructive: 0 84.2% 60.2%;
      --destructive-foreground: 348 96.2% 20%;
      --border: 187 26% 72.9%;
      --input: 187 26% 72.9%;
      --card: 66 100% 97.7%;
      --card-foreground: 168 100% 10.6%;
      --popover: 66 100% 97.7%;
      --popover-foreground: 168 100% 10.6%;
      --ring: 167 43% 61.2%;
      --radius: 0.5rem;
      --chart-1: 197 67% 50%;
      --chart-2: 160 70% 45%;
      --chart-3: 30 80% 55%;
      --chart-4: 280 65% 60%;
      --chart-5: 340 75% 55%;
  }
  
  [data-color-scheme="sky"] .dark {
      --background: 189 100% 8.2%;
      --foreground: 66 100% 97.7%;
      --card: 189 100% 8.2%;
      --card-foreground: 66 100% 97.7%;
      --popover: 189 100% 8.2%;
      --popover-foreground: 66 100% 97.7%;
      --primary: 167 43% 61.2%;
      --primary-foreground: 168 100% 6.3%;
      --secondary: 184 10% 22%;
      --secondary-foreground: 81 21.7% 82.2%;
      --muted: 206 9.2% 32.7%;
      --muted-foreground: 206 40% 42%;
      --accent: 189 65% 38%;
      --accent-foreground: 168 100% 6.3%;
      --destructive: 349 81.6% 39.8%;
      --destructive-foreground: 348 96.2% 20%;
      --border: 206 9.2% 32.7%;
      --input: 206 9.2% 32.7%;
      --ring: 167 43% 61.2%;
      --chart-1: 220 70% 50%;
      --chart-2: 160 60% 45%;
      --chart-3: 30 80% 55%;
      --chart-4: 280 65% 60%;
      --chart-5: 340 75% 55%;
  }

    [data-color-scheme="purple"]{
      --background: 240 5% 98%;
      --foreground: 279 78% 12%;
      --primary: 293 82% 43%;
      --primary-foreground: 285 58% 27%;
      --secondary: 289 72% 57%;
      --secondary-foreground: 282 45% 26%;
      --muted: 314 23% 89%;
      --muted-foreground: 308 32% 57%;
      --accent: 314 23% 89%;
      --accent-foreground: 270 50% 33%;
      --destructive: 16 90% 53%;
      --destructive-foreground: 9 74% 38%;
      --border: 270 16% 68%;
      --input: 280 11% 60%;
      --card: 300 77% 87%;
      --card-foreground: 280 55% 52%;
    }
    
    [data-color-scheme="purple"]  .dark {
      --background: 270 5% 8%;
      --foreground: 308 100% 97%;
      --primary: 293 82% 43%;
      --primary-foreground: 285 58% 27%;
      --secondary: 262 100% 16%;
      --secondary-foreground: 289 72% 57%;
      --muted: 260 100% 20%;
      --muted-foreground: 280 34% 62%;
      --accent: 320 82% 57%;
      --accent-foreground: 280 39% 60%;
      --destructive: 15 56% 38%;
      --destructive-foreground: 20 75% 86%;
      --border: 280 39% 55%;
      --input: 275 20% 55%;
      --card: 330 80% 50%;
      --card-foreground: 345 68% 55%;
    }

    [data-color-scheme="gold"] {
      --background: 48 100% 96%;
      --foreground: 31 79% 28%;
      --primary: 40 85% 60%;
      --primary-foreground: 21 65% 29%;
      --secondary: 52 100% 89%;
      --secondary-foreground: 31 26% 35%;
      --muted: 33 9% 68%;
      --muted-foreground: 30 13% 57%;
      --accent: 51 100% 71%;
      --accent-foreground: 43 70% 35%;
      --destructive: 172 54% 26%;
      --destructive-foreground: 169 95% 86%;
      --border: 33 15% 69%;
      --input: 33 22% 68%;
      --card: 49 100% 87%;
      --card-foreground: 45 84% 49%;
    }
    
    [data-color-scheme="gold"] .dark {
      --background: 45 100% 9%;
      --foreground: 48 100% 87%;
      --primary: 40 85% 60%;
      --primary-foreground: 32 98% 41%;
      --secondary: 40 100% 37%;
      --secondary-foreground: 36 87% 70%;
      --muted: 36 12% 33%;
      --muted-foreground: 22 32% 48%;
      --accent: 39 22% 37%;
      --accent-foreground: 39 98% 55%;
      --destructive: 180 100% 21%;
      --destructive-foreground: 0 0% 100%;
      --border: 33 10% 31%;
      --input: 33 10% 32%;
      --card: 45 85% 42%;
      --card-foreground: 25 96% 47%;
    }
    
    
  }`