# PYSAR PROJECT

*Pysar, from Ukrainian: the scribe*

**Pysar** is the concept project for comfortable forms building in WordPress. It allows to switch from proprietary third-party interfaces to familiar Gutenberg Blocks.

## Future Releases plans

1. Introducing form validation.
2. Setting-up data collection.
3. Adding more input types.
4. Improving styling and introducing themes

At this point, the most important use of this repository is to showcase my skills in Plugin Building. Although the plugin itself is very basic, from these files you can learn more about my folder structuring principles, node packages I use, module bundling approach etc. 

You can contact me with any questions at [oleksiitsioma@gmail.com](mailto:oleksiitsioma@gmail.com).

## Quick-start Guide

1. Run `npm install` to install all needed packages.

2. Run `npm run build:#blockName` from the `blocks/blockName` folderto compile your new block or `npm run start:#blockName` from the `blocks/blockName` to enable autocompiling for the block.

3. Run `npm run dist` from the plugin root folder to compile main style and script files or `npm run webpack` from the plugin root folder to enable autocompiling for the block.