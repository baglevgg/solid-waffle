import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata = {
    metadataBase: new URL('https://me.sdj.com.np'),
    title: 'Gaurav Dhakal | AI Engineer & Data Scientist',
    description: 'Gaurav Dhakal is a data scientist, AI engineer, and technology-focused problem solver specializing in artificial intelligence, machine learning, and intelligent digital solutions.',
    keywords: ['Gaurav Dhakal', 'AI Engineer', 'Data Scientist', 'Machine Learning', 'Artificial Intelligence', 'Data Science', 'Python', 'AI Development'],
    authors: [{ name: 'Gaurav Dhakal' }],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://me.sdj.com.np/',
        title: 'Gaurav Dhakal | AI Engineer & Data Scientist',
        description: 'Data scientist and AI engineer specializing in artificial intelligence, machine learning, and intelligent digital solutions.',
        siteName: 'Gaurav Dhakal Portfolio',
        images: [{
            url: '/profile.jpg',
            width: 200,
            height: 200,
            alt: 'Gaurav Dhakal - AI Engineer',
        }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Gaurav Dhakal | AI Engineer & Data Scientist',
        description: 'Data scientist and AI engineer specializing in artificial intelligence, machine learning, and intelligent digital solutions.',
        images: ['/profile.jpg'],
    },
    alternates: {
        canonical: '/',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <head>
                {/* Google Tag Manager */}
                <Script id="gtm" strategy="afterInteractive">
                    {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KLHGJ5B2');`}
                </Script>
                {/* Google Analytics */}
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-7PFPC4E297" strategy="afterInteractive" />
                <Script id="ga" strategy="afterInteractive">
                    {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7PFPC4E297');`}
                </Script>
            </head>
            <body className={`${inter.variable} dark-theme`}>
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-KLHGJ5B2"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>
                {children}
            </body>
        </html>
    );
}
