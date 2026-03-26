// Main Script

let currentUser = null;
let db = new Database();

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    displayFeaturedJobs();
    displayCompanies();
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    // Login Form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Login successful!');
            closeModal('loginModal');
            loginForm.reset();
        });
    }

    // Signup Form
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Account created successfully!');
            closeModal('signupModal');
            signupForm.reset();
        });
    }

    // Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }

    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.classList.remove('active');
        }
    });
}

// Display Featured Jobs
function displayFeaturedJobs() {
    const featuredJobs = document.getElementById('featuredJobs');
    if (!featuredJobs) return;

    const jobs = db.getAllJobs().slice(0, 3);
    featuredJobs.innerHTML = jobs.map(job => createJobCard(job)).join('');
}

// Display Companies
function displayCompanies() {
    const companiesList = document.getElementById('companiesList');
    if (!companiesList) return;

    const companies = db.getAllCompanies();
    companiesList.innerHTML = companies.map(company => `
        <div class="company-card">
            <div style="font-size: 3rem; margin-bottom: 1rem;">${company.logo}</div>
            <h3>${company.name}</h3>
            <p>${company.description}</p>
            <p><strong>${company.jobsCount}</strong> Jobs Available</p>
            <button class="btn btn-primary" style="margin-top: 1rem;">View Company</button>
        </div>
    `).join('');
}

// Create Job Card HTML
function createJobCard(job) {
    return `
        <div class="job-card">
            <h3>${job.title}</h3>
            <p><strong>${job.company}</strong></p>
            <p>${job.description}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${job.location}</p>
            <div style="margin-top: 1.5rem; display: flex; justify-content: space-between; align-items: center;">
                <span class="job-type-badge">${job.type.toUpperCase()}</span>
                <span style="font-weight: bold; color: #667eea;">$${job.salary}k</span>
            </div>
            <button class="btn btn-primary" style="width: 100%; margin-top: 1rem;" onclick="applyJob(${job.id})">Apply</button>
        </div>
    `;
}

// Display All Jobs
function displayAllJobs() {
    const jobsList = document.getElementById('jobsList');
    if (!jobsList) return;

    const jobs = db.getAllJobs();
    jobsList.innerHTML = jobs.map(job => createJobCard(job)).join('');
}

// Apply Filters
function applyFilters() {
    displayAllJobs();
    showNotification('Filters applied!');
}

// Search Jobs
function searchJobs() {
    const query = document.getElementById('heroSearch').value;
    if (query.trim()) {
        alert('Searching for: ' + query);
        displayAllJobs();
    }
}

// Apply for Job
function applyJob(jobId) {
    const job = db.getAllJobs().find(j => j.id === jobId);
    alert('You applied for: ' + job.title);
}

// Modal Functions
function showModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Show Dashboard Tab
function showDashboardTab(tabName) {
    alert('Loading ' + tabName + ' tab...');
}

// Toggle Mobile Menu
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// Show Notification
function showNotification(message) {
    alert(message);
}
