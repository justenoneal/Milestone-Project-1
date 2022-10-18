
//elements hidden on page load
function hideAll () {
    document.querySelector('#stat1').hidden = true;
    document.querySelector('#stat2').hidden = true;
    document.querySelector('#stat3').hidden = true;
    document.querySelector('#shieldstat1').hidden = true;
    document.querySelector('#shieldstat2').hidden = true;
    document.querySelector('#shieldstat3').hidden = true;
    document.querySelector('#playerHitPoints').hidden = true;
    document.querySelector('#monsterHitPoints').hidden = true;
    document.querySelector('#sword').hidden = true;
    document.querySelector('#swordT').hidden = true;
    document.querySelector('#shield').hidden = true;
    document.querySelector('#shieldT').hidden = true;
    document.querySelector('#hero').hidden = true;
    document.querySelector('#combatHero').hidden = true;
    document.querySelector('#monster').hidden = true;
    document.querySelector('#devil').hidden = true;
    document.querySelector('.gachabutton').hidden = true;
    document.querySelector('.nextrollbutton').hidden = true;
    document.querySelector('.gachabutton2').hidden = true;
    document.querySelector('.nextbutton').hidden = true;
    document.querySelector('.nextbutton2').hidden = true;
    document.querySelector('.nextbutton3').hidden = true;
    document.querySelector('.returnToStart').hidden = true;
    document.querySelector('.fight').hidden = true;
    document.querySelector('.finalBattle').hidden = true;
    document.querySelector('#combatHero').hidden = true;
    document.querySelector('#monster').hidden = true;
    document.querySelector('h1').hidden = true;
    document.querySelector('h2').hidden = true;
    document.querySelector('.startbutton').hidden = true;
    document.querySelector('#gameOver').hidden = true;
    document.querySelector('#victory').hidden = true;
}

function titlePage () {
    hideAll()
    document.querySelector('h1').hidden = false;
    document.querySelector('h2').hidden = false;
    document.querySelector('.startbutton').hidden = false;
    document.querySelector("#game-window").style.background = 'linear-gradient(220.55deg, #7CF7FF 0%, #4B73FF 100%)';
}

function setMonsterStats () {
    let hp = document.querySelector('#monsterHitPoints');
    let attack = document.querySelector('#monsterAttackPower');
    let defense = document.querySelector('#monsterDefense');
    hp.dataset.monsterHP = 500 + Math.floor(Math.random() * 100) * 5;
    attack.dataset.monsterAP = parseInt(200);
    defense.dataset.monsterDef = 1 + Math.floor(Math.random() * 100);
    document.getElementById('monsterHitPoints').innerHTML = `HP: ${hp.dataset.monsterHP}`;
    console.log(`monster hp: ${hp.dataset.monsterHP}`);
    console.log(`monster AP: ${attack.dataset.monsterAP}`);
    console.log(`monster def: ${defense.dataset.monsterDef}`);
}

function setBossStats () {
    let hp = document.querySelector('#monsterHitPoints');
    let attack = document.querySelector('#monsterAttackPower');
    let defense = document.querySelector('#monsterDefense');
    hp.dataset.monsterHP = 999 + Math.floor(Math.random() * 100) * 9;
    attack.dataset.monsterAP = parseInt(222);
    defense.dataset.monsterDef = 1 + Math.floor(Math.random() * 100);
    document.getElementById('monsterHitPoints').innerHTML = `HP: ${hp.dataset.monsterHP}`;
    console.log(`monster hp: ${hp.dataset.monsterHP}`);
    console.log(`monster AP: ${attack.dataset.monsterAP}`);
    console.log(`monster def: ${defense.dataset.monsterDef}`);
}

function setPlayerHP () {
    let durability = document.querySelector('#shieldstat1');
    let hp = document.querySelector('#playerHitPoints');
    hp.dataset.playerHP = parseInt(durability.dataset.shieldstat1) + 500;
    console.log(hp.dataset.playerHP);
    document.getElementById('playerHitPoints').innerHTML = `HP: ${hp.dataset.playerHP}`;
}

function damageToMonster () {
    let hp = document.querySelector('#monsterHitPoints');
    let playerSharp = document.querySelector('#stat1');
    let playerWeight = document.querySelector('#stat2');
    let playerPen = document.querySelector('#stat3');
    let defense = document.querySelector('#monsterDefense');
    console.log(`player sharpness: ${playerSharp.dataset.swordtest}`);
    console.log(`player weight: ${playerWeight.dataset.swordtest2}`);
    console.log(`player penetration ${playerPen.dataset.swordtest3}`);
    let mDR = parseInt(defense.dataset.monsterDef) + 20 - parseInt(playerPen.dataset.swordtest3);
    if(mDR < 0) {
        mDR = 0;
    }
    let playerAtkP = (parseInt(playerSharp.dataset.swordtest) * parseInt(playerWeight.dataset.swordtest2)/50 + 1000);
    console.log(`player attack power: ${playerAtkP}`);
    console.log(`monster defense - player's penetration: ${mDR}`)
    let mhp = parseInt(parseInt(hp.dataset.monsterHP) + mDR - (playerAtkP));
    hp.dataset.monsterHP = mhp;
    //When player hp hits 0 it's game over so monster hp shouldn't be tested.
    //Since it doesn't affect the game much a test will be implemented later.
    if (mhp <= 0) {
        hp.innerHTML = `Defeated`;
        document.querySelector('.nextbutton2').hidden = false;
        document.querySelector('.fight').hidden = true;
    }
    else {
    hp.innerHTML =`HP: ${mhp}`;
    }
}

function damageToBoss () {
    let hp = document.querySelector('#monsterHitPoints');
    let playerSharp = document.querySelector('#stat1');
    let playerWeight = document.querySelector('#stat2');
    let playerPen = document.querySelector('#stat3');
    let defense = document.querySelector('#monsterDefense');
    console.log(`player sharpness: ${playerSharp.dataset.swordtest}`);
    console.log(`player weight: ${playerWeight.dataset.swordtest2}`);
    console.log(`player penetration ${playerPen.dataset.swordtest3}`);
    let mDR = parseInt(defense.dataset.monsterDef) + 20 - parseInt(playerPen.dataset.swordtest3);
    if(mDR < 0) {
        mDR = 0;
    }
    let playerAtkP = (parseInt(playerSharp.dataset.swordtest) * parseInt(playerWeight.dataset.swordtest2)/50 + 1000);
    console.log(`player attack power: ${playerAtkP}`);
    console.log(`monster defense - player's penetration: ${mDR}`)
    let mhp = parseInt(parseInt(hp.dataset.monsterHP) + mDR - (playerAtkP));
    hp.dataset.monsterHP = mhp;
    //When player hp hits 0 it's game over so monster hp shouldn't be tested.
    //Since it doesn't affect the game much a test will be implemented later.
    if (mhp <= 0) {
        hp.innerHTML = `Defeated`;
        document.querySelector('.finalBattle').hidden = true;
        setTimeout(hideAll, 2000);
        setTimeout(() => {
            document.querySelector('#victory').hidden = false;
        }, 2000);
        setTimeout(()=> {
            document.getElementById('stat1').innerHTML = '?';
            document.getElementById('stat2').innerHTML = '?';
            document.getElementById('stat3').innerHTML = '?';
            document.getElementById('shieldstat1').innerHTML = '?';
            document.getElementById('shieldstat2').innerHTML = '?';
            document.getElementById('shieldstat3').innerHTML = '?';
            document.querySelector('.returnToStart').hidden = false;
        }, 4000)
    }   
    else {
    hp.innerHTML =`HP: ${mhp}`;
    }
}

function damageToPlayer () {
    let hp = document.querySelector('#playerHitPoints');
    console.log(`player's hp: ${hp.dataset.playerHP}`);
    weight = document.querySelector('#shieldstat2');
    size = document.querySelector('#shieldstat3');
    mAP = document.querySelector('#monsterAttackPower');
    console.log(`shield weight: ${weight.dataset.shieldstat2}`);
    console.log(`shield size: ${size.dataset.shieldstat3}`);
    pDR = parseInt(weight.dataset.shieldstat2) + parseInt(size.dataset.shieldstat3);
    console.log(pDR);
    let damage = parseInt(mAP.dataset.monsterAP) - pDR;
    if(damage < 0) {
        damage = 0;
    }
    let pHP = parseInt(parseInt(hp.dataset.playerHP) - parseInt(damage/2));
    console.log(`player hp - damage: ${pHP}`);
    hp.dataset.playerHP = pHP;
    hp.innerHTML =`HP: ${pHP}`;
    if (pHP <= 0) {
        hp.innerHTML=`Defeated`;
        document.querySelector('.fight').hidden = true;
        document.querySelector('.finalBattle').hidden = true;
        setTimeout(hideAll, 2000);
        setTimeout(() => {
            document.querySelector('#gameOver').hidden = false;
        }, 2000);
        setTimeout(()=> {
            hideAll();
            document.getElementById('stat1').innerHTML = '?';
            document.getElementById('stat2').innerHTML = '?';
            document.getElementById('stat3').innerHTML = '?';
            document.getElementById('shieldstat1').innerHTML = '?';
            document.getElementById('shieldstat2').innerHTML = '?';
            document.getElementById('shieldstat3').innerHTML = '?';
            titlePage();           
        }, 4000)
    }
}

function rollSwordValues () {
    setTimeout(() => {
        let sval1 = Math.floor(Math.random() * 100);
        document.getElementById('stat1').innerHTML = sval1;
        let test1 = document.querySelector("#stat1");
        test1.dataset.swordtest = sval1;
    }, 100);

    setTimeout(() => {
        let sval2 = Math.floor(Math.random() * 100);
        document.getElementById('stat2').innerHTML = sval2;
        let test2 = document.querySelector("#stat2");
        test2.dataset.swordtest2 = sval2;
    }, 150);

    setTimeout(() => {
        let sval3 = Math.floor(Math.random() * 100);
        document.getElementById('stat3').innerHTML = sval3;
        let test3 = document.querySelector("#stat3");
        test3.dataset.swordtest3 = sval3;
    }, 200);

    setTimeout(() => {
        document.querySelector('#swordT').hidden = false;
    }, 250);
    document.querySelector('.gachabutton').hidden = true;
    document.querySelector('.nextrollbutton').hidden = false;
}

function rollShieldValues () {
        setTimeout(() => {
        let s1 = Math.floor(Math.random() * 100);
        document.getElementById('shieldstat1').innerHTML = s1;
        let s1storage = document.querySelector("#shieldstat1");
        s1storage.dataset.shieldstat1 = s1;
    }, 100);

    setTimeout(() => {
        let s2 = Math.floor(Math.random() * 100);
        document.getElementById('shieldstat2').innerHTML = s2;
        let s2storage = document.querySelector("#shieldstat2");
        s2storage.dataset.shieldstat2 = s2;
    }, 150);

    setTimeout(() => {
        let s3 = Math.floor(Math.random() * 100);
        document.getElementById('shieldstat3').innerHTML = s3;
        let s3storage = document.querySelector("#shieldstat3");
        s3storage.dataset.shieldstat3 = s3;
    }, 200);

    setTimeout(() => {
        document.querySelector('#shieldT').hidden = false; 
    }, 250);
   
    document.querySelector('.nextbutton').hidden = false;
    //rollbtn2 is also defined in the setButtons function
    const rollbtn2 = document.querySelector('.gachabutton2');
    rollbtn2.removeEventListener('click', rollShieldValues, false);
    setPlayerHP();
}

function nextRoll () {
    document.querySelector('#stat2').hidden = true;
    document.querySelector('#stat3').hidden = true;
    document.querySelector('#sword').hidden = true;
    document.querySelector('#stat1').hidden = true;
    document.querySelector('.nextrollbutton').hidden = true;
    document.querySelector('#shield').hidden = false;
    document.querySelector('#shieldstat1').hidden = false;
    document.querySelector('#shieldstat2').hidden = false;
    document.querySelector('#shieldstat3').hidden = false;
    document.querySelector('.gachabutton2').hidden = false;

}

function btnMouseover (name, colorOver, colorOut) {
    name.addEventListener('mouseover', (e) => {
        e.target.style.color = colorOver;
    });
    name.addEventListener('mouseout', (e) => {
        e.target.style.color = colorOut;
    });
}

function setButtons () {
    const rollbtn = document.querySelector('.gachabutton');
    rollbtn.addEventListener('click', rollSwordValues);
    btnMouseover(rollbtn, 'rgb(74, 85, 208)', 'black');

    const nextRollBtn = document.querySelector('.nextrollbutton');
    nextRollBtn.addEventListener('click', nextRoll);
    btnMouseover(nextRollBtn, 'rgb(74, 85, 208)', 'black');
    
    const rollbtn2 = document.querySelector('.gachabutton2');
    rollbtn2.addEventListener('click', rollShieldValues);
    btnMouseover(rollbtn2, 'rgb(74, 85, 208)', 'black');
    
    const fightBtn = document.querySelector('.fight');
    fightBtn.addEventListener('click', damageToMonster);
    fightBtn.addEventListener('click', damageToPlayer);
    btnMouseover(fightBtn, 'white','rgb(255, 55, 0)' );

    const nextbtn = document.querySelector('.nextbutton');
    btnMouseover(nextbtn, 'rgb(74, 85, 208)', 'black');
    nextbtn.addEventListener('click', ()=>{
        //The event listener on rollbtn2 was removed in rollShieldValues
        //to prevent players from rerolling shield stats freely till nextbtn is clicked.
        rollbtn2.addEventListener('click', rollShieldValues);
        document.querySelector("#game-window").style.background = 'black';
        hideAll()
        document.querySelector('#combatHero').hidden = false;
        document.querySelector('#monster').hidden = false;
        document.querySelector('#playerHitPoints').hidden = false;
        document.querySelector('#monsterHitPoints').hidden = false;
        document.querySelector('.fight').hidden = false;
        setMonsterStats();
        setPlayerHP();
    })

    const fBattleBtn = document.querySelector('.finalBattle');
    fBattleBtn.addEventListener('click', damageToBoss);
    fBattleBtn.addEventListener('click', damageToPlayer);
    btnMouseover(fBattleBtn, 'white', 'rgb(255, 55, 0)');
    
    const nextbtn2 = document.querySelector('.nextbutton2');
    btnMouseover(nextbtn2, 'rgb(74, 85, 208)', 'white');
    nextbtn2.addEventListener('click', ()=>{
        document.querySelector("#game-window").style.background = 'black';
        hideAll()
        document.querySelector('#combatHero').hidden = false;
        document.querySelector('#devil').hidden = false;
        document.querySelector('#playerHitPoints').hidden = false;
        document.querySelector('#monsterHitPoints').hidden = false;
        document.querySelector('.finalBattle').hidden = false;
        setBossStats();
        setPlayerHP();
    })

    function setStartBtn () {
        const startbtn = document.querySelector('.startbutton');
        btnMouseover(startbtn, 'black', 'white');
        startbtn.addEventListener('click', () => {
            hideAll();
            document.querySelector("#game-window").style.background = 'white';
            document.querySelector('#stat2').hidden = false;
            document.querySelector('#stat3').hidden = false;
            document.querySelector('#sword').hidden = false;
            document.querySelector('#stat1').hidden = false;
            document.querySelector('#hero').hidden = false;
            document.querySelector('.gachabutton').hidden = false;
        });
        }
    setStartBtn();
    
    const rtnStartBtn = document.querySelector('.returnToStart');
    btnMouseover(rtnStartBtn, 'rgb(74, 85, 208)', 'white');
    rtnStartBtn.addEventListener('click', titlePage);
}

hideAll();
titlePage();
setButtons();

