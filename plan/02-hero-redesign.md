# Hero Section Redesign - Revised Plan

## Overview
Redesign the hero section to match the reference UI in `ui.md` with custom colors. The new design features a larger image with a solid lime circle background, reduced text with a single bold headline, and enhanced visual impact.

---

## Reference Design Analysis (from `ui.md`)
The reference component (`MinimalistHero`) features:
- **Center image** with a solid-color circular background (originally yellow `#eab308`)
- **Bold headline** positioned to the right in very large typography (`text-7xl` to `text-9xl`)
- **Minimal left text** with a short description
- Clean 3-column layout with image as focal point

---

## Design Changes Required

### 1. Image Background Circle (NEW)
Add a solid lime circle (`#BFE600`) behind the profile image, matching the reference style:
- Circle positioned behind the image using `absolute` positioning
- Animated scale-in effect 
- Sizes: `h-[300px] w-[300px]` mobile → `h-[500px] w-[500px]` desktop

### 2. Headline Text (REDUCE & ENLARGE)
**Before:**
```
I don't build chatbots.
I build AI employees.
```

**After:**
```
I Build AI Employees
```
- Single bold line in **much larger typography**
- Use sizes matching reference: `text-7xl` → `md:text-8xl` → `lg:text-9xl`
- Full lime color (`#BFE600`) for impact

### 3. Image Size (INCREASE)
- Increase image dimensions from `w-64/w-72/w-80` to `w-72/w-80/w-96`
- Add `scale-125` or similar for extra visual presence

### 4. Left Description (REDUCE)
Keep minimal description or remove entirely - focus is on the headline

---

## Proposed Changes

### [MODIFY] [Hero.tsx](file:///wsl.localhost/Ubuntu-24.04/home/hak/projects/portfolio/components/Hero.tsx)

**Changes:**
1. Add animated circle background behind the profile image:
   ```tsx
   <motion.div
     initial={{ scale: 0.8, opacity: 0 }}
     animate={{ scale: 1, opacity: 1 }}
     transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
     className="absolute z-0 h-[300px] w-[300px] rounded-full bg-[#BFE600] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
   />
   ```

2. Simplify headline to single bold text:
   ```tsx
   <h1 className="text-7xl font-extrabold text-[#BFE600] md:text-8xl lg:text-9xl">
     I Build
     <br />
     AI Employees
   </h1>
   ```

3. Increase image size with classes like `w-72 md:w-80 lg:w-96` and add scale transform

4. Either remove or significantly shorten the left description text

---

## Color Palette (Unchanged)
| Color | Hex | Usage |
|-------|-----|-------|
| Lime | `#BFE600` | Circle BG, headline, CTAs |
| White | `#FFFFFF` | Secondary text |
| Black | `#000000` | Background |

---

## Verification Plan
1. Run `npm run dev` and verify the hero section displays correctly
2. Confirm circle appears behind image with proper animation
3. Verify headline is large and readable
4. Check responsive behavior at mobile/tablet/desktop breakpoints
