---
layout: blog
title: Hugo SSG/Netlify CMS is Amazing!
date: 2021-10-19T03:25:43.027Z
category: Web-Dev
thumbnail: /img/uploads/screen-shot-2021-10-18-at-23.28.47.png
rating: 5
---
Until today, I have tried many different methods of building sites but was never quite satisfied with the combination of pricing model, build time, development time, and customizability. I initially learned PHP in high school, but it was a bit too involved for me at the time. I ended up investing most of my time into learning to create static sites from templates. In my freshman year of college, I started using express.js, which was revolutionary to me at the time to learn to build my own APIs, but requires infrastructure investment and some setup on the SSL. I eventually discovered netlify, but was left in the dust when I didn't yet know any frontend frameworks, such as Vue, React, or Angular. I continued to develop any dynamic sites on express.js, with a templating engine and any static sites on Netlify. I started to try to learn some online site builders for freelance jobs but never was really satisfied with building sites in a GUI. Anything that was up to my standards offered a pricing model, which was too high for the margins I wanted to make on hosting. In my Junior year, I bit the bullet and learned React. I set up a pretty cool system of a resume pool for the [BDAA website](https://bdaaosu.org). I had thought this was going to be my silver bullet but was still quite unsatisfied with the development investment. This year, I implemented Strapi.js CMS into [See3D](https://see3d.org), one of my express.js projects. I was still unsatisfied with the time and infrastructure investment but finally knew how to use a CMS that wasn't WordPress. (I've always had a hate for WordPress for some reason; probably goes back to my initial PHP struggles) 



Yesterday, I discovered Netlify CMS. Today I discovered Hugo. (Similar SSG's will also do) My life has been forever changed. I want to preface by saying, this isn't a catch-all solution. Some systems will require more advanced front-end frameworks. I would never want to rewrite the system on the BDAA site, which requires multiple API integrations, on Hugo. However, the [Bollywood Bistro Site](https://bollywoodbistrochicago.com), See3D site, and my portfolio website are sites I wish I knew about Hugo and Netlify CMS for. The ease of content updates with low time investment in infrastructure and low cost is unbeatable. I was blown away when I saw it automatically generate a SEO site map for me. The extremely fast build time is something I wish I had when I build the BDAA site. It took me a total of ~60 minutes to port the static content (6 pages) to Hugo, and this was all while learning it. It took me quite a bit of time to understand all the working parts of Netlify CMS, but as soon as I finished to tutorial and saw Netlify automatically make a pull request adding markdown files, my mouth dropped. Extremely clean and little to no maintenance involved or time to set up automatically refreshing API tokens. Now it's time to build out the blog! I'm using this as a test post for developing the blog. I'll wrap up by showing what types of projects I would use each framework for.



Frequently Updated Content/Few API Requests (90% of what people want from me): Hugo/Netlify CMS

Systems With Intricate State Information/Progressive Web Applications: React/Netlify

Rarely Updated Content: Static Site Hosted on Netlify

Anything that Should Act Like an API: express.js

Quick Jobs Where Custom CSS will be too Time Consuming: Squarespace / Webflow