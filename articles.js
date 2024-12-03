const articles = {
    'web-development': {
        title: 'Getting Started with Web Development',
        author: 'Sarah Johnson',
        date: 'March 12, 2024',
        headerImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&h=400',
        content: `
            <p>Web development is an exciting field that combines creativity with technical skills. Whether you're just starting out or looking to expand your knowledge, this guide will help you understand the fundamentals.</p>
            
            <h2>The Basics</h2>
            <p>To begin your web development journey, you'll need to understand three core technologies:</p>
            <ul>
                <li>HTML - For structuring content</li>
                <li>CSS - For styling and layout</li>
                <li>JavaScript - For interactivity and functionality</li>
            </ul>
            
            <h2>Getting Started</h2>
            <p>The best way to learn web development is through hands-on practice. Start with small projects and gradually increase their complexity as you gain confidence.</p>
        `
    },
    'productivity-tips': {
        title: '10 Tips for Better Productivity',
        author: 'Michael Chen',
        date: 'March 10, 2024',
        headerImage: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&h=400',
        content: `
            <p>Productivity is key to success in today's fast-paced world. Here are ten proven tips to help you maximize your efficiency and achieve more in less time.</p>
            
            <h2>1. Plan Your Day</h2>
            <p>Start each morning by planning your tasks and priorities. This simple habit can significantly improve your focus and productivity throughout the day.</p>
            
            <h2>2. Use the Pomodoro Technique</h2>
            <p>Work in focused 25-minute intervals, followed by short breaks. This method helps maintain concentration and prevents burnout.</p>
        `
    },
    'ai-technology': {
        title: 'The Future of AI Technology',
        author: 'Dr. Emily Watson',
        date: 'March 8, 2024',
        headerImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=400',
        content: `
            <p>Artificial Intelligence is rapidly transforming our world, bringing both opportunities and challenges. Let's explore what the future might hold.</p>
            
            <h2>Current Trends</h2>
            <p>AI is already impacting various industries, from healthcare to finance. Machine learning algorithms are becoming more sophisticated, enabling new applications and possibilities.</p>
            
            <h2>Future Prospects</h2>
            <p>The next decade will likely see AI becoming even more integrated into our daily lives, with advances in natural language processing and computer vision leading the way.</p>
        `
    },
    'modern-design': {
        title: 'Best Practices in Modern Design',
        author: 'Alex Rivera',
        date: 'March 5, 2024',
        headerImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&h=400',
        content: `
            <p>Modern design is all about creating beautiful, functional, and user-friendly experiences. Here's what you need to know about current design trends and best practices.</p>
            
            <h2>Minimalism</h2>
            <p>Less is more in modern design. Focus on essential elements and remove anything that doesn't serve a clear purpose.</p>
            
            <h2>User Experience</h2>
            <p>Good design puts the user first. Consider how people will interact with your design and optimize for ease of use.</p>
        `
    },
    'mobile-development': {
        title: 'Mobile App Development Guide',
        author: 'David Kim',
        date: 'March 15, 2024',
        headerImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=400',
        content: `
            <p>Mobile development is one of the most exciting and rapidly growing fields in technology. Learn how to create amazing mobile applications.</p>
            
            <h2>Choose Your Platform</h2>
            <p>Decide between iOS, Android, or cross-platform development. Each has its own advantages and challenges.</p>
            
            <h2>Essential Tools</h2>
            <p>Familiarize yourself with development environments like Xcode or Android Studio, and learn about cross-platform frameworks like React Native or Flutter.</p>
        `
    },
    'data-science': {
        title: 'Introduction to Data Science',
        author: 'Dr. Maria Garcia',
        date: 'March 14, 2024',
        headerImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=400',
        content: `
            <p>Data Science combines statistics, programming, and domain expertise to extract meaningful insights from data.</p>
            
            <h2>Key Skills</h2>
            <p>Learn about essential tools like Python, R, SQL, and various machine learning algorithms.</p>
            
            <h2>Real-World Applications</h2>
            <p>Discover how data science is transforming industries from healthcare to finance.</p>
        `
    },
    'cybersecurity': {
        title: 'Cybersecurity Essentials',
        author: 'James Wilson',
        date: 'March 13, 2024',
        headerImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=400',
        content: `
            <p>In today's digital age, cybersecurity is more important than ever. Learn how to protect yourself and your organization.</p>
            
            <h2>Common Threats</h2>
            <p>Understand different types of cyber attacks and how to prevent them.</p>
            
            <h2>Best Practices</h2>
            <p>Learn about encryption, secure passwords, and other essential security measures.</p>
        `
    },
    'cloud-computing': {
        title: 'Cloud Computing Fundamentals',
        author: 'Lisa Chen',
        date: 'March 11, 2024',
        headerImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&h=400',
        content: `
            <p>Cloud computing has revolutionized how we build and deploy applications. Discover the fundamentals of cloud services.</p>
            
            <h2>Cloud Providers</h2>
            <p>Compare major cloud providers like AWS, Azure, and Google Cloud.</p>
            
            <h2>Architecture Patterns</h2>
            <p>Learn about microservices, serverless computing, and cloud-native applications.</p>
        `
    },
    'machine-learning': {
        title: 'Machine Learning for Beginners',
        author: 'Dr. Tom Anderson',
        date: 'March 9, 2024',
        headerImage: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&h=400',
        content: `
            <p>Machine learning is transforming how we solve complex problems. Start your journey into this fascinating field.</p>
            
            <h2>Basic Concepts</h2>
            <p>Understand supervised learning, unsupervised learning, and reinforcement learning.</p>
            
            <h2>Popular Algorithms</h2>
            <p>Learn about neural networks, decision trees, and other common algorithms.</p>
        `
    },
    'blockchain': {
        title: 'Understanding Blockchain Technology',
        author: 'Ryan Zhang',
        date: 'March 7, 2024',
        headerImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&h=400',
        content: `
            <p>Blockchain technology is revolutionizing various industries. Learn about its fundamentals and applications.</p>
            
            <h2>Core Concepts</h2>
            <p>Understand distributed ledgers, consensus mechanisms, and smart contracts.</p>
            
            <h2>Applications</h2>
            <p>Explore use cases beyond cryptocurrencies in finance, supply chain, and more.</p>
        `
    }
};

function loadArticle(articleId) {
    const article = articles[articleId];
    if (!article) return;

    // Update header image
    document.querySelector('.header-image img').src = article.headerImage;
    document.querySelector('.header-image img').alt = article.title;

    // Update title
    document.querySelector('.post-title').textContent = article.title;

    // Update meta information
    document.querySelector('.author').textContent = `By ${article.author}`;
    document.querySelector('.date').textContent = `Published on ${article.date}`;

    // Update content
    document.querySelector('.post-body').innerHTML = article.content;

    // Update URL without page reload
    history.pushState({ articleId }, article.title, `#${articleId}`);

    // Scroll to top
    window.scrollTo(0, 0);
}

// Handle browser back/forward buttons
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.articleId) {
        loadArticle(event.state.articleId);
    }
});

// Load article from URL hash on page load
window.addEventListener('load', () => {
    const articleId = window.location.hash.slice(1);
    if (articleId && articles[articleId]) {
        loadArticle(articleId);
    }
});
