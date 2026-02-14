# Portfolio Redesign — Hacker/Terminal Aesthetic

**Date:** 2026-02-14
**Status:** Approved
**Goal:** Eliminate the generic AI-portfolio look from all sections below the hero. Each section gets a unique layout. Consistent hacker/terminal visual language ties everything together.

---

## Global Visual System

### Background
- Subtle CSS grid pattern applied to the page body (thin `#1a1a1a` lines on `#000`)
- Pure CSS, no images — `repeating-linear-gradient` or `background-size` grid
- Persistent across all sections (not per-section)

### Card Treatment
- Replace all `rounded-2xl` with clipped corners via CSS `clip-path`
- Diagonal notch cuts on top-left and bottom-right corners (~12px)
- Border: `1px solid #222` (subtler than current `gray-800`)
- Hover: instant `2px solid #BFE600` border snap (no gradient glow)

### Typography
- Section headings: left-aligned (trial, can revert to centered)
- Lime uppercase labels get `> ` prefix (terminal prompt style)
- Add JetBrains Mono (monospace) for: stat numbers, tech tags, step numbers
- Body text stays Inter, headings stay Outfit

### Animations
- Keep existing Framer Motion `whileInView` triggers
- Consider snappier timing but not a hard requirement

---

## Section Redesigns

### 1. About Section
**Current:** Centered text block + 4 stats in a horizontal row.

**New layout:** 2-column split
- **Left column (~60%):** Bio text in a clipped-corner card, left-aligned
- **Right column (~40%):** Stats stacked vertically, each in its own small clipped card
- Stat numbers use monospace font, large size
- Feels like a personnel dossier / terminal profile

### 2. Services Section
**Current:** 2x2 grid of identical bordered cards.

**New layout:** Single-column stack of horizontal bars
- Each service is a full-width row
- Icon on the left, title + short description on the right
- Thin lime vertical line separates icon from text
- Hover/click: bar expands to show extended description (accordion)
- Feels like a command menu or system module list

### 3. Projects Section
**Current:** Alternating image-left/image-right layout, 3 projects identical in treatment.

**New layout:** Featured hero + bento grid
- **First project:** Full-width hero card — large screenshot/video area on top, title + description + tags below
- **Remaining projects:** 2-column bento grid below, more compact cards
- Creates visual hierarchy — best work dominates
- All cards use clipped corners

### 4. TechStack Section
**Current:** 3-column grid of category cards with tag pills.

**New layout:** Horizontal marquee ticker rows
- Each category gets its own horizontal row
- Category name fixed on the left side
- Tech tags auto-scroll right-to-left in a marquee/ticker
- Feels like a system monitor or stock ticker
- Smooth infinite scroll animation via CSS or Framer Motion

### 5. Process Section ("How I Work")
**Current:** Vertical timeline with alternating left/right cards. Overused pattern.

**New layout:** Horizontal 3-column stepper
- 3 columns side by side, each step is a clipped-corner card
- Large monospace step number (`01`, `02`, `03`) in top corner
- Week indicator, title, description below
- Thin horizontal connecting line runs across the top of all 3 cards
- No vertical timeline, no alternating layout

### 6. Testimonials Section
**Current:** 3 identical quote cards in a row.

**New layout:** Single featured testimonial carousel
- One testimonial displayed large — big quote text, name/role below
- Takes up most of the section width
- Navigation dots or arrows to cycle between testimonials
- No auto-play
- Spotlights each client individually

### 7. Contact Section
**Current:** Centered text + CTA buttons.

**New layout:** Minimal changes
- Left-align the text and buttons
- Apply clipped corners to buttons
- Add blinking cursor `█` after the heading text
- Grid background carries through from global change

---

## Implementation Order

1. Global: Add JetBrains Mono font to layout
2. Global: Add CSS grid background pattern to page/body
3. Global: Create reusable clipped-corner CSS utility
4. Global: Update section heading style (left-align + prompt prefix)
5. About section redesign
6. Services section redesign
7. Projects section redesign
8. TechStack section redesign
9. Process section redesign
10. Testimonials section redesign
11. Contact section redesign
12. Review and polish

---

## Technical Notes

- Framework: Next.js 16 + React 19 + Tailwind CSS 4
- Animations: Framer Motion (already installed)
- Clip-path: CSS native, no library needed
- Marquee: CSS animation or Framer Motion
- Carousel: Framer Motion AnimatePresence for testimonial transitions
- Font: JetBrains Mono via Google Fonts (add to next/font config)
