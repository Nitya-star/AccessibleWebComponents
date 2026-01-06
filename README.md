# Accessible Web Components using HTML, CSS & JavaScript

This project includes a collection of accessible and responsive web components built using HTML, CSS, and JavaScript. It features basic UI elements, a small portfolio page, and a few JavaScript exercises. The goal was to practice writing clean, semantic code while learning how to make web pages more user‑friendly and accessible.

## Overview

Accessible Web Components is a multi-part front-end project that highlights the creation of user-friendly, accessible interfaces. It includes:
* A set of HTML & CSS components built with semantic structure
* A responsive portfolio and resume page
* JavaScript exercises demonstrating core scripting logic
This project emphasizes accessibility, layout techniques, and modern front-end development fundamentals.

## Demo

This project includes three main screenshots, one for each part of the assignment:
* **Part 1:** A screenshot showing the final HTML & CSS components (table, navigation bar, and login form).
![Part 1 HTML & CSS Components Created](./testing/Chrome.png)
* **Part 2:** A screenshot of the completed portfolio/resume page layout.
![Part 2 Portfolio/Resume Page Layout](./testing/Part2Chrome.png)
* **Part 3:** A screenshot showing the JavaScript exercises and their outputs.
![Part 3 JavaScript Programming Exercises](./testing/Part3Chrome.png)
All additional screenshots, including cross-browser testing results and color contrast checks, are organized in the [testing.md](testing/testing.md) document for easy review.

## Purpose

This project was completed as part of COIS 2430 - Web Development: Front-End at Trent University. The goal was to practice building accessible interfaces, applying semantic HTML, and demonstrating foundational JavaScript logic. Each part of the project reinforces different aspects of front-end development, including layout, styling, accessibility, and scripting.

## Features

This project is divided into three major parts, each focusing on a different aspect of front-end development:
1. **HTML & CSS Components**
   * **Web Table:** Fully accessible table with proper semantic makeup and custom styling.
   * **Navigation Bar:** A Flexbox-based, responsive navigation menu featuring hover and visited link states.
   * **Login Form:** A centered, modal-style login form built with Flexbox/Grid, applying selector-based styling.
2. **Portfolio & Resume Page**
   * Semantic HTML5 structure with clear content hierarchy.
   * Layout built using CSS Flexbox, Grid, and Box Model principles.
   * Use of CSS Custom Properties, animations, and pseudo-elements for enhanced design.
   * Responsive design through media queries for different screen sizes.
   * Accessible color palette and contrast testing.
3. **JavaScript Core Scripting**
   * **Leap Year Checker:** Determines whether a given year is a leap year.
   * **Pyramid Builder:** Creates a text-based pyramid structure dynamically.
   * **Title Case Converter:** Formats a string so each word begins with a capital letter.

## Problems Faced

* **Using Different Fonts and Icons:** I initially had trouble importing and applying multiple fonts consistently across the project. Adding the right and wrong icons also required experimenting with different methods.
* **Working With Pseudo-Classes:** Pseudo-classes like `:nth-of-type` and similar selectors were confusing in the beginning because they behave differently depending on the structure of the HTML.
* **Learning CSS Grid Template Areas:** Setting up the resume layout using `grid-template-areas` took time because the syntax is strict and even small spacing mistakes caused the layout to break. Mapping each section to the correct grid area required several adjustments.
* **Meeting WCAG Color Contrast Requirements:** Some of my original color choices didn't pass contrast checks. I had to test multiple combinations and adjust the palette to meet accessibility standards.
* **Building the Pyramid Logic in JavaScript:** The pyramid builder required nested loops, and aligning the characters correctly was challenging. I had to revise the logic a few times before the pyramid displayed in the correct shape.

## Key Decisions

* **Applying a CSS Reset for Consistency:** I decided to include a CSS reset file to remove the default styling applied by different browsers. This helped ensure that all components behaved consistently across all browsers.
* **Keeping Styles and Scripts in Separate Files:** Instead of writing CSS and JavaScript directly inside the HTML file, I placed all styling in `main.css` and all logic in `main.js`. This made the project more organized, easier to read, and aligned with good front-end development practices.
* **Using IDs Where Appropriate:** For elements that appeared only once on the page, I chose to use `id` selectors instead of adding unnecessary classes. This kept the HTML cleaner and made the CSS more direct and easier to manage.
* **Using `fr` and `em` Units for Better Responsiveness:** I used flexible units like `fr` in CSS Grid and `em` for spacing and text sizing. These units scale naturally on different screen sizes, which helped the layout work well on both desktop and mobile devices.

## Code Structure

The project is organized into five main folders:
1. **Part1 - HTML & CSS Components**
   * `index.html`: main page containing the components
   * `styles`
    * `main.css`: styling for layout and components
    * `reset.css`: CSS reset for consistent rendering
2. **Part1 - Demoshots**
   * Contains four screenshots demonstrating different views of Part 1
3. **Part2 - Portfolio & Resume Page**
   * `resume.html`: responsive portfolio/resume page
   * `styles`
    * `main.css`: styling for the portfolio/resume page layout
    * `reset.css`: CSS reset for consistent rendering
4. **Part3 - JavaScript Core Scripting**
   * `index.html`: page linking to JavaScript exercises
   * `scripts`
    * `main.js`: logic for leap year, pyramid builder, and title case converter
5. **testing**
   * Cross-browser validation screenshots for all three parts
   * Color contrast validation for Part 2

## Technical Skills Demonstrated

* **Programming Languages:** HTML5, CSS3, JavaScript
* **Front-End Concepts:** Semantic HTML, Responsive Design, Accessibility (WCAG), CSS Grid & Flexbox
* **Styling Techniques:** CSS Reset, Pseudo-classes (`:hover`, `:nth-of-type`), Custom Properties
* **JavaScript Logic:** Functions, Loops, Conditional Statements, String Manipulation (Title Case, Leap Year Checker, Pyramid Builder)
* **Accessibility Practices:** Color Contrast Validation, Semantic Structure, Icon Usage
* **Development Environment:** Visual Studio Code, Browser Developer Tools (Chrome, Firefox, Edge)

## Learnings

* **Understanding the Importance of Accessibility and Compatibility:** I learned how important it is to consider accessibility and usability for all types of users. This included checking color contrast, validating HTML, and making sure the layout worked consistently across different browsers. These steps helped me realize how many small details go into creating a reliable and user-friendly front-end.
* **Making Front-End More Interactive and Engaging:** I also learned that front-end design should be more than just plain text. Adding links, icons, and small visual cues makes the interface easier to navigate and more engaging for users. Even simple interactive elements can improve the overall experience.

## Improvements (Future Work)

* **Refining the Portfolio and Resume Layout:** I would like to improve the layout of my portfolio and resume pages by making the spacing, alignment, and visual hierarchy more polished. Using a clearer grid structure, stronger headings, and a better balance of text and visuals would help the layout look more modern and professional.
* **Modifying the Leap Year Checker for Reusability:** I plan to rewrite the leap year checker using a `foreach` loop so it can handle multiple years at once. This will make the logic more modular and reusable instead of checking a single year manually each time.