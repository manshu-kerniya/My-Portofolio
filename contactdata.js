//   copy your firebase config informations

    const firebaseConfig = {
        apiKey: "AIzaSyAOaeE-EQAaXh1Srs2yTiYnLbqgI8mKLuo",
        authDomain: "contactform-portofolio.firebaseapp.com",
        databaseURL: "https://contactform-portofolio-default-rtdb.firebaseio.com",
        projectId: "contactform-portofolio",
        storageBucket: "contactform-portofolio.appspot.com",
        messagingSenderId: "419212913362",
        appId: "1:419212913362:web:7c956e89c0fc7b92c89b0b"
      };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var phone = getElementVal("phone");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, phone, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, phone, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      phone: phone,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };