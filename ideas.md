# Wonder Trail Mysteries — KDP Preview Design Notes

## Theme Name: Sunlit Storybook Desk

**Very Brief Intro:** A warm editorial preview experience that feels like opening a beautifully prepared children’s book on a calm studio table. Cream paper, garden greens, golden squash yellow, blue ink, and tactile page cards keep the interface close to the book’s own visual world while preserving a professional production-review feel.

**Probability:** 0.04

## Theme Name: Field Notebook Archive

**Very Brief Intro:** A quiet natural-history archive with specimen labels, observation notes, and measured page metadata. It is more documentary and restrained, foregrounding structure and evidence over theatrical storybook atmosphere.

**Probability:** 0.07

## Theme Name: Midnight Lantern Library

**Very Brief Intro:** A dark, intimate reading-room interface with warm lantern highlights, deep ink blues, and glowing page edges. It would feel atmospheric and premium but would move the preview away from the bright daytime garden identity of the book.

**Probability:** 0.02

## Selected Direction: Sunlit Storybook Desk

### Design Movement

Contemporary editorial children’s publishing with tactile paper craft, natural-history ephemera, and restrained Swiss-style information hierarchy. The prototype should feel like a professional art director’s proofing desk rather than a generic app dashboard.

### Core Principles

1. The book preview is the hero: interface chrome stays quiet while page spreads, page turns, and text placement receive the strongest visual emphasis.
2. Paper, ink, and garden materials create depth: warm off-white pages, faint grain, soft shadows, taped labels, and subtle folio marks replace flat software panels.
3. Layout information is editorial, not technical: metadata appears as small production notes, trim indicators, type specimens, and proof flags.
4. Every control should support a concrete review action: reading mode, spread navigation, text-placement overlays, mobile preview, or print-safe checks.

### Color Philosophy

Use a signature **squash-gold** to connect the interface to the central mystery and highlight approved or selected states. Garden green establishes trust and continuity; sky blue provides air and navigation; warm brown supplies ink-like grounding; berry red is reserved for proof flags and important warnings. Avoid purple gradients and excessive saturation. The interface background should feel like warm studio paper, while the preview pages remain the brightest visual objects.

### Layout Paradigm

Use a split editorial workspace: a slim left rail for the book identity and review modes, a dominant center stage for the current page/spread, and a narrow right proof rail for production metadata and text-placement checks. On smaller screens, collapse the rails into a top bar and bottom proof drawer. Avoid a centered marketing hero; this is a working proofing environment organized around an asymmetric reading canvas.

### Signature Elements

1. A hand-taped “proof” label with a small leaf mark, used for status and section headers.
2. Thin red thread lines connecting evidence chips, echoing the clue-board prop in the story.
3. Cream page cards with subtle deckled-edge texture, warm shadow, and tiny folio marks.

### Interaction Philosophy

Interactions should feel like handling a physical proof: page navigation slides with a short paper-like ease, selection states use a pencil-line border, and review toggles reveal overlays rather than opening unrelated modal chrome. Controls should be quick and calm, with no unnecessary gamification. Every placeholder control must communicate whether it is active, ready for review, or not yet implemented.

### Animation

Use restrained transitions under 240ms. The current spread should crossfade and translate a few pixels on page change, never flip like a novelty book animation. The proof rail may softly reveal when toggled. Respect reduced-motion preferences. Hover states can lift a page card by 2px and deepen its shadow; focus states use a clear squash-gold ring.

### Typography System

Use **Fraunces** for book titles, spread names, and expressive labels; use **DM Sans** for interface copy, metadata, controls, and reading text. Headlines should be compact and literary, while the body uses comfortable 1.55 line-height. Keep production notes in small uppercase or tracked labels only when they remain legible. Do not use Inter.

### Brand Essence

A calm production desk for turning *Wonder Trail Mysteries* into a polished, child-friendly book that adults can trust and young readers can follow. Personality: **observant, warm, exacting**.

### Brand Voice

Headlines are specific and quietly confident. CTAs are action-oriented but not salesy. Microcopy sounds like an editor guiding a careful proof review.

Example lines:

- “Read the mystery as a finished book.”
- “Check the clue path before the page goes to print.”

### Wordmark & Logo

Use a simple leaf-and-trail mark: three small overlapping leaf silhouettes forming a winding path through the negative space, paired with the *Wonder Trail* name in Fraunces. The icon should appear as a compact stamp in the left rail and on the preview cover, never as a generic circular badge.

### Signature Brand Color

**Squash Gold — #E6A83B.** It is warm, ownable, and directly connected to the yellow squash flowers and the book’s recurring clue color. Use it for active navigation, folio accents, and proof highlights—not as a broad gradient or full-page background.

## File-specific style reminder

Frontend files should preserve the Sunlit Storybook Desk direction: asymmetrical editorial workspace, paper-toned surfaces, Fraunces + DM Sans typography, squash-gold proof accents, garden-green navigation, quiet natural texture, and restrained page-motion. When choosing a UI treatment, ask: **Does this feel like a thoughtful publishing proof desk, or like generic software?**
