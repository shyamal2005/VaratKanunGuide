const lawsData = [
  {
    id: 1,
    law: "Domestic Violence Act, 2005",
    section: "Sections 3-12",
    summary: "Protects women from physical, emotional, and economic abuse within households.",
    category: "Women Rights",
    solutions: [
      "File complaint under Section 12 of DV Act",
      "Approach local police or Protection Officer",
      "Collect medical and evidence records"
    ],
    videos: [
      {
        title: "Domestic Violence Law Explained",
        link: "https://youtu.be/4rEVhmowT6M?si=KvhQJ4hJ79enxx6L",
        duration: "12:34",
        views: "1.2M",
        expert: "Adv. Priya Sharma"
      }
    ],
    documents: [
      {
        name: "DV Complaint Format",
        type: "PDF",
        size: "1.2MB",
        downloads: "45K"
      }
    ]
  },
  {
    id: 2,
    law: "Information Technology Act, 2000",
    section: "Sections 43, 66, 67",
    summary: "Deals with cyber crimes, hacking, data theft and online harassment.",
    category: "Cyber Crime",
    solutions: [
      "File complaint at cyber crime cell",
      "Preserve digital evidence and screenshots",
      "Approach IT Tribunal for compensation"
    ],
    videos: [
      {
        title: "Cyber Laws in India",
        link: "https://youtube.com/watch?v=xyz456",
        duration: "15:20",
        views: "850K",
        expert: "Adv. Rohan Patel"
      }
    ],
    documents: [
      {
        name: "Cyber Crime Complaint Template",
        type: "DOC",
        size: "0.8MB",
        downloads: "33K"
      }
    ]
  },
  {
    id: 3,
    law: "Consumer Protection Act, 2019",
    section: "Section 2(7)",
    summary: "Protects consumers from unfair trade practices and defective products.",
    category: "Consumer Rights",
    solutions: [
      "File complaint in Consumer Commission",
      "Send legal notice to company",
      "Claim compensation for deficiency"
    ],
    videos: [
      {
        title: "Consumer Rights Explained",
        link: "https://youtube.com/watch?v=def789",
        duration: "14:30",
        views: "2.3M",
        expert: "Adv. Neha Sinha"
      }
    ],
    documents: [
      {
        name: "Consumer Complaint Format",
        type: "PDF",
        size: "1.5MB",
        downloads: "78K"
      }
    ]
  },
  {
    id: 4,
    law: "Right to Information Act, 2005",
    section: "Sections 6–8",
    summary: "Empowers citizens to seek information from government bodies, promoting transparency and accountability.",
    category: "Fundamental Rights",
    solutions: [
      "File RTI application to PIO",
      "Wait 30 days for response",
      "File first appeal if no response"
    ],
    videos: [
      {
        title: "How to File RTI in India",
        link: "https://youtube.com/watch?v=ghi111",
        duration: "10:45",
        views: "1M",
        expert: "Adv. Karan Joshi"
      }
    ],
    documents: [
      {
        name: "RTI Application Sample",
        type: "PDF",
        size: "700KB",
        downloads: "30K"
      }
    ]
  },
  {
    id: 5,
    law: "Motor Vehicles Act, 2019",
    section: "Section 177-210",
    summary: "Regulates traffic laws, driving licenses, and penalties for road violations in India.",
    category: "Traffic Laws",
    solutions: [
      "Pay fines online via parivahan.gov.in",
      "Appeal against challan if wrongly issued",
      "Follow traffic safety guidelines"
    ],
    videos: [
      {
        title: "Traffic Laws & Penalties in India",
        link: "https://youtube.com/watch?v=jkl222",
        duration: "8:30",
        views: "950K",
        expert: "DSP Anil Verma"
      }
    ],
    documents: [
      {
        name: "Traffic Fine Chart 2024",
        type: "PDF",
        size: "1MB",
        downloads: "22K"
      }
    ]
  },
  {
    id: 6,
    law: "Indian Penal Code (IPC), 1860",
    section: "Sections 1–511",
    summary: "Defines crimes and punishments covering theft, assault, defamation, and other criminal offenses.",
    category: "Criminal Law",
    solutions: [
      "File FIR in nearest police station",
      "Seek legal counsel immediately",
      "Gather witness statements and evidence"
    ],
    videos: [
      {
        title: "Basics of IPC Explained",
        link: "https://youtube.com/watch?v=mno333",
        duration: "15:05",
        views: "3.1M",
        expert: "Justice R. K. Sharma"
      }
    ],
    documents: [
      {
        name: "IPC Sections Summary",
        type: "PDF",
        size: "2.1MB",
        downloads: "65K"
      }
    ]
  },
  {
    id: 7,
    law: "The Dowry Prohibition Act, 1961",
    section: "Sections 2–4",
    summary: "Prohibits giving or taking dowry during marriage and provides penalties for offenders.",
    category: "Women Rights",
    solutions: [
      "File complaint under Section 3 or 4",
      "Contact women's helpline number 181",
      "Seek support from NCW or NGO"
    ],
    videos: [
      {
        title: "Dowry Laws in India Explained",
        link: "https://youtube.com/watch?v=pqr444",
        duration: "11:50",
        views: "1.5M",
        expert: "Adv. Ritu Singh"
      }
    ],
    documents: [
      {
        name: "Dowry Complaint Form",
        type: "DOCX",
        size: "850KB",
        downloads: "19K"
      }
    ]
  },
  {
    id: 8,
    law: "Juvenile Justice Act, 2015",
    section: "Sections 4–21",
    summary: "Deals with care, protection, and legal procedures involving children in conflict with law.",
    category: "Child Rights",
    solutions: [
      "Report cases to Child Welfare Committee",
      "Ensure legal aid for the child",
      "Approach district child protection unit"
    ],
    videos: [
      {
        title: "Juvenile Justice System in India",
        link: "https://youtube.com/watch?v=stu555",
        duration: "13:10",
        views: "850K",
        expert: "Adv. Pooja Mehta"
      }
    ],
    documents: [
      {
        name: "Child Rights Handbook",
        type: "PDF",
        size: "1.8MB",
        downloads: "26K"
      }
    ]
  },
  {
    id: 9,
    law: "Sexual Harassment of Women at Workplace Act, 2013",
    section: "Sections 2–11",
    summary: "Ensures protection of women from harassment at workplace and establishes internal complaint committees.",
    category: "Women Rights",
    solutions: [
      "Report to Internal Complaints Committee",
      "File complaint within 3 months",
      "Approach Local Complaints Committee if no ICC"
    ],
    videos: [
      {
        title: "Workplace Harassment Laws in India",
        link: "https://youtube.com/watch?v=vwx666",
        duration: "12:00",
        views: "1.4M",
        expert: "Adv. Sunita Rao"
      }
    ],
    documents: [
      {
        name: "Complaint Format for Workplace Harassment",
        type: "PDF",
        size: "1MB",
        downloads: "41K"
      }
    ]
  },
  {
    id: 10,
    law: "The Environmental Protection Act, 1986",
    section: "Sections 3–12",
    summary: "Provides framework for protecting and improving the environment and controlling pollution.",
    category: "Environment Laws",
    solutions: [
      "File complaint with Pollution Control Board",
      "Report violations to National Green Tribunal",
      "Avoid single-use plastics"
    ],
    videos: [
      {
        title: "Environment Laws in India Explained",
        link: "https://youtube.com/watch?v=yza777",
        duration: "9:45",
        views: "700K",
        expert: "Env. Advocate Arjun Nair"
      }
    ],
    documents: [
      {
        name: "Environmental Law Handbook",
        type: "PDF",
        size: "2MB",
        downloads: "25K"
      }
    ]
  }
];

export default lawsData;
