const resumeData = {
    skills: {
        languages: ['CSS', 'HTML', 'Java', 'JavaScript', 'Python', 'VBA'],
        frameworks: ['Bootstrap', 'Flask', 'jQuery', 'jQueryUI', 'React', 'Vue'],
        databases: ['MongoDB', 'MySQL', 'SQLite'],
        tools: ['Amazon EC2', 'Chrome DevTools', 'Git', 'Netlify', 'NPM', 'VS Code'],
        other: ['Agile/Scrum', 'CI/CD', 'Database Injection', 'MVC', 'Responsive Design', 'RESTful APIs', 'SVG']
    },
    projects: [
        {
            title: 'Personal Portfolio Website',
            role: 'Front-End Developer',
            gitHub: 'https://github.com/AlexisDeCoy/alexis-portfolio/',
            link: 'n/a',
            description: 'Vue website to compile my resume, contact information, and development projects, styled based on neon signs and the Dark+ theme for VS Code',
            bullets: [
                "Designed 7 website display options assigned to Vue refs to engage the user, which can be adjusted through v-model in an sliding component styled to look like CSS.",
                "Applied two async functions following an onMount hook to display an intro animation, all of which can be disabled through user input with an AbortController and breakpoints within each function.",
                "Developed 6 components with SVG gradient fills that can be animated with user specified speed and direction using a composable that takes template refs as arguments and cycles through colors for each gradient stop.",
                "Created an adjustable blur spread for all SVG elements that changes relative to an appropriate maximum standard deviation for each component, which can also be disabled entirely.",
                "Linked navigation buttons to corresponding section breaks relative to the y value of the window object, which updates upon changes to the display's orientation and changes appearance based on scroll position."
            ]
        },
        {
            title: 'Mastermind',
            role: 'Front-End Developer',
            gitHub: 'https://github.com/AlexisDeCoy/mastermind/',
            link: 'https://gregarious-cheesecake-3a9f7d.netlify.app/',
            description: 'Two-day Vue project based on the Mastermind game, where players must determine the randomly generated secret code',
            bullets: [
                "Created 5 ‘v-model’ input options where users can customize peg color, the number of guesses, color options, and secret code length, to adjust the difficulty and personalize their experience.",
                "Implemented inline template literals to apply a radial gradient CSS background to each peg based on user input for a 3D visual effect."
            ]
        },
        {
            title: 'Set',
            role: 'Front-End Developer',
            gitHub: 'https://github.com/AlexisDeCoy/set/',
            link: 'https://stellular-conkies-38bd43.netlify.app/',
            description: 'Desktop Chromium game based on The Set® Card Game, featuring many customization options, written in React',
            bullets: [
                "Created 18 SVG shapes and 9 SVG patterns using path strings and JSX in a React SVG component with a fixed viewbox to automatically update every card according to user preferences.",
                "Managed 20 ‘useState’ variables and props using useEffect, useCallback, and 17 other functions across 18 components to track card selections, game progress, user customizations, and dynamically rendered pop-ups.",
                "Structured the deck object using array indices corresponding to the user data allowing customizations to card color, shape, or pattern to be made without the loss of game progress."
            ]
        },
        {
            title: 'Karplus Portfolio Website',
            role: 'Front-End Developer',
            gitHub: 'https://github.com/AlexisDeCoy/bug-portfolio/',
            link: 'https://bugkarplus.com/',
            description: 'React website to showcase art and provide contact information for the client',
            bullets: [
                "Developed responsive React components using flex and grid to responsively present information and images for over 20 works across various browsers.",
                "Applied react-router-dom to establish a url navigation structure that is consistent and user-friendly across 25 pages.",
                "Deployed the application with Netlify, using CI/CD to automate builds upon changes to the GitHub repository."
            ]
        },
        {
            title: 'The House',
            role: 'Full Stack Developer',
            gitHub: 'https://github.com/AlexisDeCoy/theHouse/',
            link: 'n/a',
            description: 'Short, text-based narrative game with puzzle elements using Python, Flask, and bcrypt',
            bullets: [
                "Designed an SQL database using bcrypt encryption to securely manage hashed passwords and many-to-many relationships to track 5 puzzles, 22 collectible items, and 13 locations for each user.",
                "Structured the Flask application following MVC convention to organize over 50 distinct HTML, Python, and CSS files.",
                "Utilized Jinja templating to render game items and locations dynamically on the page according to backend user data."
            ]
        }
    ],
    experience: [
        {
            position: 'Home Improvement Contractor',
            company: 'Private Homeowner',
            city: 'Boulder',
            state: 'CO',
            yearStarted: 2023,
            yearEnded: 2024,
            bullets: [
                'Installed a porcelain and stone mosaic backsplash to the kitchen to make cleaning stains easier, prevent damage to the walls from any moisture, and add color to the space.',
                'Removed exsisting shiplap wall plank and drop ceiling paneling to allow for the reframing and drywall of the space, improving both functionality and appearance of the room.',
                'Organized and added shelving for the basement storage room and selling or donating furniture and other items that were not needed to increase available storage.',
                'Refreshed the backyard patio, including the repair of a fountain pump and compost of dead plant life, to make the communal outdoor space more functional and inviting.'
            ]
        },
        {
            position: 'Basement Renovation Contractor',
            company: 'Private Homeowner',
            city: 'Fort Collins',
            state: 'CO',
            yearStarted: 2023,
            yearEnded: 0,
            bullets: [
                'Supervised framing, drywall, flooring, tiling, and more to cost effectively complete the renovation in a timely fashion.',
                'Installed over 500 square feet of underlayment and LVT flooring, maintaining orientation throughout 5 different rooms to create a consistent decorative theme.',
                'Waterproofed, cut, and installed porcelain tile for a bathroom shower to meet all code specifications and requests of the customer.',
                'Designed and constructed two custom closets to maximize available space and increase usability for the storage of clothing and other items.'
            ]
        },
        {
            position: 'Budtender',
            company: 'Fresh Baked Boulder',
            city: 'Boulder',
            state: 'CO',
            yearStarted: 2021,
            yearEnded: 0,
            bullets: [
                'Managed 40+ customer interactions daily using a Marijuana Enforcement Tracking Reporting Compliance approved POS system to provide secure and reliable access to recreational marijuana.',
                'Memorized health, safety, and usage information for a rotating stock of 100+ products to provide accurate and affordable recommendations to local and international customers.',
                'Collaborated with 15 other team members to maintain a friendly and clean retail environment that complied with all necessary MED requirements surrounding the storage and distribution of marijuana resulting in a frequent and growing list of regular customers.'
            ]
        },
        {
            position: 'Wiring Technician',
            company: 'Avionics Specialists LLC.',
            city: 'Loveland',
            state: 'CO',
            yearStarted: 2018,
            yearEnded: 2020,
            bullets: [
                'Developed custom wiring diagrams using Microsoft Office and VBA for installation on 50+ private aircrafts.',
                'Manufactured sheet aluminum dashboards, brackets, and glove boxes using a variety of workshop tools to improve the quality of every installation.',
                'Interfaced avionics technologies from Garmin, Genesys and others using documentation to ensure stable instrumentation and meet all FAA regulated safety and redundancy requirements.'
            ]
        }
    ],
    education: [
        {
            school: 'Coding Dojo',
            degree: 'Full Stack Developer Certificate in Python, Java, and JavaScript',
            city: 'Online',
            state: '',
            yearStarted: 2022,
            yearEnded: 2023,
            coursework: 'Algorithms, HTML, CSS, MongoDB, and SQL'
        },
        {
            school: 'CU Boulder',
            degree: 'Computer Science & Philosophy',
            city: 'Boulder',
            state: 'CO',
            yearStarted: 2020,
            yearEnded: 2022,
            coursework: 'Boolean Logic, Data Structures, and C++'
        }
    ]
};

export default resumeData;