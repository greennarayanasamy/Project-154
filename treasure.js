AFRAME.registerComponent("coins",{
    init:function(){
        for (vari=1;i<=10;i++){
            const id=  `coins${i}`;
            const posX=Math.random()*100+ -50;
            const posY=Math.random()*5+ -5;
            const posZ=Math.random()*60+ -40;
            const position={x:posX,y:posY,z:posZ};
            this.createCoins(id,position)
        }
    },
    createCoins: function(id,position){
        const treasureEntity=document.querySelector("#treasureCoinds");
        var coinEl=document.createElement("a-entity");
        
        coinEl.setAttribute("id",id);
        coinEl.setAttribute("position",position);
        
        coinEl.setAttribute("material","color","#ff9100");
        
        coineEl.setAttribute("geometry",{ primitive: "circle",radius: 1 });   
    
        coinEl.setAttribute("animation",{
            property:"rotation",
            to:"0 360 0",
            loop:"true",
            dur:1000
        });
        treasureEntity.appendChild(coinEl);
    }
})