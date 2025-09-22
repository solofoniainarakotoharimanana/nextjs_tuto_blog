import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/layout/NavBar";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({
  	variable: "--font-poppins",
	subsets: ["latin"],
  	weight: ['400', '700']
});

export const metadata: Metadata = {
  	title: "NextJs Blog",
	description: "Your favorite web dev blog",
  	icons: {icon: '/logo.svg'}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn('antialiased flex flex-col min-h-screen *:', poppins.variable)}
        // className={cn('antialiased', poppins.variable, true && 'bg-red-300')}
		  >
			<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
				<NavBar />
				<main className="flex-grow">
					{children}
				</main>
				<footer>Footer</footer>
			</ThemeProvider>
			
      </body>
    </html>
  );
}	
