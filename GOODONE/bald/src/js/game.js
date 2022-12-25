

function intro(){
    let e = document.getElementById('cont');
    if (e.style.display === "none") {
        e.style.display = "block";
      } else {
       e.style.display = "none";
      }
}



function talk() {
    const element = document.getElementById("GUI");
    if (element.className == "GUI") {
      element.className = "GUI-dark";
    } else {
      element.className = "GUI";
    }
  }



//___________________________________________



let canvas = document.querySelector('canvas');
let c = canvas.getContext(`2d`);

canvas.width = 1000
canvas.height = 550



c.fillRect(0,0,canvas.width,canvas.height)





















//___________________________________________


class AniPlayer{
    constructor(position, velocity, src, framesMax = 1){
        this.position = position;
        this.width = width;
        this.height = height;
        this.velocity = velocity;
        this.Image = new Image();
        this.Image.src = src;
        this.framesMax = framesMax;
        this.framesCurrent = 0;

    }
    draw(){


        c.drawImage(this.Image, 
            0, 

            //this.framesCurrent * (this.Image.height / (this.framesMax*2)), 
            this.framesCurrent * (this.Image.height/this.framesMax/8),

            this.Image.width,
            

            // height distort
            512/8,
            

            // x-position
            this.position.x,

            // clip top
             this.position.y,
             this.Image.width,
             this.Image.width)


          /*    
        c.strokeStyle = "orange";
        c.strokeRect(this.position.x, this.position.y, this.Image.width, this.Image.height/8);
       
        c.drawImage(this.Image, 100 ,this.framesCurrent * (this.Image.height/this.framesMax),
        this.Image.height/this.framesMax ,
        this.Image.width,this.position.x,this.position.y,
        this.Image.width/this.framesMax, this.Image.height/this.framesMax)
        */
    }

    update(){
        this.draw();
       
        document.getElementById('positioning').innerHTML = this.position.x + ' x ' +this.position.y + ' y';



            if(this.framesCurrent < this.framesMax){
                  this.framesCurrent++;
            }else{
                this.framesCurrent=0;
            }

           
      


    }
}






class Player{
    constructor(position, velocity, src){
        this.position = position;
        this.velocity = velocity;
        this.Image = new Image();
        this.Image.src = src;

    }
    draw(){
        c.drawImage(this.Image, this.position.x,this.position.y)
        
    }

    update(){
        this.draw();
        this.position.x;
        document.getElementById('positioning').innerHTML = this.position.x + ' x ' +this.position.y + ' y';
    }
}











class Sprite{
    constructor(position,src){
        this.position = position
        this.Image = new Image()
        this.Image.src = src

    }

    draw(){
        c.drawImage(this.Image, this.position.x,this.position.y)
    }

    update(){
        this.draw();
    }
}


class Enemy{
    constructor(position,src){
        this.position = position
        this.Image = new Image()
        this.Image.src = src
        this.attackBox = {
            position : this.position,
            width:20,
            height:70
        }

    }

    draw(){
        c.drawImage(this.Image, this.position.x,this.position.y)
        c.fillStyle = 'darkslategray'
        c.fillRect(this.position.x+30,this.position.y-5,this.attackBox.width,this.attackBox.height)
    }

    update(){
        this.draw();
    }
}






//___________________________________________

let sprite5 = new Sprite(
    position={x:0,y:0},
    src='img/plate1.png'
   
   
  )






let sprite1 = new Sprite(
    position={x:-80,y:120},
    src='./img/ship.png'   
  )

let sprite2 = new Sprite(
    position={x:20,y:20},
    src='./img/player2.png'
   
  )
  let sprite3 = new Sprite(
    position={x:600,y:200},
    src='./img/player2.png'
   
  )

  let sprite4 = new Sprite(
    position={x:600,y:100},
    src='./img/door1.gif'
   
   
  )
  
  let enemy1 = new Enemy(
    position={x:2,y:150},
    src='./img/player2.png'
   
  )





let player1 = new Player(
    position={x:310,y:-100},
    velocity={x:0,y:0},
    src = "./img/player1.png"
)

let aniplayer1 = new AniPlayer(
    position={x:500,y:120},
    velocity={x:0,y:0},
    src = "./img/RUN.png",
    width = 64,
    height = 512,
    framesMax = 8
)





 






//___________________________________________

function animate(){
    c.fillStyle = 'slategray'
    c.fillRect(0,0,canvas.width,canvas.height)
    window.requestAnimationFrame(animate);
    //console.log('ROLLING!')




   



    //________________________________________________________

    c.strokeStyle = "orange";
    c.strokeRect(10, 10, 150, 100);



    c.beginPath();
    c.strokeStyle = "black";
    c.moveTo(300,0);
    c.lineTo(1480, 600);
    c.stroke();

    c.beginPath();
    c.strokeStyle = "darkslategray";
    c.moveTo(100,0);
    c.lineTo(0, 600);
    c.stroke();


 //_______________________________
sprite5.update()
player1.update()
sprite1.update()
    /*   player1.update()
   
    sprite2.update()
    sprite3.update()
    sprite4.update()
  
    enemy1.update()
    
    aniplayer1.update()
*/



sprite1.position.x = sprite1.position.x + 0.4
player1.position.y = player1.position.y 
if(player1.position.y < 490){
    player1.position.y = player1.position.y + 0.4;
}



//____________________TIPO 1
    if(player1.position.y == sprite2.position.y && player1.position.x <= 50){

        talk();

        let mssg01 = "- Disculpe, caballero..."
        c.font = "10px 'Press Start 2P', cursive";
        c.fillStyle = 'white'
        c.fillText(mssg01,100, 20);
        document.getElementById('controlMssg').innerHTML="Quita, yonki!";
        
    }   else if  (player1.position.x > 100){
       
        document.getElementById('controlMssg').innerHTML="...";

    }


    //____________________TIPO 2 CABINA
    if(player1.position.y == sprite2.position.y && player1.position.x == 50){

        bso.play();

        let mssg02 = "- Disculpe, caballero..."
        c.font = "10px 'Press Start 2P', cursive";
        c.fillStyle = 'white'
        c.fillText(mssg02,100, 20);
        document.getElementById('controlMssg').innerHTML="HOMBRE ENFADADO: - Aparta, gilipollas!";
        
    }
       //____________________TIPO 3 CENTRAL
       if(player1.position.y == sprite1.position.y && player1.position.x < 230){

        let mssg03 = "- Tiene una monedita, señor?..."
        c.font = "10px 'Press Start 2P', cursive";
        c.fillStyle = 'white'
        c.fillText(mssg03,270, 120);
        document.getElementById('controlMssg').innerHTML="JOVEN ZARRAPASTROSO: -Qué va!...Lo siento, bro...";
        
    }else if  (player1.position.x > 120){
       
        document.getElementById('controlMssg').innerHTML="...";

    }





    let phone = 'CPU 34'
        c.font = "10px 'Press Start 2P', cursive";
        c.fillStyle = 'darkslategray'
        c.fillText(phone,100, 140);

        let exit = 'Mauritius Island, 2714 A.C.'
        c.font = "20px 'Press Start 2P', cursive";
        c.fillStyle = 'black'
        c.fillText(exit,410, 80);














}










animate()

//___________________________________________




let bso = new Audio();
bso.src = './music/hitch_mood.wav';
bso.play();

     

let jump = new Audio();
jump.src = './music/jump.mp3';







//________________CONTROLERS______________

window.addEventListener('keydown',
    (event)=>{
        
        switch(event.key){
            case 'ArrowRight':
                player1.position.x += 10;
                jump.play();
                break;
                
            case 'ArrowLeft':
                player1.position.x -= 10;
                jump.play();
                break;

            case 'ArrowUp':
                player1.position.y -= 10;
                jump.play();
                break;
                    
            case 'ArrowDown':
                player1.position.y += 10;
                jump.play();
                 break;

            case ' ':
                player1.position.y = 10;
                
                  break;
        }
        
        
        console.log(event);
    
    
    }
)