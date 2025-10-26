

export const navItems= [
    { name:"Home", href:"#"},
    { name:"Programs", href:"#"},
    { name:"About", href:"#"},
    { name:"Pricing", href:"#"},
    { name:"Contact", href:"#"},
    
]

export const programs = [
    {
    title: "Strength Training",
    description: "Build muscle and increase strength with our expert-led strength training programs.",
    image: "/muscular.png",
    alt: "Strength Training"},

    {
    title: "Yoga & Flexibility",
    description: "Improve your flexibility and find inner peace with our yoga sessions.",
    image: "/yoga.jpg",
    alt: "Yoga & Flexibility"},

    {
    title: "Cardio Fitness",
    description: "Boost your endurance and heart health with our dynamic cardio workouts.",
    image: "/cardio.png",
    alt: "Cardio Fitness"},

    
    {
    title: "Nutrition Guidance",
    description: "Get personalized nutrition plans to complement your fitness journey.",
    image: "/nutria.png",
    alt: "Nutrition Guidance"},

]

export const testimonials = [
    {
    name: "Sarah H",
    story:"I lost 20lbs in 3 months with this program!",
    details:"The personalized training and nutrition plan made all the difference. I feel stronger and more confident than ever.",
    image:"/pic-2.png",
    rating: 5,
   },
   
   { 
    name: "john d",
    story:"The trainer push me beyond my limits in a healthy way.",
    details:"Professional, motivating, and results-driven. I've gained muscle and improved my overall fitness significantly.",
    image:"/pic-1.png",
    rating: 4,
   },

    { 
    name: "Mario Costa",
    story:"Flexible scheduling made it easy to stay consistent.",
    details:"As a busy mom, the online sessions and flexible timing helped me maintain my fitness routine without stress.",
    image:"/pic-3.png",
    rating: 5,
   },
];

export const plans = [
    {
        name: "Basic",
        price: 29,
        period: "month",
        description: "Perfect for beginners who want to start their fitness journey.",
        
        features: [
            "Gym Access",
            "Basic Equipment Usage",
            "locker Room Access",
            "Mobile App Access",
            "Progress Tracking",
            

        ],
        cta: "Join Now",
        popular: false,
    },

    {
        name: "Pro",
        price: 59,
        period: "month",
        description: "Most popular choice for serious fitness enthusiasts.",
        
        features: [
            "Everything in Basic",
            "4 Personal Training Sessions",
            "Group Classes",
            "Nutrition Plan",
            "Priority Support",
            "Custom Workout Plans",
            

        ],
        cta: "Join Now",
        popular: true,
    },

    {
        name: "Elite",
        price: 99,
        period: "month",
        description: "Complete fitness transformation package.",
        
        features: [
            "Everything in Pro",
            "Unlimited Training Sessions",
            "Online Classes Access",
            "24/7 Gym Access",
            "Recovery & Wellness Sessions",
            "VIP Member Benefits",
            

        ],
        cta: "Join Now",
        popular: false,
    }
];