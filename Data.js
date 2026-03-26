// Database Management using LocalStorage
class Database {
    constructor() {
        this.initializeData();
    }

    initializeData() {
        if (!localStorage.getItem('jobs')) {
            localStorage.setItem('jobs', JSON.stringify(this.defaultJobs()));
        }
        if (!localStorage.getItem('companies')) {
            localStorage.setItem('companies', JSON.stringify(this.defaultCompanies()));
        }
    }

    defaultJobs() {
        return [
            {
                id: 1,
                title: "Frontend Developer Intern",
                company: "Tech StartUp Inc.",
                location: "San Francisco, CA",
                type: "internship",
                salary: "15000-20000",
                description: "3-month internship program for frontend development"
            },
            {
                id: 2,
                title: "Senior Backend Engineer",
                company: "Global Tech Corp",
                location: "New York, NY",
                type: "fulltime",
                salary: "120000-150000",
                description: "5+ years experience in backend development"
            },
            {
                id: 3,
                title: "Content Writer",
                company: "Digital Media Ltd",
                location: "Remote",
                type: "parttime",
                salary: "20000-30000",
                description: "20 hours/week flexible writing position"
            },
            {
                id: 4,
                title: "Data Analyst",
                company: "Analytics Pro",
                location: "Boston, MA",
                type: "fulltime",
                salary: "70000-90000",
                description: "Learn Python, SQL & Tableau"
            },
            {
                id: 5,
                title: "UI/UX Designer",
                company: "Design Studio",
                location: "Los Angeles, CA",
                type: "fulltime",
                salary: "80000-110000",
                description: "Create amazing user experiences"
            },
            {
                id: 6,
                title: "Product Manager",
                company: "Innovation Hub",
                location: "Seattle, WA",
                type: "fulltime",
                salary: "100000-130000",
                description: "Lead product strategy"
            }
        ];
    }

    defaultCompanies() {
        return [
            {
                id: 1,
                name: "Tech StartUp Inc.",
                logo: "🚀",
                location: "San Francisco, CA",
                description: "Innovative tech startup",
                jobsCount: 12
            },
            {
                id: 2,
                name: "Global Tech Corp",
                logo: "💼",
                location: "New York, NY",
                description: "Leading tech corporation",
                jobsCount: 45
            },
            {
                id: 3,
                name: "Digital Media Ltd",
                logo: "📱",
                location: "Remote",
                description: "Digital content company",
                jobsCount: 8
            },
            {
                id: 4,
                name: "Analytics Pro",
                logo: "📊",
                location: "Boston, MA",
                description: "Data analytics solutions",
                jobsCount: 15
            },
            {
                id: 5,
                name: "Design Studio",
                logo: "🎨",
                location: "Los Angeles, CA",
                description: "Creative design agency",
                jobsCount: 6
            },
            {
                id: 6,
                name: "Innovation Hub",
                logo: "💡",
                location: "Seattle, WA",
                description: "Innovation company",
                jobsCount: 20
            }
        ];
    }

    getAllJobs() {
        return JSON.parse(localStorage.getItem('jobs')) || [];
    }

    getAllCompanies() {
        return JSON.parse(localStorage.getItem('companies')) || [];
    }
}

const db = new Database();
