# Specification

## Summary
**Goal:** Replace the current default landing experience with a dedicated Valentine website for **Ahana & Suvo**, featuring cute romantic visuals, animations, an interactive proposal flow, and a 4-theme style switcher.

**Planned changes:**
- Make a new Valentine page the app’s default rendered route while keeping the existing Isabella/VoiceCompanionPage code in the codebase (not deleted).
- Ensure **“Ahana & Suvo”** appears together across all major visible sections and states (headers, love note, CTA, and success/celebration message).
- Add Valentine animations: floating hearts layer, sparkles/particles layer, and a celebration effect (e.g., confetti) triggered on a “Yes” acceptance action, with motion reduced/disabled when `prefers-reduced-motion` is enabled.
- Implement an interactive proposal moment/flow with a clear “Will you be my Valentine?” CTA, a “Yes” action leading to a success/celebration state including both names, plus at least one extra playful micro-interaction (“cute gesture”).
- Add a theme/style selector with four themes: (1) cute pink hearts everywhere, (2) floating hearts + sparkles, (3) anime theme, and (4) elegant romantic red theme; apply theme changes consistently across the page.
- Apply a coherent Valentine design system (romantic palette, typography, spacing, components) and keep all user-facing text in English (avoid blue/purple by default).
- Update the HTML document title and meta description to reflect a Valentine website for **Ahana & Suvo** (not Isabella branding).

**User-visible outcome:** Opening the app shows a Valentine website for **Ahana & Suvo** with selectable romantic themes, cute animated effects (with reduced-motion support), and an interactive proposal flow where tapping “Yes” triggers a celebratory success message featuring both names.
