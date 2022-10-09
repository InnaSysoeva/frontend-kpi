var el = document.getElementById("info");
el.addEventListener("click", showinfoblock, false);
function showinfoblock() 
{
    var info = document.getElementById("info-text");
    if (info.style.display == "block") 
    {
        info.style.display = "none";
    } 
    else 
    {
        info.style.display = "block";
    }
}
var el2 = document.getElementById("skills");
el2.addEventListener("click", showskillsblock, false);
function showskillsblock() 
{
    var skills = document.getElementById("skills-text");
    if (skills.style.display == "block") 
    {
        skills.style.display = "none";
    } 
    else 
    {
        skills.style.display = "block";
    }
}
var el3 = document.getElementById("education");
el3.addEventListener("click", showedublock, false);
function showedublock() 
{
    var edu = document.getElementById("education-text");
    if (edu.style.display == "block") 
    {
      edu.style.display = "none";
    } 
    else 
    {
      edu.style.display = "block";
    }
}

