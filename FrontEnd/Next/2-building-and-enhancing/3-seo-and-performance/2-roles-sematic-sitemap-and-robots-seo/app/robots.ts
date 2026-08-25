

export default function robots(){
    return{
        rules:[
            {
                userAgent:"*",
                allow:"/",
                disallow:"/private/"
            },
            {
                userAgent:["Applebot", "Bingbot"],
                disallow:"*",
            },
        ],
        sitemap:"http://localhost:3000/sitemap.xml"
    }
}

// Again we need to run the build  command npm run build and npm run start