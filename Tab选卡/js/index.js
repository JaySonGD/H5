/**
 * Created by czljcb on 16/3/27.
 */

function $(id){
    return typeof id == 'string' ? document.getElementById(id):id;
}

window.onload = function(){

    var titles = $('tab-header').getElementsByTagName('li');
    var ul = $('tab-body').getElementsByTagName('ul');
    for(var i = 0 ;i<titles.length ;i++){

        var li = titles[i];
        li.id = i;

        li.onmousemove = function(){

            for(var j = 0; j<titles.length;j++){
                titles[j].className = '';
                ul[j].className = '';

            }


            this.className = 'selected';
            ul[this.id].className = 'selected';

            console.log(this.id)
        };
    }

}