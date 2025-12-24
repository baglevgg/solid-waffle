export default function JSONLD() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Gaurav Dhakal",
        "jobTitle": "AI Engineer & Data Scientist",
        "description": "Gaurav Dhakal is a data scientist, AI engineer, and technology-focused problem solver specializing in artificial intelligence, machine learning, and intelligent digital solutions.",
        "url": "https://me.sdj.com.np",
        "image": "https://me.sdj.com.np/profile.jpg",
        "sameAs": [
            "https://linkedin.com/in/gauravdhakal",
            "https://github.com/gauravdhakal",
            "https://twitter.com/gauravdhakal"
        ],
        "knowsAbout": [
            "Artificial Intelligence",
            "Machine Learning",
            "Data Science",
            "Python Programming",
            "AI Model Development",
            "Data Analysis",
            "Web Development",
            "React",
            "System Optimization"
        ],
        "worksFor": {
            "@type": "Organization",
            "name": "SDJ Technologies"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
    );
}
