import React from "react";

import { NavBar } from './NavBar';
import { ResumeWrapper, MainContent, HeaderWrapper, Dates, Header, SubHeader, ResumeEntryWrapper, Description, SectionTitle } from './ResumeStyledComponents';

const resumeObject = {
    education: [
        { 
            header: 'Oklahoma State University', 
            subHeader: 'Master of Science in Computer Science', 
            dates: '2021-2022', 
            description: 
            <ul>
                <li>
                    Graduate Certificate in Big Data Analytics
                </li>
                <li>
                    Cumulative GPA: 3.78/4.0
                </li>
            </ul> 
        },
        { 
            header: 'Oklahoma State University', 
            subHeader: 'Bachelor of Science in Computer Science', 
            dates: '2015-2020', 
            description: 
            <ul>
                <li>
                    Minor in Management Science and Information Systems
                </li>
                <li>
                    GPA: 3.62/4.0
                </li>
            </ul> 
        },
    ],
    work: [
        { 
            header: 'Land Traffic Control, LLC', 
            subHeader: 'Software Developer Intern', 
            dates: 'May 2022 - Present', 
            description: 
            <ul>
                <li>
                    Working with the team to build APIs based on specifications and end-user requirements using .Net EntityFramework
                </li>
                <li>
                    Improving back-end software following the clean architecture and MVC structure
                </li>
            </ul> 
        },
        { 
            header: 'Office of International Students & Scholars', 
            subHeader: 'Graduate Research Assistant', 
            dates: 'January 2021 - Present', 
            description:
            <ul>
                <li>
                    Programmed forms using MachForm and installed features using JavaScript and Google Script
                </li>
                <li>
                    Maintained the ISS websites. Developed programs that can shorten the work process using Java, C#
                </li>
            </ul>  
        },
        { 
            header: 'Office of International Students & Scholars', 
            subHeader: 'IT Technician (Student Worker)', 
            dates: 'March 2019 - December 2020', 
            description: 
            <ul>
                <li>
                    Generated and analyzed reports regarding student’s data utilizing Excel
                </li>
                <li>
                    Repaired and upgraded office hardware, software, and operating system problems
                </li>
            </ul> 
        },
        { 
            header: 'Republic of Korea Army', 
            subHeader: 'C4I Technician', 
            dates: 'August 2016 - May 2018', 
            description: 
            <ul>
                <li>
                    Assembled and maintained portable military field servers running in UNIX operating systems, requiring knowledge on network concepts such as switching, router, and trunk distribution units. The main goal was to provide a stable network to receive accurate field information.
                </li>
                <li>
                    Participated in the world’s largest computerized command and control implementation exercise, Ulchi-Freedom Guardian (UFG), a combined military exercise between South Korea and the United States.
                </li>
            </ul> 
        },
    ],
    certification: [
        { 
            header: 'Oklahoma State University', 
            subHeader: 'Master of Science in Computer Science', 
            dates: '2021-2022', 
            description: 
            <ul>
                <li>
                    Graduate Certificate in Big Data Analytics
                </li>
                <li>
                    Cumulative GPA: 3.78/4.0
                </li>
            </ul> 
        },
        { 
            header: 'Oklahoma State University', 
            subHeader: 'Bachelor of Science in Computer Science', 
            dates: '2015-2020', 
            description: 
            <ul>
                <li>
                    Minor in Management Science and Information Systems
                </li>
                <li>
                    GPA: 3.62/4.0
                </li>
            </ul> 
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
        <NavBar style="color:black;"/>
        <MainContent>
            <SectionTitle>Education</SectionTitle>
            {resumeEntryBuilder(resumeObject.education)}
            <SectionTitle>Work Experience</SectionTitle>
            {resumeEntryBuilder(resumeObject.work)}
            <SectionTitle>Certification</SectionTitle>
            {resumeEntryBuilder(resumeObject.certification)}
        </MainContent>
    </ResumeWrapper>
);