
let div = document.getElementById('div');
let i = document.getElementById('i');
let body = document.getElementById('body')
let dark ;
let post = document.getElementById('post');
let Antpost = document.getElementById('ant-post');
let conteniar = document.getElementById('conteniar');
let cart = document.getElementById('cart');
let totalOutput = document.getElementById('total-output');
let cartTitle = document.getElementById('cart-title');
let yourProduct = document.getElementById('your-product');
let elopen = document.getElementById('open');
let elclose = document.getElementById('close');
let titletotal = document.getElementById('title-totla');
if(localStorage.mood != null){
dark = parseInt(parent.localStorage.mood)
}else{
    dark=1;
}



// moved backgroud


document.addEventListener('mousemove', function(e) {
   let mousex = e.clientX / window.innerWidth;
   let mousey = e.clientY / window.innerHeight;

   div.style.transform = `rotateX(${mousey * 10}deg) rotateY(${mousex * 10}deg)`;
})



// mode dark

function correct(){
 if(dark ==1){
    body.style.backgroundColor = 'white';
    i.style.color = 'black';
    conteniar.style.background = 'rgba(0, 0, 0, 0.19)';
    totalOutput.style.borderColor = 'black';
    cart.style.background = 'rgba(0, 0, 0, 0.19)';

 }else{
     body.style.backgroundColor = 'black';
     i.style.color = 'white';
     conteniar.style.background = 'rgba(255, 255, 255, 0.19)';
     totalOutput.style.borderColor = 'white';
     cart.style.background = 'rgba(255, 255, 255, 0.19)';

 }
 return dark;
}

function darkmode(){
    if(dark ==1){
       dark = 0;
       localStorage.setItem('mood',JSON.stringify(dark))
       correct()
    }else{
        dark = 1;
        localStorage.setItem('mood',JSON.stringify(dark))
        correct()
    }
}
correct()
function Cart(opa,opa2,opa3,poi,poi2,poi3,width){
    elopen.style.opacity = opa2
    elclose.style.opacity = opa3
    elopen.style.pointerEvents = poi2
    elclose.style.pointerEvents = poi3
    cart.style.width = width
    cartTitle.style.opacity = opa
    totalOutput.style.opacity = opa
    titletotal.style.opacity = opa
    yourProduct.style.opacity = opa
    yourProduct.style.pointerEvents = poi
}








// products









let leftclick = document.getElementById('leftclick')
let rightclick = document.getElementById('rightclick')
let p1 = document.getElementById('p1')
let flextitle = document.getElementById('flex-title')
let someplace = document.getElementById('someplace')
let closeplace = document.getElementById('closeplace')
let size = document.getElementById('size')
let s1 = document.getElementById('s1')
let s2 = document.getElementById('s2')
let s3 = document.getElementById('s3')
let s4 = document.getElementById('s4')
let s5 = document.getElementById('s5')
let s6 = document.getElementById('s6')
let s7 = document.getElementById('s7')
let s8 = document.getElementById('s8')
let s9 = document.getElementById('s9')
let s11 = document.getElementById('s11')
let s22 = document.getElementById('s22')
let s33 = document.getElementById('s33')
let s44 = document.getElementById('s44')
let s55 = document.getElementById('s55')
let s66 = document.getElementById('s66')
let s77 = document.getElementById('s77')
let s88 = document.getElementById('s88')
let s99 = document.getElementById('s99')
let toadd = document.getElementById('toadd')
let addtitle = document.getElementById('addtitle')
let addpric = document.getElementById('addpric')
let addimg = document.getElementById('addimg')
let addsize = document.getElementById('addsize')
let pricshow = document.getElementById('price') 
let addinput = document.getElementById('addinput')
let currentIndex = 0;
let j =0 ;

function SwitchimageForward() {
    const images = ['black.png','white.png', 'green.png', 'red.png', 'yellow.png'];
    const names = ['black Nike','white Nike', 'green Nike', 'red Nike', 'yellow Nike'];
    const p1 = document.getElementById('p1');
    p1.style.scale = 0

    j +=1
    if(j >= 5){
      j = 0
    }
    flextitle.style.opacity = '0';
    setTimeout(function(){flextitle.innerHTML = names[j]},300)
    setTimeout(function(){flextitle.style.opacity = '1'},500)

    

    currentIndex = (currentIndex + 1) % images.length;
    setTimeout(function(){p1.src = images[currentIndex];},300)
    setTimeout(function(){p1.style.scale = 1},500)

}

function SwitchimageBackward() {
    const images = [ 'black.png','white.png', 'green.png', 'red.png', 'yellow.png'];
    const names = ['black Nike','white Nike', 'green Nike', 'red Nike', 'yellow Nike'];
    const p1 = document.getElementById('p1');
    p1.style.scale = 0

    j -=1
    if(j < 0){
      j = 4
    }
    flextitle.style.opacity = '0';
    setTimeout(function(){flextitle.innerHTML = names[j]},300)
    setTimeout(function(){flextitle.style.opacity = '1'},500)

    currentIndex = (currentIndex - 1 + images.length) % images.length;
    setTimeout(function(){p1.src = images[currentIndex];},300)
    setTimeout(function(){p1.style.scale = 1},500)
}

function p1in(){
    p1.style.scale = '1.05';
}
function p1out(){
    p1.style.scale = '1';
}

function pickit() {
    leftclick.style.opacity = '0';
    leftclick.style.pointerEvents = 'none';
    rightclick.style.opacity = '0';
    rightclick.style.pointerEvents = 'none';
    this.style.transform = 'translateX(250px) translateY(0px)';
    pricshow.style.opacity = '1';
    pricshow.style.pointerEvents = 'all';
    p1.style.pointerEvents = 'none';
    setTimeout(function () {
        p1.style.transitionDdelay = '200ms';
    }, 100);
    p1.addEventListener('mouseenter', function () {
        p1.style.scale = '1';
    });
    flextitle.style.left = '24%';
    flextitle.style.top = '10%';
    flextitle.style.fontSize = '40px';
    someplace.style.display = 'flex';
    closeplace.style.display = 'flex';
    someplace.style.opacity = '0';
    closeplace.style.opacity = '0';
    setTimeout(function () {
        someplace.style.opacity = '1';
        size.style.display = 'grid';
        closeplace.style.opacity = '1';
    }, 500);
    correctwidth();
}

function correctwidth() {
    var width = window.innerWidth;
    if (width <= 1041) {
        p1.style.transform = 'translateX(50px) translateY(-150px)';
        flextitle.style.left = '50%';
        flextitle.style.top = '55%';
        closeplace.style.right = '45%';
        closeplace.style.transform = 'translateX(220px)';
        someplace.style.left = '20%';
        size.style.display = 'flex';
        size.style.width = 'max-content'
        size.style.top = '70%';
        size.style.left = '50%';
        size.style.transform = 'translateX(-50%)';
    }
}


function closefid(){
    leftclick.style.opacity = '1'
    leftclick.style.pointerEvents = 'all'
    rightclick.style.opacity = '1'
    rightclick.style.pointerEvents = 'all'
    pricshow.style.opacity = '0';
    pricshow.style.pointerEvents = 'none';
    flextitle.style.left = '50%'
    flextitle.style.top = '70%'
    flextitle.style.fontSize = '28px';
    p1.style.transform = 'translateX(20px) translateY(-150px)';
    someplace.style.display = 'none';
    closeplace.style.display = 'none';
    someplace.style.opacity = '0';
    closeplace.style.opacity = '0';
    size.style.display = 'none';
    p1.style.pointerEvents = 'all';
    p1.addEventListener('mouseenter',function(){
        p1.style.scale = '1.05';
    })
    p1.addEventListener('mouseleave',function(){
        p1.style.scale = '1';
    }) 
}
let showsize ;
function chosesize(){
    s1.style.color = 'gray'
    s2.style.color = 'gray'
    s3.style.color = 'gray'
    s4.style.color = 'gray'
    s5.style.color = 'gray'
    s6.style.color = 'gray'
    s7.style.color = 'gray'
    s8.style.color = 'gray'
    s9.style.color = 'gray'
    s1.style.borderColor = 'gray'
    s2.style.borderColor = 'gray'
    s3.style.borderColor = 'gray'
    s4.style.borderColor = 'gray'
    s5.style.borderColor = 'gray'
    s6.style.borderColor = 'gray'
    s7.style.borderColor = 'gray'
    s8.style.borderColor = 'gray'
    s9.style.borderColor = 'gray'
    s1.style.background = 'transparent'
    s2.style.background = 'transparent'
    s3.style.background = 'transparent'
    s4.style.background = 'transparent'
    s5.style.background = 'transparent'
    s6.style.background = 'transparent'
    s7.style.background = 'transparent'
    s8.style.background = 'transparent'
    s9.style.background = 'transparent'
    s1.style.scale = '1'
    s2.style.scale = '1'
    s3.style.scale = '1'
    s4.style.scale = '1'
    s5.style.scale = '1'
    s6.style.scale = '1'
    s7.style.scale = '1'
    s8.style.scale = '1'
    s9.style.scale = '1'
    showsize = this.innerHTML
    localStorage.setItem('showsize',showsize)
    this.style.background = 'black';
    this.style.color = 'white';
    this.style.scale = '1.1';
    someplace.style.pointerEvents ='all'
    someplace.style.opacity ='1'
    someplace.style.background = 'transparent'
    someplace.style.borderColor = 'black'
}

let theaddsize ;
function choseaddsize(){
    s11.style.color = 'gray'
    s22.style.color = 'gray'
    s33.style.color = 'gray'
    s44.style.color = 'gray'
    s55.style.color = 'gray'
    s66.style.color = 'gray'
    s77.style.color = 'gray'
    s88.style.color = 'gray'
    s99.style.color = 'gray'
    s11.style.borderColor = 'gray'
    s22.style.borderColor = 'gray'
    s33.style.borderColor = 'gray'
    s44.style.borderColor = 'gray'
    s55.style.borderColor = 'gray'
    s66.style.borderColor = 'gray'
    s77.style.borderColor = 'gray'
    s88.style.borderColor = 'gray'
    s99.style.borderColor = 'gray'
    s11.style.background = 'transparent'
    s22.style.background = 'transparent'
    s33.style.background = 'transparent'
    s44.style.background = 'transparent'
    s55.style.background = 'transparent'
    s66.style.background = 'transparent'
    s77.style.background = 'transparent'
    s88.style.background = 'transparent'
    s99.style.background = 'transparent'
    s11.style.scale = '1'
    s22.style.scale = '1'
    s33.style.scale = '1'
    s44.style.scale = '1'
    s55.style.scale = '1'
    s66.style.scale = '1'
    s77.style.scale = '1'
    s88.style.scale = '1'
    s99.style.scale = '1'
    theaddsize = this.innerHTML
    localStorage.setItem('size',theaddsize)
    this.style.background = 'black';
    this.style.color = 'white';
    this.style.scale = '1.1';
    addinput.style.background = 'transparent';
    addinput.style.borderColor = 'rgb(0, 0, 0)';
    addinput.style.pointerEvents = 'all';
    addinput.style.color = 'white';
    
}

function divaddclose(){
    toadd.style.bottom = '-105%';
    conteniar.style.pointerEvents = 'all';
    cart.style.pointerEvents = 'all';
}
function divaddoper(){
    toadd.style.bottom = '0%';
    toadd.style.backgroundImage = `linear-gradient(${this.getAttribute('data-back')})`;
    addtitle.innerHTML = this.getAttribute('data-title');
    addpric.innerHTML = this.getAttribute('data-pric');
    addimg.src = this.getAttribute('data-img');
    conteniar.style.pointerEvents = 'none';
    cart.style.pointerEvents = 'none';
}







// cart









yourProduct;
let productincart;
if(localStorage.product != null){
    productincart = JSON.parse(localStorage.product)
    yourProduct.innerHTML = productincart.join('');
}else{
    productincart = [];
}



let imgcart = document.getElementById('imgcart');
let tittlecart = document.getElementById('tittlecart');
let cartsize = document.getElementById('cartsize');
let cartpric = document.getElementById('cartpric');
let carttext = document.getElementById('carttext');
let totalinput = document.getElementById('totalinput');
let yourProduct2 = document.getElementById('your-product2')
let totalinput2 = document.getElementById('totalinput2');
let totalofyou;
let countcart = document.getElementById('countcart')
if(localStorage.pric != null){
    totalofyou = JSON.parse(localStorage.pric)
    totalinput.innerHTML = `${totalofyou} DH`;
}else{
    totalofyou = 0;
}

let priceofone;
function addincart(){
    priceofone = addpric.innerHTML
    let loved = [
        `<div class="your-product">
        <div class="image"><img src="${addimg.src}" alt="photo" id="imgcart"></div>
        <span id="tittlecart" class="title">${addtitle.innerHTML}</span>
        <div id="cartsize" class="sizeincart">${localStorage.size}</div>
        <span id="cartpric" class="pric">${priceofone}</span>
        <i class='bx bx-trash' onclick="delet()"></i>
    </div>`
    ];

    productincart.push(loved)
    localStorage.setItem('product',JSON.stringify(productincart))
    yourProduct.innerHTML = productincart.join('');
    divaddclose()

    totalofyou =totalofyou + parseInt(addpric.innerHTML);
    totalinput.innerHTML = `${totalofyou} DH`;
    localStorage.setItem('pric',JSON.stringify(totalofyou));
    countcart.innerHTML = productincart.length;
    
}

function addfromshow(){
    if(p1.src === 'https://yassine24talbi.github.io/stor/white.png'){
        let priceshowadd = 509;
        priceofone = priceshowadd
        let loved = [
            `<div class="your-product">
            <div class="image"><img src="white.png" alt="photo" id="imgcart"></div>
            <span id="tittlecart" class="title">white Nike</span>
            <div id="cartsize" class="sizeincart">${localStorage.showsize}</div>
            <span id="cartpric" class="pric">${priceofone} DH</span>
            <i class='bx bx-trash' onclick="delet()"></i>
        </div>`
        ]
        productincart.push(loved)
        localStorage.setItem('product',JSON.stringify(productincart))
        yourProduct.innerHTML = productincart.join('');
        localStorage.setItem('priceofone',priceofone)
        
        totalofyou =totalofyou + parseInt(priceshowadd);
        localStorage.setItem('pric',JSON.stringify(totalofyou));
        totalinput.innerHTML = `${totalofyou} DH`;
        countcart.innerHTML = productincart.length;
    }
    else if(p1.src === 'https://yassine24talbi.github.io/stor/black.png'){
        let priceshowadd = 499;
        priceofone = priceshowadd
        let loved = [
            `<div class="your-product">
            <div class="image"><img src="black.png" alt="photo" id="imgcart"></div>
            <span id="tittlecart" class="title">Black Nike</span>
            <div id="cartsize" class="sizeincart">${localStorage.showsize}</div>
            <span id="cartpric" class="pric">${priceofone} DH</span>
            <i class='bx bx-trash' onclick="delet()"></i>
        </div>`
        ]
        productincart.push(loved)
        localStorage.setItem('product',JSON.stringify(productincart))
        yourProduct.innerHTML = productincart.join('');
        localStorage.setItem('priceofone',priceofone)

        totalofyou =totalofyou + parseInt(priceshowadd);
        localStorage.setItem('pric',JSON.stringify(totalofyou));
        totalinput.innerHTML = `${totalofyou} DH`;
        countcart.innerHTML = productincart.length;
    }
    else if(p1.src === 'https://yassine24talbi.github.io/stor/yellow.png'){
        let priceshowadd = 479;
        priceofone = priceshowadd
        let loved = [
            `<div class="your-product">
            <div class="image"><img src="yellow.png" alt="photo" id="imgcart"></div>
            <span id="tittlecart" class="title">yellow Nike</span>
            <div id="cartsize" class="sizeincart">${localStorage.showsize}</div>
            <span id="cartpric" class="pric">${priceofone}DH</span>
            <i class='bx bx-trash' onclick="delet()"></i>
        </div>`
        ]
        productincart.push(loved)
        localStorage.setItem('product',JSON.stringify(productincart))
        yourProduct.innerHTML = productincart.join('');
        localStorage.setItem('priceofone',priceofone)

        totalofyou =totalofyou + parseInt(priceshowadd);
        localStorage.setItem('pric',JSON.stringify(totalofyou));
        totalinput.innerHTML = `${totalofyou} DH`;
        countcart.innerHTML = productincart.length;
    }
    else if(p1.src === 'https://yassine24talbi.github.io/stor/green.png'){
        let priceshowadd = 449;
        priceofone = priceshowadd
        let loved = [
            `<div class="your-product">
            <div class="image"><img src="green.png" alt="photo" id="imgcart"></div>
            <span id="tittlecart" class="title">green Nike</span>
            <div id="cartsize" class="sizeincart">${localStorage.showsize}</div>
            <span id="cartpric" class="pric">${priceofone} DH</span>
            <i class='bx bx-trash' onclick="delet()"></i>
        </div>`
        ]
        productincart.push(loved)
        localStorage.setItem('product',JSON.stringify(productincart))
        yourProduct.innerHTML = productincart.join('');
        localStorage.setItem('priceofone',priceofone)

        totalofyou =totalofyou + parseInt(priceshowadd);
        localStorage.setItem('pric',JSON.stringify(totalofyou));
        totalinput.innerHTML = `${totalofyou} DH`;
        countcart.innerHTML = productincart.length;
    }
    else if(p1.src === 'https://yassine24talbi.github.io/stor/red.png'){
        let priceshowadd = 419;
        priceofone = priceshowadd
        let loved = [
            `<div class="your-product">
            <div class="image"><img src="red.png" alt="photo" id="imgcart"></div>
            <span id="tittlecart" class="title">Red Nike</span>
            <div id="cartsize" class="sizeincart">${localStorage.showsize}</div>
            <span id="cartpric" class="pric">${priceofone} DH</span>
            <i class='bx bx-trash' onclick="delet()"></i>
        </div>`
        ]
        productincart.push(loved)
        localStorage.setItem('product',JSON.stringify(productincart))
        yourProduct.innerHTML = productincart.join('');
        localStorage.setItem('priceofone',priceofone)

        totalofyou =totalofyou + parseInt(priceshowadd);
        localStorage.setItem('pric',JSON.stringify(totalofyou));
        totalinput.innerHTML = `${totalofyou} DH`;
        countcart.innerHTML = productincart.length;
    }else{
        console.log('error')
        console.log(p1.src)
    }

}

cartpric = document.getElementById('cartpric')

function delet(event) { 

    let productDiv = event.target.closest('.your-product');

    let index = Array.from(yourProduct.children).indexOf(productDiv);
    
    let cartpricElement = productDiv.querySelector('.pric');

    totalofyou = localStorage.pric - parseInt(cartpricElement.textContent);

    localStorage.setItem('pric',totalofyou)
    
    totalinput.innerHTML = JSON.parse(localStorage.getItem('pric')) + ' DH';

    productincart.splice(index, 1);

    localStorage.setItem('product', JSON.stringify(productincart));

    yourProduct.innerHTML = productincart.join('');

    if(localStorage.pric == 0){
        yourProduct.innerHTML = `<div id="carttext" style="font-size: 32px;padding: 30px 5px;">Your Cart Is Impty !</div>`
    }
    if(localStorage.getItem('pric').length == 0){
        localStorage.pric = 0;
    }

    countcart.innerHTML = productincart.length;

}

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('bx-trash')) {
        delet(event);
    }
});

if(localStorage.pric == 0){
    yourProduct.innerHTML = `<div id="carttext" style="font-size: 32px;padding: 30px 5px;">Your Cart Is Impty !</div>`;
}


countcart.innerHTML = productincart.length;








// checkout









let therinfo = document.getElementById('therInfo')
let checkoutbutton = document.getElementById('checkout')
let prr = document.getElementsByClassName('your-product')
let makeit = document.getElementById('makeit')


function checkout(){
    conteniar.style.opacity = '0'
    cart.style.opacity = '0'
    therinfo.style.display = 'flex';
    therinfo.style.opacity = '0'
    Cart('0','1','0','none','all','none','80px')
    setTimeout(function(){conteniar.style.display = 'none';cart.style.opacity = '1';makeit.style.display = 'flex';checkoutbutton.style.display = 'none'},300)
    setTimeout(function(){Cart('1','0','0','all','none','none','80%');therinfo.style.opacity = '1'},1200)
    yourProduct.style.width = '30%';
    yourProduct.style.transform = 'translateX(115%)';
    cartTitle.style.position = 'sticky';
    cartTitle.style.top = '20px';  
}
function backstor(){
    Cart('0','1','0','none','all','none','80px')
    therinfo.style.display = 'none';
    yourProduct.style.width = '95%';
    setTimeout(function(){
        conteniar.style.display = 'block';},1200)

    setTimeout(function(){conteniar.style.opacity = '1';cart.style.opacity = '1';},1300)

    setTimeout(function(){
        conteniar.style.display = 'none';
        cart.style.opacity = '0';
        conteniar.style.opacity = '0';
        checkoutbutton.innerHTML = 'checkOut';
        yourProduct.style.transform = 'translateX(0%)';
        makeit.style.display = 'none';
        checkoutbutton.style.display = 'flex';
    },300)
}


document.addEventListener('click',function(){
    if( countcart.innerHTML == 0){
        checkoutbutton.style.pointerEvents = 'none';
        checkoutbutton.style.opacity = '.2';
        makeit.style.pointerEvents = 'none';
        makeit.style.opacity = '.2';
    }else{
        checkoutbutton.style.pointerEvents = 'all';
        checkoutbutton.style.opacity = '1';
        makeit.style.pointerEvents = 'all';
        makeit.style.opacity = '1';
    }
});





// labels of ther info







let full = document.getElementById('full')
let fulllab = document.getElementById('fulllab')
let city = document.getElementById('city')
let citylab = document.getElementById('citylab')
let address = document.getElementById('address')
let addresslab = document.getElementById('addresslab')
let phone = document.getElementById('phone')
let phonelab = document.getElementById('phonelab')


document.addEventListener('click',function(){
    if(full.value != ''){
        fulllab.style.opacity = 0;
    }else{fulllab.style.opacity = .7;}
    if(city.value != ''){
        citylab.style.opacity = 0;
    }else{citylab.style.opacity = .7;}
    if(address.value != ''){
        addresslab.style.opacity = 0;
    }else{addresslab.style.opacity = .7;}
    if(phone.value != ''){
        phonelab.style.opacity = 0;
    }else{phonelab.style.opacity = .7;}
})

let message = document.createElement('message')
therinfo.appendChild(message)
message.style.position = 'absolute';
message.style.width = '50%';
message.style.height = 'max-content'
message.style.background = 'transparent';
message.style.borderRadius = '10px'
message.innerHTML = 'You need to fill all fields !';
message.style.top = '-60px';
message.style.left = '40%';
message.style.transform = 'translateX(-50%)';
message.style.display = 'flex';
message.style.justifyContent = 'center';
message.style.alignItems = 'center';
message.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
message.style.fontSize = '22px';
message.style.opacity= '0';
message.style.transition = 'all .4s linear';
message.style.padding = '0 10px'

let finisheinfo = []
if(localStorage.orderdone != null){
    finisheinfo = JSON.parse(localStorage.orderdone)
}else{
    finisheinfo = []
}


function checkinfo(){
    if(full.value != '' && city.value != '' && address.value != '' && phone.value != '' ){
        let finishe ={
            Name:full.value,
            city:city.value,
            address:address.value,
            phone:phone.value,
            order:JSON.parse(localStorage.product)
        }
        finisheinfo.push(finishe)
        localStorage.clear()
        localStorage.setItem('mood',JSON.stringify(dark))
        localStorage.setItem('orderdone',JSON.stringify(finisheinfo));

        full.value =''
        city.value = ''
        address.value = ''
        phone.value = ''
        message.innerHTML = 'thank You , you will get your Order in less than 4 days';
        message.style.opacity= '1';
        message.style.background = 'green';
        setTimeout(function(){message.style.opacity= '0';location.reload(),backstor()},3500)

    }else{
        message.style.opacity= '1';
        message.style.background = 'red';
        setTimeout(function(){message.style.opacity= '0';},2500)
    }
}

