import React from "react";

import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import { NavBar } from './NavBar';
import { HomeWrapper, MainContent, Greeting, Hobbies, SocialLinks, Avatar} from './HomeStyledComponents';

const funFacts = [
    'React',
    'Redex',
    'Angular',
    'Vue'
]

const funFactsBuilder = (length = 4) => {
    const facts = funFacts.map(fact => ({ fact, randPos: Math.random() }))
        .sort((a, b) => a.randPos - b.randPos)
        .map(factObject => factObject.fact)
        .slice(0, length)
        .join(' | '); 
    return facts;
}

const SocialLink = (props) => (
    <a target="_blank" rel="noopener noreferrer" href={props.url}>
        {props.children}
    </a>
);

export const Home = () => (
    <HomeWrapper>
        <NavBar />
        <MainContent>
            <Avatar picture='images/yong.jpg' />
            <Greeting>Hi I am Yong</Greeting>
            <Hobbies>{funFactsBuilder()}</Hobbies>
            <SocialLinks>
                <SocialLink url='https://www.linkedin.com/in/yonghwan-kim-56111a191/'>
                    <LinkedInIcon style={{ fontSize: 40}} />
                </SocialLink>
                <SocialLink url='https://github.com/kyongh-Git'>
                    <GitHubIcon style={{ fontSize: 40}} />
                </SocialLink>
                <SocialLink url='https://www.facebook.com/yonghwan.kim.39'>
                    <FacebookIcon style={{ fontSize: 40}} />
                </SocialLink>
                <SocialLink url='https://www.instagram.com/yonghwan8446/'>
                    <InstagramIcon style={{ fontSize: 40}} />
                </SocialLink>
            </SocialLinks>
        </MainContent>
    </HomeWrapper>
);