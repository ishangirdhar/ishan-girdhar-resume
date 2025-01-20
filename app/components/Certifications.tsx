interface CertificationProps {
  title: string;
  period: string;
  issuer?: string;
  license?: string;
  licenseLabel?: string;
}

export function Certifications() {
  return (
    <section>
      <h2 className="text-2xl font-bold font-display mb-4 py-2 px-4 bg-gray-900 text-white rounded-lg shadow-md uppercase tracking-wide">
        Certifications
      </h2>
      <div className="space-y-3">
        {certificationsData.map((cert, index) => (
          <div key={index}>
            <h3 className="font-bold font-display">{`${index + 1}. ${cert.title}`}</h3>
            <p className="text-gray-600 mt-0.5">{cert.period}</p>
            {(cert.issuer || cert.license) && (
              <p className="text-gray-500 text-sm leading-relaxed mt-0.5">
                {cert.issuer && `${cert.issuer} `}
                {cert.license && `(${cert.licenseLabel || 'License'}: ${cert.license})`}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export const certificationsData: CertificationProps[] = [
  {
    title: "AWS Security Speciality SCS-C01",
    period: "(06/2020 - 06/2023)",
    issuer: "Amazon Web Services, USA",
    license: "31EMYHZCM21QQG59"
  },
  {
    title: "AWS Certified Developer Associate DVA-C02",
    period: "(08/2020 - 08/2023)",
    issuer: "Amazon Web Services USA",
    license: "6HGFNE21FJRQ1JKM"
  },
  {
    title: "AWS Certified SysOps Administrator Associate SOA-C01",
    period: "(09/2020 - 09/2023)",
    issuer: "Amazon Web Services, USA",
    license: "6HGFNE21FJRQ1JKM"
  },
  {
    title: "AWS Solutions Architect Associate SAAC01",
    period: "(02/2020 - 02/2023)",
    issuer: "Amazon Web Services, USA",
    license: "76KY3TD1HBQQ143"
  },
  {
    title: "ISC2 Certified Cloud Security Professional",
    period: "(01/2023 - 12/2025)",
    license: "841568",
    licenseLabel: "Certificate Number"
  },
  {
    title: "Certified Data Privacy Solutions Engineer™ (CPDSE)",
    period: "(08/2022 - 07/2025)"
  },
  {
    title: "Project Management Professional (PMP)®",
    period: "(01/2023 - 01/2026)",
    license: "3416286",
    licenseLabel: "PMP Number"
  },
  {
    title: "Offensive Security Certified Professional",
    period: "(07/2013 - 06/2015)"
  },
  {
    title: "ISACA Certified Information Security Manager (CISM)",
    period: "(12/2020 - 02/2023)"
  }
]; 