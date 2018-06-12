---
title: 'The input type isn’t an detail'
description: 'How a simple HTML attribute can degrade the user experience of your visitors.'
---

Have you ever experienced that before when you where browsing a website on your smartphone?

1. You’re reaching the login page and need to fill your email and password.
2. You’re starting with email in the first input and the nightmare begins.
3. Your beautiful email "john.doe@email.com" is transformed in an ugly "*John. Doe@email. Com*" or something like that.

**Because it is not a god damn email input type ⛔️**

Nothing’s more annoying than editing 30 times your email in order to log in. Add to this the problem of the spell checker who changes your words every time.

A text input instead of an email input means that the smartphone doesn’t know that he needs an email. It will result in 2 problems:

- The @ symbol doesn’t show up in the keyboard.
- The first letter will be a capital letter.
- If the field is required, it will not show a precise error message (*not only on mobile devices by the way*).

More generally, this can happen for every input type and the wrong attribute will lead into a degraded user experience, especially on mobile devices. The wrong keyboard is shown, the letter case can vary…

### How to solve this?

Just one simple thing. **Use. The. Good. Input. Type.**

Take 2 minutes to think about which data you want the user to put in the field? Do you need his professional email address? Or his surname? Or maybe the website of his company?

Then choose the right type attribute.

```html
<!-- You need his professional email address? -->
<input type='email'>

<!-- You need his surname? -->
<input type='text'>

<!-- You need the website of his company? -->
<input type='url'>
```

### New kids on the block

HTML5 brought many new input types that makes it easier to cover the different data we want the user to submit. No need for tricky JavaScript functions or something else: just use HTML5 functionalities.

In addition to the classic input types like email, password, text or radio ([you can see the full list here](http://www.w3schools.com/html/html_form_input_types.asp)), here are some of the new ones:

```html
<input type='color'>
<input type='range'>
<input type='week'>
<input type='month'>
```

*As W3schools mentions: "new input types that are not supported by older web browsers will behave as `<input type="text">`". Use them with attention and don’t forget to test them!*

The power of the web makes it easier for developer to code with new HTML5 features (*it’s just some among others*) so why not using them? The only aim is to create a better user experience. **It’s a simple detail for the developer but a huge improvement for people who are browsing your website. It can eliminate the frustration before signing up to your service or login to your app.**
