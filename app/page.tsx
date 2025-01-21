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
              Human Resources
            </motion2.p>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.1}>
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p>Address: Berlin, 10367 Germany</p>
          <p>Phone: +4915778675538</p>
          <p>E-mail: rashmi1singh0@gmail.com</p>
          <p>WWW: www.linkedin.com/in/rashmi-singh-a83a15247</p>
        </AnimatedCard>

        <AnimatedCard delay={0.2}>
          <h2 className="text-2xl font-bold mb-4">Languages</h2>
          <ul>
            <li>English: Bilingual or Proficient (C2)</li>
            <li>Hindi: Bilingual or Proficient (C2)</li>
            <li>German: Elementary (A2)</li>
          </ul>
        </AnimatedCard>

        <AnimatedCard delay={0.3}>
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <ul className="list-disc pl-5">
            <li>Microsoft Office</li>
            <li>Document Management System (DMS)</li>
            <li>Human Resource Management System (HRMS)</li>
            <li>Payroll Management System</li>
            <li>HR Policy & Compliance</li>
            <li>Diversity and Inclusion</li>
            <li>Performance Management</li>
            <li>Employment Law</li>
            <li>Talent Acquisition</li>
            <li>Content Writing</li>
            <li>Customer Engagement & Satisfaction</li>
            <li>CRM software proficiency</li>
          </ul>
        </AnimatedCard>

        <AnimatedCard delay={0.4}>
          <h2 className="text-2xl font-bold mb-4">Work History</h2>
          <p className="mb-4">
            Experienced HR and Customer Relationship Manager with over 3 years of demonstrated success in customer
            support, team leadership, and human resources. Adept at mentoring team members, fostering a positive work
            environment, and enhancing customer satisfaction through effective communication and performance feedback.
            Skilled in managing competing priorities, resolving customer concerns, and delivering superior results. With
            a strong foundation in HR functions such as recruitment, training, employee engagement, and compliance, Aim
            to leverage expertise in both HR and customer relationship management to contribute to organizational
            growth, employee development, and operational excellence.
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">Customer Relationship Manager</h3>
            <p>B. M. Hyundai Pvt. Ltd., Gujarat, India</p>
            <p>2023-06 - 2023-10</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Led efforts to resolve customer complaints, ensuring timely and efficient vehicle servicing.</li>
              <li>Coordinated follow-up programs and scheduled appointments to improve customer satisfaction.</li>
              <li>
                Generated and analyzed monthly customer satisfaction reports, utilizing factory-generated surveys to
                assess service quality.
              </li>
              <li>
                Maintained detailed records of customer case histories, ensuring accurate documentation of service
                issues and their resolutions.
              </li>
              <li>Created engaging content for customer newsletters, strengthening brand loyalty and communication.</li>
              <li>
                Contributed to management meetings by sharing insights on customer service improvements and operational
                efficiency.
              </li>
              <li>Managed customer relations on ongoing basis to maximize customer retention.</li>
              <li>
                Managed a team of customer service representatives, providing coaching and guidance for improved
                performance.
              </li>
              <li>
                Directed 10-person team of customer service personnel while helping front-line team members work
                effectively with over 70 daily customers.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">Officer-Personnel & Administration</h3>
            <p>Galentic Pharma India Pvt. Ltd., Gujarat, India</p>
            <p>2021-04 - 2023-06</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Coordinated full recruitment process, from job interviews to onboarding of new employees.</li>
              <li>
                Administered training programs in accordance with company&aposs training calendar and kept detailed records
                of employee development.
              </li>
              <li>
                Managed payroll, including attendance, overtime, and leave administration, ensuring accuracy and
                compliance with internal policies.
              </li>
              <li>
                Maintained up-to-date HR records and documentation, including personal and training files for both staff
                and workmen.
              </li>
              <li>
                Supported government audits (US FDA, MHRA, Health Canada, ISO), ensuring compliance with HR policies and
                industry regulations.
              </li>
              <li>
                Assisted with HR MIS reporting, providing critical data to management on workforce performance and
                compliance.
              </li>
              <li>
                Provided administrative support in the absence of the P&A Officer and Supervisor, handling diverse HR
                activities as required.
              </li>
              <li>Improved department efficiency by streamlining and implementing policies and processes.</li>
              <li>Maintained strict adherence to industry regulations, minimizing risk exposure for organization.</li>
              <li>
                Coordinated cross-functional teams to address complex issues, leading to more efficient problem-solving
                processes.
              </li>
              <li>Frequently inspected production area to verify proper equipment operation.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Frontline Communication Officer (BPO)</h3>
            <p>Aquila Logisolutions LLP, Gujarat, India</p>
            <p>2020-10 - 2021-04</p>
            <ul className="list-disc pl-5 mt-2">
              <li>
                Conducted cold and warm calls to Australian clients to market and sell services, consistently meeting
                sales targets.
              </li>
              <li>
                Established rapport with customers through a professional and friendly communication style, improving
                customer retention.
              </li>
              <li>
                Developed and implemented effective telemarketing scripts that were adopted department-wide, boosting
                overall sales performance.
              </li>
              <li>
                Assisted in training new staff, ensured that new staff is equipped with the necessary skills to succeed
                in the role.
              </li>
              <li>
                Processed up to 500 customer calls per day, providing information, resolving issues, and driving sales.
              </li>
              <li>
                Analyzed data from communications campaigns to identify areas of improvement and make necessary
                adjustments for future success.
              </li>
              <li>
                Developed crisis communication plans to effectively address potential issues and maintain company
                reputation.
              </li>
            </ul>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.5}>
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">MBA: International Human Resources Management</h3>
            <p>International University of Applied Sciences - Berlin, Germany</p>
            <p>2023-10 - 2024-12</p>
            <p>Grade: 2.3 (German grading system)</p>
            <ul className="list-disc pl-5 mt-2">
              <li>
                Completed University-level Coursework: (Performance Management, International Marketing, Managerial
                Economics, Innovation and Entrepreneurship, Strategic Management, Leadership, Business Ethics and
                Corporate Governance, Operations and Information Management, Corporate Finance, Human Resource
                Management: Theory, Project: Human Resources Management, Talent Management & HR Development) from IU
                International University of Applied Sciences
              </li>
              <li>
                Thesis Statement: The Role of HR in Ensuring Compliance Across Jurisdictions in a Globalized Workplace
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">BBA: Human Resources Management</h3>
            <p>Marwadi University - Gujarat, India</p>
            <p>2017-04 - 2020-06</p>
            <p>GPA: 8.00 CGPA</p>
            <ul className="list-disc pl-5 mt-2">
              <li>
                A study on performance Appraisal Practices as a tool to improve employee performance in service sector,
                The report of the research has been titled as ―A Study on Performance Appraisal Practices as a Tool to
                Improve Employee Performance in Service Sector. The study was basically based on the study of overall
                employees performance appraisal. - Research Project
              </li>
            </ul>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.6}>
          <h2 className="text-2xl font-bold mb-4">Project</h2>
          <ul className="list-disc pl-5">
            <li>
              Gained hands-on experience across various departments, including Production, HR, Quality, Purchase, and
              Marketing, providing a comprehensive understanding of business operations.
            </li>
            <li>
              Contributed to multiple aspects of the company&aposs manufacturing processes, HR policies, quality control
              procedures, procurement practices, and marketing strategies., Austin Engineering Company Ltd., Completed
              2020
            </li>
            <li>MU Fest (annual cultural event), 2017 to 2020</li>
            <li>Member of Cultural Club</li>
            <li>The Role of HR in Ensuring Compliance Across Jurisdictions in a Globalized Workplace.</li>
          </ul>
        </AnimatedCard>

        <AnimatedCard delay={0.7}>
          <h2 className="text-2xl font-bold mb-4">Internship</h2>
          <p>Austin Engineering Company Ltd., Junagarh, Gujarat, 22 days</p>
          <p>The mentioned company deals in the manufacturing of various ball bearings.</p>
        </AnimatedCard>

        <AnimatedCard delay={0.8}>
          <h2 className="text-2xl font-bold mb-4">Phone numbers</h2>
          <p>+49 15778675538, +91 8789404733</p>
        </AnimatedCard>
      </div>
    </div>
  )
}

