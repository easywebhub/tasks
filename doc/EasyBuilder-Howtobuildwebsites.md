
## How to build new websites from EasyWeb's skeleton 
<!-- TOC -->

- [How to build new websites from EasyWeb's skeleton](#how-to-build-new-websites-from-easywebs-skeleton)
    - [Preparation](#preparation)
    - [I. Create new website](#i-create-new-website)
    - [II. Create your homepage](#ii-create-your-homepage)
        - [Change layout](#change-layout)
        - [Binding data to homepage](#binding-data-to-homepage)
    - [III. Create detail pages](#iii-create-detail-pages)
        - [1. Create layout(s) for all detail pages](#1-create-layouts-for-all-detail-pages)
        - [2. Create a first detail page](#2-create-a-first-detail-page)
        - [3. Define Content structure](#3-define-content-structure)
        - [4. Fill data for the first detail page](#4-fill-data-for-the-first-detail-page)
        - [5. Create more detail pages](#5-create-more-detail-pages)
    - [VI. Category and Tags of website](#vi-category-and-tags-of-website)
        - [Define Category Hierachy (Tree)](#define-category-hierachy-tree)
        - [Category layout for Category pages](#category-layout-for-category-pages)
        - [Show list of pages on category layout](#show-list-of-pages-on-category-layout)
        - [Preview Category pages](#preview-category-pages)
    - [Show Category, Tag on Homepage or Common Blocks](#show-category-tag-on-homepage-or-common-blocks)

<!-- /TOC -->

### Preparation 
- A theme of new websites
    - `layout`: html files
    - `asset` : css, js, image, ... files 

### I. Create new website
> recommend to create from EasyWeb's Skeleton 

- Login to EasyBuilder
- From Easy Marketplace, create new website from a template, (Skeleton)
- Build and Preview on your machine

### II. Create your homepage 

#### Change layout
1. add assets to website 
    - click to `Asset` tab -> Add Folder button
    - add all asset files of your theme to website

2. replace layout of homepage by html code of new homepage 
3. Preview the change of new homepage on browsers
3. In case the layout is broken
    - the relative path to asset files is not correct. (On Chrome browser, Click F12 to debug or see the errors)
    - correct the path, ussually add prefix `/` to all asset files.
    - Hotfix, could be effect on layout of other layout: add code at `<head>` html part of your homepage
    ```html
    <base href="/" > 
    ```

#### Binding data to homepage
> should be done later, after created detail pages, category tree, 

### III. Create detail pages 

#### 1. Create layout(s) for all detail pages
> could be some layouts of all detail pages but there must have the same defined Content (data) structure 

1. Create new (normal) layout by click `+ Layout` on menu of EasyBuilder 
  - fill a name
1. Copy html code from your theme, paste to created layout 

#### 2. Create a first detail page 

1. Create new page by click `+ Page` on menu of EasyBuilder 
  - fill a title, choose created details layout above 

2. A first details page with some default fields, see details at [link]()

#### 3. Define Content structure 
> applied for all detail pages create later. Content structure is configurated based on the details layout 

1. Enable the `contents` field, see explanation at [link]()
    - Go to Config tab, click `String` button of field `__content__`
    - change the Hidden property from "True" to "False" 
    
1. Define more fields based on your requirement 
    - Click to `Property` to add more fields of object
    - change type of a field, from `String` type, `text` format to other format, or other type

1. Verify created fields on Form tab, should be change `title` or `format` to help User easier to enter data later. 

1. Enter value of fields and binding to layout

1. See more advanced Configuration at [link]()

#### 4. Fill data for the first detail page
- using Form to fill data 

#### 5. Create more detail pages 
- use sample layout of first detail pages 

### VI. Category and Tags of website 
> Category and Tags have same functions of Wordpress's Category and Tags and also inspire of other popular frameworks

#### Define Category Hierachy (Tree)

- Click `+ Category` to add a new category which is a child of existing Category or nothing 
- By default, use `default.category.html` for layout of created categories. 
- can change to other layout by edit on `Raw` tab
    - that layout must be create before by `+ Layout` and select Category layout option 

#### Category layout for Category pages 
- add html code of new layout of your themes for `default.category.html` layout 

#### Show list of pages on category layout 

- replace the fixed list on html code by query code to show list pages of current category
- using syntax bellow 
```js 
<h5>List files of {{pagination.category}} - {{pagination.categoryDisplayName}}<h5>
<ul>
{{#each pagination.files}}
	<li><a href="/{{ this.path }}">{{ this.title }}</a></li>
{{/each}}
</ul>

{{#if pagination.previous}}
	<a href="/{{pagination.previous.path}}">Previous Page </a>
{{/if}}
{{#if pagination.next}}
	<a href="/{{pagination.next.path}}">Next page</a>
{{/if}} 
```
- for more advanced see [link]() 

#### Preview Category pages

- show all category that no have parent category, call `level-1 category` at home page for testing
```js
<h5> All level-1 category of your website </h5> 
<ul>
{{#each AllCategory.children}} 
	<li><a href="/{{ this.path }}">{{ this.title }}</a></li>
{{/each}}
</ul>
```
- go to link to preview a category page 
  -  A category name, e.g `parent-name.name` will generated at path,  `/parent-name/name` 

> Notes: A category page will be created automatically if there're detail pages which were organized to. You should edit detail page, change it's category value 

### Show Category, Tag on Homepage or Common Blocks



