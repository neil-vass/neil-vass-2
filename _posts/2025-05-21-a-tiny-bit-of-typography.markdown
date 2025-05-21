---
layout: default
title: A tiny bit of typography
date: 2025-05-21 17:34:46 +0100

social_description: "“How do I make this page of writing more readable” turned out to be a good question."

social_image: 
  src: /assets/images/double-posters-for-helvetica-the-movie.jpg
  mimetype: image/jpg
  width: 1302
  height: 877
  alt: "Two posters for Helvetica the movie. Left poster says Meet the cast, and has the whole uppercase alphabet. Then it says Now see the movie: Helvetica, a documentary film by Gary Hustwit. Right poster says Swiss Dots presents a documentary film by Gary Hustwit, and has the word Helvetica written twice, interlocking and spread over several lines."

---

As part of “[The story so far](../index.markdown#the-story-so-far)” I [learned just enough HTML and CSS](./2025-04-17-learning-just-enough-html-and-css.markdown) to know how to lay out text, images and other things on a page. This lets me change the default styling of <span class="times-new-roman">Times New Roman</span> text with close-together lines that run right up to the edge of the browser window into anything else I like. But I struggled a little with finding something I *did* like! 

Changing fonts, spacing and other things still left me feeling pages looked like walls of text or distractingly spaced out. Similar amounts of content on my main [neil-vass.com blog](https://neil-vass.com/) or [other sites](https://www.joshwcomeau.com/css/the-importance-of-learning-css/) look much more readable and inviting. This is a topic I’d like to get better at in general: how can I know what’ll look good, or what tweaks to try when I’m not happy with something? Since most of the content right now is text, that means learning a little typography. I know this is a huge topic so I don't expect to get expert in it, but since I’m starting from pretty much zero knowledge a little learning will make a big difference.

Here’s a few highlights from the things I looked into, maybe someone else will find them useful too?


A few online books
------------------

I see Robert Bringhurst’s [The Elements of Typographic Style](https://en.wikipedia.org/wiki/The_Elements_of_Typographic_Style) get mentioned again and again as an important reference for typography, and I’ve learned a lot from an online adaptation of it: [The Elements of Typographic Style, Applied to the Web](https://webtypography.net/) by Richard Rutter quotes lots of the principles from that book, and explores how they can be translated to CSS.

<figure>
  <img src="/assets/images/webtypography-homepage.png" width="100%"
  alt="Homepage of the site with 'The Elements of Typographic Style Applied to the Web' at the top right and more text on the bottom Left: 
  A practical guide to web typography,
  Read the Introduction,
  Table of Contents,
  Latest: 3.2.2 For abbreviations and acronyms in the midst of normal text, use spaced small caps"/>
  <figcaption></figcaption>
</figure>

I love the way some of the principles are phrased, with warnings such as “However common it may be, the use of titling figures in running text is illiterate: it spurns the truth of letters” ([3.2.1](https://webtypography.net/3.2.1)), and “A man who would letterspace lower case would steal sheep, Frederic Goudy liked to say” ([2.1.7](https://webtypography.net/2.1.7)).

There’s also plenty of interesting background on what some terms mean, and what options you have for working with these in CSS:
* “Ems are so-called because they are thought to approximate the size of an uppercase letter M (and so are pronounced emm), although 1 em is actually significantly larger than this.” ([2.1.1](http://webtypography.net/2.1.1)). This sent me down a Wikipedia [rabbit](https://en.m.wikipedia.org/wiki/Em_(typography)) [hole](https://en.m.wikipedia.org/wiki/Quad_(typography)).
* Discussing kerning — adjusting the spacing between specific letter pairs — it notes that “digital fonts have kerning tables built-in. These tables define which letter pairs need adjusting and by how much” ([2.1.8](http://webtypography.net/2.1.8)). I had no idea!
* “Leading (pronounced ‘ledding’) is so called because, in mechanical presses, strips of lead are placed between lines of type to space the lines apart.” ([2.2.1](http://webtypography.net/2.2.1)).


Another book I enjoyed: [Butterick’s Practical Typography](https://practicaltypography.com/), starting with its “[Typography in ten minutes](https://practicaltypography.com/typography-in-ten-minutes.html)” guide and then diving into lots more topics, from big-picture things like [who typography is for](https://practicaltypography.com/who-is-typography-for.html) to very specific details on things like how to set [line spacing](https://practicaltypography.com/line-spacing.html) (including a link to the author’s incredibly detailed [Stack Overflow answer](https://stackoverflow.com/questions/20695333/why-does-unitless-line-height-behave-differently-from-percentage-or-em-in-this-e/20818206#20818206) on why you should use no units for line-height in CSS).

I got lots more understanding about what makes page layout easy or harder to read, and got much happier with this site's layout after playing around with some ideas from it. In other places, I’m intrigued by very strong opinions on things I can initially barely spot the difference between — for example, the author says “I dislike Arial more than Comic Sans. Though it’s the undisputed king of the goofy fonts, Comic Sans is at least honest about what it is. But Arial is merely a bland, zero-calorie Helvetica substitute.”

<figure>
  <img src="/assets/images/arial-helvetica-comparison.svg" width="100%"
  alt="The same phrase written in Arial and Helvetica. These fonts look very similar to me, but you can see little differences when you look closely. The phrase is gothic fright refusal."/>
  <figcaption class="nudge-lower">Image from the “by the way” section of this <a href="https://practicaltypography.com/system-fonts.html">system fonts discussion</a>.</figcaption>
</figure>

This online book is an interesting experiment in the economics of the web: it's open publicly, but asks that you pay for it, and makes a compelling case for [why you should](https://practicaltypography.com/why-you-should-pay.html) and wrote about the financial results for the first few years. I’ve paid for it — I agree with lots of his points, and would like to see this kind of idea succeed.


Some things to watch
--------------------

After reading lots of strong opinions about font choices, when I found out there's a movie about Helvetica I just had to watch it.

<figure>
  <img src="/assets/images/double-posters-for-helvetica-the-movie.jpg" width="100%"
  alt="Two posters for Helvetica the movie. Left poster says Meet the cast, and has the whole uppercase alphabet. Then it says Now see the movie: Helvetica, a documentary film by Gary Hustwit. Right poster says Swiss Dots presents a documentary film by Gary Hustwit, and has the word Helvetica written twice, interlocking and spread over several lines."/>
  <figcaption>Posters image from <a href="https://www.hustwit.com/helvetica">Gary Hustwit‘s website</a>, which has lots of background on this film and links to rent or buy it.</figcaption>
</figure>

This was a fascinating look at how ubiquitous this font is — once you start looking out for it, it’s everywhere! — and at how all kinds of designers feel about this and other typefaces. A world I had no idea about.

For shorter videos that I really laughed at, you might like Elle Cordova’s “[Fonts hanging out](https://www.youtube.com/watch?v=j7SByXWWVzU)” and “[Punctuation marks hanging out](https://www.youtube.com/watch?v=ky0YOo7_Y0o)”.

And for some wider ideas about what’s possible with laying out web pages — especially useful once I get past this “just the article” stage and on to navigation, sidebars, and other complications — I found the Jen Simmons talk “[Everything You Know About Web Design Just Changed](https://www.youtube.com/watch?v=jBwBACbRuGY)” very helpful. It's from 2019 but I feel all caught up on the 30-ish years of web layout history up to that point, and a much better sense of what my options are with the dizzying range of CSS features I've been learning about. Jen has **a lot** of great talks [linked from her site](https://labs.jensimmons.com/).

<figure>
  <img src="/assets/images/jen-simmons-web-design.png" width="100%"
  alt="Toddlers fighting in a sandpit. One side says 'we need art!' and the other, 'it's the web!'."/>
  <figcaption>Recurring slide from the talk: for a long time, creative layouts only worked through hacks and workarounds. Things are much better now.</figcaption>
</figure>


So, did it help?
----------------

I started off with no styling at all, just what the browser gives you — and through reading, watching, and trying things out I’ve changed it into the site you’re looking at now. Want to see the difference?

<button class="stylesheet-toggle-button">Toggle stylesheet on/off</button>

[Butterick’s Practical Typography](https://practicaltypography.com/) in particular helped me understand what was making my paragraphs still look like walls of text or weirdly spaced out and got me to this setup I’m very happy with. I haven’t implemented all of that book’s advice — the author would still say my headings are too big, and be disappointed I haven’t gone and found a professional font to purchase for the site — I’ll keep playing and maybe come back to these. 

Another piece of advice I have, if you'd like to learn about making a site look good on a range of screen sizes: accidentally leave out the viewport meta tag, see your page looks rubbish on your phone, spend an hour reading docs and finding nothing works like you expect … then realize. I now have a nice page and a lot more knowledge of px, em, rem, ch, %, vw, fr, and more.

The next user-facing step will be to add more page elements around these blog posts, but first I’m going to look into something else. Writing bare HTML hasn’t been an enormous overhead so far, but it is getting a bit repetitive. And once there's more boilerplate like navigation that's the same on every page, it’ll be very annoying to add and keep updating everywhere as it evolves. Next time: some kind of templating system so I can make post writing be more about just the post content.

<script defer src="/assets/js/stylesheet-toggle.js"></script>