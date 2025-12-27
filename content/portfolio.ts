import { PortfolioData } from '@/types';

export const portfolioData: PortfolioData = {
    resumeConfig: {
        driveFileId: '1pLVOomAsCP-6fOiBXlM6C1BkSe-egqi1',
    },
    personalInfo: {
        name: 'Gaurav Roy',
        title: 'Product Operations & Data Analytics',
        email: 'royg4250@gmail.com',
        phone: '+91-7303528514',
        linkedin: 'https://www.linkedin.com/in/gaurav-royy/',
        github: 'https://github.com/GauravRoy092',
        summary: `Analytical and operations-focused Electronics & Communication Engineering graduate with internship experience in data validation, reporting, and cross-functional coordination. Skilled in SQL, Excel, Power BI, and structured documentation to support business and product decision-making. Interested in Product Management and B2B SaaS environments where data, user insights, and execution intersect.`,
    },
    experience: [
        {
            id: 1,
            title: 'Operations Intern – Business Operations',
            company: 'DotPe',
            location: 'Gurugram, India',
            period: 'Jun 2025 – Dec 2025',
            responsibilities: [
                'Maintained and validated structured operational and POS datasets to ensure data accuracy and reporting reliability',
                'Analyzed sales and menu-level data to identify trends and recommend operational improvements',
                'Prepared daily and weekly performance reports for internal stakeholders using Excel and Google Sheets',
                'Coordinated with cross-functional teams to resolve data discrepancies and track operational issues',
            ],
        },
        {
            id: 2,
            title: 'Vocational Trainee',
            company: 'Engineers India Limited (EIL)',
            location: 'Gurugram, India',
            period: 'Aug 2023 – Oct 2023',
            responsibilities: [
                'Worked with structured datasets (5,000+ records) focusing on data verification, documentation, and compliance',
                'Used SQL to retrieve, validate, and cross-check data for reporting and operational use cases',
                'Tracked requirements and followed up with internal stakeholders in a process-driven environment',
            ],
        },
    ],
    projects: [
        {
            id: 1,
            title: '🍽️ F&B Management & Analytics Suite',
            tech: 'React 19 | Vite | Capacitor (iOS) | Power BI | SQL',
            featured: true,
            youtubeId: 'Uvurt-6yrwg',
            highlights: [
                { label: 'FoodPOS (Operational Layer)', text: 'Mobile-first Web/iOS POS with Swiggy-inspired UI – reduced order processing time by ~40%' },
                { label: 'Dynamic Menu', text: 'Real-time availability toggle, category management, configurable packaging/delivery fees' },
                { label: 'Analytics Dashboard', text: 'Analyzed 53K+ transactions worth $17.91M – tracked ATP, channel performance & product mix' },
                { label: 'Data Schema Design', text: 'Built analytical-ready tables (Orders, Items, Customers) for seamless BI integration' },
            ],
            links: {
                live: 'https://foodpos-gr.netlify.app/',
                github: 'https://github.com/GauravRoy092/FoodPOS.git',
                linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7408440628835184640/',
            },
        },
        {
            id: 2,
            title: 'Food & Beverages Sales Dashboard',
            tech: 'SQL | Power BI | Excel',
            featured: false,
            image: 'https://raw.githubusercontent.com/GauravRoy092/fnb-sales-kpi-dashboard/main/fnb-sales-kpi-dashboard.jpg',
            highlights: [
                'Built an interactive Power BI dashboard to track total revenue, total orders, and average ticket price (ATP)',
                'Designed slicers and drill-down views by product category, sales channel, and quarter for quick analysis',
                'Created structured tables to support data validation, periodic reporting, and performance monitoring',
                'Enabled management to identify high-performing categories and underperforming channels for action',
            ],
            links: {
                view: 'https://github.com/GauravRoy092/fnb-sales-kpi-dashboard/blob/main/fnb-sales-kpi-dashboard.jpg',
            },
        },
        {
            id: 3,
            title: 'HR Analytics & Workforce Reporting Dashboard',
            tech: 'Power BI | Excel',
            featured: false,
            image: 'https://raw.githubusercontent.com/GauravRoy092/HR-Analytics-Report/main/HR%20Reports%20Front.jpg',
            highlights: [
                'Built an HR analytics dashboard tracking headcount, gender ratio, age distribution, salary metrics, and leave balance',
                'Designed role-wise staff distribution and headcount trends to support workforce planning and hiring analysis',
                'Maintained employee-level structured tables with filters to ensure data accuracy and reporting consistency',
                'Designed dashboards similar to recruitment and internal workforce reporting used in B2B organizations',
            ],
            links: {
                view: 'https://github.com/GauravRoy092/HR-Analytics-Report/blob/main/HR%20Reports%20Front.jpg',
            },
        },
    ],
    skills: [
        {
            category: 'Product & Business Operations',
            items: [
                'Requirement documentation',
                'Feature tracking & user feedback analysis',
                'Process analysis & KPI tracking',
                'Workflow documentation',
                'Cross-functional coordination (Product, Ops, Tech)',
            ],
        },
        {
            category: 'Data Analysis & Reporting',
            items: [
                'SQL (MySQL, MS SQL Server)',
                'Excel (Power Query, Pivot Tables, Charts)',
                'Power BI dashboards',
                'Google Sheets',
                'Data validation & structured reporting',
                'Dashboard analysis',
            ],
        },
        {
            category: 'Tools & Platforms',
            items: [
                'Power BI',
                'Microsoft Excel',
                'Google Sheets',
                'SQL databases',
                'Basic Python (Pandas, NumPy, Matplotlib)',
            ],
        },
        {
            category: 'Communication & Collaboration',
            items: [
                'Stakeholder communication',
                'Professional email etiquette',
                'Requirement clarification',
                'Internal coordination',
                'Documentation writing',
            ],
        },
    ],
    education: {
        degree: 'B.Tech in Electronics & Communication Engineering (ECE)',
        institution: 'Guru Tegh Bahadur Institute of Technology (GTBIT)',
        period: '2021 – 2025',
        cgpa: '7.71',
        location: 'Delhi, India',
    },
};
