---
name: Rivaldi Putra Portfolio
description: A calm, precise portfolio system for production-minded frontend and product engineering.
colors:
  signal-ink: "oklch(0.22 0.05 250)"
  calm-canvas: "oklch(0.965 0.018 85)"
  quiet-surface: "oklch(0.97 0.015 85)"
  structured-muted: "oklch(0.93 0.02 82)"
  measured-gold: "oklch(0.72 0.11 75)"
  soft-gold: "oklch(0.75 0.09 75)"
  rule-gold: "oklch(0.82 0.05 75)"
  night-ink: "oklch(0.18 0.03 250)"
typography:
  display:
    fontFamily: "Playfair Display, Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(3.4rem, 8vw, 4.5rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Playfair Display, Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.25rem, 6vw, 3.75rem)"
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Playfair Display, Cormorant Garamond, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.18em"
rounded:
  frame-sm: "4px"
  frame-md: "6px"
  tag: "2px"
  dock: "13.6px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "64px"
components:
  link-primary:
    textColor: "{colors.signal-ink}"
    padding: "0 0 4px"
  tag-gold:
    backgroundColor: "oklch(0.72 0.11 75 / 0.2)"
    textColor: "{colors.signal-ink}"
    rounded: "{rounded.tag}"
    padding: "4px 10px"
  portrait-frame:
    backgroundColor: "{colors.quiet-surface}"
    rounded: "{rounded.frame-sm}"
    padding: "14px"
  mobile-dock:
    backgroundColor: "{colors.calm-canvas}"
    textColor: "{colors.signal-ink}"
    rounded: "{rounded.dock}"
---

# Design System: Rivaldi Putra Portfolio

## 1. Overview

**Creative North Star: "The Systems Ledger"**

This design system should feel like a polished technical record: structured, legible, and quietly crafted. The page presents Rivaldi Putra as an engineer who values production clarity, so the visual system must make hierarchy, spacing, and interaction states feel intentional rather than decorative.

The current identity uses an archival serif, deep ink text, a restrained canvas, and measured gold accents. Preserve the calm editorial discipline already present, but do not let it slide into an AI-generated beige editorial template. Every flourish, frame, divider, and motion cue must support scanning, credibility, or conversion.

**Key Characteristics:**
- Quiet confidence with visible structure.
- Serif display type used as a signature, not as decoration everywhere.
- Gold accent used sparingly for links, dividers, active states, and frames.
- Mobile-first readability with generous line-height and clear hit targets.
- Subtle motion that respects reduced-motion settings.

## 2. Colors

The palette is a restrained ink, canvas, and gold system. It should feel measured and engineered, not ornate for its own sake.

### Primary
- **Signal Ink**: The primary text and structural color. Use it for headings, body text, icons, and the strongest navigation states.
- **Measured Gold**: The signature accent. Use it for active navigation, link underlines, ornamental rules, tag borders, frame details, and tiny moments of emphasis.

### Secondary
- **Soft Gold**: A softer accent for focus rings, loading motion, and gentle decorative highlights. It should never overpower Signal Ink.

### Neutral
- **Calm Canvas**: The page background. Keep it quiet and readable, with enough contrast against Signal Ink for WCAG AA text.
- **Quiet Surface**: The framed-image and elevated-surface background. Use when an object needs a contained, crafted feel.
- **Structured Muted**: Muted panels and secondary tonal areas. Use for low-emphasis surfaces, not body text.
- **Rule Gold**: Borders and dividers. It gives structure without creating heavy boxes.
- **Night Ink**: Dark-mode foundation and the deepest atmospheric color.

### Named Rules
**The Measured Gold Rule.** Gold is a signal, not a fill color. Keep it rare, mostly on lines, underlines, borders, active states, and small ornaments.

**The No Beige Template Rule.** Calm Canvas may stay because it is already committed identity, but new sections must prove structure through layout and content, not by adding more parchment effects.

## 3. Typography

**Display Font:** Playfair Display, with Cormorant Garamond and Georgia fallbacks.  
**Body Font:** Inter, with system-ui fallback.  
**Label/Mono Font:** No separate mono system is used.

**Character:** The type pairing balances formal display craft with practical interface readability. Display type carries identity, while body type carries speed, clarity, and production credibility.

### Hierarchy
- **Display** (900, fluid large display, 1 line-height): Used for the homepage name and major page titles. Keep display headings balanced and avoid max sizes that overflow on mobile.
- **Headline** (900, large serif, tight line-height): Used for page-level headings such as selected works and narrative sections.
- **Title** (700, 1.25rem, 1.2 line-height): Used for project names, section cards, and compact content headers.
- **Body** (400, 1rem to 1.06rem, 1.75 to 1.95 line-height): Used for paragraphs, project descriptions, article content, and experience details. Keep prose around 65 to 75 characters per line.
- **Label** (600, 0.75rem or smaller, 0.18em tracking): Used for metadata, tags, and compact status details. Uppercase is allowed only for short labels.

### Named Rules
**The Serif Signature Rule.** Serif type is the identity marker. Use it for display hierarchy and selected titles, not for every small piece of interface text.

**The Readability Wins Rule.** Body text must stay dark enough against Calm Canvas. If a text color feels elegant but reads faint, it is wrong.

## 4. Elevation

This system uses soft archival depth. Most structure comes from spacing, borders, and tonal contrast. Shadows are reserved for framed portrait treatments, the mobile dock, code blocks, and special surfaces that need physical separation.

### Shadow Vocabulary
- **Frame Depth** (`0 20px 40px -20px oklch(0.2 0.05 250 / 0.35)`): Use only for image frames or signature visual objects.
- **Dock Depth** (`0 20px 40px -24px oklch(0.2 0.05 250 / 0.38)`): Use for fixed mobile navigation and similar floating interface chrome.
- **Code Depth** (`0 14px 28px -22px oklch(0.2 0.05 250 / 0.45)`): Use for article code blocks only.

### Named Rules
**The Flat-Until-Meaningful Rule.** Do not add shadows to make plain content feel designed. Use shadow only when the object is physically layered or functionally floating.

## 5. Components

### Buttons
- **Shape:** The site currently uses text links more than filled buttons. If a primary button is added, use gently squared corners, not pill shapes.
- **Primary:** Signal Ink background with Calm Canvas text, compact vertical padding, and clear verb-object labels.
- **Hover / Focus:** Hover may shift toward Measured Gold. Focus must use a visible outline or ring that does not rely on color alone.
- **Secondary / Ghost / Tertiary:** Underlined text links are the default call-to-action style. Use Measured Gold underline at 2px thickness with clear offset.

### Chips
- **Style:** Gold-tinted background, Rule Gold border, Signal Ink text, tight rectangular radius. Chips should feel like metadata, not badges from a SaaS template.
- **State:** Chips are informational unless explicitly interactive. If made interactive, add focus-visible treatment and a non-color state cue.

### Cards / Containers
- **Corner Style:** Small, precise radii on frames and containers. Avoid large rounded cards.
- **Background:** Quiet Surface over Calm Canvas when a surface needs containment.
- **Shadow Strategy:** Follow the Flat-Until-Meaningful Rule. Most content should use dividers and spacing instead of drop shadows.
- **Border:** Gold-toned borders should be thin and structural. Avoid side-stripe borders.
- **Internal Padding:** Use moderate spacing that preserves density, especially for projects and experience lists.

### Inputs / Fields
- **Style:** There are no committed form inputs in the current site. If added, use Calm Canvas or Quiet Surface, a 1px Rule Gold border, small radius, and Signal Ink text.
- **Focus:** Use a clear Soft Gold ring plus structural outline or border shift.
- **Error / Disabled:** Error states must include text or icon support, never color alone.

### Navigation
- **Style, typography, default/hover/active states, mobile treatment.** Desktop navigation is quiet text with a Measured Gold active underline. Hover shifts to gold. Mobile navigation uses a fixed dock with four labeled icons, compact typography, subtle blur, and a visible active state. Keep navigation labels direct and stable.

### Signature Component: Ornate Frame
The ornate frame is the strongest visual signature. It wraps the portrait with a small-radius surface, animated gold conic border, dashed inner rule, and subtle frame depth. Use it sparingly. It should mark important personal imagery, not become a generic card wrapper.

## 6. Do's and Don'ts

### Do:
- **Do** preserve the precise, craft-focused, grounded tone from PRODUCT.md through spacing, hierarchy, and readable content.
- **Do** use Measured Gold for active states, link underlines, dividers, and frame details.
- **Do** keep mobile readability strong with clear line-height, safe bottom spacing, and tappable navigation.
- **Do** include reduced-motion alternatives for loading, page transitions, and frame animation.
- **Do** make resume, email, LinkedIn, and project paths easy to find.

### Don't:
- **Don't** make this feel like a generic SaaS landing page.
- **Don't** make this feel like an overly corporate resume page.
- **Don't** turn it into a flashy hacker or terminal-themed developer portfolio.
- **Don't** add AI-generated beige editorial template patterns. The current canvas is identity, not permission to add more parchment styling.
- **Don't** create a chaotic animation-heavy portfolio. Motion must stay subtle, useful, and non-distracting.
- **Don't** use template-looking identical card grids, gradient text, side-stripe borders, or decorative glassmorphism.
