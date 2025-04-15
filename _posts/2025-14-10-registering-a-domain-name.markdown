---
layout: default
title: Registering a domain name
date: 2025-04-14 16:00:00 +0100
---

As part of "[The story so far](../index.markdown#the-story-so-far)" in setting up this site, I registered the neil-vass-2.com domain name. This was fairly simple:

*   Went to [123-reg.co.uk](https://123-reg.co.uk) (a domain name registrar)
*   Searched for the domain I wanted, found it's available
*   Clicked to register it for 3 years (1 penny for the first year! And £17.99 for subsequent years)
*   Put in my contact details, payment details, and it was done.

Now, I have a 123-reg account where I can manage various things about this domain - including changing the [DNS (Domain Name System) records](https://www.secureserver.net/help/what-is-dns-665?plid=587240). That'll be important very soon.

Learning
--------

I could get away with no learning at all, the sites where you can register a domain all guide you through the steps - but it is interesting knowing how things work behind the scenes. This is mostly type 1 learning from [my made-up list of types](/types-of-learning.markdown) - I mostly remember what the system is, and I don't think anything's changed in many years.

### What does it mean to "register" a domain?

We could definitely have picked easier-to-follow names for things when this process was set up: "Registration is the process whereby a registrant registers a domain with a registrar" is a quote from [Google's explanation](https://support.google.com/domains/answer/3251189) of how this works. Breaking that down...

*   The "root" of the Domain Name System is [ICANN, the Internet Corporation for Names and Numbers](https://www.icann.org/history), a nonprofit organisation that keeps all kinds of fundamental things about the Internet working.
*   ICANN hands responsibility for assigning top level domains (TLDs) to different "registries". For example, [Verisign](https://en.wikipedia.org/wiki/Verisign) is responsible for all .com domains.
*   Most registries don't handle selling registrations - they get different "registrars" to do that. [123-reg.co.uk](https://123-reg.co.uk), the company I used, is one registrar.
*   Finally, the "registrar" is me - a person or company who pays money to register a domain and take control of it. A registrar doesn't get to own a domain permanently; once you stop paying for registration, it's freed up and someone else can buy it.

For more on all this, [roadmap.sh](https://roadmap.sh/frontend) has a nice collection of links to all sorts of topics, including pages on Mozilla Developer Network about "[how the internet works](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work)".

For me personally, the timing of where this came from is fascinating: ICANN was founded in September 1998, the same month I started a computer science degree and started learning how all this works. That's also the same month Google was founded.

### Where did this system come from?

In earlier times, [John Postel](https://en.wikipedia.org/wiki/Jon_Postel), instrumental to lots of things in how the Internet works, started off the list of assigned network addresses in a paper notebook. [Elizabeth "Jake" Feinler](https://en.wikipedia.org/wiki/Elizabeth_J._Feinler) ran the Network Information Centre (NIC), which manually maintained a single HOSTS.TXT file, mapping hostnames to addresses, that everyone online copied to their computers a few times a week. People could phone or post physical letters to the NIC to get the hosts list updated or to ask questions about the network.

<div class="portraits">
  {% figure caption: "By Carl Malamud - Flickr: [Jon Postel, CC BY 2.0](https://commons.wikimedia.org/w/index.php?curid=126745740)" %}
  ![Photo of a man with long hair and beard, and 1970s style glasses](/assets/images/Jon_Postel.jpg){:width="248" height="358"}
  {% endfigure %}

  {% figure caption: "By Elizabeth Feinler - [Elizabeth Feinler, CC BY-SA 3.0](https://commons.wikimedia.org/w/index.php?curid=14983224)" %}
  ![Photo of a woman with curly hair, glasses, and a pearl necklace](/assets/images/Elizabeth_Feinler.jpg){:width="246" height="358"}
  {% endfigure %}
</div>

As they realised how fast things were growing and how unmaintainable these processes were, these two plus lots of others were instrumental in designing the more automated systems we all use today. It's amazing how far we've come in just a few decades.

