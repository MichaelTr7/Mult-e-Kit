
window.onload = function(){
  var Top_Bar_Buttons = document.getElementsByClassName('Menu_Buttons');
  for(Navigation_Button_Index = 0; Navigation_Button_Index < Top_Bar_Buttons.length; Navigation_Button_Index++){
      Top_Bar_Buttons[Navigation_Button_Index].addEventListener("click",Navigation_Button_Pressed);
      Top_Bar_Buttons[Navigation_Button_Index].addEventListener("mouseenter",Move_Pointer);
  }

  var Slide_Menu_Button = document.getElementsByClassName('Slide_Menu_Button')[0];
  Slide_Menu_Button.addEventListener("click",Slide_Menu_Button_Update);

  var Top_Bar_Wrapper = document.getElementsByClassName('Top_Bar')[0];
  Top_Bar_Wrapper.addEventListener("mouseenter",Entered_Navigation_Bar);

  var Top_Bar_Wrapper = document.getElementsByClassName('Top_Bar')[0];
  Top_Bar_Wrapper.addEventListener("mouseleave",Left_Navigation_Bar);
  
  document.getElementsByClassName('Unit_Toggle_Buttons')[0].addEventListener("click",Toggle_Units);
  document.getElementsByClassName('Unit_Toggle_Buttons')[1].addEventListener("click",Toggle_Units);
  document.getElementsByClassName('Button_Labels')[0].addEventListener("mouseenter",Animate_Hovered_Button);
  document.getElementsByClassName('Button_Labels')[1].addEventListener("mouseenter",Animate_Hovered_Button);
  document.getElementsByClassName('Button_Labels')[0].addEventListener("mouseleave",Remove_Hovered_Button_Animation);
  document.getElementsByClassName('Button_Labels')[1].addEventListener("mouseleave",Remove_Hovered_Button_Animation);
  document.getElementsByClassName('Add_Buttons')[0].addEventListener("click",Animate_Clicked_Buttons);
  document.getElementsByClassName('Add_Buttons')[1].addEventListener("click",Animate_Clicked_Buttons);
  
}

function Toggle_Units(){
  var Button_Name = String(this.id);
  var Current_Text = String(this.innerHTML);
  if(Button_Name == "Resistor_Units_Toggle"){
    var Resistor_Unit_Prefixes = ["mΩ","Ω","KΩ","MΩ"];
    var Current_Index = Resistor_Unit_Prefixes.indexOf(Current_Text);
    var Next_Index = (Current_Index+1)%Resistor_Unit_Prefixes.length;
    this.innerHTML =  String(Resistor_Unit_Prefixes[Next_Index]);
  }else{
    var Capacitor_Unit_Prefixes = ["pF","nF","µF","mF","F"];
    var Current_Index = Capacitor_Unit_Prefixes.indexOf(Current_Text);
    var Next_Index = (Current_Index+1)%Capacitor_Unit_Prefixes.length;
    this.innerHTML =  String(Capacitor_Unit_Prefixes[Next_Index]);
  }  
  
  this.classList.remove('Jump_Animation_2');
  void this.offsetWidth;
  this.classList.add('Jump_Animation_2');
}

function Animate_Hovered_Button(){
  this.classList.remove('Slide_Label_Left');
  this.classList.remove('Slide_Label_Right');
  void this.offsetWidth;
  this.classList.add('Slide_Label_Left');
}

function Remove_Hovered_Button_Animation(){
  this.classList.remove('Slide_Label_Left');
  this.classList.remove('Slide_Label_Right'); 
  void this.offsetWidth;
  this.classList.add('Slide_Label_Right'); 
}

function Animate_Clicked_Buttons(){
  this.classList.remove('Jump_Animation_2');
  void this.offsetWidth;
  this.classList.add('Jump_Animation_2');
  var Button_Name = String(this.id);
  if(Button_Name == "Add_Resistor_Button"){
    Add_Resistor_To_List();
  }else{
    Add_Capacitor_To_List();
  }
}

function Add_Resistor_To_List(){
  var Unit_String = String(document.getElementById('Resistor_Units_Toggle').innerHTML);
  var Resistor_Units_Bank = {"mΩ":"-3", "Ω":"0", "KΩ":"3", "MΩ":"6"};
  var Multiplier = 10**parseInt(Resistor_Units_Bank[Unit_String]);
  console.log(Multiplier);
}

function Add_Capacitor_To_List(){
  var Unit_String = String(document.getElementById('Capacitor_Units_Toggle').innerHTML);
  var Capacitor_Units_Bank = {"pF":"-12", "nF":"-9", "µF":"-6", "mF":"-3", "F":"0"};
  var Multiplier = 10**parseInt(Capacitor_Units_Bank[Unit_String]);
  console.log(Multiplier);
}














