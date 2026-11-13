New India Automotive
A responsive multi-page business website for New India Automotive, a
commercial vehicle accident repair workshop based in Bhiwandi,
Maharashtra.
- Live website: https://new-india-automotive.vercel.app/
- GitHub repository:
  https://github.com/altafshaikh7/new-india-automotive
- Established: 2017
- Business focus: Commercial vehicle accident repair
- Address: Bhatale, Vehele, Bhiwandi, Maharashtra 421302, India
Table of Contents
- Overview
- Business Information
- Features and Pages
- Technology Stack
- Architecture
- Project Structure
- Routing
- Content Architecture
- Assets
- SEO
- Customer Contact Flows
- Local Setup
- Scripts
- Environment Variables
- Deployment
- Current Limitations
- Future Improvements
- Contributing
- License
Overview
New India Automotive needed a professional online presence where
customers could learn about the workshop, explore commercial vehicle
repair services, view supported vehicle brands and workshop photographs,
and contact the business.

This project delivers a multi-page website built with the Next.js App
Router. It uses reusable React components, centralized TypeScript
content modules, locally hosted image assets, responsive layouts, page
metadata, and generated sitemap and robots routes.

The website is deployed on Vercel.
Business Information
  Field               Details
  Business name       New India Automotive
Established         2017
Business category   Commercial Vehicle Accident Repair
Address             Bhatale, Vehele, Bhiwandi
State               Maharashtra
PIN code            421302
Country             India
Primary phone       8237263878
Alternate phone     8149949328
Email               newindiaautomotivebuisness@gmail.com

Business details are centralized in src/content/company.ts.
Features and Pages
Home --- /
The homepage is composed of reusable sections under
src/components/home/, including: - Hero section - Company
introduction - Services overview - Brand showcase - Company statistics -
Why choose us - Insurance overview - Gallery preview - FAQ preview -
Testimonials - Call-to-action section
About Us --- /about
Presents company background, workshop focus, highlights, values, and
awards/recognition content. The page also includes the directors and
awards presentation.
Services --- /services
Displays the service catalogue, currently defined in
src/content/services.ts: - Accident Repair - Chassis Repair -
Denting - Painting - Mechanical Repair - Electrical Work - Truck Body
Repair - Towing Service
Service details --- /services/[slug]
A dynamic route renders an individual service from its slug. Static
route parameters and page metadata are generated from the service data.
Unknown slugs use Next.js not-found handling.
Brands --- /brands
Displays the brands currently listed in company.brands, with locally
stored logo images. The company content currently lists Ashok Leyland,
Eicher, Tata, and Mahindra.
Gallery --- /gallery
Displays workshop photographs stored in the public assets directory.
Contact --- /contact
Provides primary and alternate phone links, email, WhatsApp enquiry
link, workshop address, Google Maps directions, and a link to the
appointment request page.
Book Appointment --- /book-appointment
Provides phone and WhatsApp actions so customers can discuss a repair
and request a suitable time. Online appointment booking is not
implemented. Contacting the workshop does not automatically create or
confirm an appointment.
Insurance / Workshop Enquiry --- /insurance
Provides repair enquiry information and direct call/WhatsApp actions. It
is not an online insurance claim filing or tracking portal.
FAQ --- /faq
Currently displays a contact prompt because a published FAQ list is not
yet rendered on this page.
Not Found
A custom src/app/not-found.tsx handles unmatched routes.
Technology Stack
  Technology       Purpose
  Next.js 16.4.5   App Router, routing, metadata and production build
React 19.3.0     UI components
TypeScript 5     Static typing
Tailwind CSS 4   Styling and responsive layouts
shadcn/ui        UI component foundation/configuration
Base UI React    Accessible UI primitives
Motion           Animation and motion effects
Lucide React     Icons
next/font        Geist and Geist Mono font loading
ESLint 9         Linting
Vercel           Hosting and deployment

Exact versions are maintained in package.json and package-lock.json.
Architecture
High-level system architecture
                         Customer Browser
                                |
                                v
                    Vercel-hosted Next.js App
                                |
                                v
                         Next.js App Router
                                |
              +-----------------+-----------------+
              |                 |                 |
              v                 v                 v
          Route Pages      Shared Layout     Dynamic Routes
          src/app          Navbar/Footer     services/[slug]
              |                 |                 |
              +-----------------+-----------------+
                                |
                                v
                        React Components
                                |
             +------------------+------------------+
             |                  |                  |
             v                  v                  v
         Home Sections     Service UI        Gallery/Awards
             |                  |                  |
             +------------------+------------------+
                                |
                                v
                      Central Content Modules
                          src/content/
                                |
                                v
                       Static Assets (public/)
Request flow
1. A visitor opens a route in the browser.
2. Next.js resolves the URL through the App Router.
3. The matching page composes the required page and shared components.
4. Shared TypeScript content modules provide company, navigation,
   service, award, and SEO data.
5. Next.js renders the page and serves static files from public/.
6. Contact actions hand off to phone, email, WhatsApp, or Google Maps.
Architecture characteristics
- Next.js App Router.
- Reusable React components.
- Centralized content configuration.
- Local static assets.
- Dynamic service detail routing.
- Page-level metadata and generated sitemap/robots routes.
- Client components for interactions that require browser state.
Project Structure
new-india-automotive/
├── public/
│   ├── brands/                       # Vehicle brand logos
│   ├── images/
│   │   ├── awards/                   # Award images
│   │   ├── hero/                     # Hero images and slideshow
│   │   ├── services/                 # Service images
│   │   ├── team/                     # Director/team photos
│   │   └── workshop/                 # Workshop photos
│   └── company-logo.png
│
├── src/
│   ├── app/
│   │   ├── about/page.tsx
│   │   ├── book-appointment/page.tsx
│   │   ├── brands/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── faq/page.tsx
│   │   ├── gallery/page.tsx
│   │   ├── insurance/page.tsx
│   │   ├── services/
│   │   │   ├── [slug]/page.tsx
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   │
│   ├── components/
│   │   ├── awards/
│   │   ├── contact/
│   │   ├── forms/
│   │   ├── gallery/
│   │   ├── home/
│   │   ├── layout/
│   │   ├── services/
│   │   ├── shared/
│   │   └── ui/
│   │
│   ├── content/
│   │   ├── awards.ts
│   │   ├── brands.ts
│   │   ├── company.ts
│   │   ├── faqs.ts
│   │   ├── gallery.ts
│   │   ├── insurance.ts
│   │   ├── navigation.ts
│   │   ├── seo.ts
│   │   ├── services.ts
│   │   ├── testimonials.ts
│   │   └── why-choose-us.ts
│   │
│   ├── hooks/
│   ├── lib/
│   └── types/
│
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
This is an architectural overview; individual folders contain additional
components and utilities.
Routing
  Route                           Purpose
  /                             Homepage
/about                        Company information
/services                     Services overview
/services/accident-repair     Accident repair details
/services/chassis-repair      Chassis repair details
/services/denting             Denting details
/services/painting            Painting details
/services/mechanical-repair   Mechanical repair details
/services/electrical-work     Electrical work details
/services/truck-body-repair   Truck body repair details
/services/towing-service      Towing service details
/brands                       Vehicle brands
/gallery                      Workshop gallery
/contact                      Contact information
/book-appointment             Appointment request instructions
/insurance                    Repair enquiry
/faq                          FAQ page

Service routes are generated from src/content/services.ts.
Content Architecture
  File                                Responsibility
  src/content/company.ts            Business name, contact details,
address, services and listed brands

  src/content/navigation.ts         Main, About, Services and footer
navigation

  src/content/services.ts           Service names, descriptions, images
and slugs

  src/content/awards.ts             Award details and image dimensions

  src/content/seo.ts                Canonical site URL, default SEO
values and homepage SEO

  src/content/brands.ts             Brand-related content module

  src/content/faqs.ts               FAQ content module

  src/content/gallery.ts            Gallery content module

  src/content/insurance.ts          Insurance-related content module

  src/content/testimonials.ts       Testimonial content module
src/content/why-choose-us.ts      Business highlights content module
Centralized content avoids repeating shared business information across
page components. Not every content module is necessarily connected to a
currently rendered page; inspect its consumers before assuming it drives
a live section.
UI and Component Architecture
Layout --- src/components/layout/
- navbar.tsx --- desktop navigation and dropdowns.
- mobile-nav.tsx --- mobile navigation.
- footer.tsx --- shared footer.
- company-logo.tsx --- company logo.
- theme-provider.tsx --- theme provider.
- theme-toggle.tsx --- appearance control.
- header.tsx --- reusable header component.
The root layout src/app/layout.tsx composes the theme provider,
navbar, page content, footer, and floating WhatsApp button.
Home --- src/components/home/
Contains independently maintained homepage sections such as hero,
introduction, services, brands, statistics, gallery preview, FAQ
preview, testimonials, insurance overview, and CTA.
Services --- src/components/services/
Contains reusable service card and service detail components.
Gallery --- src/components/gallery/
Contains gallery grid and lightbox components.
Shared --- src/components/shared/
Contains reusable animated sections, call button, container, floating
actions, page hero, section heading, and WhatsApp button.
UI --- src/components/ui/
Contains reusable interface primitives such as buttons, cards, dialogs,
accordions, inputs, labels, selects, sheets, textareas, brand marquee,
and scroll reveal.
Assets
Static assets are served from public/ and referenced using URL paths
beginning with /.

  Directory                         Contents
  public/brands/                  Vehicle manufacturer logos
public/images/awards/           Award and certificate images
public/images/hero/             Hero imagery
public/images/hero/slideshow/   Slideshow images
public/images/services/         Service images
public/images/team/             Director/team photographs
public/images/workshop/         Workshop photographs

Example:
import Image from "next/image";

<Image
  src="/images/services/accident-repair.webp"
  alt="Commercial vehicle accident repair"
  width={1200}
  height={800}
/>
Use the real dimensions and aspect ratio of each asset. Do not stretch
images.
SEO
SEO uses the Next.js metadata APIs.
- src/app/layout.tsx defines global title templates, descriptions,
  keywords, Open Graph data, robots directives, and icons.
- Page files export page-specific metadata.
- Dynamic service routes generate metadata from the selected service.
- src/app/sitemap.ts generates sitemap URLs for static routes and
  service detail routes.
- src/app/robots.ts allows general crawling and references the
  sitemap.
- src/content/seo.ts stores the canonical site URL and shared SEO
  text.
Customer Contact Flows
The current website uses direct customer contact actions:
- Phone: tel: links open the visitor's calling application.
- Email: mailto: links open the visitor's email application.
- WhatsApp: https://wa.me/ links open WhatsApp with a prefilled
  enquiry message.
- Directions: Google Maps search URL opens a location search.
Phone numbers and WhatsApp destinations are sourced from
src/content/company.ts.
Appointment requests
The appointment page explicitly states that online booking is not
available yet. Visitors can call or WhatsApp the workshop to request a
suitable time. The website does not automatically create or confirm
appointments.
Contact form
The contact page explicitly says that it does not submit an online
contact form. Do not treat the presence of form-related component files
as proof of a connected form backend.
Insurance
The insurance route is a workshop enquiry page, not a digital insurance
claim filing or claim tracking system.
Local Setup
Prerequisites
- Node.js compatible with the installed Next.js version.
- npm.
- Git.
1. Clone
git clone https://github.com/altafshaikh7/new-india-automotive.git
cd new-india-automotive
2. Install dependencies
npm install
3. Start development server
npm run dev
4. Open locally
Visit http://localhost:3000.
Scripts
  Command           Description
  npm run dev     Start local development server
npm run build   Create production build
npm run start   Start production server after build
npm run lint    Run ESLint

Before deployment, run:
npm run lint
npm run build
Environment Variables
The documented frontend functionality does not currently require
application-specific environment variables.

If a future integration adds a database, email provider, CMS, analytics,
or another third-party service, configure credentials through
environment variables and the hosting provider's environment settings.
Never commit secrets to Git.
Deployment
The production website is deployed on Vercel:

https://new-india-automotive.vercel.app/

Typical deployment flow:
1. Push changes to the connected GitHub repository.
2. Vercel detects the repository update.
3. Vercel installs dependencies using the lockfile.
4. Vercel runs the Next.js production build.
5. A successful deployment publishes the updated website.
Repository: https://github.com/altafshaikh7/new-india-automotive

For local production verification:
npm run build
npm run start
Confirm deployment settings in the Vercel dashboard rather than assuming
configuration that is not present in the repository.
Accessibility and Responsive Design
The project uses responsive Tailwind layouts and reusable UI components.
It includes semantic HTML, accessible labels for several icon-only
controls, visible focus styles in navigation, and reduced-motion
handling in selected animated sections.

When extending the website:
- Use semantic headings and landmarks.
- Add meaningful alternative text to informative images.
- Give links and buttons clear accessible names.
- Preserve visible keyboard focus.
- Test navigation and dialogs with a keyboard.
- Respect prefers-reduced-motion.
- Test mobile, tablet, laptop, and wide desktop layouts.
Current Limitations
These are important distinctions between the current frontend and
possible future backend capabilities:
1. No database layer is configured in the current repository
   architecture.
2. No dedicated backend API service is configured.
3. Online appointment booking is not implemented; the page directs
   visitors to phone and WhatsApp.
4. No automatic appointment confirmation is performed.
5. The contact page does not submit an online contact form to a server.
6. The insurance page is an enquiry page, not a claim
   submission/tracking portal.
7. The FAQ page currently does not render a published FAQ list.
8. The gallery route currently renders a small set of workshop images
   directly from local assets.
9. Some content modules and reusable components exist but may not be
   connected to a visible route.
Future Improvements
Possible enhancements, depending on business requirements:
- Backend-powered appointment requests and confirmation notifications.
- Contact enquiry processing with spam protection.
- Admin dashboard for services, gallery, awards, and enquiries.
- Database integration for persistent appointment and customer
  records.
- CMS integration for non-technical content updates.
- Published FAQs and appropriate structured data.
- Analytics and conversion tracking with privacy controls.
- Automated accessibility, link, and responsive-layout checks.
- Image optimization and performance monitoring using real
  measurements.
Contributing
1. Fork the repository.
2. Create a feature branch.
3. Make focused changes consistent with the existing architecture.
4. Run lint and production build checks.
5. Submit a pull request with a clear description and screenshots for
   UI changes.
git checkout -b feature/your-feature-name
npm run lint
npm run build
License
No explicit open-source license is currently declared in the repository.
Unless a license is added, do not assume the source code is available
for unrestricted reuse, redistribution, or modification.
Project Links
- Live Website: https://new-india-automotive.vercel.app/
- GitHub Repository:
  https://github.com/altafshaikh7/new-india-automotive
Built with Next.js, React, TypeScript, and Tailwind CSS.
