import React from 'react'
import {FaFacebook, FaTwitter, FaLinkedin, FaBehance, FaHome, FaTeamspeak, FaFolder, FaCalendar, FaFile} from 'react-icons/fa'

export const links = [
    {
        id: 1, 
        url: '/',
        text: 'home',
        icon: <FaHome />
    },
    {
        id: 2, 
        url: '/team',
        text: 'Team',
        icon: <FaTeamspeak />
    },
    {
        id: 3, 
        url: '/project',
        text: 'Projects',
        icon: <FaFolder />
    },
    {
        id: 4,
        url: '/calender',
        text: 'calender',
        icon:<FaCalendar />
    },
    {
        id: 5, 
        url: '/document',
        text: 'document',
        icon:<FaFile />
    },
]

export const social = [
    {
        id: 1, 
        url: 'https://www.facebook.com/',
        icon: <FaFacebook />
    },
    {
        id: 2, 
        url: 'https://twitter.com/',
        icon: <FaTwitter />
    },
    {
        id: 3, 
        url: 'https://www.linkedin.com/',
        icon: <FaLinkedin />
    },
    {
        id: 4, 
        url: 'https://www.behance.net/',
        icon: <FaBehance />
    }

]
