// Get the modal
// var b_modal = document.getElementById("b_Modal");

// Get the button that opens the modal
// var b_btn = document.getElementById("b_Btn");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
// b_btn.onclick = function() {
//   b_modal.style.display = "block";
// }
// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   b_modal.style.display = "none";
// }

// var Officer = document.getElementById("showOfficer");
// var Member = document.getElementById("showMember");
function showMember(index) {
  document.getElementById("ShowMember_Name").textContent = names[index]["name"];
  document.getElementById("ShowMember_Text").textContent = names[index]["Introduction"];
  document.getElementById("ShowMember").style.display="block";  
}


document.getElementById("CloseMember").onclick = function() {
  document.getElementById("ShowMember").style.display="none";
}

function showOfficer(index) {
  document.getElementById("ShowOfficer_Name").textContent = officer[index]["name"];
  document.getElementById("ShowOfficer_Text").textContent = officer[index]["introduction"];
  document.getElementById("ShowOfficer_ID").src = officer[index]["image"];
  document.getElementById("ShowOfficer").style.display="block";  
}

document.getElementById("CloseOfficer").onclick = function() {
  document.getElementById("ShowOfficer").style.display="none";
}

//OFFicer INFO

var officer = [
  {"name": "Betina Kreiman",
    "image": "headshots/betski.jpg",
    "introduction": "Hi! I’m Betina Kreiman, and I’m the president of the Newton North Programming Club! I’m a sophomore at Newton North High School, but I’ve been coding for a couple of years now. My favorite languages are Python and Swift (because I know them the best), but I love trying new things and experimenting with other languages. Currently, I’m in the process of posting my first app on the App Store… but we’ll see how that goes! Other than coding, I love soccer, tennis, and hanging out with my friends! Hope to see you at a club meeting!"},
    
  {"name": "Jennifer Li", 
    "image": "headshots/jennifer.jpg",
    "introduction": "Hello! I’m Jennifer, a sophomore at Newton North High School. My favorite subject is math, but I also enjoy coding and learning various languages. In particular, I like working in front end development, learning about JavaScript animations, and also coding basic games in python. In my free time, I like running, playing tennis, and playing the piano."},
    
  { "name": "Angela Bai",
    "image": "headshots/angelaTwo.jpeg",
    "introduction": "Hello! I'm Angela and I'm a junior. I'm one of the advisors of programming club, and I'm so excited to work with everyone on all the upcoming projects this year! Feel free to reach out to me or any of the other advisors with any questions, ideas, or suggestions–we'd love to hear from you :)"},
    
  { "name": "Mr. Peloquin",
    "image": "headshots/adam.jpg",
    "introduction": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, delectus quod. Quae, placeat nostrum officiis quaerat molestias quidem asperiores nihil! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla cumque eligendi veritatis, placeat autem, accusantium in molestiae assumenda, nemo ab qui nesciunt. Ipsum, libero aspernatur. Lffffaborum nam odio fuga suscipit quia ab velit, corrupti quaerat architecto dolore obcaecati doloremque eaque?"}
]
    

//MEMBER INFO!!!
// it just doesn't work 

var names = [
  { "name":"Ria Chadusama", 
    "Introduction": "I’m Ria, a junior. I joined this club because I like programming & I started last year. My favourite language is Python."},

  { "name":"Linda Xue", 
    "Introduction": "Hi, I'm Linda Xue and I'm a sophomore at Newton North. I've been coding for around 5 years now and my favorite language is Java. I'm currently studying to take USACO. I joined programming club because I feel like it would be a great place to meet new people and learn new languages. I enjoy playing musical instruments, reading, and hanging out with friends. I also love baking and skateboarding. I have 2 rats named Remy and Beano and an older sister named Amy."},

  { "name":"Ewan McPhail", 
    "Introduction": "Hi, I'm Ewan, and I'm a freshman. I like coding because it's fun to see your projects be created. I program in Python, C++, Java, HTML, and CSS. The projects I'm currently working on is my own website and a RDR2 mod."},

  { "name":"Maxim Malkevich", 
    "Introduction": "Hello! My name is Maxim Malkevich, and I am a freshman at Newton North. I am new to Programming Club, but I have been taking classes on Python over the summer, so I do have a considerable level of experience with it. I joined the club because it seemed like it would be fun to work on some programming projects with a group, and perhaps to get some practice/learn new techniques. So far, this club seems really enjoyable, and I hope to see what we will be doing as the club continues meeting!"},

  { "name":"Lily Tjia", 
    "Introduction": "Hello! I'm Lily Tjia, a freshman here at North. Out of the few programming languages I know my favorite is probably Python. I don't code very much, but recently I have worked on some programs which complement various math questions. I enjoy listening to music, playing the cello, and doing math problems/brain teasers."},

  { "name":"Dan Wong", 
    "image": "memberPic/dan.jpg",
    "Introduction": "I’m a rather quiet person at first but that changes real fast if I talk to someone :) I like to make food and go to Boston "},

  { "name":"Jess Rigoli", 
    "Introduction": "I like to play video games mostly."},

  { "name":"Adam Kleber", 
    "Introduction": "I like learning about new ideas in programming and improving the efficiency of my algorithms. I am working through Project Euler!"},

  { "name":"Nicole Temkin", 
    "Introduction":" Decided to try coding because  I know people in the club and it sounds interesting. "},

  { "name":"Albert Le", 
    "Introduction": "Hi! I'm Albert. I'm a part of the club this year because I want to work on fun projects and improve my programming skills. I have one brother who's a freshman here at North. My favorite shows are One Piece, Squid Game, and Naruto. My favorite movie is Crazy Rich Asians."},

  { "name":"Franklin Ji", 
    "Introduction": "I came in with basically no idea how to code, but I want to learn how to so I could learn a new skill. I’m a big gamer I like gaming, and I would love to apply the skills of programming toward hobby."},

  { "name":"Jonathan Rideout", 
    "Introduction": "Hi I’m Jonathan and i joined the programming club to improve my understanding and skills in programming. I like to game a lot, and I’m looking forward to learning a lot more about programming."},
  
  { "name":"Sami Brodsky", 
    "Introduction": "I am a junior at nnhs and I play soccer. I am a good student who gets reasonable grades, and I really enjoy reading books over and over again."},

    {"name":"Luis Carvalho",
    "Introduction": "Hello, I'm Luis and I, while being less active in the core part of the club, run the Discord Server so if you could stop by that would very greatly appreciated. I do all sorts of sorts (pun very intended) in Python and have done AI and Machine learning projects, so if you stop by feel free to ask me when I'm online. (Note: Please add this link discord.gg/dZ4RVNRQEm under Discord Server, and if I find that you copy pasted this into the server I *will* not hesitate to spam your inbox, namely Betina, and I will make sure she directs me to whoever did my part of the site)"},

    {"name":"Ben Kharfen",
    "Introduction": "The reason I joined is because I like coding and I’ve taken the two classes on computer programming"},

    {"name":"Matthew Chung",
    "Introduction": "Hey I’m Matt I’m a sophomore I like soccer and programming. "},

    {"name":"Jacob Chen",
    "Introduction": "Hello, World! I am super excited to be apart of programming club. I joined to help other students out with their projects. Also, I have been competing in hackathons, and I want to get into CP. One fun fact about me: my favorite color is orange!"},

    {"name":"Alex Elvin",
    "Introduction": "Hi, my name is Alex. I am a Sophomore and I like running. I can’t code, but I like learning. I also like hiking and snowboarding."},

    {"name":"Theo Karon",
    "Introduction": "Hi. I'm Theo. I'm in the club because while I've wanted to learn to code for forever, I'm awful at getting myself to do things; so I decided that this was probably the best way. I do a lot of music stuff. For example, I've been playing violin for 10 years and have composed some decently long songs. Also I play a lot of Geometry Dash. So yeah."},
]



// Change all button names to names
for(let i = 0; i < names.length; i++) {
  document.getElementById("btn" + i).textContent = names[i]["name"];
}

// window.onclick = function(event) {
//   if (event.target == Member ) {
//     Member.style.display = "none";
//   }
// }
