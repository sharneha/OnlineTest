//All the Behavioural statments are stored in a single array
var stmts = ["I think of new ways to address challenging problems.", "I keep an open mind to all possibilities.", "I constantly think differently.", "I Challenge set assumptions.","I gather support for new ideas to be implemented.","I positively accept new initiatives at work.","I simplify processes to focus on end-results.","I prioritise improvement areas to maximise impact.","I take personal responsibility for all actions and outcomes.","I Hold self and team accountable to meet commitments.","I champion the cause of internal and external customers.","I deliver as per agreed time and cost parameters.","I stay solution focused, even with unclear or inadequate data.","I seize opportunites, taking calculated risks when needed.","I establish processes for monitoring end-results.","I solicit inputs to get things done effectively.","I easily connect with a diverse group of people.","I seek inputs from others in problem solving.","I put to use the diverse strengths of people.","I am fair and unbiased with all people.","I break silos at work that may be hampering results.","I bring together people to work on common goals.","I treat internal and external people with respect.","I actively listen to people with undivided attention.","I act with empathy, showing concern towards all.","I support others in difficult times.","I inspire people to out-perform and reach for more.","I ensure people get recognition for their efforts.","I balance emotional and caring responses with reason, logic, and reality in all decisions.","I enable resources and authority for people to deliver.","I remove bottlenecks for teams to deliver.","I demonstrate learning from all experiences.","I accept and learn from failures.","I show curiosity to learn new things.","I create opportunities to stretch and learn","I persistently work to enhance customer experience.","I work to identify process improvement opportunities.","I strive for a balance between cost and derived value.","I identify areas worth investing resources in.","I remain passionate to get closure, even under pressure.","I prevent people from losing time on non-value activities.","I make fast decisions.","I go beyond immediate comfort zone to get things done."];
var i; //counter variable
var j; //Variable to count categories
var len=stmts.length; //Get total count of statements
var table = document.getElementById("disp_table"); 
var toolans = []; //Stores the answers submitted by user
var x=[1,9,17,25,32,38]; //Starting(included) point of category
var y=[8,16,24,31,37,43]; //Ending(included) point of category
var z=["Innovation","Accountability","Collaboration","Compassion","Learning","Speed"]; //All the headings will be replaced by score out of 5
// Output value when threshold is more than 4
var zmore=['Innovation is a Core value you highly identfy with.<br> What Does Innovation mean at At BCCL:<br> &nbsp;&nbsp;&nbsp;Innovation is exhibited by <ol> <li>Generating ideas that are new, different and better <li>Putting creative ideas into practice <li>Accepting new ideas, challenges and change initiatives </ol> &nbsp;&nbsp;&nbsp;How Can you champion this Core value: <ol> <li>If you have an idea, don\’t think whether your idea is good or not, just contribute to “Eureka”. You will be surprised at how many ideas were originally thought of as stupid, but later caught on. <li>As a manager, Build a culture of asking questions. Every time you receive any output, ask the person “Is there a different and better way to do it?” `, `Accountability & Risk Taking is a Core Value you highly identify with<br> What Does Accountability & Risk Taking mean at At BCCL:<br> &nbsp;&nbsp;&nbsp;Accountability & Risk Taking is exhibited by <ol> <li>Holding self and others accountable to meet commitments <li>Taking personal responsibility for decisions, actions and failures <li>Establishing processes for monitoring and measuring results <li>Ensuring that feedback loops are effective </ol> &nbsp;&nbsp;&nbsp;How Can you champion this Core value: <ol> <li>Ask for feedback on your performance from people who you respect. <li>As a manger, hold people accountable for the results expected from them. Create a safety net by allowing people to try out new approaches. </ol> `, `Collaboration is a Core Value you highly identify with. <br> What Does Collaboration mean at At BCCL: <br> &nbsp;&nbsp;&nbsp;Collaboration is exhibited by <ol> <li>Building partnerships with others to meet shared objectives <li>developing the ability to recognise and respect the value that different perspectives bring to BCCL. </ol> &nbsp;&nbsp;&nbsp;How You can Champion this Core value : <ol> <li>Focus on finding common grounds and building consesus specially when views are being challenged <li>As a manager, you could focus on building a diverse team. </ol> `, `Compassion and care is a Core Value you highly identfy with<br> What Does Compassion and care mean at At BCCL:<br> Compassion and Care is exhibited by <ol> <li>Balancing emotional and caring responses with reason, logic, and reality in all decisions <li>Striving to make customer and employee experience uncomplicated <li>Listening to others and acknowledging feelings behind the words; being considerate even when taking tough calls <li>Working on creating a positive work environment where people can flourish </ol> How Can you champion this Core value: <ol> <li>Use positive words in your communication. Welcome suggestions and feedback. Have fun working! <li>As a manager,Allow opportunities for people to mingle outside of work. Encourage “employee clubs” </ol> `, `Learning Agility is a Core Value you highly identfy with<br> What Does Learning Agility mean at At BCCL:<br> Learning Agility is exhibited by <ol> <li>learning actively through experimentation when tackling new problems using both successes and failures as fodder <li>Striving to continuously improve and expand new skills and perspectives </ol> How Can you champion this Core value: <ol> <li>Leverage i-Learn to continuously develop new skills <li>As a manger, After every project/task is completed, conduct an After-Action Review or a ‘Lessons Learned’ session. Capture it in a place where all can access it. </ol> `, `Speed is a Core Value you highly identfy with<br> What Does Speed mean at At BCCL:<br> Speed is exhibited by <ol> <li>Acting with a sense of purposeful urgency <li>Recognising that speed and responsiveness as source of competitive advantage <li>Collaborating effectively in an unstructured or dynamic environment </ol> How Can you champion this Core value: <ol> <li>Prioritize critical tasks and finish them first; develop contingency plans. Simplify work. Do more with less. <li>As a manger, Empower people to act because people closest to the task can respond quickest. Develop internal SLAs to ensure everyone is aligned to serve the customer needs" '];
var zless=['Innovation is a Core Value you should focus on exhibiting more.<br><br> What Does Innovation mean at At BCCL?<br> Innovation is exhibited by <ol> <li>Generating ideas that are new, different and better <li>Putting creative ideas into practice <li>Accepting new ideas, challenges and change initiatives </ol> <strong>How Can you imbibe this Core value:</strong> <ol> <li>Ask yourself "What can I learn from the best in my area of work? What will work? what needs tweaking?" <li>If you get an outlandish idea, log it into Eureka . As a manger, Build a culture of asking questions. Every time you receive any output, ask the person “Is there a different and better way to do it?” </ol> <strong>Derailers you must watch out for :</strong> <ol> <li>Questioning everything, but not providing any solutions. This behaviour, if not checked, leads to constant cribbing and disengagement <li>Defensive behaviour. Such behaviour discourages new ideas and will block innovation. </ol> `, `Accountability & Risk Taking is a Core Value you should focus on exhibiting more.<br><br> What Does Accountability & Risk Taking mean at At BCCL?<br> Accountability & Risk Taking is exhibited by <ol> <li>Holding self and others accountable to meet commitments <li>Taking personal responsibility for decisions, actions and failures <li>Establishing processes for monitoring and measuring results <li>Ensuring that feedback loops are effective </ol> <strong>How Can you imbibe this Core value:</strong> <ol> <li>Keep others informed of your work to solicit suggestions, and allow them to caution if you get too adventurous. <li>As a manager, <ul> <li>Set clear goals for each of your team members <li>Share regular feedback on performance and ask for feedback about your managerial style. </ul> </ol> <strong>Derailers you must watch out for :</strong> <ul> <li>saying "It’s Not My Job" : When people know that something needs to be done to get the result, but thier behaviour is that of acute avoidance of getting involved. <li>Confusion/Tell Me What to Do : citing confusion as a way of alleviating themselves of their accountability. If they don’t understand the problem or the situation, surely they can’t be expected to do anything about it." </ul> `, `Collaboration is a Core Value you could focus on exhibting more.<br><br> What Does Collaboration mean at At BCCL?<br> Collaboration is exhibited by <ol> <li>building partnerships with others to meet shared objectives <li>developing the ability to recognise and respect the value that different perspectives bring to BCCL. </ol> <strong>How Can you imbibe this Core value:</strong> <ol> <li>Develop a style of communication that maintains self-esteem of others <li>As a manager, Listen more and ask questions to understand better Derailers you must watch out for :<br> Not listening to views that are different from ours. When we do this repeatedly, it kills diversity in viewpoints and gives rise to Groupthink behaviour. `, `Compassion and care is a Core Value you should focus on exhibiting more.<br><br> What Does Compassion and care mean at At BCCL?<br> Compassion and Care is exhibited by <ol> <li>Balancing emotional and caring responses with reason, logic, and reality in all decisions <li>Striving to make customer and employee experience uncomplicated <li>Listening to others and acknowledging feelings behind the words; being considerate even when taking tough calls <li>Working on creating a positive work environment where people can flourish </ol> <strong>How Can you imbibe this Core value:</strong> &nbsp;&nbsp;Use positive words in your communication. Lend a helping hand whenever you can.<br><br> <strong>Derailers you must watch out for :</strong> &nbsp;&nbsp;Arrogant and rude behaviour. When we indulge in a behaviour that is not respectful, we create unfavourable image of ourselves and our organizations. `, `Learning Agility is a Core Value you should focus on exhibiting more<br> What Does Learning Agility mean at At BCCL:<br> Learning Agility is exhibited by <ol> <li>learning actively through experimentation when tackling new problems using both successes and failures as fodder <li>Striving to continuously improve and expand new skills and perspectives </ol> <strong>How Can you imbibe this Core value:</strong> <ol> <li>Write a Failure Resume - Note all instances where you were not successful and ask yourself what could i have done differrently. <li>As a manager, identify experts in your team to teach each other </ol> <strong>Derailers you must watch out for :</strong> &nbsp;&nbsp;Questioning everything but not providing a solution ! `, `Speed is a Core Value you should focus on exhibiting more.<br><br> What Does Speed mean at At BCCL?<br> Speed is exhibited by <ol> <li>Acting with a sense of purposeful urgency <li>Recognising that speed and responsiveness as source of competitive advantage <li>Collaborating effectively in unstructured or dynamic environment </ol> <strong>How Can you imbibe this Core value:</strong> &nbsp;&nbsp;Respect deadlines. They are not lifelines that can be stretched every time. As a manager, Empower people to act because people closest to the task can respond quickest.<br> <strong>Derailers you must watch out for :</strong> <ul> <li><strong>Procrastinating :</strong> People who wait too long for things to happen cause harm to the organization and themselves <li><strong>Paralysis of Analysis :</strong> Over planning causes us to respond slowly and become reactive `'];

// Generate the table
for(i=0;i<len;i++)
{
    var row = table.insertRow(i+1);
    var cell1 = row.insertCell(0); //Sno
    var cell2 = row.insertCell(1); //Question
    var cell3 = row.insertCell(2); //Option
    cell1.innerHTML = i+1;
    cell2.innerHTML = stmts[i];
    cell3.innerHTML =  '<select id="${"testassess"+i}"><option disabled selected value="0">Select one of the options</option><option value="5">True of me</option><option value="4">Somewhat true of me</option><option value="3">Neutral</option><option value="2">Somewhat untrue of me</option><option value="1">Untrue of me</option></select>';
}
//Submit button function
function sbtgnt(){
    var unfilled=0;
    for(i=0;i<len;i++)
    {
        var e = document.getElementById('${"testassess"+i}');
        var strUser = e.options[e.selectedIndex].value;
        if(strUser!=0)
        {
            toolans.push(strUser); //Append in the array
            e.setAttribute("style","background-color: none;");
        }
        else{
            e.setAttribute("style","background-color: #F8BBD0;");
            unfilled++;
        }
    }
    if(unfilled!=0)
        {
            toolans.length=0; //Empty the array.
            alert("Please answer all the questions."); //Raise alert to select all answers before submitting.
            return; //Stop the execution of the function itself.
        }
    // // Print the array
    // toolans.forEach(function(item, index, array) {
    //     console.log(item, index);
    // });
    calc(); //Calculate the average
    comp(); //Compare and give corresponding output
    change(); //Hide the table and show output
    topFunction(); //Go to top of page

}
// Average calculator
function calc(){
    for(j=0;j<6;j++)
    {
        var sum = 0;
        for(i = x[j]; i <= y[j]; i++ ){
            sum += parseInt( toolans[i-1], 10 ); //don't forget to add the base
        }
        z[j] = sum/(y[j]-x[j]+1);    
        
    }
}
// Compare the value to give corresponding output
function comp(){
    for(j=0;j<6;j++)
    {
        if (z[j] > 4) //original is >
        {
            document.getElementById("moreheading").setAttribute("style","display: none;");
            document.getElementById('${"headoutput"+j}').setAttribute("style","display: grid;");
            document.getElementById('${"output"+j}').setAttribute("style","display: grid;");
            document.getElementById('${"output"+j}').innerHTML=zmore[j];
        }
        else if (z[j] < 4) //original is <
        {
            document.getElementById("lessheading").setAttribute("style","display: none;");
            document.getElementById('${"headdoutput"+j}').setAttribute("style","display: grid;");
            document.getElementById('${"doutput"+j}').setAttribute("style","display: grid;");
            document.getElementById('${"doutput"+j}').innerHTML=zless[j];
        }
        else
        {
            document.getElementById('${"output"+j}').innerHTML="Looks like there was some error in calculating your score.";
        }
    }
}
function change(){
    document.getElementById("outputbehaviour").setAttribute("style","display: grid;");
    document.getElementById("maincontent").setAttribute("style","display: none;");
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Submit the form to start the test button
function fmbtn()
{   
    // Get the values entered in the form
    var email=document.getElementById("email").value;
    // Check if all fields are filled
    if(email.length==0)
    {
        alert("Fill your email before starting the test.");
        return true;
    }
    // Validate Email
    // if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))  // Valdiate any domain
    if (!/^\"?[\w-_\.]*\"?@timesgroup\.com$/.test(email)) //Validate only timegroup domain
    {
        
      alert("You have entered an invalid email address!");
      return true;
    }
    // Hide the form and the note
    document.getElementById("overall").style.display="none";
    // Show the Table
    document.getElementById("maincontent").style.display="grid";

}

// Chart Script

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Innovation","Accountability","Collaboration","Compassion","Learning","Speed"],
        datasets: [{
            label: 'CLASIC Score',
            data: z,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
                    ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            });


// What to do with backend

// email is a var which must be submitted
// email should be used to get other data from TOI Database
// z is a var which must be submitted