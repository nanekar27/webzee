      




 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBK6qO8fiBgxQgMWPbeJxJPcqkehpHkLNU",
    authDomain: "smart-auto-webzee.firebaseapp.com",
    databaseURL: "https://smart-auto-webzee-default-rtdb.firebaseio.com/",
    projectId: "smart-auto-webzee",
    storageBucket: "smart-auto-webzee.appspot.com",
    messagingSenderId: "569939200606",
    appId: "1:569939200606:web:9df1dfb94dc420b0d1c2cf",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

$(document).ready(function() {
    var database = firebase.database();
    var Living_1;
    var Living_2;
    var Living_3;
    var Living_4;
    var Led1Status;
    var Led2Status;
    var Led3Status;
    var Led4Status;
    var Kitchen_1;
    var Kitchen_2;
    var Kitchen_3;
    var Bedroom_1;
    var Bedroom_2;
    var Bedroom_3;
    var Bedroom_4;
    database.ref().on("value", function(snap) {
        Living_1 = snap.val().Living_1;
        Living_2 = snap.val().Living_2;
        Living_3 = snap.val().Living_3;
        Living_4 = snap.val().Living_4;
        Led1Status = snap.val().Led1Status;
        Led2Status = snap.val().Led2Status;
        Led3Status = snap.val().Led3Status;
        Led4Status = snap.val().Led4Status;
        Kitchen_1 = snap.val().Kitchen_1;
        Kitchen_2 = snap.val().Kitchen_2;
        Kitchen_3 = snap.val().Kitchen_3;
        Kitchen_4 = snap.val().Kitchen_4;
        Bedroom_1 = snap.val().Bedroom_1;
        Bedroom_2 = snap.val().Bedroom_2;
        Bedroom_3 = snap.val().Bedroom_3;
        Bedroom_4 = snap.val().Bedroom_4;
        if (Living_1 == "1") {
            document.getElementById("unact").style.display = "none";
            document.getElementById("act").style.display = "block";
        } else {
            document.getElementById("unact").style.display = "block";
            document.getElementById("act").style.display = "none";
        }
        if (Living_2 == "1") {
            document.getElementById("unact1").style.display = "none";
            document.getElementById("act1").style.display = "block";
        } else {
            document.getElementById("unact1").style.display = "block";
            document.getElementById("act1").style.display = "none";
        }
        if (Living_3 == "1") {
            document.getElementById("unact2").style.display = "none";
            document.getElementById("act2").style.display = "block";
        } else {
            document.getElementById("unact2").style.display = "block";
            document.getElementById("act2").style.display = "none";
        }
        if (Living_4 == "1") {
            document.getElementById("unact3").style.display = "none";
            document.getElementById("act3").style.display = "block";
        } else {
            document.getElementById("unact3").style.display = "block";
            document.getElementById("act3").style.display = "none";
        }
        if (Led1Status == "1") {
            document.getElementById("unact").style.display = "none";
            document.getElementById("act").style.display = "block";
        } else {
            document.getElementById("unact").style.display = "block";
            document.getElementById("act").style.display = "none";
        }
        if (Led2Status == "1") {
            document.getElementById("unact1").style.display = "none";
            document.getElementById("act1").style.display = "block";
        } else {
            document.getElementById("unact1").style.display = "block";
            document.getElementById("act1").style.display = "none";
        }
        if (Led3Status == "1") {
            document.getElementById("unact2").style.display = "none";
            document.getElementById("act2").style.display = "block";
        } else {
            document.getElementById("unact2").style.display = "block";
            document.getElementById("act2").style.display = "none";
        }
        if (Led4Status == "1") {
            document.getElementById("unact3").style.display = "none";
            document.getElementById("act3").style.display = "block";
        } else {
            document.getElementById("unact3").style.display = "block";
            document.getElementById("act3").style.display = "none";
        }
        if (Kitchen_1 == "1") {
            document.getElementById("unact").style.display = "none";
            document.getElementById("act").style.display = "block";
        } else {
            document.getElementById("unact").style.display = "block";
            document.getElementById("act").style.display = "none";
        }
        if (Kitchen_2 == "1") {
            document.getElementById("unact1").style.display = "none";
            document.getElementById("act1").style.display = "block";
        } else {
            document.getElementById("unact1").style.display = "block";
            document.getElementById("act1").style.display = "none";
        }
        if (Kitchen_3 == "1") {
            document.getElementById("unact2").style.display = "none";
            document.getElementById("act2").style.display = "block";
        } else {
            document.getElementById("unact2").style.display = "block";
            document.getElementById("act2").style.display = "none";
        }
        if (Kitchen_4 == "1") {
            document.getElementById("unact3").style.display = "none";
            document.getElementById("act3").style.display = "block";
        } else {
            document.getElementById("unact3").style.display = "block";
            document.getElementById("act3").style.display = "none";
        }
        if (Bedroom_1 == "1") {
            document.getElementById("unact3").style.display = "none";
            document.getElementById("act3").style.display = "block";
        } else {
            document.getElementById("unact3").style.display = "block";
            document.getElementById("act3").style.display = "none";
        }
        if (Bedroom_2 == "1") {
            document.getElementById("unact3").style.display = "none";
            document.getElementById("act3").style.display = "block";
        } else {
            document.getElementById("unact3").style.display = "block";
            document.getElementById("act3").style.display = "none";
        }
        if (Bedroom_3 == "1") {
            document.getElementById("unact3").style.display = "none";
            document.getElementById("act3").style.display = "block";
        } else {
            document.getElementById("unact3").style.display = "block";
            document.getElementById("act3").style.display = "none";
        }
        if (Bedroom_4 == "1") {
            document.getElementById("unact3").style.display = "none";
            document.getElementById("act3").style.display = "block";
        } else {
            document.getElementById("unact3").style.display = "block";
            document.getElementById("act3").style.display = "none";
        }
       
    });
    const btn = document.querySelector('.talk')
    const content = document.querySelector('.content')
    const toggleButton = document.querySelector('.toggle')
    function speak(text){
        const text_speak = new SpeechSynthesisUtterance(text);

        text_speak.rate = 1;
        text_speak.volume = 1;
        text_speak.pitch = 1;

        window.speechSynthesis.speak(text_speak);
    }



   
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition =  new SpeechRecognition();

    recognition.onresult = (event)=>{
        const currentIndex = event.resultIndex;
        const transcript = event.results[currentIndex][0].transcript;
        content.textContent = transcript;
        takeCommand(transcript.toLowerCase());

    }

    btn.addEventListener('click', ()=>{
        content.textContent = "Listening...."
        recognition.start();
    })


    function takeCommand(message){
        if(message.includes('hey') || message.includes('hello')){
            speak("Hello Sir, How May I Help You?");
        }
        else if(message.includes("open google")){
            window.open("https://google.com", "_blank");
            speak("Opening Google...")
        }
        else if(message.includes("open youtube")){
            window.open("https://youtube.com", "_blank");
            speak("Opening Youtube...")
        }
        else if(message.includes("open facebook")){
            window.open("https://facebook.com", "_blank");
            speak("Opening Facebook...")
        }
    
        else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
            window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
            const finalText = "This is what i found on internet regarding " + message;
            speak(finalText);
      
        }
    
        else if(message.includes('wikipedia')) {
            window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
            const finalText = "This is what i found on wikipedia regarding " + message;
            speak(finalText);
        }
    
        else if(message.includes('time')) {
            const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
            const finalText = time;
            speak(finalText);
        }
    
        else if(message.includes('date')) {
            const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
            const finalText = date;
            speak(finalText);
        }
    
        else if(message.includes('calculator')) {
            window.open('Calculator:///')
            const finalText = "Opening Calculator";
            speak(finalText);
        }
    
    //Living Tv1
        else if(message.includes('on tv')) {
                
            var firebaseRef = firebase.database().ref().child("Living_1");
            if (Living_1 == "0") {
                firebaseRef.set("1");
                Living_1 = "1";
                const finalText = "Turning on TV";
                speak(finalText);
            }
            else
            {
                const finalText = "It is already turned on";
                speak(finalText);
            }
            
        }

        else if(message.includes('off tv')) {
            
            var firebaseRef = firebase.database().ref().child("Living_1");
            if (Living_1 == "1") {
                firebaseRef.set("0");
                Living_1 = "0";
                const finalText = "Turning off TV";
                speak(finalText);
            }
            else
            {
                const finalText = "It is already turned off";
                speak(finalText);
            }
        }
    //living light 1 
        
        else if(message.includes('on living light') || message.includes('turn on living light') || message.includes('one living light') || message.includes('on light 1') || message.includes('turn on light one')) {
                
            var firebaseRef = firebase.database().ref().child("Living_2");
            if (Living_2 == "0") {
                firebaseRef.set("1");
                Living_2 = "1";
                const finalText = "Turning on living light";
                speak(finalText);
            }
            else
            {
                const finalText = "It is already turned on";
                speak(finalText);
            }
            
        }

        else if(message.includes('off living light') || message.includes('turn off living light') || message.includes('off living light') || message.includes('off light 1') || message.includes('turn off light one')) {
            
            var firebaseRef = firebase.database().ref().child("Living_2");
            if (Living_2 == "1") {
                firebaseRef.set("0");
                Living_2 = "0";
                const finalText = "Turning off living light";
                speak(finalText);
            }
            else
            {
                const finalText = "It is already turned off";
                speak(finalText);
            }
        }
    // living ac1 
        else if(message.includes('on living ac') || message.includes(' on living room ac') || message.includes('one living ac') || message.includes('on ac 1') || message.includes('turn on ac one')) {
                
            var firebaseRef = firebase.database().ref().child("Living_3");
            if (Living_3 == "0") {
                firebaseRef.set("1");
                Living_3 = "1";
                const finalText = "Turning on living rooms ac";
                speak(finalText);
            }
            else
            {
                const finalText = "It is already turned on";
                speak(finalText);
            }
            
        }

        else if(message.includes('off living light') || message.includes('turn off living room ac') || message.includes('off living ac') || message.includes('off ac 1') || message.includes('turn off ac one')) {
            
            var firebaseRef = firebase.database().ref().child("Living_3");
            if (Living_3 == "1") {
                firebaseRef.set("0");
                Living_3 = "0";
                const finalText = "Turning off living rooms ac";
                speak(finalText);
            }
            else
            {
                const finalText = "It is already turned off";
                speak(finalText);
            }
        }
    // living fan '4'
        
    else if(message.includes('on living fan') || message.includes(' on living room fan') || message.includes('one living fan') || message.includes('on fan 1') || message.includes('turn on fan one')) {
                
        var firebaseRef = firebase.database().ref().child("Living_4");
        if (Living_4 == "0") {
            firebaseRef.set("1");
            Living_4 = "1";
            const finalText = "Turning on living rooms fan";
            speak(finalText);
        }
        else
        {
            const finalText = "It is already turned on";
            speak(finalText);
        }
        
    }

    else if(message.includes('off living fan') || message.includes('turn off living room fan') || message.includes('off living fan') || message.includes('off fan 1') || message.includes('turn off fan one')) {
        
        var firebaseRef = firebase.database().ref().child("Living_4");
        if (Living_4 == "1") {
            firebaseRef.set("0");
            Living_4 = "0";
            const finalText = "Turning off living rooms fan";
            speak(finalText);
        }
        else
        {
            const finalText = "It is already turned off";
            speak(finalText);
        }
    }
        
    //kitchen light 2
        
        else if(message.includes('on kitchen light') || message.includes('turn on kitchen light') || message.includes('one kitchen light') || message.includes('on light 2') || message.includes('turn on light two')) {
                    
            var firebaseRef = firebase.database().ref().child("Kitchen_1");
            if (Kitchen_1 == "0") {
                firebaseRef.set("1");
                Kitchen_1 = "1";
                const finalText = "Turning on kitchen light";
                speak(finalText);
            }
            else
            {
                const finalText = "It is already turned on";
                speak(finalText);
            }
            
        }

        else if(message.includes('off kitchen light') || message.includes('turn off kitchen light') || message.includes('off kitchen light') || message.includes('off light 2') || message.includes('turn off light two')) {
            
            var firebaseRef = firebase.database().ref().child("Kitchen_1");
            if (Kitchen_1 == "1") {
                firebaseRef.set("0");
                Kitchen_1 = "0";
                const finalText = "Turning off kitchen light";
                speak(finalText);
            }
            else
            {
                const finalText = "It is already turned off";
                speak(finalText);
            }

        }

       //Kitchen fan 1

        else if(message.includes('on kitchen exhaust') || message.includes('turn on kitchen exhaust') || message.includes('one kitchen exhaust') || message.includes('on exhaust') || message.includes('turn on exhaust')) {
                    
                    var firebaseRef = firebase.database().ref().child("Kitchen_2");
                    if (Kitchen_2 == "0") {
                        firebaseRef.set("1");
                        Kitchen_2 = "1";
                        const finalText = "Turning on kitchen exhaust";
                        speak(finalText);
                    }
                    else
                    {
                        const finalText = "It is already turned on";
                        speak(finalText);
                    }
                    
                }
        
                else if(message.includes('off kitchen exhaust') || message.includes('turn off kitchen exhaust') || message.includes('off kitchen exhaust') || message.includes('off exhaust') || message.includes('turn off exhaust')) {
                    
                    var firebaseRef = firebase.database().ref().child("Kitchen_2");
                    if (Kitchen_2 == "1") {
                        firebaseRef.set("0");
                        Kitchen_2 = "0";
                        const finalText = "Turning off kitchen exhaust";
                        speak(finalText);
                    }
                    else
                    {
                        const finalText = "It is already turned off";
                        speak(finalText);
                    }
        
                }

            // kitchen oven    
                else if(message.includes('on kitchen oven') || (message.includes('on oven') || message.includes('turn on kitchen oven') || message.includes('one kitchen oven') || message.includes('on oven 2') || message.includes('turn on oven two'))) {
                    
                    var firebaseRef = firebase.database().ref().child("Kitchen_3");
                    if (Kitchen_3 == "0") {
                        firebaseRef.set("1");
                        Kitchen_3 = "1";
                        const finalText = "Turning on kitchen oven";
                        speak(finalText);
                    }
                    else
                    {
                        const finalText = "It is already turned on";
                        speak(finalText);
                    }
                    
                }
        
                else if(message.includes('off kitchen oven') ||(message.includes('off oven') || message.includes('turn off kitchen oven') || message.includes('off kitchen oven') || message.includes('off oven 2') || message.includes('turn off oven two'))) {
                    
                    var firebaseRef = firebase.database().ref().child("Kitchen_3");
                    if (Kitchen_3 == "1") {
                        firebaseRef.set("0");
                        Kitchen_3 = "0";
                        const finalText = "Turning off kitchen oven";
                        speak(finalText);
                    }
                    else
                    {
                        const finalText = "It is already turned off";
                        speak(finalText);
                    }
                }

            //kitchen fridgh
                
            else if(message.includes('on kitchen refrigerator') || (message.includes('on refrigerator') || message.includes('turn on kitchen refrigerator') || message.includes('one kitchen refrigerator') || message.includes('on refrigerator') || message.includes('turn on refrigerator'))) {
                    
                var firebaseRef = firebase.database().ref().child("Kitchen_4");
                if (Kitchen_4 == "0") {
                    firebaseRef.set("1");
                    Kitchen_4 = "1";
                    const finalText = "Turning on kitchen refrigerator";
                    speak(finalText);
                }
                else
                {
                    const finalText = "It is already turned on";
                    speak(finalText);
                }
                
            }
    
            else if(message.includes('off kitchen refrigerator') ||(message.includes('off refrigerator') || message.includes('turn off kitchen refrigerator') || message.includes('off kitchen refrigerator') || message.includes('off refrigerator') || message.includes('turn off refrigerator'))) {
                
                var firebaseRef = firebase.database().ref().child("Kitchen_4");
                if (Kitchen_4 == "1") {
                    firebaseRef.set("0");
                    Kitchen_4 = "0";
                    const finalText = "Turning off kitchen refrigerator";
                    speak(finalText);
                }
                else
                {
                    const finalText = "It is already turned off";
                    speak(finalText);
                }
            }
                


                //Bedroom light3

                else if(message.includes('on bedroom light') || message.includes('turn on bedroom light') || message.includes('on bedroom light') || message.includes('on light 3') || message.includes('turn on light three')) {
                    
                    var firebaseRef = firebase.database().ref().child("Bedroom_1");
                    if (Bedroom_1 == "0") {
                        firebaseRef.set("1");
                        Bedroom_1 = "1";
                        const finalText = "Turning on Bedroom light";
                        speak(finalText);
                    }
                    else
                    {
                        const finalText = "It is already turned on";
                        speak(finalText);
                    }
                    
                }
        
                else if(message.includes('off bedroom light') || message.includes('turn off bedroom light') || message.includes('off bedroom light') || message.includes('off light 3') || message.includes('turn off light three')) {
                    
                    var firebaseRef = firebase.database().ref().child("Bedroom_1");
                    if (Bedroom_1 == "1") {
                        firebaseRef.set("0");
                        Bedroom_1 = "0";
                        const finalText = "Turning off Bedroom light";
                        speak(finalText);
                    }
                    else
                    {
                        const finalText = "It is already turned off";
                        speak(finalText);
                    }
                }

           



            // Bedroom Ac2    
                else if(message.includes('on bedroom ac') || message.includes('turn on bedroom ac') || message.includes('one bedroom ac') || message.includes('on ac 2') || message.includes('turn on ac two')) {
                    
                    var firebaseRef = firebase.database().ref().child("Bedroom_2");
                    if (Bedroom_2 == "0") {
                        firebaseRef.set("1");
                        Bedroom_2 = "1";
                        const finalText = "Turning on Bedroom Ac";
                        speak(finalText);
                    }
                    else
                    {
                        const finalText = "It is already turned on";
                        speak(finalText);
                    }
                    
                }
        
                else if(message.includes('off bedroom ac') || message.includes('turn off bedroom ac') || message.includes('off bedroom ac') || message.includes('off ac 2') || message.includes('turn off ac two')) {
                    
                    var firebaseRef = firebase.database().ref().child("Bedroom_2");
                    if (Bedroom_2 == "1") {
                        firebaseRef.set("0");
                        Bedroom_2 = "0";
                        const finalText = "Turning off Bedroom Ac";
                        speak(finalText);
                    }
                    else
                    {
                        const finalText = "It is already turned off";
                        speak(finalText);
                    }
                }
            
            // Bedroom lamp   
            else if(message.includes('on bedroom lamp') || message.includes('turn on bedroom lamp') || message.includes('one bedroom lamp') || message.includes('on lamp') || message.includes('turn on lamp')) {
                    
                var firebaseRef = firebase.database().ref().child("Bedroom_3");
                if (Bedroom_3 == "0") {
                    firebaseRef.set("1");
                    Bedroom_3 = "1";
                    const finalText = "Turning on Bedroom lamp";
                    speak(finalText);
                }
                else
                {
                    const finalText = "It is already turned on";
                    speak(finalText);
                }
                
            }
    
            else if(message.includes('off bedroom lamp') || message.includes('turn off bedroom lamp') || message.includes('off bedroom lamp') || message.includes('off lamp') || message.includes('turn off lamp')) {
                
                var firebaseRef = firebase.database().ref().child("Bedroom_3");
                if (Bedroom_3 == "1") {
                    firebaseRef.set("0");
                    Bedroom_3 = "0";
                    const finalText = "Turning off Bedroom lamp";
                    speak(finalText);
                }
                else
                {
                    const finalText = "It is already turned off";
                    speak(finalText);
                }
            }

            else if(message.includes('on bedroom fan') || message.includes('turn on bedroom fan') || message.includes('one bedroom fan') || message.includes('on fan 3') || message.includes('turn on fan three')) {
                    
                var firebaseRef = firebase.database().ref().child("Bedroom_4");
                if (Bedroom_4 == "0") {
                    firebaseRef.set("1");
                    Bedroom_4 = "1";
                    const finalText = "Turning on Bedroom Fan";
                    speak(finalText);
                }
                else
                {
                    const finalText = "It is already turned on";
                    speak(finalText);
                }
                
            }
    
            else if(message.includes('off bedroom fan') || message.includes('turn off bedroom fan') || message.includes('off bedroom fan') || message.includes('off fan three') || message.includes('turn off fan three')) {
                
                var firebaseRef = firebase.database().ref().child("Bedroom_4");
                if (Bedroom_4 == "1") {
                    firebaseRef.set("0");
                    Bedroom_4 = "0";
                    const finalText = "Turning off Bedroom pc";
                    speak(finalText);
                }
                else
                {
                    const finalText = "It is already turned off";
                    speak(finalText);
                }
            }


            




            //plug1
            else if(message.includes('on plug 1') || message.includes('turn on plug 1') || message.includes('on plug 1') || message.includes('on plug one') || message.includes('turn on plug one')) {
                    
                    var firebaseRef = firebase.database().ref().child("Led1Status");
                    if (Led1Status == "0") {
                        firebaseRef.set("1");
                        Led1Status = "1";
                        const finalText = "Turning on plug one";
                        speak(finalText);
                    }
                    else
                    {
                        const finalText = "It is already turned on";
                        speak(finalText);
                    }
                    
                }
        
                else if(message.includes('off plug 1') || message.includes('turn off plug 1') || message.includes('off plug 1') || message.includes('off plug one') || message.includes('turn off plug one')) {
                    
                    var firebaseRef = firebase.database().ref().child("Led1Status");
                    if (Led1Status == "1") {
                        firebaseRef.set("0");
                        Led1Status = "0";
                        const finalText = "Turning off plug one";
                        speak(finalText);
                    }
                    else
                    {
                        const finalText = "It is already turned off";
                        speak(finalText);
                    }
                }


            //plug2    
            else if(message.includes('on plug 2') || message.includes('turn on plug 2') || message.includes('on plug 2') || message.includes('on plug two') || message.includes('turn on plug two')) {
                    
                var firebaseRef = firebase.database().ref().child("Led2Status");
                if (Led2Status == "0") {
                    firebaseRef.set("1");
                    Led2Status = "1";
                    const finalText = "Turning on plug two";
                    speak(finalText);
                }
                else
                {
                    const finalText = "It is already turned on";
                    speak(finalText);
                }
                
            }
    
            else if(message.includes('off plug 2') || message.includes('turn off plug 2') || message.includes('off plug 2') || message.includes('off plug two') || message.includes('turn off plug two')) {
                
                var firebaseRef = firebase.database().ref().child("Led2Status");
                if (Led2Status == "1") {
                    firebaseRef.set("0");
                    Led2Status = "0";
                    const finalText = "Turning off plug two";
                    speak(finalText);
                }
                else
                {
                    const finalText = "It is already turned off";
                    speak(finalText);
                }
            }

            //plug3   
            else if(message.includes('on plug 3') || message.includes('turn on plug 3') || message.includes('on plug 3') || message.includes('on plug three') || message.includes('turn on plug three')) {
                    
                var firebaseRef = firebase.database().ref().child("Led3Status");
                if (Led3Status == "0") {
                    firebaseRef.set("1");
                    Led3Status = "1";
                    const finalText = "Turning on plug three";
                    speak(finalText);
                }
                else
                {
                    const finalText = "It is already turned on";
                    speak(finalText);
                }
                
            }
    
            else if(message.includes('off plug 3') || message.includes('turn off plug 3') || message.includes('off plug 3') || message.includes('off plug three') || message.includes('turn off plug three')) {
                
                var firebaseRef = firebase.database().ref().child("Led3Status");
                if (Led3Status == "1") {
                    firebaseRef.set("0");
                    Led3Status = "0";
                    const finalText = "Turning off plug three";
                    speak(finalText);
                }
                else
                {
                    const finalText = "It is already turned off";
                    speak(finalText);
                }
            }
            //plug 4    
            else if(message.includes('on plug 4') || message.includes('turn on plug 4') || message.includes('on plug 4') || message.includes('on plug four') || message.includes('turn on plug four')) {
                    
                var firebaseRef = firebase.database().ref().child("Led4Status");
                if (Led4Status == "0") {
                    firebaseRef.set("1");
                    Led4Status = "1";
                    const finalText = "Turning on plug four";
                    speak(finalText);
                }
                else
                {
                    const finalText = "It is already turned on";
                    speak(finalText);
                }
                
            }
    
            else if(message.includes('off plug 4') || message.includes('turn off plug 4') || message.includes('off plug 4') || message.includes('off plug four') || message.includes('turn off plug four')) {
                
                var firebaseRef = firebase.database().ref().child("Led4Status");
                if (Led4Status == "1") {
                    firebaseRef.set("0");
                    Led4Status = "0";
                    const finalText = "Turning off plug four";
                    speak(finalText);
                }
                else
                {
                    const finalText = "It is already turned off";
                    speak(finalText);
                }
            }
        // else {
        //     window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        //     const finalText = "I found some information for " + message + " on google";
        //     speak(finalText);
        // }
    };
});