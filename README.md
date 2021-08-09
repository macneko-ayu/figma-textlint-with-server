# figma-textlint-with-local-server
This repository is a prototype of a Plugin that executes textlint on the contents of a Figma TextNode and posts the result as a comment.  
Since it is an experimental plugin, we do not guarantee its working.

https://user-images.githubusercontent.com/5406126/128723264-85a66a1e-827c-4a9b-b5d4-debad201d148.mov

## Included in the repository
- textlint server
    - Runs in a local environment
- Figma Plugin

## Installation
```shell
$ git clone git@github.com:macneko-ayu/figma-textlint-with-server.git
$ cd figma-textlint-with-server
```
### textlint server
```shell
$ cd textlint-server
$ npm install
```

### Figma Plugin
For development

```shell
$ cd figma-textlint
$ npm install
```

For Figma application
1. open Figma application on macOS
2. Select `Plugins > Development > Create Plugin...` from the menu
3. Click `Click to choose a manifest.json file`
4. Select manifest.json in figma-textlint directory

## Usage
1. Listen to the textlint server on localhost:3000  
  `$ npm run dev`
2. Open document in Figma application
3. If the TextNode does not exist, create one
4. Select `Plugins > Development > figma-textlint` from the menu
5. Click Token file button
6. Select A file containing the Personal Access Token.
   - Click [here](https://www.figma.com/developers/api#access-tokens) to learn more about Personal Access Token.
7. Click Run button

## Author

[@macneko_ayu](https://twitter.com/macneko_ayu)

## Licence

This software is released under the MIT License, see LICENSE.txt.
 