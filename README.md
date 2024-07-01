# Personal Portfolio

A Vue website to showcase my development projects and compile my resume, contact information, and work experience. Because this project is a representation of me, I wanted it to be something really special. I had a difficult but incredibly fun time building this website, from the styling all the way to the JavaScript going on behind the scenes. I really hope you like it!

## Goals

My first goal for this project was to learn Vue, since I had no prior experience. I alse wanted this project to be something that I could use professionally while keeping the spirit and fun of the customizable design that I love. My styling inspirations were a combination of glowing neon signs and the colors of my personal VS Code theme of choice, Dark+. Although it took much longer than I would like to admit, this site is absolutely the project I'm most proud of.

## Development

The Vue framework is my favorite that I've used so far, including a variety of features without being overly complex. 
- I used a number of different built-in directives (I like v-model the most) to track and display data from state and local objects.
- I created a composable that takes in gradient stop template refs so every SVG animates at the same time and with the same speed throughout the whole project.
- I designed two async functions to create the intro animation, which also use template refs, as well as an AbortController to skip and disable the animation and other effects.
- I used range inputs to allow adjustments to the many of the SVG effects, from animation speed to the spread of the blur. Each SVG has a specified maximum standard deviation, upon which the spread is based.
- The nav buttons scroll the page according to the given section relative to the window's current Y position.

## Next Steps

Since this is my personal website, it's the one I will be updating most for the foreseeable future. My first task will be to increase accessibility options, namely through the use of aria labels, but hopefully also to detect whether the user has any additional assistive devices or preferences and making adjustments to the effects accordingly. Since the animations are fairly complex, everything is displayed on a single page, and there are a number of different images to display, performance improvements are also a high priority. Please let me know if you have any other ideas, I'm always up for making this site even cooler!