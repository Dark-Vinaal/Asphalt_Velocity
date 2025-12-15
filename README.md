# 🏎️ Asphalt Velocity V2

A modern, responsive car enthusiast website built with **React** and **Tailwind CSS**. Showcasing the world's most prestigious automotive brands with stunning visuals and smooth animations.

> Note : This is a `Version 2` of previous `Version 1` - [View V1](https://github.com/Dark-Vinaal/Asphalt_Velocity-V1/)

---

## ✨ Features

- 🎥 **Dynamic Video Hero Carousel** - Auto-rotating video backgrounds showcasing premium cars
- 🎨 **Modern UI/UX** - Beautiful, responsive design with Tailwind CSS
- 🔍 **Brand Search** - Real-time search functionality to find your favorite brands
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Smooth Animations** - Engaging transitions and hover effects
- 🎯 **Component-Based Architecture** - Clean, maintainable React components
- 📊 **JSON Data Management** - Easy-to-update brand information

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Move Assets and Logos to public folder (required for React):**
   ```bash
   # Move Assets folder to public
   move Assets public\Assets
   
   # Move Logos folder to public
   move Logos public\Logos
   ```
   
> **Note:** React serves static files from the `public` folder. The `Assets` and `Logos` folders need to be in `public` for the videos and images to load correctly.

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

> This creates an optimized production build in the `build` folder.

---

## 📁 Project Structure

```
asphalt-velocity-v2/
├── public/
│   └── index.html          # HTML entry point
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.jsx     # Navigation bar
│   │   ├── Hero.jsx       # Hero section with video carousel
│   │   ├── BrandCards.jsx # Brand showcase grid
│   │   ├── About.jsx      # About section
│   │   ├── Contact.jsx    # Contact & social links
│   │   └── Footer.jsx     # Footer component
│   ├── brands.json        # Brand data (logos, links, descriptions)
│   ├── App.jsx            # Main app component
│   ├── index.js           # React entry point
│   └── index.css          # Tailwind CSS imports
├── Assets/                # Video files
├── Logos/                 # Brand logo images
├── Brands/                # Individual brand pages
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── package.json           # Dependencies
```

---

## 🎨 Customization

### Adding New Brands

Edit `src/brands.json` to add new brands:

```json
{
  "id": 24,
  "name": "Brand Name",
  "logo": "Logos/brand-logo.png",
  "link": "Brands/brand.html",
  "description": "Brand description",
  "color": "#HEXCOLOR"
}
```

### Styling

- Tailwind CSS classes are used throughout
- Custom colors defined in `tailwind.config.js`
- Custom animations in `src/index.css`

---

## 🛠️ Technologies Used

- **React 18** - UI library
- **Tailwind CSS 3** - Utility-first CSS framework
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Poppins, Alex Brush)

---

## 📱 Responsive Breakpoints

- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

---

## 🎯 Key Components

### Navbar
- Fixed navigation with scroll effects
- Mobile-responsive hamburger menu
- Smooth scroll to sections

### Hero
- Video carousel with auto-rotation
- Manual navigation controls
- Video indicators
- Overlay text animations

### BrandCards
- Search functionality
- Grid layout with hover effects
- Gradient borders
- Responsive card design

### About
- Feature cards with icons
- Animated sections
- Quote block
- Vision statement

### Contact
- Social media links
- Contact button
- Hover tooltips

---

## 🔧 Development

The app uses Create React App under the hood. For advanced configuration, you can eject:

```bash
npm run eject
```

> **Note:** This is a one-way operation!

---

## 📝 License

> This project is under MIT License

---

## 🙏 Acknowledgments

- All car brands and logos are property of their respective owners
- Video assets included for demonstration purposes

---

## 👨‍💻 AUTHOR 

### Vinaal R

Passionate Learner | Aspiring Developer | Python Enthusiast

### Contact me through 

[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vinaal/) [![GitHub](https://img.shields.io/badge/GitHub-%23181717.svg?logo=github&logoColor=white)](https://github.com/Dark-Vinaal) 

<a href="https://vinaalr.netlify.app/">
  <img src="https://img.shields.io/badge/VR%20-%20Portfolio-d5d5d5?style=for-the-badge&labelColor=0A0209&color=d5d5d5&logoColor=0A0209" />
</a>

---

> **Built with ❤️ for car enthusiasts**

---

---
