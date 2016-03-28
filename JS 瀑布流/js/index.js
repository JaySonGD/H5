/**
 * Created by czljcb on 16/3/27.
 */


function $(id){
    return typeof  id == 'string' ? document.getElementById(id) : id;
}


window.onload = function(){

     waterFall('flow-body','box');

    window.onscroll = function(){
        if (isLoad()) {

            var dataImg = {'data': [{'src': '0.jpg'}, {'src': '2.jpg'}, {'src': '1.jpg'}, {'src': '5.jpg'}, {'src': '6.jpg'}]};
            for (var i = 0; i < dataImg.data.length; i++) {
                var newBox = document.createElement('div');
                newBox.className = 'box';
                $('flow-body').appendChild(newBox);

                var newPic = document.createElement('div');
                newPic.className = 'pic';
                newBox.appendChild(newPic);

                var newImg = document.createElement('img')
                newImg.src = 'images/' + dataImg.data[i].src;
                console.log(newImg.src);
                newPic.appendChild(newImg);
                    //http://localhost:63342/JS%20%E7%80%91%E5%B8%83%E6%B5%81/images/1.jpg
                    //http://localhost:63342/JS%20%E7%80%91%E5%B8%83%E6%B5%81/imgaes/1.jpg
            }

            waterFall('flow-body', 'box');
        }
    }
}

function waterFall(parent,box){

    var allBox = $(parent).getElementsByClassName(box);

    var boxWidth = allBox[0].offsetWidth;

    var screenWidth = document.body.clientWidth;

    var cols =Math.floor( screenWidth/boxWidth );

    var div = $(parent);
    div.style.width =  boxWidth * cols + "px";
    div.style.margin = "0 auto";

    //$(parent).style.cssText = 'width:' + boxWidth * cols + 'px ; marin : 0 auto;';

    var heightArray = [];

    for(var i = 0 ; i < allBox.length ; i++){

        var boxHeight = allBox[i].offsetHeight;
        if(i < cols){
            heightArray.push(boxHeight);
        }else{
           var minBoxHeight = Math.min.apply(null,heightArray);
           var minIndex = getMinBoxIndex(minBoxHeight,heightArray);

            var minBox = allBox[i];

            minBox.style.position = 'absolute';
            minBox.style.top = minBoxHeight + 'px';
            minBox.style.left = boxWidth * minIndex + 'px';
            heightArray[minIndex] += boxHeight;

        }

    }
}


function getMinBoxIndex(value, arr) {
    for (var i in arr) {
        if (arr[i] == value) {
            return i;
        }
    }
}


function isLoad(){
    var allBox = $('flow-body').getElementsByClassName('box');
    var lastBox = allBox[allBox.length -1];
    var lasBoxDistance = lastBox.offsetTop + Math.floor(lastBox.offsetHeight * 0.5);
    var screenHeight = document.body.clientHeight || document.documentElement.clientHeight;

    var offsetTop = document.body.scrollTop;

    return lasBoxDistance < screenHeight + offsetTop;

}