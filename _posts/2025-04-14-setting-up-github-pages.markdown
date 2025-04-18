---
layout: default
title: Setting up GitHub pages
date: 2025-04-14 16:02:00 +0100
---

As part of "[The story so far](../index.markdown#the-story-so-far)" I was looking for a  way to get one static page at the [neil-vass-2.com domain I registered](./2025-04-14-registering-a-domain-name.markdown), so you can see "Hello, World!" when you go to that URL. What's an easy way to do that?

Web pages are written using hypertext markup language (HTML), but you don't need any HTML for something this simple - a text file with those words in it would work fine. Looking at that in a web browser's inspector tools show that the basic HTML wrapping gets assumed.

{% figure caption:"Looking at a plain text file on my local machine with [VS Code's Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)." %}
![Screenshot of a web page showing a Hello, World message. The browser address is 127.0.0.1. The browser dev tools are open and show the Hello World text wrapped in HTML and body tags.](/assets/images/hello-world-plain-text.png){:width="100%"}
{% endfigure %}



To serve that page up to any browser that asks for it, [GitHub pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages) looks straightforward. I'm already used to keeping files for any kind of work in GitHub to keep it backed up, shareable, and get version history, so I'd expect to put the files for this website in there. I haven't used GitHub pages before, but from a quick look:
*   Can put HTML, CSS and JS files in a repo, and they'll get served up
*   Can use a custom domain (that is, I can get this site to serve up its content to neil-vass-2.com)
*   Can add a build process (uses Jekyll by default, can change it)
*   Has various limitations that might affect me in future … but nothing to worry about right now, I'll start here and move if those become important.

This seems like a good place to start.

So, how do I set this up?
-------------------------

*   The [Getting Started](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) guide is straightforward
*   I need to choose a [type of site](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites): I think `project` is the right choice.
*   Set it up to publish from the main branch, in the /docs folder
*   I'll give it just a text file to try serving it up!

{% figure caption:"Just one static page to start with." %}
![Screenshot of the github interface, showing a hello world text file named index.htm in a neil vass 2 repo.](/assets/images/github-pages-setup-01.png){:width="100%"}
{% endfigure %}

Deploying isn't as fast a feedback loop as I'd like - a note says "it can take up to 10 minutes for changes to yur site to publish after you push the changes to GitHub. If you don't see your GitHub Pages changes reflected in your browser after an hour..."

But in this case, after just a couple of minutes I could go to the default public web address <http://neil-vass.github.io/neil-vass-2/> and my "Hello, World!" page was there, live to the world! I made a quick edit to add some HTML tags to that bare text file, just to check updates work. All looking good.

{% figure caption:"When file changes are committed, the site automatically redeploys to the web." %}
![Screenshot of the github interface, showing some files in the background and a message about build and deployment. It says started, and some checks haven't completed yet.](/assets/images/github-pages-setup-02.png){:width="100%"}
{% endfigure %}


Using my custom domain
----------------------

I [registered the neil-vass-2.com domain](./registering-a-domain-name.markdown), let's use it. The GitHub Pages docs have [notes on how to do that](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages). The recommended first step is to [verify that domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages), otherwise there's some cases where anyone could publish their GitHub Pages site to my domain - that sounds a wise precaution so I did that first.

Next, [set and check some DNS records, and set the site in GitHub Pages to use a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site). All done in just a few moments!

{% figure caption:"Just a few clear steps, with updates and confirmation it's all working." %}
![Screenshot of the github interface, showing the custom domain being set, a green tick with a DNS check successful message, and a box saying the TLS certificate is being provisioned."](/assets/images/github-pages-setup-03.png){:width="100%"}
{% endfigure %}

And with one checkbox, I can set "Enforce HTTPS" so we don't get anyone using HTTP and seeing browser warnings. That was all very easy. Done!
