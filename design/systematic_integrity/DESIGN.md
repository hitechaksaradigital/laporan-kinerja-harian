---
name: Systematic Integrity
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#434655'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#006242'
  on-tertiary: '#ffffff'
  tertiary-container: '#007d55'
  on-tertiary-container: '#bdffdb'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  button-text:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  sidebar-width: 260px
  container-max: 1440px
  gutter: 1.5rem
  margin-mobile: 1rem
  margin-desktop: 2rem
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 2rem
---

## Brand & Style
The design system is engineered for high-density data management within an enterprise environment. It prioritizes clarity, speed of cognition, and trust. The visual style is **Corporate Modern**, utilizing a structured grid and a refined color palette to reduce cognitive load for users managing daily activity reports and complex workflows.

The system aims to evoke a sense of reliability and precision. By balancing generous whitespace with high-readability typography, the UI transitions from a mere tool to a professional workspace that feels both authoritative and approachable.

## Colors
This design system utilizes a functional color palette where color is directly tied to system status and hierarchy.

- **Primary (Corporate Blue):** Reserved for primary actions, active navigation states, and brand presence.
- **Secondary (Slate Gray):** Used for supporting text, iconography, and non-interactive UI boundaries.
- **Success (Emerald):** Indicates approved reports, completed tasks, and positive growth metrics.
- **Warning (Amber):** Highlights pending approvals, required revisions, or attention-needed states.
- **Surface (Slate 50):** The primary background color to reduce eye strain during long working sessions.

The system relies on a neutral scale derived from Slate to maintain a cohesive, cool-toned professional atmosphere.

## Typography
Inter is the foundational typeface, selected for its exceptional legibility in data-heavy interfaces. The type scale is built on a 1.25x major third scale to ensure distinct hierarchy between report titles, section headers, and tabular data.

- **Headlines:** Use Bold and SemiBold weights to anchor the page.
- **Data Display:** Utilize `body-md` for standard report content.
- **Labels:** Use `label-md` with uppercase styling for table headers and small metadata tags to distinguish them from editable content.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid** model. A persistent left-hand sidebar (fixed at 260px) provides global navigation, while the main content area utilizes a fluid grid that caps at 1440px for optimal line lengths.

- **Desktop:** 12-column grid with 24px gutters. Main content is housed in "work cards" that stack vertically.
- **Tablet:** 8-column grid. The sidebar can collapse into an icon-only rail to maximize workspace.
- **Mobile:** 4-column grid. The sidebar moves to a bottom navigation bar or a hamburger menu. 
- **Rhythm:** All spatial relationships are multiples of 4px to maintain mathematical harmony.

## Elevation & Depth
Depth is signaled through **Tonal Layers** and subtle **Ambient Shadows**.

1.  **Level 0 (Base):** The #F8FAFC background.
2.  **Level 1 (Cards):** White (#FFFFFF) surfaces with a 1px border (#E2E8F0) and a soft, low-blur shadow (Y: 1px, B: 3px, Opacity: 0.05). This is the standard container for reports.
3.  **Level 2 (Modals/Dropdowns):** White surfaces with a more pronounced shadow (Y: 4px, B: 12px, Opacity: 0.1) to indicate interaction priority.

Avoid heavy shadows or dark overlays. The goal is a "flat plus" look where depth is secondary to information.

## Shapes
The design system uses a **Rounded** (8px) corner strategy. This softens the industrial nature of ERP software without appearing overly consumer-focused.

- **Standard Elements:** Buttons, Inputs, and Small Cards use 8px (`0.5rem`).
- **Large Containers:** Dashboard widgets and main report sections use 16px (`1rem`) for a more modern, framed look.
- **Selection Indicators:** Pill shapes (full rounding) are used exclusively for status chips (e.g., "Approved").

## Components

### Buttons
- **Primary:** Solid #2563EB with white text. 8px radius.
- **Secondary:** White background with #E2E8F0 border and #64748B text.
- **Ghost:** No background/border, used for "Cancel" or "Clear" actions.

### Inputs & Selects
Field labels are always top-aligned. Input borders are #CBD5E1, changing to #2563EB on focus. Error states use a #EF4444 border and helper text.

### Status Chips
Small, low-height indicators with light background tints.
- **Approved:** Light Emerald background with Emerald text.
- **Pending:** Light Amber background with Amber text.

### Data Tables
Tables are the heart of the system. Rows have a 1px bottom border (#F1F5F9). Alternate row striping is not used; instead, use a hover state (#F8FAFC) to help users track information horizontally.

### Activity Cards
Individual daily reports should be encapsulated in Level 1 cards with a clear header containing the date, employee name, and status chip.