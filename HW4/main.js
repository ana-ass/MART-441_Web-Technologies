/*
Author: Anabel Assante
File Name: HW4 index.html
Date: 02/09/2026
Purpose: Choose Your Own Adventure Story Functions
*/

//Initial Response, Branch depends on time of day
function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Early Bird") {
        document.getElementById("advstory").innerHTML = "Bella the Coding Cat has woken up, and it's only 6am.  She knows she eats at 8am every day, what will Bella do now?";
        document.getElementById("choice1").innerHTML = "Go Back to Sleep";
        document.getElementById("choice2").innerHTML = "Wake Up Developer";
    } else if (choice == 2 && answer2 == "Night Owl") {
        document.getElementById("advstory").innerHTML = "Bella rolls over from her afternoon nap and notices the Developer has finally opened her laptop to work.  About time, surely there's something Bella can do to help.";
        document.getElementById("choice1").innerHTML = "Join Developer on the Couch";
        document.getElementById("choice2").innerHTML = "Inspect the Laptop for Approval";
    } 
    //branches established
    else if (choice == 1 && answer1 == "Go Back to Sleep") {
        document.getElementById("advstory").innerHTML = "Bella goes back to sleep, Developers need their sleep after all.  Coding and art is tiring work!  Developer wakes up right on time, and breakfast is served.  Developer now sits to work on concept art, surely needing a hand.";
        document.getElementById("choice1").innerHTML = "Supervise from the Chair";
        document.getElementById("choice2").innerHTML = "Chase the Distracting Mouse on the Canvas";
    } else if (choice == 2 && answer2 == "Wake Up Developer") {
        document.getElementById("advstory").innerHTML = "There is no time like the present, Developers need a head start and breakfast!  She is awake, unwillingly but Bella is now fed regardless.  Now the Developer is just sitting at the table with her own plate, Bella needs to offer some guidance.";
        document.getElementById("choice1").innerHTML = "Let Developer Eat";
        document.getElementById("choice2").innerHTML = "No Time to Wait!  Get Coding Now!";
    } else if (choice == 1 && answer1 == "Join Developer on the Couch") {
        document.getElementById("advstory").innerHTML = "Bella decides to help the Developer, gracing her with her encouraging presence.  The Developer seems happy, too happy with the screen and not her encouraging assistant.  Bella can't have that now, she deserves her payment (attention).";
        document.getElementById("choice1").innerHTML = "Politely Ask for Attention";
        document.getElementById("choice2").innerHTML = "Hit Developers Hands!  I'm No Unpaid Intern!";
    } else if (choice == 2 && answer2 == "Inspect the Laptop for Approval") {
        document.getElementById("advstory").innerHTML = "Bella needs to be sure the Developer has the best workspace and material required.  So she takes it upon herself to complete the inspecition as the assisstant.  Bella stands on the keyboard, finding the surface warm and suitable for work, now how to show this?";
        document.getElementById("choice1").innerHTML = "Lay on the Keyboard";
        document.getElementById("choice2").innerHTML = "Return to the Couch but Stay Close";
    }
    //branches thinning/ending
    else if (choice == 1 && answer1 == "Supervise from the Chair") {
        document.getElementById("advstory").innerHTML = "Bella supervises concept work from the comfort of the chair, letting the Developer do her work.  After a couple hours her work is complete, all in the days work for a Developer and her assistant!" + "<br>Restart Your Day?";
        document.getElementById("choice1").innerHTML = "Yes, Restart!";
        document.getElementById("choice2").innerHTML = "No, Quit.";
    } else if (choice == 2 && answer2 == "Chase the Distracting Mouse on the Canvas") {
        document.getElementById("advstory").innerHTML = "Bella needs to help the Developer focus, so she paws at the pesky mouse on the screen.  Proud of her efforts, she continues, until it is gone and the screen goes dark.  The Developer sighs, surely thankful for her assistant, and pays Bella with her favorite toy.  A successful day!" + "<br>Restart Your Day?";
        document.getElementById("choice1").innerHTML = "Yes, Restart!";
        document.getElementById("choice2").innerHTML = "No, Quit.";
    } else if (choice == 1 && answer1 == "Let Developer Eat") {
        document.getElementById("advstory").innerHTML = "After eating, Bella supervises the Developer starting her work.  The days is more than successful, for Developer and loyal assistant both.  Bella is rewarded with treats, and her favorite plastic enrichment.  Both Developer and Assistant can relax happily knowing work got done." + "<br>Restart Your Day?";
        document.getElementById("choice1").innerHTML = "Yes, Restart!";
        document.getElementById("choice2").innerHTML = "No, Quit.";
    } else if (choice == 2 && answer2 == "No Time to Wait!  Get Coding Now!") {
        document.getElementById("advstory").innerHTML = "Bella, as a loyal assistant, has to make sure the Developer makes the most of her time!  She bothers the Developer by getting things she wasn't supposed to.  No time to dilly dally now!  Bella quickly get attention, but the laptop is left untouched.  Maybe a less than a productive day, but at least the assistant is satisfied." + "<br>Restart Your Day?";
        document.getElementById("choice1").innerHTML = "Yes, Restart!";
        document.getElementById("choice2").innerHTML = "No, Quit.";
    } else if (choice == 1 && answer1 == "Politely Ask for Attention") {
        document.getElementById("advstory").innerHTML =  "Bella politely taps the Developers hand, to remind her that she's here overseeing things.  She gets the attention she wants, and the Developer pets her until she falls asleep.  When Bella wakes up again, all the code is written!  A good day for Assistant and Developer both, code written and attention recieved!" + "<br>Restart Your Day?";
        document.getElementById("choice1").innerHTML = "Yes, Restart!";
        document.getElementById("choice2").innerHTML = "No, Quit.";
    } else if (choice == 2 && answer2 == "Hit Developers Hands!  I'm No Unpaid Intern!") {
        document.getElementById("advstory").innerHTML = "Bella swats the Developer's hands, she deserves her payment after all!  There's no class credits for an assistant like her.  Bella gets her payment in full, getting pets with both the Developer's hands.  The laptop is now long abandoned, code forgotten but at least the assistant is paid in full.  A productive day for one of two, not too bad." + "<br>Restart Your Day?";
        document.getElementById("choice1").innerHTML = "Yes, Restart!";
        document.getElementById("choice2").innerHTML = "No, Quit.";
    } else if (choice == 1 && answer1 == "Lay on the Keyboard") {
        document.getElementById("advstory").innerHTML = "Bella shows her appreciation for the workspace by laying on top of it.  Surely the Developer gets the message that it's a perfect temperature!  Bella hears the Developer's appreciation through various worries, and noises and the disappearance of a file.  Bella closes her eyes, content with her work... and sleeps the entire night while the Developer rebuilds her code.  Maybe not the best day for the game." + "<br>Restart Your Day?";
        document.getElementById("choice1").innerHTML = "Yes, Restart!";
        document.getElementById("choice2").innerHTML = "No, Quit.";
    } else if (choice == 2 && answer2 == "Return to the Couch but Stay Close") {
        document.getElementById("advstory").innerHTML = "Bella stays close to the Developer, overseeing her work from the distance.  Sometimes an assistant doesn't need to be involved.  The Developer seems happy, saving her code then closing the device.  Bella gets extra pets and playtime, consider it a bonus for boosted productivity.  Both Developer and Assistant enjoy a treat to themeselves for the rest of the evening, and maybe even earned a day off tomorrow." + "<br>Restart Your Day?";
        document.getElementById("choice1").innerHTML = "Yes, Restart!";
        document.getElementById("choice2").innerHTML = "No, Quit.";
    } else if (choice == 1 && answer1 == "Yes, Restart!") {
        document.getElementById("advstory").innerHTML = "Bella, the Coding Cat, has decided to offer an olive branch and show you a glimpse into the life of a budding developer.  Which are you?";
        document.getElementById("choice1").innerHTML = "Early Bird";
        document.getElementById("choice2").innerHTML = "Night Owl"; 
    } else if (choice == 2 && answer2 == "No, Quit.") {
        document.getElementById("advstory").innerHTML = "What a day in the life of Bella the Coding Cat, being an assistant is hard work!";
    }

}