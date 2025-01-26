const music = new Audio('27.mp3');



const songs = [
    {
        id:"1",
        songName:` Living For Love <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/1.jpg"
    },
    {
        id:"2",
        songName:` Girl Gone Wild <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/2.jpg"
    },
    {
        id:"3",
        songName:` Take A Bow <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/3.jpg"
    },
    {
        id:"4",
        songName:` Rain <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/4.jpg"
    },
    {
        id:"5",
        songName:` Give It 2 Me <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/5.jpg"
    },
    {
        id:"6",
        songName:` I Don't Search I Find <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/6.jpg"
    },
    {
        id:"7",
        songName:` Hung Up <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/7.jpg"
    },
    {
        id:"8",
        songName:` Like A Prayer <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/8.jpg"
    },
    {
        id:"9",
        songName:` Lucky Star <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/9.jpg"
    },
    {
        id:"10",
        songName:` Borderline <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/10.jpg"
    },
    {
        id:"11",
        songName:` Burning Up <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/11.jpg"
    },
    {
        id:"12",
        songName:` I Know It <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/12.jpg"
    },
    {
        id:"13",
        songName:` Holiday <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/13.jpg"
    },
    {
        id:"14",
        songName:` Think Of Me <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/14.jpg"
    },
    {
        id:"15",
        songName:` Physical Attraction <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/15.jpg"
    },
    {
        id:"16",
        songName:` Everybody <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/16.jpg"
    },
    {
        id:"17",
        songName:` Material Girl <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/17.jpg"
    },
    {
        id:"18",
        songName:` Angel <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/18.jpg"
    },
    {
        id:"19",
        songName:` Like A Virgin <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/19.jpg"
    },
    {
        id:"20",
        songName:` Over And Over <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/20.jpg"
    },
    {
        id:"21",
        songName:` Love Don't Live Here Anymore <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/21.jpg"
    },
    {
        id:"22",
        songName:` Into The Groove <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/22.jpg"
    },
    {
        id:"23",
        songName:` Dress You Up <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/23.jpg"
    },
    {
        id:"24",
        songName:` Shoo-Bee-Doo <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/24.jpg"
    },
    {
        id:"25",
        songName:` Pretender <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/25.jpg"
    },
    {
        id:"26",
        songName:` Stay <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/26.jpg"
    },
    {
        id:"27",
        songName:` Papa Don't Preach <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/27.jpg"
    },
    {
        id:"28",
        songName:` Open Your Heart <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/28.jpg"
    },
    {
        id:"29",
        songName:` White Heat <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/29.jpg"
    },
    {
        id:"30",
        songName:` Live To Tell <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/30.jpg"
    },
    {
        id:"31",
        songName:` Where's The Party <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/31.jpg"
    },
    {
        id:"32",
        songName:` True Blue <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/32.jpg"
    },
    {
        id:"33",
        songName:` La Isla Bonita <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/33.jpg"
    },
    {
        id:"34",
        songName:` Jimmy Jimmy <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/34.jpg"
    },
    {
        id:"35",
        songName:` Love Makes The World Go Round <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/35.jpg"
    },
    {
        id:"36",
        songName:` Like A Prayer <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/36.jpg"
    },
    {
        id:"37",
        songName:` Express Yourself <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/37.jpg"
    },
    {
        id:"38",
        songName:` Love Song <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/38.jpg"
    },
    {
        id:"39",
        songName:` Till Death Do Us Part <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/39.jpg"
    },
    {
        id:"40",
        songName:` Promise To Try <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/40.jpg"
    },
    {
        id:"41",
        songName:` Cherish <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/41.jpg"
    },
    {
        id:"42",
        songName:` Dear Jessie <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/42.jpg"
    },
    {
        id:"43",
        songName:` Oh Father <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/43.jpg"
    },
    {
        id:"44",
        songName:` Keep It Together <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/44.jpg"
    },
    {
        id:"45",
        songName:` Spanish Eyes <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/45.jpg"
    },
    {
        id:"46",
        songName:` Act Of Contrition <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/46.jpg"
    },
    {
        id:"47",
        songName:` Supernatural <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/47.jpg"
    },
    {
        id:"48",
        songName:` Erotica <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/48.jpg"
    },
    {
        id:"49",
        songName:` Fever <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/49.jpg"
    },
    {
        id:"50",
        songName:` Bye Bye Baby <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/50.jpg"
    },
    {
        id:"51",
        songName:` Deeper And Deeper <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/51.jpg"
    },
    {
        id:"52",
        songName:` Where Life Begins <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/52.jpg"
    },
    {
        id:"53",
        songName:` Bad Girl <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/53.jpg"
    },
    {
        id:"54",
        songName:` Waiting <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/54.jpg"
    },
    {
        id:"55",
        songName:` Thief Of Hearts <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/55.jpg"
    },
    {
        id:"56",
        songName:` Words <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/56.jpg"
    },
    {
        id:"57",
        songName:` Rain <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/57.jpg"
    },
    {
        id:"58",
        songName:` Why's It So Hard <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/58.jpg"
    },
    {
        id:"59",
        songName:` In This Life <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/59.jpg"
    },
    {
        id:"60",
        songName:` Did You Do It? <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/60.jpg"
    },
    {
        id:"61",
        songName:` Secret Garden <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/61.jpg"
    },
    {
        id:"62",
        songName:` Survival <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/62.jpg"
    },
    {
        id:"63",
        songName:` Secret <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/63.jpg"
    },
    {
        id:"64",
        songName:` I'd Rather Be Your Lover <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/64.jpg"
    },
    {
        id:"65",
        songName:` Don't Stop <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/65.jpg"
    }, 
    {
        id:"66",
        songName:` Inside Of Me <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/66.jpg"
    }, 
    {
        id:"67",
        songName:` Human Nature <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/67.jpg"
    }, 
    {
        id:"68",
        songName:` Forbidden Love <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/68.jpg"
    }, 
    {
        id:"69",
        songName:` Love Tried To Welcome Me <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/69.jpg"
    },
    {
        id:"70",
        songName:` Sanctuary <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/70.jpg"
    },
    {
        id:"71",
        songName:` Bedtime Story <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/71.jpg"
    },
    {
        id:"72",
        songName:` Take A Bow <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/72.jpg"
    },
    {
        id:"73",
        songName:` Drowned World / Substitute For Love <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/73.jpg"
    },
    {
        id:"74",
        songName:` Swim <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/74.jpg"
    },
    {
        id:"75",
        songName:` Ray Of Light <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/75.jpg"
    },
    {
        id:"76",
        songName:` Candy Perfume Girl <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/76.jpg"
    },
    {
        id:"77",
        songName:` Skin <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/77.jpg"
    },
    {
        id:"78",
        songName:` Nothing Really Matters <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/78.jpg"
    },
    {
        id:"79",
        songName:` Sky Fits Heaven <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/79.jpg"
    },
    {
        id:"80",
        songName:` Shanti / Ashtangi <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/80.jpg"
    },
    {
        id:"81",
        songName:` Frozen <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/81.jpg"
    },
    {
        id:"82",
        songName:` The Power Of Good-Bye <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/82.jpg"
    },
    {
        id:"83",
        songName:` To Have And Not To Hold <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/83.jpg"
    },
    {
        id:"84",
        songName:` Little Star <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/84.jpg"
    },
    {
        id:"85",
        songName:` Mer Girl <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/85.jpg"
    },
    {
        id:"86",
        songName:` Has To Be <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/86.jpg"
    },   
    {
        id:"87",
        songName:` Music <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/87.jpg"
    },  
    {
        id:"88",
        songName:` Impressive Instant <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/88.jpg"
    },    
    {
        id:"89",
        songName:` Runaway Lover <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/89.jpg"
    }, 
    {
        id:"90",
        songName:` I Deserve It <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/90.jpg"
    },   
    {
        id:"91",
        songName:` Amazing <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/91.jpg"
    }, 
    {
        id:"92",
        songName:` Nobody's Perfect <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/92.jpg"
    },   
    {
        id:"93",
        songName:` Don't Tell Me <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/93.jpg"
    },  
    {
        id:"94",
        songName:` What It Feels Like For A Girl <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/94.jpg"
    },   
    {
        id:"95",
        songName:` Paradise (Not For Me) <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/95.jpg"
    },    
    {
        id:"96",
        songName:` Gone <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/96.jpg"
    },   
    {
        id:"97",
        songName:` American Pie <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/97.jpg"
    },  
    {
        id:"98",
        songName:` Cyber-Raga <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/98.jpg"
    },
    {
        id:"99",
        songName:` American Life <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/99.jpg"
    },  
    {
        id:"100",
        songName:` Hollywood <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/100.jpg"
    },  
    {
        id:"101",
        songName:` I'm So Stupid <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/101.jpg"
    },  
    {
        id:"102",
        songName:` Love Profusion <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/102.jpg"
    },  
    {
        id:"103",
        songName:` Nobody Knows Me <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/103.jpg"
    }, 
    {
        id:"104",
        songName:` Nothing Fails <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/104.jpg"
    }, 
    {
        id:"105",
        songName:` Intervention <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/105.jpg"
    }, 
    {
        id:"106",
        songName:` X-Static Process <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/106.jpg"
    }, 
    {
        id:"107",
        songName:` Mother And Father <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/107.jpg"
    }, 
    {
        id:"108",
        songName:` Die Another Day <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/108.jpg"
    }, 
    {
        id:"109",
        songName:` Easy Ride <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/109.jpg"
    }, 
    {
        id:"110",
        songName:` Hung Up <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/110.jpg"
    }, 
    {
        id:"111",
        songName:` Get Together <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/111.jpg"
    }, 
    {
        id:"112",
        songName:` Sorry <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/112.jpg"
    }, 
    {
        id:"113",
        songName:` Future Lovers <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/113.jpg"
    }, 
    {
        id:"114",
        songName:` I Love New York <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/114.jpg"
    }, 
    {
        id:"115",
        songName:` Let It Will Be <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/115.jpg"
    }, 
    {
        id:"116",
        songName:` Forbidden Love <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/116.jpg"
    }, 
    {
        id:"117",
        songName:` Jump <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/117.jpg"
    }, 
    {
        id:"118",
        songName:` How High <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/118.jpg"
    }, 
    {
        id:"119",
        songName:` Isaac <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/119.jpg"
    }, 
    {
        id:"120",
        songName:` Push <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/120.jpg"
    }, 
    {
        id:"121",
        songName:` Like It Or Not <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/121.jpg"
    }, 
    {
        id:"122",
        songName:` Fighting Spirit <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/122.jpg"
    }, 
    {
        id:"123",
        songName:` Super Pop <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/123.jpg"
    }, 
    {
        id:"124",
        songName:` Candy Shop <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/124.jpg"
    }, 
    {
        id:"125",
        songName:` 4 Minutes <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/125.jpg"
    }, 
    {
        id:"126",
        songName:` Give It 2 Me <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/126.jpg"
    }, 
    {
        id:"127",
        songName:` Heartbeat <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/127.jpg"
    }, 
    {
        id:"128",
        songName:` Miles Away <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/128.jpg"
    }, 
    {
        id:"129",
        songName:` She's Not Me <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/129.jpg"
    }, 
    {
        id:"130",
        songName:` Incredible <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/130.jpg"
    }, 
    {
        id:"131",
        songName:` Beat Goes On <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/131.jpg"
    }, 
    {
        id:"132",
        songName:` Dance 2Night <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/132.jpg"
    }, 
    {
        id:"133",
        songName:` Spanish Lesson <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/133.jpg"
    }, 
    {
        id:"134",
        songName:` Devil Wouldn't Recognize You <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/134.jpg"
    }, 
    {
        id:"135",
        songName:` Voices <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/135.jpg"
    }, 
    {
        id:"136",
        songName:` Ring My Bell <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/136.jpg"
    }, 
    {
        id:"137",
        songName:` Girl Gone Wild <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/137.jpg"
    }, 
    {
        id:"138",
        songName:` Gang Bang <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/138.jpg"
    }, 
    {
        id:"139",
        songName:` I'm Addicted <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/139.jpg"
    }, 
    {
        id:"140",
        songName:` Turn Up The Radio <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/140.jpg"
    }, 
    {
        id:"141",
        songName:` Give Me All Your Luvin' <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/141.jpg"
    }, 
    {
        id:"141",
        songName:` Some Girls <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/141.jpg"
    }, 
    {
        id:"143",
        songName:` Superstar <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/143.jpg"
    }, 
    {
        id:"144",
        songName:` I Don't Give A <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/144.jpg"
    }, 
    {
        id:"145",
        songName:` I'm A Sinner <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/145.jpg"
    }, 
    {
        id:"146",
        songName:` Love Spent <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/146.jpg"
    }, 
    {
        id:"147",
        songName:` Masterpiece <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/147.jpg"
    }, 
    {
        id:"148",
        songName:` Falling Free <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/148.jpg"
    }, 
    {
        id:"149",
        songName:` Beautiful Killer <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/149.jpg"
    }, 
    {
        id:"150",
        songName:` I Fucked Up <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/150.jpg"
    }, 
    {
        id:"151",
        songName:` B-Day Song <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/151.jpg"
    }, 
    {
        id:"152",
        songName:` Best Friend <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/152.jpg"
    }, 
    {
        id:"153",
        songName:` Living For Love <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/153.jpg"
    }, 
    {
        id:"154",
        songName:` Devil Pray <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/154.jpg"
    }, 
    {
        id:"155",
        songName:` Ghosttown <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/155.jpg"
    }, 
    {
        id:"156",
        songName:` Unapologetic Bitch <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/156.jpg"
    }, 
    {
        id:"157",
        songName:` Illuminati <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/157.jpg"
    }, 
    {
        id:"158",
        songName:` Bitch I'm Madonna <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/158.jpg"
    }, 
    {
        id:"159",
        songName:` Hold Tight <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/159.jpg"
    }, 
    {
        id:"160",
        songName:` Joan Of Arc <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/160.jpg"
    }, 
    {
        id:"161",
        songName:` Iconic <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/161.jpg"
    }, 
    {
        id:"162",
        songName:` HeartBreakCity <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/162.jpg"
    }, 
    {
        id:"163",
        songName:` Body Shop <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/163.jpg"
    }, 
    {
        id:"164",
        songName:` Holy Water <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/164.jpg"
    }, 
    {
        id:"165",
        songName:` Inside Out <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/165.jpg"
    }, 
    {
        id:"166",
        songName:` Wash All Over Me <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/166.jpg"
    }, 
    {
        id:"167",
        songName:` Best Night <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/167.jpg"
    }, 
    {
        id:"168",
        songName:` Veni Vidi Vici <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/168.jpg"
    }, 
    {
        id:"169",
        songName:` S.E.X. <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/169.jpg"
    }, 
    {
        id:"170",
        songName:` Messiah <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/170.jpg"
    }, 
    {
        id:"171",
        songName:` Rebel Heart <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/171.jpg"
    }, 
    {
        id:"172",
        songName:` Auto-Tune Baby <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/172.jpg"
    }, 
    {
        id:"173",
        songName:` Beautiful Scars <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/173.jpg"
    }, 
    {
        id:"174",
        songName:` Borrowed Time <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/174.jpg"
    }, 
    {
        id:"175",
        songName:` Addicted <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/175.jpg"
    }, 
    {
        id:"176",
        songName:` Graffiti Heart <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/176.jpg"
    }, 
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
} )


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${index}.mp3`;
        poster_master_play.src =`img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})
next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
        }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    index++;
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)"; 
    makeAllPlays();
    document.getElementsByClassName('playListPlay')[index-1].classList.remove('bi-play-circle-fill');
    document.getElementsByClassName('playListPlay')[index-1].classList.add('bi-pause-circle-fill');
})