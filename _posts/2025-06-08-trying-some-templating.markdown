---
layout: default
title: Trying some templating
date: 2025-06-08 09:36:21 +0100

social_description: "I’ve been hand-editing each post as an HTML file up till now, and can understand why that’s not a scalable choice. Time to try separating out some of the common and repetitive parts…"

social_image: 
  src: /assets/images/jekyll-logo.png
  mimetype: image/png
  width: 498
  height: 230
  alt: "The logo for Jekyll, a static site generator. Has the word Jekyll written in flowing handwriting, and a test tube with red liquid in it."

---

As part of “[The story so far](../index.markdown#the-story-so-far)” I [learned some HTML, CSS](./2025-04-17-learning-just-enough-html-and-css.markdown) and a [little typography](../_posts/2025-05-21-a-tiny-bit-of-typography.markdown), and I’m happy with how the posts are looking. But before writing too many more, I decided to look at whether a templating system would be useful.

Writing pages directly as HTML does work, but there’s lots of repetitive stuff — and as I change the site structure, I’ll need to go and change every page (if I want navigation across the top, sidebars or other things). 

I can imagine in a site where every page has different layout and features, sticking with that might be a good choice, but for a blog where I want to make lots of similar pages then some more separation of structure from content would be useful. 

There’s *lots* of options, but an obvious choice to try first is [Jekyll](https://jekyllrb.com/): it’s fairly well-liked, and I believe it’s already running in GitHub Pages as standard. 

<figure>
  <img src="/assets/images/jekyll-logo.png" width="70%"
  alt="The logo for Jekyll, a static site generator. Has the word Jekyll written in flowing handwriting, and a test tube with red liquid in it."/>
  <figcaption>Logo for the Jekyll project</figcaption>
</figure>

Some background
---------------

Like lots of web topics, I’ve heard bits and pieces of tech in this area but really haven’t been closely following things. Looking into current options can feel a bit like joining a conversation that’s been going on for 20 years. For static site generators (of which Jekyll is one), I very much appreciated this [SSGs through the ages](https://cloudcannon.com/blog/ssg-history-1-before-jekyll/) tour, filling me in on lots of missing context. The series starts with a Carl Sagan quote: “You have to know the past to understand the present.”

Jekyll started in 2008 and still seems popular today, partly because it’s been [built right into the easy-to-use GitHub Pages](https://github.blog/news-insights/the-library/github-pages/) from the start. There are a wide range of more modern choices but I don’t see an obvious winner … I’ll have a go with this and move to something else if any limitations annoy me. 

I like the idea of it because:
* If you give it normal HTML, CSS and JS that just leaves it untouched — that’s actually what GitHub pages is doing now — so I can still do as much tweaking and bespoke stuff as I like.
* You can write Markdown pages that are a lot simpler than HTML, they look just like plain text — these should be easier for me to write, fewer pointy brackets to get in the way.
* You can use “[front matter](https://jekyllrb.com/docs/front-matter/)” and [Liquid](https://jekyllrb.com/docs/liquid/) templating to separate out “common” things, like the nav bar and layout of every post, meaning you just write it once.


Getting started
---------------

GitHub have a [step by step guide for setting up Jekyll for GitHub Pages](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll). You need to [install Ruby](https://mac.install.guide/ruby/13), which I did using Homebrew and then set the `$PATH` to it.

The instructions say to install Bundler … but apparently [that’s part of Ruby’s standard library now](https://ruby-doc.org/3.0.5/stdlibs/bundler/Bundler.html), nothing to do here.

The next step, `gem install jekyll` hits an error: in compiling some C++, I get `fatal error: 'iostream' file not found`. Looks like [others have found C++ compiler issues](https://stackoverflow.com/questions/78999694/cant-compile-c-hello-world-with-clang-on-mac-sequoia-15-0-and-vs-code) after moving to MacOS Sequoia, that’s what I’m on … tried removing and reinstalling the XCode command line tools and now `gem install jekyll` works!

This got all sorted very quickly, but it wasn’t obvious. It‘s the kind of minor issue that comes up all the time in tech: the exact weird error I hit is because of the exact combo of versions of my OS and the things I’m installing. It’s not in the instructions because it wasn’t happening a few months ago, and if someone comes to try this in a few more months it might be a different minor hiccup. I used to get very stuck on things like this but I feel I’ve had a lot of practice now finding ways to navigate them. Don’t let things like this put you off trying stuff!

The instructions assume I’m starting from scratch: is there a way to turn my existing site into a Jekyll-powered one? I found the [perfect blog post to answer this question](https://www.dannygarside.co.uk/blog/How-to-add-a-Jekyll-blog-to-an-existing-github-pages-website/) from Danny Garside, and [thanked them on Mastodon](https://mastodon.me.uk/@neil_vass/114312301172972903).

Following that guide, I ran `jekyll new --skip-bundle --force .`, changed some config file values, and was ready to run the site locally: `bundle exec jekyll serve` makes the site available in a browser.

{% figure caption:"Formatted, autogenerated summary page of posts" %}
![Nicely laid out Posts page with my site name at the top, a link to a welcome to jekyll post that has a date, a link to the RSS feed.](/assets/images/welcome-to-jekyll.png){:width="100%"}
{% endfigure %}

It looks nice — a little too nice! The initial setup gives me a theme, and creates an automatic summary of all posts, with various navigation things. I decided to delete all these and go right back to basics.


Rewriting my HTML pages in Markdown
-----------------------------------

A good test of how much easier I’ll find this than writing bare HTML.

I’ve used Markdown for other things in the past, I’m a big fan of it.
* It was helpful to [read over the basics](https://daringfireball.net/projects/markdown/basics) again. 
* The [Markdown All In One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) VS Code extension makes editing it a really nice experience.
* And once I was happy with how to translate between HTML and Markdown, the [HTML to Markdown](https://marketplace.visualstudio.com/items?itemName=YangtangWu.html-to-markdown) extension lets me select and convert anything very easily.

Writing the content for a new post in VS Code is fine, I’m doing it now! And separating out the standard `_layout` works well, you can [see exactly what it’s doing](https://github.com/neil-vass/neil-vass-2/blob/main/_layouts/default.htm). 

Separating this out and rewriting the first page in Markdown looked fine locally, and then I pushed it into GitHub left the live site looking exactly the same. Perfect!


Getting images to work nicely
-----------------------------

I’ve been using `figure` and `figcaption` to caption my images, and can’t see a way to get Markdown to do that. I *could* use the HTML syntax every time I add an image, but is there an easier way?

There’s lots of additional features available as Ruby Gems — I found [jekyll-figure](https://github.com/paulrobertlloyd/jekyll-figure) does exactly what I want and it was easy to add to my site’s config. [Turn the paragraph setting off](https://github.com/paulrobertlloyd/jekyll-figure?tab=readme-ov-file#configuration) and it works perfectly.

Then, I made a lucky spot: the `{% raw %}{% highlight %}{% endraw %}` tag in jekyll for code highlighting uses a `figure` too, I accidentally started applying my image and caption styling to that.
* `figure:has(img)` lets me target just figures that have images.
* This is a fairly new CSS feature, and the “Can I use” site has [stats on how well it’s supported](https://caniuse.com/css-has).
* I’m not too practised on how to interpret those stats, but I got [helpful advice on Bluesky](https://bsky.app/profile/neil-vass.com/post/3lmmounziuc2q) and then found a lovely interactive [guide to evaluating browser support](https://www.joshwcomeau.com/css/browser-support/).

This worked great on my local machine, so I checked it into GitHub … and it failed horribly!

{% figure caption:"Build is failing" %}
![Messages from GitHub saying some checks were not successful. Pages build and deployment has failed.](/assets/images/failed-github.png){:width="100%"}
{% endfigure %}

After this anyone going to [neil-vass-2.com](https://neil-vass-2.com/) just gets a 404, it’d be great to not change anything in the live site on failed builds! Clicking to see the details on that failed step brings up a dauntingly big message.

{% figure caption:"That's a lot of words" %}
![Screenshot of the build error. A complicated looking run command with lots of command line switches, warnings about missing gems, and a liquid exception saying "unkown tag figure" on line 33.](/assets/images/github-build-error.png){:width="100%"}
{% endfigure %}

It says it can’t install a gem, and doesn’t recognize the `figure` tag I’m using. Ohh … there’s [a set of plugins in GitHub pages](https://pages.github.com/versions/), and this new one isn’t on there. But this error points to a solution: that link to https://jekyllrb.com/docs/continuous-integration/github-actions/ has a very easy guide to give me more control over things like this. Followed the steps and it’s working fine!


One more thing … relative links
-------------------------------

The files I write for each page have names like `2025-06-08-trying-some-templating.markdown`, and I’ve set Jekyll up to change that into a URL like `neil-vass-2.com/trying-some-templating/`. When I link from one page to another, I could just write the eventual URL, but I wanted to check if we can do something smarter. 

I found a helpful guide to [URLs and links in Jekyll](https://mademistakes.com/mastering-jekyll/how-to-link/) from Michael Rose — I’m sure I’ll come back to this, there’s a lot you can choose to do. For my current question, it recommended a [jekyll-relative-links](https://github.com/benbalter/jekyll-relative-links) plugin that works nicely. I can use `../relative.markdown` links when I write pages and they get converted to the right thing when the site builds.

Some **very** nice behaviour I’ve found: any heading you make in Markdown gets rendered with a helpful `id` you can use as an anchor to link directly to that section. And when you start typing `../`, VS Code completion offers you all the filenames at that location, then goes on to offer all the anchor links too. That’s such a good editing experience!

{% figure caption:"An example from writing this page" %}
![Screenshot of me typing a link in VS Code. I have written index dot markdown, then added a hash, and an autocomplete helper has popped up all the anchor links on that page.](/assets/images/relative-link-autocompleting.png){:width="100%"}
{% endfigure %}


Next time
---------

I’m very happy with Jekyll so far, it’s done just what I was looking for: let me separate out the common parts from my posts, and made page authoring much simpler. 

Next, I’ll use this separation to start adding more of the features I should have around the post content. Header, footer, and various other bits to make this more of a blog and not just individual pages. Should be fun.