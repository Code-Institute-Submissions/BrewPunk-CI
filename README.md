# BrewPunk-CI
MS2. Project Code Institute - Brewdog Homebrew Recipes + Homebrew Calculators 
<img src="assets/img/amiResponsiveBrewPunk.png" style="margin: 0;">


Milestone 2 Project: Code Institute: BrewPunk-CI

A Site developed for MS2 Project in Code Institute. The site consists of 3 pages. Index/Brew Calculator/Contact.
Developed for Homebrewers using the PunkAPI to search for Brewdog Homebrew recipes based on IBU and ABV.
Card content is revealed for Selected Homebrew recipes. Card content can be revealed by selecting the arrow on each content card to reveal the ingredients needed to make the beers generated. Alcohol % is displayed clearly along with IBU for each beer generated based on the user selection from the slider values selected. Key ingredients such as MAlts/Hops and Yeast are displayed for the homebrewer to replicate their favourite Brewdog recipes.

Brewing calcuators for measuring alcohol content of your homebrew using the initial and final Gravity of your brew.
A priming sugar calcuator based on brew volume and Temperature with recommended C02 Volumes given based on style of beer.

A contact form for Contacting us using emailJS.
 
## UX

- This project gives a homebrew user access to Brewdogs selection of Homebrew recipes. The user can select a desired Alcohol content or Bitterness level and fetch appropriate homebrrew recipes based on values greater than selected. Card content reveals the beer name and IBU along with Mashing details and ingredients needed to replicate the beer. Sliders are used to Generate the ABV and IBU values on the main page.
- Brewing Calculators: -ABV - The user can use the ABV calculator that are developed for Homebrewing calculation of Alcohol % based on the initial Gravit and final Gravity of the beer. Input fields clearly marked with helper text and two buttons. One to calculate the ABV and the other to reset the fields. Number content can only be placed in the input fields. Red errors will appear if text is input in the ABV Calculator.
- Brewing Calculators: -Priming Sugar - The user can use the Priming sugar calculator that are developed for Homebrewing calculation of Priming sugar needed for bottlling based on the initial Volume and Temperatur of the beer. Input fields clearly marked with helper text and two buttons. One to calculate the Priming Sugar and the other to reset the fields. Number content can only be placed in the input fields. Red errors will appear if text is input in the Priming Calculator

- If a user is interestted in the services offered they can navigate to this via the navbar or a main button.
There is also a contact form available so they can either suggest a feature or enquire about services.
- In the contact form the user can provide the First Name, Lastname, reply Email and write a message and send.


Link to conceptual Wireframe:
- 

## Features

**Main Home Page** - Main Content Cards for Dublin Landmarks broken into sections with links to Each 360 image and website of the tourist atttraction.

**Brew Calculator Page** - Media Card landscape style listing main features available with associated FA Icons alternating in style.

**Contact Page** - Main Contact form for Contacting Dublin-360 with message and topic area
 
### Existing Features
- **Links to Sections** - Quick Navbar + Bottom right corner pop out links to Each Page. Also on Footer.
- **Reandom Beer Recipe Generated** - Featured Beer Recipe randomly generated on page refresh.
- **ABU Slider** - ABU slider operational to choose deisred Alcohol by volume %.
- **IBU Slider** - IBU slider operational to choose deisred Bitterness Level.
- **Get Recipe Buttons** - Each button links to Generated Card Content based on IBU and ABV selection levels. Data fetched from PunkAPI
- **Contact Form** - A way to send a suggestion  or send a generic message to us.
- **Footer Section** - Showcases Company Bio - Page links and Social media content
- **Social Media Links** - Links to all social media content in footer.
- **Made With Materialize** - Link in footer to Materialize framework Documentation



### Features Left to Implement
- Dropdown Menu to Select Beers after generated list from PUNKapi displayed.

## Technologies Used

- [Materialize](https://materializecss.com/about.html)
    - Built with Google Materialize framework. Created and designed by Google, Material Design is a design language that combines the classic principles of successful design along with innovation and technology. Google's goal is to develop a system of design that allows for a unified user experience across all their products on any platform.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation as part of Bootstrap Twitter framework.
- [PUNK APi](https://punkapi.com/documentation/v2)  Main API  used to fetch Homebrew Recipe Data from DIY DOG based on Brewdog Recipes.
    - Root Endpoint
    The root endpoint should prefix all resources and is only accessible over HTTPS. CORS is also enabled.

    https://api.punkapi.com/v2/

    - Rate Limits
    To make sure everyone can access the API reliably, each IP that makes a request has a rate limit of 3600 requests per hour.

    This works out at 1 req/sec. This is an initial figure, if the servers hold up I will definitely consider bumping this number.

    You can see what the rate limit is and how many requests are remaining by looking at the rate limit headers sent in the response.

- [Visual Studio Code](https://code.visualstudio.com/): Programming code editor created by Microsoft.

- [Github](https://github.) Hosting for software development version control using Git.
- [W3CMarkupValidation](https://validator.w3.org/) Tools to assess CSS and HTML validation.
- [Metatags](https://metatags.io/) Generation of Meta tag content for social media sharing and SEO.
- [GoogleFonts](https://fonts.google.com/) - font families from Google.
- [Material Icons](https://material.io/resources/icons/?style=baseline) - Material Design ICONS.
- [EmailJS](https://www.emailjs.com/) - Javascript library for sending of contact form Emails.

## Testing
**Viewports/Responsiveness**
http://ami.responsivedesign.is/  Used to Test site across multiple viewports:
Desktop
    1600x992px scaled down to scale(0.3181)
Laptop
    1280x802px scaled down to scale(0.277)
Tablet
    768x1024px scaled down to scale(0.219)
Mobile
    320x480px scaled down to scale(0.219) 

**Functional Testing**
Testing done on VSCode Using Live server.- Mobile responsiveness also tested live

- All page/card/footer links were tested to open in seperate window.
- Navigation Buttons and Navbar links tested to navigate to specific pages.
- Various screen sizes also tested from large screen to mobile.
- Scrollable categories tested for each section.
- Caclulator/Main page - stacking of elements on smaller screens.
- Navbar Hamburger menu showing on mobile.

1. Main/Index Page:
    1. Slide ABU slider to see if Get Recipe (yellow) button updates values - Get Recipes button Generates Media Cards with Brewdog recipes for all ABU > than the selected values of ABV %
    2. Slide IBU slider to see if Get Recipe (Red) button updates values - Get Recipes button Generates Media Cards with Brewdog recipes for all ABU > than the selected values of IBU Bitterness level
    3. Slide ABU slider & IBU slider to see if Get Recipe (Green) button updates values - Get Recipes button Generates Media Cards with Brewdog recipes for all ABU > & IBU > than the selected values of ABV + IBU combined.

2. Brew Calculator Page - ABV Calc:
    1. Add initial gravity and final gravity readings. Number content only. Text content generates red error
    2. Calculate ABV % generates correct Alcohol %age based on IG and FG readings.
    3. Reset ABV button generates alert and removes any values present on input fields and textarea
3. Brew Calculator Page - Priming Sugar Calc:
    1. Add initial volume of Beer in Gallons / Temperature of Beer and Volumes of C02 based on style table volumes. Number content only. Text content generates red error
    2. Dropdown menu for sugarType displays correctly and is fed into Priming sugar calculator. Switch case function used to selext Sugar Factor.
    3. Calculate Priming Sugar in Grams generates correct sugar volume based on chosen sugar type.
    4. Reset ABV button generates alert and removes any values present on input fields and textarea

4. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears ....TODO!
    3. Try to submit the form with an invalid email address type and verify that a relevant error appears
    4. Try to submit the form with all inputs valid and verify that a the form Success page message appears. email is sent to my personal email address.
 
**Media Queries**
Media Queries Break Screens smaller than 860px:
- Main Page Header Text reduces in size on smaller screens
- Materialize Framework handles many resizing of Rows and colums based on s/m factors chosen on page HTML.

**Issues**
- Current: Dropdown Menu of Beers not showing correctly on main page once content is fetched from API
- Resolved: Banner text was impeded display download of DIYDOg recipeds pdf. Media Query added to reduce text size.


## Deployment
Deployed using GitHub Pages accessed via the link below
 - https://dermomurphy.github.io/BrewPunk-CI/
 index.html is main content page - all other navigatable via this webpage

  **Process**
   1. Created a Github account at https://github.com My account: https://github.com/Dermomurphy

   2. Synced folder on local machine to Github Repo via VsCode: https://github.com/Dermomurphy/BrewPunk-CI

   3. To publish the project to see it on the web go to Settings on Repo , scroll down to the heading, GitHub Pages. Under the Source setting, Use drop-down menu to select master branch as a publishing source and save. Refreshed the github page, and you are then given a url where your page is published; The site is now published on gitHub pages at https://dermomurphy.github.io/BrewPunk-CI/

   4. To run this code on your local machine, you would go to my respository at https://github.com/Dermomurphy/BrewPunk-CI and on the home page on the right hand side just above all the files, you will see a green button that says, "Clone or download", this button will give you options to clone with HTTPS, open in desktop or download as a zip file. Then --> click the clipboard item to copy the Https address of the repo.
   Open Git Bash/Terminal: 
   CD the working directory to the location where you want the cloned directory to be made.you can use mkdir command to make a new directory, then cd into it.Type git clone, and then paste the URL: https://github.com/Dermomurphy/BrewPunk-CI.git Press Enter. The clone is created.
   For more information about the above process; https://help.github.com/en/github/using-git/which-remote-url-should-i-use

## Credits

### Content
- Main Text Written by Dermot Murphy
- Punk API for Generating endpoints based on DIY DOG data
- Google Fonts for font styles; https://fonts.google.com/
- Materialize CSS Framework
- W3schools.com: for code used on contact form page and implementation if necessary.[W3Schools](https://www.w3schools.com/)

### Media
- The photos used in this site were obtained  [Unsplash](https://unsplash.com/) + [DIY DOG](https://www.brewdog.com/uk/community/diy-dog)
- Main Images on Recipe Cards taken from PunkAPI.


### Acknowledgements
- PunkAPI - MAin API for generation of content
- https://www.brewersfriend.com/beer-priming-calculator/ - Aided in formula for generation of Priming sugar calculator

- Mentor Adegbenga Adeye:  for site layout inspiration, constructive advice. Github : https://github.com/deye9

- Code Institute : for instructional videos and Tutoring/support slack channel. https://codeinstitute.net/