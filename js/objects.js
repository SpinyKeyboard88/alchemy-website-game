//Events fired on the draggable target (the source element):
//  ondragstart - occurs when the user starts to drag an element
//  ondrag - occurs when an element is being dragged
//  ondragend - occurs when the user has finished dragging the element

//Events fired on the drop target:
//  ondragenter - occurs when the dragged element enters the drop target
//  ondragover - occurs when the dragged element is over the drop target
//  ondragleave - occurs when the dragged element leaves the drop target
//  ondrop - occurs when the dragged element is dropped on the drop target 

function startDrag(event){
    event.dataTransfer.setData("Text", event.target.id);
}

function getInfo(){
    var pText = document.querySelector(".object")
    var text = document.getElementById("changeText");
    text.innerHTML = "NEW TEXT";
}



