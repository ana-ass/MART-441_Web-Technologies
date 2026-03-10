/*
Author: Anabel Assante
File Name: HW8 index.html
Date: 03/09/2026
Purpose: HW 8 - Social Justice Showcase
*/

var myViewMasterSlideArray = new Array();

class ViewMasterSlide 
{
    //defining what I need for each slide
    constructor(title, images, description, author, year)
    {
        this.title = title;
        this.images = images;
        this.imageElement = document.getElementById("Img");
        this.currentIndex = 0;
        //this.slideshow();
        this.description = description;
        this.author = author;
        this.year = year;
    }
    //description print
    desc() {
        return this.description;
    }
    //author and year print
    authYear() {
        return "Publication: " + this.author + ", " + this.year;
    }

    //title print
    showTitle() {
        return this.title;
    }
    //The string attempt for images, left incase needed.  Many deleted loops. 

    //toString()
    //{
    //    let str;
     //   str = imageSources++;
    //    return str;
    //}

    //image slides,
   nextSlide(){
    const images = ["images/image1.jpeg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image5.jpg", "images/image6.jpg"];
    let currentIndex = 0;
    this.currentIndex = (currentIndex + 1) % images.length;
    return document.getElementById("Img").src = this.images[currentIndex];
   }
   //setting and grabbing the title for the multiple slides
    get theTitle()
    {
        return this.title;
    }
    set theTitle(title)
    {
        this.title = title;
    }
}


function presArray()
{

    //Note: Please see README for credit comments.  This is to keep them accessible but not take away from the code.

    let myViewMasterSlide = new ViewMasterSlide("Christ Healing the Blind", ['images/image1.jpeg'], "This artwork shows the action of Christ healing a blind man.  This image tackles the social justice issue of disability and how oftentimes many people pray over disabled people.  This painting matters because it shows disabilities as something to be ashamed of or fixed, and that disabled people are not allowed to take pride in themselves simply because of their disability.  Instead we must pity the fact they exist and wish they be healed by a higher power, one they may not even believe in.", "El Greco", "1570");
    let myViewMasterSlide1 = new ViewMasterSlide("'Wheels of Justice' March", ['images/image2.jpg'], "This photograph shows the march for the 'Wheels of Justice' campaign, after the stalling of the ADA act.  Many people do not understand how new disability rights and access are in our history, this image tackles the injustice Americans faced even within the past 40 years.  The Americans with Disabilities Act is still very new as far as policies are considered and as yet to update with the current times.  This photograph is important to show disabled people's agency in fighting for their rights and how recent this fight was.", "Tom Olin", "1990");
    let myViewMasterSlide2 = new ViewMasterSlide("Blank", ['images/image3.jpg'], "This photograph shows a young couple in Europe visiting ruins, one is in a wheelchair reaching out to her partner but they are separated by a staircase.  While the world has come a long way, many beautiful sights are still struggling with the ability to be accessible.  This image showcases how far even other places in the world like Europe, where these ruins rely on tourism, still fail to be accessible to a vast majority of people.  Disabled people deserve to travel and see the sights that their partners, friends, peers, and fellow humans see.  There will always be a disconnect in the sights disabled people can see due to the lack of effort.", "Nadiia Ivanova", "2025");
    let myViewMasterSlide3 = new ViewMasterSlide("Tree of Hope", ['images/image4.jpg'], "This painting depicts Frida Kahlo after her back surgery laying on a hospital bed, as her healthy self sits beisde her holding the steel corset she was forced to wear for recovery.  This painting depicts the struggles those with chronic conditions and chronic pain experience, and the difference in their states.  Many people believe those who suffer from chronic conditions cannot take charge of their own life or experience indepdence on some level but many can.  While many disabled people do struggle with day to day tasks, their limitations do not define them and they should not be viewed as 'less disabled' for their strong days.  Society needs to understand that this depiction is the same person, and both reflections are of the same person of equal ability.", "Frida Kahlo", "1946");
    let myViewMasterSlide4 = new ViewMasterSlide("Left Behind", ['images/image5.png'], "This photograph from the Human Rights Watch showcases a man in a wheelchair who was left behind when attacks occured on his neighborhood.  Throughout the countless conflicts happening in the world right now, disabled people are left with little to no routes or ability to escape tragedy.  Due to the accessibility needs of many, they are often left behind to fend for themselves when war or tragedy strikes.  Society as a whole needs to do better in offering escape routes or emergency plans for disabled citizens who have no means to do so on their own.  Their lives are not worth any less due to their condition.", "Marcus Bleasdale", "2015");
    let myViewMasterSlide5 = new ViewMasterSlide("My Ideal Body", ['images/image6.jpg'], "This photograph is a play on DaVinci's 'Virtuvian Man' which is made to represent the ideal body, the person here subverts those expectations by replicating this painting with their wheelchair and braces.  Society has often painted a picture of disabled people for us, typically highlighting physical disabilities.  However many people who are disabled do not fit that criteria and as a result are met with criticism or shock how they do not 'appear' disabled'.  This assumption is harmful often leading to the misunderstanding of many dyanmic or invisible disabilities.  There is no set way a man, or a disabled man should appear, we are all human and this photograph juxtaposing the perfect man with a disabled man challenges the set assumptions.", "Nolan Trowe", "2020");

    //creation of slides, pushing into the DOM
    myViewMasterSlideArray.push(myViewMasterSlide);
    myViewMasterSlideArray.push(myViewMasterSlide1);
    myViewMasterSlideArray.push(myViewMasterSlide2);
    myViewMasterSlideArray.push(myViewMasterSlide3);
    myViewMasterSlideArray.push(myViewMasterSlide4);
    myViewMasterSlideArray.push(myViewMasterSlide5);
}

function accessInfo()
{
    //randomly generate slide
    //var randomNumber = Math.floor(Math.random() * myViewMasterSlideArray.length);

    //attempt to not repeat slides
    let lastSlide = -1;
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * myViewMasterSlideArray.length);
    } while (randomNumber === lastSlide);

    lastSlide = randomNumber;

    //display content in the proper places with the proper functions
    document.getElementsByClassName("display").innerHTML = myViewMasterSlideArray[randomNumber].nextSlide();
    document.getElementById("Title").innerHTML = myViewMasterSlideArray[randomNumber].showTitle();
    document.getElementById("Desc").innerHTML = myViewMasterSlideArray[randomNumber].desc();
    document.getElementById("AuthYear").innerHTML = myViewMasterSlideArray[randomNumber].authYear();
}