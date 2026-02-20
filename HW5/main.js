/*
Author: Anabel Assante
File Name: HW4 index.html
Date: 02/18/2026
Purpose: HW 5 - Choose Your Own Adventure Text Prompt
*/

// first Choice, initial branch
function getChoice1()
{
    var myChoice = document.getElementById("choice").value;
    var theQuestion = document.getElementById("question");
    var t = true;
    while(t) {
    if(myChoice === "One")
    {
        document.getElementById("choice").style.display="none";
        document.getElementById("btnSubmit").style.display="none";

        document.getElementById("choice2").style.display="inline-block";
        document.getElementById("btnSubmit2").style.display="inline-flex";

        theQuestion.innerHTML = "One cup of coffee the developer decides.  Bella knows this is not enough, the day is doomed from the start.  Should the humble assistant push for More or is that Enough?";
        break;
    }
    else if(myChoice === "Two")
    {
        document.getElementById("choice").style.display="none";
        document.getElementById("btnSubmit").style.display="none";

        document.getElementById("choice3").style.display="inline-block";
        document.getElementById("btnSubmit3").style.display="inline-flex";
        theQuestion.innerHTML = "Two cups of coffee are necessary to start the day.  Bella approves, that means her job as an assistant will be easier!  Time to continue the day!  Should the assistant push the developer to Code or Design?";
        break;
    }
    else
    {
        //while loop will not erase text on page so when answer wrong, can retype.
        alert("Invalid answer, please retry with an acceptable answer.");
        t=false;
        return;

    }
}
}

function getChoice2()
{
    var answer = document.getElementById("choice2").value;
    var theQuestion = document.getElementById("question");
    var t = true;
    while(t){
    if(answer === "More")
    {
        document.getElementById("choice2").style.display="none";
        document.getElementById("btnSubmit2").style.display="none";

        document.getElementById("choice4").style.display="inline-block";
        document.getElementById("btnSubmit4").style.display="inline-flex";

        theQuestion.innerHTML = "As a good assistant does, Bella pushes the developer to get more coffee by standing in the kitchen.  The developer listens and now can get to work!  The work is swiftly getting done but now the clock strikes noon, and every assistant knows it's lunch time!  Should Bella Remind the developer or Wait?";
        break;
    }
    else if(answer === "Enough")
    {
        document.getElementById("choice2").style.display="none";
        document.getElementById("btnSubmit2").style.display="none";

        document.getElementById("choice5").style.display="inline-block";
        document.getElementById("btnSubmit5").style.display="inline-flex";

        theQuestion.innerHTML = "Bella can't be bothered, she's warned the developer before more coffee is needed to get anything done.  Bella watches as the developer gets to work and can't seem to focus, go figure.  It seems like a perfect time for an assistant to intervene.  Should Bella Play with the developer or Sleep?";
        break;
    }
    else 
    {
        alert("Invalid answer, please retry with an acceptable answer.");
        t=false;
        return;
    }
}
}

function getChoice3()
{
    var answer = document.getElementById("choice3").value;
    var theQuestion = document.getElementById("question");
    var t = true;
    while(t){
    if(answer === "Code")
    {
        document.getElementById("choice3").style.display="none";
        document.getElementById("btnSubmit3").style.display="none";

        document.getElementById("choice4").style.display="inline-block";
        document.getElementById("btnSubmit4").style.display="inline-flex";

        theQuestion.innerHTML = "Bella reminds the developer to code by sitting next to her laptop.  The developer gets to work on starting the code, and manages to finish quite a big chunk!  Now the clock strikes noon, and every assistant knows it's lunch time!  Should Bella Remind the developer or Wait?";
        break;
    }
    else if(answer === "Design")
    {
        document.getElementById("choice3").style.display="none";
        document.getElementById("btnSubmit3").style.display="none";

        document.getElementById("choice6").style.display="inline-block";
        document.getElementById("btnSubmit6").style.display="inline-flex";

        theQuestion.innerHTML = "Bella pushed the developer to work on their character design by lingering near the tablet.  The developer starts drawing, taking a break for lunch and returning back to their work.  Now it's been almost a full shift (assistants get plenty of nap breaks) and Bella needs to remind the dev of her other tasks.  Should Bella let the developer Continue or Push for something new?";
        break;
    }
    else
    {
        alert("Invalid answer, please retry with an acceptable answer.");
        t=false;
        return;
    }
    }
}

function getChoice4()
{
    var answer = document.getElementById("choice4").value;
    var theQuestion = document.getElementById("question");
    var t = true;
    while(t){
    if(answer === "Remind")
    {
        document.getElementById("choice4").style.display="none";
        document.getElementById("btnSubmit4").style.display="none";
        document.getElementById("mainImage").src = "images/goodending.png";

        theQuestion.innerHTML = "Bella has to be a good assistant and reminds the developer that she needs to eat with an annoying pawing.  The developer gets up and eats lunch and is energized for the rest of her work day.  It was a very successful day for the developer and Bella can sleep easy knowing work was done!";
        document.getElementById("resetbtn").style.display="inline-block";
        break;
    }
    else if(answer === "Wait")
    {
        document.getElementById("choice4").style.display="none";
        document.getElementById("btnSubmit4").style.display="none";
        document.getElementById("mainImage").src = "images/badending.png";
        
        theQuestion.innerHTML = "Bella decides to wait, she doesn't get paid enough or really anything to remind the developer about lunch.  The developer's work flow starts to dwindle and suddenly no more work is being done.  She is too hungry and burntout to work, having skipped lunch and working until dinner.  Half the work that needed to be complete got done.  It was not a successful day as was hoped.  Bella is disappointed.";
        document.getElementById("resetbtn").style.display="inline-block";
        break;
    }
    else
    {
        alert("Invalid answer, please retry with an acceptable answer.");
        t=false;
        return;
    }
}
}

function getChoice5()
{
    var answer = document.getElementById("choice5").value;
    var theQuestion = document.getElementById("question");
    var t = true;
    while(t){
    if(answer === "Play")
    {
        document.getElementById("choice5").style.display="none";
        document.getElementById("btnSubmit5").style.display="none";
        document.getElementById("mainImage").src = "images/goodending.png";

        theQuestion.innerHTML = "Bella bothers the developer, making her take a break by requesting to play.  The develoepr obliges so she can get work done, but Bella entertains her so much she gets a second burst of energy.  After the required break (play) time, the developer is now energized and manages to get her work done!  Both developer and assisant can sleep well after their busy day, tuckered out in a good way.";
        document.getElementById("resetbtn").style.display="inline-block";
        break;
    }
    else if(answer === "Sleep")
    {
        document.getElementById("choice5").style.display="none";
        document.getElementById("btnSubmit5").style.display="none";
        document.getElementById("mainImage").src = "images/sleepending.png";

        theQuestion.innerHTML = "Bella bothers the developer to take a nap, surely things will get done after a rest.  The developer gives in, and the rest is fulfilling except no alarms were set.  The developer and assistant sleep the rest of the day away, sleeping too late to get anything substantial done before mealtime.  Bella is disappointed the developer did not finish her tasks, and instead slacked off which was not her intent.";
        document.getElementById("resetbtn").style.display="inline-block";
        break;
    }
    else
    {
        alert("Invalid answer, please retry with an acceptable answer.");
        t=false;
        return;
    }
}
}

function getChoice6()
{
    var answer = document.getElementById("choice6").value;
    var theQuestion = document.getElementById("question");
    var t = true;
    while(t){
    if(answer === "Continue")
    {
        document.getElementById("choice6").style.display="none";
        document.getElementById("btnSubmit6").style.display="none";
        document.getElementById("mainImage").src = "images/badendingalt.png";

        theQuestion.innerHTML = "Bella lets the developer continue her character design sketches.  Surely that's at leats everything that needs to be done.  Like a good assistant she tries to remind the developer when the work day is over.  However, the developer got distracted and ends up doodling instead!  Bella is displeased the developer now stays up late to finish the rest of her tasks.";
        document.getElementById("resetbtn").style.display="inline-block";
        break;

    }
    else if(answer === "Push")
    {
        document.getElementById("choice6").style.display="none";
        document.getElementById("btnSubmit6").style.display="none";
        document.getElementById("mainImage").src = "images/pushending.png";

        theQuestion.innerHTML = "Bella makes sure to remind the developer she has other important tasks along with her design.  Grateful for her assistant the develoepr moves on to her laptop to finish her code and other required tasks.  Bella gets the developer's warm seat and prime screen time while the developer gets her work done.  A successful day for a tag team duo!";
        document.getElementById("resetbtn").style.display="inline-block";
        break;
    }
    else
    {
        theQuestion.innerHTML = "Invalid answer, please refresh and try again"
    }
}
}

function refreshPage(){
    window.location.reload();
}

