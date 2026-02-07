# Specification

## Summary
**Goal:** Convert the existing Ahana Valentine/proposal single-page site into a simple, cute, text-only Valentine message (no photos), clearly from Suvo.

**Planned changes:**
- Remove all photo usage and references from the UI (including any references to `/assets/photos/IMG_3752.jpeg`, `/assets/photos/IMG_3753.jpeg`, and `IMG_5979.jpeg`), ensuring no photo placeholders remain.
- Restructure/keep the page as a Valentine-themed single-page layout in English: hero addressed to Ahana, short love note/letter signed by Suvo, a static reasons list, and a closing CTA section.
- Update the closing interaction to be Valentine-focused (e.g., “Ahana, will you be my Valentine?”), keeping it one-step (or at most two steps) and optionally adding a lightweight celebration effect that respects `prefers-reduced-motion`.

**User-visible outcome:** A clean, cute, text-only Valentine page for Ahana from Suvo that ends with a simple Valentine CTA and a celebratory “Yes” completion (with motion reduced when the user prefers reduced motion).
