// ========================================
// DARK MODE / LIGHT MODE TOGGLE
// ========================================
const themeToggle = document.getElementById("themeToggle")
const themeToggleMobile = document.getElementById("themeToggleMobile")
const sunIcon = document.querySelector(".sun-icon")
const moonIcon = document.querySelector(".moon-icon")
const sunIconMobile = document.querySelector(".sun-icon-mobile")
const moonIconMobile = document.querySelector(".moon-icon-mobile")

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem("theme") || "light"
document.documentElement.setAttribute("data-theme", currentTheme)

// Update icons based on current theme
if (currentTheme === "dark") {
  sunIcon.classList.add("hidden")
  moonIcon.classList.remove("hidden")
  sunIconMobile.classList.add("hidden")
  moonIconMobile.classList.remove("hidden")
}

function toggleTheme() {
  const theme = document.documentElement.getAttribute("data-theme")
  const newTheme = theme === "light" ? "dark" : "light"
  
  document.documentElement.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
  
  // Toggle icons
  if (newTheme === "dark") {
    sunIcon.classList.add("hidden")
    moonIcon.classList.remove("hidden")
    sunIconMobile.classList.add("hidden")
    moonIconMobile.classList.remove("hidden")
  } else {
    sunIcon.classList.remove("hidden")
    moonIcon.classList.add("hidden")
    sunIconMobile.classList.remove("hidden")
    moonIconMobile.classList.add("hidden")
  }
}

themeToggle.addEventListener("click", toggleTheme)
themeToggleMobile.addEventListener("click", toggleTheme)

// ========================================
// MULTI-LANGUAGE SUPPORT (EN / ID)
// ========================================
const translations = {
  en: {
    // Navigation
    "Home": "Home",
    "Tentang Kami": "About Us",
    "Produk": "Products",
    "Kontak": "Contact",
    "Hubungi Kami": "Contact Us",
    "Mode Gelap": "Dark Mode",
    
    // Hero Section
    "Air Handling Unit (AHU)": "Air Handling Unit (AHU)",
    "Solusi Sirkulasi Udara Profesional": "Professional Air Circulation Solution",
    "Precision Air Conditioner": "Precision Air Conditioner",
    "Kontrol Suhu & Kelembaban Presisi Tinggi": "High Precision Temperature & Humidity Control",
    "Industrial Chiller": "Industrial Chiller",
    "Sistem Pendingin Industri Berkapasitas Besar": "Large Capacity Industrial Cooling System",
    "Exhaust Fan Industrial": "Industrial Exhaust Fan",
    "Ventilasi Udara untuk Berbagai Industri": "Air Ventilation for Various Industries",
    "Lihat Produk Kami": "View Our Products",
    
    // About Section
    "Tentang PT. Ventkraft Indonesia": "About PT. Ventkraft Indonesia",
    "Produsen terpercaya sistem HVAC berkualitas tinggi untuk industri dan komersial di Indonesia": "Trusted manufacturer of high-quality HVAC systems for industrial and commercial sectors in Indonesia",
    "Pengalaman & Keahlian dalam Produksi HVAC": "Experience & Expertise in HVAC Production",
    "PT. Ventkraft Indonesia adalah perusahaan manufaktur HVAC terkemuka yang telah melayani berbagai industri di Indonesia. Kami mengkhususkan diri dalam produksi Air Handling Unit (AHU), Precision Air Conditioner, Industrial Chiller, dan sistem ventilasi industri.": "PT. Ventkraft Indonesia is a leading HVAC manufacturer that has served various industries in Indonesia. We specialize in the production of Air Handling Units (AHU), Precision Air Conditioners, Industrial Chillers, and industrial ventilation systems.",
    "Dengan tim engineer berpengalaman dan fasilitas produksi modern, kami berkomitmen menghadirkan solusi HVAC yang efisien, andal, dan sesuai dengan kebutuhan spesifik setiap klien.": "With an experienced engineering team and modern production facilities, we are committed to providing efficient, reliable HVAC solutions tailored to each client's specific needs.",
    "15+ Tahun": "15+ Years",
    "Pengalaman Industri": "Industry Experience",
    "500+": "500+",
    "Klien Puas": "Satisfied Clients",
    "100+": "100+",
    "Proyek Selesai": "Completed Projects",
    "ISO 9001": "ISO 9001",
    "Sertifikasi Mutu": "Quality Certification",
    
    // Products Section
    "Produk HVAC Kami": "Our HVAC Products",
    "Solusi lengkap sistem HVAC untuk berbagai kebutuhan industri dan komersial": "Complete HVAC system solutions for various industrial and commercial needs",
    "Sistem sirkulasi udara untuk gedung komersial dan industri dengan kapasitas 1000 - 50000 CFM": "Air circulation system for commercial and industrial buildings with capacity 1000 - 50000 CFM",
    "Filter udara multi-stage": "Multi-stage air filter",
    "Coil pendingin/pemanas": "Cooling/heating coil",
    "Kontrol otomatis": "Automatic control",
    "Desain custom": "Custom design",
    "Konsultasi Produk": "Product Consultation",
    "AC presisi untuk server room, data center, dan ruangan yang membutuhkan kontrol suhu ketat": "Precision AC for server rooms, data centers, and rooms requiring strict temperature control",
    "Kontrol suhu ±1°C": "Temperature control ±1°C",
    "Kelembaban terkontrol": "Controlled humidity",
    "Efisiensi energi tinggi": "High energy efficiency",
    "Remote monitoring": "Remote monitoring",
    "Sistem pendingin air berkapasitas besar untuk proses industri dan gedung bertingkat": "Large capacity water cooling system for industrial processes and high-rise buildings",
    "Kapasitas 10-500 TR": "Capacity 10-500 TR",
    "Air/water cooled": "Air/water cooled",
    "Screw/scroll compressor": "Screw/scroll compressor",
    "Energy efficient": "Energy efficient",
    "Sistem ventilasi dan exhaust untuk pabrik, warehouse, dan bangunan industri": "Ventilation and exhaust system for factories, warehouses, and industrial buildings",
    "Airflow tinggi": "High airflow",
    "Low noise operation": "Low noise operation",
    "Tahan korosi": "Corrosion resistant",
    "Various sizes": "Various sizes",
    "Clean Room HVAC": "Clean Room HVAC",
    "Sistem HVAC khusus untuk clean room pharmaceutical, elektronik, dan laboratorium": "Special HVAC system for pharmaceutical, electronics, and laboratory clean rooms",
    "HEPA filtration": "HEPA filtration",
    "Pressure control": "Pressure control",
    "ISO class compliance": "ISO class compliance",
    "Validation support": "Validation support",
    "Ducting System & Accessories": "Ducting System & Accessories",
    "Ducting galvanis, flexible duct, damper, diffuser, dan aksesoris HVAC lainnya": "Galvanized ducting, flexible duct, damper, diffuser, and other HVAC accessories",
    "Custom fabrication": "Custom fabrication",
    "Quick delivery": "Quick delivery",
    "Quality materials": "Quality materials",
    "Complete accessories": "Complete accessories",
    
    // Contact Section
    "Hubungi Kami": "Contact Us",
    "Konsultasikan kebutuhan HVAC Anda dengan tim ahli kami": "Consult your HVAC needs with our expert team",
    "Kirim Pesan": "Send Message",
    "Nama Lengkap *": "Full Name *",
    "Masukkan nama Anda": "Enter your name",
    "Email *": "Email *",
    "email@example.com": "email@example.com",
    "Telepon *": "Phone *",
    "08xx-xxxx-xxxx": "08xx-xxxx-xxxx",
    "Nama Perusahaan": "Company Name",
    "PT. Nama Perusahaan": "Company Name Ltd.",
    "Pesan *": "Message *",
    "Ceritakan kebutuhan HVAC Anda...": "Tell us about your HVAC needs...",
    "Kirim Pesan": "Send Message",
    "Informasi Kontak": "Contact Information",
    "Alamat": "Address",
    "Telepon": "Phone",
    "Email": "Email",
    "Jam Operasional": "Operating Hours",
    "Senin - Jumat: 08:00 - 17:00": "Monday - Friday: 08:00 - 17:00",
    "Sabtu: 08:00 - 13:00": "Saturday: 08:00 - 13:00",
    "Minggu & Libur: Tutup": "Sunday & Holidays: Closed",
    
    // Footer
    "Menu": "Menu",
    "Produk Kami": "Our Products",
    "Terima kasih! Kami akan segera menghubungi Anda.": "Thank you! We will contact you soon.",
  },
  id: {
    // Keep original Indonesian text
  }
}

const langToggle = document.getElementById("langToggle")
const langToggleMobile = document.getElementById("langToggleMobile")
const langLabel = document.getElementById("langLabel")
const langLabelMobile = document.getElementById("langLabelMobile")

// Check for saved language preference or default to 'id'
let currentLang = localStorage.getItem("language") || "id"
langLabel.textContent = currentLang === "id" ? "EN" : "ID"
langLabelMobile.textContent = currentLang === "id" ? "EN" : "ID"

function translatePage(lang) {
  document.querySelectorAll("[data-en]").forEach((element) => {
    if (lang === "en") {
      element.textContent = element.getAttribute("data-en")
    } else {
      element.textContent = element.getAttribute("data-id")
    }
  })
  
  // Update placeholders
  const nameInput = document.getElementById("name")
  const emailInput = document.getElementById("email")
  const phoneInput = document.getElementById("phone")
  const companyInput = document.getElementById("company")
  const messageInput = document.getElementById("message")
  
  if (lang === "en") {
    if (nameInput) nameInput.placeholder = "Enter your name"
    if (emailInput) emailInput.placeholder = "email@example.com"
    if (phoneInput) phoneInput.placeholder = "08xx-xxxx-xxxx"
    if (companyInput) companyInput.placeholder = "Company Name Ltd."
    if (messageInput) messageInput.placeholder = "Tell us about your HVAC needs..."
  } else {
    if (nameInput) nameInput.placeholder = "Masukkan nama Anda"
    if (emailInput) emailInput.placeholder = "email@example.com"
    if (phoneInput) phoneInput.placeholder = "08xx-xxxx-xxxx"
    if (companyInput) companyInput.placeholder = "PT. Nama Perusahaan"
    if (messageInput) messageInput.placeholder = "Ceritakan kebutuhan HVAC Anda..."
  }
}

function toggleLanguage() {
  currentLang = currentLang === "id" ? "en" : "id"
  localStorage.setItem("language", currentLang)
  
  // Update button labels
  langLabel.textContent = currentLang === "id" ? "EN" : "ID"
  langLabelMobile.textContent = currentLang === "id" ? "EN" : "ID"
  
  // Update HTML lang attribute
  document.documentElement.setAttribute("lang", currentLang)
  
  // Translate page
  translatePage(currentLang)
}

langToggle.addEventListener("click", toggleLanguage)
langToggleMobile.addEventListener("click", toggleLanguage)

// Initialize with current language
//if (currentLang === "en") {
//  translatePage("en")
//}
// Initialize language on first load
document.documentElement.setAttribute("lang", currentLang)
translatePage(currentLang)
// ========================================
// MOBILE MENU TOGGLE
// ========================================
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const mobileMenu = document.getElementById("mobileMenu")
const menuIcon = mobileMenuBtn.querySelector(".menu-icon")
const closeIcon = mobileMenuBtn.querySelector(".close-icon")

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden")
  menuIcon.classList.toggle("hidden")
  closeIcon.classList.toggle("hidden")
})

// Close mobile menu when clicking nav links
const mobileNavLinks = mobileMenu.querySelectorAll(".nav-link")
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden")
    menuIcon.classList.remove("hidden")
    closeIcon.classList.add("hidden")
  })
})

// ========================================
// HERO SLIDER
// ========================================
let currentSlide = 0
const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll(".dot")
const totalSlides = slides.length

function showSlide(index) {
  // Remove active class from all slides and dots
  slides.forEach((slide) => slide.classList.remove("active"))
  dots.forEach((dot) => dot.classList.remove("active"))

  // Add active class to current slide and dot
  slides[index].classList.add("active")
  dots[index].classList.add("active")
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides
  showSlide(currentSlide)
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
  showSlide(currentSlide)
}

// ========================================
// AUTO SLIDE & NAVIGATION
// ========================================
// Auto slide every 5 seconds
let autoSlideInterval = setInterval(nextSlide, 5000)

// Next/Previous buttons
document.getElementById("nextBtn").addEventListener("click", () => {
  nextSlide()
  // Reset auto slide timer
  clearInterval(autoSlideInterval)
  autoSlideInterval = setInterval(nextSlide, 5000)
})

document.getElementById("prevBtn").addEventListener("click", () => {
  prevSlide()
  // Reset auto slide timer
  clearInterval(autoSlideInterval)
  autoSlideInterval = setInterval(nextSlide, 5000)
})

// Dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index
    showSlide(currentSlide)
    // Reset auto slide timer
    clearInterval(autoSlideInterval)
    autoSlideInterval = setInterval(nextSlide, 5000)
  })
})

// ========================================
// CONTACT FORM
// ========================================
// Contact Form
const contactForm = document.getElementById("contactForm")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form data
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    company: document.getElementById("company").value,
    message: document.getElementById("message").value,
  }

  console.log("Form submitted:", formData)

  // Show success message
  const successMessage = currentLang === "en" 
    ? "Thank you! We will contact you soon." 
    : "Terima kasih! Kami akan segera menghubungi Anda."
  alert(successMessage)

  // Reset form
  contactForm.reset()
})

// ========================================
// SMOOTH SCROLLING
// ========================================
// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// ========================================
// FOOTER & HEADER EFFECTS
// ========================================
// Update current year in footer
document.getElementById("currentYear").textContent = new Date().getFullYear()

// Header scroll effect
let lastScroll = 0
const header = document.querySelector(".header")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    header.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)"
  } else {
    header.style.boxShadow = "none"
  }

  lastScroll = currentScroll
})

//Wa
const waToggle = document.getElementById("waToggle");
const waMenu = document.getElementById("waMenu");

waToggle.addEventListener("click", () => {
    waMenu.classList.toggle("show");
});
