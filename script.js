const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}))}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('[data-pending-contact]').forEach(link=>link.addEventListener('click',e=>{if(link.getAttribute('href')==='#'){e.preventDefault();alert('El número de WhatsApp se agregará cuando nos lo compartas.')}}));
const hero=document.querySelector('.hero');
if(hero&&matchMedia('(pointer:fine)').matches){hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();hero.style.setProperty('--glow-x',`${((e.clientX-r.left)/r.width)*100}%`);hero.style.setProperty('--glow-y',`${((e.clientY-r.top)/r.height)*100}%`)})}
const gallery=document.querySelector('[data-gallery]');
if(gallery){
  const viewport=gallery.querySelector('.gallery-viewport'),track=gallery.querySelector('.gallery-track'),slides=[...gallery.querySelectorAll('.gallery-slide')],prev=gallery.querySelector('.gallery-prev'),next=gallery.querySelector('.gallery-next'),progress=gallery.querySelector('.gallery-progress span');
  let galleryIndex=0,touchStart=0;
  const visibleSlides=()=>innerWidth<=720?1:innerWidth<=980?2:3;
  function updateGallery(){const visible=visibleSlides(),max=Math.max(0,slides.length-visible),slideWidth=slides[0].getBoundingClientRect().width+18;galleryIndex=Math.min(galleryIndex,max);track.style.transform=`translateX(-${galleryIndex*slideWidth}px)`;prev.disabled=galleryIndex===0;next.disabled=galleryIndex===max;progress.style.width=`${100/(max+1)}%`;progress.style.transform=`translateX(${galleryIndex*100}%)`}
  prev.addEventListener('click',()=>{galleryIndex=Math.max(0,galleryIndex-1);updateGallery()});next.addEventListener('click',()=>{galleryIndex=Math.min(slides.length-visibleSlides(),galleryIndex+1);updateGallery()});viewport.addEventListener('touchstart',e=>{touchStart=e.touches[0].clientX},{passive:true});viewport.addEventListener('touchend',e=>{const distance=e.changedTouches[0].clientX-touchStart;if(Math.abs(distance)>45){distance<0?next.click():prev.click()}},{passive:true});addEventListener('resize',updateGallery);updateGallery();
}

const calendarStep=document.getElementById('calendar-step');
if(calendarStep){
  const receipt=document.getElementById('receipt-confirm'),grid=document.getElementById('calendar-grid'),monthLabel=document.getElementById('month-label'),timeArea=document.getElementById('time-area'),timeGrid=document.getElementById('time-grid'),selectedDateLabel=document.getElementById('selected-date'),summary=document.getElementById('booking-summary'),summaryValue=document.getElementById('summary-value');
  const today=new Date();today.setHours(0,0,0,0);
  let view=new Date(today.getFullYear(),today.getMonth(),1),selectedDate=null;
  const monthNames=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  const slots=['08:00','09:15','10:30','11:45','13:00','14:15','15:30','16:45','18:00'];
  const formatDate=d=>d.toLocaleDateString('es-UY',{weekday:'long',day:'numeric',month:'long'});
  function renderCalendar(){monthLabel.textContent=`${monthNames[view.getMonth()]} ${view.getFullYear()}`;grid.innerHTML='';const first=(new Date(view.getFullYear(),view.getMonth(),1).getDay()+6)%7,days=new Date(view.getFullYear(),view.getMonth()+1,0).getDate();for(let i=0;i<first;i++){const blank=document.createElement('span');blank.className='calendar-day empty';grid.appendChild(blank)}for(let day=1;day<=days;day++){const date=new Date(view.getFullYear(),view.getMonth(),day),btn=document.createElement('button');btn.type='button';btn.className='calendar-day';btn.textContent=day;btn.disabled=date<today;if(selectedDate&&date.getTime()===selectedDate.getTime())btn.classList.add('selected');btn.addEventListener('click',()=>selectDate(date));grid.appendChild(btn)}}
  function selectDate(date){selectedDate=date;renderCalendar();selectedDateLabel.textContent=formatDate(date);timeGrid.innerHTML='';slots.forEach(time=>{const btn=document.createElement('button');btn.type='button';btn.className='time-slot';btn.textContent=time;btn.addEventListener('click',()=>{timeGrid.querySelectorAll('.time-slot').forEach(x=>x.classList.remove('selected'));btn.classList.add('selected');summaryValue.textContent=`${formatDate(selectedDate)} a las ${time}`;summary.hidden=false});timeGrid.appendChild(btn)});timeArea.hidden=false;summary.hidden=true}
  receipt.addEventListener('change',()=>{calendarStep.classList.toggle('locked',!receipt.checked);calendarStep.setAttribute('aria-disabled',String(!receipt.checked))});
  document.getElementById('prev-month').addEventListener('click',()=>{const previous=new Date(view.getFullYear(),view.getMonth()-1,1);if(previous>=new Date(today.getFullYear(),today.getMonth(),1)){view=previous;renderCalendar()}});
  document.getElementById('next-month').addEventListener('click',()=>{view=new Date(view.getFullYear(),view.getMonth()+1,1);renderCalendar()});
  document.getElementById('confirm-booking').addEventListener('click',()=>alert('El turno elegido es '+summaryValue.textContent+'. Cuando agreguemos el número de WhatsApp, este botón enviará la solicitud automáticamente.'));
  renderCalendar();
}
