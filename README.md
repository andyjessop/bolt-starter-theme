bolt-starter-theme
==================

A bare-bones theme for Bolt CMS, focussing on SEO-friendly and semantic code. The plan is to add plenty of relevant Schema.org microdata, and eventually to have various `listing-{contenttype}.twig` and `entry-{contenttype}.twig` for the usual suspects (projects, events, etc), complete with their own contenttype.yml entries.

To install this theme, `theme/` and clone the repository: 

    git clone https://github.com/andyjessop/bolt-starter-theme.git starter

Set `theme: starter` in your `app/config/config.yml`, and you're good to go!

There's a gulpfile included, to get set up, run:

    npm install

Then:

    gulp

This will compile your scss files and concatenate js files and place them in the correct folders.