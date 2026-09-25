# UrbanCart Design System

> **Project:** UrbanCart  
> **Source:** Figma Workspace (`UrbanCart`)  
> **Aesthetic Philosophy:** Warm Editorial Minimalism & Curated Lifestyle Boutique  
> **Target Framework:** React 19 + Tailwind CSS v4 + TypeScript + Lucide Icons  

---

## 1. Design Principles & Brand Identity

* **Curated for Urban Life:** High-end boutique feel, avoiding generic AI slop or stark tech-corporate styles. The interface prioritizes warm tactile surfaces, generous negative space, and refined typography.
* **Warm Tactile Neutrals:** High contrast without stark coldness. Built upon ivory, cream linen, and charcoal instead of harsh pure blacks and cold blues.
* **Intentional Editorial Density:** Large, confident headlines paired with compact metadata, subtle category kickers, and focused product cards.
* **Consistent Visual Rhythm:** Unified 4px/8px incremental spacing, 12px standard component border radius, and pill-shaped interactive micro-elements (`rounded-full`).

---

## 2. Color System & Design Tokens

### 2.1 Surfaces & Backgrounds
| Token Name | Hex Code | Tailwind / CSS Variable | Description / Usage |
| :--- | :--- | :--- | :--- |
| `surface-canvas` | `#FBF9F5` | `--color-surface-canvas` / `bg-[#fbf9f5]` | Primary warm ivory canvas across all main views |
| `surface-canvas-subtle` | `#EDE8E0` | `--color-surface-subtle` / `bg-[#ede8e0]` | Secondary outer canvas / layout surround |
| `surface-card` | `#FFFFFF` | `--color-surface-card` / `bg-white` | Elevated white card, input, and container surface |
| `surface-card-tint` | `#FFF8F3` | `--color-surface-tint` / `bg-[#fff8f3]` | Warm peach-tinted card (Profile hero identity card) |
| `surface-badge-warm` | `#FDE9E2` | `--color-badge-warm` / `bg-[#fde9e2]` | Warm peach status badge background |
| `surface-tint-lavender`| `#ECE8F8` | `--color-tint-lavender` / `bg-[#ece8f8]` | Status / 404 illustration backdrop |
| `surface-tint-sage` | `#DCEDE5` | `--color-tint-sage` / `bg-[#dcede5]` | Avatar backdrop / positive system tint |

### 2.2 Text & Typography Colors
| Token Name | Hex Code | Tailwind / CSS Variable | Description / Usage |
| :--- | :--- | :--- | :--- |
| `text-primary` | `#242320` | `--color-text-primary` / `text-[#242320]` | Primary charcoal for headings, titles, dark buttons |
| `text-primary-alt` | `#24221F` | `--color-text-primary-alt` / `text-[#24221f]` | Profile & settings charcoal heading text |
| `text-secondary` | `#716D66` | `--color-text-secondary` / `text-[#716d66]` | Subtitles, body descriptions, secondary copy |
| `text-secondary-alt` | `#77736C` | `--color-text-secondary-alt` / `text-[#77736c]` | Form descriptions and helper copy |
| `text-muted` | `#A39D94` | `--color-text-muted` / `text-[#a39d94]` | Placeholder text, micro-labels, stat uppercase titles |
| `text-inverse` | `#FFFFFF` | `--color-text-inverse` / `text-white` | Text on dark buttons, badges, and dark hero tiles |

### 2.3 Brand Accents & Status Colors
| Token Name | Hex Code | Tailwind / CSS Variable | Description / Usage |
| :--- | :--- | :--- | :--- |
| `brand-terracotta` | `#E45A2A` | `--color-brand-terracotta` / `text-[#e45a2a]` | Primary brand accent: eyebrows, active links, dot indicators |
| `brand-terracotta-alt`| `#E85D3F` | `--color-brand-terracotta-alt` / `bg-[#e85d3f]` | Pill button CTA color (*Save changes*), link highlights |
| `status-verified` | `#C94228` | `--color-status-verified` / `text-[#c94228]` | "Verified account" badge text |
| `brand-forest` | `#246B53` | `--color-brand-forest` / `bg-[#246b53]` | Forest green monogram & system action buttons |
| `brand-forest-dark` | `#174D3B` | `--color-brand-forest-dark` / `text-[#174d3b]` | Forest green avatar text & badges |
| `accent-purple` | `#6857A6` | `--color-accent-purple` / `text-[#6857a6]` | 404 state badge and illustration text |

### 2.4 Borders & Dividers
| Token Name | Hex Code | Tailwind / CSS Variable | Description / Usage |
| :--- | :--- | :--- | :--- |
| `border-subtle` | `#D8D1C7` | `--color-border-subtle` / `border-[#d8d1c7]` | Primary divider, input borders, secondary buttons |
| `border-card` | `#E7E3DC` | `--color-border-card` / `border-[#e7e3dc]` | Card borders and inner field container borders |
| `border-system` | `#E2E6E2` | `--color-border-system` / `border-[#e2e6e2]` | Muted borders on navigation and search inputs |

---

## 3. Typography Specification

* **Typeface:** `Inter` (Google Fonts or System Inter)
* **Font Fallback:** `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`

### 3.1 Type Scale

| Role / Level | Size | Weight | Line Height | Letter Spacing | Example Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display Hero** | `64px` | Regular (400) | `0.98` (`~63px`) | Normal | Desktop landing page hero headline |
| **Display Mobile**| `44px` | Regular (400) | `0.98` (`~43px`) | Normal | Mobile landing page hero headline |
| **Page Title (H1)**| `48px` / `44px` | Bold / Regular | `1.04` – `1.08` | `-0.88px` to `-1.32px` | Sign-in headline, Profile & Settings title |
| **Editorial H2** | `28px` | Bold (700) | Normal | Normal | Profile user name, Section highlights |
| **Section H2** | `24px` | Regular (400) | Normal | Normal | Stat numbers, Section titles |
| **Card H3** | `20px` | SemiBold (600) | Normal | Normal | Settings card headers, Brand wordmark |
| **Subheading** | `17px` – `18px` | Regular (400) | `1.5` – `1.55` | Normal | Hero lead paragraph, Brand name |
| **Body Large** | `15px` | Regular (400) | `1.4` – `1.5` | Normal | Input values, Button labels, Card titles |
| **Body Base** | `14px` | Regular / SemiBold | Normal | Normal | Navigation links, Action buttons, Cart text |
| **Body Small** | `13px` | Regular / SemiBold | `1.45` | Normal | Form field labels, Table headers, Footer links |
| **Caption / Eyebrow**| `12px` | SemiBold / Bold | Normal | `+0.96px` to `+1.04px` (Uppercase) | *"Member access"*, *"Your account"*, 404 tag |
| **Micro Kicker** | `11px` | Regular / SemiBold | Normal | Normal (Uppercase) | Stat labels (*"BRANDS"*, *"CATEGORIES"*, *"DELIVERY"*) |
| **Badge Micro** | `9px` | Regular (400) | Normal | Normal (Uppercase) | Mobile stat titles, image category tags |

---

## 4. Spacing, Grid & Elevation

### 4.1 Spacing Scale
| Token | Pixels | Tailwind Value | Common Usage |
| :--- | :--- | :--- | :--- |
| `space-1` | `4px` | `gap-1` / `p-1` | Micro badge spacing, Stat inner gap |
| `space-2` | `8px` | `gap-2` / `p-2` | Form label-to-input gap, icon spacing |
| `space-3` | `12px` | `gap-3` / `p-3` | Button icon gaps, stat card padding, divider gaps |
| `space-4` | `16px` | `gap-4` / `p-4` | Card internal padding, input horizontal padding |
| `space-5` | `20px` | `gap-5` / `p-5` | Mobile viewport margin, card content spacing |
| `space-6` | `24px` | `gap-6` / `p-6` | Desktop card padding, Hero column gap, vertical gaps |
| `space-7` | `28px` | `gap-7` / `p-7` | Profile card padding |
| `space-8` | `32px` | `gap-8` / `p-8` | Desktop navigation item spacing, section micro-gaps |
| `space-10`| `40px` | `gap-10` / `p-10` | Section vertical padding |
| `space-12`| `48px` | `gap-12` / `p-12` | Auth panel padding, footer spacing |
| `space-14`| `56px` | `gap-14` / `p-14` | Navigation outer padding, profile header top margin |
| `space-16`| `64px` | `gap-16` / `px-16`| Main desktop content side margin (`px-[64px]`) |
| `space-20`| `80px` – `96px` | `py-20` / `py-24` | Major section vertical padding (`py-[96px]`) |
| `space-28`| `112px` – `120px` | `px-[112px]` | Auth desktop centered form padding |

### 4.2 Border Radius Scale
| Token | Radius | Tailwind Class | Application |
| :--- | :--- | :--- | :--- |
| `radius-sm` | `8px` – `10px` | `rounded-[8px]` / `rounded-[10px]` | Brand mark tile, search inputs, icon tiles |
| `radius-md` | `12px` | `rounded-[12px]` | **Core Default:** All form inputs, standard buttons, product cards |
| `radius-lg` | `18px` – `20px` | `rounded-[18px]` / `rounded-[20px]` | Settings cards, profile identity container |
| `radius-xl` | `56px` | `rounded-[56px]` | Large status illustration containers |
| `radius-full`| `999px` | `rounded-full` | Action pill buttons, status badges, avatar, toggle thumbs, cart badge |

### 4.3 Box Shadows & Elevation
```css
/* Card Elevation */
box-shadow: 0px 8px 28px 0px rgba(47, 38, 18, 0.05);

/* Modal & Floating Element Elevation */
box-shadow: 0px 16px 40px 0px rgba(22, 58, 45, 0.08);

/* Elevated Form Container & Google Button */
box-shadow: 0px 20px 60px 0px rgba(59, 48, 36, 0.10);
```

---

## 5. UI Component Catalog

### 5.1 Brand Mark & Wordmark
* **Monogram Icon:** `32 × 32px` square (`rounded-[8px]`), background `#242320`, text white `Inter:Regular` 15px `"U"`.
* **Wordmark:** `20px` `Inter:Regular`, text `#242320`, labeled `"UrbanCart"`.
* **Gap:** `10px` between monogram and wordmark.

### 5.2 Header & Navigation Bar
* **Desktop Navbar (`24:41`):**
  * Height: `84px`, padding: `0 64px`, background: `#fbf9f5`, border-bottom: `1px solid #d8d1c7`.
  * Left: Brand mark + UrbanCart logo.
  * Center Links: `gap-[32px]`. Links: *New in* (with `5px` `#e45a2a` dot indicator), *Women*, *Men*, *Home*, *Deals*. Text `#242320` 14px.
  * Right Utilities: `gap-[22px]`. Search (icon + "Search"), Account (icon + "Account"), Cart (icon + "Cart" + circular badge with `#242320` bg, white count 11px).
* **Mobile Navbar (`31:23` / `18:1566`):**
  * Height: `68px`, padding: `0 20px`. Left: 30px Monogram + Logo. Right: Search, Bag, Hamburger Menu icons.
  * Search Bar Row: `46px` height with placeholder `"Search brands, products, and categories"`.

### 5.3 Buttons
* **Primary Dark CTA:**
  * Background: `#242320`, Text: `#ffffff` 15px, Radius: `12px` (or `rounded-full` for header action).
  * Height: `50px` – `54px`, horizontal padding: `20px` – `24px`.
* **Secondary / Outline Button:**
  * Background: `#ffffff`, Border: `1px solid #d8d1c7`, Text: `#242320` 15px, Radius: `12px`.
  * Height: `50px` – `52px`, horizontal padding: `24px`.
* **Accent Pill Action (e.g. *Save changes*):**
  * Background: `#e85d3f`, Text: `#ffffff` 15px SemiBold, Radius: `rounded-full`, Height: `46px`, padding: `0 18px`.
* **Social OAuth Button (Google):**
  * Background: `#ffffff`, Border: `1px solid #d8d1c7`, Radius: `12px`, Height: `54px`, Shadow: `0px 20px 60px 0px rgba(59,48,36,0.1)`.

### 5.4 Form Fields & Text Inputs
* **Input Container:**
  * Height: `50px` (profile/search) / `52px` (authentication).
  * Background: `#ffffff`, Border: `1px solid #d8d1c7` (focus: `#242320`), Radius: `12px`, Padding: `0 16px`.
  * Text: 15px `Inter:Regular` (`#242320`), Placeholder: `#a39d94`.
* **Field Labels:**
  * Size: `13px` SemiBold (`#242320` or `#24221f`), margin-bottom: `7px` – `8px`.
* **Helper / Error Messages:**
  * Size: `11px` – `13px` Regular (`#716d66` for info, `#c94228` for errors).

### 5.5 Status Badges & Pills
* **Verified Account Pill:**
  * Background: `#fde9e2`, Text: `#c94228` 12px SemiBold, Radius: `rounded-full`, Padding: `5px 10px`.
* **Discount Tag (e.g. *20% off*):**
  * Text: `#e45a2a` or `#242320`, 16px SemiBold.
* **Status Eyebrow (e.g. *Member access*, *Spring / Summer 2026*):**
  * Text: `#e45a2a` 11px – 12px uppercase, letter-spacing `1px`.

### 5.6 Interactive Toggle Switch
* **Track:** `44 × 26px`, `rounded-full`.
  * Active Track: `#242320` or `#e85d3f`.
  * Inactive Track: `#e7e3dc`.
* **Thumb:** `20 × 20px` pure white circle (`rounded-full`), `3px` offset when inactive, `21px` translate when active.

### 5.7 Product & Deal Cards
* **Deal Card:**
  * Container: White or Ivory background, 16px padding, `12px` border radius.
  * Image: `284 × 220px` image box (`rounded-[8px]` or `rounded-[12px]`).
  * Brand Kicker: 13px (`#716d66`), Product Title: 19px SemiBold (`#242320`), Price: 18px Bold + discount percentage.

---

## 6. Tailwind CSS v4 Configuration Snippet

Add this to `client/src/index.css` to enable UrbanCart tokens directly in Tailwind:

```css
@import "tailwindcss";

@theme {
  /* Colors */
  --color-canvas: #fbf9f5;
  --color-canvas-subtle: #ede8e0;
  --color-charcoal: #242320;
  --color-charcoal-dark: #24221f;
  --color-terracotta: #e45a2a;
  --color-terracotta-alt: #e85d3f;
  --color-terracotta-dark: #c94228;
  --color-warm-gray: #716d66;
  --color-warm-gray-subtle: #77736c;
  --color-warm-muted: #a39d94;
  --color-border-warm: #d8d1c7;
  --color-border-card: #e7e3dc;

  /* Typography */
  --font-sans: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Shadows */
  --shadow-card-warm: 0px 8px 28px 0px rgba(47, 38, 18, 0.05);
  --shadow-floating-warm: 0px 20px 60px 0px rgba(59, 48, 36, 0.10);
}

body {
  margin: 0;
  min-height: 100vh;
  background-color: var(--color-canvas);
  color: var(--color-charcoal);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
}
```

---

## 7. Responsiveness & Breakpoint Standards

* **Mobile Viewport:** `390px` (Primary target: iPhone 13/14/15/16).
  * Padding: `px-[20px]`.
  * Grid: 1-column layouts, 2-column micro-category grids.
* **Tablet Viewport:** `768px` – `1024px`.
  * Padding: `px-[32px]`.
  * Grid: 2-column deal grids, stacked auth panels.
* **Desktop Viewport:** `1440px`.
  * Padding: `px-[64px]` (Standard content), `px-[112px]` (Centered forms).
  * Grid: 4-column product grids, 6-column category strips, 50/50 split auth screens.
