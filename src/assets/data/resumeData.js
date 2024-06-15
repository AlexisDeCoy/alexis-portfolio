const resumeData = {
    skills: {
        languages: ['C++', 'CSS3', 'HTML5', 'Java', 'JavaScript ES5 & ES6', 'Python3', 'VBA'],
        frameworks: [
            'Ajax & APIs', 'Apache', 'Bcrypt', 'Bootstrap', 'Data-JPA', 'Express', 'Flask',
            'Gunicorn', 'Hibernate', 'JSP', 'jQuery', 'jQueryUI', 'Mongoose', 'Node', 'npm', 'npx', 'React',
            'Spring', 'Spring Boot', 'Tomcat', 'Vue', 'WSGI'
        ],
        databases: ['MongoDB', 'MySQL', 'NoSQL', 'SQLite'],
        tools: ['Amazon EC2', 'Box Model', 'Database Injection', 'Git', 'Lifecycle Hooks', 'MVC', 'Postman', 'Spring MVC', 'Spring Tools Suite']
    },
    projects: [
        {
            title: 'The House',
            role: 'Full Stack Developer',
            gitHub: 'https://github.com/AlexisDeCoy/theHouse/',
            link: 'n/a',
            description: 'Short, text-based narrative game with puzzle elements using Python3, Flask, and bcrypt',
            bullets: [
                "Created an SQL database using bcrypt with multiple many-to-many relationships to manage users, track completion for both puzzles and items, and secure passwords using a hash.",
                "Structured the Flask application using MVC convention to manage and track over 50 different files.",
                "Built 22 custom in-game items, each with unique functionality, that are accessed from the database and displayed in HTML using Jinja.",
                "Styled the project using CSS and Google Fonts to evoke an archaic, barren tone throughout the game, which includes an immersive link-based movement system."
            ]
        },
        {
            title: 'Karplus Portfolio Website',
            role: 'Front-End Developer',
            gitHub: 'https://github.com/AlexisDeCoy/bug-portfolio/',
            link: 'https://bugkarplus.com/',
            description: 'React website to showcase art and provide contact information for the client',
            bullets: [
                "Wrote multiple React components using flex and grid to display information and images for over 20 works across multiple media.",
                "Applied react-router-dom to allow url navigation between pages to be consistent and understandable across the site.",
                "Styled the CSS using a simple, minimalist design to focus user attention on the art and make the customer's information easily accessible.",
                "Deployed using Netlify, allowing modifications to the site to be built and updated automatically upon a change to the main GitHub branch."
            ]
        },
        {
            title: 'Set',
            role: 'Front-End Developer',
            gitHub: 'https://github.com/AlexisDeCoy/set/',
            link: 'https://stellular-conkies-38bd43.netlify.app/',
            description: 'Desktop game based on The Set® Card Game, featuring many customization options, written in React',
            bullets: [
                "Designed 18 SVG shapes and 9 SVG patterns that can be changed using path strings and JSX which are implemented in an SVG component with a consistent viewbox.",
                "Managed over 20 useState variables and props to preserve game progress and user customization options, including those for a miniature game embedded in the instructions.",
                "Applied useEffect, useCallback, and 17 other functions across 18 components to check card selections, update the deck, apply user customizations, and render pop-ups.",
                "Structured the deck object using array indices corresponding to the user data so that any changes to color, shape, or pattern can be made without any loss of game progress."
            ]
        },
        {
            title: 'Mastermind',
            role: 'Front-End Developer',
            gitHub: 'https://github.com/AlexisDeCoy/mastermind/',
            link: 'https://gregarious-cheesecake-3a9f7d.netlify.app/',
            description: 'Two-day Vue project based on the Mastermind game, where players must determine the randomly generated secret code',
            bullets: [
                "Styled the game board using computed Vue objects to preserve the circular appearance of each slot upon any changes to the user options.",
                "Created multiple v-model input options where users can change peg color, the number of guesses and color options, and length of the code, to increase or decrease difficulty.",
                "Added inline template literals to apply a radial gradient CSS background on each peg based on user selections, giving them a 3D appearance.",
                "Implemented v-if directives to conditionally render columns and pegs on the board, as determined by the player options."
            ]
        },
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
        }
    ],
    experience: [
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