// Mock Data for YSS Platform

// Social Media Growth Data for Dashboard - with zigzag patterns for realistic look
export const socialGrowthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Instagram',
            data: [120, 195, 170, 280, 320, 290, 520, 480, 550, 680, 650, 900],
            borderColor: '#E1306C',
            backgroundColor: '#E1306C',
            pointBackgroundColor: '#E1306C',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            tension: 0.3,
        },
        {
            label: 'LinkedIn',
            data: [80, 125, 110, 190, 220, 200, 365, 340, 400, 480, 450, 650],
            borderColor: '#0077B5',
            backgroundColor: '#0077B5',
            pointBackgroundColor: '#0077B5',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            tension: 0.3,
        },
        {
            label: 'TikTok',
            data: [50, 105, 90, 170, 200, 180, 315, 290, 350, 430, 400, 600],
            borderColor: '#000000',
            backgroundColor: '#000000',
            pointBackgroundColor: '#000000',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            tension: 0.3,
        },
    ],
};

// Platform Progress Data for Dashboard
export const platformProgressData = {
    labels: ['WhatsApp', 'LinkedIn', 'TikTok'],
    datasets: [
        {
            label: 'Engagement',
            data: [85, 70, 60],
            backgroundColor: ['#25D366', '#0077B5', '#000000'],
            borderRadius: 8,
            barPercentage: 0.6,
        },
    ],
};

// Helper function to calculate points
const calculatePoints = (actions) => {
    const pointsMap = { view: 3, like: 5, comment: 7, review: 5, multiple: 10 };
    return actions.reduce((total, action) => total + (pointsMap[action] || 0), 0);
};

const generateHistoryData = () => {
    return Array.from({ length: 6 }, () => Math.floor(Math.random() * 50) + 10);
};

// Lead Data with Real Photos
export const leadsData = [
    {
        id: 1,
        name: 'Sarah Johnson',
        email: 'sarah.j@example.com',
        phone: '+1 (555) 123-4567',
        avatar: 'SJ',
        photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
        profession: 'Fashion Influencer & Content Creator',
        likes: 145,
        comments: 32,
        revisits: 89,
        actions: ['view', 'like', 'comment', 'review', 'like'],
        platform: 'Instagram',
        history: generateHistoryData(),
        status: 'Hot',
        userId: 'YSS-8842',
        country: 'United States',
        address: '42 Sunset Blvd, Los Angeles, CA 90028',
        stats: {
            likes: [12, 19, 3, 5, 2, 3, 9],
            comments: [2, 3, 20, 5, 1, 4, 2],
            views: [35, 40, 55, 60, 45, 50, 65]
        },
        activityLog: [
            {
                id: 101,
                type: 'like',
                platform: 'Instagram',
                postImage: 'https://www.zdnet.com/a/img/resize/f6e80353f1dfb61534aff0cc505918b120f391b0/2023/01/10/15c65e40-5d22-4999-a546-1c0f96b5af99/screen-shot-2023-01-10-at-11-40-04-am.png?auto=webp&width=1280',
                postTitle: 'Summer Collection Launch 2025',
                details: 'Liked this post',
                timestamp: '2 hours ago'
            },
            {
                id: 102,
                type: 'comment',
                platform: 'Instagram',
                postImage: 'https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png',
                postTitle: 'New Product Teaser',
                details: "Can't wait to try this! When is it dropping?",
                timestamp: '5 hours ago'
            },
            {
                id: 103,
                type: 'view',
                platform: 'Instagram',
                postImage: 'https://www.zdnet.com/a/img/resize/f6e80353f1dfb61534aff0cc505918b120f391b0/2023/01/10/15c65e40-5d22-4999-a546-1c0f96b5af99/screen-shot-2023-01-10-at-11-40-04-am.png?auto=webp&width=1280',
                postTitle: 'Customer Spotlight Story',
                details: 'Viewed for story',
                timestamp: '1 day ago'
            },
            {
                id: 104,
                type: 'reaction',
                platform: 'TikTok',
                postImage: 'https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png',
                postTitle: 'Weekly Industry Insights',
                details: 'Liked this article',
                timestamp: '2 days ago'
            }
        ]
    },
    {
        id: 2,
        name: 'Michael Chen',
        email: 'michael.c@example.com',
        phone: '+1 (555) 234-5678',
        avatar: 'MC',
        photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
        profession: 'Tech Entrepreneur & Blogger',
        likes: 132,
        comments: 28,
        revisits: 76,
        actions: ['view', 'like', 'view', 'comment'],
        platform: 'LinkedIn',
        history: generateHistoryData(),
        status: 'Hot',
        userId: 'YSS-8843',
        country: 'United States',
        address: '123 Tech Ave, San Francisco, CA 94102',
        stats: {
            likes: [10, 15, 8, 12, 6, 9, 14],
            comments: [3, 5, 2, 4, 1, 3, 6],
            views: [40, 45, 50, 55, 48, 52, 60]
        },
        activityLog: []
    },
    {
        id: 3,
        name: 'Emma Rodriguez',
        email: 'emma.r@example.com',
        phone: '+1 (555) 345-6789',
        avatar: 'ER',
        photoUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
        profession: 'Beauty & Lifestyle Vlogger',
        likes: 118,
        comments: 24,
        revisits: 65,
        actions: ['like', 'view', 'like'],
        platform: 'Instagram',
        history: generateHistoryData(),
        status: 'Warm',
        userId: 'YSS-8844',
        country: 'United States',
        address: '456 Beauty Blvd, Miami, FL 33101',
        stats: {
            likes: [8, 12, 5, 10, 4, 7, 11],
            comments: [2, 4, 1, 3, 2, 2, 5],
            views: [30, 35, 40, 45, 38, 42, 50]
        },
        activityLog: []
    },
    {
        id: 4,
        name: 'James Anderson',
        email: 'james.a@example.com',
        phone: '+1 (555) 456-7890',
        avatar: 'JA',
        photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
        profession: 'Fitness Coach & Motivational Speaker',
        likes: 105,
        comments: 22,
        revisits: 58,
        actions: ['view', 'like'],
        platform: 'TikTok',
        history: generateHistoryData(),
        status: 'Warm',
        userId: 'YSS-8845',
        country: 'United States',
        address: '789 Fitness St, Austin, TX 78701',
        stats: {
            likes: [7, 11, 4, 9, 3, 6, 10],
            comments: [1, 3, 2, 2, 1, 2, 4],
            views: [25, 30, 35, 40, 33, 37, 45]
        },
        activityLog: []
    },
    {
        id: 5,
        name: 'Olivia Martinez',
        email: 'olivia.m@example.com',
        phone: '+1 (555) 567-8901',
        avatar: 'OM',
        photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
        profession: 'Travel Photographer & Writer',
        likes: 98,
        comments: 20,
        revisits: 52,
        actions: ['view', 'like', 'view'],
        platform: 'Instagram',
        history: generateHistoryData(),
        status: 'Warm',
        userId: 'YSS-8846',
        country: 'United States',
        address: '321 Travel Way, Seattle, WA 98101',
        stats: {
            likes: [6, 10, 3, 8, 2, 5, 9],
            comments: [1, 2, 1, 2, 1, 1, 3],
            views: [20, 25, 30, 35, 28, 32, 40]
        },
        activityLog: []
    },
    {
        id: 6,
        name: 'Daniel Kim',
        email: 'daniel.k@example.com',
        phone: '+1 (555) 678-9012',
        avatar: 'DK',
        photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
        profession: 'Digital Marketing Specialist',
        likes: 87,
        comments: 18,
        revisits: 45,
        actions: ['like', 'view'],
        platform: 'LinkedIn',
        history: generateHistoryData(),
        status: 'Cold',
        userId: 'YSS-8847',
        country: 'United States',
        address: '654 Marketing Dr, Boston, MA 02101',
        stats: {
            likes: [5, 9, 2, 7, 1, 4, 8],
            comments: [1, 2, 1, 1, 1, 1, 2],
            views: [18, 22, 26, 30, 24, 28, 35]
        },
        activityLog: []
    },
    {
        id: 7,
        name: 'Sophia Taylor',
        email: 'sophia.t@example.com',
        phone: '+1 (555) 789-0123',
        avatar: 'ST',
        photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
        profession: 'Food Blogger & Recipe Developer',
        likes: 76,
        comments: 16,
        revisits: 38,
        actions: ['view', 'like'],
        platform: 'Instagram',
        history: generateHistoryData(),
        status: 'Cold',
        userId: 'YSS-8848',
        country: 'United States',
        address: '987 Culinary Ln, Portland, OR 97201',
        stats: {
            likes: [4, 8, 1, 6, 1, 3, 7],
            comments: [1, 1, 1, 1, 1, 1, 2],
            views: [15, 19, 23, 27, 21, 25, 32]
        },
        activityLog: []
    },
    {
        id: 8,
        name: 'Liam Wilson',
        email: 'liam.w@example.com',
        phone: '+1 (555) 890-1234',
        avatar: 'LW',
        photoUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400',
        profession: 'Music Producer & DJ',
        likes: 142,
        comments: 30,
        revisits: 82,
        actions: ['view', 'like', 'comment', 'like', 'view'],
        platform: 'TikTok',
        history: generateHistoryData(),
        status: 'Hot',
        userId: 'YSS-8849',
        country: 'United States',
        address: '147 Music Row, Nashville, TN 37201',
        stats: {
            likes: [11, 16, 7, 13, 5, 8, 15],
            comments: [3, 4, 2, 3, 2, 3, 5],
            views: [38, 42, 48, 52, 45, 49, 58]
        },
        activityLog: []
    },
    {
        id: 9,
        name: 'Ava Thompson',
        email: 'ava.t@example.com',
        phone: '+1 (555) 901-2345',
        avatar: 'AT',
        photoUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
        profession: 'Wellness Coach & Yoga Instructor',
        likes: 125,
        comments: 26,
        revisits: 70,
        actions: ['like', 'view', 'comment', 'like'],
        platform: 'Instagram',
        history: generateHistoryData(),
        status: 'Hot',
        userId: 'YSS-8850',
        country: 'United States',
        address: '258 Wellness Way, Denver, CO 80201',
        stats: {
            likes: [9, 14, 6, 11, 4, 7, 13],
            comments: [2, 3, 2, 3, 1, 2, 4],
            views: [32, 37, 42, 47, 40, 44, 53]
        },
        activityLog: []
    },
    {
        id: 10,
        name: 'Noah Garcia',
        email: 'noah.g@example.com',
        phone: '+1 (555) 012-3456',
        avatar: 'NG',
        photoUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400',
        profession: 'Gaming Streamer & Content Creator',
        likes: 110,
        comments: 23,
        revisits: 62,
        actions: ['view', 'like', 'view', 'comment'],
        platform: 'TikTok',
        history: generateHistoryData(),
        status: 'Warm',
        userId: 'YSS-8851',
        country: 'United States',
        address: '369 Gaming Blvd, Las Vegas, NV 89101',
        stats: {
            likes: [8, 13, 5, 10, 3, 6, 12],
            comments: [2, 3, 1, 2, 1, 2, 4],
            views: [28, 33, 38, 43, 36, 40, 48]
        },
        activityLog: []
    },
    {
        id: 11,
        name: 'Isabella Brown',
        email: 'isabella.b@example.com',
        phone: '+1 (555) 123-4567',
        avatar: 'IB',
        photoUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400',
        profession: 'Interior Designer & Home Stylist',
        likes: 93,
        comments: 19,
        revisits: 50,
        actions: ['like', 'view', 'like'],
        platform: 'Instagram',
        history: generateHistoryData(),
        status: 'Warm',
        userId: 'YSS-8852',
        country: 'United States',
        address: '741 Design St, Chicago, IL 60601',
        stats: {
            likes: [7, 11, 4, 9, 2, 5, 10],
            comments: [1, 2, 1, 2, 1, 1, 3],
            views: [24, 29, 34, 39, 32, 36, 44]
        },
        activityLog: []
    },
    {
        id: 12,
        name: 'Ethan Davis',
        email: 'ethan.d@example.com',
        phone: '+1 (555) 234-5678',
        avatar: 'ED',
        photoUrl: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400',
        profession: 'Business Consultant & Speaker',
        likes: 82,
        comments: 17,
        revisits: 42,
        actions: ['view', 'like'],
        platform: 'LinkedIn',
        history: generateHistoryData(),
        status: 'Cold',
        userId: 'YSS-8853',
        country: 'United States',
        address: '852 Business Ave, New York, NY 10001',
        stats: {
            likes: [6, 10, 3, 8, 1, 4, 9],
            comments: [1, 2, 1, 1, 1, 1, 2],
            views: [21, 26, 31, 36, 29, 33, 41]
        },
        activityLog: []
    },
    {
        id: 13,
        name: 'Mia Martinez',
        email: 'mia.m@example.com',
        phone: '+1 (555) 345-6789',
        avatar: 'MM',
        photoUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400',
        profession: 'Sustainable Fashion Advocate',
        likes: 135,
        comments: 29,
        revisits: 78,
        actions: ['like', 'comment', 'view', 'like', 'view'],
        platform: 'Instagram',
        history: generateHistoryData(),
        status: 'Hot',
        userId: 'YSS-8854',
        country: 'United States',
        address: '963 Eco Lane, San Diego, CA 92101',
        stats: {
            likes: [10, 15, 6, 12, 4, 7, 14],
            comments: [2, 4, 2, 3, 1, 2, 5],
            views: [35, 40, 45, 50, 43, 47, 56]
        },
        activityLog: []
    },
    {
        id: 14,
        name: 'Lucas Johnson',
        email: 'lucas.j@example.com',
        phone: '+1 (555) 456-7890',
        avatar: 'LJ',
        photoUrl: 'https://images.unsplash.com/photo-1507081323647-4d250478b919?w=400',
        profession: 'Outdoor Adventure Guide',
        likes: 102,
        comments: 21,
        revisits: 56,
        actions: ['view', 'like', 'view', 'comment'],
        platform: 'TikTok',
        history: generateHistoryData(),
        status: 'Warm',
        userId: 'YSS-8855',
        country: 'United States',
        address: '159 Mountain Rd, Boulder, CO 80301',
        stats: {
            likes: [7, 12, 4, 9, 3, 6, 11],
            comments: [1, 3, 1, 2, 1, 2, 3],
            views: [26, 31, 36, 41, 34, 38, 46]
        },
        activityLog: []
    },
    {
        id: 15,
        name: 'Charlotte Lee',
        email: 'charlotte.l@example.com',
        phone: '+1 (555) 567-8901',
        avatar: 'CL',
        photoUrl: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400',
        profession: 'Graphic Designer & Illustrator',
        likes: 88,
        comments: 18,
        revisits: 46,
        actions: ['like', 'view', 'like'],
        platform: 'Instagram',
        history: generateHistoryData(),
        status: 'Cold',
        userId: 'YSS-8856',
        country: 'United States',
        address: '357 Art Street, Philadelphia, PA 19101',
        stats: {
            likes: [6, 10, 3, 8, 2, 5, 9],
            comments: [1, 2, 1, 2, 1, 1, 2],
            views: [22, 27, 32, 37, 30, 34, 42]
        },
        activityLog: []
    },
    {
        id: 16,
        name: 'Mason White',
        email: 'mason.w@example.com',
        phone: '+1 (555) 678-9012',
        avatar: 'MW',
        photoUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400',
        profession: 'Real Estate Agent & Investor',
        likes: 75,
        comments: 15,
        revisits: 36,
        actions: ['view', 'like'],
        platform: 'LinkedIn',
        history: generateHistoryData(),
        status: 'Cold',
        userId: 'YSS-8857',
        country: 'United States',
        address: '753 Property Ln, Phoenix, AZ 85001',
        stats: {
            likes: [5, 9, 2, 7, 1, 4, 8],
            comments: [1, 1, 1, 1, 1, 1, 2],
            views: [19, 24, 29, 34, 27, 31, 39]
        },
        activityLog: []
    },
    {
        id: 17,
        name: 'Amelia Harris',
        email: 'amelia.h@example.com',
        phone: '+1 (555) 789-0123',
        avatar: 'AH',
        photoUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400',
        profession: 'Pet Care Specialist & Trainer',
        likes: 120,
        comments: 25,
        revisits: 68,
        actions: ['like', 'view', 'comment', 'like'],
        platform: 'Instagram',
        history: generateHistoryData(),
        status: 'Hot',
        userId: 'YSS-8858',
        country: 'United States',
        address: '951 Pet Park, Atlanta, GA 30301',
        stats: {
            likes: [9, 13, 5, 10, 3, 6, 12],
            comments: [2, 3, 2, 3, 1, 2, 4],
            views: [31, 36, 41, 46, 39, 43, 52]
        },
        activityLog: []
    },
    {
        id: 18,
        name: 'Benjamin Clark',
        email: 'benjamin.c@example.com',
        phone: '+1 (555) 890-1234',
        avatar: 'BC',
        photoUrl: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400',
        profession: 'Software Developer & Tech Reviewer',
        likes: 95,
        comments: 20,
        revisits: 53,
        actions: ['view', 'like', 'view'],
        platform: 'TikTok',
        history: generateHistoryData(),
        status: 'Warm',
        userId: 'YSS-8859',
        country: 'United States',
        address: '147 Code Ave, San Jose, CA 95101',
        stats: {
            likes: [7, 11, 4, 9, 2, 5, 10],
            comments: [1, 2, 1, 2, 1, 1, 3],
            views: [25, 30, 35, 40, 33, 37, 45]
        },
        activityLog: []
    },
    {
        id: 19,
        name: 'Harper Lewis',
        email: 'harper.l@example.com',
        phone: '+1 (555) 901-2345',
        avatar: 'HL',
        photoUrl: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400',
        profession: 'Parenting Blogger & Educator',
        likes: 108,
        comments: 22,
        revisits: 60,
        actions: ['like', 'view', 'comment', 'like'],
        platform: 'Instagram',
        history: generateHistoryData(),
        status: 'Warm',
        userId: 'YSS-8860',
        country: 'United States',
        address: '258 Family Dr, Minneapolis, MN 55401',
        stats: {
            likes: [8, 12, 5, 10, 3, 6, 11],
            comments: [2, 3, 1, 2, 1, 2, 4],
            views: [27, 32, 37, 42, 35, 39, 47]
        },
        activityLog: []
    },
    {
        id: 20,
        name: 'Alexander Walker',
        email: 'alexander.w@example.com',
        phone: '+1 (555) 012-3456',
        avatar: 'AW',
        photoUrl: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400',
        profession: 'Financial Advisor & Investor',
        likes: 85,
        comments: 17,
        revisits: 44,
        actions: ['view', 'like', 'view'],
        platform: 'LinkedIn',
        history: generateHistoryData(),
        status: 'Cold',
        userId: 'YSS-8861',
        country: 'United States',
        address: '369 Finance Blvd, Charlotte, NC 28201',
        stats: {
            likes: [6, 10, 3, 8, 2, 5, 9],
            comments: [1, 2, 1, 1, 1, 1, 2],
            views: [23, 28, 33, 38, 31, 35, 43]
        },
        activityLog: []
    }
].map(lead => ({
    ...lead,
    points: calculatePoints(lead.actions)
})).sort((a, b) => b.points - a.points);

export const topLeads = leadsData.slice(0, 5);
