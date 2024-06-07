const projectData = [
    {
        title: 'The House',
        details:
        {
            description: 'The House is my first development project, a text-based, interactive fiction horror game inspired by Anchorhead, where players are tasked to explore and uncover the mysteries of their new home. ' +
            'This game features puzzles, grotesque locations, witchcraft, and a variety of items to collect, each of which was lovingly drawn by Bug Karplus.',
            goals: 'With The House, I wanted to make something relatively easy to style that still took advantage of the things I had learned. I included page routing, state variables, login and registration, a database, and a whole lot of HTML. ' +
            'As is, this project only took a week, and for that, I am very proud of it.',
            development: 'I used Python with Flask to manage the front-end and routing. Every page is its own HTML file, each containing embedded links that direct to other pages. Data tracking is tied to a given user account, where items and certain task completion are stored in an SQL database. ' +
            'User passwords are securely stored using a hash. Styling was intentionally minimal, designed to feel creepy and old, like the house itself. Images were stored locally as part of the project. File structure was crucial for this project, since there are 48 different HTML files.',
            nextSteps: 'When I get the chance to go back to this project, there are so many things I want to try out. I had a great time with the writing, so I want to add more to the story. I want to make more puzzles too, either with existing items or with new ones. ' +
            'There\'s also a bunch of ideas I have using animations to make things creepier. The one I\'m most excited about is adding a glow around the cursor when the player is in the basement with the lighter. Adding sound effects would also be a lot of fun.'
        },
        imgs: [
            {
                img: '/src/assets/projectImgs/theHouse/textSm.png',
                alt: 'Gameplay'
            },
            {
                img: '/src/assets/projectImgs/theHouse/inventorySm.png',
                alt: 'Inventory Item'
            },
            {
                img: '/src/assets/projectImgs/theHouse/loginSm.png',
                alt: 'Log In'
            },
            {
                img: '/src/assets/projectImgs/theHouse/puzzleSm.png',
                alt: 'Puzzle'
            }
        ]
    },
    {
        title: 'Karplus Portfolio',
        details:
        {
            description: 'This React portfolio was my first project for a client. Working together through multiple design revisions was a new experience, and increased my ability to make changes on the fly. ' +
            'I\'m glad that this was my first professional experience, since the expectations were reasonable and timeline flexible for me, since I\'m still learning new things.',
            goals: 'The goal was to create a minimal website that showcased the artwork and provide contact info for anyone looking to reach out or learn more about the artist.' +
            'I worked together with the artist through a series of revisions, and I continue to actively update the site.',
            development: 'This was my first formal React project, and I\'ve really come to like JavaScript. I used CSS grid and flex to present images according to the number of photos, ' +
            'React Router for client side navigation across the different pages, and designed components that can adjust to any changes in data, be it additional works or additions to the CV.',
            nextSteps: 'With the next update, I want to add a way for the client to be able to add information to the site directly, without my involvement. Doing so is an absolute necessity for other customers going forward. ' +
            'There are a few ease of use changes I want to add as well, especially a way to switch between works without having to return to the selection page. Finally, I want to integrate a shop page, so people interested in purchasing ' +
            'the art can do so without going to a different site.'
        },
        imgs: [
            {
                img: '/src/assets/projectImgs/bPortfolio/homeSm.png',
                alt: 'Home Page'
            },
            {
                img: '/src/assets/projectImgs/bPortfolio/printsSm.png',
                alt: 'Prints'
            },
            {
                img: '/src/assets/projectImgs/bPortfolio/detailsSm.png',
                alt: 'Details'
            },
            {
                img: '/src/assets/projectImgs/bPortfolio/contactSm.png',
                alt: 'Contact Info'
            }
        ]
    },
    {
        title: 'Set',
        details:
        {
            description: 'Set is a React game is based on The Set® Card Game, which I love to play with friends and family whenever I get the opportunity. The reason for choosing this project was two-fold, it\'s something I\'m personally pasisonate about, ' +
            'and also an excellent way to gain experience managing variables and the algorithms that go with them. It is worth noting that this project is strictly that; I have no intentions on making money from this game, or am in any way trying to ' +
            'take credit for the idea. If you like my project, please consider checking out The Set® Card Game, owned by Set Enterprises, Inc., a part of PlayMonster LLC.',
            goals: 'My goal for this project was to make the cards customizable, which proved much more difficult than I was expecting. Players can change the card\'s shape, pattern, and color during the game without losing progress. ' + 
            'Games are also a great way to try and solve a variety of interesting design challenges, and this project certainly had a few.',
            development: 'To allow the player to customize the cards, I had to write the deck object to display the cards relative to 3 array indices of the user data. Each shape and pattern was custom made by me, all to work with a constant size viewbox in an SVG React component. ' +
            'I ended up using SVGs since they are the only format that can accept stroke and fill color values at runtime without the use of CSS filters. The shapes are stored as SVG <path> strings, the patterns as SVG <patterns> which inserted using JSX, and the colors in hex. ',
            nextSteps: 'As I have learned more about SVGs, I\'ve found them to be incredibly versatile, particularly relative to client inputs. But they are also kind of a pain, Safari has given me a lot of compatability issues that I am still working to resolve. ' +
            'Going forward, I want to add a multiplayer option so I can play online with my family and a database to store user customizations and game statistics.'
        },
        imgs: [
            {
                img: '/src/assets/projectImgs/set/boardSm.png',
                alt: 'Board'
            },
            {
                img: '/src/assets/projectImgs/set/howToSm.png',
                alt: 'How To Play'
            },
            {
                img: '/src/assets/projectImgs/set/customSm.png',
                alt: 'Customizations'
            },
            {
                img: '/src/assets/projectImgs/set/setSm.png',
                alt: 'Set!'
            }
        ]
    },
    {
        title: 'Mastermind',
        details:
        {
            description: 'Mastermind is a Vue game based on Mastermind, which came about because I tried it with my partner and got absolutely trounced. As you can tell, I really like to play and make games. ' +
            'I designed it as a way to practice, and inadvertently spent numerous hours playing since I finished making it. As with Set, I do not intend for this game to make money or replace the official version.',
            goals: 'The goal of this project was to give me a way to practice the game, since I started off so miserably at it. I also wanted it to have a short design time, since by this point I had already started working on this site. ' +
            'It ended up taking about two days. I also wanted to add customizable difficulty options (because why not?) and I\'ve still yet to solve any of the most challenging codes.',
            development: 'I styled the board so that the pegs maintained aspect-ratio upon any changes to the board\'s appearance. I wrote an algorithm that randomly generates a code based on the user preferences, so the game can be played entirely solo. ' +
            'I used CSS radial gradients to shade the pegs, using template literals to apply them through inline styling. All data was tracked using refs and computed variables, which are both a part of Vue.',
            nextSteps: 'Since this was a fast project with small goals, there aren\'t many things that I want to change. If anything, I would like to make the game more mobile friendly and further style to make it more exciting to look at.'
        },
        imgs: [
            {
                img: '/src/assets/projectImgs/mastermind/difficultSm.png',
                alt: 'Difficult Board'
            },
            {
                img: '/src/assets/projectImgs/mastermind/easySm.png',
                alt: 'Easy Board'
            },
            {
                img: '/src/assets/projectImgs/mastermind/winSm.png',
                alt: 'Win!'
            },
            {
                img: '/src/assets/projectImgs/mastermind/lossSm.png',
                alt: 'Loss'
            }
        ]
    },
    {
        title: 'Personal Portfolio',
        details:
        {
            description: 'The site you\'re on right now is a Vue based project to showcase my development capabilities as a collection of my other works, but also in itself. Because of this, I wanted it to be something really special. ' +
            'I had a difficult but incredibly fun time building this website, from the styling all the way to the JavaScript going on behind the scenes. I really hope you like it!',
            goals: 'My first goal for this project was to learn Vue, since I had no prior experience. I alse wanted this project to be something that I could use professionally while keeping the spirit and fun of the customizable design that I love. ' +
            'My styling inspirations were a combination of glowing neon signs and the colors of my personal VS Code theme of choice, Dark+. Although it took much longer than I would like to admit, this site is absolutely the project I\'m most proud of.',
            development: 'The Vue framework is my favorite that I\'ve used so far, including a variety of features without being overly complex. I used a number of different built-in directives (I like v-model the most) to track and display data from state and local objects. ' +
            'I created a composable that takes in gradient stop template refs so every SVG animates at the same time and with the same speed throughout the whole project. I designed two async functions to create the intro animation, which also use template refs, as well as an ' +
            'AbortController to skip and disable the animation and other effects. I used range inputs to allow adjustments to the many of the SVG effects, from animation speed to the spread of the blur. Each SVG has a specified maximum standard deviation, upon which the spread is based. ' +
            'The nav buttons scroll the page according to the given section relative to the window\'s current Y position.',
            nextSteps: 'Since this is my personal website, it\'s the one I will be updating most for the forseeable future. My first task will be to increase accessibility options, namely through the use of aria labels, but hopefully also to detect whether the user has any additional ' +
            'assistive devices or preferences and making adjustments to the effects accordingly. Since the animations are fairly complex, everything is displayed on a single page, and there are a number of different images to display, performance improvements are also a high priority. ' +
            'Please let me know if you have any other ideas, I\'m always up for making this site even cooler!'
        },
        imgs: [
            {
                img: '/src/assets/projectImgs/aPortfolio/endIntroSm.png',
                alt: 'Intro'
            },
            {
                img: '/src/assets/projectImgs/aPortfolio/optionsSm.png',
                alt: 'Options'
            },
            {
                img: '/src/assets/projectImgs/aPortfolio/fullScreenSm.png',
                alt: 'Image Modal'
            },
            {
                img: '/src/assets/projectImgs/aPortfolio/midIntroSm.png',
                alt: 'Mid Intro'
            },
        ]
    },
];

export default projectData;