# 📝 Easy Editing Guide

Welcome! This guide will show you how to easily update all the text, images, and content on your website.

## 🎯 Quick Start

**All your website content is in ONE file:** `/src/app/data/siteData.ts`

You don't need to touch any of the component files in `/src/app/components/`. Just edit `siteData.ts` and everything will automatically update!

---

## 📍 What You Can Edit

### 1️⃣ Hero Section (Top of Page)

**Location:** `heroData` in `siteData.ts`

**What you can change:**
- ✏️ Your name
- ✏️ Your job title
- ✏️ Your greeting message
- ✏️ Description about yourself
- 🖼️ Profile picture (replace the `profileImage` URL)
- 🔗 LinkedIn and email links

**Example:**
```typescript
export const heroData = {
  greeting: "Hi there! I'm",
  name: "Your Name Here",  // ← Change this
  jobTitle: "Your Job Title",  // ← Change this
  profileImage: "your-image-url-here",  // ← Replace with your photo
}
```

---

### 2️⃣ About Section (Stats Cards)

**Location:** `aboutData` in `siteData.ts`

**What you can change:**
- ✏️ The three stat cards (number and label)
- ✏️ Section heading and subheading

**Example:**
```typescript
stats: [
  {
    icon: "briefcase",  // Don't change this
    number: "5",  // ← Change the number
    label: "Years Experience",  // ← Change the label
  },
]
```

---

### 3️⃣ Experience Section (Work History)

**Location:** `experienceData` in `siteData.ts`

**What you can change:**
- ✏️ Add or remove jobs
- ✏️ Job title, company, location, dates
- ✏️ Job descriptions (bullet points)

**To add a new job:**
Copy this template and paste it in the `jobs` array:
```typescript
{
  title: "Your Job Title",
  company: "Company Name",
  location: "City, State",
  period: "2024 - Present",
  description: [
    "What you did in this role",
    "Another achievement",
    "Another responsibility",
  ],
},
```

---

### 4️⃣ Education Section

**Location:** `educationData` in `siteData.ts`

**What you can change:**
- ✏️ Add or remove education entries
- ✏️ Degree, school, location, dates
- ✏️ Learning resources list

**Example:**
```typescript
items: [
  {
    degree: "Your Degree",
    school: "School Name",
    location: "City, State",
    period: "2020 - 2024",
  },
]
```

---

### 5️⃣ Skills Section

**Location:** `skillsData` in `siteData.ts`

**What you can change:**
- ✏️ Skill names
- 📊 Skill levels (0-100)
- ✏️ Categories (Design, Research, Development)
- ✏️ Tools list

**Example:**
```typescript
skills: [
  { name: "Figma", level: 85, category: "Design" },  // ← Change level from 0-100
  { name: "Your Skill", level: 70, category: "Development" },  // ← Add new skill
]
```

**To add a new skill:**
Just add a new line like this:
```typescript
{ name: "New Skill Name", level: 60, category: "Design" },
```

---

### 6️⃣ Portfolio Section (Project Cards)

**Location:** `portfolioData` in `siteData.ts`

**What you can change:**
- ✏️ Project title, description
- 🏷️ Category (Practice Project, Design Only)
- 🖼️ Project image
- 🏷️ Tags

**To add a new project:**
Copy this template:
```typescript
{
  id: 7,  // ← Make sure this is unique
  title: "Your Project Name",
  category: "Practice Project",  // or "Design Only"
  description: "What this project is about",
  image: "your-image-url",  // ← Add your project screenshot
  tags: ["Tag1", "Tag2", "Tag3"],
},
```

---

### 7️⃣ Contact Section

**Location:** `contactData` in `siteData.ts`

**What you can change:**
- ✏️ Your email, phone, location
- 🔗 Contact links
- ✏️ Form placeholders

**Example:**
```typescript
contactInfo: [
  {
    icon: "mail",
    label: "Email",
    value: "your.email@example.com",  // ← Change this
    link: "mailto:your.email@example.com",  // ← Change this
  },
]
```

---

### 8️⃣ Footer

**Location:** `footerData` in `siteData.ts`

**What you can change:**
- ✏️ Your name
- ✏️ Tagline
- 🔗 Social links

---

## 🖼️ How to Change Images

### Profile Photo (Hero Section)
1. Upload your photo to an image hosting service (like Imgur, Cloudinary, or your own server)
2. Copy the image URL
3. Replace the `profileImage` URL in `heroData`

### Project Images (Portfolio)
1. Get the URL of your project screenshot
2. Replace the `image` URL in the project object

**Example:**
```typescript
image: "https://your-image-url.com/project-screenshot.jpg",
```

---

## 🎨 Tips for Success

### ✅ Do's
- ✅ Change text inside quotes: `"like this"`
- ✅ Change numbers for skill levels: `level: 85`
- ✅ Add new items by copying the template
- ✅ Save the file after making changes
- ✅ Keep the same structure (commas, brackets, etc.)

### ❌ Don'ts
- ❌ Don't change `icon:` values (like "briefcase", "mail")
- ❌ Don't remove commas between items
- ❌ Don't change `category:` values unless you want to create a new category
- ❌ Don't edit component files in `/src/app/components/`

---

## 🚀 Making Changes

1. Open `/src/app/data/siteData.ts`
2. Find the section you want to edit
3. Change the text or values
4. Save the file
5. Refresh your browser to see the changes!

---

## 💡 Common Tasks

### Change Your Name Everywhere
Search for "Sarah Chen" in `siteData.ts` and replace with your name.

### Add a New Project
1. Go to `portfolioData.projects`
2. Copy one of the existing project objects
3. Paste it at the end (before the closing `]`)
4. Change the `id` to a new number
5. Update all the details

### Update Skill Levels
1. Go to `skillsData.skills`
2. Find the skill you want to update
3. Change the `level` number (0-100)

### Change Your Photo
Replace the URL in `heroData.profileImage` with your photo URL.

---

## 🆘 Need Help?

If something breaks:
1. Check that you didn't accidentally delete a comma or bracket
2. Make sure all text is inside quotes: `"like this"`
3. Each item in a list should end with a comma (except the last one)

---

**Happy editing! 🎉**
