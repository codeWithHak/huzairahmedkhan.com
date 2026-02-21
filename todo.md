# Portfolio TODO

## After buying huzairahmedkhan.com domain

1. **Connect domain to Vercel**
   - Go to Vercel Dashboard > Settings > Domains
   - Add `huzairahmedkhan.com`
   - Configure DNS records as Vercel instructs

2. **Update all URLs from `huzairahmedkhan.vercel.app` to `huzairahmedkhan.com`**
   - Search codebase for `TODO: Change to https://huzairahmedkhan.com`
   - Files to update:
     - `app/layout.tsx` — metadataBase, canonical, openGraph url, JSON-LD urls (Person url/image, ProfessionalService url)
     - `app/sitemap.ts` — sitemap url
     - `app/robots.ts` — sitemap reference

3. **Submit to Google Search Console**
   - Verify ownership of huzairahmedkhan.com
   - Submit sitemap at `https://huzairahmedkhan.com/sitemap.xml`

4. **Update social profiles with portfolio URL**
   - Upwork profile bio — add huzairahmedkhan.com
   - LinkedIn — add website to contact info
   - GitHub — add to profile bio
   - This completes the bidirectional `sameAs` loop for SEO

5. **Re-run squirrel audit on the live custom domain**
   ```bash
   squirrel audit https://huzairahmedkhan.com --format llm --refresh
   ```

## Other improvements (not domain-dependent)

- [ ] Compress `public/profile.png` to under 200 KB (currently 511 KB)
- [ ] Add Content-Security-Policy header to `next.config.ts`
- [ ] Replace placeholder project links with real GitHub/demo URLs when available
- [ ] Consider adding a privacy policy page (improves E-E-A-T score)
