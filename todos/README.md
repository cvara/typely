**TODOS**

- [x] media caption placeholder behavior
- [x] store user input in model
- [x] getter that fetches json/pojo representation of said model
- [ ] setter that updates editor state:
  - [ ] populate `mediaViews` hash based on media sections found in content
-  [ ] restore editor state based on model passed on init
  - [ ] accept article model on init
  - [ ] populate `mediaViews` hash based on media sections found in content
  - [ ] handle conflict between placeholders.mixin and non-empty article title/subtitle/content
- [ ] ignore `.non-section` elements when setting model `content` (use stickit `onSet`)
- [ ] add underline formatting option
- [ ] build 2 different versions: full & core (without jquery)
- [ ] support edge browser
- [ ] add README.md



**IDEAS**

- [ ] extract insert media related logic as plugin
