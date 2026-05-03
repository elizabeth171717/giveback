const programs = [
  {
    id: 1,
    name: "BUFORD HIGHWAY ORCHESTRA",
    descrition:`Launched in 2021, the Buford Highway Orchestra Project (BHOP)
is a free after-school and weekend enrichment program that provides high-quality
string instrument instruction to children in 3rd–8th grade, primarily from Title
I schools in DeKalb County Region I`,
    categories: ["children", "music", "buford hwy", "education", "scholarship", "students", "immigrants"],
    link:"https://welovebuhi.org/buford-highway-orchestra-project",
  },
  {
    id: 2,
    name: "LOS VECINOS DE BUFORD HWY",
     descrition:"Offers resources directly to immigrant families in neighborhoods throughout Buford Highway.",
    categories: ["immigrant", "latinos", "buford hwy"],
     link:"https://www.losvecinosdebufordhighway.org/",
  },
  {
    id: 3,
    name: "WE LOVE BUFORD HIGHWAY",
     descrition:"Preserving the Multicultural Identity of Atlanta's Buford Highway, where immigrant families, small businesses, and artists build shared prosperity through connection, storytelling, and belonging.",
    categories: ["latinos", "immigrants", "buford hwy"],
    link:"https://welovebuhi.org/",
  },
  {
    id: 4,
    name: "REACH FOR EXCELLENCE",
     descrition:"Tuition-Free Program that offers students with limited income a combination of academic, cultural, and communal experiences that prepare students for the challenges of high school and college preparatory programs.",
    categories: ["children","education", "scholarship", "students", "immigrants"],
    link:"https://reachforexcellence.org/",
  },

  {
    id: 5,
    name: "LATIN AMERICAN ASSOCIATION",
     descrition:"Founded in 1972, the work of the LAA improves the lives of 40,000 individuals every year. No other organization in Georgia serving our community has the geographic reach, breadth of services, expertise and longevity of the LAA.",
    categories: ["latinos", "immigrants", "buford hwy", "families", "housing", "food"],
    link:"https://thelaa.org/",
  },

  {
    id: 6,
    name: "CROSS KEYS FOUNDATION",
     descrition:"Annual award presented since 2010 to deserving graduating seniors from Cross Keys High School in Brookhaven, to support local students pursuing higher education, often providing multiple $2,000 awards to honor academic success and community service",
    categories: ["children","education", "scholarship", "students", "immigrants"],
    link:"https://crosskeysfoundation.org/",
  },

   {
    id: 7,
    name: "WE ARE CASA",
     descrition:"With over 189,000 lifetime members across 46 US states, We Are CASA is a national powerhouse organization building power and improving the quality of life in working-class: Black, Latino/a/e, Afro-descendent, Indigenous, and Immigrant communities. ",
    categories: ["immigrants"],
    link:"https://wearecasa.org/",
  },
   {
    id: 9,
    name: "UNITED WAY OF GREATER ATLANTA",
     descrition:"Helps children unlock their full potential by improving education, healthcare, and economic mobility in the communities where they live.",
    categories: ["children","education", "scholarship", "students", "immigrants", "families"],
    link:"https://unitedwayatlanta.org/",
  },

{
    id: 10,
    name: "HACEMOS ATLANTA",
     descrition:"This exciting event supports scholarships for Atlanta students and provides an opportunity for support to make a lasting impact on the education and development of future leaders.",
    categories: ["children","education", "scholarship", "students", "immigrants", "families"],
    link:"https://hacemosatlanta5k.org/",
  },

  {
    id: 10,
    name: "PODER LATINX",
     descrition:"Voter engagement organization for Latinos nationwide, leadership development.",
    categories: ["education","immigrants", "families"],
    link:"https://poderlatinx.org/",
  },

  {
    id: 10,
    name: "AMIGOS DE LA COMMUNIDAD",
     descrition:"Provides education on health and general well-being for our Latino community.",
    categories: ["immigrants", "families","latino"],
    link:"https://www.paypal.com/donate/?hosted_button_id=QT45RGBQYQJ24&fbclid=IwY2xjawRjkZFleHRuA2FlbQIxMABicmlkETFZekZ4dkJ1Unk4VVBNc0FLc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHuHAw6aghBPt_abtzOAmzj7sAF4aBv3bGWiAW0wzP0iOlA1bkNd8lNsUX3RP_aem_6DPnlA5XnwXhp9I1b9bHGw",
  },
  {
    id: 10,
    name: "UNIDOS GEORGIA",
     descrition:"Disaster relief for the most vulnerable families.",
    categories: ["community", "families", "relief"],
    link:"https://www.unidosgeorgia.com/",
  },
   {
    id: 11,
    name: "ONE POWER HOUSE",
     descrition:"Helps build strong families & thriving communities.",
    categories: ["community", "families", "relief", "youth"],
    link:"https://1powerhouse.org/",
  },
  {
    id: 12,
    name: "GIVING KITCHEN",
     descrition:"Helps Food Service Workers.",
    categories: ["community", "families", "relief", "youth", "food industry"],
    link:"https://givingkitchen.org/",
  },
  {
    id: 13,
    name: "REBECCA’S TENT ",
     descrition:"Women’s shelters in Atlanta, offers empowerment workshops, career and financial coaching, health education, and conflict resolution training",
    categories: ["community", "families", "relief", "women"],
    link:"https://rebeccastent.org/",
  },
  {
    id: 13,
    name: "THE JOURNEY FUND",
     descrition:"Supports exceptional students of the martial arts in the development of mind, body and spirit.",
    categories: ["community", "families", "relief", "women","martial arts","sports", "youth"],
    link:"https://www.thejourneyfund.com/",
  },
  {
    id: 14,
    name: "THE SALVATION ARMY",
     descrition:"An international movement, is an evangelical part of the universal Christian Church. Its message is based on the Bible. Its ministry is motivated by the love of God. Its mission is to preach the gospel of Jesus Christ and to meet human needs in His name without discrimination.",
    categories: ["community", "families", "relief", "women","martial arts","sports", "youth"],
    link:"https://southernusa.salvationarmy.org/metro-atlanta/",
  },

  {
    id: 15,
    name: "MURPHEY CANDLER BASEBALL",
     descrition:"Provides a high-quality baseball program that emphasizes teamwork, fair play and skill developmen.",
    categories: ["community","basebal","sports", "youth"],
    link:"https://www.mcbsupporters.com/",
  },
   {
    id: 16,
    name: "THE DREAM US",
     descrition:"Helps Dreamer Students Fulfill Their College & Career Dreams",
    categories: ["children", "education", "scholarship", "students", "immigrants", "enteprenur"],
    link:"https://www.thedream.us/",
  },
  {
    id: 17,
    name: "RALLY FOUNDATION",
     descrition:"Raise awareness and funds for childhood cancer research to find better treatments with fewer long-term side effects and, ultimately, cures.",
    categories: ["children", "cancer"],
    link:"https://rallyfoundation.org/",
  },
   
  
];

export default programs;