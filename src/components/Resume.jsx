import React from "react";

import { NavBar } from './NavBar';
import { ResumeWrapper, MainContent, HeaderWrapper, Dates, Header, SubHeader, ResumeEntryWrapper, Description, SectionTitle} from './ResumeStyledComponents';

const resumeObject = {
    education: [
        { 
            header: 'Oklahoma State University', 
            subHeader: 'Master of Science in Computer Science', 
            dates: 'Jan 2021 - Dec 2022', 
            description: 
            <ul>
                <li>
                    Graduate Certificate in Big Data Analytics
                </li>
                <li>
                    Cumulative GPA: 3.82/4.0
                </li>
            </ul> 
        },
        { 
            header: 'Oklahoma State University', 
            subHeader: 'Bachelor of Science in Computer Science', 
            dates: 'Jan 2015 - Dec 2020', 
            description: 
            <ul>
                <li>
                    Minor in Management Science and Information Systems
                </li>
                <li>
                    Cumulative GPA: 3.62/4.0
                </li>
            </ul> 
        },
    ],
    work: [
        { 
            header: 'Oklahoma State University', 
            subHeader: 'Information Technology Technician - Graduate Research Assistant', 
            dates: 'Jan 2021 - Dec 2022', 
            description: 
            <ul>
                <li>
                    Programmed microservices using JavaScript and Google Apps Script to improve office efficiency by 95%.
                </li>
                <li>
                    Facilitated data integration and migrated a legacy system to a cloud-based system to update and modernize the office system.
                </li>
            </ul> 
        },
        { 
            header: 'Land Traffic Control, LLC', 
            subHeader: 'Software Developer Intern', 
            dates: 'May 2022 - Aug 2022', 
            description: 
            <ul>
                <li>
                    Designed application programming interfaces following the clean architecture using .NET EntityFramework to create specific features requested by clients.
                </li>
                <li>
                    Implemented efficient algorithms and clean legible code to assist in the maintenance and improvement of the existing software.
                </li>
                <li>
                    Attended semiweekly Scrum team meetings to maintain team communication and report progress.
                </li>
            </ul> 
        },
        { 
            header: 'Oklahoma State University', 
            subHeader: 'Information Technology Technician - Student Worker', 
            dates: 'Mar 2019 - Dec 2020', 
            description:
            <ul>
                <li>
                    Developed automations to improve the speed of the generation of invoices by 56% utilizing Java and Excel.
                </li>
                <li>
                    Designed a program to read student ID card information to charge the required student fee utilizing C#.
                </li>
                <li>
                    Repaired and upgraded office hardware, software, and operating systems to reduce problems and optimize network performance.
                </li> 
            </ul>  
        },
        { 
            header: 'Republic of Korea Army', 
            subHeader: 'C4I System, Network Engineer', 
            dates: 'Aug 2016 - May 2018', 
            description: 
            <ul>
                <li>
                    Maintained portable military field servers running in UNIX operating systems, requiring knowledge of network concepts such as switching, router, and trunk distribution units.
                </li>
                <li>
                    Participated in the world’s largest computerized command and control implementation exercise, Ulchi-Freedom Guardian (UFG), a combined military exercise between South Korea and the United States.
                </li>
            </ul> 
        },
    ],
    certification: [
        { 
            header: 'Google Cloud Digital Leader', 
            subHeader: 'Google', 
            dates: 'Issued Nov 2022 - Expires Nov 2025', 
            description: <p>
                Credential ID: 62555812 <br />
                <a href="https://www.credential.net/0ec4895c-37c8-4d6a-847a-11ad5a5a4b14" target="_blank" style={{color: 'black'}}>Credential URL</a>
            </p>
        },
        { 
            header: 'Developing Application with Google Cloud Specialization', 
            subHeader: 'Google Cloud Training: Coursera', 
            dates: 'Issued Sep 2022', 
            description: <p>
                Credential ID: 2TP6GWQ9T746 <br />
                <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/2TP6GWQ9T746" target="_blank" style={{color: 'black'}}>Credential URL</a>
            </p>
        },
        { 
            header: 'DevOps Engineer, SRE Specialization', 
            subHeader: 'Google Cloud Training: Coursera', 
            dates: 'Issued Aug 2022', 
            description: <p>
                Credential ID: ADZHC4WNAEXD <br />
                <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/ADZHC4WNAEXD" target="_blank" style={{color: 'black'}}>Credential URL</a>
            </p>
        },
        { 
            header: 'Machine Learning on Google Cloud Specialization', 
            subHeader: 'Google Cloud Training: Coursera', 
            dates: 'Issued June 2022', 
            description: <p>
                Credential ID: T68UZQ7FAB7J <br />
                <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/T68UZQ7FAB7J" target="_blank" style={{color: 'black'}}>Credential URL</a>
            </p>
        },
        { 
            header: 'Architecting with Google Kubernetes Engine Specialization', 
            subHeader: 'Google Cloud Training: Coursera', 
            dates: 'Issued Nov 2021', 
            description: <p>
                Credential ID: U4YQW6CGJWH2 <br />
                <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/U4YQW6CGJWH2" target="_blank" style={{color: 'black'}}>Credential URL</a>
            </p>
        },
        { 
            header: 'Preparing for Google Cloud Certification: Cloud DevOps Engineer Specialization', 
            subHeader: 'Google Cloud Training: Coursera', 
            dates: 'Issued Oct 2021', 
            description: <p>
                Credential ID: 5RP36MSX6X7A <br />
                <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/5RP36MSX6X7A" target="_blank" style={{color: 'black'}}>Credential URL</a>
            </p>
        },
    ]
};

const ResumeEntry = ({
    header = '',
    subHeader = '',
    dates = '',
    description = ''
}) => (
    <ResumeEntryWrapper>
        <HeaderWrapper>
            <Header>{header}</Header>
            <Dates>{dates}</Dates>
        </HeaderWrapper>
        <SubHeader>{subHeader}</SubHeader>
        <Description>{description}</Description>
    </ResumeEntryWrapper>
)

const resumeEntryBuilder = (entries) => (
    entries.map(entry =>
        <ResumeEntry
        header = {entry.header}
        subHeader = {entry.subHeader}
        dates = {entry.dates}
        description = {entry.description}
        ></ResumeEntry>)
)

export const Resume = () => (
    <ResumeWrapper>
        <NavBar/>
        <MainContent>
            <SectionTitle>Education</SectionTitle>
            {resumeEntryBuilder(resumeObject.education)}
            <SectionTitle>Related Experience</SectionTitle>
            {resumeEntryBuilder(resumeObject.work)}
            <SectionTitle>Certifications/Certificates</SectionTitle>
            {resumeEntryBuilder(resumeObject.certification)}
        </MainContent>
    </ResumeWrapper>
);