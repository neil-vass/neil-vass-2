---
layout: default
title: Learning just enough HTML and CSS
date: 2025-04-17 14:49:45 +0100

social_description: "I've used CSS before but never well, and not for a long time. Here's some notes on me learning the very basics of modern CSS and web design."

social_image: 
  src: /assets/images/xkcd_1513_code_quality_3_panels.png
  mimetype: image/png
  width: 990
  height: 497
  alt: "Three panels of an XKCD comic. Two stick figures at a computer. First figure says: Keep in mind that i'm self-taught, so my code may be a little messy. Second figure says: Let me see, I'm sure it's fine... wow. This is like being in a house built by a child using nothing but a hatchet and a picture of a house. It's like a salad recipe written by a corporate lawyer using a phone autocorrect that only knew excel formulas."

---

As part of "[The story so far](../index.markdown#the-story-so-far)" I got [a one-page website served up](./2025-04-14-setting-up-github-pages.markdown), but it was very very basic - plain text, no styling and no pictures. Improving that needed me to do some learning of HTML (HyperText Markup Language, to structure the pages) and CSS (Cascading Style Sheets, to give presentation and styling to the pages). 

I've made up [3 types of learning](../types-of-learning.markdown) that I might need in setting up the website. For HTML, I don't think I need any of them: there's plenty of complicated HTML things I might get stuck on in future, but for these basic pages I can remember how it all works and it looks like not much has changed since the last time I wrote some. Done! 

CSS is a different story: For various reasons I've never used it much. Lots of the software I made as a developer was "thick client" desktop applications rather than web pages, and several sites I did work on used [Microsoft Web Forms](https://en.wikipedia.org/wiki/ASP.NET_Web_Forms) or similar tech that went out of their way to make it feel like you were developing a thick client - you might never see any CSS or have to understand what GET or POST was. When I did use CSS, often there was someone else on the team much more comfortable getting that set up for us to use, so I had more "careful tweaking" than thorough understanding. I find some languages and technologies easier to remember as they're similar to other things I know well, but CSS feels very unfamiliar and I forget it quickly after each use. So learning types 1 (I've forgotten what I knew) and 2 (I never knew it that well anyway) are much needed.

Another CSS challenge: it looks very different nowadays than when I last used it in earnest - for years, people joked about how hard it was to get some commonly-requested layouts working as expected. [This article](https://medium.com/@isaaclyman/8-css-gotchas-to-start-your-morning-off-right-c5daade0731d) is one example of many, many jokes on the web about how difficult CSS can be to use well. My "use it rarely, and never invest time in learning it deeply" approach definitely made it difficult for me to pick up - what did absolute and relative positioning mean? How did float and clear interact? However, I see CSS Flexbox and CSS Grid are different ways to solve some of the common layout confusions. This adds learning type 3 to my list (most of what I do know already is out of date). The full set! 

I've got **lots** to learn about this topic, bear with me...


<figure>
  <img src="/assets/images/xkcd_1513_code_quality.png" width="100%"
  alt="A 4 panel XKCD comic with two stick figures at a computer. 
  First figure says: Keep in mind that i'm self-taught, so my code may be a little messy. 
  Second figure says: Let me see, I'm sure it's fine... wow. This is like being in a house built by a child using nothing but a hatchet and a picture of a house. It's like a salad recipe written by a corporate lawyer using a phone autocorrect that only knew excel formulas. It's like someone took a transcript of a couple arguing at ikea and made random edits until it compiled without errors.
  First figure says: Okay, I'll read a style guide." />
  <figcaption>There's always a <a href="https://xkcd.com/1513/">relevant xkcd</a></figcaption>
</figure>


How I'm learning CSS
--------------------

I had a good look around and [The Odin Project](https://www.theodinproject.com/about) is the best site I've found for learning CSS. It's free to use and has very well-explained lessons - its [Foundation Path](https://www.theodinproject.com/paths/foundations/courses/foundations) gave great advice about setting yourself up for development. I've been very impressed with:
*   [Visual Studio Code](https://code.visualstudio.com/docs), a free IDE I've used for other programming but I can see it really shines for HTML and CSS authoring
*   [Emmet](https://emmet.io/) with lots of HTML and CSS helpers is built right into VS Code - and you can set up keyboard shortcuts for anything useful. I like to select text and wrap it in tags (like to make it a paragraph, or put it in a div) - I [set Opt-W to make that happen](https://stackoverflow.com/questions/40155875/how-can-i-do-tag-wrapping-in-visual-studio-code/48999397#48999397).
*   I added [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension to instantly see your changes in a browser
*  And [Axe Accessibility Linter](https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter) extension to let me know right away if I'm doing anything that'll make it harder for people with screen readers or other adaptations to use my site


I also appreciated The Odin Project's [guide to browser developer tools](https://www.theodinproject.com/lessons/foundations-inspecting-html-and-css) - when I first started with making web pages, many years ago, you got no hints at all from the browser about why your page was looking weird. When [a tool called Firebug](https://hacks.mozilla.org/2017/10/saying-goodbye-to-firebug/) was released it was magical - a first glimpse into what the browser was thinking. The dev tools built into browsers today are amazing, and I'm spending a bit of time learning to use them well.

The Odin Project gives a short intro to each topic, with some questions and challenges to check understanding, and then links on to lots of fun interactive explanations from around the web. This is perfect - if it's something I know or can grasp quickly I can keep moving, and for things I find hard I get lots of high-quality explanations and things to play with. Some highlights:

From [The Odin Project itself](https://www.theodinproject.com/lessons/foundations-landing-page): use everything you've learned so far to create a page that looks just like [this picture](https://cdn.statically.io/gh/TheOdinProject/curriculum/81a5d553f4073e593d23a6ab00d50eef8620796d/foundations/html_css/project/imgs/01.png).

<figure>
  <img src="/assets/images/odin-project-assignment.png" width="400" height="531" alt="Image of a landing page split into various coloured sections, with different text styles and images arranged in different places." />
  <figcaption>A good puzzle that follows from "make exactly this": what should the page look like as you resize the window? This lovely image doesn't say.</figcaption>
</figure>

Some interesting advice from the [Internetting is Hard](https://internetingishard.netlify.app/html-and-css/flexbox/index.html) series:

> *Remember that these flexbox properties are just a language that lets you tell browsers how to arrange a bunch of HTML elements. The hard part isn’t actually writing the HTML and CSS code, it’s figuring out, conceptually (on a piece of paper), the behavior of all the necessary boxes to create a given layout.*

And a very fun Flexbox challenge: [Flexbox Froggy](https://flexboxfroggy.com/)!

<figure>
  <img src="/assets/images/flexbox-froggy.png" width="600" height="295"
  alt="Flexbox froggy page saying Bring the frogs home one last time by using the CSS properties you've learned. A list of CSS properties and a box to enter the CSS for a pond. On the right, various frogs aren't sitting on the correct lily pads." />
  <figcaption>Can you get the frogs onto the correct lily pads?</figcaption>
</figure>


What's next?
------------

I'll carry on with CSS learning - there's piles more to do - but there's a related skill I need to be working on too. So far I've had lots of "make it look like this" practice. I've never been very good at "so, what *should* my page look like?". I sometimes feel like I'm changing properties at random until something OK-looking emerges. 

Next task: learn a bit more about how to choose layouts myself - starting with just how to make text readable.
