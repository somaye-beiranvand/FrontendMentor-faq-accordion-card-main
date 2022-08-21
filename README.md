# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Links

- Solution URL: [solution URL on frontendmentor](https://www.frontendmentor.io/solutions/responsive-faqaccordioncard-using-jquery-and-bootsrtapcomponent-based-dz0liCk_dI)
- Live Site URL: [live site URL](https://somaye-beiranvand.github.io/faq-accordion-card-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [jquery](https://jquery.com/) - JS library
- [bootstrap](https://getbootstrap.com/) - For styles

### What I learned

```html
<!-- component::faq-item starts -->
<div class="sm-faq-item w-100">
  <div
    class="sm-faq-head d-flex justify-content-between align-items-center p-3 ps-0"
  >
    <span class="w-95 pe-1">How many team members can I invite</span>
    <img class="sm-down-icon" src="assets/images/icon-arrow-down.svg" alt="" />
  </div>
  <div class="sm-faq-body pt-2">
    You can invite up to 2 additional users on the Free plan. There is no limit
    on team members for the Premium plan.
  </div>
</div>
<!-- component::faq-item ends -->
```

```css
body {
  min-height: 100vh;
  background-image: linear-gradient(
    var(--sm-first-color),
    var(--sm-second-color)
  );
  background-repeat: no-repeat;
}
.sm-faq-img-desktop {
  width: 100%;
  height: 100%;
  position: relative;
  background: url(../images/illustration-woman-online-desktop.svg) -77px 38px
      no-repeat, url(../images/bg-pattern-desktop.svg) -383px -219px no-repeat;
  background-size: 120%, 200%;
  position: relative;
}
```

```js
$(".sm-faq-head").on("click", function () {
  $(this).children(".sm-down-icon").toggleClass("rotate");
});
```

### Useful resources

- [resource 1](https://www.w3schools.com/css/tryit.asp?filename=trycss3_background_multiple3) - This helped me learn how to use multiple background images for one element

## Author

- Frontend Mentor - [@somaye-beiranvand](https://www.frontendmentor.io/profile/somaye-beiranvand)
