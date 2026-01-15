# Zombie Delete

A single-page interactive React prototype demonstrating the global standard for verifiable data erasure with three distinct product tiers and integration methods, featuring a sleek enterprise design aesthetic.

## Application Overview

The application showcases Zombie Delete, the global standard for verifiable erasure that eliminates zombie data forever. It features a professional dark aesthetic with a navy background and responsive design optimized for both desktop and mobile screens. The application presents three product tiers (MKT Delete, ZKP Delete, PQR Delete) and three integration methods (Webhook, SDK, On-Chain).

## Color Scheme

- Background: `#0D1117` (Dark Gunmetal/Black)
- Accent Gradient: `#537BC4` (Muted Royal Blue / Cornflower Blue) to transparent, fading upward from bottom
- Alert Red: `#A83232`
- Matrix Green: `#00FF41`
- Text: `#FFFFFF` (uniform white text throughout all components)
- Button Background: `#FFFFFF` (white)
- Button Text: `#000000` (black)

## Typography

- Primary font: 'Inter' with fallback to 'SF Pro' for all text and data
- Clean, modern typography throughout for professional enterprise feel

## Navigation

The application features navigation between states:
- State 1 automatically transitions to State 2 when any product tier action button is clicked
- State 2 (Process) maintains automatic transition after 5 seconds
- State 3 is the final state with a "Go Back to Dashboard" button that returns to State 1
- "View Graveyard" buttons on State 1 and State 3 navigate to State 4 (Graveyard)
- State 4 (Graveyard) has a "Return to Dashboard" button that returns to State 1

## UI States

The application cycles through four states using React state management:

### State 1: Zombie Delete Dashboard

#### Hero Section
- **The output-onlinepngtools.png logo image replaces the text-based header title, displayed centered in the header against the black background with no visual bounding box or shadows**
- **Logo scales properly for both mobile and desktop screens while maintaining crisp quality**
- **Main heading: "First Product: Zombie Delete" with specific spacing matching reference layout**
- **Sub-headline: "Proof that data and AI memory are gone."**
- **Introduction paragraph: "Zombie Delete addresses the hardest problem in modern compliance. Verifiable deletion where trust is impossible or undesirable."**
- **Feature description: "ZKP-Delete The world's first provable deletion of data from immutable blockchains and traditional systems. Zero-knowledge proof of erasure. Off-chain and on-chain. Anonymous (ZKPd)."**
- **Enterprise statement: "Built for enterprise, AI governance, and regulatory environments."**
- Professional layout with visual hierarchy optimized for mobile and desktop
- **Text layout follows specific proportions and spacing from reference design:**
  - Main heading has generous top and bottom margins for visual breathing room
  - All paragraph text maintains consistent left alignment and width proportions
  - Line height and letter spacing optimized for clean readability
  - Paragraph spacing creates balanced white-space distribution
  - Text content is centered within the viewport with appropriate side margins
  - Responsive scaling maintains proportional spacing across desktop, iPad, and iPhone

#### Product Offering Section ("Zombie Delete Suite")
Three distinct product tiers displayed in visually distinct cards:

**Tier 1 – MKT Delete (Merkle Tree Delete)**
- Description: "The most affordable way to prove deletion. Uses Merkle Tree verification to create an immutable log of erased data."
- Pros/Cons: "Low cost, instant implementation. Note: Deleted metadata is public."
- Status: "Available Now" (displayed in Matrix Green)
- Action button for tier selection

**Tier 2 – ZKP Delete (Zero-Knowledge Proof)**
- Description: "The privacy standard. Proves data is gone without revealing what the data was."
- Pros/Cons: "Total privacy, GDPR compliant. Premium protection."
- Status: "Enterprise Pilot" (displayed in Matrix Green)
- Action button for tier selection

**Tier 3 – PQR Delete (Post-Quantum Resistant)**
- Description: "Future-proof security against quantum decryption attacks."
- Status: "When it's needed, it will be ready." (displayed in Matrix Green)
- Action button for tier selection

Each tier card features:
- Semi-transparent dark panels with rounded corners
- Consistent typography and spacing
- Pill-shaped action buttons with white background and black text

#### Integration Section ("How it Works")
Three integration method blocks displayed in clean layout:

**Webhook**
- Description: "For native database connections."
- Clean card layout with consistent styling

**SDK**
- Description: "For custom app development."
- Clean card layout with consistent styling

**On-Chain**
- Description: "For immutable ledger enforcement."
- Clean card layout with consistent styling

#### View Graveyard Button
- "View Graveyard" button positioned prominently on the dashboard
- Pill-shaped styling with white background and black text
- Navigates to State 4 (Graveyard) when clicked

**Mobile Responsiveness:**
- Hero section maintains hierarchy with adjusted layout for mobile
- Logo scales appropriately for mobile screens while maintaining quality
- Product tier cards stack vertically on smaller screens
- Integration blocks adapt to mobile layout
- Touch-friendly button sizing and spacing
- All content remains fully visible without clipping
- Text proportions and spacing scale responsively while maintaining reference layout ratios

### State 2: The Process
- Full-screen terminal interface that covers the entire viewport
- Background: solid black or very subtle static grid pattern for clean legibility
- Displays tier-specific ASCII art headers followed by fast-scrolling green text animation for 5 seconds
- **ASCII Art Headers by Tier:**
  - **MKT Delete:** Large ASCII art of a branching tree or block structure
  - **ZKP Delete:** Large ASCII art of a shield or closed eye
  - **PQR Delete:** Large ASCII art of an atom or grid
- Shows simulated log lines including:
  - "Connecting to Internet Computer Protocol..."
  - "Generating deletion proof..."
  - "Verifying erasure completion..."
  - "Planting cryptographic tombstone..."
- Enhanced "hacker terminal" visual effects:
  - Clean terminal interface without matrix rain animation
  - Neon green text style maintained for readability
  - Layered terminal log lines with staggered animations
  - Smooth fade-in/fade-out transitions for text lines
  - Improved typography with better spacing and readability using Inter font
  - Well-aligned ASCII art and logs that are responsive across screen sizes
  - **Visible active process indicators including subtle blinking cursors and slight log scrolling animations for realism**
  - **Tier-specific logs preserved: "Generating Merkle Tree" for MKT Delete and "Generating zk-SNARK proof" for ZKP Delete**
- **Footer system info displayed consistently: "Uptime: 99.97% | Packets: 2,847,392 | Encryption: AES-256-GCM"**
- Automatically transitions to State 3 after 5 seconds

### State 3: The Receipt
- Split-screen layout with content divided into left and right sections
- **Left side**: Contains the header "Deletion Verified" with green checkmark icon and explanatory text about zombie data elimination
- **Right side**: Displays the cryptographic proof data in a clean, minimalist card layout:
  - **All label headings display in solid white (#FFFFFF)** for visual consistency
  - **All proof data displays in pure white (#FFFFFF)** for enhanced visibility
  - "Proof Id: 0x7f8a...9c2"
  - "Tombstone Status: LOCKED (5 Years)"
  - "Restore Capability: BLOCKED"
- **"Go Back to Dashboard" button styled as pill-shaped with white background and black text**
- **"View Graveyard" button styled as pill-shaped with white background and black text**
- Layout features balanced symmetry with modern, professional spacing and Inter typography
- Footer contains centered logos for Internet Computer and Together Alone Ventures positioned at the bottom
- Split-screen layout stacks vertically on mobile devices

### State 4: Graveyard
- **Header**: "GRAVEYARD" displayed prominently at the top
- **Subtext**: "Global Tombstone Registry (Read-Only)" positioned below the header
- **Background color**: `#0D1117` (consistent with application theme)
- **Font family**: `Inter` with `SF Pro` fallback
- **Scrollable list/table of tombstones** displaying:
  - Tombstone ID
  - Proof ID (shortened hex format)
  - Product Tier (MKT Delete, ZKP Delete, or PQR Delete)
  - Tombstone Status: "LOCKED" (displayed in Matrix Green `#00FF41`)
  - Restore Capability: "BLOCKED" (displayed in Matrix Green)
  - Lock Duration: "5 Years"
- **Expandable rows**: Each row expands on click to reveal:
  - Full Proof ID
  - Timestamp
  - Short explanation: "This tombstone prevents any data resurrection from backups, ETL, or AI pipelines."
- **Visual styling**:
  - Semi-transparent dark panels for each tombstone entry
  - White text (`#FFFFFF`) for all content
  - Subtle fade transitions for expand/collapse animations
  - Professional, enterprise audit-grade visual style
- **Mobile responsive layout**:
  - Rows stack as readable cards on mobile screens
  - Maintains full readability across all screen sizes
  - Touch-friendly interaction for expanding rows
- **"Return to Dashboard" button** styled as pill-shaped with white background and black text
- **Frontend mock data** used to populate the tombstone list
- **Automatic tombstone addition**: New receipts from State 3 automatically append new tombstone entries to the graveyard list for continuity

## Technical Requirements

- Single-page React application with client-side state management only
- Responsive layout using Tailwind CSS, optimized for desktop, tablet, and mobile screens
- Mobile-first responsive design ensuring proper display on small screens without overflow or cutoff
- Support for both portrait and landscape orientations with proper scaling
- Smooth state transitions and animations using Tailwind transitions
- Clean terminal animation with tier-specific ASCII art headers
- No backend integration required - all functionality is frontend-only
- Terminal animation effects and pulsing button animations
- **Consistent white text color (#FFFFFF) applied globally through CSS**
- Enterprise-focused high-tech styling throughout
- **Heavy, serious, and production-grade feel with polished dark UI consistency**
- Frontend mock data management for graveyard tombstone entries
- Expandable row functionality with smooth animations

## Mobile Optimization

- Hero section adapts with maintained visual hierarchy
- Logo scales appropriately for mobile screens while maintaining crisp quality
- Product tier cards stack appropriately for mobile screens
- Integration method blocks adapt to mobile layout
- Full-screen terminal component adapts to all screen sizes without horizontal scrolling
- ASCII art and terminal logs remain well-aligned and responsive on mobile
- Buttons and interactive elements are properly sized for touch interaction
- Text and UI elements scale appropriately for mobile viewports
- Layout adjustments for both portrait and landscape orientations
- Proper spacing and padding for mobile usability
- Terminal effects optimized for mobile performance
- **Text layout proportions and spacing maintain reference design ratios across all screen sizes**
- Graveyard page adapts to mobile with card-based layout for tombstone entries
- Expandable tombstone rows work seamlessly on touch devices

## Styling Requirements

- **Dark gunmetal background with color #0D1117**
- **Accent gradient at bottom of page transitioning from #537BC4 (Muted Royal Blue) to transparent, fading upward for depth**
- **Inter font family with SF Pro fallback for all typography**
- **All buttons styled as pill-shaped (border-radius: 50px) with white background (#FFFFFF) and black text (#000000)**
- **Subtle hover and focus states for buttons maintaining professional appearance**
- **Footer area with smooth diffuse blue gradient**
- Enhanced contrast and readability on the dark background
- Consistent typography and spacing throughout the application
- Professional visual hierarchy and layout
- **Semi-transparent dark panels for data containers**
- **Alert Red (#A83232) for development status and critical indicators**
- **Matrix Green (#00FF41) for available status and positive indicators**
- Clean modern full-screen layout with proper visual hierarchy
- Visually balanced design that fills the screen effectively
- Cohesive mobile and desktop presentation with proper visual alignment and typography scaling
- **High-tech enterprise aesthetic with sleek, professional styling throughout**
- **Text layout spacing and proportions match reference design for optimal readability and visual balance**
- **App content language: English**
