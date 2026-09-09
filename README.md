# Shivsai Jagadale — Portfolio

A premium, fully responsive personal portfolio built with plain HTML, CSS and
JavaScript — no frameworks, no build step. Open `index.html` in a browser and
it works.

## File structure

```text
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/     ← put your profile photo / project screenshots here
│   ├── icons/       ← put your favicon here
│   └── resume/      ← put your resume PDF here
└── README.md
```

## 1. Where you change your personal information

Open **`js/script.js`** and edit the `portfolioData` object at the top of the
file. This is the single source of truth for the whole site — the HTML pulls
name, title, skills, projects, education, certifications and
contact details from this object at load time.

```js
personal: {
  name: "Shivsai Jagadale",
  title: "Aspiring AI/ML Engineer",
  location: "Kolhapur, Maharashtra, India",
  email: "shivsai1396@gmail.com",
  phone: "+91 93592 31309",
  profileImage: "assets/images/profile.jpg",
  resume: "assets/resume/resume.pdf"
}
```

The hero name/title in `index.html` (`#heroName`, `#heroTitle`) are also
overwritten by this data on load, so editing the object is enough.

## 2. Where you add/remove projects

Still in `js/script.js`, edit the `portfolioData.projects` array. Each entry
needs a `category` of `ai-ml`, `python`, or `web` — this is what the filter
buttons on the Projects section match against. Add or remove objects from the
array; the grid and the click-through modal render automatically.

## 3. Where you change skills

Edit `portfolioData.skills` — an array of `{ category, tags }` objects. Add a
new object for a new category, or push/remove strings from `tags`.

## 4. Where you change experience

There's no Experience section on the site right now since the current resume
doesn't list any work experience yet. When you have an internship or job to
add:

1. In `js/script.js`, add entries to `portfolioData.experience`, e.g.:
   ```js
   experience: [
     {
       role: "AI/ML Engineer Intern",
       company: "Company Name",
       location: "City",
       start: "Jun 2026",
       end: "Present",
       points: ["What you did", "Another responsibility"],
       tech: ["Python", "TensorFlow"]
     }
   ]
   ```
2. Add an `<li><a href="#experience" ...>Experience</a></li>` back into the
   nav menu in `index.html`, and re-add an `<section id="experience">` block
   with an `<ol class="timeline" id="experienceTimeline">` inside it (you can
   copy the structure of the Projects section for reference).
3. In `js/script.js`, re-add a `renderExperience()` function that loops over
   `portfolioData.experience` and injects `.timeline__item` elements into
   `#experienceTimeline`, then call it from the `DOMContentLoaded` handler.
   The CSS for `.timeline`, `.timeline__item`, etc. is already in
   `css/style.css` and ready to use.

## 5. Where you change colors

Open **`css/style.css`** and edit the CSS variables at the top of the file
inside `:root` (dark theme) and `[data-theme="light"]` (light theme):

```css
:root {
  --bg-primary: #10141c;
  --bg-secondary: #171c26;
  --text-primary: #edeff4;
  --accent: #e8b34d;
  --accent-2: #5fb8a8;
  --border: #262c39;
  ...
}
```

Changing these values re-themes the entire site — buttons, links, tags,
borders and shadows all reference these variables.

## 6. Where you add your profile photo

Drop an image into `assets/images/` (e.g. `profile.jpg`) and update
`portfolioData.personal.profileImage` in `js/script.js` to point to it. The
hero currently uses a terminal/metrics panel instead of a photo; if you'd
rather show a portrait, replace the `.hero__panel` markup in `index.html`
with an `<img>` tag pointing at your photo.

## 7. Where you add your resume

Put your resume PDF at `assets/resume/resume.pdf` (or update
`portfolioData.personal.resume` in `js/script.js` to a different path or
external link). The "Download Resume" button in the hero uses this value.

## 8. How to run the website locally

No build tools needed. Either:

- Double-click `index.html` to open it directly in a browser, or
- Serve it locally for the best experience (some browsers restrict local
  file access for smooth scrolling/fonts):

  ```bash
  cd portfolio
  python3 -m http.server 8000
  # then open http://localhost:8000
  ```

## 9. How to deploy to GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to "Deploy from a branch".
4. Choose the branch (e.g. `main`) and root folder (`/`), then save.
5. Your site will be live at `https://<username>.github.io/<repo-name>/`.

## 10. How to deploy to Netlify or Vercel

**Netlify**
1. Drag and drop the `portfolio` folder onto [app.netlify.com/drop](https://app.netlify.com/drop), or
2. Connect your GitHub repo in Netlify and set the publish directory to the
   project root (no build command needed).

**Vercel**
1. Import the GitHub repo at [vercel.com/new](https://vercel.com/new).
2. Leave the framework preset as "Other" and the build command empty.
3. Deploy — the static files are served as-is.

## Notes

- The contact form sends messages via [EmailJS](https://www.emailjs.com) —
  no backend required. To activate it:
  1. Create a free EmailJS account and add an Email Service (e.g. connect
     your Gmail).
  2. Create an Email Template with variables `{{name}}`, `{{email}}`,
     `{{subject}}`, `{{message}}` — these match the contact form's field
     names exactly.
  3. Open `js/script.js` and fill in `EMAILJS_CONFIG` near the top of the
     file with your Service ID, Template ID, and Public Key.
  4. Until those keys are filled in, submitting the form shows a friendly
     "not configured yet" message instead of silently failing.
- Dark/light theme preference is saved in `localStorage` and respects the
  visitor's system preference on first visit.
- All animations respect `prefers-reduced-motion`.
