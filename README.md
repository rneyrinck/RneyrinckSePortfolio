# Portfolio

[Pre-bootcamp Portfolio](https://rneyrinck.github.io/Portfolio/)
[During-bootcamp Portfolio](https://rneyrinck.github.io/RneyrinckSePortfolio/)
[After-bootcamp Portfolio](https://rneyrinck.github.io/Portfolio-2022/)
# Project Description

Simple sleek web portfolio with an exploration in shades of blue and their contrast with neon greens. Classic stylisized cards go from simple single column in mobile to a carousel in tablet to a four by four grid in desktop. In the tablet and above breakpoint a picture of myself is included in the about section hero as well as changing the nav icon to display sections in nav bar instead of drop down. 

The site is designed to be updated and added on as I learn more things. The MVP is a functional website with a few solid jquery animations, nav page  links, and three solid viewports.

***edit - 4/19/2022***
The top three links display my first ever portfolio website, the portfolio for this readme page, and then my most recent, post-graduation, portfolio. 

## Project Schedule

## Day	Deliverable	Status
- [X] Day 1	Project Description	Incomplete
- [X] Day 1	Wireframes / Priority Matrix / Timeline	Incomplete
- [x] Day 3	Core Application Structure (HTML, CSS, etc.)	Incomplete
- [x] Day 4	MVP & Bug Fixes	Incomplete
- [x] Day 5	Final Touches	Incomplete
- [ ] Day 6	Present	Incomplete


## Inspiration:
- [really cool animations](https://caferati.me/)
- [mvp focused portfolio website](https://mattfarley.ca/)

## references for how-tos and used code snippets
- https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
- https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
- https://www.w3schools.com/jquery/eff_animate.asp
- https://api.jquery.com/animate/
- https://www.w3schools.com/tags/att_a_download.asp
- https://www.w3schools.com/howto/howto_js_media_queries.asp
-https://www.w3schools.com/jquery/eff_animate.asp
- https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
- https://developers.facebook.com/docs/messenger-platform/discovery/m-me-links/
- https://css-tricks.com/snippets/html/mailto-links/
- https://stackoverflow.com/questions/41267357/css-ease-in-and-out-on-hover
- 


## Scratchpad low fidelity ideas
  #### minimal website layout
  - landing page 
   - hamburger icon - (on page scroll to sections)
    - sections: 
     - about (quick bio, picture, experience, what i do)
     - projects (links to websites, hosted projects etc.) - thinking this could be simple box grid
     - contact & current job seeking status or collab status (like - currently searching a forever coding home, or i've got time to collab on projects!)

## Wireframes

- [x] [Mobile](https://s3.amazonaws.com/assets.mockflow.com/app/wireframepro/company/C29ef791ead3348f9a9c8a387dfefb66b/projects/McU09yYtpnb/pages/fb6e774339954d88a7dd2315d47dcd01/image/fb6e774339954d88a7dd2315d47dcd01.png?1643046566743)
- [x] [Tablet](https://s3.amazonaws.com/assets.mockflow.com/app/wireframepro/company/C29ef791ead3348f9a9c8a387dfefb66b/projects/McU09yYtpnb/pages/fb6e774339954d88a7dd2315d47dcd01/image/fb6e774339954d88a7dd2315d47dcd01.png?1643046566743)
- [x] [Desktop](https://s3.amazonaws.com/assets.mockflow.com/app/wireframepro/company/C29ef791ead3348f9a9c8a387dfefb66b/projects/McU09yYtpnb/pages/fb6e774339954d88a7dd2315d47dcd01/image/fb6e774339954d88a7dd2315d47dcd01.png?1643046566743)


# MVP/PostMVP - 5min

Mobile version complete with scaling grid columns going from single in mobile, double in tablet, triple in desktop.


## MVP
- [x] html & grid layout responsive with \/\/ project card spacing
- [x] project card grid single, double, triple column
- [x] hamburger Icon jquery animation
- [x] javascript menu navigation to section of page
- [x] colors, font, links, image - style

| Component | Priority | Estimated Time |	Actual Time |
|-----------|----------|----------------|-------------|
|grid layout|	H        |	1hr           | 6hr          |
|3 viewpoint|	H        |	1hr           | 3hr          |
|Hamburger  |	H        |	1hr           | 4hr          |
|Jquery nav |	H        |	2hr           | 1hr          |
|nav locomot|	H        |	1hr           | 1hr          |
|style      |	H        |	1hr           | 3hr          |
|html       |	H        |	1hr           | 3hr          |
|Total	    | H	       |  8hrs	        | 21hrs

## Additional Libraries
Use this section to list all supporting libraries and thier role in the project. -->


## post MVP
- [x] social link animation
- [N/A] tablet carousel project cards
- [N/A] interest page 
- [x] mouse hover increases font size for links 
- [x] find more features to animate(give the page a bit of juice)

## Code Snippet
Use this section to include a brief code snippet of functionality that you are proud of an a brief description

```$("#hamburger").click(function () {
          // $(this).hide();
          // $(".dropdown-menu").toggle();  
          $('div.dropdown-menu').animate({
            easing:'swing',
            height: 'toggle',
            left: '+=50',
          },500,function(){
        });
      })
      ```

