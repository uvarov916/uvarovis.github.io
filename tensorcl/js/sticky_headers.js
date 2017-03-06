window.onscroll = function() {
  window.stackHeads();
}

window.stackHeads=function(){
    fixedHeads=document.getElementsByClassName('cell-header');
    for(i=0;i<fixedHeads.length;i++){
        header=fixedHeads[i];
        nextheader=fixedHeads[i+1];
        holder=getPrevElement(header);
        if(window.pageYOffset>findPosY(holder)){
            //if our scroll position in the window is father than the placeholder of the current header's position in the DOM...
            if(typeof nextheader!='undefined'){
                //If this isn't the last header.
                dif=findPosY(nextheader)-window.pageYOffset;
                //the diference between our scroll position and the header's placeholder's position
                if(dif<header.offsetHeight){
                    //if we have less distance between the placeholder of the next element and the top of of the page than the height of the current header, we push the header up so it doesn't overlap.
                    header.style.position="fixed";
                    header.style.top='-'+(header.offsetHeight-dif)+'px';

                }
                else{
                    //if there is another header, but we have room
                    //console.log(header
                    holder.style.height=header.offsetHeight+'px';
                    header.style.position="fixed";
                    header.style.top="0px";
                }

            }

            else{

                holder.style.height=header.offsetHeight+'px';
                //if there isn't another header
                header.style.position="fixed";
                header.style.top="0px";
            }


        }
        else{
            holder.style.height='0px';
            //if we haven't gotten to the header yet
            header.style.position='static';
            header.style.removeProperty('top');
        }

    }
};

// Return the previous element in the DOM
function getPrevElement(el) {
  els = document.getElementsByTagName('*');
  for (var i = 0; i < els.length; i++) {
    if (els[i] == el) {
      return els[i - 1];
    }
  }
  return false;
}

// Return the next element in the DOM
function getNextElement(el) {
  els = document.getElementsByTagName('*');
  for (var i = 0; i < els.length; i++) {
    if (els[i] == el) {
      return els[i + 1];
    }
  }
  return false;
}

function findPosY(obj)
 {
   var curtop = 0;
   if(obj.offsetParent)
       while(1)
       {
         curtop += obj.offsetTop;
         if(!obj.offsetParent)
           break;
         obj = obj.offsetParent;
       }
   else if(obj.y)
       curtop += obj.y;
   return curtop;
 }
