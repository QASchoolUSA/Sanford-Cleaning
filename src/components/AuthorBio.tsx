import Image from "next/image";

interface AuthorBioProps {
    name?: string;
    role?: string;
    image?: string;
    description?: string;
    linkedin?: string;
}

export default function AuthorBio({
    name = "Sanford Cleaning Team",
    role = "Cleaning Experts & Local Residents",
    image = "/sanford-cleaning-logo.png", // Fallback to logo if no personal headshot
    description = "The Sanford Cleaning team consists of local cleaning professionals dedicated to maintaining high standards of hygiene and customer service in Sanford, FL.",
    linkedin,
}: AuthorBioProps) {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: name,
        jobTitle: role,
        image: `https://sanfordcleaning.com${image}`,
        description: description,
        ...(linkedin && { sameAs: [linkedin] }),
    };

    return (
        <div className="my-8 rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white shadow-md sm:h-20 sm:w-20">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="text-center sm:text-left">
                    <p className="text-xs uppercase tracking-wider text-blue-600 font-bold">
                        Written By
                    </p>
                    <h3 className="text-lg font-bold text-slate-900">{name}</h3>
                    <p className="text-sm font-medium text-slate-600">{role}</p>
                    <p className="mt-2 text-sm text-slate-700 leading-relaxed max-w-2xl">
                        {description}
                    </p>
                    {linkedin && (
                        <a
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center text-sm font-medium text-blue-700 hover:underline"
                        >
                            View Profile &rarr;
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
