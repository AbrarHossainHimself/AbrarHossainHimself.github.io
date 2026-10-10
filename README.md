# Abrar Hossain  
![profile-count](https://komarev.com/ghpvc/?username=AbrarHossainHimself&color=blue&style=plastic)  [![GitHub](https://img.shields.io/badge/-@AbrarHossainHimself-181717?style=flat&logo=GitHub&logoColor=white)](https://github.com/AbrarHossainHimself) [![GoogleScholar](https://img.shields.io/badge/-Abrar_Hossain-4885ED?style=flat&logo=GoogleScholar&logoColor=white)](https://scholar.google.com/citations?user=NSkFoF4AAAAJ&hl=en) [![LinkedIn](https://img.shields.io/badge/-Abrar_Hossain-2867B2?style=flat&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/abrarhossainhimself/)  [![Gmail](https://img.shields.io/badge/-abrarhossainhimself@gmail.com-DB4437?style=flat&logo=Gmail&logoColor=white)](mailto:abrarhossainhimself@gmail.com) [![Spotify](https://img.shields.io/badge/-Abrar_Hossain-1DB954?style=flat&logo=Spotify&logoColor=white)](https://open.spotify.com/user/abrarhimself) [![Letterboxd](https://img.shields.io/badge/-Abrar_Hossain-2f2f2f?style=flat&logo=Letterboxd&logoColor=white)](https://letterboxd.com/AbrarHimself/)

Source for my personal academic website, live at https://abrarhossainhimself.github.io/.

## Tech stack

- [Hugo](https://gohugo.io/) **extended 0.119.0** (the version pinned in CI)
- [Hugo Blox](https://hugoblox.com/) (Academic CV template), pulled in as Hugo Modules (see `go.mod` and `config/_default/module.yaml`)
- [Go](https://go.dev/) is required locally so Hugo can fetch the modules

## Local development

1. Install Go and Hugo extended 0.119.0.
2. Clone the repo and start the dev server:

   ```sh
   git clone https://github.com/AbrarHossainHimself/AbrarHossainHimself.github.io.git
   cd AbrarHossainHimself.github.io
   hugo server
   ```

3. Open http://localhost:1313/. Production build: `hugo --minify`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site with Hugo and publishes it to GitHub Pages. It can also be run manually from the Actions tab.

## Repository layout

| Path | Contents |
| --- | --- |
| `config/_default/` | Site configuration: `hugo.yaml`, `params.yaml`, `menus.yaml` (top navigation and the CV link), `module.yaml`, `languages.yaml` |
| `content/_index.md` | Homepage sections (biography, experience, publications list, news, talks) |
| `content/authors/admin/` | Author profile (`_index.md`) and avatar |
| `content/publication/` | One folder per publication page (`index.md`) |
| `content/home/` | Extra homepage widget pages |
| `content/privacy.md`, `content/terms.md` | Legal pages |
| `layouts/partials/` | Custom widget and theme overrides, including `custom_head.html` and `custom_js.html` |
| `static/` | Files served as-is; the CV PDF is `static/uploads/resume.pdf` |
| `assets/media/` | Images used by the theme (`header.png`, `icon.png`) |
| `data/` | Theme data files (fonts, themes) |

Custom theme CSS/JS lives in `static/` and `assets/` and is wired up via `layouts/partials/custom_head.html` and `custom_js.html`.

## Common edits

- **Update the CV:** replace `static/uploads/resume.pdf` (linked from the "CV" menu entry in `config/_default/menus.yaml`).
- **Add a publication:** create `content/publication/<name>/index.md`, using an existing one such as `content/publication/wsc-2024/index.md` as a template. The homepage "Publications" list is written by hand in `content/_index.md`, so add the entry there too.
- **Edit homepage sections:** change the blocks under `sections:` in `content/_index.md`. Menu links such as `#experience` in `menus.yaml` point to the block `id`s.
