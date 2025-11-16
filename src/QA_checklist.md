# AquaSure QA Checklist
## Authentication and Routing
- [ ] Login page loads correctly without "Login as..." buttons
- [ ] Email-based routing works as expected:
  - [ ] `superadmin@aquasure.com` → Super Admin dashboard
  - [ ] `admin@aquasure.com` → LGU Admin dashboard
  - [ ] Consumer emails (e.g., `@gmail.com`) → Fisher dashboard
- [ ] Registration creates a new user with "Fisher" role by default
- [ ] Logout works correctly and redirects to login page
- [ ] "Back to Home" button on Login/Signup pages works
## Maps and GPS Tracking
- [ ] Satellite maps load correctly on all pages using Esri World Imagery
- [ ] Map falls back to OpenStreetMap if satellite tiles fail to load
- [ ] Markers for fishers display correctly with proper icons
- [ ] Marker clustering works when zooming out
- [ ] Clicking on markers shows tooltips with fisher information
- [ ] Map layer toggle (Satellite/Street/Risk overlay) works
- [ ] Emergency Report button appears for Fisher users
- [ ] Emergency Report modal opens and submits correctly
- [ ] Admin sees only fishers in their region
- [ ] Super Admin sees all fishers across regions
## Dark Mode and UI
- [ ] Dark mode toggle works and persists in localStorage
- [ ] Cards are readable in dark mode (not white cards on dark background)
- [ ] All text has proper contrast in both light and dark modes
- [ ] Icons are visible in dark mode
- [ ] Button styles are consistent and modern
- [ ] Rounded corners and glass effects render correctly
## Nemo AI Assistant
- [ ] Nemo chat opens and closes correctly
- [ ] Recommendations panel shows relevant fish species
- [ ] Chat sends and receives messages
- [ ] Quick suggestions work when clicked
- [ ] Pin/unpin functionality works for important information
- [ ] Chat is responsive on mobile devices
## Pet Fish Visuals
- [ ] Pet fish images load correctly based on level
- [ ] Feeding animation works
- [ ] Level-up animation displays when fish levels up
- [ ] XP and health bars update correctly
- [ ] Fish details modal shows correct information
- [ ] Rest mode toggle works
## Insurance Hub
- [ ] Insurance coverage calculation based on fish level works
- [ ] AquaBites shop displays packages correctly
- [ ] Purchase modal opens and processes transactions
- [ ] Wallet balance updates after purchases
- [ ] Leaderboard displays correctly
## Other Features
- [ ] Community chat shows messages and updates in real-time
- [ ] Emergency reports appear on Admin and Super Admin dashboards
- [ ] Admin can create announcements that appear for users
- [ ] Weather alerts display correctly
- [ ] Fish Hub recommendations are relevant to location
## Mobile Responsiveness
- [ ] Sidebar collapses on mobile
- [ ] Maps are usable on mobile devices
- [ ] Chat and modals are properly sized on mobile
- [ ] Forms and buttons are accessible on touch devices
## Accessibility
- [ ] Keyboard navigation works for all interactive elements
- [ ] ARIA attributes are present where needed
- [ ] Color contrast meets WCAG standards
- [ ] Form validation provides clear error messages
- [ ] Focus states are visible for keyboard users
## Performance
- [ ] Map tiles load efficiently
- [ ] Loading skeletons appear during data fetching
- [ ] No console errors during normal operation
- [ ] App remains responsive during data updates