# RNMC Colors

A Color Palette generator web app to save your customized palettes and copy color codes in diverse formats.

Working example [here](https://renzomurinacadierno.github.io/React-RNMCRainbow/)

## Overview

A web app that allows you to create your own custom color palettes, name it and the colors inside of it. You can view it at any time, dynamically vary each color's luminosity and select HEX/RGB/RGBA formats of any added color to copy it to clipboard.

All palettes are saved to Local Storage, with makes them persist in browser while storage is not deleted. Colors can be re-ordered in creation-mode by drag-and-dropping them, you can customize both colors and palette's names, delete and add individual colors and palettes.

Material UI was the framework responsible for the styling, which I used to enhance breakpoints for each device size suggested there. ChromaJS and react-color libraries made working with colors way easier, and react-copy-to-clipboard aided with that functionality specified on its name. Array-move and react-sortable-hoc were utilized to add drag-and-drop mechanics to palette creation, and emoji-mart for the standard emoji picker solution add a finishing touch to palette names.

No user authentication or concrete global state management this time. This one is rather a fun app to test the aforementioned libraries and some JS logic out.

I have put this app together following Colt Steele's proposed project in his ["The Modern React Bootcamp (Hooks, Context, NextJS, Router)" Udemy course](https://www.udemy.com/course/modern-react-bootcamp/). Really fun and easy-to-follow course, very worth the time invested. I've definitely reinforced my react knowledge while learning some new concepts and tricks. I for sure recommend it with no doubts, it is evident that the instructor is passionate with what he does and the way he explains it. Props to him, a job very well done!

As for my other projects, please feel free to go to [my GitHub page](https://github.com/RenzoMurinaCadierno) to check them out. I am still on my learning tracks, so you will see new projects frequently. I specialize in Python and Javascript, and whatever I upload is normally related to web, game and app development, or Python scripting for multiple purposes.

## What can you do in this project?

- Navigate to each individual color palette.
- Copy colors there to clipboard by clicking on them.
- Change between color formats: HEX, RGB and RGBA.
- View 9 different luminosity variations on any selected color using the "MORE" option.
- Delete individual palettes.
- Create your own custom color palettes.
- While in this mode, drag and drop colors to reorder them, and delete them if you desire.
- Generate random colors and clear the whole palette in creation mode.

## Bugs

- While in creation mode, the random color generator takes any given color in all other available palettes that are not Material UI colors. If you happen to not have any other palette (deleting them all, for example), this functionality will be lost. This is because the random color generator bases its choices from the palette's array and does not allow repeated colors (to avoid id repetition, id is based on color's name).
- When dragging and dropping, sometimes margin between ColorBoxes mess up. I am not quite sure why this one happens, but I think it was to do with the way react-sortable-hoc treats components inside flexbox. Any ideas, please let me know.

## What I learned from this project

- Material UI is great, to say the least. Solutions are simple, design is convenient, it has many other libraries to aid to some extra functionality (like material-ui-form-validator, which I used), and extensive but clear docs. It proved a good framework alternative to Reactstrap if you are looking for something different. I still need to test some other solutions, the world is huge.
- Even though I've used Material UI to assist me on the task, I still took great time to add my own CSS rules throughout the whole project. I took great advantage of JSS, pushed by Material UI's withStyles HOC. I slowly but surely start feeling more confident with my CSS skills.
- Instead of trying to mash your head on the keyboard for days, sometimes it is best to use libraries to do the job for you, which is the reason I tackled this project. Drag and Drop and Copying to Clipboard may seem easy enough tasks to accomplish, but they can turn tedious when ou are working with multiple consecutive components. React-sortable-hoc and React-copy-to-clipboard were outstanding helpers.

### Thank you for taking your time to check this project out!
