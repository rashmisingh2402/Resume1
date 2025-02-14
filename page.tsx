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
    <div className="min-h-screen bg-[url('/space-background.jpg')] bg-cover bg-center bg-fixed text-black p-8">
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
            <br />
            <motion2.p
              className="text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              📍 Berlin, Germany | 📞 +49 15778675538
            </motion2.p>
            <br />
            <a href="mailto:rashmi1singh0@gmail.com">E-mail: rashmi1singh0@gmail.com</a><br></br>
            <p> LinkedIn : <a href="https://www.linkedin.com/in/rashmi-singh-a83a15247/" className="text-blue-300 hover:underline">rashmisingh</a></p>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.1}>
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p>
            I am an experienced <b>Human Resources Professional and Customer Relationship Manager</b> with a strong foundation
            in <b>talent acquisition, employee engagement, compliance, payroll management, and HR operations.</b> My expertise
            spans across <b>European and Indian markets,</b> allowing me to navigate diverse workplace cultures, optimize HR
            functions, and implement <b>strategic workforce solutions.</b>
          </p>
          <p className="mt-4">
            With an <b>MBA in International Human Resources Management</b> from Berlin, I bring a <b>global perspective on HR
            strategies, employment law, diversity & inclusion, and business operations.</b> My passion lies in <b>creating
            positive work environments, enhancing employee satisfaction, and leveraging HR analytics to drive
            organizational growth.</b>
          </p>
          <p className="mt-4">
            Throughout my career, I have worked across industries such as <b>automotive, pharmaceuticals, and BPO</b>, gaining
            experience in <b>HR audits, regulatory compliance, workforce planning, and customer relations.</b> I thrive in
            dynamic environments where I can contribute to <b>employee well-being, leadership development, and operational
            efficiency.</b>
          </p>
        </AnimatedCard>

        <AnimatedCard delay={0.2}>
          <h2 className="text-2xl font-bold mb-4">Core Expertise</h2>
          <ul className="list-disc pl-5">
            <li><b>Human Resource Management & Organizational Development</b></li>
            <li><b>Talent Acquisition & Recruitment Strategy</b></li>
            <li><b>HR Policy Development & Compliance (EU & India)</b></li>
            <li><b>Payroll Management & HRIS/HRMS Systems</b></li>
            <li><b>Performance Management & Employee Development</b></li>
            <li><b>Diversity, Equity & Inclusion (DEI) Strategies</b></li>
            <li><b>HR Data Analytics & Workforce Planning</b></li>
            <li><b>HR Audit & Regulatory Compliance (US FDA, MHRA, ISO, Health Canada)</b></li>
            <li><b>Employee Engagement & Workplace Culture</b></li>
            <li><b>Leadership & Cross-functional Collaboration</b></li>
            <li><b>Customer Engagement & Public Relations</b></li>
          </ul>
        </AnimatedCard>

        <AnimatedCard delay={0.3}>
          <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Customer Relationship Manager</h3>
            <p>B. M. Hyundai Pvt. Ltd., Gujarat, India <i>(June 2023 – October 2023)</i></p>
            <p>As a <b>Customer Relationship Manager,</b> I was responsible for <b>enhancing customer engagement, resolving complaints, and leading service operations.</b> I played a pivotal role in <b>increasing customer satisfaction ratings, optimizing customer service workflows, and strengthening brand loyalty.</b></p>
            <p className="mt-2">Key Responsibilities & Achievements:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Customer Satisfaction & Quality Assurance:</li>
              <ul className="list-disc pl-5">
                <p> - <b>Increased customer satisfaction ratings from 50% to 74%</b>, achieving the highest &quot;Delighted Customer
                Services&quot; rating.</p>
                  
                
                <p> - Successfully <b>resolved 98% of customer complaints</b>, ensuring <b>prompt and efficient service recovery.</b></p>
                  
                <p> -  Maintained a <b>95% customer retention rate</b> through <b>proactive customer engagement strategies and
                follow-ups.</b>
                </p>
                 
              </ul>
              <li>Operational Efficiency & Case Management:</li>
              <ul className="list-disc pl-5">
               <p> - Managed and maintained <b>3,500+ detailed customer records in GDMS 2.0 software</b>, ensuring <b>accurate
               tracking of service issues and resolutions.</b></p>
                  
              
                <p>
                 - <b>Generated and analyzed monthly customer satisfaction reports,</b> identifying <b>key areas for service
                 improvement.</b>
                </p  >
              </ul>
              <li>Leadership & Team Development:</li>
              <ul className="list-disc pl-5">
                <p>
                  - <b>Led and mentored a 10-person customer service team,</b> improving <b>response times and service efficiency.</b>
                </p>
                <p>
                  - Developed <b>15+ customer engagement campaigns,</b> increasing <b>customer interactions by 25%</b> and strengthening
                  <b>brand loyalty.</b>
                </p>
              </ul>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Officer - Personnel & Administration</h3>
            <p>Galentic Pharma India Pvt. Ltd., Gujarat, India <i>(April 2021 – June 2023)</i></p>
            <p>As an <b>HR professional</b>, I was responsible for <b>full-cycle recruitment, workforce planning, payroll management, compliance audits, and employee training.</b> My contributions led to <b>record-low attrition rates, increased HR efficiency, and improved workforce compliance.</b></p>
            <p className="mt-2">Key Responsibilities & Achievements:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Talent Acquisition & Retention:</li>
              <ul className="list-disc pl-5">
                <p>
                   - Successfully <b>filled all vacant positions, reducing time-to-hire</b> and achieving a <b>record-low attrition
                   rate of less than 5%.</b>
                </p>
                <p>
                   - Led the <b>end-to-end recruitment process</b>, including <b>interviews, onboarding, and workforce integration.</b>
                </p>
              </ul>
              <li>Payroll & HRIS Management:</li>
              <ul className="list-disc pl-5">
                <p>
                   - Managed <b>payroll for 400+ employees</b>, ensuring <b>accurate salary disbursement, overtime calculation, and
                   leave administration</b>.
                </p>
                <p>
                   - Assisted in <b>HR audits (US FDA, MHRA, Health Canada, ISO)</b>, ensuring compliance with industry
                  regulations.
                </p>
              </ul>
              <li>HR Analytics & Workforce Planning:</li>
              <ul className="list-disc pl-5">
                <p>
                   - Developed <b>HR MIS reports</b>, optimizing <b>workforce planning, resource allocation, and cost reductions.</b>
                </p>
                <p>
                   - Streamlined <b>HR policies</b>, increasing <b>departmental efficiency by 30%</b> through <b>improved documentation and
                   automation.</b>
                </p>
              </ul>
              <li>Employee Training & Cross-Functional Collaboration:</li>
              <ul className="list-disc pl-5">
                <p> - Administered <b>corporate training programs</b>, ensuring <b>continuous professional development.</b></p>
                <p>
                   - Worked with <b>six cross-functional teams</b>, enhancing <b>HR problem-solving strategies and workforce
                   efficiency.</b>
                </p>
              </ul>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Frontline Communication Officer (BPO)</h3>
            <p>Aquila Logisolutions LLP, Gujarat, India <i>(October 2020 – April 2021)</i></p>
            <p>As a <b>Frontline Communication Officer</b>, I was responsible for <b>customer outreach, sales conversions, and relationship management</b> for <b>Australian clients</b>. My role involved <b>high-volume customer interactions, lead conversions, and performance optimisation</b>.</p>
            <p className="mt-2">Key Responsibilities & Achievements:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Sales Performance & Growth:</li>
              <ul className="list-disc pl-5">
                <p>
                   - Consistently <b>exceeded sales targets by 40%</b>, leveraging <b>strategic customer engagement techniques.</b>
                </p>
                <p> - <b>Processed up to 500 customer calls daily</b>, driving <b>lead generation and revenue growth.</b></p>
              </ul>
              <li>Customer Retention & Engagement:</li>
              <ul className="list-disc pl-5">
                <p>
                   - <b>Increased customer retention by 80%</b> through <b>personalized service strategies and proactive support.</b>
                </p>
              </ul>
              <p> - Process Improvement & Risk Mitigation:</p>
              <ul className="list-disc pl-5">
                <p> - <b>Developed 250+ crisis communication plans</b>, increasing <b>operational efficiency by 75%.</b></p>
                <p> - Designed and implemented <b>telemarketing scripts</b>, boosting <b>overall sales performance by 30%.</b></p>
              </ul>
              <li>Team Training & Leadership:</li>
              <ul className="list-disc pl-5">
                <p> - <b>Trained and mentored 10+ new hires</b>, equipping them with the <b>necessary skills for success.</b></p>
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
            <p>International University of Applied Sciences, Berlin, Germany <i>(October 2023 – December 2024)</i></p>
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
              <li><b>The Role of HR in Ensuring Compliance Across Jurisdictions in a Globalized Workplace</b></li>
              <li><b>The Intersection of Ethics Theory and Business Ethics: A Comprehensive Analysis</b></li>
              <li><b>Flexible Work Arrangements: Development of a Policy for Home Office & Office Days</b></li>
              <li><b>An exploration of supply chain dynamics within the fast fashion sector, comparing Zara, H&M, and
              Benetton, while emphasizing the roles of digitalisation and global growth</b>
              </li>
              <li><b>Active Sourcing at AGILLearn: Strategies, Implementation, and Performance Evaluation for Effective
              Talent Acquisition</b>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              Bachelor of Business Administration (BBA) – Human Resources Management
            </h3>
            <p>Marwadi University, Gujarat, India <i>(April 2017 – June 2020)</i></p>
            <p className="mt-2">Key Modules:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Human Resource Management & Organizational Behavior</li>
              <li>Change & Strategic Management</li>
              <li>Financial & Marketing Management</li>
              <li>Business Ethics & Corporate Governance</li>
            </ul>
            <p className="mt-2">Key Projects:</p>
            <ul className="list-disc pl-5 mt-2">
              <li><b>A Study on Performance Appraisal Practices in the Service Sector</b></li>
              <li><b>Smart City Project</b></li>
            </ul>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.5}>
          <h2 className="text-2xl font-bold mb-4">Internship Experience</h2>
          <h3 className="text-xl font-semibold">HR & Business Operations Intern</h3>
          <p>Austin Engineering Company Ltd., Gujarat, India <i>(2020)</i></p>
          <p className="mt-2">Key Responsibilities & Learnings:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Gained hands-on experience across <b>HR, Production, Quality Control, Procurement, and Marketing.</b></li>
            <li>Assisted in <b>HR policy development, workforce planning, and compliance audits.</b></li>
            <li>
              Contributed ideas and presentations on <b>efficiency improvement strategies</b> in manufacturing operations.
            </li>
          </ul>
        </AnimatedCard>

        <AnimatedCard delay={0.6}>
          <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
          <ul className="list-disc pl-5">
            <li><b>HR Systems & Software: HRMS, HRIS, ERP, DMS, SAP</b></li>
            <li><b>Payroll & HR Analytics: HR MIS reporting, Workforce Planning, Performance tracking</b></li>
            <li><b>Microsoft Office Suite: Excel (Advanced), Word, PowerPoint, Outlook</b></li>
            <li><b>Customer Engagement & Public Relations: GDMS 2.0, CRM software proficiency</b></li>
            <li><b>Creative Tools: Adobe Illustrator & Adobe After Effects</b></li>
          </ul>
        </AnimatedCard>

        <AnimatedCard delay={0.7}>
          <h2 className="text-2xl font-bold mb-4">Languages</h2>
          <ul className="list-disc pl-5">
            <li><b>English</b> – Bilingual Proficient (C2)</li>
            <li><b>Hindi</b> – Bilingual Proficient (C2)</li>
            <li><b>German</b> – Elementary (A2)</li>
          </ul>
        </AnimatedCard>

        <AnimatedCard delay={0.8}>
          <h2 className="text-2xl font-bold mb-4">Certifications & Extracurricular Activities</h2>
          <ul className="list-disc pl-5">
            <li>Active participation in <b>HR forums, business summits, and corporate networking events.</b></li>
            <li>
              Volunteered in <b>university cultural & leadership events (IIM Ahmedabad&apos;s Red Brick Summit, MU Fest, Chaos).</b>
            </li>
            <li>Passionate about <b>mentoring, leadership development, and personal well-being initiatives.</b></li>
            <li>Enthusiastic about <b>travelling, cross-cultural learning, and practising yoga for work-life balance.</b></li>
            <li>Competitive <b>volleyball player</b>, regularly participating in weekend tournaments and meet-ups.</li>
          </ul>
        </AnimatedCard>

        <AnimatedCard delay={0.9}>
          <h2 className="text-2xl font-bold mb-4">Awards & Recognitions</h2>
          <ul className="list-disc pl-5">
            <li>
              <b>Referral Certificate – Galentic Pharma India Pvt. Ltd.</b> <i>(April 2021 – June 2023)</i>
              <br />
              <a href="https://drive.google.com/file/d/1lbhSGnxP2uxXP8PVC1-9oVvVZTkjSgIp/view" className="text-blue-700 hover:underline">
                [View Certificate]
              </a>
            </li>
            <li>
              <b>Excellence in Attendance & Punctuality – Aquila Logisolutions LLP</b> <i>(October 2020 – April 2021)</i>
              <br />
              <a href="https://drive.google.com/file/d/135HfUnHB57qaEtM72pkqzTryt1H0jkPE/view" className="text-blue-700 hover:underline">
                [View Certificate]
              </a>
            </li>
            <li>
              <b>Appreciation Certificate – Austin Engineering Company Ltd. (Internship)</b> <i>(2020)</i>
              <br />
              <a href="https://drive.google.com/file/d/1cCLlQtV1lTpIXEjA6wMcV2VmlvfDmiOh/view" className="text-blue-700 hover:underline">
                [View Certificate]
              </a>
            </li>
          </ul>
        </AnimatedCard>
      </div>
    </div>
  )
}

