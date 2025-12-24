# SEO Deployment Guide for Gaurav Dhakal Portfolio

## 🚀 Immediate Actions (Before Going Live)

### 1. Deploy to Production Domain
```bash
# Build the production version
npm run build

# Deploy the 'dist' folder to your hosting provider
# Recommended: Vercel, Netlify, or GitHub Pages
```

### 2. Update URLs in Code
Before deploying, update these placeholder URLs with your actual domain:

**File: `src/components/SEOHead.jsx`**
- Line 26: Change `"url": "https://gauravdhakal.com"` to your actual domain
- Line 27: Add your actual profile image URL
- Lines 28-32: Update social profile URLs (LinkedIn, GitHub, Twitter)
- Line 59: Update `content="https://gauravdhakal.com/"` 
- Line 63: Update `content="https://gauravdhakal.com/og-image.jpg"`
- Line 68: Update canonical URL

**File: `src/components/Contact.jsx`**
- Line 59: Update email to your real email address

## 📋 Google Search Console Setup

### Step 1: Verify Domain Ownership
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property → Enter your domain
3. Verify using one of these methods:
   - DNS verification (recommended)
   - HTML file upload
   - Meta tag (already in your `<head>`)

### Step 2: Submit Sitemap
Create a `sitemap.xml` in your `public` folder:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://gauravdhakal.com/</loc>
    <lastmod>2025-12-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

Then submit: `https://gauravdhakal.com/sitemap.xml`

### Step 3: Request Indexing
1. In GSC, go to "URL Inspection"
2. Enter: `https://gauravdhakal.com`
3. Click "Request Indexing"

## 🎯 Schema Markup Validation

### Test Your Schema
1. Go to [Rich Results Test](https://search.google.com/test/rich-results)
2. Enter your live URL
3. Verify Person schema is detected
4. Fix any errors or warnings

### Alternative: Schema Markup Validator
- Visit: https://validator.schema.org/
- Paste your URL
- Ensure no validation errors

## 📊 Google Analytics Verification

### Verify GA4 is Tracking
1. Go to [Google Analytics](https://analytics.google.com)
2. Select your property (G-7PFPC4E297)
3. Go to "Reports" → "Realtime"
4. Visit your website
5. Confirm you see yourself in real-time visitors

### Set Up Key Events
In GA4, set up these events as Key Events (Conversions):
- `contact_form_submit`
- `theme_toggle`
- Any custom events you add

## 🔍 Keyword Monitoring

### Track "Gaurav Dhakal" Rankings
Use these tools:
1. **Google Search Console**: Position tracking
2. **Manual Check**: Incognito search for "Gaurav Dhakal"
3. **Third-party tools**: 
   - Ahrefs
   - SEMrush
   - Moz

## 🌐 Social Profile Setup

### LinkedIn
1. Create/update profile with:
   - Name: **Gaurav Dhakal**
   - Headline: "AI Engineer, Data Scientist & Technologist"
   - About: Use the bio from your website
   - Add website link
2. Update `sameAs` URL in SEOHead.jsx

### GitHub
1. Update profile:
   - Name: **Gaurav Dhakal**
   - Bio: Match website
   - Website link
2. Pin relevant repositories
3. Update `sameAs` URL in SEOHead.jsx

### Twitter/X
1. Profile setup:
   - Display name: **Gaurav Dhakal**
   - Bio: Condensed version
   - Website link
2. Update `sameAs` URL in SEOHead.jsx

## 📈 Week-by-Week Action Plan

### Week 1
- [ ] Deploy website to production
- [ ] Set up Google Search Console
- [ ] Submit sitemap
- [ ] Request indexing
- [ ] Verify GA4 tracking
- [ ] Update all placeholder URLs
- [ ] Create/update social profiles

### Week 2-4
- [ ] Monitor GSC for indexing status
- [ ] Check initial search appearance
- [ ] Ensure 0 coverage errors
- [ ] Monitor Core Web Vitals
- [ ] Share website on social media

### Month 2
- [ ] Analyze search performance data
- [ ] Identify additional keywords
- [ ] Create blog/articles (optional)
- [ ] Build quality backlinks
- [ ] Guest post opportunities

### Month 3
- [ ] Review ranking progress
- [ ] Optimize based on CTR data
- [ ] Expand content if needed
- [ ] Consider Wikipedia page (if notable)

## 🎨 Optional Enhancements

### Add a Blog Section
Create an `About Gaurav Dhakal` blog page:
- Write about AI/ML projects
- Technical tutorials
- Data science insights
- All mentioning "Gaurav Dhakal" naturally

### Create Additional Pages
- `/about-gaurav-dhakal`
- `/blog/`
- `/portfolio/project-name`
- All with proper internal linking

### Add Structured Data for Projects
For each project, add `SoftwareApplication` or `CreativeWork` schema

## ⚠️ Important Notes

### robots.txt
Create `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://gauravdhakal.com/sitemap.xml
```

### Core Web Vitals
Monitor these metrics in GSC:
- **LCP** (Largest Contentful Paint): < 2.5s
- **INP** (Interaction to Next Paint): < 200ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Add Open Graph Image
Create a professional OG image (1200x630px) featuring:
- "Gaurav Dhakal"
- "AI Engineer & Data Scientist"
- Professional design matching website theme

Save as `public/og-image.jpg` and update SEOHead.jsx

## 📞 Support & Issues

If you encounter issues:
1. Check browser console for errors
2. Validate HTML: https://validator.w3.org/
3. Test schema: https://search.google.com/test/rich-results
4. Check mobile: https://search.google.com/test/mobile-friendly
5. Performance: https://pagespeed.web.dev/

## ✅ Final Checklist Before Launch

- [ ] All placeholder URLs updated with real domain
- [ ] Social profile URLs updated
- [ ] Email address updated in contact form
- [ ] OG image created and added
- [ ] Sitemap.xml created
- [ ] robots.txt created
- [ ] Favicon updated
- [ ] Production build tested locally
- [ ] Google Analytics property created
- [ ] GTM container published
- [ ] DNS records configured
- [ ] SSL certificate active

---

**Remember**: SEO is a marathon, not a sprint. Consistency, quality content, and technical excellence will lead to first-page dominance for "Gaurav Dhakal".

**Good luck! 🚀**
