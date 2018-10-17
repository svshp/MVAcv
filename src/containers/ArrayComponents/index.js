import AboutMe from '../../components/AboutMe';
import Experience from '../../components/Experience';
import Abilities from '../../components/Abilities';
import Projects from '../../components/Projects';

const ArrayComponents = () => {
    return (
        [
            {
                component: AboutMe,
                path: '/',
                title: 'ABOUT ME',
                auth: true
            },
            {
                component: Experience,
                path: '/experience',
                title: 'EXPERIENCE',
                auth: true
            },
            {
                component: Abilities,
                path: '/abilities',
                title: 'ABILITIES',
                auth: true
            },
            {
                component: Projects,
                path: '/projects',
                title: 'PROJECTS',
                auth: true
            }
        ]
    )
}

export default ArrayComponents();