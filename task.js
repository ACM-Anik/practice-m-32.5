// 1) How will you access Sophia’s secondary school location ?
let dataSophia = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        { school_name: "ABC secondary school" },
                        { location: "St Lorence" }
                    ]
            },
        ]
    }
}

const secondaryLocation = dataSophia.Sophia.study[1].secondary[1];
console.log(secondaryLocation);



// 2) How will you get the output[Advanced - uses 2D matrix
// concept]
// a) level - 2
// b) 72.8621

// [
//     Note: resources for 2D array:
// ====================
// 1) anisul islam 2D array
// 2) https://www.freecodecamp.org/news/javascript-2d-arrays/
// checkpoints:
// ===========
// 1) Just know what is 2D array
// 2) how to access an element in 2D array
// Then you will be able to do this task.
// ]

let data = [
    {
        "pHeroCourses": {
            "course-x": "web development"
        }
    },
    {
        "pHeroCourses": {
            "course-y": "phitron"
        }
    },
    {
        "pHeroCourses": {
            "course-z": "acc"
        }
    },
    {
        "pHeroCourses": {
            "course-xyz": "level-2"
        },
        "locationField": {
            "en-US": {
                "lat": 19.28563,
                "lon": 72.8691
            }
        }
    }
];



// 3) How will you get the output?
// a) abc
// b) xyz
let activities = {
    activity1: [
        {
            name: "listen on spotify",
            song_list: {

                song_1: "abc",
                song_2: "bcd"

            },
            id: 1
        },
        {
            name: "listen music through bot",

            song_list: {
                song_1: "wxy",
                song_2: "xyz"

            },
            id: 2
        }
    ]
}

const abc = activities.activity1[0].song_list.song_1;
console.log(abc);
const xyz = activities.activity1[1].song_list.song_2;
console.log(xyz);



// 4) How will you display?
// a) Petersburg
// b) Harry
let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },
    3333: {
        name: "Harry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }
    }
};

const Petersburg = students[2222].address['city'];
console.log(Petersburg);
const harry = students[3333].name;
console.log(harry);




// 5) How will you display?
// a. programming er coddogusti
// b. VW
// c. Bangladesh
let instructor = {
    name: "Jhankar Mahbub",
    entrepreneur: true,
    additionalData: {
        writer: true,
        favoriteHobbies: ["travelling", "Coding"],
        books: ["programming er bolod to bos", "programming er coddogusti"],
        moreDetails: {
            favoriteBasketballTeam: "XYZ",
            isYoungest: true,
            hometown: {
                city: "ABC",
                state: "VW",
            },
            countriesLivedIn: ["Bangladesh", "New York"]
        }
    }
}

const pCoddogusti = instructor.additionalData.books[1];
console.log(pCoddogusti);
const vW = instructor.additionalData.moreDetails.hometown.state;
console.log(vW);
const bangladesh = instructor.additionalData.moreDetails.countriesLivedIn[0];
console.log(bangladesh);



// 6) How will you display?
// a. B
// b. D
const studentData = [
    {
        class: 10,
        details: [
            {
                studentId: '1',
                gradingDetails: [{ grade: 'A' }]
            },
            {
                studentId: '2',
                gradingDetails: [{ grade: 'B' }]
            }
        ]
    },
    {
        class: 11,
        details: [
            {
                studentId: 3,
                gradingDetails: [{ grade: 'B' }]
            },
            {
                studentId: 4,
                gradingDetails: [{ grade: 'D' }]
            }
        ]
    },
];

const b = studentData[0].details[1].gradingDetails[0].grade;
console.log(b);
const d = studentData[1].details[1].gradingDetails[0].grade;
console.log(d);




// 7) How will you display
// a. Habluder adda
// b. Beginner
let dataBooks = {
    data:
        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
};

const habluderAdda = dataBooks.data[0].bookDetails.name;
console.log(habluderAdda);
const beginner = dataBooks.data[1].bookCategory;
console.log(beginner);