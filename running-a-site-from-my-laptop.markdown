---
layout: default
title: Running a site from my laptop
---

As part of "[The story so far](./index.markdown#the-story-so-far)", I wondered how easy it might be to serve a website from my own computer. I've [registered the neil-vass-2.com domain name](./registering-a-domain-name.markdown), can I keep HTML files on my laptop and let the world see them?

This is how the world wide web got started: Long before there were helpful hosting companies or cloud computing services, the very first web page was served from Tim Berners-Lee's [NeXT computer on a desk where he worked at CERN](https://www.sciencemuseum.org.uk/objects-and-stories/world-wide-web-global-information-space). He put a helpful sticker on it ("This machine is a server DO NOT POWER IT DOWN!!") to make sure the world wide web didn't unexpectedly disappear.

{% figure caption:"[Binary Koala from Berlin / Saint-Petersburg, TCP/IP](https://commons.wikimedia.org/wiki/File:This_Machine_is_a_server_DO_NOT_POWER_IT_DOWN!!_-_London_Science_Museum,_2015-03-19_(by_Binary_Koala).jpg), [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0), via Wikimedia Commons" %}
![Photo of a desktop computer with a handwritten sticker, partly scraped off.](assets/images/512px-This_Machine_is_a_server_DO_NOT_POWER_IT_DOWN!!_-_London_Science_Museum,_2015-03-19_(by_Binary_Koala).jpg){:width="512" height="288"}
{% endfigure %}



You can still have a look at [that very first site](https://info.cern.ch/hypertext/WWW/TheProject.html), and [read a lot more about how the web came about](https://home.web.cern.ch/science/computing/birth-web).

Could I do this?
----------------

Software to "serve" web pages - watch for network requests and use local files and rules to respond - used to be fairly complicated to set up but nowadays you can get started very easily. I already have Node.js installed ([instructions here](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment)), which means I can make an HTML file in a text editor, then run one command:

{% highlight shell %}
> npx http-server
Starting up http-server, serving ./

http-server version: 14.1.1

http-server settings: 
CORS: disabled
Cache: 3600 seconds
Connection Timeout: 120 seconds
Directory Listings: visible
AutoIndex: visible
Serve GZIP Files: false
Serve Brotli Files: false
Default File Extension: none

Available on:
http://127.0.0.1:8080
http://192.168.0.47:8080
Hit CTRL-C to stop the server
{% endhighlight %}

And that's it - with various sensible default options, I'm serving up a website!

This will work for anyone using my home WiFi, who goes to those web addresses (the IP address and port number rather than a nice name like <https://neil-vass-2.com>). Making that work, publicly, would need a few more steps:

*   Change my home network settings to allow outside requests on certain ports (not too tricky)
*   Get a persistent, public address for it (that IP address from my Internet Service Provider will keep changing)
*   Set up an always-on computer to keep serving it (and you can even by a [replica of that CERN sticker](https://www.redbubble.com/i/sticker/1st-Web-Server-by-mikkokoo/63904772.O9UDB)!)

None of these look too tricky, but before I go any further, there's another question...

Should I do this?
-----------------

Looking for the simplest way to get a website in place, I think this route might lead me into more complications. First of all I don't have a computer I can leave running, just my laptop that I keep carrying around different places. More importantly, opening up a machine on my home network to the world gives me lots of security and scalability worries - there's all kinds of bots and bad actors that might find ways to get access to my machine, or just flood it with so many requests that the response time slows to a crawl or my ISP gets annoyed and cuts me off.

There's ways to work around all these, and that might be an interesting exercise one day, but for now: I'm already used to keeping code and files in a [GitHub repository](https://docs.github.com/en/get-started/start-your-journey/about-github-and-git), and it looks like with just a few clicks I can set up GitHub pages to host the site and get lots of these worries taken care of for me. Let's try that instead.