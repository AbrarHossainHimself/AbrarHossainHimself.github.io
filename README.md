# Abrar Hossain  
![profile-count](https://komarev.com/ghpvc/?username=AbrarHossainHimself&color=blue&style=plastic)  [![GitHub](https://img.shields.io/badge/-@AbrarHossainHimself-181717?style=flat&logo=GitHub&logoColor=white)](https://github.com/AbrarHossainHimself) [![GoogleScholar](https://img.shields.io/badge/-Abrar_Hossain-4885ED?style=flat&logo=GoogleScholar&logoColor=white)](https://scholar.google.com/citations?user=NSkFoF4AAAAJ&hl=en) [![LinkedIn](https://img.shields.io/badge/-Abrar_Hossain-2867B2?style=flat&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/abrarhossainhimself/)  [![Gmail](https://img.shields.io/badge/-abrarhossainhimself@gmail.com-DB4437?style=flat&logo=Gmail&logoColor=white)](mailto:abrarhossainhimself@gmail.com) [![Spotify](https://img.shields.io/badge/-Abrar_Hossain-1DB954?style=flat&logo=Spotify&logoColor=white)](https://open.spotify.com/user/abrarhimself) [![Letterboxd](https://img.shields.io/badge/-Abrar_Hossain-2f2f2f?style=flat&logo=Letterboxd&logoColor=white)](https://letterboxd.com/AbrarHimself/)

Source for my personal academic website, live at https://abrarhossainhimself.github.io/.

## Tech stack

- [Hugo](https://gohugo.io/) 0.167 (the version pinned in CI)
- No theme, no Hugo Modules, no Go: a small custom layout lives in `layouts/`, with plain CSS and JS in `assets/` (fingerprinted via Hugo Pipes)
- All page content is rendered from YAML files in `data/`

## Local development

```sh
hugo server
```

Then open http://localhost:1313/. Production build: `hugo --minify` (output in `public/`).

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds with Hugo 0.167.0 and publishes to GitHub Pages.

## Editing content

The homepage is generated entirely from `data/`; `content/_index.md` only holds the page title.

| File | Controls |
| --- | --- |
| `data/profile.yaml` | Name, title, affiliation, photo path, SEO description, bio (markdown), job-market line, header links |
| `data/research.yaml` | Research intro, current themes, and the earlier "past" block (e.g. Master's research) |
| `data/publications.yaml` | Publication list: "Under review" first, then by year descending |
| `data/news.yaml` | News items, newest first; the first 6 show, the rest sit behind "Show all" |
| `data/experience.yaml` | Experience entries with bullet points |
| `data/education.yaml` | Degrees |
| `data/talks.yaml` | Talks, with optional video and slides links |
| `data/awards.yaml` | Honors (name, year) and grants (one line each) |
| `data/service.yaml` | Service groups, each with a heading and items |

Fields documented as markdown (bio, research bodies, news text, bullets, talk descriptions, grants, service items) accept inline markdown such as `**bold**` and links. Empty sections are hidden automatically.

### Add a publication

Append an entry to `data/publications.yaml`. Only the link keys you include are rendered (`pdf`, `doi`, `code`, `slides`, `video`, `bibtex`), and the abstract toggle appears only if `abstract` is non-empty. Your name is bolded automatically by matching `name` in `profile.yaml`.

```yaml
- title: "Paper title"
  authors: ["Abrar Hossain", "Co Author"]
  venue: "Full venue name"
  venue_short: "VENUE 2026"
  year: 2026
  type: "Conference"      # Conference | Journal | Workshop | Poster | Book chapter
  status: "published"     # published | under review
  links:
    pdf: "https://example.com/paper.pdf"
    code: "https://github.com/me/repo"
  abstract: ""
```

### Add a news item

Add a line at the top of `data/news.yaml`:

```yaml
- { date: "2026-06", text: "Paper accepted to **VENUE 2026**" }
```

### Update the CV PDF

Replace `static/uploads/resume.pdf` with the new file (keep the filename). The nav and header "CV" links point to `/uploads/resume.pdf`.
