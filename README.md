# gatsby-starter-paradigm-shift

Gatsby.js starter based on the Paradigm Shift site template, designed by HTML5 UP.

**Work in Progress** welcoming PRs for making this starter more customizable.

## Preview

![gh-pages](https://github.com/TeamYayin/gatsby-starter-paradigm-shift/workflows/Gatsby%20Publish%20GH-Pages/badge.svg)

<https://gatsby-paradigm-shift.yayinailab.tech/>

## Installation

Install this starter (assuming Gatsby is installed) by running from your CLI:

```sh
gatsby new gatsby-starter-paradigm-shift https://github.com/TeamYayin/gatsby-starter-paradigm-shift
```

Run `gatsby develop` in the terminal to start the dev site. change content in js files under [components](src/components/) folder or [index](src/pages/index.js) file.

Included github actions to deploy into gh-pages.

Replace formspree contact form id with your form in the [ContactForm](src/components/ContactForm.js)

### Customize Fonts

We removed google fonts api call to source sans pro and defaulted to sans-serif. To add a new font to the site:

- Add import statement in [main.sccs](src/assets/sass/main.scss) file.

- Change values for `$font:family`, `$font:family-heading` and `$font:family-fixed` in [vars.scss](src/assets/sass/libs/_vars.scss)file.

## TODO

- Make fontawesome icons as react components with fortawesome package
- Create markdowns or mdx or yaml config files to take input for layout.js files
- Clean up component_will_mount method in code.

Check out <https://codebushi.com/gatsby-starters-and-themes/> for more Gatsby starters and themes of the original repo.
