import NavigationWrapper from '@/components/NavigationWrapper';
import JSONLD from '@/components/JSONLD';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import SEOAuthority from '@/components/SEOAuthority';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main>
            <JSONLD />
            <NavigationWrapper />
            <Hero />
            <About />
            <Skills />
            <SEOAuthority />
            <Contact />
            <Footer />
        </main>
    );
}
