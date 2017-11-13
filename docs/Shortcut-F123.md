## Shortcuts on the Layout
> Apply only on Layout tab of EasyBuider

### F1: search and insert quickly

> existing content to Layout and Partial layouts.
> auto generate code snippet, but you must modify with HTML, CSS code

- [x] Page content:  prefix `:DATA`
   - generated snippet:     `{{page-field-name}}` 

- [x] Meta content:  prefix  `:META`
   - generated snippet:     `{{meta-json-filename.field-name}}` 

- [x] Partial layout, prefix `:PARTIAL` 
   - insert existing Partial layous,   `{{>  ... }}`

###  F2: create fields or objects  from selected text quickly

- [x] the created field has 
  - default `string` type, 
  - default value is "selected string"
- [ ] the created object is empty object 
  - refresh tree view to show created object

### F3: create Partial layout from selected text quickly

- [x] new Partial layout contains selected text
- [x] insert auto snippet
- [x] add to quick search of F1