
const MONTHS=["January","February","March","April","May","June","July","August","September","October","November","December"];
const M=[
[1,1,2024,"Donye Taylor launches Nuclei, a home goods brand that sells philosophies as products."],
[1,2,2018,"Coachella announces Beyoncé as the first Black woman to headline the festival."],
[1,3,1987,"Aretha Franklin becomes the first woman inducted into the Rock & Roll Hall of Fame."],
[1,3,2024,"Katt Williams sits down on Club Shay Shay and delivers a viral hour of comedic candor."],
[1,4,2023,"Nicki Minaj sets the record for most years charting on the Billboard Hot 100 by a female rapper."],
[1,9,1866,"Fisk University is founded in Nashville."],
[1,10,2023,"Quinta Brunson wins a Golden Globe for a comedy she created, wrote and stars in."],
[1,15,1929,"Dr. Martin Luther King Jr. is born."],
[1,17,1997,"Love Jones premieres at Sundance."],
[1,18,1975,"The Jeffersons premieres, the first sitcom built around Black upward mobility."],
[1,20,2009,"Barack Obama is inaugurated as the 44th President of the United States."],
[1,25,2003,"Serena Williams completes the Serena Slam, holding all four Grand Slam titles at once."],
[1,26,2020,"Nipsey Hussle wins two Grammys, for “Racks in the Middle” and “Higher.”"],
[1,27,1991,"Whitney Houston sings the National Anthem at Super Bowl XXV."],
[1,29,1996,"Tyra Banks becomes the first Black woman on the cover of GQ."],
[2,1,2025,"UCLA gymnast Jordan Chiles scores a perfect 10 on floor."],
[2,4,2007,"Prince plays his Super Bowl halftime show in the rain."],
[2,5,2023,"Tems becomes the first Nigerian woman to win a Grammy."],
[2,5,2023,"Viola Davis becomes an EGOT winner."],
[2,8,2004,"OutKast becomes the first rap group to win Album of the Year."],
[2,9,1907,"Alfred “Chief” Anderson, the father of Black aviation and trainer of the Tuskegee Airmen, is born."],
[2,10,2004,"Kanye West releases The College Dropout."],
[2,11,2016,"Yeezy Season 3 turns Madison Square Garden into a fashion show, album release and live event at once."],
[2,11,1990,"Nelson Mandela walks free."],
[2,12,1909,"The NAACP is founded."],
[2,12,2018,"Kehinde Wiley and Amy Sherald unveil the official portraits of Barack and Michelle Obama."],
[2,13,1996,"Tupac releases All Eyez on Me."],
[2,14,2023,"Pharrell Williams is named creative director of Louis Vuitton Men's."],
[2,15,1974,"Good Times airs “The Black Jesus,” a landmark episode on Black spirituality."],
[2,16,2018,"Black Panther opens in the U.S. and becomes a global phenomenon."],
[2,22,1989,"DJ Jazzy Jeff & The Fresh Prince win the first rap Grammy."],
[2,24,1999,"Lauryn Hill wins five Grammys for The Miseducation of Lauryn Hill."],
[2,24,2019,"Spike Lee wins his first Oscar."],
[2,26,1983,"Michael Jackson's “Beat It” tops the charts."],
[2,26,2017,"Moonlight wins Best Picture."],
[2,27,1998,"Erykah Badu wins Best New Artist at the Soul Train Awards."],
[2,29,1940,"Hattie McDaniel becomes the first Black Oscar winner."],
[3,1,1864,"Rebecca Lee Crumpler becomes the first Black woman in the U.S. to earn a medical degree."],
[3,6,2012,"Chief Keef records “I Don't Like” at 16 and launches Chicago drill."],
[3,14,2022,"The all-Black, all-women 6888th Battalion receives the Congressional Gold Medal."],
[3,16,1827,"Freedom's Journal, the first Black-owned newspaper in the U.S., is published in New York."],
[3,18,1970,"Queen Latifah is born."],
[3,21,1986,"Debi Thomas becomes the first Black figure skater to win a world title."],
[3,25,1983,"Michael Jackson moonwalks for the first time on Motown 25."],
[3,25,1985,"Prince wins the Oscar for Purple Rain."],
[3,26,2018,"Virgil Abloh is named artistic director of Louis Vuitton menswear."],
[3,28,2001,"Alicia Keys releases “Fallin'.”"],
[3,31,1988,"Toni Morrison wins the Pulitzer Prize for Beloved."],
[4,5,2012,"Kerry Washington leads Scandal, the first network drama with a Black woman lead in decades."],
[4,6,1909,"Matthew Henson becomes one of the first people to reach the North Pole."],
[4,7,1940,"Booker T. Washington becomes the first Black American on a U.S. postage stamp."],
[4,14,2018,"Beyoncé headlines Coachella. The internet calls it Beychella."],
[4,16,2018,"Kendrick Lamar wins the Pulitzer Prize for Music for DAMN."],
[4,21,2000,"Love & Basketball opens in theaters."],
[4,23,1872,"Charlotte E. Ray becomes the first Black woman lawyer in the U.S."],
[4,23,2016,"Beyoncé releases Lemonade."],
[4,25,2001,"Destiny's Child releases “Survivor.”"],
[5,4,2022,"Tems becomes the first African woman to debut at No. 1 on a Billboard chart."],
[5,10,1994,"Nelson Mandela is inaugurated as South Africa's first Black president."],
[5,10,2019,"Rihanna launches Fenty with LVMH, the first woman of color to head an LVMH house."],
[5,13,1991,"John Singleton premieres Boyz n the Hood at Cannes. He is 23, and the room gives him a 20-minute standing ovation."],
[5,16,2018,"Kerry James Marshall's Past Times sells for $21.1 million."],
[5,17,1954,"Brown v. Board of Education rules school segregation unconstitutional."],
[5,19,1925,"Malcolm X is born."],
[5,19,1989,"Do the Right Thing premieres at Cannes."],
[5,19,2019,"Robert F. Smith pledges to pay off the student debt of Morehouse's class of 2019."],
[5,19,2023,"Kaytranada and Aminé release Kaytraminé."],
[5,24,2005,"Rihanna releases “Pon de Replay.”"],
[5,25,2004,"Kanye West releases “Jesus Walks.”"],
[5,29,1992,"Sister Act hits theaters."],
[5,29,2025,"Melissa Koby becomes the first Black artist commissioned for U.S. Open theme art."],
[6,2,2014,"Rihanna wears the Swarovski crystal gown to the CFDA Fashion Awards."],
[6,2,2020,"Blackout Tuesday spreads across social media."],
[6,5,1987,"Mae C. Jemison is admitted to NASA's astronaut training program."],
[6,7,1958,"Prince is born in Minneapolis."],
[6,8,2002,"Serena beats Venus in the French Open final."],
[6,10,1972,"Soul Train airs its first national episode."],
[6,10,2008,"Lil Wayne releases Tha Carter III."],
[6,11,2002,"Lauryn Hill's MTV Unplugged goes platinum."],
[6,12,1967,"Loving v. Virginia makes interracial marriage legal nationwide."],
[6,13,1967,"Thurgood Marshall is nominated to the Supreme Court."],
[6,13,2019,"Missy Elliott is inducted into the Songwriters Hall of Fame."],
[6, 14, 2022, "Rihanna becomes the youngest self-made billionaire in America, per Forbes."],
[6, 16, 1976, "The Jacksons premieres on CBS, the first primetime variety show fully headlined by a Black family."],
[6, 16, 1979, "Donna Summer holds the No. 1 single and No. 1 album at the same time with “Hot Stuff” and Bad Girls."],
[6, 17, 2021, "Juneteenth becomes a U.S. federal holiday."],
[6, 19, 2016, "LeBron James leads the Cavaliers to Cleveland's first NBA championship."],
[6, 25, 1984, "Prince releases Purple Rain and goes on to top the album, single and box office charts at once."],
[6, 27, 2000, "Nelly releases Country Grammar."],
[7, 1, 1936, "Langston Hughes publishes “Let America Be America Again.”"],
[7, 3, 1995, "D'Angelo releases Brown Sugar and launches the neo-soul movement."],
[7, 3, 2012, "Frank Ocean opens up about love on Tumblr, one of the first mainstream R&B stars to do so."],
[7, 3, 2019, "California signs the CROWN Act, the first law protecting Black hair as an expression of race."],
[7, 5, 1975, "Arthur Ashe becomes the first Black man to win the Wimbledon men's singles title."],
[7, 10, 2012, "Frank Ocean releases Channel Orange and redefines R&B."],
[7, 11, 1972, "Curtis Mayfield releases the Super Fly soundtrack."],
[7, 14, 1885, "Sarah E. Goode becomes one of the first Black women to receive a U.S. patent, for her cabinet bed."],
[7, 21, 1864, "The New Orleans Tribune, the first Black daily newspaper in the U.S., publishes its first issue."],
[7, 21, 2024, "Serena Page and Kordell Beckham become the first Black couple to win Love Island USA."],
[7, 29, 2022, "Beyoncé releases Renaissance and brings house and disco to a new generation."],
[8, 1, 1974, "Beverly Johnson becomes the first Black woman on the cover of American Vogue."],
[8, 3, 1995, "OutKast wins Best New Rap Group at The Source Awards. André 3000: “The South got somethin' to say.”"],
[8, 3, 2004, "Crime Mob releases “Stilettos (Pumps).”"],
[8, 6, 1962, "Jamaica gains independence."],
[8, 10, 1998, "Lauryn Hill releases “Doo Wop (That Thing).”"],
[8, 11, 1973, "DJ Kool Herc throws a back-to-school party in the Bronx. Hip-hop is born."],
[8, 12, 1981, "IBM releases its first personal computer, co-designed by engineer Mark Dean."],
[8, 13, 1993, "AND1 is founded in Philadelphia and takes streetball to the world."],
[8, 15, 1985, "Nipsey Hussle is born."],
[8, 24, 2016, "Los Angeles celebrates its first Kobe Bryant Day, 8/24."],
[8, 25, 2006, "OutKast's Idlewild opens in theaters."],
[8, 27, 2021, "Nia DaCosta's Candyman opens at No. 1, making her the first Black woman director with a No. 1 box office debut."],
[8, 28, 1963, "Dr. King delivers “I Have a Dream” at the March on Washington."],
[8, 29, 2021, "Myles Rowe becomes the first Black driver to win an INDYCAR-sanctioned race."],
[9, 2, 2022, "Serena Williams plays her final U.S. Open match."],
[9, 8, 1986, "Oprah Winfrey becomes the first Black woman to host a nationally syndicated talk show."],
[9, 8, 2017, "Rihanna launches Fenty Beauty."],
[9, 9, 1999, "Lauryn Hill wins four MTV VMAs."],
[9, 9, 2023, "Coco Gauff wins her first Grand Slam at the U.S. Open."],
[9, 11, 2001, "Jay-Z releases The Blueprint."],
[9, 12, 1992, "Mae Jemison becomes the first Black woman in space."],
[9, 12, 2020, "Naomi Osaka wins the U.S. Open, using her platform to speak out for justice."],
[9, 16, 2002, "Missy Elliott releases “Work It.”"],
[9, 17, 1983, "Vanessa Williams becomes the first Black Miss America."],
[9, 20, 1984, "The Cosby Show premieres."],
[9, 24, 1991, "A Tribe Called Quest releases The Low End Theory."],
[9, 24, 2016, "The National Museum of African American History and Culture opens in Washington."],
[9, 28, 2025, "Kai Cenat becomes the first streamer to reach one million active subscribers on Twitch."],
[9, 29, 1998, "OutKast releases Aquemini."],
[9, 29, 2000, "Remember the Titans opens in theaters."],
[10, 2, 1967, "Thurgood Marshall is sworn in as the first Black Supreme Court justice."],
[10, 7, 1972, "The Jackson 5 perform on Soul Train."],
[10, 8, 2025, "Rolling Stone names Missy Elliott's “Get Ur Freak On” the greatest song of the 21st century."],
[10, 9, 2016, "Issa Rae's Insecure premieres on HBO."],
[10, 14, 1964, "Dr. King wins the Nobel Peace Prize at 35, then the youngest recipient ever."],
[10, 15, 1994, "Brandy's debut album climbs the R&B charts."],
[10, 15, 2010, "A Jean-Michel Basquiat retrospective opens at the Musée d'Art Moderne in Paris."],
[10, 24, 2024, "Renell Medrano launches the first issue of ICE Magazine."],
[10, 26, 2010, "Willow Smith releases “Whip My Hair.”"],
[10, 30, 1974, "Muhammad Ali wins back the heavyweight title in the Rumble in the Jungle."],
[11, 2, 2016, "Beyoncé performs at the CMA Awards with The Chicks."],
[11, 4, 1989, "Janet Jackson's Rhythm Nation 1814 tops the charts."],
[11, 4, 2008, "Barack Obama is elected the first Black President of the United States."],
[11, 5, 1968, "Shirley Chisholm is elected to Congress, the first Black woman to serve there."],
[11, 7, 2008, "Usher's Confessions is certified Diamond."],
[11, 9, 1993, "Wu-Tang Clan releases Enter the Wu-Tang (36 Chambers)."],
[11, 13, 1951, "Janet Collins debuts at the Metropolitan Opera, its first Black prima ballerina."],
[11, 13, 2020, "Future and Lil Uzi Vert release Pluto x Baby Pluto."],
[11, 14, 1960, "Ruby Bridges walks into William Frantz Elementary in New Orleans."],
[11, 15, 1994, "TLC releases CrazySexyCool."],
[11, 18, 1992, "Spike Lee's Malcolm X opens, starring Denzel Washington."],
[11, 29, 1982, "Michael Jackson releases Thriller, on its way to becoming the best-selling album of all time."],
[12, 1, 1955, "Rosa Parks keeps her seat in Montgomery."],
[12, 5, 1955, "The Montgomery Bus Boycott begins."],
[12, 5, 1986, "Wesley Snipes makes his first TV appearance, on Miami Vice."],
[12, 6, 1865, "The 13th Amendment is ratified."],
[12, 10, 1964, "Dr. King accepts the Nobel Peace Prize in Oslo."],
[12, 11, 2019, "Lizzo is named TIME's Entertainer of the Year."],
[12, 18, 1970, "DMX is born."],
[12, 18, 2001, "Jay-Z releases MTV Unplugged with The Roots."],
[12, 31, 1862, "Watch Night: Black communities gather in churches to welcome the Emancipation Proclamation at midnight."]
];

/* Paste your Formspree endpoint here, e.g. "https://formspree.io/f/abcdwxyz" */
const FORM_ENDPOINT="https://formspree.io/f/mrppaaba";
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
/* ---- hero tile ---- */
const heroPicks=[[5,13],[1,20],[3,25],[7,5],[8,11],[9,12],[11,4],[2,16],[10,9],[12,11]].map(([m,d])=>M.find(e=>e[0]===m&&e[1]===d)).filter(Boolean);
let hi=0;
function showTile(e){
  document.getElementById("tileMonth").textContent=MONTHS[e[0]-1].toUpperCase();
  document.getElementById("tileDay").textContent=e[1];
  document.getElementById("tileText").textContent=e[3];
  document.getElementById("tileYear").textContent=e[2];
}
if(!reduce&&document.getElementById("tileBody")){
  const body=document.getElementById("tileBody");
  setInterval(()=>{
    if(document.hidden)return;
    body.classList.add("out");
    setTimeout(()=>{hi=(hi+1)%heroPicks.length;showTile(heroPicks[hi]);body.classList.remove("out")},350);
  },5000);
}

if(document.getElementById("days")){
/* ---- calendar preview ---- */
const tabs=document.getElementById("tabs"),days=document.getElementById("days");
const have=[...new Set(M.map(e=>e[0]))];
function renderMonth(m){
  [...tabs.children].forEach(b=>b.setAttribute("aria-selected",String(+b.dataset.m===m)));
  days.innerHTML="";
  M.filter(e=>e[0]===m).forEach(e=>{
    const li=document.createElement("li");
    li.innerHTML='<span class="n"></span><div><span class="y"></span><p></p></div>';
    li.querySelector(".n").textContent=String(e[1]).padStart(2,"0");
    li.querySelector(".y").textContent=e[2];
    li.querySelector("p").textContent=e[3];
    days.appendChild(li);
  });
}
have.forEach(m=>{
  const b=document.createElement("button");
  b.className="tab";b.type="button";b.role="tab";b.dataset.m=m;
  b.textContent=MONTHS[m-1].slice(0,3).toUpperCase();
  b.onclick=()=>renderMonth(m);
  tabs.appendChild(b);
});
renderMonth(1);

}
if(document.getElementById("form")){
/* ---- form ---- */
const sel=document.getElementById("month");
MONTHS.forEach((n,i)=>{const o=document.createElement("option");o.value=i+1;o.textContent=n;sel.appendChild(o)});
const form=document.getElementById("form"),err=document.getElementById("err"),go=document.getElementById("go");
const done=document.getElementById("done"),fallback=document.getElementById("fallback");

function val(id){return document.getElementById(id).value.trim()}
function validate(){
  if(!val("title"))return["title","Add a short description of the moment."];
  const m=+val("month"),d=+val("day"),y=+val("year");
  if(!m)return["month","Choose the month it happened."];
  if(!(d>=1&&d<=31))return["day","Enter the day as a number from 1 to 31."];
  if(!(y>=1000&&y<=new Date().getFullYear()))return["year","Enter a four-digit year that has already happened."];
  const s=val("source");
  if(!/^https?:\/\/\S+\.\S+/.test(s))return["source","Add a link that starts with https:// so we can check the date."];
  if(!val("name"))return["name","Add your name so we can credit you."];
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val("email")))return["email","Add an email address so we can reach you if your moment is chosen."];
  if(!val("handle"))return["handle","Add your handle so we can credit you."];
  if(!document.getElementById("lensOk").checked)return["lensOk","Confirm the moment fits the lens and that you've checked the date."];
  return null;
}
function entry(){
  return{title:val("title"),month:+val("month"),day:+val("day"),year:+val("year"),
    category:val("category"),source:val("source"),why:val("why"),name:val("name"),email:val("email"),handle:val("handle")};
}
function asText(e){
  return `BLACK STANDARD TIME SUBMISSION\n${MONTHS[e.month-1]} ${e.day}, ${e.year}\n${e.title}\nCategory: ${e.category}\nSource: ${e.source}\n${e.why?("Why: "+e.why+"\n"):""}From: ${e.name} (${e.handle})\nEmail: ${e.email}`;
}
function showDone(e,saved){
  form.hidden=true;done.hidden=false;
  if(saved){
    document.getElementById("doneLabel").textContent="Received";
    document.getElementById("doneH").textContent="It's on our desk.";
    document.getElementById("doneP").textContent="Thank you. We'll fact-check it and consider it for the next edition.";
    fallback.hidden=true;
  }else{
    document.getElementById("doneLabel").textContent="One more step";
    document.getElementById("doneH").textContent="Send it our way.";
    document.getElementById("doneP").textContent="Something went wrong sending your moment. Copy it below and email it to us instead.";
    document.getElementById("copyText").textContent=asText(e);
    fallback.hidden=false;
  }
  done.scrollIntoView({behavior:reduce?"auto":"smooth",block:"start"});
}
form.addEventListener("submit",async ev=>{
  ev.preventDefault();
  const bad=validate();
  if(bad){err.textContent=bad[1];err.hidden=false;document.getElementById(bad[0]).focus();return}
  err.hidden=true;
  const e=entry();
  if(!/^https:\/\/formspree\.io\/f\//.test(FORM_ENDPOINT)){showDone(e,false);return}
  go.disabled=true;go.textContent="Sending…";
  try{
    const r=await fetch(FORM_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json"},
      body:JSON.stringify({...e,date:`${MONTHS[e.month-1]} ${e.day}, ${e.year}`,_replyto:e.email,_subject:`BST submission: ${e.title}`})});
    if(!r.ok)throw new Error("send failed");
    showDone(e,true);
  }catch(x){
    showDone(e,false);
  }finally{go.disabled=false;go.textContent="Submit moment"}
});
document.getElementById("again").onclick=()=>{form.reset();done.hidden=true;form.hidden=false;document.getElementById("title").focus()};
document.getElementById("copyBtn").onclick=async function(){
  const t=document.getElementById("copyText");
  try{await navigator.clipboard.writeText(t.textContent);this.textContent="Copied"}
  catch(_){const r=document.createRange();r.selectNodeContents(t);const s=getSelection();s.removeAllRanges();s.addRange(r);this.textContent="Selected. Press copy"}
};

}
if(document.getElementById("ticker")){
/* ---- ticker ---- */
(function(){
  const t=document.getElementById("ticker");
  const picks=M.filter((_,i)=>i%2===0);
  const items=picks.map(e=>{const s=document.createElement("span");s.className="ticker-item";const b=document.createElement("b");b.textContent=`${MONTHS[e[0]-1].slice(0,3).toUpperCase()} ${e[1]}, ${e[2]}`;s.appendChild(b);s.appendChild(document.createTextNode(e[3]));return s});
  items.concat(items.map(n=>n.cloneNode(true))).forEach(n=>t.appendChild(n));
  /* steady, readable speed: about 28px per second no matter how many dates */
  const SPEED=28,set=()=>{t.style.animationDuration=(t.scrollWidth/2/SPEED)+"s"};
  set();if(document.fonts&&document.fonts.ready)document.fonts.ready.then(set);
})();

}
/* ---- artwork + calendar pages ----
   Artwork lives in /art (jan.jpg + jan-sm.jpg ...), printed calendar pages in /calendar. */
const ART=[
  {k:"jan",month:"January",title:"Donye Taylor",note:"Donye Taylor, founder of Nuclei, who launched the brand on New Year's Day 2024."},
  {k:"feb",month:"February",title:"Moonlight",note:"Moonlight wins Best Picture in 2017, the first all-Black-cast LGBTQ film to take the Academy's highest honor."},
  {k:"mar",month:"March",title:"The Six Triple Eight",note:"For Women's History Month: the Six Triple Eight, the largest group of Black servicewomen to serve overseas in World War II."},
  {k:"apr",month:"April",title:"Matthew Henson",note:"Matthew Henson, the first Black person to reach the North Pole."},
  {k:"may",month:"May",title:"Rihanna",note:"Rihanna wins the CFDA Fashion Icon Award in 2014, the first Black woman recognized for changing how the world consumes style."},
  {k:"jun",month:"June",title:"Virgil Abloh",note:"Virgil Abloh is named artistic director of Louis Vuitton menswear, the first person of African descent to lead design at the house."},
  {k:"jul",month:"July",title:"Serena Page & Kordell Beckham",note:"Serena Page and Kordell Beckham win Love Island USA Season 6, the first Black couple to do so."},
  {k:"aug",month:"August",title:"Soul Train",note:"Soul Train, the first nationally syndicated, Black-owned show dedicated to music and dance, and a global picture of Black joy."},
  {k:"sep",month:"September",title:"Issa Rae & Yvonne Orji",note:"Issa Rae and Yvonne Orji in Insecure, the HBO comedy through which Issa redefined modern Black womanhood."},
  {k:"oct",month:"October",title:"The Black Panther Party",note:"The Black Panther Party, founded by Huey P. Newton and Bobby Seale in 1966."},
  {k:"nov",month:"November",title:"Thriller",note:"Michael Jackson's Thriller, the best-selling album of all time."},
  {k:"dec",month:"December",title:"Quinta Brunson",note:"Quinta Brunson wins Best Actress in a TV Comedy at the Golden Globes for Abbott Elementary."}
];
const PRINT=[{k:"cover",title:"Cover"},{k:"intro",title:"Introduction"}].concat(ART.map(a=>({k:a.k,title:a.month+" 2026"})));

/* ---- viewer (shared) ---- */
const Viewer=(function(){
  let dlg,list=[],i=0;
  function build(){
    dlg=document.createElement("dialog");dlg.className="viewer";dlg.setAttribute("aria-label","Image viewer");
    dlg.innerHTML='<div class="v-top"><span class="label v-count"></span><button class="v-x" type="button" aria-label="Close">Close ✕</button></div>'+
      '<div class="v-body"><div class="v-imgs"></div><div class="v-cap"><p class="label v-kicker"></p><h2 class="v-title"></h2><p class="v-note"></p><p class="label v-credit"></p></div></div>'+
      '<div class="v-nav"><button type="button" class="btn ghost v-prev">← Prev</button><button type="button" class="btn ghost v-next">Next →</button></div>';
    document.body.appendChild(dlg);
    dlg.querySelector(".v-x").onclick=()=>dlg.close();
    dlg.querySelector(".v-prev").onclick=()=>go(-1);
    dlg.querySelector(".v-next").onclick=()=>go(1);
    dlg.addEventListener("click",e=>{if(e.target===dlg)dlg.close()});
    dlg.addEventListener("keydown",e=>{if(e.key==="ArrowLeft")go(-1);if(e.key==="ArrowRight")go(1)});
  }
  function render(){
    const it=list[i],box=dlg.querySelector(".v-imgs");box.innerHTML="";
    it.imgs.forEach(m=>{const f=document.createElement("figure");const im=new Image();im.src=m.src;im.alt=m.alt;f.appendChild(im);
      if(m.label){const c=document.createElement("figcaption");c.className="label";c.textContent=m.label;f.appendChild(c)}box.appendChild(f)});
    box.classList.toggle("two",it.imgs.length>1);
    dlg.querySelector(".v-kicker").textContent=it.kicker||"";
    dlg.querySelector(".v-title").textContent=it.title;
    dlg.querySelector(".v-note").textContent=it.note||"";
    dlg.querySelector(".v-credit").textContent=it.credit||"";
    dlg.querySelector(".v-count").textContent=(i+1)+" / "+list.length;
  }
  function go(d){i=(i+d+list.length)%list.length;render()}
  return {open(l,n){if(!dlg)build();list=l;i=n;render();if(!dlg.open)dlg.showModal()}};
})();

function artItem(a){return {kicker:a.month+" · Black Standard Time 2026",title:a.title,note:a.note,credit:"Artwork by Fritz von Eric",
  imgs:[{src:"art/"+a.k+".jpg",alt:a.title+", artwork for "+a.month+" by Fritz von Eric",label:"The artwork"},
        {src:"calendar/"+a.k+".jpg",alt:"The "+a.month+" 2026 page of the printed calendar",label:"The calendar page"}]}}

if(document.getElementById("artGrid")){
(function(){
  const g=document.getElementById("artGrid"),items=ART.map(artItem);
  ART.forEach((a,n)=>{
    const f=document.createElement("figure");f.className="art";f.id=a.k;
    const b=document.createElement("button");b.type="button";b.className="art-frame";b.setAttribute("aria-label","Open "+a.month+": "+a.title);
    const img=new Image();img.alt=a.title+", artwork for "+a.month+" by Fritz von Eric";img.loading="lazy";img.src="art/"+a.k+"-sm.jpg";
    b.appendChild(img);b.onclick=()=>Viewer.open(items,n);
    const cap=document.createElement("figcaption");
    cap.innerHTML='<span class="row"><b></b><span class="label"></span></span><span class="t"></span>';
    cap.querySelector("b").textContent=a.title;cap.querySelector(".label").textContent=a.month;cap.querySelector(".t").textContent=a.note;
    f.appendChild(b);f.appendChild(cap);g.appendChild(f);
  });
  const h=location.hash.slice(1),n=ART.findIndex(a=>a.k===h);
  if(n>-1)setTimeout(()=>Viewer.open(items,n),300);
})();
}
if(document.getElementById("printGrid")){
(function(){
  const g=document.getElementById("printGrid");
  const items=PRINT.map(p=>({kicker:"The printed calendar · 2026",title:p.title,imgs:[{src:"calendar/"+p.k+".jpg",alt:p.title+" page of the 2026 Black Standard Time calendar"}]}));
  PRINT.forEach((p,n)=>{
    const b=document.createElement("button");b.type="button";b.className="pg";b.setAttribute("aria-label","Open "+p.title);
    const img=new Image();img.loading="lazy";img.src="calendar/"+p.k+"-sm.jpg";img.alt=p.title+" page of the 2026 calendar";
    const c=document.createElement("span");c.className="label";c.textContent=p.title;
    b.appendChild(img);b.appendChild(c);b.onclick=()=>Viewer.open(items,n);g.appendChild(b);
  });
})();
}
if(document.getElementById("artStrip")){
(function(){
  const s=document.getElementById("artStrip");
  ART.forEach(a=>{const l=document.createElement("a");l.href="art.html#"+a.k;l.className="strip-item";
    const img=new Image();img.loading="lazy";img.src="art/"+a.k+"-sm.jpg";img.alt=a.title+", artwork for "+a.month;
    const c=document.createElement("span");c.className="label";c.textContent=a.month.slice(0,3)+" · "+a.title;
    l.appendChild(img);l.appendChild(c);s.appendChild(l)});
})();
}
if(document.getElementById("wlForm")){
/* ---- waitlist ---- */
document.getElementById("wlForm").addEventListener("submit",async ev=>{
  ev.preventDefault();
  const msg=document.getElementById("wlMsg"),go=document.getElementById("wlGo");
  const email=document.getElementById("wlEmail").value.trim(),name=document.getElementById("wlName").value.trim();
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){msg.textContent="Enter an email address so we can reach you.";document.getElementById("wlEmail").focus();return}
  go.disabled=true;go.textContent="Joining…";
  try{
    const r=await fetch(FORM_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json"},
      body:JSON.stringify({type:"2027 waitlist",name,email,_replyto:email,_subject:"BST 2027 waitlist: "+(name||email)})});
    if(!r.ok)throw 0;
    msg.textContent="You're on the list. We'll email you when 2027 is ready.";
    ev.target.reset();
  }catch(_){msg.textContent="That didn't go through. Email hello@donyetaylor.com with the subject 2027 waitlist and we'll add you."}
  finally{go.disabled=false;go.textContent="Join"}
});

}

/* ======================================================
   Black Standard Time: live clock features
   ====================================================== */
const DOY=(m,d)=>{const t=[0,31,59,90,120,151,181,212,243,273,304,334];return t[m-1]+Math.min(d,m===2?28:31)};
function momentsFor(m,d){
  const exact=M.filter(e=>e[0]===m&&e[1]===d);
  if(exact.length)return {exact:true,m,d,list:exact};
  const me=DOY(m,d);let best=null,bd=999;
  M.forEach(e=>{let k=Math.abs(DOY(e[0],e[1])-me);k=Math.min(k,365-k);if(k<bd){bd=k;best=e}});
  return {exact:false,m:best[0],d:best[1],list:M.filter(e=>e[0]===best[0]&&e[1]===best[1])};
}
const MON3=m=>MONTHS[m-1].slice(0,3).toUpperCase();

/* ---- "Today in Black Standard Time" bar (every page) ---- */
(function(){
  const now=new Date(),tm=now.getMonth()+1,td=now.getDate();
  let r=momentsFor(tm,td);
  if(!r.exact){ /* look ahead to the next date on the calendar */
    const me=DOY(tm,td);let best=null,bd=999;
    M.forEach(e=>{const k=(DOY(e[0],e[1])-me+365)%365;if(k>0&&k<bd){bd=k;best=e}});
    r={exact:false,m:best[0],d:best[1],list:M.filter(e=>e[0]===best[0]&&e[1]===best[1])};
  }
  const e=r.list[0];
  const bar=document.createElement("a");bar.className="now-bar";bar.href="editions.html#calendar";
  bar.innerHTML='<span class="now-k"><span class="dot" aria-hidden="true"></span>Now <b class="now-clock"></b></span><span class="now-m"></span>';
  bar.querySelector(".now-m").textContent=(r.exact?"Today, ":"Coming up "+MON3(r.m)+" "+r.d+", ")+e[2]+": "+e[3];
  document.body.insertBefore(bar,document.body.firstChild);
  const c=bar.querySelector(".now-clock");
  const tick=()=>{const t=new Date();c.textContent=MON3(t.getMonth()+1)+" "+t.getDate()+" · "+t.toLocaleTimeString([], {hour:"numeric",minute:"2-digit",second:"2-digit"})};
  tick();setInterval(tick,1000);
})();

/* ---- clock cursor (mouse and trackpad only) ---- */
(function(){
  if(!matchMedia("(hover:hover) and (pointer:fine)").matches)return;
  const still=matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.documentElement.classList.add("has-clock");
  const el=document.createElement("div");el.className="clock-cur";el.setAttribute("aria-hidden","true");
  let ticks="";for(let i=0;i<12;i++)ticks+=`<line x1="20" y1="${i%3?4.5:3.5}" x2="20" y2="${i%3?6:7.5}" transform="rotate(${i*30} 20 20)"/>`;
  el.innerHTML=`<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="18.5"/><g class="tk">${ticks}</g><line class="h" x1="20" y1="20" x2="20" y2="11"/><line class="mi" x1="20" y1="20" x2="20" y2="7"/><line class="s" x1="20" y1="23" x2="20" y2="5"/><circle class="c" cx="20" cy="20" r="1.4"/></svg><span class="v">View</span>`;
  document.body.appendChild(el);
  const H=el.querySelector(".h"),Mi=el.querySelector(".mi"),S=el.querySelector(".s");
  let x=-100,y=-100,cx=-100,cy=-100,spin=0,mode="";
  const VIEW=".art-frame,.pg,.strip-item,.y26-pics a",TEXT="input,select,textarea,[contenteditable]";
  addEventListener("mousemove",ev=>{
    x=ev.clientX;y=ev.clientY;
    const host=document.querySelector("dialog[open]")||document.body;if(el.parentNode!==host)host.appendChild(el);
    const t=ev.target.closest?ev.target:null;
    const m=t&&t.closest(TEXT)?"off":t&&t.closest(VIEW)?"view":t&&t.closest("a,button,label,summary,[role=tab]")?"hot":"";
    if(m!==mode){el.classList.remove("off","view","hot");if(m)el.classList.add(m);mode=m}
    el.classList.add("on");
  },{passive:true});
  document.addEventListener("mouseleave",()=>el.classList.remove("on"));
  addEventListener("mousedown",()=>el.classList.add("down"));addEventListener("mouseup",()=>el.classList.remove("down"));
  (function frame(){
    const k=still?1:.28;cx+=(x-cx)*k;cy+=(y-cy)*k;
    el.style.transform=`translate(${cx}px,${cy}px)`;
    const t=new Date(),s=t.getSeconds()+t.getMilliseconds()/1000,mn=t.getMinutes()+s/60,hr=(t.getHours()%12)+mn/60;
    if(mode==="view"&&!still)spin+=14;else spin=0;
    H.setAttribute("transform",`rotate(${hr*30+spin/12} 20 20)`);
    Mi.setAttribute("transform",`rotate(${mn*6+spin} 20 20)`);
    S.setAttribute("transform",`rotate(${(still?Math.floor(s):s)*6} 20 20)`);
    requestAnimationFrame(frame);
  })();
})();

/* ---- birthday lookup + story card ---- */
if(document.getElementById("bdForm")){
(function(){
  const mSel=document.getElementById("bdMonth"),dSel=document.getElementById("bdDay");
  mSel.innerHTML='<option value="">Month</option>'+MONTHS.map((n,i)=>`<option value="${i+1}">${n}</option>`).join("");
  const days=()=>{const m=+mSel.value||1,n=[31,29,31,30,31,30,31,31,30,31,30,31][m-1],v=dSel.value;
    dSel.innerHTML='<option value="">Day</option>'+Array.from({length:n},(_,i)=>`<option value="${i+1}">${i+1}</option>`).join("");if(v&&+v<=n)dSel.value=v};
  days();mSel.addEventListener("change",days);
  const out=document.getElementById("bdOut"),cv=document.getElementById("bdCard"),note=document.getElementById("bdNote");
  let current=null,blob=null;

  function wrap(ctx,text,maxW){const w=text.split(" ");const lines=[];let l="";
    w.forEach(word=>{const t=l?l+" "+word:word;if(ctx.measureText(t).width>maxW&&l){lines.push(l);l=word}else l=t});if(l)lines.push(l);return lines}
  function loadImg(src){return new Promise(r=>{const i=new Image();i.onload=()=>r(i);i.onerror=()=>r(null);i.src=src})}

  async function draw(r,bm,bd){
    if(document.fonts&&document.fonts.ready)await document.fonts.ready;
    const ctx=cv.getContext("2d"),W=1080,Hh=1920,P=84,F='"Helvetica Neue", Helvetica, Archivo, Arial, sans-serif';
    ctx.fillStyle="#000";ctx.fillRect(0,0,W,Hh);ctx.fillStyle="#fff";ctx.textBaseline="alphabetic";
    ctx.font=`500 54px ${F}`;ctx.fillText("BLACK STANDARD",P,150);ctx.fillText("TIME",P+150,206);
    ctx.font=`500 26px ${F}`;ctx.fillStyle="#9A9A9E";
    const kick="MY DAY IN BLACK HISTORY";ctx.letterSpacing="4px";ctx.fillText(kick,P,290);ctx.letterSpacing="0px";
    const a=ART[r.m-1],img=await loadImg("art/"+a.k+".jpg");
    const S=820,iy=330,ix=P;
    if(img){ctx.drawImage(img,ix,iy,S,S)}else{ctx.fillStyle="#0B0B0C";ctx.fillRect(ix,iy,S,S)}
    ctx.strokeStyle="#2A2A2D";ctx.lineWidth=2;ctx.strokeRect(ix,iy,S,S);
    let y=iy+S+40;
    ctx.fillStyle="#fff";ctx.font=`500 40px ${F}`;ctx.fillText(MONTHS[bm-1].toUpperCase(),P,y+40);
    ctx.font=`500 230px ${F}`;ctx.letterSpacing="-10px";ctx.fillText(String(bd),P-8,y+250);ctx.letterSpacing="0px";
    const e=r.list[0];
    if(r.exact){ctx.textAlign="right";ctx.font=`500 40px ${F}`;ctx.fillText(String(e[2]),W-P,y+250);ctx.textAlign="left"}
    y+=290;ctx.strokeStyle="#fff";ctx.beginPath();ctx.moveTo(P,y);ctx.lineTo(W-P,y);ctx.stroke();
    ctx.font=`400 42px ${F}`;ctx.fillStyle="#fff";
    const pre=r.exact?"":`Closest moment, ${MONTHS[r.m-1]} ${r.d}, ${e[2]}: `;
    let lines=wrap(ctx,pre+e[3],W-P*2);if(lines.length>4){lines=lines.slice(0,4);lines[3]=lines[3].replace(/\s+\S*$/,"")+"…"}
    lines.forEach((l,i)=>ctx.fillText(l,P,y+70+i*56));
    ctx.font=`500 24px ${F}`;ctx.fillStyle="#9A9A9E";ctx.letterSpacing="4px";
    ctx.fillText("BLACKSTANDARDTIME.COM",P,Hh-90);ctx.textAlign="right";ctx.fillText("ART: FRITZ VON ERIC",W-P,Hh-90);ctx.textAlign="left";ctx.letterSpacing="0px";
    return new Promise(res=>cv.toBlob(b=>res(b),"image/png"));
  }

  document.getElementById("bdForm").addEventListener("submit",async ev=>{
    ev.preventDefault();
    const m=+mSel.value,d=+dSel.value;
    if(!m||!d){(m?dSel:mSel).focus();return}
    const r=momentsFor(m,d);current={m,d};
    document.getElementById("bdKicker").textContent=r.exact?"On your birthday":"Nothing on "+MONTHS[m-1]+" "+d+" yet · Closest moment";
    document.getElementById("bdDate").textContent=MONTHS[r.m-1]+" "+r.d;
    const ul=document.getElementById("bdList");ul.innerHTML="";
    r.list.forEach(e=>{const li=document.createElement("li");li.innerHTML='<span class="y"></span><span></span>';li.firstChild.textContent=e[2];li.lastChild.textContent=e[3];ul.appendChild(li)});
    note.innerHTML=r.exact?"":'Know a moment from your birthday? <a href="submit.html">Submit it</a> for 2027.';
    out.hidden=false;
    blob=await draw(r,m,d);
    const sh=document.getElementById("bdShare");
    try{sh.hidden=!(blob&&navigator.canShare&&navigator.canShare({files:[new File([blob],"bst.png",{type:"image/png"})]}))}catch(_){sh.hidden=true}
    out.scrollIntoView({behavior:"smooth",block:"nearest"});
  });
  const fname=()=>`black-standard-time-${MONTHS[current.m-1].toLowerCase()}-${current.d}.png`;
  document.getElementById("bdSave").addEventListener("click",()=>{
    if(!blob)return;const u=URL.createObjectURL(blob),a=document.createElement("a");
    a.href=u;a.download=fname();document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),4000);
  });
  document.getElementById("bdShare").addEventListener("click",async()=>{
    try{await navigator.share({files:[new File([blob],fname(),{type:"image/png"})],title:"My day in Black history",text:"blackstandardtime.com"})}catch(_){}
  });
})();
}

/* ---- community posts ----
   To add a post, paste its link into this list. TikTok and Instagram Reels both work.
   Example: {url:"https://www.tiktok.com/@name/video/7400000000000000000", handle:"@name", note:"Unboxing the 2026 calendar"} */
const COMMUNITY=[
  {url:"https://www.tiktok.com/@denisefwd/video/7605435319109864717",handle:"@denisefwd",note:""},
  {url:"https://www.tiktok.com/@sadesshakur/video/7608311559097486623",handle:"@sadesshakur",note:""},
  {url:"https://www.tiktok.com/@paige_mariah/video/7609841455397424414",handle:"@paige_mariah",note:""},
  {url:"https://www.tiktok.com/@thesunherself/video/7607944176088435999",handle:"@thesunherself",note:""},
  {url:"https://www.tiktok.com/@tarontoyou/video/7688352373483392286",handle:"@tarontoyou",note:""},
  {url:"https://www.tiktok.com/@taliacadet/video/7605306571039542558",handle:"@taliacadet",note:""},
  {url:"https://www.tiktok.com/@donye.taylor/video/7614366110393044237",handle:"@donye.taylor",note:""},
  {url:"https://www.tiktok.com/@_lexialize/video/7611668049925590302",handle:"@_lexialize",note:""}
];
if(document.getElementById("commRow")){
(function(){
  const row=document.getElementById("commRow");
  function setThumb(b,src){
    const im=new Image();im.alt="";im.className="post-thumb";im.referrerPolicy="no-referrer";
    im.onload=()=>{b.insertBefore(im,b.firstChild);b.classList.add("has-thumb")};im.src=src;
  }
  /* cover images and captions come from TikTok's public oEmbed, loaded in the visitor's browser */
  function loadPreviews(){
    row.querySelectorAll(".post-frame[data-url]").forEach(b=>{
      const u=b.dataset.url;if(!/tiktok\.com/.test(u)||b.classList.contains("has-thumb"))return;
      fetch("https://www.tiktok.com/oembed?url="+encodeURIComponent(u)).then(r=>r.ok?r.json():null).then(d=>{
        if(!d)return;
        if(d.thumbnail_url)setThumb(b,d.thumbnail_url);
        const cap=b.parentNode&&b.parentNode.querySelector('figcaption span[data-auto]');
        if(cap&&d.title){let t=d.title.replace(/\s*#\S+/g,"").trim();if(t.length>90)t=t.slice(0,88).replace(/\s+\S*$/,"")+"…";cap.textContent=t}
      }).catch(()=>{});
    });
  }
  function parse(u){
    let m=u.match(/tiktok\.com\/.*\/video\/(\d+)/);if(m)return {src:`https://www.tiktok.com/player/v1/${m[1]}?music_info=1&description=1&rel=0&native_context_menu=0`,kind:"TikTok"};
    m=u.match(/instagram\.com\/(?:reel|reels|p)\/([\w-]+)/);if(m)return {src:`https://www.instagram.com/reel/${m[1]}/embed`,kind:"Instagram"};
    return null;
  }
  COMMUNITY.forEach((p,i)=>{
    const v=parse(p.url);if(!v)return;
    const f=document.createElement("figure");f.className="post";
    const b=document.createElement("button");b.type="button";b.className="post-frame";b.setAttribute("aria-label","Play "+v.kind+" post by "+(p.handle||"the community"));
    b.innerHTML='<span class="post-n"></span><span class="post-play" aria-hidden="true">▶</span><span class="post-h"></span><span class="label post-k"></span>';
    b.querySelector(".post-n").textContent=String(i+1).padStart(2,"0");
    b.querySelector(".post-h").textContent=p.handle||"";
    b.querySelector(".post-k").textContent="Watch on "+v.kind;
    b.dataset.url=p.url.split("?")[0];
    if(p.thumb)setThumb(b,p.thumb);
    b.onclick=()=>{const fr=document.createElement("iframe");fr.src=v.src;fr.title=v.kind+" post by "+(p.handle||"the community");
      fr.allow="autoplay; encrypted-media; fullscreen; picture-in-picture";fr.allowFullscreen=true;fr.loading="lazy";
      const w=document.createElement("div");w.className="post-frame live";w.appendChild(fr);b.replaceWith(w)};
    const c=document.createElement("figcaption");
    c.innerHTML='<a target="_blank" rel="noopener"></a><span></span>';
    const a=c.querySelector("a");a.href=p.url;a.textContent=p.handle||("View on "+v.kind);
    c.querySelector("span").textContent=p.note||"";
    if(!p.note)c.querySelector("span").dataset.auto="1";
    f.appendChild(b);f.appendChild(c);row.appendChild(f);
  });
  /* closing card: invite people to post */
  const cta=document.createElement("a");cta.className="post post-cta";cta.href="https://www.tiktok.com/tag/blackstandardtime";cta.target="_blank";cta.rel="noopener";
  cta.innerHTML='<span class="post-frame"><span class="label">Your turn</span><span class="post-big">Post your date</span><span class="label">Tag #BlackStandardTime →</span></span>';
  row.appendChild(cta);
  const step=()=>Math.max(260,row.clientWidth*.8);
  document.querySelector(".comm-prev").onclick=()=>row.scrollBy({left:-step(),behavior:"smooth"});
  document.querySelector(".comm-next").onclick=()=>row.scrollBy({left:step(),behavior:"smooth"});
  if(COMMUNITY.length<3)document.querySelector(".comm-ctrl").hidden=true;
  if("IntersectionObserver" in window){const io=new IntersectionObserver(es=>{if(es.some(e=>e.isIntersecting)){io.disconnect();loadPreviews()}},{rootMargin:"600px"});io.observe(row)}else loadPreviews();
})();
}
