interface PersonJsonLdProps {
  locale: string;
}

const PersonJsonLd = ({ locale }: PersonJsonLdProps) => {
  const isRu = locale === "ru";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: isRu ? "Григорий Исупов" : "Grigory Isupov",

    url: "https://portfolio.ln-kr.ru",

    jobTitle: isRu ? "Full Stack разработчик" : "Full Stack Developer",

    knowsAbout: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "TypeScript",
      "React",
      "Next.js",
      "Docker",
      "Nginx",
      "Ansible",
      "Distributed Systems",
      "Domain-Driven Design",
      "Clean Architecture",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
};

export default PersonJsonLd;
