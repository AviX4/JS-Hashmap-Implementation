class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class linked_list{
    constructor(head = null){
        this.head = head;
    }
}

let buffer = 7;
let arr =[] ;
for(let i=0;i<7;i++){
    let h = new Node(-1);
    let l = new linked_list(h);
    arr.push(l);
}

function traverse(){
    arr.forEach(function(item,index){
        let trav = item.head.next;
        let ret = index+ '|';
        while(trav){
            ret += trav.val+'->';
            trav=trav.next;
        }
        console.log(ret);
    })
}

//Modify insertion code to make it cleaner
function insertion(value){
    let idx = value%buffer;
    if(!arr[idx].head.next){
        let lx = new Node(value);
        arr[idx].head.next = lx;
    }else{
        let trav = arr[idx];
        trav = trav.head.next;
        while(trav.next){
            trav = trav.next;
        }
        let lx = new Node(value);
        trav.next = lx;
    }
    return;
}

insertion(10);
insertion(13);
insertion(7);
insertion(14);
traverse();

// let node1 = new Node(2);
// let node2 = new Node(3);
// node1.next = node2;
// let l1 = new linked_list(node1);
// let trav = l1.head;
// while(trav){
//     console.log(trav);
//     trav++;
// // }
// Node { val: 2, next: Node { val: 3, next: null } }
// ^ how a linked list would look like in js