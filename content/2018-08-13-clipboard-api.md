---
title: "Copying text with the Clipboard() API"
description: "The successor of `execCommand()` has come and allows playing with the clipboard with ease (and promises)."
---

Activation code, share link, voucher... Copying content to the clipboard can come from many situations. Let's explore how to do it on the developer side with Vanilla JavaScript.

## The problem with `execCommand()`

The old school solution would be to use `execCommand()`. For that, you need an editable element to copy the content from (which means either an input or an HTML element with `contenteditable` attribute). Set the focus to this element and execute the "Copy" command.

```javascript
const element = document.querySelector('#element')
element.select()
document.execCommand('Copy')
```

Paste the content somewhere and it should do the job. This solution works but has drawbacks:

- If you don't have an proper editable element, you need to cheat by inserting and deleting a fake one,
- It's synchronous (which is ok for small bits of text),
- The permissions between browsers are not the same and may vary.

## The `Clipboard()` API

As you would guess, this is another way to copy content and it was indeed implemented to replace the use of `execCommand()` and to create a global and proper solution for clipboard interactions.

This API is asynchronous and thus returns a promise once called. Here is the basic implementation to copy text to the clipboard (note that this only works on pages secured by HTTPS):

```javascript
navigator.clipboard.writeText(text)
  .then(() => {
    console.log(`"${text}" was copied to the clipboard.`)
  })
  .catch(err => {
    console.error(`Error copying text to the clipboard: ${err}.`)
  })
```

To get access to the clipboard's content and paste it, you first need the user's permission. Then it's pretty similar:

```javascript
navigator.clipboard.readText()
  .then(text => {
    console.log(`Pasted text: ${text}.`)
  })
  .catch(err => {
    console.error(`Error pasting the clipboard's content: ${err}.`)
  })
```

Compared to `execCommand()`, this solution is a bit longer but I find it easier to read and the asynchronous part makes it painless to perform other tasks until the promise is resolved. You can see a [live version on CodePen](https://codepen.io/bellangerq/full/VBqOPG).

There's no doubts that new features will be coming to this new API along with a better browser support which is quite bad for now. You can learn [more about the Clipboard API here](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API) and about the included events with `ClipboardEvent`.
