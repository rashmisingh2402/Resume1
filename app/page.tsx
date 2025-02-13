"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { motion as motion2 } from "framer-motion"
import { useInView } from "react-intersection-observer"
import type { ReactNode } from "react"

interface AnimatedCardProps {
  children: ReactNode
  delay?: number
}

const AnimatedCard = ({ children, delay = 0 }: AnimatedCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion2.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 rounded-xl shadow-xl">{children}</Card>
    </motion2.div>
  )
}

export default function Resume() {
  return (
    <div className="min-h-screen bg-[url('/space-background.jpg')] bg-cover bg-center bg-fixed text-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <AnimatedCard>
          <div className="flex flex-col items-center mb-6">
            <Image
              src="/profile-picture.jpg"
              alt="Rashmi Singh"
              width={200}
              height={200}
              className="rounded-full mb-4"
            />
            <motion2.h1
              className="text-4xl font-bold"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Rashmi Singh
            </motion2.h1>
            <motion2.p
              className="text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              📍 Berlin, Germany | 📧 rashmi1singh0@gmail.com | 📞 +49 15778675538
            </motion2.p>
            <p>🔗 LinkedIn: www.linkedin.com/in/rashmi-singh-a83a15247</p>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.1}>
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p>
            I am an experienced Human Resources Professional and Customer Relationship Manager with a strong foundation
            in talent acquisition, employee engagement, compliance, payroll management, and HR operations. My expertise
            spans across European and Indian markets, allowing me to navigate diverse workplace cultures, optimize HR
            functions, and implement strategic workforce solutions.
          </p>
          <p className="mt-4">
            With an MBA in International Human Resources Management from Berlin, I bring a global perspective on HR
            strategies, employment law, diversity & inclusion, and business operations. My passion lies in creating
            positive work environments, enhancing employee satisfaction, and leveraging HR analytics to drive
            organizational growth.
          </p>
          <p className="mt-4">
            Throughout my career, I have worked across industries such as automotive, pharmaceuticals, and BPO, gaining
            experience in HR audits, regulatory compliance, workforce planning, and customer relations. I thrive in
            dynamic environments where I can contribute to employee well-being, leadership development, and operational
            efficiency.
          </p>
        </AnimatedCard>

        <AnimatedCard delay={0.2}>
          <h2 className="text-2xl font-bold mb-4">Core Expertise</h2>
          <ul className="list-disc pl-5">
            <li>Human Resource Management & Organizational Development</li>
            <li>Talent Acquisition & Recruitment Strategy</li>
            <li>HR Policy Development & Compliance (EU & India)</li>
            <li>Payroll Management & HRIS/HRMS Systems</li>
            <li>Performance Management & Employee Development</li>
            <li>Diversity, Equity & Inclusion (DEI) Strategies</li>
            <li>HR Data Analytics & Workforce Planning</li>
            <li>HR Audit & Regulatory Compliance (US FDA, MHRA, ISO, Health Canada)</li>
            <li>Employee Engagement & Workplace Culture</li>
            <li>Leadership & Cross-functional Collaboration</li>
            <li>Customer Engagement & Public Relations</li>
          </ul>
        </AnimatedCard>

        <AnimatedCard delay={0.3}>
          <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Customer Relationship Manager</h3>
            <p>B. M. Hyundai Pvt. Ltd., Gujarat, India (June 2023 – October 2023)</p>
            <p className="mt-2">Key Responsibilities & Achievements:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Customer Satisfaction & Quality Assurance:</li>
              <ul className="list-disc pl-5">
                <li>
                  Increased customer satisfaction ratings from 50% to 74%, achieving the highest &quot;Delighted Customer
                  Services&quot; rating.
                </li>
                <li>
                  Successfully resolved 98% of customer complaints, ensuring prompt and efficient service recovery.
                </li>
                <li>
                  Maintained a 95% customer retention rate through proactive customer engagement strategies and
                  follow-ups.
                </li>
              </ul>
              <li>Operational Efficiency & Case Management:</li>
              <ul className="list-disc pl-5">
                <li>
                  Managed and maintained 3,500+ detailed customer records in GDMS 2.0 software, ensuring accurate
                  tracking of service issues and resolutions.
                </li>
                <li>
                  Generated and analyzed monthly customer satisfaction reports, identifying key areas for service
                  improvement.
                </li>
              </ul>
              <li>Leadership & Team Development:</li>
              <ul className="list-disc pl-5">
                <li>
                  Led and mentored a 10-person customer service team, improving response times and service efficiency.
                </li>
                <li>
                  Developed 15+ customer engagement campaigns, increasing customer interactions by 25% and strengthening
                  brand loyalty.
                </li>
              </ul>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Officer - Personnel & Administration</h3>
            <p>Galentic Pharma India Pvt. Ltd., Gujarat, India (April 2021 – June 2023)</p>
            <p className="mt-2">Key Responsibilities & Achievements:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Talent Acquisition & Retention:</li>
              <ul className="list-disc pl-5">
                <li>
                  Successfully filled all vacant positions, reducing time-to-hire and achieving a record-low attrition
                  rate of less than 5%.
                </li>
                <li>
                  Led the end-to-end recruitment process, including interviews, onboarding, and workforce integration.
                </li>
              </ul>
              <li>Payroll & HRIS Management:</li>
              <ul className="list-disc pl-5">
                <li>
                  Managed payroll for 400+ employees, ensuring accurate salary disbursement, overtime calculation, and
                  leave administration.
                </li>
                <li>
                  Assisted in HR audits (US FDA, MHRA, Health Canada, ISO), ensuring compliance with industry
                  regulations.
                </li>
              </ul>
              <li>HR Analytics & Workforce Planning:</li>
              <ul className="list-disc pl-5">
                <li>
                  Developed HR MIS reports, optimizing workforce planning, resource allocation, and cost reductions.
                </li>
                <li>
                  Streamlined HR policies, increasing departmental efficiency by 30% through improved documentation and
                  automation.
                </li>
              </ul>
              <li>Employee Training & Cross-Functional Collaboration:</li>
              <ul className="list-disc pl-5">
                <li>Administered corporate training programs, ensuring continuous professional development.</li>
                <li>
                  Worked with six cross-functional teams, enhancing HR problem-solving strategies and workforce
                  efficiency.
                </li>
              </ul>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Frontline Communication Officer (BPO)</h3>
            <p>Aquila Logisolutions LLP, Gujarat, India (October 2020 – April 2021)</p>
            <p className="mt-2">Key Responsibilities & Achievements:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Sales Performance & Growth:</li>
              <ul className="list-disc pl-5">
                <li>
                  Consistently exceeded sales targets by 40%, leveraging strategic customer engagement techniques.
                </li>
                <li>Processed up to 500 customer calls daily, driving lead generation and revenue growth.</li>
              </ul>
              <li>Customer Retention & Engagement:</li>
              <ul className="list-disc pl-5">
                <li>
                  Increased customer retention by 80% through personalized service strategies and proactive support.
                </li>
              </ul>
              <li>Process Improvement & Risk Mitigation:</li>
              <ul className="list-disc pl-5">
                <li>Developed 250+ crisis communication plans, increasing operational efficiency by 75%.</li>
                <li>Designed and implemented telemarketing scripts, boosting overall sales performance by 30%.</li>
              </ul>
              <li>Team Training & Leadership:</li>
              <ul className="list-disc pl-5">
                <li>Trained and mentored 10+ new hires, equipping them with the necessary skills for success.</li>
              </ul>
            </ul>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.4}>
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">
              Master of Business Administration (MBA) – International Human Resources Management
            </h3>
            <p>International University of Applied Sciences, Berlin, Germany (October 2023 – December 2024)</p>
            <p className="mt-2">Key Modules:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Leadership & Strategic HRM</li>
              <li>Performance & Talent Management</li>
              <li>Business Ethics & Corporate Governance</li>
              <li>Innovation & Entrepreneurship</li>
              <li>International Marketing & Operations</li>
            </ul>
            <p className="mt-2">Key Projects:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>The Role of HR in Ensuring Compliance Across Jurisdictions in a Globalized Workplace</li>
              <li>The Intersection of Ethics Theory and Business Ethics: A Comprehensive Analysis</li>
              <li>Flexible Work Arrangements: Development of a Policy for Home Office & Office Days</li>
              <li>
                An exploration of supply chain dynamics within the fast fashion sector, comparing Zara, H&M, and
                Benetton, while emphasizing the roles of digitalisation and global growth
              </li>
              <li>
                Active Sourcing at AGILLearn: Strategies, Implementation, and Performance Evaluation for Effective
                Talent Acquisition
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              Bachelor of Business Administration (BBA) – Human Resources Management
            </h3>
            <p>Marwadi University, Gujarat, India (April 2017 – June 2020)</p>
            <p className="mt-2">Key Modules:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Human Resource Management & Organizational Behavior</li>
              <li>Change & Strategic Management</li>
              <li>Financial & Marketing Management</li>
              <li>Business Ethics & Corporate Governance</li>
            </ul>
            <p className="mt-2">Key Projects:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>A Study on Performance Appraisal Practices in the Service Sector</li>
              <li>Smart City Project</li>
            </ul>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.5}>
          <h2 className="text-2xl font-bold mb-4">Internship Experience</h2>
          <h3 className="text-xl font-semibold">HR & Business Operations Intern</h3>
          <p>Austin Engineering Company Ltd., Gujarat, India (2020)</p>
          <p className="mt-2">Key Responsibilities & Learnings:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Gained hands-on experience across HR, Production, Quality Control, Procurement, and Marketing.</li>
            <li>Assisted in HR policy development, workforce planning, and compliance audits.</li>
            <li>
              Contributed ideas and presentations on efficiency improvement strategies in manufacturing operations.
            </li>
          </ul>
        </AnimatedCard>

        <AnimatedCard delay={0.6}>
          <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
          <ul className="list-disc pl-5">
            <li>HR Systems & Software: HRMS, HRIS, ERP, DMS, SAP</li>
            <li>Payroll & HR Analytics: HR MIS reporting, Workforce Planning, Performance tracking</li>
            <li>Microsoft Office Suite: Excel (Advanced), Word, PowerPoint, Outlook</li>
            <li>Customer Engagement & Public Relations: GDMS 2.0, CRM software proficiency</li>
            <li>Creative Tools: Adobe Illustrator & Adobe After Effects</li>
          </ul>
        </AnimatedCard>

        <AnimatedCard delay={0.7}>
          <h2 className="text-2xl font-bold mb-4">Languages</h2>
          <ul className="list-disc pl-5">
            <li>English – Bilingual Proficient (C2)</li>
            <li>Hindi – Bilingual Proficient (C2)</li>
            <li>German – Elementary (A2)</li>
          </ul>
        </AnimatedCard>

        <AnimatedCard delay={0.8}>
          <h2 className="text-2xl font-bold mb-4">Certifications & Extracurricular Activities</h2>
          <ul className="list-disc pl-5">
            <li>Active participation in HR forums, business summits, and corporate networking events.</li>
            <li>
              Volunteered in university cultural & leadership events (IIM Ahmedabad&apos;s Red Brick Summit, MU Fest, Chaos).
            </li>
            <li>Passionate about mentoring, leadership development, and personal well-being initiatives.</li>
            <li>Enthusiastic about travelling, cross-cultural learning, and practising yoga for work-life balance.</li>
            <li>Competitive volleyball player, regularly participating in weekend tournaments and meet-ups.</li>
          </ul>
        </AnimatedCard>

        <AnimatedCard delay={0.9}>
          <h2 className="text-2xl font-bold mb-4">Awards & Recognitions</h2>
          <ul className="list-disc pl-5">
            <li>
              Referral Certificate – Galentic Pharma India Pvt. Ltd. (April 2021 – June 2023)
              <br />
              <a href="https://drive.google.com/file/d/1lbhSGnxP2uxXP8PVC1-9oVvVZTkjSgIp/view" className="text-blue-300 hover:underline">
                [View Certificate – PDF/Image Link]
              </a>
            </li>
            <li>
              Excellence in Attendance & Punctuality – Aquila Logisolutions LLP (October 2020 – April 2021)
              <br />
              <a href="https://drive.google.com/file/d/135HfUnHB57qaEtM72pkqzTryt1H0jkPE/view" className="text-blue-300 hover:underline">
                [View Certificate – PDF/Image Link]
              </a>
            </li>
            <li>
              Appreciation Certificate – Austin Engineering Company Ltd. (Internship) (2020)
              <br />
              <a href="" className="text-blue-300 hover:underline">
                [View Certificate – PDF/Image Link]
              </a>
            </li>
          </ul>
        </AnimatedCard>
      </div>
    </div>
  )
}

