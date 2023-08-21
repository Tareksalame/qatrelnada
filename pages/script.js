const men = document.getElementById('men');

let womenList = [
    {womenImg : './women.svg', image : '../images/1.jpg' , replace : 'W234', real:'CAROLIN HERERA GOOD GIRL GONE BAD'},
    {womenImg : './women.svg', image : '../images/2.jpg' , replace : 'W42', real:'CHANEL CHANC EAU FRAICHE'},
    {womenImg : './women.svg', image : '../images/3.jpg' , replace : 'W240', real:'CHANEL CHANC EAU TENDRE'},
    {womenImg : './women.svg', image : '../images/4.jpg' , replace : 'W88', real:'GIORGIO ARMANI SI'},
    {womenImg : './women.svg', image : '../images/5.jpg' , replace : 'W32', real:'CHANEL COCO MADEMOISELLE'},
    {womenImg : './women.svg', image : '../images/6.jpg' , replace : 'W136', real:'CHRISTIAN DIOR HYPNOTIC PAISON'},
    {womenImg : './women.svg', image : '../images/7.jpg' , replace : 'W282', real:'DOLCE & GABBANA THE ONLY ONE'},
    {womenImg : './women.svg', image : '../images/8.jpg' , replace : 'W84', real:'GIORGIO ARMANI ACQUA DI GIOIA'},
    {womenImg : './women.svg', image : '../images/9.jpg' , replace : 'W398', real:'HUGU BOSS BOSS ALIVE'},
    {womenImg : './women.svg', image : '../images/10.jpg' , replace : 'W250', real:'JEAN PAUL SCANDAL'},
    {womenImg : './women.svg', image : '../images/11.jpg' , replace : 'W300', real:'LANCOM IDOLE'},
    {womenImg : './women.svg', image : '../images/12.jpg' , replace : 'W134', real:'LANCOM LA VIE EST BELLE'},
    {womenImg : './women.svg', image : '../images/13.jpg' , replace : 'W180', real:'PACO RABANNE OLYMPEA INTESE'},
    {womenImg : './women.svg', image : '../images/14.jpg' , replace : 'W202', real:'VICTORIAS SECRET BOMBSHELL'},
    {womenImg : './women.svg', image : '../images/15.jpg' , replace : 'W148', real:'PACO RABANNE LADY MILLION'},
    {womenImg : './women.svg', image : '../images/16.jpg' , replace : 'W6', real:'PACO RABANNE OLYMPEA'},
    {womenImg : './women.svg', image : '../images/17.jpg' , replace : 'W154', real:'VERSACE BRIGHT CRYSTAL'},
    {womenImg : './women.svg', image : '../images/18.jpg' , replace : 'W10.012', real:'SWEET SHAIK'},
    {womenImg : './women.svg', image : '../images/19.jpg' , replace : 'W246', real:'YVES SAINT LAURENT BLACK OPIUM'},
    {womenImg : './women.svg', image : '../images/20.1.jpg' , replace : 'W176', real:'YVES SAINT LAURENT ELLE'},
    {womenImg : './women.svg', image : '../images/21.1.jpg' , replace : 'W92', real:'GIVENCHY ANGE OU DEMON LE SECRET'},
    {womenImg : './women.svg', image : '../images/22.1.jpg' , replace : 'W200', real:'SOSPIRO ACCENTO PERFUMES'},
    {womenImg : './women.svg', image : '../images/23.1.jpg' , replace : 'W364', real:'LANCOME TRESOR LA NUIT'},
    {womenImg : './women.svg', image : '../images/24.1.jpg' , replace : 'W66', real:'D&GABBANA ANTHOLOGY L\'IMOERATRICE 3'},
    {womenImg : './women.svg', image : '../images/25.1.jpg' , replace : 'W322', real:'GIORGI ARMANI MY WAY'},
    {womenImg : './women.svg', image : '../images/26.1.jpg' , replace : 'W390', real:'YVES SIANT LAURENT MON PARIS EAU DE PARFUM'},
    {womenImg : './women.svg', image : '../images/29.1.jpg' , replace : 'W304', real:'VICTORIAS SECRET NOIR TEASE'},
    {womenImg : './women.svg', image : '../images/30.1.jpg' , replace : 'W326', real:'CHRISTIAN DIOR JOY BY DIOR'},
    {womenImg : './women.svg', image : '../images/31.1.jpg' , replace : 'W22', real:'CHLOE EAU DE PERFUME'},
    {womenImg : './women.svg', image : '../images/32.1.jpg' , replace : 'W54', real:'CHRISTIAN DIOR J\'ADORE'},
    {womenImg : './women.svg', image : '../images/33.1.jpg' , replace : 'W128', real:'LANCOME TRESOR MIDNIGHT ROSE'},
    {womenImg : './women.svg', image : '../images/34.1.jpg' , replace : 'W242', real:'THIERRY MUGLER ALINE'},
    {womenImg : './women.svg', image : '../images/35.1.jpg' , replace : 'W252', real:'CHRISTIAN DIOR MISS DIOR'},
    {womenImg : './women.svg', image : '../images/36.1.jpg' , replace : 'W24', real:'CAROLINA HERRERA 212 SEXY'},
    {womenImg : './women.svg', image : '../images/37.1.jpg' , replace : 'W232', real:'GUCCI RUSH GUSSI'},
    {womenImg : './women.svg', image : '../images/38.1.jpg' , replace : 'W186', real:'NARCISO RODRIQUEZ'},
    {womenImg : './women.svg', image : '../images/39.1.jpg' , replace : 'W56', real:'CALVIN KLEIN EUPHORIA'},
    {womenImg : './women.svg', image : '../images/40.1.jpg' , replace : 'W64', real:'DOLCE & GABBANA LILGHT BLUE'},
    {womenImg : './women.svg', image : '../images/41.1.jpg' , replace : 'W126', real:'LANCOME HYPNOSE'},
    {womenImg : './women.svg', image : '../images/42.1.jpg' , replace : 'W204', real:'MONTALE VANILLE ABSOLUT'},
    {womenImg : './women.svg', image : '../images/43.1.jpg' , replace : 'W238', real:'HUGO BOSS THE SCENT'},
    {womenImg : './women.svg', image : '../images/44.1.jpg' , replace : 'W66', real:'D & GABBANA ANTHOLOGY'},
    {womenImg : './women.svg', image : '../images/45.1.jpg' , replace : 'W460', real:'JEAN PAUL SCANDAL LE PARFUM'},
    {womenImg : './women.svg', image : '../images/46.1.jpg' , replace : 'W182', real:'RIHANNA REB\'L FLUER'},
    {womenImg : './women.svg', image : '../images/47.1.jpg' , replace : 'W02', real:'PRADA CANDY'},
    {womenImg : './women.svg', image : '../images/48.1.jpg' , replace : 'W70', real:'DOLCE & GABBANA THE ONE'},
    {womenImg : './women.svg', image : '../images/49.1.jpg' , replace : 'W332', real:'D & GABBANA SEXY CHOCLATE'},
    {womenImg : './women.svg', image : '../images/50.1.jpg' , replace : 'W402', real:'LACOSTE L.12.12 POUR ELLE MAGNETIC'},
    {womenImg : './women.svg', image : '../images/51.1.jpg' , replace : 'W454', real:'ELIE SAAB LE PARFUM'},
    {womenImg : './women.svg', image : '../images/52.1.jpg' , replace : 'W294', real:'JEAN PAUL SCANDAL BY NIGHT'},
    {womenImg : './women.svg', image : '../images/53.1.jpg' , replace : 'W168', real:'NINA RICCI PRIMIER JOUR'},
]

let women = document.getElementById('women'); 
const womenFunction = (val)=>
{
    let mainDiv = document.createElement('div');
    let mainPhotoDiv = document.createElement('div');
    let mainPhoto = document.createElement('img');
    let replace = document.createElement('h3');
    let secondPhotoDiv = document.createElement('div')
    let secondPhoto = document.createElement('img');
    let real = document.createElement('h3');
    mainDiv.setAttribute('class','mainWomanDiv');
    mainPhotoDiv.setAttribute('class','mainPhotoDiv')
    mainPhoto.setAttribute('class','mainPhoto');
    replace.setAttribute('class','replaceWomen');
    secondPhotoDiv.setAttribute('class','secondPhotoDiv')
    secondPhoto.setAttribute('class','secondPhoto')
    real.setAttribute('class','real')
    secondPhotoDiv.appendChild(secondPhoto)
    secondPhotoDiv.appendChild(real)
    mainPhotoDiv.appendChild(mainPhoto)
    mainPhotoDiv.appendChild(replace)
    mainDiv.appendChild(mainPhotoDiv)
    mainDiv.appendChild(secondPhotoDiv)
    women.appendChild(mainDiv)
    mainPhoto.src = val.womenImg
    replace.innerHTML = val.replace
    secondPhoto.src = val.image
    real.innerHTML = val.real
}


womenList.forEach((val)=>
{
    womenFunction(val)
})