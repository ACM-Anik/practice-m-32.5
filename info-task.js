// আজকে ES6 প্রাকটিস করে ফাটিয়ে দেয়ার দিন। (মডিউল 32-5)

// #module_release #intermediate_js_milestone #module_32_5

// গত দুই দিনের মডিউল এর জিনিসগুলা ভালো ভাবে প্রাকটিস করবে। বুঝে নিবে। কোথাও সমস্যা হলে গরূপে প্রশ্ন করবে। সাপোর্ট সেশনে এ আসবে। গত দুই দিনে যে যে জিনিসগুলো দেখেছো। সেগুলা একটু ভালো করে রিভিশন দিবে। কনসেপ্টগুলা ধরে ধরে রিভিশন দিবে। দরকার হলে ইউটিউবে সার্চ দিয়ে কোন একটা টপিক সম্পর্কে জানবে। কোন কারণে আমাদের কন্সেপচুয়াল মিস করে ফেললে নেক্সট টাইম চেষ্টা করবে কন্সেপচুয়াল সেশনে লাইভ জয়েন হতে। একান্তই না পারলে অবশ্যই পরে ভিডিও দেখে নিবে। আর কোন কিছু বুঝতে না পারলে বসে না থেকে আমাদের গরূপে পোস্ট দাও। আমাদের সাপোর্ট সেশনে জয়েন করো। তারপর দুই-তিন ঘন্টা সময় নিয়ে নিচের চেক লিস্ট করে ফেলো। 



// মাষ্ট শিখবে ES৬, একটা জাভাস্ক্রিপ্ট এর ফাইল খুলে নিচের জিনিসগুলা প্রাকটিস করে ফেলো।  

// ১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।

let num1 = 100;
num1 = 150;
let num2 = 100;
const sum = num1 + num2;
console.log(sum);



// ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 

const object = {
    name: 'Anik Mojumder',
    age: 21,
    profession: 'Student'
}
const tamplateString = `The sum of the mah above is ${sum}.
And my name is ${object.name}. I'm a ${object.profession}.
`;
console.log(tamplateString);




// ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 
const division = num => num / 5;
console.log("3.1 answer:", division(10));


// ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 
const multiply = (num1, num2) => (num1 + 2) * (num2 + 2);
console.log("3.2 answer:", multiply(3, 3));


// ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। 
const multiplyThree = (num1, num2, num3) => num1 * num2 * num3;
console.log("3.3 answer:", multiplyThree(10, 10, 10));


// ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 
const multiRowArrow = (num1, num2) => {
    const sum1 = num1 + 2;
    const sum2 = num2 + 2;
    const multiply = sum1 * sum2;
    return multiply;
}
console.log("3.4 answer:", multiRowArrow(10, 10));


// .



// ৪. [হোম ওয়ার্ক] একটু গুগলে সার্চ দাও: javascript function declaration vs arrow function তারপর কয়েকটা আর্টিকেল পড়ে বুঝার চেষ্টা করো। 

// ৪.৫. জাভাস্ক্রিপ্ট এর var, let, const এর মধ্যে প্রার্থক্য কি? 

//  .

// ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 
const multiplyOfArray = [10, 20, 30, 40, 50].map(numbers => numbers * 5);
console.log("5 answer:", multiplyOfArray);


// ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 
const filterOdds = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].filter(arr => arr % 2 !== 0);
console.log("6 answer:", filterOdds);


// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫0০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 
const anArray = [
    {name: "Iphone", color: "Silver", price: 100000},
    {name: "Samsumng", color: "Blue", price: 80000},
    {name: "Nokia", color: "Black", price: 60000},
    {name: "RealMe", color: "Gray", price: 40000},
    {name: "Walton", color: "Red", price: 30000},
];
const lowerPrice = anArray.find(anArray => anArray.price < 50000);
console.log("7 answer:", lowerPrice);


// ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো।
// Answer:
// 1. Map =
// 2. forEach =
// 3.filter =
// 4.find =


// .


// ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।
const {a, b, ...s} = {a:5, b:7, c:4, d:9, e:10};
console.log("8.1 answer:", s);

const useDestructuring = {
    name: "ACM",
    section: "Accounting",
    class: "xiv",
    address: {
        "city": "Noakhali",
        "country": "BD"
    },
    university: "ABC College & university"
}
// const declareVar = useDestructuring.address;
// console.log("8.2 answer:", declareVar);

// * Destructuring:
const {address} = useDestructuring;
console.log("8.3 answer:", address);


// ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে।
const [x, y, ...z] = [10, 20, 30, 40, 50];
console.log("9.2 answer:", z);

const destructuringArray = [10, 20, 30, 40, 50];
// const three = destructuringArray[2];
// console.log("9.1 answer:", three);

const [three] = [70, 55, 90, 80, 60];
console.log("9.3 answer:", three);



// ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭।
function threeParam(x, y, z = 7){
    const sum = x + y + z;
    return sum;
}
console.log("10 answer:", threeParam(10, 20));


// .

// [অপশনাল]

// ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )

const studentData = {
    class1:
        [
            {
                studentId: 1,
                studentDetails: {name: "Ayon", category: "CC Camera Technology", course: "4 years"},
                studentCategory: "Basic",
            },
            {
                studentId: 2,
                studentDetails: {name: "Simanto", category: "Marketing Strategy", course: "4 years"},
                studentCategory: "Beginner",
            }
        ],
    class2:
        [
            {
                studentId: 3,
                studentDetails: {name: "Shubho", category: "CC Camera Technology", course: "4 years"},
                studentCategory: "Basic",
            },
            {
                studentId: 4,
                studentDetails: {name: "Lima", category: "Marketing Strategy", course: "4 years"},
                studentCategory: "Beginner",
            }
        ]
};
console.log("11 answer:", studentData);


// ১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো।
const name1First = studentData.class1[0]?.studentDetails?.name;
console.log("12 answer:", name1First);



// দেখো এই ১২ টা কাজের মধ্যে কয়টা করতে পারো। প্রথমে নিজে নিজে চেষ্টা করো। দরকার হলে গুগলে সার্চ দাও। আমাদের ভিডিও না দেখেই করতে পারো কিনা দেখো। এরপরেও না পারলে বা সমস্যা হলে বসে থেকো না। গরূপে পোষ্ট দাও। সাপোর্ট সেশনে আসো। ES৬ এ সমস্যা থাকলে আজকের মধ্যে সমাধান করে নাও। আগামীকাল আমরা খুবই মজার চমৎকার একটা জিনিস নিয়ে কাজ করবো।



// .

// অন্য সব কিছুকে checkmate দিয়ে আজকের চেকলিস্ট ফিনিশ করে ফেলো। 

