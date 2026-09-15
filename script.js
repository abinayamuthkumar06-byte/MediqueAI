let tokenNumber=104, waiting=24, completed=38, ahead=6, wait=18;

function showToken(){
  tokenNumber++;
  ahead = 7;
  wait = 21;
  document.getElementById('token').textContent='A-'+tokenNumber;
  document.getElementById('ahead').textContent=ahead;
  document.getElementById('wait').textContent=wait+' min';
  document.getElementById('progressBar').style.width='65%';
  document.getElementById('progressLabel').textContent='65%';
  document.getElementById('queue').scrollIntoView({behavior:'smooth'});
  setTimeout(()=>alert('Digital token generated: A-'+tokenNumber+'\nEstimated waiting time: '+wait+' minutes'),250);
}

function askAI(question){
  document.getElementById('userMessage').textContent=question;
  let answer='Your estimated waiting time is '+wait+' minutes. You have '+ahead+' patients ahead of you.';
  if(question.includes('department')) answer='Your selected department is General Medicine. Please follow the hospital signs to the OP consultation area.';
  if(question.includes('turn')) answer='Your token is A-'+tokenNumber+'. We will show an updated queue position as staff call patients.';
  document.getElementById('botMessage').textContent=answer;
}

function nextPatient(){
  waiting=Math.max(0,waiting-1);
  completed++;
  let num=99+(38-completed);
  document.getElementById('waiting').textContent=waiting;
  document.getElementById('completed').textContent=completed;
  document.getElementById('current').textContent='A-'+num;
  if(ahead>0) ahead--;
  wait=Math.max(3,wait-3);
  document.getElementById('ahead').textContent=ahead;
  document.getElementById('wait').textContent=wait+' min';
  document.getElementById('botMessage').textContent='Queue updated. Your estimated waiting time is now '+wait+' minutes.';
}

setInterval(()=>{
  const count=document.getElementById('queueCount');
  if(count) count.textContent=waiting;
},1000);