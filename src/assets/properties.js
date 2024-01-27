const properties = [
    {
        id: 1,
        name: 'Property 1',
        image: 'https://plus.unsplash.com/premium_photo-1675324517011-24d2c741c22f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 2,
        name: 'Property 2',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbCUyMGVzdGF0ZSUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww'
    },
    {
        id: 3,
        name: 'Property 3',
        image: 'https://images.unsplash.com/photo-1628133287836-40bd5453bed1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVhbCUyMGVzdGF0ZSUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww'
    },
    {
        id: 4,
        name: 'Property 4',
        image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJlYWwlMjBlc3RhdGUlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        id: 5,
        name: 'Property 5',
        image: 'https://images.unsplash.com/photo-1628624747295-ea5e7fc3d76f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlYWwlMjBlc3RhdGUlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        id: 6,
        name: 'Property 6',
        image: 'https://images.unsplash.com/photo-1594540992254-0e2239661647?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlYWwlMjBlc3RhdGUlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        id: 7,
        name: 'Property 7',
        image: 'https://media.istockphoto.com/id/1447708518/photo/modern-villa-exterior-in-summer.webp?b=1&s=170667a&w=0&k=20&c=zh6wcDIxJk2ORk0Kg3hjVxQYWQsoLZ9TwAeCmxeYB-A='
    },
    {
        id: 8,
        name: 'Property 8',
        image: 'https://media.istockphoto.com/id/1661600002/photo/tall-city-buildings-population-with-blue-monsoon-clouds-sky-background-in-pune-maharashtra.webp?b=1&s=170667a&w=0&k=20&c=l--AJDiyC21JwG2v-D8G824t__TL0pgvvB3xxeSuAf4='
    },
    {
        id: 9,
        name: 'Property 9',
        image: 'https://media.istockphoto.com/id/1205274326/photo/male-hand-showing-offering-a-new-dream-house-at-the-empty-field-with-copy-space.webp?b=1&s=170667a&w=0&k=20&c=bnrQAj7PcObc8WvBAOYi4Phufk_y9gYYLrKOpoSC9R0='
    },
    {
        id: 10,
        name: 'Property 10',
        image: 'https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHJlYWwlMjBlc3RhdGUlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        id: 11,
        name: 'Property 11',
        image: 'https://images.unsplash.com/photo-1560185009-dddeb820c7b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHJlYWwlMjBlc3RhdGUlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        id: 12,
        name: 'Property 12',
        image: 'https://images.unsplash.com/photo-1426122402199-be02db90eb90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHJlYWwlMjBlc3RhdGUlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        id: 13,
        name: 'Property 13',
        image: 'https://images.unsplash.com/photo-1635108200313-40f75b86bc94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHJlYWwlMjBlc3RhdGUlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        id: 14,
        name: 'Property 14',
        image: 'https://images.unsplash.com/photo-1605146768851-eda79da39897?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHJlYWwlMjBlc3RhdGUlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        id: 15,
        name: 'Property 15',
        image: 'https://images.unsplash.com/photo-1635108199650-8115b597e283?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHJlYWwlMjBlc3RhdGUlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        id: 16,
        name: 'Property 16',
        image: 'https://images.unsplash.com/photo-1557813282-bcd50093e38f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHJlYWwlMjBlc3RhdGUlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D'
    },
];

export default properties;