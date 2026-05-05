---
name: Monolithic Engineering
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#383939'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1b1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#292a2a'
  surface-container-highest: '#343535'
  on-surface: '#e3e2e2'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e3e2e2'
  inverse-on-surface: '#303031'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#c8c6c5'
  on-secondary: '#303030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#ffffff'
  on-tertiary: '#313030'
  tertiary-container: '#e5e2e1'
  on-tertiary-container: '#656464'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1b1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c9c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#121414'
  on-background: '#e3e2e2'
  surface-variant: '#343535'
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 120px
    fontWeight: '800'
    lineHeight: 110%
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 120%
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 130%
  body-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 160%
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 160%
  label-mono:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 100%
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1440px
  section-gap: 12rem
  gutter: 2rem
  margin-page: 4rem
  stack-sm: 1rem
  stack-md: 2rem
---

## Brand & Style

The brand identity centers on the intersection of high-end product design and rigorous engineering. It targets recruiters at top-tier tech firms and design-led engineering studios, evoking a feeling of "sophisticated technical authority." 

The design style is a hybrid of **Minimalism** and **High-Contrast Boldness**. It utilizes massive, confident typography and a strict monochrome palette to eliminate distractions, forcing focus onto the quality of work and the precision of the underlying code. The aesthetic is intentionally "oversized," using scale as a primary tool for visual hierarchy.

## Colors

The palette is strictly achromatic to emphasize structural integrity and technical clarity.

- **Primary Background:** `#0A0A0A` serves as the canvas, providing a deep, immersive dark mode that reduces eye strain and highlights content.
- **Surface Level:** `#1D1D1D` is used for containers, card backgrounds, and structural sections to create subtle depth against the pure black background.
- **Primary Content:** `#FFFFFF` is used for all major headings and high-priority text to ensure maximum readability and impact.
- **Secondary Content:** `#888888` (Neutral) is applied to labels, metadata, and body text to establish a clear information hierarchy and reduce visual noise in dense technical descriptions.

## Typography

This design system relies on extreme typographic contrast.

- **Headlines:** Use `Plus Jakarta Sans` for a modern, geometric feel that mimics the "Larsseit" aesthetic. Display sizes are intentionally massive, often spanning the width of the viewport to create an editorial, high-impact feel.
- **Body Text:** `Inter` is utilized for its supreme legibility in technical contexts and project descriptions. It provides a neutral, functional counterpoint to the bold headings.
- **Accents/Meta:** `Space Grotesk` is used for "monospace-style" accents, such as tech stacks, git hashes, or dates. This reinforces the Computer Science Engineering narrative through a technical, futuristic character.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy with generous breathing room. 

- **Grid:** A 12-column grid is used for desktop layouts, with a significant `section-gap` between content blocks to ensure each project or statement feels monumental.
- **Rhythm:** Vertical rhythm is driven by large-scale white space. Sections are separated by `12rem` or more to create a "scrolling gallery" experience.
- **Alignment:** Content is generally center-aligned or aligned to a strict left-axis to maintain a clean, architectural structure. Engineering projects are presented in large, single-column or 2-column cards to maintain focus.

## Elevation & Depth

Depth is achieved through **Tonal Layering** rather than traditional shadows. 

- **Layering:** The primary background is the deepest layer (`#0A0A0A`). Project cards and "Latest Work" sections sit on the secondary surface (`#1D1D1D`), creating a subtle, sophisticated lift.
- **Ghost Outlines:** Elements like buttons or chips use low-contrast outlines (`rgba(255, 255, 255, 0.1)`) to define boundaries without adding visual weight.
- **Transitions:** Depth is also conveyed through motion. As users scroll, elements should fade in or slide up slightly with a "heavy" easing (cubic-bezier 0.16, 1, 0.3, 1), suggesting physical weight and premium quality.

## Shapes

The shape language is refined and consistent. While the brand is "bold," the corners are **Rounded** to prevent the UI from feeling overly aggressive or "brutalist."

- **Standard Radius:** 0.5rem (8px) for buttons and small cards.
- **Large Radius:** 1.5rem (24px) for major project containers and images, creating a "smooth-tech" feel.
- **Pill Shapes:** Used exclusively for tags and status indicators (e.g., "Available for Work") to create distinct visual interest against the predominantly rectangular grid.

## Components

- **Buttons:** Primary buttons are pill-shaped with white backgrounds and black text. Secondary buttons are "ghost" style with a thin border and high-contrast hover states (background color fills on hover).
- **Cards:** Project cards are the centerpiece. They use a dark-on-dark approach (slightly lighter than background) with high-quality monochrome imagery. Text labels inside cards use the Mono accent font.
- **Navigation:** A minimalist floating header or fixed top bar. The navigation should be nearly invisible, using small icons or labels in the Mono accent font to stay out of the way of the content.
- **Chips/Tags:** Used for tech stacks (e.g., "React", "Rust"). These are small, pill-shaped, with a subtle border and no fill, ensuring the typography does the work.
- **Progressive Disclosure:** Use smooth accordion-style reveals for technical project details to keep the main view minimalist while allowing deep-dives into engineering documentation.