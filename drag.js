let highZ = 1;

class Paper{

    holdingPaper = false;

    prevMouseX=0;
    prevMouseY=0;

    mouseX=0;
    mouseY=0;

    velocityX=0;
    velocityY=0;

    currentPaperX=0;
    currentPaperY=0;

    init(box){
        box.addEventListener('mousedown', (e)=>{
            this.holdingPaper=true;

            box.style.zIndex = highZ;
            highZ++;

            if(e.button==0){
                this.prevMouseX=this.mouseX;
                this.prevMouseY=this.mouseY;
            }
        })

        document.addEventListener('mousemove', (e)=>{

            this.mouseX=e.clientX;
            this.mouseY=e.clientY;

            this.velocityX=this.mouseX - this.prevMouseX;
            this.velocityY=this.mouseY - this.prevMouseY;

            if(this.holdingPaper){
                this.currentPaperX+=this.velocityX;
                this.currentPaperY+=this.velocityY;

                this.prevMouseX=this.mouseX;
                this.prevMouseY=this.mouseY;

                box.style.transform=`translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px)`;
            }
        })

        window.addEventListener('mouseup', (e)=>{
            this.holdingPaper=false;
        })
    }
}

const boxes = Array.from(document.querySelectorAll('.box'));

boxes.forEach(box=>{
    const p = new Paper();
    p.init(box);
})